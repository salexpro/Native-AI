/* global Cookies, ga */

let ip = '';
$.getJSON('https://ipinfo.io', (data) => {ip = data.ip});

const err_msg = {
    'BLOCKED_EMAIL': 'Please enter a valid Business Email ID'
}

const form_send = ($form) => {
    const form_type = $form.attr('action');
    const data = {
        fields: $((form_type == 'step2') ? '[action="step1"], [action="step2"]' : $form).serializeArray(),
        context: {
            ipAddress: ip,
            hutk: Cookies.get('hubspotutk'),
            pageUri: location.href
        },
        legalConsentOptions: {
            consent: {
                consentToProcess: true,
                text: 'I agree to allow NativeAI to store and process my personal data.',
                // communications: [{
                //     'value': true,
                //     'subscriptionTypeId': 999,
                //     'text': "I agree to receive marketing communications from NativeAI."
                // }]
            }
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
            switch (form_type) {
                case 'demo':
                location.href = '/demo-registration';
                break;
                case 'step1':
                $form.closest('.form_steps').slick('slickNext');
                break;
                case 'step2':
                Cookies.expire('form_email');
                location.href = '/thank-you-for-requesting-a-demo'
                break;
            }
            if(typeof ga === 'function')
                ga('send', 'event', 'get demo form submitted');
        },
        error: xhr => {
            console.log(xhr);
            const errors = xhr.responseJSON.errors;
            if (errors){
                const err_type = errors[0].errorType;
                const message = (typeof err_msg[err_type] != 'undefined') ? err_msg[err_type] : errors[0].message.substr(errors[0].message.indexOf('. ') + 2);
                $('.form_message').text(message);
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
        $('.form_message').text('Please enter a valid Business Email ID')
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

// Phone validation
$('[name="phone"]').inputmask({
    mask: '[a{*}]',
    placeholder: '',
    definitions: {
        'a': {
            validator: '[+()1234567890]',
            cardinality: 1,
        }
    }
});

// Register form carousel
$('.form_steps').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    swipe: false,
    adaptiveHeight: true,
    infinite: false
});