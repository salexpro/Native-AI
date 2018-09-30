/* global Cookies */

let ip = '';
$.getJSON('https://ipinfo.io', (data) => {ip = data.ip});

const form_send = ($form) => {
    const form_type = $form.attr('action');
    const data = {
        fields: $((form_type == 'step2') ? '[action="step1"], [action="step2"]' : $form).serializeArray(),
        context: {
            ipAddress: ip,
            hutk: Cookies.get('hubspotutk'),
            pageUri: location.href
        }
    };
    
    $('.form_message').text('');
    $('input, select, button', $form).prop('disabled', true);

    $.ajax({
        url: 'https://api.hsforms.com/submissions/v3/integration/submit/3048376/ace6b9a8-d58c-490f-8122-2e859a61ce18',
        method: 'POST',
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        success: () => {
            // ga('send', 'event', 'get demo form submitted');
            switch (form_type) {
                case 'demo':
                    location.href = '/register.html';
                    break;
                case 'step1':
                    $form.closest('.form_steps').slick('slickNext');
                    break;
                case 'step2':
                    Cookies.expire('form_email');
                    location.href = '/thank.html'
                    break;
            }
        },
        error: xhr => {
            console.log(xhr);
            const errors = xhr.responseJSON.errors;
            if (errors){
                $('.form_message').text(errors[0].message.substr(errors[0].message.indexOf('. ')+2));
            } else {
                $('.form_message').text('Email sending failure, please try again');
            }
        },
        complete: () => {
            $('input, select, button', $form).prop('disabled', false);
        }
    })
}

const email_check = ($form) => {
    const email = $('[name="email"]', $form).val();
    const email_container = $('[name="email"]', $form).closest('.form_input');
    if (email_validate(email)){
        email_container.addClass('form_input--completed');
    } else {
        email_container.removeClass('form_input--completed');
    }
}

const email_validate = (email) => {
    const regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return email ? regex.test(email) : false;
}

const form_validate = ($form) => {
    const email = $('[name="email"]', $form).val();
    if (email_validate(email)) {
        $('.form_message', $form).text('');
        Cookies.set('form_email', email);
        form_send($form);
    } else {
        $('.form_message').text('Please enter a valid email address')
    }
}

$('[name="email"]').keyup(function () {
    const $form = $(this).closest('form');
    email_check($form);
})

$('form[action="demo"], form[action="step1"]').submit(function (e) {
    e.preventDefault();
    form_validate($(this));
});

$('form[action="step2"]').submit(function (e) {
    e.preventDefault();
    form_send($(this));
});

if ($('form[action="step1"]').length){
    const form_email = Cookies.get('form_email');
    if (form_email){
        $('form[action="step1"] [name="email"]').val(form_email);
        email_check($('form[action="step1"]'));
    }
}

// Register form carousel
$('.form_steps').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    swipe: false,
    adaptiveHeight: true,
    infinite: false
});