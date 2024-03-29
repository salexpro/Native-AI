// @codekit-prepend quiet '../../node_modules/d3/d3.js'

/**
 * Core library for web projects
 * @namespace News360
 */

/**
 * Creates namespaces from dot-separated string
 *
 * @global
 * @param {string} ns_string - dot-separated string that represents nested namespaces
 * @return {Window}
 */
window.ns360 = function (ns_string) {
    var p = ns_string.split('.'),
        parent = window;
    for (var i = 0, len = p.length; i < len; ++i) {
        var path = p[i];
        parent[path] = parent[path] || {};
        parent = parent[path];
    }
    return parent;
};

/**
 * Inherits child from parent with specified methods
 *
 * @memberOf News360
 * @param {object} child - child class
 * @param {object} parent - base class
 * @param {object} methods - methods to extend or override the base class
 */
ns360("News360").extend = function (child, parent, methods) {
    var childPrototype = child.prototype;
    var parentPrototype = parent.prototype;
    for (var k in parentPrototype) {
        if (methods[k]) {
            childPrototype[k] = methods[k];
            delete methods[k];
        } else {
            childPrototype[k] = parentPrototype[k];
        }
    }
    for (var k in methods) {
        childPrototype[k] = methods[k];
    }
    child.superclass = parentPrototype;
    child.superclass.constructor = parent;
};

ns360("News360").KeyCode = {
    ENTER: 13
};

ns360("News360").NodeType = {
    ELEMENT: 1,
    TEXT: 3,
    COMMENT: 8
};

ns360("News360").getAndroidVersion = function () {
    var result;
    var userAgent = navigator.userAgent.toLowerCase();
    var match = userAgent.match(/^[\S\s]*android\s([0-9\.]*)[\S\s]*$/);
    if (match) {
        result = parseFloat(match[1]);
    }
    return result;
};

//Solution from http://detectmobilebrowsers.com/
ns360("News360").isMobile = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

ns360("News360").isIOSDevice = function () {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    return iOS;
};

ns360("News360").isTouchDevice = function () {
    return (('ontouchstart' in window) ||
        (navigator.MaxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
};

ns360("News360").getMaxUrlLength = function () {
    return 2000;
};

ns360("News360").sleep = function (sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
};

ns360("News360").doNotTrack = function () {
    var result = !!(navigator.doNotTrack == 'yes' || navigator.doNotTrack == "1" || navigator.msDoNotTrack == "1" || window.doNotTrack == "1");
    return result;
};

ns360("News360").getTopLevelDomain = function (host) {
    var result;
    if (host) {
        var index = host.lastIndexOf(":");
        if (index >= 0) {
            host = host.substring(0, index);
        }
        var parts = host.split(".");
        while (parts.length > 3) {
            parts.shift();
        }
        // case for *.co.za and similar domains
        if (parts.length === 3 && (parts[1].length > 2 || parts[2].length > 2)) {
            parts.shift();
        }
        result = parts.join(".");
    }
    return result;
};

// --- Polyfill section ---

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}

// ------------------------
ns360("News360").PureJS = {

    html: function (element, value) {
        if (value !== undefined) {
            element.innerHTML = value;
        } else {
            return element.innerHTML;
        }
    }

};

ns360('News360').CookieStorage = function (sessionOnly) {
    this.sessionOnly = sessionOnly;
};

News360.CookieStorage.prototype.setCookie = function (key, value, expireDate, domain) {
    var cookie = key + "=" + value;
    if (expireDate != null) {
        cookie += "; expires=" + new Date(expireDate).toUTCString();
    }
    cookie += "; path=/";
    if (domain) {
        cookie += "; domain=" + domain;
    }
    document.cookie = cookie;
};

News360.CookieStorage.prototype.setItem = function (key, value, domain) {
    var expireDate = this.sessionOnly ? null : Date.now() + (3650 * 24 * 60 * 60 * 1000); //ten years
    this.setCookie(key, value, expireDate, domain);
};

News360.CookieStorage.prototype.getItem = function (key) {
    var name = key + "=";
    var cookies = document.cookie.split(';');
    var result = null;
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            result = cookie.substring(name.length, cookie.length);
            break;
        }
    }
    return result;
};

News360.CookieStorage.prototype.removeItem = function (key, domain) {
    this.setCookie(key, "", 0, domain);
};

ns360('News360').AppStorage = function () {
    this.cache = {};
    //try-catch for disabled cookies
    try {
        this.sessionStorage = sessionStorage;
    } catch (ex) {}
    //try-catch for IE headless mode support (needed for testing)
    try {
        this.localStorage = localStorage;
    } catch (ex) {}
    //Backwards compatibility
    if (!this.sessionStorage) {
        this.sessionStorage = new News360.CookieStorage(true);
    }
    if (!this.localStorage) {
        this.localStorage = new News360.CookieStorage(false);
    }
};

News360.AppStorage.prototype.cacheValue = function (key, value) {
    this.cache[key] = value;
};

News360.AppStorage.prototype.getCachedValue = function (key) {
    return this.cache[key];
};

News360.AppStorage.prototype.clearCachedValue = function (key) {
    delete this.cache[key];
};

/**
 * @deprecated use setSessionValue and setPersistentValue instead
 */
News360.AppStorage.prototype.setValue = function (key, value, sessionOnly) {
    if (sessionOnly) {
        this.setSessionValue(key, value);
    } else {
        this.setPersistentValue(key, value)
    }
};

News360.AppStorage.prototype.setSessionValue = function (key, value) {
    this.cacheValue(key, value);
    //exception can occur if storageSize is exceeded or too small (ex. private mode, etc)
    try {
        this.sessionStorage.setItem(key, value);
    } catch (ex) {}
};

News360.AppStorage.prototype.setPersistentValue = function (key, value) {
    this.cacheValue(key, value);
    //exception can occur if storageSize is exceeded or too small (ex. private mode, etc)
    try {
        this.localStorage.setItem(key, value);
    } catch (ex) {}
};

News360.AppStorage.prototype.getValue = function (key) {
    var value = this.getCachedValue(key);
    if (value === undefined) {
        value = this.getSessionValue(key) || this.getPersistentValue(key);
        if (value !== undefined) {
            this.cacheValue(key, value);
        }
    }
    return value;
};

News360.AppStorage.prototype.getSessionValue = function (key) {
    return this.sessionStorage.getItem(key);
};

News360.AppStorage.prototype.getPersistentValue = function (key) {
    return this.localStorage.getItem(key);
};

News360.AppStorage.prototype.clearValue = function (key) {
    this.clearCachedValue(key);
    this.sessionStorage.removeItem(key);
    this.localStorage.removeItem(key);
};

ns360("News360").TextUtils = (function () {
    var measuringDiv;

    function cropLines(words, div, width, maxLines) {
        var word,
            line = [],
            lines = [];
        while (word = words.pop()) {
            line.push(word);
            News360.PureJS.html(div, line.join(" "));
            if (div.offsetWidth > width) {
                line.pop();
                if (line.length) {
                    lines.push(line.join(" "));
                    words.push(word);
                } else {
                    var splitIndex = getWordSplitIndex(word, div, width);
                    if (splitIndex) {
                        lines.push(word.substring(0, splitIndex));
                        words.push(word.substring(splitIndex));
                    }
                }
                line = [];
                if (maxLines > 0 && lines.length >= maxLines) {
                    break;
                }
            }
        }
        if (line.length) {
            lines.push(line.join(" "));
        }
        return lines;
    }

    function getWordSplitIndex(word, div, width) {
        var minIndex = 0;
        var maxIndex = word.length - 2;
        var stepCount = maxIndex - minIndex;
        var index = getMiddleValue(minIndex, maxIndex, true);
        //using 'for loop' to avoid endless loop
        for (var i = 0; i < stepCount && index > 0; i++) {
            News360.PureJS.html(div, word.substring(0, index));
            var nextIndex;
            if (div.offsetWidth <= width) {
                minIndex = index;
                nextIndex = getMiddleValue(minIndex, maxIndex, true);
            } else {
                maxIndex = index;
                nextIndex = getMiddleValue(minIndex, maxIndex, false);
            }

            if (index == nextIndex) {
                break;
            } else {
                index = nextIndex;
            }
        }
        return index;
    }

    function getMiddleValue(minValue, maxValue, roundUp) {
        var value = (maxValue + minValue) / 2;
        return roundUp ? Math.ceil(value) : Math.floor(value);
    }

    function ensureMeasuringDiv() {
        if (!measuringDiv) {
            measuringDiv = document.createElement("div");
            measuringDiv.style.position = 'absolute';
            measuringDiv.style.whiteSpace = 'nowrap';
            measuringDiv.style.float = 'left';
            measuringDiv.style.visibility = 'hidden';
        }
    }

    function hashCode(text) {
        var hash = 0,
            i, chr, len;
        if (!text || text.length === 0) return hash;
        for (i = 0, len = text.length; i < len; i++) {
            chr = text.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };

    return {
        splitToLines: function (text, fontSize, width, maxLines) {
            var words;
            if (typeof text == "string") {
                words = text.split(/\s+/);
            } else {
                words = [].concat(text);
            }
            words.reverse();
            ensureMeasuringDiv();
            measuringDiv.style.fontSize = fontSize;
            document.body.appendChild(measuringDiv);
            var lines = cropLines(words, measuringDiv, width, maxLines);
            document.body.removeChild(measuringDiv);
            return lines;
        },

        textWidth: function (text, fontSize) {
            ensureMeasuringDiv();
            measuringDiv.style.fontSize = fontSize;
            document.body.appendChild(measuringDiv);
            News360.PureJS.html(measuringDiv, text);
            var result = measuringDiv.offsetWidth;
            document.body.removeChild(measuringDiv);
            return result;
        },

        fitsWidth: function (text, fontSize, width) {
            var result = this.textWidth(text, fontSize) <= width;
            return result;
        },

        hashCode: function (text) {
            return hashCode(text);
        }
    }
})();


ns360('News360.Analytics').Config = {
    debug: true,
    gaApiKey: "UA-70795408-2",
    ymApiKey: "46509438",
    fsApiKey: "8GWAM",
    applicationId: "FF382C7C-E8CF-4083-B71B-8BF285C32760",
    intercomAppId: "ts0276y3",
    isNativeAI: true,
    githash: "9806c404",
    dateFormat: "L",
    pagerDutyRoutingKey: "",
    pagerDutyWarningThreshold: 90000,
    supervisorMenuEnabled: true
}

ns360('News360.Analytics').ReportTreemap = function (container) {

    var that;

    var svg;
    var x, y, xWithPadding, yWithPadding;
    var textPadding;
    var textLineHeight = 1.25;
    var transitioning;

    var navigationPath;
    var navigationCallback;
    var hoverChangeCallback;
    var currentDisplayedTopic;

    var showParentEnabled;

    function clearTreemap() {
        d3.select(container[0]).select("svg").remove();
        svg = null;
    }

    function reinitializeViewState(width, height) {
        textPadding = Math.min(parseInt(width * 0.012), 10);
        var innerLevelPadding = getInnerLevelBorder();

        x = d3.scale.linear().domain([0, width]).range([0, width]);
        xWithPadding = d3.scale.linear().domain([0, width]).range([innerLevelPadding, width - innerLevelPadding]);
        y = d3.scale.linear().domain([0, height]).range([0, height]);
        yWithPadding = d3.scale.linear().domain([0, height]).range([innerLevelPadding, height - innerLevelPadding]);

        svg = d3.select(container[0]).append("svg")
            .attr("viewBox", "0 0 " + width + " " + height)
            .append("g")
            .attr("width", width)
            .attr("height", height)
            .classed("root", true);
        svg.append("rect").attr("class", "border depth").datum({
            depth: 1000
        }).call(drawBorder);
        svg.append("rect").attr("class", "border-stroke depth").datum({
            depth: 1001
        }).call(drawBorderStroke);
    }

    function getInnerLevelBorder() {
        return 2 * textPadding;
    }

    function createTreemapLayout(width, height) {
        var ratio = Math.min(width, height) / Math.max(width, height);
        ratio = Math.min(Math.max(0.5, ratio), 0.7);
        var treemap = d3.layout.treemap()
            .children(function (topic, depth) {
                return depth ? null : topic._children;
            })
            .sort(function (topic1, topic2) {
                return topic1.value - topic2.value;
            })
            .ratio(ratio * 0.5 * (1 + Math.sqrt(5)))
            .round(false);
        return treemap;
    }

    function accumulateWeights(topic, parentWeight) {
        var children = topic.topics;
        if (children && children.length > 0) {
            topic._children = children;
            clearTopicsFromTrash(children);
            var weightSum = getTopicWeightSum(children);
            setTopicRelativeWeights(children, weightSum);
            var tileWeight = getTreemapTileWeight(topic, weightSum);
            var childrenWeight = tileWeight * parentWeight;
            topic.value = children.reduce(function (previousValue, value) {
                var weight = accumulateWeights(value, childrenWeight);
                return previousValue + weight;
            }, 0);
            // !!! Topics weights redistribution !!!
            var hasParentRect = weightSum < 100;
            weightSum = redistributeTopicsValues(children, childrenWeight, weightSum);
            if (hasParentRect) {
                weightSum = Math.min(95, Math.max(weightSum, 4 * children.length));
            }
            // -------------------------------------
            topic.weightSum = weightSum;
        } else {
            topic.value = topic.weight * parentWeight;
        }
        return topic.value;
    }

    function clearTopicsFromTrash(topics) {
        var weightSum = getTopicWeightSum(topics);
        var weightThreshold = 0.01;
        for (var i = topics.length - 1; i >= 0; i--) {
            var topic = topics[i];
            if (topic.weight / weightSum < weightThreshold) {
                topics.splice(i, 1);
            }
        }
    }

    function redistributeTopicsValues(topics, childrenWeight, initialWeightSum) {
        var divider = Math.max(1, topics.length - 1);
        var minDisplayedTopicWeight = 7.0 / divider;

        var topicsToReduce = [];
        var topicsToIncreaseCount = 0;
        for (var i = 0; i < topics.length; i++) {
            var topic = topics[i];
            var weight = Math.min(topic.weight, topic.relativeWeight);
            var weightDiff = minDisplayedTopicWeight - weight;
            if (weightDiff > 0) {
                topic.value += weightDiff * childrenWeight;
                topicsToIncreaseCount++;
            } else {
                topicsToReduce.push(topic);
            }
        }
        var topicsToReduceCount = topicsToReduce.length;
        var increaseSum = topicsToIncreaseCount * minDisplayedTopicWeight;
        var maxWeightSum = (initialWeightSum < 100 ? 95 : initialWeightSum) - increaseSum;
        var topicsToReduceSum = getTopicWeightSum(topicsToReduce);
        var reduce = (maxWeightSum - topicsToReduceSum) / topicsToReduceCount;
        var newSum = topicsToReduceSum + increaseSum;
        reduce = Math.min(reduce, minDisplayedTopicWeight);
        for (i = 0; i < topicsToReduce.length; i++) {
            topic = topicsToReduce[i];
            topic.value += reduce * childrenWeight;
            newSum += reduce;
        }
        return newSum;
    }

    function getTopicWeightSum(topics) {
        var weightSum = topics.reduce(function (previousValue, value) {
            return previousValue + value.weight;
        }, 0);
        return weightSum;
    }

    function getTreemapTileWeight(topic, weightSum) {
        var weight = weightSum > 0 ? (topic.weight / weightSum) : 0;
        return weight;
    }

    function setTopicRelativeWeights(topics, weightSum) {
        for (var i = 0; i < topics.length; i++) {
            var topic = topics[i];
            var weight = weightSum > 0 ? (topic.weight / weightSum) : 0;
            topic.relativeWeight = weight * 100;
        }
    }

    function initializeRoot(root, width, height) {
        root.x = root.y = 0;
        root.dx = width;
        root.dy = height;
        root.depth = 0;
    }

    function layoutTreemap(treemap, root) {
        if (root._children) {
            treemap.nodes({
                _children: root._children
            });
            root._children.forEach(function (child) {
                child.x = root.x + child.x * root.dx;
                child.y = root.y + child.y * root.dy;
                child.dx *= root.dx;
                child.dy *= root.dy;
                child.parent = root;
                child.depth = root.depth + 1;
                layoutTreemap(treemap, child);
            });
        }
    }

    function getTileColor(topic) {
        while (topic && !topic.color) {
            topic = topic.parent;
        }
        return topic ? topic.color : null;
    }

    function getChildOpacity(topic) {
        var opacity;
        if (topic.color) {
            opacity = typeof topic.opacity === "number" ? topic.opacity : 1.0;
        } else {
            var step = 0.8 / topic.parent._children.length;
            opacity = Math.max(0.2, 1 - step * indexOf(topic, true));
        }
        return opacity;
    }

    function buildTreemap(topic, shouldDrawText) {
        //create g structure
        var rootG = svg.insert("g").datum(topic).attr("class", "depth");
        var childrenG = buildTreemapChildrenNodes(rootG, topic._children);
        buildTreemapChildrenRects(childrenG, topic);
        buildTreemapChildrenLabels(childrenG, shouldDrawText);
        buildTreemapShowParentRect(rootG, topic);

        return rootG;
    }

    function buildTreemapChildrenNodes(rootNode, topicChildren) {
        var childrenG = rootNode.selectAll("g").data(topicChildren).enter().append("g");
        //set up children g nodes
        childrenG.filter(function (topic) {
            return topic._children;
        });
        childrenG.classed("children", true);
        childrenG.classed("next-level", function (childTopic) {
            return childTopic._children;
        });
        childrenG.on("click", function (targetTopic) {
            that.onTopicClick(targetTopic);
        });
        childrenG.on("mouseenter", function (targetTopic) {
            (typeof hoverChangeCallback === 'function') && hoverChangeCallback(this, targetTopic, true);
        });
        childrenG.on("mouseleave", function (targetTopic) {
            (typeof hoverChangeCallback === 'function') && hoverChangeCallback(this, targetTopic, false);
        });
        return childrenG;
    }

    function buildTreemapChildrenRects(childrenNodes, rootTopic) {
        //draw parent rect
        var parentRect = childrenNodes.append("rect").attr("class", "parent");
        parentRect.style("fill", getTileColor);
        parentRect.style("fill-opacity", function (childTopic) {
            var topicForColor = childTopic.parent == rootTopic ? childTopic : childTopic.parent;
            var opacity = getChildOpacity(topicForColor);
            return opacity;
        });
        parentRect.call(drawRect);
        //draw children rects
        var childrenRects = childrenNodes.selectAll(".child")
            .data(function (childTopic) {
                return childTopic._children || [childTopic];
            })
            .enter().append("rect");
        childrenRects.attr("class", "child");
        childrenRects.call(drawRect);
        //draw hover rect
        childrenNodes.append("rect").attr("class", "foreground").call(drawRect);
    }

    function buildTreemapChildrenLabels(childrenNodes, shouldDrawText) {
        //draw text if needed
        var textElements = childrenNodes.append("text");
        if (shouldDrawText) {
            textElements.call(drawText);
        }
    }

    function buildTreemapShowParentRect(rootNode, topic) {
        var showParentG = rootNode.append("g").datum(topic);
        //set up children g nodes
        showParentG.classed("children show-parent-topic", true);
        showParentG.on("click", function (targetTopic) {
            onShowParentClick(targetTopic);
        });
        var rectData = createParentTopicRectData(topic, 0);
        var showTopicRect = showParentG.append("rect").attr("class", "show-parent-topic");
        var showTopicRectForeground = showParentG.append("rect").attr("class", "foreground");
        showTopicRect.datum(rectData).call(drawRect);
        showTopicRectForeground.datum(rectData).call(drawRect);
    }

    function onShowParentClick(parent) {
        if (showParentEnabled) {
            var fakeTopic = createFakeChildTopic(parent);
            that.onTopicClick(fakeTopic);
        }
    }

    function createFakeChildTopic(parent) {
        var fakeTopic = $.extend({}, parent);
        delete fakeTopic._children;
        delete fakeTopic.$$hashKey;
        delete fakeTopic.topics;
        fakeTopic.parent = parent;
        return fakeTopic;
    }

    function createParentTopicRectData(topic, heightFraction) {
        var rectData = {
            x: topic.x,
            y: topic.y + topic.dy * (1 - heightFraction),
            dx: topic.dx,
            dy: topic.dy * heightFraction
        };
        return rectData;
    }

    function updateNavigation(targetTopic) {
        var lastTopic = navigationPath[navigationPath.length - 1];
        if (targetTopic != lastTopic) {
            var index = navigationPath.indexOf(targetTopic);
            if (index >= 0) {
                navigationPath = navigationPath.slice(0, index + 1);
            } else {
                if (that.isLeafTopic(lastTopic)) {
                    navigationPath.pop();
                    lastTopic = lastTopic.parent;
                }
                var newPath = getPathToTopic(lastTopic, targetTopic);
                navigationPath = navigationPath.concat(newPath);
            }
            if (navigationCallback) {
                navigationCallback(targetTopic);
            }
        }
    }

    function getPathToTopic(fromTopic, toTopic) {
        var path = [toTopic];
        while (toTopic.parent && toTopic.parent != fromTopic) {
            path.unshift(toTopic.parent);
            toTopic = toTopic.parent;
        }
        return path;
    }

    function getTopicHoverOpacity(rootG, targetTopic) {
        var result;
        var children = rootG.selectAll(".children")[0][indexOf(targetTopic, false)];
        var foreground = d3.select(children).selectAll("rect.foreground");
        if (foreground.length) {
            result = foreground.style("fill-opacity");
        }
        return result;
    }

    function applyTransition(targetTopic, currentRootG, animated) {
        if (transitioning || !targetTopic) return;

        var newDisplayedTopic = that.isLeafTopic(targetTopic) ? targetTopic.parent : targetTopic;
        var isZoomingIn = targetTopic.value <= currentDisplayedTopic.value;
        svg.selectAll("g.show-parent-topic").remove();
        var newRootG;
        if (isZoomingIn) {
            drawInTopicContext(currentDisplayedTopic, function () {
                newRootG = buildTreemap(newDisplayedTopic, false);
            });

            var fillOpacity = getTopicHoverOpacity(currentRootG, newDisplayedTopic);
            if (fillOpacity) {
                newRootG.selectAll(".depth rect.foreground").style("fill-opacity", fillOpacity);
            }

        } else {
            newRootG = buildTreemap(newDisplayedTopic, false);
        }
        onTransitionStart(newDisplayedTopic);

        //Create transition
        var duration = animated ? 750 : 0;
        var hideTransition = currentRootG.transition().duration(duration);
        var showTransition = newRootG.transition().duration(duration);
        var borderTransition = svg.select(".border").transition().duration(duration);
        var borderStrokeTransition = svg.select(".border-stroke").transition().duration(duration);

        prepareTreemapForTransition(currentRootG, newDisplayedTopic);

        // Transition to the new view.
        var parentG = hideTransition.selectAll("g").filter(function (topic) {
            return topic == newDisplayedTopic;
        });
        parentG.select("rect.parent").style("fill-opacity", 0);

        if (isZoomingIn) {
            hideTransition.selectAll("rect").call(drawRect);
            drawInTopicContext(newDisplayedTopic, function () {
                showTransition.selectAll(".depth rect").call(drawRect);
            });
            showTransition.selectAll(".depth rect.foreground").style("fill-opacity", 0);
        } else {
            drawInTopicContext(newDisplayedTopic, function () {
                hideTransition.selectAll("rect").call(drawRect);
                showTransition.selectAll(".depth rect").call(drawRect);
            });
        }
        drawShowParentTopicRect(newDisplayedTopic, showTransition);
        borderTransition.call(drawBorder);
        borderStrokeTransition.call(drawBorderStroke);

        // Remove the old node when the transition is finished.
        hideTransition.remove().each("end", function () {
            onTransitionEnd(newRootG, newDisplayedTopic, targetTopic);
            setTimeout(function () {
                newRootG.selectAll("rect.foreground").style("fill-opacity", null);
            }, 0);
        });
    }

    function onTransitionStart(targetTopic) {
        transitioning = true;
        currentDisplayedTopic = targetTopic;
        // Enable anti-aliasing during the transition.
        svg.classed("animation", true);
        // Draw child nodes on top of parent nodes.
        sortTreemapByDepth();

        var color = getTileColor(targetTopic);
        if (color) {
            svg.select(".border")
                .style("stroke", color)
                .style("stroke-opacity", targetTopic.opacity || 1.0);
        }
    }

    function sortTreemapByDepth() {
        svg.selectAll(".depth").sort(function (a, b) {
            return a.depth - b.depth;
        });
    }

    function prepareTreemapForTransition(rootNode, targetTopic) {
        // Update the domain only after entering new elements.
        x.domain([targetTopic.x, targetTopic.x + targetTopic.dx]);
        xWithPadding.domain([targetTopic.x, targetTopic.x + targetTopic.dx]);
        y.domain([targetTopic.y, targetTopic.y + targetTopic.dy]);
        yWithPadding.domain([targetTopic.y, targetTopic.y + targetTopic.dy]);

        // Hide text during transition
        rootNode.selectAll("text").style("fill-opacity", 0);
        if (targetTopic.parent) {
            var children = rootNode.selectAll(".children")[0][indexOf(targetTopic, false)];
            d3.select(children).selectAll("rect.child").style("fill", "none");
        } else {
            rootNode.selectAll("rect.child").style("fill", "none");
        }
    }

    function onTransitionEnd(newRootG, newDisplayedTopic, targetTopic) {
        svg.classed("animation", false);
        transitioning = false;
        updateNavigation(targetTopic);
        drawInTopicContext(newDisplayedTopic, function () {
            newRootG.selectAll("text").call(drawText).style("fill-opacity", 1);
        });
    }

    function drawShowParentTopicRect(topic, transition) {
        var heightFraction = 1 - getTopicYSizeMultiplier(topic);
        var rectData = createParentTopicRectData(topic, heightFraction);
        var showParentTopicRects = transition.select("g.show-parent-topic").selectAll("rect");
        showParentTopicRects.attr("x", getTopicRectX(rectData))
            .attr("y", getTopicRectY(rectData))
            .attr("width", getTopicRectWidth(rectData))
            .attr("height", getTopicRectHeight(rectData));
    }

    function drawInTopicContext(topic, callback) {
        var multiplier = getTopicYSizeMultiplier(topic);
        var yStart = y(topic.y);
        var yEnd = y(topic.y + topic.dy);
        var yWithPaddingStart = yWithPadding(topic.y);
        var yWithPaddingEnd = yWithPadding(topic.y + topic.dy);
        y.range([yStart, yStart + (yEnd - yStart) * multiplier]);
        yWithPadding.range([yWithPaddingStart, yWithPaddingStart + (yWithPaddingEnd - yWithPaddingStart) * multiplier]);
        callback();
        y.range([yStart, yEnd]);
        yWithPadding.range([yWithPaddingStart, yWithPaddingEnd]);
    }

    function drawText(text) {
        text.empty();
        text.text(function (topic) {
                return topic.name;
            })
            .attr("weight", function (topic) {
                return topic.weight;
            })
            .attr("filteredWeightDiff", function (topic) {
                return topic.filteredWeightDiff;
            })
            .attr("relativeWeight", function (topic) {
                return topic.relativeWeight;
            })
            .attr("x", function (topic) {
                return getTopicRectX(topic) + textPadding;
            })
            .attr("y", function (topic) {
                return (getTopicRectY(topic) + textPadding / textLineHeight);
            })
            .attr("width", function (topic) {
                return getTopicRectWidth(topic) - 2 * textPadding;
            })
            .attr("height", function (topic) {
                return (getTopicRectHeight(topic) - 2 * textPadding / textLineHeight);
            })
            .call(drawTextLines);
    }

    function drawRect(rect) {
        rect.attr("x", function (topic) {
                return getTopicRectX(topic);
            })
            .attr("y", function (topic) {
                return getTopicRectY(topic);
            })
            .attr("width", function (topic) {
                return getTopicRectWidth(topic);
            })
            .attr("height", function (topic) {
                return getTopicRectHeight(topic);
            })
    }

    function shouldDrawBorder() {
        return !!currentDisplayedTopic.parent;
    }

    function getCurrentLevelBorderWidth() {
        var borderWidth = shouldDrawBorder() ? getInnerLevelBorder() : 0;
        return borderWidth;
    }

    function drawBorder(rect) {
        var borderWidth = getCurrentLevelBorderWidth();
        var offset = borderWidth / 2;
        drawBorderWithOffset(rect, offset);
        rect.style("stroke-width", borderWidth + "px");
    }

    function drawBorderStroke(rect) {
        var borderWidth = getCurrentLevelBorderWidth();
        var offset = borderWidth + 1;
        drawBorderWithOffset(rect, offset);
    }

    function drawBorderWithOffset(rect, offset) {
        rect.attr("x", offset)
            .attr("y", offset)
            .attr("width", svg.attr("width") - 2 * offset)
            .attr("height", svg.attr("height") - 2 * offset)
    }

    function getTopicXScale(topic) {
        var scale;
        if (shouldDrawBorder()) {
            scale = xWithPadding;
        } else {
            scale = x;
        }
        return scale;
    }

    function getTopicYScale(topic) {
        var scale;
        if (shouldDrawBorder()) {
            scale = yWithPadding;
        } else {
            scale = y;
        }
        return scale;
    }

    function getTopicYSizeMultiplier(topic) {
        var result = 1;
        if (topic.parent) {
            result = Math.min(topic.weightSum / 100, 1);
        }
        return result;
    }

    function getTopicRectX(topic) {
        var scale = getTopicXScale(topic);
        var x = scale(topic.x);
        return x;
    }

    function getTopicRectY(topic) {
        var scale = getTopicYScale(topic);
        var y = scale(topic.y);
        return y;
    }

    function getTopicRectWidth(topic) {
        var scale = getTopicXScale(topic);
        return scale(topic.x + topic.dx) - scale(topic.x);
    }

    function getTopicRectHeight(topic) {
        var scale = getTopicYScale(topic);
        return scale(topic.y + topic.dy) - scale(topic.y);
    }

    function indexOf(topic, reverted) {
        var children = topic.parent._children;
        var index = children.indexOf(topic);
        if (reverted) {
            index = children.length - 1 - index;
        }
        return index;
    }

    function calculateTextLayout(textNode) {
        var text = d3.select(textNode);
        var width = text.attr("width");
        var height = text.attr("height");
        //var weightString = parseFloat(text.attr("relativeWeight")).toFixed(1) + "%";
        //weightString += " - " + parseFloat(text.attr("weight")).toFixed(1) + "%";

        var weightString = Math.max(parseFloat(text.attr("weight")), 0.1).toFixed(1) + "%";
        var filteredWeightDiff = parseFloat(text.attr("filteredWeightDiff"));
        if (!isNaN(filteredWeightDiff) && Math.abs(filteredWeightDiff) >= 0.1) {
            var sign = filteredWeightDiff > 0 ? "+" : "";
            var spanClass = filteredWeightDiff > 0 ? "increase" : "decrease";
            weightString += "<tspan class='difference " + spanClass + "'> (" + sign + filteredWeightDiff.toFixed(1) + "%)</tspan>";
        }

        var maxFontSize = calculateMaxFontSize(weightString, width);

        var lines = splitTextToLines(text, width, height, maxFontSize);

        lines.push(weightString);
        return lines;
    }

    function calculateMaxFontSize(text, width) {
        var maxTextSize = 18;
        var minTextSize = 10;
        for (var textSize = maxTextSize; textSize >= minTextSize; textSize--) {
            if (News360.TextUtils.fitsWidth(text, textSize + 'px', width)) {
                break;
            }
        }
        return textSize;
    }

    function splitTextToLines(text, width, height, maxTextSize) {
        maxTextSize = maxTextSize || 18;
        var minTextSize = 8;
        var words = text.text().split(/\s+/);
        var lines = getTextLines(words, width, height, minTextSize, maxTextSize, true);
        return lines;
    }

    function getTextLines(words, width, height, minTextSize, maxTextSize, roundUp) {
        var textSize = getMiddleValue(minTextSize, maxTextSize, roundUp);
        var lines = News360.TextUtils.splitToLines(words, textSize + 'px', width);
        var lineHeight = textSize * textLineHeight;
        var maxLines = parseInt(height / lineHeight) - 1;
        var increaseTextSize = lines.length <= maxLines && lines.length <= words.length;
        //finish if textSize is exact or looping around 1
        var isFinalMeasure = maxTextSize == minTextSize;
        isFinalMeasure |= (maxTextSize - minTextSize == 1) && !roundUp && increaseTextSize;
        if (!isFinalMeasure) {
            if (increaseTextSize) {
                lines = getTextLines(words, width, height, textSize, maxTextSize, true);
            } else {
                lines = getTextLines(words, width, height, minTextSize, textSize, false);
            }
        } else {
            lines = ellipsizeTextLines(lines, maxLines);
            lines.textSize = textSize;
        }
        return lines;
    }

    function ellipsizeTextLines(lines, maxLines) {
        maxLines = Math.max(maxLines, 1);
        if (lines.length > maxLines) {
            lines = lines.slice(0, maxLines);
            lines[maxLines - 1] = lines[maxLines - 1] + "...";
        }
        return lines;
    }

    function getMiddleValue(minValue, maxValue, roundUp) {
        var value = (maxValue + minValue) / 2;
        return roundUp ? Math.ceil(value) : Math.floor(value);
    }

    function drawTextLines(text) {
        text.each(function () {
            var text = d3.select(this),
                lineNumber = 0,
                x = text.attr("x"),
                y = text.attr("y"),
                width = text.attr("width"),
                height = text.attr("height");

            var textLayout = calculateTextLayout(this);
            var fontSize = textLayout.textSize + "px";

            var yCorrection = (textLayout.textSize * textLayout.length * textLineHeight - height) / 2;
            yCorrection = Math.min(textPadding, Math.max(0, yCorrection));
            y -= yCorrection;

            var tspan = text.text(null).style("font-size", fontSize).append("tspan").attr("x", x).attr("y", y).attr("dy", "1em");
            for (var i = 0; i < textLayout.length; i++) {
                tspan.html(textLayout[i]);
                tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", (++lineNumber * textLineHeight + 1) + "em");
            }
        });
    }

    function willNavigationChangeDepth(fromTopic, toTopic) {
        var result = true;
        if (that.isLeafTopic(toTopic) && toTopic.parent == fromTopic) {
            result = false;
        } else if (that.isLeafTopic(fromTopic) && fromTopic.parent == toTopic) {
            result = false;
        } else if (that.isLeafTopic(fromTopic) && that.isLeafTopic(toTopic) && fromTopic.parent == toTopic.parent) {
            result = false;
        }
        return result;
    }

    that = {

        onTopicClick: function (topic) {
            this.navigateToTopic(topic);
        },

        navigateToTopic: function (topic, instant) {
            if (svg) {
                var navigationPath = this.getNavigationPath();
                var lastTopic = navigationPath[navigationPath.length - 1];
                if (lastTopic != topic) {
                    if (willNavigationChangeDepth(lastTopic, topic)) {
                        applyTransition(topic, svg.select("g.depth"), !instant);
                    } else {
                        updateNavigation(topic);
                    }
                }
            }
        },

        isLeafTopic: function (topic) {
            return topic.parent && (!topic._children || topic._children.length === 0);
        },

        getNavigationPath: function () {
            return navigationPath;
        },

        setNavigationCallback: function (callback) {
            navigationCallback = callback;
        },

        setHoverChangeCallback: function (callback) {
            hoverChangeCallback = callback;
        },

        setShowParentEnabled: function (isEnabled) {
            showParentEnabled = isEnabled;
        },

        isTransitioning: function () {
            return transitioning;
        },

        updateContainer: function (newContainer) {
            var currentSvg = $(d3.select(container[0]).select("svg")[0]).detach();
            container = newContainer;
            currentSvg.appendTo(container);
        },

        update: function (root) {
            if (root) {
                navigationPath = [root];
                accumulateWeights(root, 1.0);
            } else {
                navigationPath = null;
            }
            this.redraw();
        },

        redraw: function () {
            clearTreemap();
            var navigationPath = this.getNavigationPath();
            var root = navigationPath ? navigationPath[0] : null;
            var width = container.width();
            var height = container.height();
            if (root && root.topics.length && width > 0 && height > 0) {
                currentDisplayedTopic = root;
                reinitializeViewState(width, height);
                initializeRoot(root, width, height);
                var treemap = createTreemapLayout(width, height);
                layoutTreemap(treemap, root);
                buildTreemap(root, true);

                if (navigationPath.length > 1) {
                    applyTransition(navigationPath[navigationPath.length - 1], svg.select("g.depth"), false);
                } else {
                    sortTreemapByDepth();
                }
            }
        }
    };

    return that;
};

window.treemapData = [{
    "id": 268436606,
    "name": "Lifestyle",
    "weight": 22.147208823744723,
    "color": "#5F9E31",
    "topics": [{
        "id": 268489960,
        "name": "Healthy Living",
        "weight": 18.716027618627884,
        "topics": [{
            "id": 268490510,
            "name": "Healthy Food",
            "weight": 46.448194662480375,
            "topics": [{
                "id": 268490572,
                "name": "Vegetables",
                "weight": 64.300802703844525
            }, {
                "id": 268490569,
                "name": "Fruits",
                "weight": 31.094212082805239
            }]
        }, {
            "id": 268450469,
            "name": "Weight",
            "weight": 23.135792778649922,
            "topics": [{
                "id": 537069722,
                "name": "Oprah Winfrey",
                "weight": 47.667514843087361
            }, {
                "id": 537141845,
                "name": "Weight Watchers POINT'S",
                "weight": 4.6649703138252754
            }, {
                "id": 538082703,
                "name": "Mehmet Öz",
                "weight": 1.8659881255301103
            }]
        }, {
            "id": 268453462,
            "name": "Fitness",
            "weight": 20.859497645211931,
            "topics": [{
                "id": 268487489,
                "name": "Yoga",
                "weight": 38.852304797742242,
                "topics": [{
                    "id": 537191326,
                    "name": "Alec Baldwin",
                    "weight": 71.670702179176757
                }, {
                    "id": 537193938,
                    "name": "Jennifer Aniston",
                    "weight": 15.980629539951574
                }, {
                    "id": 537673764,
                    "name": "Janelle Monae",
                    "weight": 1.937046004842615
                }]
            }, {
                "id": 268485698,
                "name": "Bodybuilding",
                "weight": 31.326434619002821,
                "topics": [{
                    "id": 537074803,
                    "name": "Arnold Schwarzenegger",
                    "weight": 93.993993993994
                }]
            }, {
                "id": 537074803,
                "name": "Arnold Schwarzenegger",
                "weight": 29.444967074317969
            }, {
                "id": 538279808,
                "name": "Apple Watch",
                "weight": 18.438381937911572
            }, {
                "id": 268487423,
                "name": "Walking",
                "weight": 14.393226716839134,
                "topics": [{
                    "id": 537637670,
                    "name": "The Walking Dead",
                    "weight": 53.594771241830067
                }, {
                    "id": 537969885,
                    "name": "Prince Harry",
                    "weight": 19.607843137254903
                }, {
                    "id": 537668586,
                    "name": "Prince Harry of Wales",
                    "weight": 18.954248366013072
                }]
            }, {
                "id": 537585639,
                "name": "YMCA",
                "weight": 10.912511759172155
            }, {
                "id": 538114270,
                "name": "Fitbit",
                "weight": 8.3725305738476017
            }, {
                "id": 268487469,
                "name": "Workouts",
                "weight": 7.9962370649106305,
                "topics": [{
                    "id": 538563763,
                    "name": "CrossFit",
                    "weight": 9.4117647058823533
                }]
            }, {
                "id": 536894842,
                "name": "Adidas",
                "weight": 5.9266227657572905
            }, {
                "id": 537176359,
                "name": "David Beckham",
                "weight": 4.7036688617121358
            }, {
                "id": 537141168,
                "name": "Under Armour Inc.",
                "weight": 3.7629350893697082
            }, {
                "id": 538174537,
                "name": "MyFitnessPal",
                "weight": 2.5399811853245531
            }, {
                "id": 268486900,
                "name": "Pilates",
                "weight": 2.2577610536218251
            }, {
                "id": 268485635,
                "name": "Barefoot Running",
                "weight": 1.2229539040451551
            }]
        }, {
            "id": 268453459,
            "name": "Diet",
            "weight": 17.739403453689167,
            "topics": [{
                "id": 537622856,
                "name": "Pepsi",
                "weight": 34.181415929203538
            }, {
                "id": 537592860,
                "name": "Diet Coke",
                "weight": 30.199115044247787
            }, {
                "id": 537074516,
                "name": "World Health Organization",
                "weight": 11.836283185840708
            }, {
                "id": 537084106,
                "name": "Coca-Cola Company",
                "weight": 9.0707964601769913
            }, {
                "id": 537075090,
                "name": "American Heart Association",
                "weight": 6.6371681415929205
            }, {
                "id": 537141845,
                "name": "Weight Watchers POINT'S",
                "weight": 6.0840707964601766
            }, {
                "id": 538174537,
                "name": "MyFitnessPal",
                "weight": 2.9867256637168142
            }, {
                "id": 538082703,
                "name": "Mehmet Öz",
                "weight": 2.4336283185840708
            }, {
                "id": 537589136,
                "name": "Diet Pepsi",
                "weight": 1.5486725663716814
            }]
        }, {
            "id": 268487147,
            "name": "Sleep",
            "weight": 3.9638932496075352,
            "topics": [{
                "id": 538114270,
                "name": "Fitbit",
                "weight": 44.059405940594061
            }, {
                "id": 537115235,
                "name": "Select Comfort Sleep Number Sleep System",
                "weight": 3.4653465346534653
            }]
        }]
    }, {
        "id": 268489846,
        "name": "Recreation",
        "weight": 16.383869546055532,
        "topics": [{
            "id": 268453460,
            "name": "Dining Out",
            "weight": 98.63259358888142,
            "topics": [{
                "id": 268453471,
                "name": "Restaurants",
                "weight": 25.522727272727273,
                "topics": [{
                    "id": 537130392,
                    "name": "Chipotle Mexican Grill, Inc.",
                    "weight": 13.000890471950134
                }, {
                    "id": 537073199,
                    "name": "McDonald's",
                    "weight": 12.377560106856635
                }, {
                    "id": 537135305,
                    "name": "List of countries with Burger King restaurants",
                    "weight": 5.520926090828139
                }, {
                    "id": 537156342,
                    "name": "Wendy's Old Fashioned Hamburgers",
                    "weight": 4.27426536064114
                }, {
                    "id": 537109235,
                    "name": "Cheddar Bay Biscuits",
                    "weight": 4.27426536064114
                }, {
                    "id": 537119554,
                    "name": "Colonel Sanders' Kentucky Fried Chicken",
                    "weight": 3.6509349955476402
                }, {
                    "id": 538261168,
                    "name": "Ramen",
                    "weight": 3.5618878005342833
                }, {
                    "id": 537118556,
                    "name": "Bean Burrito Especial- Taco Bell",
                    "weight": 2.9385574354407837
                }, {
                    "id": 537152601,
                    "name": "Pizza Hut Stuffed Crust Pizza",
                    "weight": 2.8495102404274264
                }, {
                    "id": 537099361,
                    "name": "Chick-Fil-A Sandwich",
                    "weight": 2.6714158504007122
                }, {
                    "id": 537152256,
                    "name": "Panera Bread/Saint Louis Bread Company",
                    "weight": 2.5823686553873553
                }, {
                    "id": 537120180,
                    "name": "Dunkin' Doughnuts",
                    "weight": 2.4933214603739984
                }, {
                    "id": 537138775,
                    "name": "Tim Hortons",
                    "weight": 2.3152270703472841
                }, {
                    "id": 537135303,
                    "name": "List of assets owned by Yum! Brands, Inc.",
                    "weight": 2.048085485307213
                }, {
                    "id": 537098054,
                    "name": "Applebee's Neighborhood Grill & Bar",
                    "weight": 2.048085485307213
                }, {
                    "id": 537155234,
                    "name": "The Olive Garden",
                    "weight": 1.7809439002671417
                }, {
                    "id": 537208700,
                    "name": "Jamie Oliver",
                    "weight": 1.6918967052537845
                }, {
                    "id": 537273699,
                    "name": "Gordon Ramsay",
                    "weight": 1.4247551202137132
                }, {
                    "id": 537603186,
                    "name": "Big Mac",
                    "weight": 1.4247551202137132
                }, {
                    "id": 538304267,
                    "name": "Shake Shack",
                    "weight": 1.4247551202137132
                }, {
                    "id": 537109063,
                    "name": "Carl's Drive-In Barbecue",
                    "weight": 1.2466607301869992
                }, {
                    "id": 538121584,
                    "name": "Zomato",
                    "weight": 1.068566340160285
                }]
            }]
        }, {
            "id": 268490012,
            "name": "Zoo",
            "weight": 3.048643801838153,
            "topics": [{
                "id": 537139565,
                "name": "Smithsonian National Zoological Park",
                "weight": 44.117647058823529
            }, {
                "id": 537141974,
                "name": "Wildlife Conservation Society",
                "weight": 12.5
            }, {
                "id": 537212087,
                "name": "Steve Irwin",
                "weight": 9.5588235294117645
            }, {
                "id": 537069185,
                "name": "David Rubenstein",
                "weight": 6.617647058823529
            }, {
                "id": 537117362,
                "name": "Zoological Society of London",
                "weight": 5.1470588235294121
            }, {
                "id": 537128753,
                "name": "Association of Zoos and Aquariums",
                "weight": 1.4705882352941178
            }]
        }]
    }, {
        "id": 268490514,
        "name": "Lifehacks",
        "weight": 15.513442044953724,
        "topics": [{
            "id": 268490217,
            "name": "Self-improvement",
            "weight": 29.000946969696969
        }, {
            "id": 268490480,
            "name": "Money Tips",
            "weight": 9.1619318181818183
        }, {
            "id": 268490533,
            "name": "Self Control",
            "weight": 5.729166666666667
        }, {
            "id": 268490602,
            "name": "Happiness",
            "weight": 3.1486742424242422,
            "topics": [{
                "id": 537196632,
                "name": "Gretchen Rubin",
                "weight": 9.022556390977444
            }, {
                "id": 537196947,
                "name": "Martin Seligman",
                "weight": 2.255639097744361
            }]
        }, {
            "id": 268487313,
            "name": "Time Management",
            "weight": 2.8645833333333335
        }, {
            "id": 268490517,
            "name": "Productivity",
            "weight": 2.1780303030303032,
            "topics": [{
                "id": 537108312,
                "name": "Australian Productivity Commission",
                "weight": 10.869565217391305
            }]
        }]
    }, {
        "id": 268436626,
        "name": "Hobbies",
        "weight": 11.620390774203026,
        "topics": [{
            "id": 268451460,
            "name": "Party Games",
            "weight": 68.552465233881165,
            "topics": [{
                "id": 268486968,
                "name": "Puzzles",
                "weight": 72.752420470262791
            }, {
                "id": 268485694,
                "name": "Board Games",
                "weight": 5.3019824804057167
            }, {
                "id": 268458460,
                "name": "Chess",
                "weight": 2.8123559243891192,
                "topics": [{
                    "id": 537193270,
                    "name": "Garry Kasparov",
                    "weight": 13.114754098360656
                }, {
                    "id": 538566784,
                    "name": "Magnus Carlsen",
                    "weight": 13.114754098360656
                }, {
                    "id": 537188514,
                    "name": "Nigel Short",
                    "weight": 11.475409836065573
                }, {
                    "id": 537270307,
                    "name": "Viswanathan Anand",
                    "weight": 3.278688524590164
                }, {
                    "id": 537110543,
                    "name": "Federation Internationale des Echecs",
                    "weight": 3.278688524590164
                }, {
                    "id": 537256544,
                    "name": "Kirsan Ilyumzhinov",
                    "weight": 3.278688524590164
                }]
            }]
        }, {
            "id": 268489888,
            "name": "Outdoor Hobbies",
            "weight": 12.673830594184576,
            "topics": [{
                "id": 268451465,
                "name": "Bicycles",
                "weight": 75.81047381546135,
                "topics": [{
                    "id": 268485661,
                    "name": "Bicycle Racing",
                    "weight": 25.657894736842106,
                    "topics": [{
                        "id": 268487329,
                        "name": "Tour De France",
                        "weight": 58.974358974358971,
                        "topics": [{
                            "id": 537265192,
                            "name": "Lance Armstrong",
                            "weight": 21.739130434782609
                        }, {
                            "id": 537999183,
                            "name": "Team Sky",
                            "weight": 13.043478260869565
                        }, {
                            "id": 537246116,
                            "name": "Cadel Evans",
                            "weight": 13.043478260869565
                        }, {
                            "id": 537656382,
                            "name": "Richie Porte",
                            "weight": 13.043478260869565
                        }, {
                            "id": 537975487,
                            "name": "Chris Froome",
                            "weight": 10.869565217391305
                        }, {
                            "id": 537189407,
                            "name": "Alberto Contador",
                            "weight": 8.695652173913043
                        }, {
                            "id": 537142997,
                            "name": "Amaury Sport Organisation",
                            "weight": 4.3478260869565215
                        }, {
                            "id": 538080390,
                            "name": "Marcel Kittel",
                            "weight": 4.3478260869565215
                        }, {
                            "id": 537958426,
                            "name": "Peter Sagan",
                            "weight": 4.3478260869565215
                        }, {
                            "id": 537191169,
                            "name": "Bjarne Riis",
                            "weight": 4.3478260869565215
                        }, {
                            "id": 537731470,
                            "name": "Christian Prudhomme",
                            "weight": 4.3478260869565215
                        }, {
                            "id": 537217408,
                            "name": "Eddy Merckx",
                            "weight": 4.3478260869565215
                        }, {
                            "id": 538015761,
                            "name": "Simon Gerrans",
                            "weight": 4.3478260869565215
                        }, {
                            "id": 537720597,
                            "name": "Geraint Thomas",
                            "weight": 4.3478260869565215
                        }, {
                            "id": 537127831,
                            "name": "Alejandro Valverde",
                            "weight": 4.3478260869565215
                        }, {
                            "id": 537269003,
                            "name": "Alexander Vinokourov",
                            "weight": 2.1739130434782608
                        }, {
                            "id": 538215404,
                            "name": "Nicolas Roche",
                            "weight": 2.1739130434782608
                        }, {
                            "id": 537171589,
                            "name": "Ivan Basso",
                            "weight": 2.1739130434782608
                        }, {
                            "id": 537968287,
                            "name": "Peter Kennaugh",
                            "weight": 2.1739130434782608
                        }, {
                            "id": 537717730,
                            "name": "Bradley Wiggins",
                            "weight": 2.1739130434782608
                        }, {
                            "id": 537982231,
                            "name": "Alexander Kristoff",
                            "weight": 2.1739130434782608
                        }, {
                            "id": 537198043,
                            "name": "Jonathan Vaughters",
                            "weight": 2.1739130434782608
                        }, {
                            "id": 537189459,
                            "name": "Fabian Cancellara",
                            "weight": 2.1739130434782608
                        }, {
                            "id": 537213710,
                            "name": "Steve Cummings",
                            "weight": 2.1739130434782608
                        }, {
                            "id": 538566943,
                            "name": "MTN-Qhubeka",
                            "weight": 2.1739130434782608
                        }, {
                            "id": 538006781,
                            "name": "John Degenkolb",
                            "weight": 2.1739130434782608
                        }, {
                            "id": 538197694,
                            "name": "Alex Dowsett",
                            "weight": 2.1739130434782608
                        }, {
                            "id": 538566389,
                            "name": "Team Saxo Bank-SunGard",
                            "weight": 2.1739130434782608
                        }, {
                            "id": 538310535,
                            "name": "Thibaut Pinot",
                            "weight": 2.1739130434782608
                        }]
                    }, {
                        "id": 268490229,
                        "name": "Cycling World Championships",
                        "weight": 15.384615384615385,
                        "topics": [{
                            "id": 538002137,
                            "name": "Lizzie Armitstead",
                            "weight": 25.0
                        }, {
                            "id": 537481767,
                            "name": "Chris Hoy",
                            "weight": 25.0
                        }, {
                            "id": 537666826,
                            "name": "Jason Kenny",
                            "weight": 16.666666666666668
                        }, {
                            "id": 537720597,
                            "name": "Geraint Thomas",
                            "weight": 16.666666666666668
                        }, {
                            "id": 537966639,
                            "name": "Taylor Phinney",
                            "weight": 8.3333333333333339
                        }, {
                            "id": 537717730,
                            "name": "Bradley Wiggins",
                            "weight": 8.3333333333333339
                        }, {
                            "id": 537213710,
                            "name": "Steve Cummings",
                            "weight": 8.3333333333333339
                        }, {
                            "id": 537246671,
                            "name": "Anna Meares",
                            "weight": 8.3333333333333339
                        }, {
                            "id": 537651773,
                            "name": "Ben Swift",
                            "weight": 8.3333333333333339
                        }]
                    }, {
                        "id": 268490210,
                        "name": "Vuelta a Espana",
                        "weight": 5.1282051282051286
                    }]
                }, {
                    "id": 268486695,
                    "name": "Mountain Biking",
                    "weight": 12.828947368421053,
                    "topics": [{
                        "id": 537956387,
                        "name": "Mountain Bike Hall of Fame",
                        "weight": 2.5641025641025643
                    }]
                }, {
                    "id": 537099137,
                    "name": "Cannondale",
                    "weight": 1.3157894736842106
                }]
            }, {
                "id": 268486128,
                "name": "Fishing",
                "weight": 23.441396508728179,
                "topics": [{
                    "id": 268486135,
                    "name": "Fly Fishing",
                    "weight": 10.638297872340425,
                    "topics": [{
                        "id": 537137461,
                        "name": "Orvis",
                        "weight": 10.0
                    }]
                }, {
                    "id": 537084766,
                    "name": "Sea Shepherd Conservation Society",
                    "weight": 6.3829787234042552
                }, {
                    "id": 537144073,
                    "name": "Bass Pro Shops Outdoor World",
                    "weight": 5.3191489361702127
                }, {
                    "id": 268490694,
                    "name": "Kayak Fishing",
                    "weight": 3.1914893617021276
                }, {
                    "id": 537137461,
                    "name": "Orvis",
                    "weight": 1.0638297872340425
                }, {
                    "id": 537139201,
                    "name": "Sea Fish Industry Authority",
                    "weight": 1.0638297872340425
                }, {
                    "id": 537123479,
                    "name": "National Marine Fisheries Service",
                    "weight": 1.0638297872340425
                }]
            }, {
                "id": 268490238,
                "name": "Camping",
                "weight": 22.443890274314214,
                "topics": [{
                    "id": 538084169,
                    "name": "Camping World",
                    "weight": 6.666666666666667
                }, {
                    "id": 537098811,
                    "name": "Boy Scouts of America",
                    "weight": 4.4444444444444446
                }, {
                    "id": 538272699,
                    "name": "Hipcamp",
                    "weight": 1.1111111111111112
                }]
            }, {
                "id": 268490236,
                "name": "Hiking",
                "weight": 18.952618453865338
            }, {
                "id": 268487087,
                "name": "Scooters",
                "weight": 17.705735660847882,
                "topics": [{
                    "id": 537125248,
                    "name": "Segway",
                    "weight": 21.12676056338028
                }, {
                    "id": 537608904,
                    "name": "Segway PT",
                    "weight": 9.8591549295774641
                }, {
                    "id": 537124416,
                    "name": "Piaggio Vespa",
                    "weight": 7.042253521126761
                }, {
                    "id": 537152567,
                    "name": "Piaggio Group Americas",
                    "weight": 2.816901408450704
                }]
            }, {
                "id": 268487094,
                "name": "Scuba Diving",
                "weight": 10.723192019950124,
                "topics": [{
                    "id": 537114546,
                    "name": "Professional Association of Diving Instructors",
                    "weight": 2.3255813953488373
                }]
            }, {
                "id": 268489843,
                "name": "Skydiving",
                "weight": 9.9750623441396513
            }, {
                "id": 268487053,
                "name": "Yachting",
                "weight": 7.73067331670823,
                "topics": [{
                    "id": 538570766,
                    "name": "America's Cup",
                    "weight": 9.67741935483871
                }, {
                    "id": 537151464,
                    "name": "New York Yacht Club",
                    "weight": 3.225806451612903
                }]
            }]
        }, {
            "id": 268489842,
            "name": "Crafts",
            "weight": 10.271807838179519,
            "topics": [{
                "id": 268490266,
                "name": "DIY",
                "weight": 88.615384615384613
            }, {
                "id": 268487116,
                "name": "Sewing",
                "weight": 26.76923076923077,
                "topics": [{
                    "id": 537999448,
                    "name": "Project Runway",
                    "weight": 16.091954022988507
                }]
            }, {
                "id": 268486496,
                "name": "Knitting",
                "weight": 13.846153846153847
            }, {
                "id": 268485898,
                "name": "Crochet",
                "weight": 11.076923076923077
            }, {
                "id": 268486976,
                "name": "Quilting",
                "weight": 8.0
            }, {
                "id": 538131009,
                "name": "Craftsy",
                "weight": 8.0
            }, {
                "id": 268487090,
                "name": "Scrapbooking",
                "weight": 7.6923076923076925
            }, {
                "id": 268486042,
                "name": "Embroidery",
                "weight": 7.0769230769230766
            }, {
                "id": 268486833,
                "name": "Origami",
                "weight": 7.0769230769230766,
                "topics": [{
                    "id": 538323430,
                    "name": "Sadako Sasaki",
                    "weight": 4.3478260869565215
                }]
            }, {
                "id": 268487467,
                "name": "Woodworking",
                "weight": 3.0769230769230771
            }]
        }, {
            "id": 268487276,
            "name": "Tattoos",
            "weight": 6.6371681415929205,
            "topics": [{
                "id": 537176359,
                "name": "David Beckham",
                "weight": 23.80952380952381
            }]
        }, {
            "id": 268485590,
            "name": "Astrology",
            "weight": 4.298356510745891,
            "topics": [{
                "id": 268453467,
                "name": "Horoscopes",
                "weight": 44.852941176470587
            }, {
                "id": 537856247,
                "name": "Johannes Kepler",
                "weight": 44.117647058823529
            }]
        }, {
            "id": 268451466,
            "name": "Firearms",
            "weight": 3.8242730720606826,
            "topics": [{
                "id": 537136607,
                "name": "National Rifle Association",
                "weight": 39.669421487603309
            }, {
                "id": 268487128,
                "name": "Shotguns",
                "weight": 13.223140495867769
            }, {
                "id": 537105862,
                "name": "Sturm Ruger Firearm Company",
                "weight": 5.785123966942149
            }, {
                "id": 537118931,
                "name": "Bureau of Alcohol, Tobacco, Firearms and Explosives",
                "weight": 4.9586776859504136
            }, {
                "id": 537098816,
                "name": "Brady Campaign",
                "weight": 3.3057851239669422
            }, {
                "id": 537722015,
                "name": "National Shooting Sports Foundation",
                "weight": 1.6528925619834711
            }]
        }, {
            "id": 268490204,
            "name": "Birdwatching",
            "weight": 3.1289506953223767
        }, {
            "id": 268451462,
            "name": "Horses",
            "weight": 1.6434892541087232,
            "topics": [{
                "id": 537194500,
                "name": "Tony McCoy",
                "weight": 17.307692307692307
            }, {
                "id": 537650218,
                "name": "Grand National",
                "weight": 11.538461538461538
            }, {
                "id": 537218555,
                "name": "Bob Baffert",
                "weight": 3.8461538461538463
            }, {
                "id": 538225194,
                "name": "Breeders' Cup",
                "weight": 1.9230769230769231
            }]
        }, {
            "id": 268485553,
            "name": "Antiques",
            "weight": 1.3590391908975981,
            "topics": [{
                "id": 538053564,
                "name": "Bargain Hunt",
                "weight": 2.3255813953488373
            }]
        }]
    }, {
        "id": 268453461,
        "name": "Family",
        "weight": 9.7216101072425438,
        "topics": [{
            "id": 537590915,
            "name": "Kate Middleton",
            "weight": 36.796373252738952
        }, {
            "id": 268453468,
            "name": "Parenting",
            "weight": 21.11824707215716,
            "topics": [{
                "id": 268486490,
                "name": "Kids",
                "weight": 66.7262969588551,
                "topics": [{
                    "id": 537193199,
                    "name": "Michelle Obama",
                    "weight": 46.380697050938338
                }, {
                    "id": 537106981,
                    "name": "VTech Holdings Limited",
                    "weight": 2.6809651474530831
                }]
            }]
        }, {
            "id": 536892993,
            "name": "The Walt Disney Company",
            "weight": 19.531545145447677
        }, {
            "id": 537233200,
            "name": "Disneyland",
            "weight": 12.051378919531546
        }, {
            "id": 538110359,
            "name": "Pope Francis",
            "weight": 10.84246316584813
        }, {
            "id": 268457463,
            "name": "Adoption",
            "weight": 7.5935020778239517,
            "topics": [{
                "id": 537154550,
                "name": "Steve Jobs",
                "weight": 81.094527363184085
            }, {
                "id": 537965100,
                "name": "Teen Mom",
                "weight": 14.427860696517413
            }, {
                "id": 537193649,
                "name": "Rosie O'Donnell",
                "weight": 8.4577114427860689
            }, {
                "id": 537114300,
                "name": "PETsMART Inc.",
                "weight": 1.9900497512437811
            }, {
                "id": 537618728,
                "name": "Mother",
                "weight": 1.4925373134328359
            }]
        }, {
            "id": 537193199,
            "name": "Michelle Obama",
            "weight": 6.535700793350963
        }, {
            "id": 537603813,
            "name": "Barbie",
            "weight": 4.9489988666414808
        }, {
            "id": 537681698,
            "name": "Christopher J. Christie",
            "weight": 4.38231960710238
        }, {
            "id": 537585639,
            "name": "YMCA",
            "weight": 4.38231960710238
        }, {
            "id": 537137974,
            "name": "Planned Parenthood",
            "weight": 4.3445409897997731
        }, {
            "id": 537193986,
            "name": "Tony Abbott",
            "weight": 1.9267094824329429
        }, {
            "id": 537323972,
            "name": "Adolf Hitler",
            "weight": 1.8889308651303363
        }, {
            "id": 537965100,
            "name": "Teen Mom",
            "weight": 1.0955799017755949
        }]
    }, {
        "id": 268490361,
        "name": "Gifts",
        "weight": 5.91303070368738
    }, {
        "id": 268490185,
        "name": "Relationships",
        "weight": 4.3998824739239017,
        "topics": [{
            "id": 268490305,
            "name": "Dating Tips",
            "weight": 19.949916527545909
        }]
    }, {
        "id": 268487372,
        "name": "Urbanism",
        "weight": 3.9371235492874983
    }, {
        "id": 268453474,
        "name": "Travel",
        "weight": 3.3201116497722931,
        "topics": [{
            "id": 537682884,
            "name": "TripAdvisor",
            "weight": 23.672566371681416
        }, {
            "id": 537103496,
            "name": "National Geographic Society",
            "weight": 20.243362831858406
        }, {
            "id": 537074651,
            "name": "Federal Aviation Administration",
            "weight": 12.721238938053098
        }, {
            "id": 536889162,
            "name": "Boeing",
            "weight": 12.278761061946902
        }, {
            "id": 536916874,
            "name": "Airbus",
            "weight": 9.8451327433628322
        }, {
            "id": 536926855,
            "name": "American Airlines",
            "weight": 9.18141592920354
        }, {
            "id": 537753630,
            "name": "Airbnb",
            "weight": 9.18141592920354
        }, {
            "id": 536940086,
            "name": "United Airlines",
            "weight": 8.6283185840707972
        }, {
            "id": 536915949,
            "name": "Emirates",
            "weight": 6.8584070796460175
        }, {
            "id": 537072862,
            "name": "London Heathrow Airport",
            "weight": 6.3053097345132745
        }, {
            "id": 536892500,
            "name": "Delta Air Lines",
            "weight": 6.3053097345132745
        }, {
            "id": 536892412,
            "name": "British Airways",
            "weight": 5.7522123893805306
        }, {
            "id": 537072855,
            "name": "John F. Kennedy International Airport",
            "weight": 5.7522123893805306
        }, {
            "id": 537055956,
            "name": "Royal Caribbean International",
            "weight": 5.3097345132743365
        }, {
            "id": 537075094,
            "name": "National Park Service",
            "weight": 5.3097345132743365
        }, {
            "id": 536892331,
            "name": "American Express",
            "weight": 4.9778761061946906
        }, {
            "id": 537072875,
            "name": "O'Hare International Airport",
            "weight": 4.9778761061946906
        }, {
            "id": 536892309,
            "name": "Air France",
            "weight": 4.7566371681415927
        }, {
            "id": 536892897,
            "name": "Southwest Airlines",
            "weight": 4.6460176991150446
        }, {
            "id": 537071038,
            "name": "JetBlue Airways Corporation",
            "weight": 4.6460176991150446
        }, {
            "id": 537085269,
            "name": "Transportation Security Administration",
            "weight": 4.3141592920353986
        }, {
            "id": 537100443,
            "name": "Etihad Airways Crystal Cargo",
            "weight": 3.7610619469026547
        }, {
            "id": 537071095,
            "name": "Qantas",
            "weight": 3.5398230088495577
        }, {
            "id": 537070136,
            "name": "Expedia",
            "weight": 3.4292035398230087
        }, {
            "id": 538038975,
            "name": "Boeing 787",
            "weight": 3.4292035398230087
        }, {
            "id": 536921881,
            "name": "Air Canada",
            "weight": 3.3185840707964602
        }, {
            "id": 537124557,
            "name": "Priceline Negotiator",
            "weight": 2.8761061946902653
        }, {
            "id": 537071193,
            "name": "EasyJet",
            "weight": 2.6548672566371683
        }, {
            "id": 537070999,
            "name": "International Air Transport Association",
            "weight": 2.3230088495575223
        }, {
            "id": 537102727,
            "name": "Lonely Planet Travel Guides",
            "weight": 2.3230088495575223
        }, {
            "id": 536899563,
            "name": "Air India",
            "weight": 2.2123893805309733
        }, {
            "id": 536911264,
            "name": "Ryanair",
            "weight": 2.1017699115044248
        }, {
            "id": 537152041,
            "name": "Orbitz Worldwide, Inc.",
            "weight": 1.8805309734513274
        }, {
            "id": 537071315,
            "name": "Virgin America",
            "weight": 1.8805309734513274
        }, {
            "id": 537097626,
            "name": "AirAsia timeline",
            "weight": 1.6592920353982301
        }, {
            "id": 537154434,
            "name": "Spirit Airlines",
            "weight": 1.6592920353982301
        }, {
            "id": 537071322,
            "name": "WestJet Airlines",
            "weight": 1.2168141592920354
        }, {
            "id": 537071082,
            "name": "Air New Zealand",
            "weight": 1.1061946902654867
        }, {
            "id": 537071224,
            "name": "Jet Airways",
            "weight": 1.1061946902654867
        }]
    }, {
        "id": 268453469,
        "name": "Pets",
        "weight": 3.2760393712354929,
        "topics": [{
            "id": 268485986,
            "name": "Dogs",
            "weight": 60.08968609865471,
            "topics": [{
                "id": 537720047,
                "name": "Pitbull",
                "weight": 6.5298507462686564
            }, {
                "id": 537953567,
                "name": "American Kennel Club",
                "weight": 1.4925373134328359
            }, {
                "id": 537199553,
                "name": "Cesar Millan",
                "weight": 1.1194029850746268
            }]
        }, {
            "id": 268490187,
            "name": "Cats",
            "weight": 18.946188340807176,
            "topics": [{
                "id": 537634525,
                "name": "Cats & Dogs",
                "weight": 2.9585798816568047
            }, {
                "id": 538298454,
                "name": "Black Cats",
                "weight": 2.9585798816568047
            }, {
                "id": 537129223,
                "name": "Best Friends Animal Society",
                "weight": 2.3668639053254439
            }]
        }, {
            "id": 537720047,
            "name": "Pitbull",
            "weight": 3.9237668161434978
        }]
    }, {
        "id": 268486856,
        "name": "Paranormal",
        "weight": 2.9601880417217572,
        "topics": [{
            "id": 537770906,
            "name": "The X-Files",
            "weight": 78.1637717121588
        }, {
            "id": 268487354,
            "name": "UFO",
            "weight": 17.3697270471464,
            "topics": [{
                "id": 537996896,
                "name": "Edgar Dean Mitchell",
                "weight": 24.285714285714285
            }, {
                "id": 537211912,
                "name": "Carl Sagan",
                "weight": 15.0
            }, {
                "id": 537103312,
                "name": "Mutual UFO Network",
                "weight": 5.0
            }, {
                "id": 537659446,
                "name": "John Podesta",
                "weight": 2.8571428571428572
            }]
        }, {
            "id": 268490712,
            "name": "Ghosts",
            "weight": 12.034739454094293,
            "topics": [{
                "id": 537675210,
                "name": "Ghostbusters",
                "weight": 61.855670103092784
            }, {
                "id": 537834557,
                "name": "Haunted Mansion",
                "weight": 5.1546391752577323
            }]
        }, {
            "id": 537675210,
            "name": "Ghostbusters",
            "weight": 7.4441687344913152
        }]
    }, {
        "id": 268453475,
        "name": "Weddings Organisation",
        "weight": 2.2917584839136182,
        "topics": [{
            "id": 268487442,
            "name": "Wedding Planning",
            "weight": 15.705128205128204
        }]
    }, {
        "id": 268453472,
        "name": "Shopping",
        "weight": 2.08976054061995,
        "topics": [{
            "id": 536892635,
            "name": "J. C. Penney",
            "weight": 40.77328646748682
        }, {
            "id": 536892992,
            "name": "Walmart",
            "weight": 20.210896309314588
        }, {
            "id": 536913692,
            "name": "eBay",
            "weight": 15.114235500878735
        }, {
            "id": 268490296,
            "name": "Black Friday & Cyber Monday",
            "weight": 14.0597539543058
        }, {
            "id": 537142852,
            "name": "Alibaba Group",
            "weight": 10.896309314586995
        }, {
            "id": 537140628,
            "name": "The IKEA International Group",
            "weight": 9.4903339191564147
        }, {
            "id": 537073001,
            "name": "Macy's",
            "weight": 9.13884007029877
        }, {
            "id": 536892634,
            "name": "Sainsbury's",
            "weight": 8.43585237258348
        }, {
            "id": 536892929,
            "name": "Target Corporation",
            "weight": 6.1511423550087869
        }, {
            "id": 536892475,
            "name": "Costco",
            "weight": 5.9753954305799653
        }, {
            "id": 536892761,
            "name": "Nordstrom",
            "weight": 5.7996485061511427
        }, {
            "id": 537098155,
            "name": "ASDA Wal-Mart Supercentre",
            "weight": 5.0966608084358525
        }, {
            "id": 537073091,
            "name": "Wm Morrison Supermarkets",
            "weight": 4.3936731107205622
        }, {
            "id": 537106438,
            "name": "Toys \"R\" Us International",
            "weight": 3.51493848857645
        }, {
            "id": 537113191,
            "name": "Myer City Centre",
            "weight": 3.1634446397188047
        }, {
            "id": 537152950,
            "name": "QVC",
            "weight": 2.10896309314587
        }, {
            "id": 536892662,
            "name": "Kmart",
            "weight": 1.40597539543058
        }]
    }, {
        "id": 268461457,
        "name": "Driving",
        "weight": 1.7371823123255472,
        "topics": [{
            "id": 536888945,
            "name": "Ford Motor Company",
            "weight": 81.606765327695555
        }, {
            "id": 536888940,
            "name": "BMW",
            "weight": 19.661733615221987
        }, {
            "id": 537729609,
            "name": "Chevrolet",
            "weight": 16.067653276955603
        }, {
            "id": 537119094,
            "name": "Tesla Motors",
            "weight": 15.433403805496829
        }, {
            "id": 537725406,
            "name": "Tesla Model S",
            "weight": 13.530655391120508
        }, {
            "id": 537619035,
            "name": "Google Maps",
            "weight": 12.050739957716702
        }, {
            "id": 536889850,
            "name": "Mazda",
            "weight": 5.7082452431289639
        }, {
            "id": 538160635,
            "name": "Waze",
            "weight": 5.4968287526427062
        }]
    }, {
        "id": 268490231,
        "name": "Sex",
        "weight": 1.5425297487880123,
        "topics": [{
            "id": 537623052,
            "name": "Playboy",
            "weight": 13.095238095238095
        }, {
            "id": 537137941,
            "name": "Pink (Victoria's Secret)",
            "weight": 12.142857142857142
        }, {
            "id": 537584060,
            "name": "Viagra",
            "weight": 7.3809523809523814
        }]
    }, {
        "id": 268490515,
        "name": "Culture",
        "weight": 1.5058028500073455,
        "topics": [{
            "id": 538278444,
            "name": "Halloween (Metal Band)",
            "weight": 29.756097560975611
        }, {
            "id": 537064188,
            "name": "Wikipedia",
            "weight": 19.512195121951219
        }, {
            "id": 537752330,
            "name": "Banksy",
            "weight": 16.097560975609756
        }, {
            "id": 537763386,
            "name": "Mad Men",
            "weight": 14.878048780487806
        }, {
            "id": 537222060,
            "name": "Ai Weiwei",
            "weight": 12.926829268292684
        }, {
            "id": 537106018,
            "name": "Tate Gallery",
            "weight": 11.707317073170731
        }, {
            "id": 537077288,
            "name": "Metropolitan Museum of Art",
            "weight": 9.0243902439024382
        }, {
            "id": 537084704,
            "name": "UNESCO (culture)",
            "weight": 9.0243902439024382
        }, {
            "id": 537074784,
            "name": "British Museum",
            "weight": 5.1219512195121952
        }, {
            "id": 538278834,
            "name": "The Great British Bake Off",
            "weight": 4.1463414634146343
        }, {
            "id": 537193988,
            "name": "Bob Marley",
            "weight": 3.1707317073170733
        }, {
            "id": 537652754,
            "name": "Napoleon Bonaparte",
            "weight": 2.9268292682926829
        }, {
            "id": 537993866,
            "name": "Venice Biennale",
            "weight": 1.9512195121951219
        }]
    }]
}, {
    "id": 268435461,
    "name": "Entertainment",
    "weight": 20.73189578741022,
    "color": "#A865C8",
    "topics": [{
        "id": 268449470,
        "name": "Celebrities",
        "weight": 35.15379786566227,
        "topics": [{
            "id": 268489887,
            "name": "Weddings",
            "weight": 5.9151785714285712
        }, {
            "id": 537198213,
            "name": "Kim Kardashian",
            "weight": 1.5513392857142858
        }, {
            "id": 537194044,
            "name": "Justin Bieber",
            "weight": 1.2723214285714286
        }, {
            "id": 537194227,
            "name": "Jennifer Lopez",
            "weight": 1.2611607142857142
        }, {
            "id": 537323920,
            "name": "Beyoncé",
            "weight": 1.2053571428571428
        }, {
            "id": 537191286,
            "name": "Miley Cyrus",
            "weight": 1.0714285714285714
        }]
    }, {
        "id": 268449464,
        "name": "TV",
        "weight": 26.102479598242311,
        "topics": [{
            "id": 268490129,
            "name": "TV Awards",
            "weight": 60.574177062979111,
            "topics": [{
                "id": 268490131,
                "name": "Emmy Award",
                "weight": 34.689826302729529,
                "topics": [{
                    "id": 537783191,
                    "name": "Amy Schumer",
                    "weight": 27.110157367668098
                }, {
                    "id": 537194246,
                    "name": "Amy Poehler",
                    "weight": 23.319027181688124
                }, {
                    "id": 537100637,
                    "name": "Home Box Office",
                    "weight": 20.743919885550788
                }, {
                    "id": 537761491,
                    "name": "Game of Thrones",
                    "weight": 16.452074391988557
                }, {
                    "id": 537202325,
                    "name": "Tracy Morgan",
                    "weight": 10.371959942775394
                }, {
                    "id": 537212535,
                    "name": "Viola Davis",
                    "weight": 9.0844062947067243
                }, {
                    "id": 537195319,
                    "name": "Ellen DeGeneres",
                    "weight": 8.94134477825465
                }, {
                    "id": 537206388,
                    "name": "Jim Parsons",
                    "weight": 8.5836909871244629
                }, {
                    "id": 537194863,
                    "name": "Carol Burnett",
                    "weight": 7.9399141630901289
                }, {
                    "id": 537675874,
                    "name": "Sesame Street",
                    "weight": 5.5793991416309012
                }, {
                    "id": 537763386,
                    "name": "Mad Men",
                    "weight": 4.363376251788269
                }, {
                    "id": 538244298,
                    "name": "Orange Is the New Black",
                    "weight": 3.8626609442060085
                }, {
                    "id": 537992617,
                    "name": "American Horror Story",
                    "weight": 3.7195994277539342
                }, {
                    "id": 537194715,
                    "name": "Betty White",
                    "weight": 2.6466380543633763
                }, {
                    "id": 537776030,
                    "name": "The Good Wife",
                    "weight": 2.3605150214592276
                }, {
                    "id": 537772799,
                    "name": "Breaking Bad",
                    "weight": 2.2174535050071529
                }, {
                    "id": 537284295,
                    "name": "Taraji P. Henson",
                    "weight": 2.0743919885550786
                }, {
                    "id": 537812328,
                    "name": "Julia Louis-Dreyfus",
                    "weight": 1.8597997138769671
                }, {
                    "id": 537280599,
                    "name": "Bryan Cranston",
                    "weight": 1.7167381974248928
                }, {
                    "id": 537194250,
                    "name": "Ricky Gervais",
                    "weight": 1.7167381974248928
                }, {
                    "id": 537189271,
                    "name": "Neil Patrick Harris",
                    "weight": 1.3590844062947067
                }, {
                    "id": 537196963,
                    "name": "Jon Hamm",
                    "weight": 1.2875536480686696
                }, {
                    "id": 537188317,
                    "name": "Heidi Klum",
                    "weight": 1.2160228898426324
                }, {
                    "id": 538027619,
                    "name": "Emilia Clarke",
                    "weight": 1.1444921316165952
                }, {
                    "id": 537206941,
                    "name": "Andy Samberg",
                    "weight": 1.0729613733905579
                }, {
                    "id": 537177111,
                    "name": "Robin Wright Penn",
                    "weight": 1.0014306151645207
                }]
            }, {
                "id": 268490130,
                "name": "BAFTA Awards",
                "weight": 1.3399503722084367
            }]
        }, {
            "id": 536898834,
            "name": "NBC",
            "weight": 57.071997595069895
        }, {
            "id": 537991104,
            "name": "Downton Abbey",
            "weight": 12.325266796933715
        }, {
            "id": 537770906,
            "name": "The X-Files",
            "weight": 9.46941229520517
        }, {
            "id": 537252332,
            "name": "Lady Gaga",
            "weight": 5.8620171351270107
        }, {
            "id": 537783191,
            "name": "Amy Schumer",
            "weight": 5.6966781902900943
        }, {
            "id": 537100637,
            "name": "Home Box Office",
            "weight": 4.3589358184277769
        }, {
            "id": 537188960,
            "name": "Blake Shelton",
            "weight": 3.502179467909214
        }, {
            "id": 537761491,
            "name": "Game of Thrones",
            "weight": 3.4570870284082367
        }, {
            "id": 537140849,
            "name": "Timely Marvel Comics",
            "weight": 3.3218097099053057
        }, {
            "id": 537070883,
            "name": "BBC",
            "weight": 2.5552382383886969
        }, {
            "id": 537761636,
            "name": "The Big Bang Theory",
            "weight": 2.209529535547873
        }, {
            "id": 537742359,
            "name": "Supergirl",
            "weight": 2.1494062828799039
        }, {
            "id": 537195905,
            "name": "Jon Stewart",
            "weight": 1.9540057117090035
        }, {
            "id": 537212535,
            "name": "Viola Davis",
            "weight": 1.9089132722080264
        }, {
            "id": 537195319,
            "name": "Ellen DeGeneres",
            "weight": 1.8788516458740419
        }, {
            "id": 537221039,
            "name": "Eddie Redmayne",
            "weight": 1.8337592063730648
        }, {
            "id": 537748985,
            "name": "Grey's Anatomy",
            "weight": 1.8337592063730648
        }, {
            "id": 537074675,
            "name": "NBC News",
            "weight": 1.442958064031264
        }, {
            "id": 538305002,
            "name": "Comedy Central",
            "weight": 1.3978656245302872
        }, {
            "id": 537233220,
            "name": "Late Show with David Letterman",
            "weight": 1.2776191191943485
        }, {
            "id": 537203160,
            "name": "David Duchovny",
            "weight": 1.1122801743574326
        }, {
            "id": 537101573,
            "name": "Hulu.com",
            "weight": 1.0521569216894635
        }, {
            "id": 537070898,
            "name": "ITV",
            "weight": 1.037126108522471
        }, {
            "id": 537074942,
            "name": "Jimmy Fallon",
            "weight": 1.0070644821884864
        }]
    }, {
        "id": 268449474,
        "name": "Movies",
        "weight": 24.32124921531701,
        "topics": [{
            "id": 268457457,
            "name": "Movie Awards",
            "weight": 40.264558799806423,
            "topics": [{
                "id": 268457466,
                "name": "Academy Awards",
                "weight": 82.7724358974359,
                "topics": [{
                    "id": 537269050,
                    "name": "Cate Blanchett",
                    "weight": 13.262342691190707
                }, {
                    "id": 537192696,
                    "name": "Tom Hanks",
                    "weight": 8.9060987415295259
                }, {
                    "id": 537097446,
                    "name": "Academy of Motion Picture Arts and Sciences",
                    "weight": 8.1316553727008714
                }, {
                    "id": 537193825,
                    "name": "Clint Eastwood",
                    "weight": 3.4365924491771538
                }, {
                    "id": 537074923,
                    "name": "Brad Pitt",
                    "weight": 2.6137463697967087
                }, {
                    "id": 537178100,
                    "name": "Meryl Streep",
                    "weight": 2.3717328170377541
                }, {
                    "id": 538573828,
                    "name": "Chris Rock",
                    "weight": 2.1781219748305904
                }, {
                    "id": 537194583,
                    "name": "Martin Scorsese",
                    "weight": 2.0813165537270089
                }, {
                    "id": 537323505,
                    "name": "Alejandro González Iñárritu",
                    "weight": 1.887705711519845
                }]
            }, {
                "id": 268490709,
                "name": "Golden Globe Awards",
                "weight": 12.5,
                "topics": [{
                    "id": 538279809,
                    "name": "Jennifer Lawrence",
                    "weight": 55.769230769230766
                }, {
                    "id": 537194250,
                    "name": "Ricky Gervais",
                    "weight": 7.6923076923076925
                }, {
                    "id": 537201153,
                    "name": "Barbra Streisand",
                    "weight": 7.0512820512820511
                }, {
                    "id": 537195570,
                    "name": "Rob Lowe",
                    "weight": 3.2051282051282053
                }]
            }]
        }, {
            "id": 268490449,
            "name": "Documentaries",
            "weight": 15.567026939829004
        }, {
            "id": 268486116,
            "name": "Filmmaking",
            "weight": 10.582351992256816,
            "topics": [{
                "id": 537190932,
                "name": "Quentin Tarantino",
                "weight": 14.786585365853659
            }, {
                "id": 537069933,
                "name": "Steven Spielberg",
                "weight": 7.774390243902439
            }, {
                "id": 537198880,
                "name": "Christopher Nolan",
                "weight": 3.5060975609756095
            }]
        }, {
            "id": 268490427,
            "name": "Comedy Movies",
            "weight": 10.066139699951606
        }, {
            "id": 537629666,
            "name": "Star Wars",
            "weight": 9.5015325052427819
        }, {
            "id": 537660688,
            "name": "Ryan Reynolds",
            "weight": 8.8885304081303431
        }, {
            "id": 268490438,
            "name": "Young Adult Movies",
            "weight": 8.2110017744797545
        }, {
            "id": 268490240,
            "name": "DVD & Blu-ray Reviews",
            "weight": 8.0658170672689149
        }, {
            "id": 268490430,
            "name": "Action Movies",
            "weight": 6.4203903855460558
        }, {
            "id": 268490435,
            "name": "Romance Movies",
            "weight": 6.4042587514115183
        }, {
            "id": 537117003,
            "name": "Warner Bros. Entertainment Company",
            "weight": 5.7589933860300047
        }, {
            "id": 268490428,
            "name": "Drama Movies",
            "weight": 4.9685433134376513
        }, {
            "id": 268490648,
            "name": "Film Festivals",
            "weight": 4.7749637038231976,
            "topics": [{
                "id": 268487239,
                "name": "Sundance Film Festival",
                "weight": 60.810810810810814,
                "topics": [{
                    "id": 538570964,
                    "name": "Sundance Film Festival",
                    "weight": 81.666666666666671
                }]
            }, {
                "id": 268490124,
                "name": "Cannes Film Festival",
                "weight": 45.608108108108105,
                "topics": [{
                    "id": 537197605,
                    "name": "Natalie Portman",
                    "weight": 31.111111111111111
                }, {
                    "id": 537194252,
                    "name": "Benicio del Toro",
                    "weight": 19.25925925925926
                }, {
                    "id": 537245763,
                    "name": "Naomi Watts",
                    "weight": 13.333333333333334
                }, {
                    "id": 537211577,
                    "name": "Xavier Dolan",
                    "weight": 8.1481481481481488
                }, {
                    "id": 537770311,
                    "name": "Gérard Depardieu",
                    "weight": 7.4074074074074074
                }, {
                    "id": 537774812,
                    "name": "Isabelle Huppert",
                    "weight": 7.4074074074074074
                }, {
                    "id": 537194347,
                    "name": "Marion Cotillard",
                    "weight": 5.1851851851851851
                }, {
                    "id": 537196397,
                    "name": "Gus Van Sant",
                    "weight": 5.1851851851851851
                }, {
                    "id": 537201920,
                    "name": "Aishwarya Rai",
                    "weight": 5.1851851851851851
                }, {
                    "id": 537362753,
                    "name": "Hou Hsiao-Hsien",
                    "weight": 4.4444444444444446
                }, {
                    "id": 538106621,
                    "name": "Gaspar Noé",
                    "weight": 2.9629629629629628
                }, {
                    "id": 537974086,
                    "name": "Léa Seydoux",
                    "weight": 1.4814814814814814
                }, {
                    "id": 537732646,
                    "name": "Emmanuelle Bercot",
                    "weight": 1.4814814814814814
                }, {
                    "id": 538240447,
                    "name": "Un Certain Regard",
                    "weight": 1.4814814814814814
                }]
            }, {
                "id": 268490522,
                "name": "Toronto International Film Festival",
                "weight": 11.486486486486486
            }, {
                "id": 268489992,
                "name": "New York Film Festival",
                "weight": 5.0675675675675675
            }]
        }, {
            "id": 268490442,
            "name": "Supernatural Movies",
            "weight": 4.4361993869979033
        }, {
            "id": 537269050,
            "name": "Cate Blanchett",
            "weight": 4.420067752863365
        }, {
            "id": 537152275,
            "name": "Paramount-Famous Players-Lasky Company",
            "weight": 4.16196160671076
        }, {
            "id": 537192696,
            "name": "Tom Hanks",
            "weight": 2.9682206807549605
        }, {
            "id": 538279809,
            "name": "Jennifer Lawrence",
            "weight": 2.8069043394095821
        }, {
            "id": 537177948,
            "name": "Leonardo DiCaprio",
            "weight": 2.6778512663332794
        }, {
            "id": 268490433,
            "name": "Science Fiction Movies",
            "weight": 2.5487981932569768
        }, {
            "id": 268490444,
            "name": "Crime Movies",
            "weight": 1.984190998548153
        }, {
            "id": 268489816,
            "name": "Horror Movies",
            "weight": 1.9196644620100016
        }, {
            "id": 268490424,
            "name": "Independent Film",
            "weight": 1.7744797547991611,
            "topics": [{
                "id": 537196653,
                "name": "Robert Redford",
                "weight": 40.909090909090907
            }, {
                "id": 537717909,
                "name": "Michael Fassbender",
                "weight": 32.727272727272727
            }, {
                "id": 537191706,
                "name": "Colin Farrell",
                "weight": 6.3636363636363633
            }]
        }, {
            "id": 537189392,
            "name": "Harrison Ford",
            "weight": 1.6776899499919342
        }, {
            "id": 268490436,
            "name": "Family Movies",
            "weight": 1.5647685110501695
        }, {
            "id": 268490448,
            "name": "Adventure Movies",
            "weight": 1.5647685110501695
        }, {
            "id": 537190932,
            "name": "Quentin Tarantino",
            "weight": 1.5647685110501695
        }, {
            "id": 268485701,
            "name": "Bollywood",
            "weight": 1.5002419745120181,
            "topics": [{
                "id": 537075414,
                "name": "Abhishek Bachchan",
                "weight": 18.27956989247312
            }, {
                "id": 538053930,
                "name": "Kajol",
                "weight": 17.204301075268816
            }, {
                "id": 537222786,
                "name": "Shahrukh Khan",
                "weight": 17.204301075268816
            }, {
                "id": 538026633,
                "name": "Deepika Padukone",
                "weight": 16.129032258064516
            }, {
                "id": 538577476,
                "name": "Shah Rukh Khan",
                "weight": 15.053763440860216
            }, {
                "id": 537197740,
                "name": "Priyanka Chopra",
                "weight": 15.053763440860216
            }, {
                "id": 537751505,
                "name": "Salman Khan",
                "weight": 15.053763440860216
            }, {
                "id": 537220476,
                "name": "Sanjay Leela Bhansali",
                "weight": 13.978494623655914
            }, {
                "id": 537988435,
                "name": "Rohit Shetty",
                "weight": 11.827956989247312
            }, {
                "id": 538028923,
                "name": "Sonam Kapoor",
                "weight": 9.67741935483871
            }, {
                "id": 537201920,
                "name": "Aishwarya Rai",
                "weight": 7.5268817204301079
            }, {
                "id": 537194319,
                "name": "Katrina Kaif",
                "weight": 6.4516129032258061
            }, {
                "id": 537210315,
                "name": "R. Madhavan",
                "weight": 6.4516129032258061
            }, {
                "id": 538030863,
                "name": "Irrfan Khan",
                "weight": 6.4516129032258061
            }, {
                "id": 537194228,
                "name": "Karan Johar",
                "weight": 5.376344086021505
            }, {
                "id": 537222936,
                "name": "Kareena Kapoor",
                "weight": 5.376344086021505
            }, {
                "id": 537760265,
                "name": "Ranbir Kapoor",
                "weight": 5.376344086021505
            }, {
                "id": 537240820,
                "name": "Farhan Akhtar",
                "weight": 5.376344086021505
            }, {
                "id": 538078993,
                "name": "Filmfare",
                "weight": 4.301075268817204
            }, {
                "id": 538015100,
                "name": "Alia Bhatt",
                "weight": 4.301075268817204
            }, {
                "id": 537142227,
                "name": "Yash Raj Films Pvt. Ltd.",
                "weight": 3.225806451612903
            }, {
                "id": 537189609,
                "name": "Saif Ali Khan",
                "weight": 3.225806451612903
            }, {
                "id": 537736125,
                "name": "Rishi Kapoor",
                "weight": 3.225806451612903
            }, {
                "id": 537215204,
                "name": "Ajay Devgan",
                "weight": 3.225806451612903
            }, {
                "id": 538278179,
                "name": "Riteish Deshmukh",
                "weight": 3.225806451612903
            }, {
                "id": 537937172,
                "name": "Arjun Sarja",
                "weight": 2.150537634408602
            }, {
                "id": 537189522,
                "name": "Anil Kapoor",
                "weight": 2.150537634408602
            }, {
                "id": 537190304,
                "name": "Vidya Balan",
                "weight": 2.150537634408602
            }, {
                "id": 537200917,
                "name": "Rajkumar Hirani",
                "weight": 2.150537634408602
            }, {
                "id": 537202257,
                "name": "Aamir Khan",
                "weight": 2.150537634408602
            }, {
                "id": 537231331,
                "name": "Sooraj R. Barjatya",
                "weight": 2.150537634408602
            }, {
                "id": 537211882,
                "name": "Mahesh Babu",
                "weight": 2.150537634408602
            }, {
                "id": 537216604,
                "name": "Anurag Kashyap",
                "weight": 2.150537634408602
            }, {
                "id": 538022785,
                "name": "Jacqueline Fernandez",
                "weight": 2.150537634408602
            }, {
                "id": 537782507,
                "name": "Anushka Sharma",
                "weight": 2.150537634408602
            }, {
                "id": 537957606,
                "name": "Rakesh Roshan",
                "weight": 1.075268817204301
            }, {
                "id": 537198270,
                "name": "Ram Gopal Varma",
                "weight": 1.075268817204301
            }, {
                "id": 537204386,
                "name": "Mani Ratnam",
                "weight": 1.075268817204301
            }, {
                "id": 537207311,
                "name": "Shahid Kapoor",
                "weight": 1.075268817204301
            }, {
                "id": 537217944,
                "name": "Kamal Haasan",
                "weight": 1.075268817204301
            }, {
                "id": 537220133,
                "name": "Farah Khan",
                "weight": 1.075268817204301
            }, {
                "id": 537227906,
                "name": "Anupam Kher",
                "weight": 1.075268817204301
            }, {
                "id": 538019179,
                "name": "Varun Dhawan",
                "weight": 1.075268817204301
            }, {
                "id": 537763187,
                "name": "Madhuri Dixit",
                "weight": 1.075268817204301
            }, {
                "id": 538027790,
                "name": "Kangana Ranaut",
                "weight": 1.075268817204301
            }, {
                "id": 537240463,
                "name": "Hrithik Roshan",
                "weight": 1.075268817204301
            }]
        }, {
            "id": 268490440,
            "name": "Fantasy Movies",
            "weight": 1.403452169704791
        }, {
            "id": 268487127,
            "name": "Short Film",
            "weight": 1.3873205355702534,
            "topics": [{
                "id": 537671797,
                "name": "Martin Freeman",
                "weight": 19.767441860465116
            }, {
                "id": 537194982,
                "name": "Hayao Miyazaki",
                "weight": 18.6046511627907
            }, {
                "id": 537193850,
                "name": "Kristen Bell",
                "weight": 12.790697674418604
            }, {
                "id": 538242384,
                "name": "Viddsee",
                "weight": 1.1627906976744187
            }, {
                "id": 537205473,
                "name": "Emilia Fox",
                "weight": 1.1627906976744187
            }, {
                "id": 537767617,
                "name": "Karen Gillan",
                "weight": 1.1627906976744187
            }]
        }, {
            "id": 537192276,
            "name": "Bradley Cooper",
            "weight": 1.3389256331666397
        }, {
            "id": 537762726,
            "name": "Mad Max 4: Fury Road",
            "weight": 1.2098725600903371
        }, {
            "id": 537104454,
            "name": "Pixar Animation Studios",
            "weight": 1.1453460235521857
        }, {
            "id": 537193825,
            "name": "Clint Eastwood",
            "weight": 1.1453460235521857
        }, {
            "id": 537135419,
            "name": "Lucasfilm, Limited",
            "weight": 1.0808194870140346
        }, {
            "id": 537193987,
            "name": "Matt Damon",
            "weight": 1.0646878528794967
        }, {
            "id": 538292552,
            "name": "Jurassic World",
            "weight": 1.0646878528794967
        }]
    }, {
        "id": 268445460,
        "name": "Music",
        "weight": 14.865819209039548,
        "topics": [{
            "id": 268485881,
            "name": "Country Music",
            "weight": 31.617841119028768,
            "topics": [{
                "id": 537202165,
                "name": "Steven Tyler",
                "weight": 26.627712854757931
            }, {
                "id": 537127488,
                "name": "Academy of Country Music",
                "weight": 26.210350584307179
            }, {
                "id": 537194026,
                "name": "Carrie Underwood",
                "weight": 25.375626043405678
            }, {
                "id": 537188960,
                "name": "Blake Shelton",
                "weight": 19.449081803005008
            }, {
                "id": 268485689,
                "name": "Bluegrass",
                "weight": 18.614357262103507,
                "topics": [{
                    "id": 537195009,
                    "name": "Steve Martin",
                    "weight": 10.31390134529148
                }, {
                    "id": 537224197,
                    "name": "Vince Gill",
                    "weight": 8.52017937219731
                }, {
                    "id": 537214066,
                    "name": "Jerry Garcia",
                    "weight": 3.1390134529147984
                }, {
                    "id": 537224368,
                    "name": "Sara Watkins",
                    "weight": 2.6905829596412558
                }, {
                    "id": 537206594,
                    "name": "Alan Jackson",
                    "weight": 2.2421524663677128
                }, {
                    "id": 537285121,
                    "name": "Chris Thile",
                    "weight": 1.3452914798206279
                }, {
                    "id": 537203193,
                    "name": "Emmylou Harris",
                    "weight": 1.3452914798206279
                }, {
                    "id": 537212148,
                    "name": "Gillian Welch",
                    "weight": 1.3452914798206279
                }, {
                    "id": 537228995,
                    "name": "Ralph Stanley",
                    "weight": 1.3452914798206279
                }, {
                    "id": 538084050,
                    "name": "Nickel Creek",
                    "weight": 1.3452914798206279
                }]
            }, {
                "id": 537213155,
                "name": "Luke Bryan",
                "weight": 15.609348914858098
            }, {
                "id": 537210040,
                "name": "Kenny Rogers",
                "weight": 13.939899833055092
            }, {
                "id": 268490700,
                "name": "Outlaw Country",
                "weight": 11.352253756260435,
                "topics": [{
                    "id": 537193396,
                    "name": "Willie Nelson",
                    "weight": 39.705882352941174
                }, {
                    "id": 538574528,
                    "name": "Willie Nelson",
                    "weight": 1.4705882352941178
                }]
            }, {
                "id": 537197396,
                "name": "Keith Urban",
                "weight": 5.7595993322203674
            }, {
                "id": 537194609,
                "name": "Miranda Lambert",
                "weight": 5.2587646076794661
            }, {
                "id": 537193396,
                "name": "Willie Nelson",
                "weight": 4.5075125208681133
            }, {
                "id": 537176721,
                "name": "Dolly Parton",
                "weight": 4.4240400667779634
            }, {
                "id": 537194222,
                "name": "Tim McGraw",
                "weight": 4.4240400667779634
            }, {
                "id": 537195967,
                "name": "Johnny Cash",
                "weight": 4.2570951585976626
            }, {
                "id": 537194629,
                "name": "Faith Hill",
                "weight": 3.5893155258764606
            }, {
                "id": 537537813,
                "name": "The Judds",
                "weight": 2.671118530884808
            }, {
                "id": 537283808,
                "name": "Trisha Yearwood",
                "weight": 2.5041736227045077
            }, {
                "id": 538110425,
                "name": "Dierks Bentley",
                "weight": 2.2537562604340566
            }, {
                "id": 537372374,
                "name": "Little Big Town",
                "weight": 2.2537562604340566
            }, {
                "id": 537219333,
                "name": "Eric Church",
                "weight": 2.003338898163606
            }, {
                "id": 537207084,
                "name": "Brad Paisley",
                "weight": 1.8363939899833055
            }, {
                "id": 537224197,
                "name": "Vince Gill",
                "weight": 1.5859766277128549
            }, {
                "id": 537197168,
                "name": "Garth Brooks",
                "weight": 1.2520868113522539
            }, {
                "id": 537681013,
                "name": "Lady Antebellum",
                "weight": 1.1686143572621035
            }]
        }, {
            "id": 268486989,
            "name": "Rap",
            "weight": 26.260226972816046,
            "topics": [{
                "id": 537193636,
                "name": "Missy Elliott",
                "weight": 29.748743718592966
            }, {
                "id": 537250409,
                "name": "Pharrell Williams",
                "weight": 26.532663316582916
            }, {
                "id": 537630363,
                "name": "Bruno Mars",
                "weight": 26.030150753768844
            }, {
                "id": 537171581,
                "name": "Kanye West",
                "weight": 14.07035175879397
            }, {
                "id": 537323920,
                "name": "Beyoncé",
                "weight": 10.85427135678392
            }, {
                "id": 537191286,
                "name": "Miley Cyrus",
                "weight": 9.64824120603015
            }, {
                "id": 537198111,
                "name": "Will Smith",
                "weight": 9.14572864321608
            }, {
                "id": 537428322,
                "name": "Jay-Z",
                "weight": 8.4422110552763812
            }, {
                "id": 537990285,
                "name": "Kendrick Lamar",
                "weight": 8.4422110552763812
            }, {
                "id": 537203465,
                "name": "Nicki Minaj",
                "weight": 7.2361809045226133
            }, {
                "id": 538062486,
                "name": "Straight Outta Compton",
                "weight": 6.5326633165829149
            }, {
                "id": 537696359,
                "name": "Wiz Khalifa",
                "weight": 6.5326633165829149
            }, {
                "id": 537256433,
                "name": "Dr. Dre",
                "weight": 6.4321608040201008
            }, {
                "id": 537202256,
                "name": "Queen Latifah",
                "weight": 6.0301507537688446
            }, {
                "id": 537245866,
                "name": "Ice Cube",
                "weight": 6.0301507537688446
            }, {
                "id": 537191788,
                "name": "Janet Jackson",
                "weight": 5.125628140703518
            }, {
                "id": 537705004,
                "name": "N.W.A",
                "weight": 5.025125628140704
            }, {
                "id": 537999779,
                "name": "Wu-Tang Clan",
                "weight": 5.025125628140704
            }, {
                "id": 538147150,
                "name": "Bling",
                "weight": 4.5226130653266328
            }, {
                "id": 537194168,
                "name": "Lil Wayne",
                "weight": 4.2211055276381906
            }, {
                "id": 537197790,
                "name": "Mark Ronson",
                "weight": 4.1206030150753765
            }, {
                "id": 538056216,
                "name": "Iggy Azalea",
                "weight": 3.7185929648241207
            }, {
                "id": 537467741,
                "name": "50 Cent",
                "weight": 3.7185929648241207
            }, {
                "id": 537608219,
                "name": "Snoop Dogg",
                "weight": 3.7185929648241207
            }, {
                "id": 537988339,
                "name": "Sean Combs",
                "weight": 3.3165829145728645
            }, {
                "id": 538248907,
                "name": "Macklemore",
                "weight": 3.1155778894472363
            }, {
                "id": 538569715,
                "name": "Meek Mill",
                "weight": 2.71356783919598
            }, {
                "id": 537481764,
                "name": "Eminem",
                "weight": 2.4120603015075375
            }, {
                "id": 538215419,
                "name": "J. Cole",
                "weight": 2.2110552763819094
            }, {
                "id": 537193084,
                "name": "Alicia Keys",
                "weight": 2.2110552763819094
            }, {
                "id": 538017728,
                "name": "Ryan Lewis",
                "weight": 2.2110552763819094
            }, {
                "id": 537267373,
                "name": "Chris Brown",
                "weight": 2.1105527638190953
            }, {
                "id": 537967502,
                "name": "Ghostface Killah",
                "weight": 2.0100502512562812
            }, {
                "id": 537226792,
                "name": "Rick Ross",
                "weight": 1.9095477386934674
            }, {
                "id": 538286705,
                "name": "American Music Awards",
                "weight": 1.9095477386934674
            }, {
                "id": 537140550,
                "name": "Def Jam Recordings",
                "weight": 1.8090452261306533
            }, {
                "id": 537706857,
                "name": "The Notorious B.I.G.",
                "weight": 1.8090452261306533
            }, {
                "id": 537716898,
                "name": "Tupac Shakur",
                "weight": 1.7085427135678393
            }, {
                "id": 537193276,
                "name": "Robin Thicke",
                "weight": 1.6080402010050252
            }, {
                "id": 537647049,
                "name": "Ludacris",
                "weight": 1.6080402010050252
            }, {
                "id": 537254555,
                "name": "Chris Brown",
                "weight": 1.306532663316583
            }, {
                "id": 537720046,
                "name": "Jeremih",
                "weight": 1.1055276381909547
            }, {
                "id": 537190520,
                "name": "Erykah Badu",
                "weight": 1.0050251256281406
            }, {
                "id": 537192618,
                "name": "Mary J. Blige",
                "weight": 1.0050251256281406
            }, {
                "id": 537608368,
                "name": "Raekwon",
                "weight": 1.0050251256281406
            }]
        }, {
            "id": 268486302,
            "name": "Hip Hop",
            "weight": 21.166534705727106,
            "topics": [{
                "id": 537193636,
                "name": "Missy Elliott",
                "weight": 36.907730673316706
            }, {
                "id": 537630363,
                "name": "Bruno Mars",
                "weight": 32.294264339152122
            }, {
                "id": 537171581,
                "name": "Kanye West",
                "weight": 17.456359102244388
            }, {
                "id": 537323920,
                "name": "Beyoncé",
                "weight": 13.466334164588529
            }, {
                "id": 537428322,
                "name": "Jay-Z",
                "weight": 10.473815461346634
            }, {
                "id": 537990285,
                "name": "Kendrick Lamar",
                "weight": 10.473815461346634
            }, {
                "id": 537203465,
                "name": "Nicki Minaj",
                "weight": 8.9775561097256862
            }, {
                "id": 538062486,
                "name": "Straight Outta Compton",
                "weight": 8.1047381546134662
            }, {
                "id": 537696359,
                "name": "Wiz Khalifa",
                "weight": 8.1047381546134662
            }, {
                "id": 537256433,
                "name": "Dr. Dre",
                "weight": 7.9800498753117211
            }, {
                "id": 537245866,
                "name": "Ice Cube",
                "weight": 7.4812967581047385
            }, {
                "id": 537191788,
                "name": "Janet Jackson",
                "weight": 6.3591022443890273
            }, {
                "id": 537705004,
                "name": "N.W.A",
                "weight": 6.2344139650872821
            }, {
                "id": 537999779,
                "name": "Wu-Tang Clan",
                "weight": 6.2344139650872821
            }, {
                "id": 537194168,
                "name": "Lil Wayne",
                "weight": 5.2369077306733169
            }, {
                "id": 537197790,
                "name": "Mark Ronson",
                "weight": 5.1122194513715709
            }, {
                "id": 537428074,
                "name": "Rihanna",
                "weight": 4.7381546134663344
            }, {
                "id": 538056216,
                "name": "Iggy Azalea",
                "weight": 4.6134663341645883
            }, {
                "id": 537467741,
                "name": "50 Cent",
                "weight": 4.6134663341645883
            }, {
                "id": 537608219,
                "name": "Snoop Dogg",
                "weight": 4.6134663341645883
            }, {
                "id": 537988339,
                "name": "Sean Combs",
                "weight": 4.1147132169576057
            }, {
                "id": 538248907,
                "name": "Macklemore",
                "weight": 3.8653366583541149
            }, {
                "id": 537481764,
                "name": "Eminem",
                "weight": 2.9925187032418954
            }, {
                "id": 538215419,
                "name": "J. Cole",
                "weight": 2.7431421446384041
            }, {
                "id": 538017728,
                "name": "Ryan Lewis",
                "weight": 2.7431421446384041
            }, {
                "id": 537920899,
                "name": "Lana Del Rey",
                "weight": 2.6184538653366585
            }, {
                "id": 537226792,
                "name": "Rick Ross",
                "weight": 2.3690773067331672
            }, {
                "id": 537706857,
                "name": "The Notorious B.I.G.",
                "weight": 2.2443890274314215
            }, {
                "id": 537647049,
                "name": "Ludacris",
                "weight": 1.9950124688279303
            }, {
                "id": 537192618,
                "name": "Mary J. Blige",
                "weight": 1.2468827930174564
            }, {
                "id": 537194338,
                "name": "Jennifer Lopez",
                "weight": 1.1221945137157108
            }]
        }, {
            "id": 268445461,
            "name": "Jazz",
            "weight": 19.239904988123516,
            "topics": [{
                "id": 537252332,
                "name": "Lady Gaga",
                "weight": 53.497942386831284
            }, {
                "id": 537198419,
                "name": "Nina Simone",
                "weight": 31.550068587105624
            }, {
                "id": 537193078,
                "name": "Frank Sinatra",
                "weight": 8.9163237311385455
            }, {
                "id": 537193396,
                "name": "Willie Nelson",
                "weight": 7.4074074074074074
            }, {
                "id": 537428307,
                "name": "The Rolling Stones",
                "weight": 6.0356652949245539
            }, {
                "id": 537193721,
                "name": "Stevie Wonder",
                "weight": 4.6639231824417013
            }, {
                "id": 537189347,
                "name": "Miles Davis",
                "weight": 4.5267489711934159
            }, {
                "id": 537122224,
                "name": "John F. Kennedy Center for the Performing Arts",
                "weight": 3.2921810699588478
            }, {
                "id": 537197893,
                "name": "Tony Bennett",
                "weight": 3.017832647462277
            }, {
                "id": 537597996,
                "name": "Wynton Marsalis",
                "weight": 2.7434842249657065
            }, {
                "id": 537199225,
                "name": "Lenny Kravitz",
                "weight": 2.3319615912208507
            }, {
                "id": 537710361,
                "name": "B.B. King",
                "weight": 2.1947873799725652
            }, {
                "id": 537193134,
                "name": "Van Morrison",
                "weight": 2.05761316872428
            }, {
                "id": 537188561,
                "name": "Herbie Hancock",
                "weight": 1.7832647462277091
            }, {
                "id": 537193896,
                "name": "John Coltrane",
                "weight": 1.7832647462277091
            }, {
                "id": 537631382,
                "name": "Blue Note Records",
                "weight": 1.6460905349794239
            }, {
                "id": 537193400,
                "name": "Billie Holiday",
                "weight": 1.5089163237311385
            }, {
                "id": 537197482,
                "name": "Chick Corea",
                "weight": 1.5089163237311385
            }, {
                "id": 537427872,
                "name": "George Gershwin",
                "weight": 1.2345679012345678
            }, {
                "id": 537171685,
                "name": "Ornette Coleman",
                "weight": 1.0973936899862826
            }]
        }, {
            "id": 268445463,
            "name": "Rock Music",
            "weight": 16.970176827659014,
            "topics": [{
                "id": 537189619,
                "name": "Paul McCartney",
                "weight": 39.968895800933126
            }, {
                "id": 537196027,
                "name": "David Bowie",
                "weight": 16.018662519440124
            }, {
                "id": 537517002,
                "name": "The Beatles",
                "weight": 12.28615863141524
            }, {
                "id": 268490492,
                "name": "Indie Rock",
                "weight": 8.7091757387247277,
                "topics": [{
                    "id": 537954858,
                    "name": "Bloc Party",
                    "weight": 17.857142857142858
                }]
            }, {
                "id": 537191559,
                "name": "Kurt Cobain",
                "weight": 6.2208398133748055
            }, {
                "id": 537716720,
                "name": "Guns N' Roses",
                "weight": 5.2877138413685847
            }, {
                "id": 537663716,
                "name": "Pink Floyd",
                "weight": 3.7325038880248833
            }, {
                "id": 537717916,
                "name": "The Beach Boys",
                "weight": 3.5769828926905132
            }, {
                "id": 537197217,
                "name": "Alice Cooper",
                "weight": 3.1104199066874028
            }, {
                "id": 537246372,
                "name": "Jimi Hendrix",
                "weight": 2.9548989113530326
            }, {
                "id": 537680399,
                "name": "Deep Purple",
                "weight": 2.6438569206842923
            }, {
                "id": 537822606,
                "name": "Soundgarden",
                "weight": 2.3328149300155521
            }, {
                "id": 537717618,
                "name": "Led Zeppelin",
                "weight": 2.1772939346811819
            }]
        }, {
            "id": 268489957,
            "name": "Blues",
            "weight": 15.413037740828715,
            "topics": [{
                "id": 538290900,
                "name": "The Moody Blues",
                "weight": 72.945205479452056
            }, {
                "id": 537195967,
                "name": "Johnny Cash",
                "weight": 8.7328767123287676
            }, {
                "id": 537428307,
                "name": "The Rolling Stones",
                "weight": 7.5342465753424657
            }, {
                "id": 537277861,
                "name": "Bob Dylan",
                "weight": 6.3356164383561646
            }, {
                "id": 537194090,
                "name": "Aretha Franklin",
                "weight": 4.9657534246575343
            }, {
                "id": 537663716,
                "name": "Pink Floyd",
                "weight": 4.1095890410958908
            }, {
                "id": 537195507,
                "name": "Eric Clapton",
                "weight": 3.7671232876712328
            }, {
                "id": 537246372,
                "name": "Jimi Hendrix",
                "weight": 3.2534246575342465
            }, {
                "id": 537229624,
                "name": "Gregg Allman",
                "weight": 3.0821917808219177
            }, {
                "id": 537193424,
                "name": "Bonnie Raitt",
                "weight": 2.9109589041095889
            }, {
                "id": 537710361,
                "name": "B.B. King",
                "weight": 2.73972602739726
            }, {
                "id": 538325812,
                "name": "The Black Keys",
                "weight": 2.5684931506849313
            }, {
                "id": 537148341,
                "name": "House of Blues (Chicago)",
                "weight": 2.5684931506849313
            }, {
                "id": 537193134,
                "name": "Van Morrison",
                "weight": 2.5684931506849313
            }, {
                "id": 537200204,
                "name": "Keith Richards",
                "weight": 2.5684931506849313
            }, {
                "id": 537717618,
                "name": "Led Zeppelin",
                "weight": 2.3972602739726026
            }, {
                "id": 538248535,
                "name": "Gary Clark, Jr.",
                "weight": 2.2260273972602738
            }, {
                "id": 537193400,
                "name": "Billie Holiday",
                "weight": 1.8835616438356164
            }, {
                "id": 537215961,
                "name": "Dan Auerbach",
                "weight": 1.8835616438356164
            }, {
                "id": 537712041,
                "name": "Fleetwood Mac",
                "weight": 1.7123287671232876
            }, {
                "id": 537194459,
                "name": "Jack White",
                "weight": 1.36986301369863
            }, {
                "id": 538326928,
                "name": "ZZ Top",
                "weight": 1.1986301369863013
            }, {
                "id": 537230564,
                "name": "T-Bone Burnett",
                "weight": 1.1986301369863013
            }]
        }, {
            "id": 268445472,
            "name": "Pop Music",
            "weight": 15.09633148588018,
            "topics": [{
                "id": 537283017,
                "name": "Michael Jackson",
                "weight": 14.335664335664335
            }, {
                "id": 537517002,
                "name": "The Beatles",
                "weight": 13.811188811188812
            }, {
                "id": 537191788,
                "name": "Janet Jackson",
                "weight": 8.9160839160839167
            }]
        }, {
            "id": 268487031,
            "name": "Rock and Roll",
            "weight": 14.46291897598311,
            "topics": [{
                "id": 537189619,
                "name": "Paul McCartney",
                "weight": 46.8978102189781
            }, {
                "id": 537517002,
                "name": "The Beatles",
                "weight": 14.416058394160585
            }, {
                "id": 537193623,
                "name": "Elvis Presley",
                "weight": 12.408759124087592
            }, {
                "id": 537191788,
                "name": "Janet Jackson",
                "weight": 9.3065693430656928
            }, {
                "id": 537705004,
                "name": "N.W.A",
                "weight": 9.1240875912408761
            }, {
                "id": 537193721,
                "name": "Stevie Wonder",
                "weight": 6.2043795620437958
            }, {
                "id": 537198579,
                "name": "Billy Joel",
                "weight": 6.0218978102189782
            }, {
                "id": 537705930,
                "name": "Aerosmith",
                "weight": 5.8394160583941606
            }, {
                "id": 537200850,
                "name": "Dave Grohl",
                "weight": 5.1094890510948909
            }, {
                "id": 537648164,
                "name": "Van Halen",
                "weight": 4.562043795620438
            }, {
                "id": 537710539,
                "name": "Cheap Trick",
                "weight": 3.832116788321168
            }, {
                "id": 537192531,
                "name": "Joan Jett",
                "weight": 3.832116788321168
            }, {
                "id": 537197217,
                "name": "Alice Cooper",
                "weight": 3.6496350364963503
            }, {
                "id": 537246372,
                "name": "Jimi Hendrix",
                "weight": 3.4671532846715327
            }, {
                "id": 537191398,
                "name": "Patti Smith",
                "weight": 3.2846715328467155
            }, {
                "id": 538013549,
                "name": "Fall Out Boy",
                "weight": 3.2846715328467155
            }, {
                "id": 537680399,
                "name": "Deep Purple",
                "weight": 3.1021897810218979
            }, {
                "id": 537439968,
                "name": "Steely Dan",
                "weight": 2.9197080291970803
            }, {
                "id": 537710361,
                "name": "B.B. King",
                "weight": 2.9197080291970803
            }, {
                "id": 537428221,
                "name": "Red Hot Chili Peppers",
                "weight": 2.9197080291970803
            }, {
                "id": 537445289,
                "name": "Green Day",
                "weight": 2.7372262773722627
            }, {
                "id": 537200204,
                "name": "Keith Richards",
                "weight": 2.7372262773722627
            }, {
                "id": 537189662,
                "name": "Ringo Starr",
                "weight": 2.5547445255474455
            }, {
                "id": 537717618,
                "name": "Led Zeppelin",
                "weight": 2.5547445255474455
            }, {
                "id": 537194093,
                "name": "James Brown",
                "weight": 1.8248175182481752
            }, {
                "id": 537202340,
                "name": "Lou Reed",
                "weight": 1.6423357664233578
            }, {
                "id": 537238005,
                "name": "Darlene Love",
                "weight": 1.2773722627737227
            }, {
                "id": 537191864,
                "name": "Pete Townshend",
                "weight": 1.0948905109489051
            }, {
                "id": 537200107,
                "name": "Bill Withers",
                "weight": 1.0948905109489051
            }, {
                "id": 537230707,
                "name": "Paul Butterfield",
                "weight": 1.0948905109489051
            }, {
                "id": 537195831,
                "name": "Angus Young",
                "weight": 1.0948905109489051
            }]
        }, {
            "id": 537084616,
            "name": "Taylor Swift",
            "weight": 11.612562681446292
        }, {
            "id": 268486706,
            "name": "Music Industry",
            "weight": 9.0525204539456325,
            "topics": [{
                "id": 537074780,
                "name": "Recording Industry Association of America",
                "weight": 10.787172011661808
            }, {
                "id": 537084696,
                "name": "Warner Music Group",
                "weight": 4.6647230320699711
            }]
        }, {
            "id": 268486287,
            "name": "Heavy Metal",
            "weight": 8.4455001319609391,
            "topics": [{
                "id": 537939044,
                "name": "Dee Snider",
                "weight": 68.125
            }, {
                "id": 537699851,
                "name": "Motörhead",
                "weight": 12.1875
            }, {
                "id": 537716720,
                "name": "Guns N' Roses",
                "weight": 10.625
            }, {
                "id": 537665912,
                "name": "Metallica",
                "weight": 7.8125
            }, {
                "id": 537712650,
                "name": "Def Leppard",
                "weight": 7.1875
            }, {
                "id": 537193405,
                "name": "Ozzy Osbourne",
                "weight": 7.1875
            }, {
                "id": 537672105,
                "name": "Black Sabbath",
                "weight": 6.875
            }, {
                "id": 537197217,
                "name": "Alice Cooper",
                "weight": 6.25
            }, {
                "id": 537667605,
                "name": "Iron Maiden",
                "weight": 5.625
            }, {
                "id": 537680399,
                "name": "Deep Purple",
                "weight": 5.3125
            }, {
                "id": 537715772,
                "name": "Megadeth",
                "weight": 5.0
            }, {
                "id": 538023978,
                "name": "Mötley Crüe",
                "weight": 5.0
            }, {
                "id": 537721031,
                "name": "Judas Priest",
                "weight": 1.5625
            }, {
                "id": 537214026,
                "name": "Lars Ulrich",
                "weight": 1.5625
            }, {
                "id": 538038553,
                "name": "Cliff Burton",
                "weight": 1.5625
            }, {
                "id": 537196333,
                "name": "James Hetfield",
                "weight": 1.25
            }, {
                "id": 538035035,
                "name": "Dream Theater",
                "weight": 1.25
            }]
        }, {
            "id": 537127488,
            "name": "Academy of Country Music",
            "weight": 8.2871470044866715
        }, {
            "id": 537194026,
            "name": "Carrie Underwood",
            "weight": 8.0232251253628935
        }, {
            "id": 537193636,
            "name": "Missy Elliott",
            "weight": 7.8120876220638689
        }, {
            "id": 537713063,
            "name": "Coldplay",
            "weight": 7.7593032462391136
        }, {
            "id": 537250409,
            "name": "Pharrell Williams",
            "weight": 6.967537608867775
        }, {
            "id": 537630363,
            "name": "Bruno Mars",
            "weight": 6.835576669305885
        }, {
            "id": 537189619,
            "name": "Paul McCartney",
            "weight": 6.78279229348113
        }, {
            "id": 268490606,
            "name": "Eurovision",
            "weight": 6.6244391660068622,
            "topics": [{
                "id": 537195470,
                "name": "Celine Dion",
                "weight": 80.876494023904385
            }, {
                "id": 537203700,
                "name": "Terry Wogan",
                "weight": 9.56175298804781
            }, {
                "id": 537199687,
                "name": "Graham Norton",
                "weight": 4.7808764940239046
            }, {
                "id": 537715513,
                "name": "ABBA",
                "weight": 4.7808764940239046
            }, {
                "id": 537988570,
                "name": "Abba",
                "weight": 4.7808764940239046
            }, {
                "id": 537227986,
                "name": "Nigella Lawson",
                "weight": 4.7808764940239046
            }, {
                "id": 537201478,
                "name": "Jessica Mauboy",
                "weight": 1.9920318725099602
            }, {
                "id": 538317410,
                "name": "Xavier Naidoo",
                "weight": 1.1952191235059761
            }, {
                "id": 537200440,
                "name": "Cliff Richard",
                "weight": 1.1952191235059761
            }, {
                "id": 538030175,
                "name": "Mel Giedroyc",
                "weight": 1.1952191235059761
            }]
        }, {
            "id": 537674982,
            "name": "U2",
            "weight": 5.7798891528107683
        }, {
            "id": 537937100,
            "name": "Ed Sheeran",
            "weight": 4.9353391396146744
        }, {
            "id": 537213155,
            "name": "Luke Bryan",
            "weight": 4.9353391396146744
        }, {
            "id": 268490629,
            "name": "Music Festivals",
            "weight": 4.1699656901557143
        }, {
            "id": 268445469,
            "name": "Classical Music",
            "weight": 3.7212984956452888,
            "topics": [{
                "id": 537651581,
                "name": "Ludwig van Beethoven",
                "weight": 12.056737588652481
            }, {
                "id": 537428384,
                "name": "Wolfgang Amadeus Mozart",
                "weight": 5.6737588652482271
            }, {
                "id": 537310896,
                "name": "Igor Stravinsky",
                "weight": 5.6737588652482271
            }, {
                "id": 537197019,
                "name": "Daniel Barenboim",
                "weight": 4.25531914893617
            }, {
                "id": 537259095,
                "name": "Andrea Bocelli",
                "weight": 2.8368794326241136
            }, {
                "id": 537196172,
                "name": "Philip Glass",
                "weight": 2.1276595744680851
            }]
        }, {
            "id": 537171581,
            "name": "Kanye West",
            "weight": 3.6949063077329112
        }, {
            "id": 537682904,
            "name": "Adele",
            "weight": 3.0878859857482186
        }, {
            "id": 537194044,
            "name": "Justin Bieber",
            "weight": 3.0087094220110848
        }, {
            "id": 537964524,
            "name": "One Direction",
            "weight": 2.8767484824491949
        }, {
            "id": 537323920,
            "name": "Beyoncé",
            "weight": 2.8503562945368173
        }, {
            "id": 537587540,
            "name": "Spotify",
            "weight": 2.8239641066244392
        }, {
            "id": 268486034,
            "name": "Electronic Music",
            "weight": 2.5864344154130379,
            "topics": [{
                "id": 537953877,
                "name": "Björk",
                "weight": 28.571428571428573
            }, {
                "id": 268487286,
                "name": "Techno Music",
                "weight": 25.510204081632654
            }, {
                "id": 537718712,
                "name": "Radiohead",
                "weight": 25.510204081632654
            }, {
                "id": 268487335,
                "name": "Trance Music",
                "weight": 17.346938775510203,
                "topics": [{
                    "id": 537197968,
                    "name": "Armin van Buuren",
                    "weight": 5.882352941176471
                }, {
                    "id": 537657182,
                    "name": "Black Hole Recordings",
                    "weight": 5.882352941176471
                }]
            }, {
                "id": 537195199,
                "name": "Thom Yorke",
                "weight": 15.306122448979592
            }, {
                "id": 537659547,
                "name": "Daft Punk",
                "weight": 12.244897959183673
            }, {
                "id": 538277610,
                "name": "Deadmau5",
                "weight": 8.16326530612245
            }, {
                "id": 537714348,
                "name": "Depeche Mode",
                "weight": 2.0408163265306123
            }, {
                "id": 538095643,
                "name": "Aphex Twin",
                "weight": 1.0204081632653061
            }]
        }, {
            "id": 537428322,
            "name": "Jay-Z",
            "weight": 2.2169437846397466
        }, {
            "id": 268486957,
            "name": "Psychedelic Music",
            "weight": 2.2169437846397466
        }, {
            "id": 537990285,
            "name": "Kendrick Lamar",
            "weight": 2.2169437846397466
        }, {
            "id": 537517002,
            "name": "The Beatles",
            "weight": 2.0849828450778571
        }, {
            "id": 537203465,
            "name": "Nicki Minaj",
            "weight": 1.9002375296912113
        }, {
            "id": 537193623,
            "name": "Elvis Presley",
            "weight": 1.7946687780416997
        }, {
            "id": 268486136,
            "name": "Folk Music",
            "weight": 1.7682765901293218,
            "topics": [{
                "id": 537277861,
                "name": "Bob Dylan",
                "weight": 55.223880597014926
            }, {
                "id": 537200059,
                "name": "Woody Guthrie",
                "weight": 23.880597014925375
            }, {
                "id": 537193134,
                "name": "Van Morrison",
                "weight": 22.388059701492537
            }, {
                "id": 537177806,
                "name": "Pete Seeger",
                "weight": 13.432835820895523
            }, {
                "id": 537200062,
                "name": "Joan Baez",
                "weight": 5.9701492537313436
            }, {
                "id": 537103831,
                "name": "North American Folk Music and Dance Alliance",
                "weight": 2.9850746268656718
            }, {
                "id": 537203107,
                "name": "Alan Lomax",
                "weight": 1.4925373134328359
            }, {
                "id": 537225698,
                "name": "Bert Jansch",
                "weight": 1.4925373134328359
            }]
        }, {
            "id": 538062486,
            "name": "Straight Outta Compton",
            "weight": 1.7154922143045659
        }, {
            "id": 537696359,
            "name": "Wiz Khalifa",
            "weight": 1.7154922143045659
        }, {
            "id": 537256433,
            "name": "Dr. Dre",
            "weight": 1.6891000263921878
        }, {
            "id": 537194609,
            "name": "Miranda Lambert",
            "weight": 1.66270783847981
        }, {
            "id": 537171590,
            "name": "Britney Spears",
            "weight": 1.5571390868302983
        }, {
            "id": 537191657,
            "name": "Mariah Carey",
            "weight": 1.5043547110055424
        }, {
            "id": 537193396,
            "name": "Willie Nelson",
            "weight": 1.4251781472684086
        }, {
            "id": 537191788,
            "name": "Janet Jackson",
            "weight": 1.3460015835312746
        }, {
            "id": 537705004,
            "name": "N.W.A",
            "weight": 1.3196093956188968
        }, {
            "id": 537193192,
            "name": "John Legend",
            "weight": 1.3196093956188968
        }, {
            "id": 268486998,
            "name": "Reggae",
            "weight": 1.2668250197941409,
            "topics": [{
                "id": 538326899,
                "name": "Major Lazer",
                "weight": 37.5
            }, {
                "id": 537193988,
                "name": "Bob Marley",
                "weight": 27.083333333333332
            }, {
                "id": 537193687,
                "name": "Bob Marley",
                "weight": 4.166666666666667
            }, {
                "id": 538017802,
                "name": "Bob Marley & The Wailers",
                "weight": 4.166666666666667
            }, {
                "id": 537224411,
                "name": "Jimmy Cliff",
                "weight": 4.166666666666667
            }, {
                "id": 537202775,
                "name": "Ziggy Marley",
                "weight": 2.0833333333333335
            }, {
                "id": 538021849,
                "name": "UB40",
                "weight": 2.0833333333333335
            }, {
                "id": 537357221,
                "name": "Levi Roots",
                "weight": 2.0833333333333335
            }]
        }, {
            "id": 537211019,
            "name": "Demi Lovato",
            "weight": 1.2668250197941409
        }]
    }, {
        "id": 268490453,
        "name": "Geek Culture",
        "weight": 10.051789077212806,
        "topics": [{
            "id": 268449461,
            "name": "Comics",
            "weight": 34.074941451990632,
            "topics": [{
                "id": 537660688,
                "name": "Ryan Reynolds",
                "weight": 63.115693012600232
            }, {
                "id": 537140849,
                "name": "Timely Marvel Comics",
                "weight": 25.31500572737686
            }, {
                "id": 537742359,
                "name": "Supergirl",
                "weight": 16.380297823596791
            }, {
                "id": 537193430,
                "name": "Stan Lee",
                "weight": 6.0710194730813285
            }, {
                "id": 537929257,
                "name": "Wonder Woman",
                "weight": 5.61282932416953
            }, {
                "id": 538038558,
                "name": "Iron Man",
                "weight": 5.4982817869415808
            }, {
                "id": 537632571,
                "name": "The Flash",
                "weight": 4.6964490263459338
            }, {
                "id": 537283379,
                "name": "Chris Hemsworth",
                "weight": 4.3528064146620844
            }, {
                "id": 537997041,
                "name": "Ant-Man",
                "weight": 4.0091638029782359
            }, {
                "id": 537329688,
                "name": "Justice League",
                "weight": 3.8946162657502863
            }, {
                "id": 538335854,
                "name": "Suicide Squad",
                "weight": 3.5509736540664374
            }, {
                "id": 537602036,
                "name": "Iron Man",
                "weight": 3.3218785796105386
            }, {
                "id": 537136582,
                "name": "National Periodical Publications",
                "weight": 2.6345933562428407
            }, {
                "id": 538283058,
                "name": "Fantastic Four",
                "weight": 2.4054982817869415
            }, {
                "id": 537642222,
                "name": "Batman Begins",
                "weight": 2.2909507445589918
            }, {
                "id": 268486718,
                "name": "Naruto",
                "weight": 2.1764032073310422,
                "topics": [{
                    "id": 537126943,
                    "name": "Viz Communications, Inc.",
                    "weight": 15.789473684210526
                }]
            }, {
                "id": 537586215,
                "name": "X-Men Origins: Wolverine",
                "weight": 2.1764032073310422
            }, {
                "id": 537102911,
                "name": "Marvel Entertainment Group Inc.",
                "weight": 2.1764032073310422
            }, {
                "id": 537611974,
                "name": "Fantastic Four",
                "weight": 2.0618556701030926
            }, {
                "id": 538279588,
                "name": "Matt Murdock",
                "weight": 2.0618556701030926
            }, {
                "id": 537345697,
                "name": "X-Men (comic book)",
                "weight": 1.9473081328751431
            }, {
                "id": 537734243,
                "name": "Robert Kirkman",
                "weight": 1.8327605956471935
            }, {
                "id": 537645603,
                "name": "Peter Parker",
                "weight": 1.4891179839633448
            }, {
                "id": 537284711,
                "name": "Joss Whedon",
                "weight": 1.2600229095074456
            }, {
                "id": 537709887,
                "name": "Green Lantern",
                "weight": 1.2600229095074456
            }, {
                "id": 537189581,
                "name": "Neil Gaiman",
                "weight": 1.2600229095074456
            }, {
                "id": 537705157,
                "name": "Free Comic Book Day",
                "weight": 1.1454753722794959
            }, {
                "id": 537111560,
                "name": "Image Comics",
                "weight": 1.1454753722794959
            }, {
                "id": 537122689,
                "name": "List of current IDW Productions publications",
                "weight": 1.1454753722794959
            }]
        }, {
            "id": 268487243,
            "name": "Superheroes",
            "weight": 13.348946135831381,
            "topics": [{
                "id": 537140849,
                "name": "Timely Marvel Comics",
                "weight": 64.619883040935676
            }, {
                "id": 537193430,
                "name": "Stan Lee",
                "weight": 15.497076023391813
            }, {
                "id": 538038558,
                "name": "Iron Man",
                "weight": 14.035087719298245
            }, {
                "id": 537329688,
                "name": "Justice League",
                "weight": 9.9415204678362574
            }, {
                "id": 537602036,
                "name": "Iron Man",
                "weight": 8.47953216374269
            }, {
                "id": 537136582,
                "name": "National Periodical Publications",
                "weight": 6.7251461988304095
            }, {
                "id": 538283058,
                "name": "Fantastic Four",
                "weight": 6.1403508771929829
            }, {
                "id": 537611974,
                "name": "Fantastic Four",
                "weight": 5.2631578947368425
            }, {
                "id": 537613172,
                "name": "X-Men (film)",
                "weight": 4.6783625730994149
            }, {
                "id": 537645603,
                "name": "Peter Parker",
                "weight": 3.801169590643275
            }, {
                "id": 537638262,
                "name": "Peter Parker",
                "weight": 2.0467836257309941
            }]
        }, {
            "id": 268487496,
            "name": "Zombies",
            "weight": 5.4254488680718191,
            "topics": [{
                "id": 537273754,
                "name": "Seth Grahame-Smith",
                "weight": 16.546762589928058
            }, {
                "id": 537696306,
                "name": "Call of Duty: Black Ops",
                "weight": 15.827338129496402
            }, {
                "id": 537734243,
                "name": "Robert Kirkman",
                "weight": 11.510791366906474
            }, {
                "id": 538000810,
                "name": "Zombie Apocalypse",
                "weight": 9.3525179856115113
            }, {
                "id": 537210546,
                "name": "Rob Zombie",
                "weight": 7.9136690647482011
            }, {
                "id": 537662334,
                "name": "Resident Evil",
                "weight": 4.3165467625899279
            }, {
                "id": 537859331,
                "name": "Dead Island",
                "weight": 2.8776978417266186
            }, {
                "id": 537865754,
                "name": "Plants vs. Zombies",
                "weight": 2.8776978417266186
            }, {
                "id": 537203145,
                "name": "George A. Romero",
                "weight": 2.1582733812949639
            }, {
                "id": 537580891,
                "name": "Shaun of the Dead",
                "weight": 1.4388489208633093
            }]
        }, {
            "id": 268489926,
            "name": "Anime and Manga",
            "weight": 4.7228727556596413,
            "topics": [{
                "id": 268485548,
                "name": "Anime",
                "weight": 91.735537190082638,
                "topics": [{
                    "id": 537072810,
                    "name": "Square Enix",
                    "weight": 33.333333333333336
                }, {
                    "id": 537956060,
                    "name": "Sanrio",
                    "weight": 15.315315315315315
                }, {
                    "id": 537194982,
                    "name": "Hayao Miyazaki",
                    "weight": 14.414414414414415
                }, {
                    "id": 537134727,
                    "name": "Kabushiki-gaisha Sutajio Jiburi",
                    "weight": 12.612612612612613
                }, {
                    "id": 537119836,
                    "name": "Crunchyroll",
                    "weight": 12.612612612612613
                }, {
                    "id": 537136293,
                    "name": "Namco Bandai Holdings (USA), Inc.",
                    "weight": 9.90990990990991
                }, {
                    "id": 537129030,
                    "name": "Bandai Digital Entertainment Corporation",
                    "weight": 7.2072072072072073
                }, {
                    "id": 537812921,
                    "name": "Mega Man",
                    "weight": 6.3063063063063067
                }, {
                    "id": 537826242,
                    "name": "Dragon Ball Z",
                    "weight": 6.3063063063063067
                }, {
                    "id": 537833769,
                    "name": "Monster Hunter",
                    "weight": 6.3063063063063067
                }, {
                    "id": 537672398,
                    "name": "Neon Genesis Evangelion",
                    "weight": 5.4054054054054053
                }, {
                    "id": 538096919,
                    "name": "Mobile Suit Gundam",
                    "weight": 4.5045045045045047
                }, {
                    "id": 537117417,
                    "name": "A. D. Vision, Incorporated",
                    "weight": 4.5045045045045047
                }, {
                    "id": 537808345,
                    "name": "The Idolmaster",
                    "weight": 3.6036036036036037
                }, {
                    "id": 537816411,
                    "name": "JoJo's Bizarre Adventure",
                    "weight": 3.6036036036036037
                }, {
                    "id": 537124624,
                    "name": "Properties licensed by Funimation",
                    "weight": 2.7027027027027026
                }, {
                    "id": 537126943,
                    "name": "Viz Communications, Inc.",
                    "weight": 2.7027027027027026
                }, {
                    "id": 537154062,
                    "name": "SME Visual Works Inc.",
                    "weight": 2.7027027027027026
                }, {
                    "id": 537792036,
                    "name": "Akira Toriyama",
                    "weight": 1.8018018018018018
                }, {
                    "id": 537136964,
                    "name": "Nippon Ichi Software",
                    "weight": 1.8018018018018018
                }, {
                    "id": 537140867,
                    "name": "Toei Animation Co., Ltd.",
                    "weight": 1.8018018018018018
                }, {
                    "id": 537213677,
                    "name": "Osamu Tezuka",
                    "weight": 1.8018018018018018
                }, {
                    "id": 538024362,
                    "name": "Saint Seiya",
                    "weight": 1.8018018018018018
                }]
            }, {
                "id": 268486594,
                "name": "Manga",
                "weight": 57.851239669421489,
                "topics": [{
                    "id": 537194982,
                    "name": "Hayao Miyazaki",
                    "weight": 22.857142857142858
                }, {
                    "id": 537134727,
                    "name": "Kabushiki-gaisha Sutajio Jiburi",
                    "weight": 20.0
                }, {
                    "id": 537119836,
                    "name": "Crunchyroll",
                    "weight": 20.0
                }, {
                    "id": 537826242,
                    "name": "Dragon Ball Z",
                    "weight": 10.0
                }, {
                    "id": 537112145,
                    "name": "Kadokawa Shoten Publishing Co.",
                    "weight": 8.5714285714285712
                }, {
                    "id": 538096919,
                    "name": "Mobile Suit Gundam",
                    "weight": 7.1428571428571432
                }, {
                    "id": 537102273,
                    "name": "Jump Comics",
                    "weight": 7.1428571428571432
                }, {
                    "id": 537117417,
                    "name": "A. D. Vision, Incorporated",
                    "weight": 7.1428571428571432
                }, {
                    "id": 537816411,
                    "name": "JoJo's Bizarre Adventure",
                    "weight": 5.7142857142857144
                }, {
                    "id": 537125324,
                    "name": "Shogakukan Productions Co., Ltd.",
                    "weight": 5.7142857142857144
                }, {
                    "id": 537149623,
                    "name": "Kodansha International Ltd.",
                    "weight": 4.2857142857142856
                }, {
                    "id": 537126943,
                    "name": "Viz Communications, Inc.",
                    "weight": 4.2857142857142856
                }, {
                    "id": 537792036,
                    "name": "Akira Toriyama",
                    "weight": 2.8571428571428572
                }, {
                    "id": 537140867,
                    "name": "Toei Animation Co., Ltd.",
                    "weight": 2.8571428571428572
                }, {
                    "id": 537213677,
                    "name": "Osamu Tezuka",
                    "weight": 2.8571428571428572
                }, {
                    "id": 538024362,
                    "name": "Saint Seiya",
                    "weight": 2.8571428571428572
                }, {
                    "id": 537276698,
                    "name": "Weekly Young Jump",
                    "weight": 1.4285714285714286
                }, {
                    "id": 537799292,
                    "name": "ASCII Media Works",
                    "weight": 1.4285714285714286
                }]
            }, {
                "id": 537826242,
                "name": "Dragon Ball Z",
                "weight": 5.785123966942149
            }, {
                "id": 537672398,
                "name": "Neon Genesis Evangelion",
                "weight": 4.9586776859504136
            }, {
                "id": 537816411,
                "name": "JoJo's Bizarre Adventure",
                "weight": 3.3057851239669422
            }, {
                "id": 537126943,
                "name": "Viz Communications, Inc.",
                "weight": 2.4793388429752068
            }]
        }, {
            "id": 268490529,
            "name": "Comic-Con",
            "weight": 4.7228727556596413,
            "topics": [{
                "id": 537193430,
                "name": "Stan Lee",
                "weight": 43.801652892561982
            }, {
                "id": 537217597,
                "name": "Mark Hamill",
                "weight": 34.710743801652896
            }, {
                "id": 537783346,
                "name": "Street Fighter",
                "weight": 16.528925619834709
            }]
        }, {
            "id": 268489919,
            "name": "Cosplay",
            "weight": 2.3809523809523809
        }, {
            "id": 268487218,
            "name": "Steampunk",
            "weight": 1.600312256049961
        }]
    }, {
        "id": 268490688,
        "name": "Gaming",
        "weight": 5.40646578782172,
        "topics": [{
            "id": 268449459,
            "name": "Video Games",
            "weight": 89.622641509433961,
            "topics": [{
                "id": 268490476,
                "name": "PC Games",
                "weight": 56.43724696356275,
                "topics": [{
                    "id": 537812799,
                    "name": "Deus Ex",
                    "weight": 1.2912482065997131
                }]
            }, {
                "id": 268487163,
                "name": "Social Gaming",
                "weight": 31.578947368421051
            }, {
                "id": 268490475,
                "name": "Console Games",
                "weight": 13.684210526315789,
                "topics": [{
                    "id": 537584191,
                    "name": "Virtual Console",
                    "weight": 2.3668639053254439
                }]
            }, {
                "id": 268487407,
                "name": "Virtual Reality",
                "weight": 12.469635627530364,
                "topics": [{
                    "id": 538279806,
                    "name": "Oculus Rift ",
                    "weight": 52.5974025974026
                }, {
                    "id": 538210796,
                    "name": "Palmer Luckey",
                    "weight": 13.636363636363637
                }, {
                    "id": 538202756,
                    "name": "Oculus VR",
                    "weight": 5.8441558441558445
                }]
            }, {
                "id": 268487041,
                "name": "RPG",
                "weight": 9.31174089068826,
                "topics": [{
                    "id": 538311715,
                    "name": "Final Fantasy",
                    "weight": 36.521739130434781
                }, {
                    "id": 537072810,
                    "name": "Square Enix",
                    "weight": 32.173913043478258
                }, {
                    "id": 537671863,
                    "name": "World of Warcraft",
                    "weight": 15.652173913043478
                }, {
                    "id": 537812799,
                    "name": "Deus Ex",
                    "weight": 7.8260869565217392
                }, {
                    "id": 537786551,
                    "name": "Dark Souls",
                    "weight": 7.8260869565217392
                }, {
                    "id": 537129317,
                    "name": "Bioware Corporation",
                    "weight": 6.0869565217391308
                }, {
                    "id": 537794336,
                    "name": "From Software",
                    "weight": 2.6086956521739131
                }, {
                    "id": 537799841,
                    "name": "Baldur's Gate",
                    "weight": 1.7391304347826086
                }, {
                    "id": 537825360,
                    "name": "Dragon Age: Origins",
                    "weight": 1.7391304347826086
                }]
            }, {
                "id": 537605975,
                "name": "PlayStation",
                "weight": 6.6396761133603235
            }, {
                "id": 536899762,
                "name": "Nintendo",
                "weight": 6.5587044534412957
            }, {
                "id": 268490583,
                "name": "Game Design",
                "weight": 6.234817813765182,
                "topics": [{
                    "id": 537177812,
                    "name": "Peter Molyneux",
                    "weight": 25.974025974025974
                }, {
                    "id": 537798776,
                    "name": "Hideo Kojima",
                    "weight": 23.376623376623378
                }, {
                    "id": 537132727,
                    "name": "Zynga",
                    "weight": 22.077922077922079
                }, {
                    "id": 537792035,
                    "name": "Michel Ancel",
                    "weight": 11.688311688311689
                }, {
                    "id": 537812799,
                    "name": "Deus Ex",
                    "weight": 11.688311688311689
                }, {
                    "id": 537278844,
                    "name": "Shigeru Miyamoto",
                    "weight": 5.1948051948051948
                }, {
                    "id": 537808216,
                    "name": "Tomonobu Itagaki",
                    "weight": 2.5974025974025974
                }, {
                    "id": 537178086,
                    "name": "Tim Schafer",
                    "weight": 2.5974025974025974
                }, {
                    "id": 537871204,
                    "name": "SimCity",
                    "weight": 1.2987012987012987
                }, {
                    "id": 537481909,
                    "name": "Ron Gilbert",
                    "weight": 1.2987012987012987
                }, {
                    "id": 537220193,
                    "name": "Warren Spector",
                    "weight": 1.2987012987012987
                }, {
                    "id": 537221589,
                    "name": "Sid Meier",
                    "weight": 1.2987012987012987
                }]
            }, {
                "id": 538279463,
                "name": "PlayStation 4",
                "weight": 5.7489878542510118
            }, {
                "id": 268487408,
                "name": "Virtual World",
                "weight": 3.4008097165991904,
                "topics": [{
                    "id": 537597952,
                    "name": "Second Life",
                    "weight": 26.19047619047619
                }, {
                    "id": 537142005,
                    "name": "Windward Mark Interactive",
                    "weight": 7.1428571428571432
                }, {
                    "id": 537793269,
                    "name": "Club Penguin",
                    "weight": 2.3809523809523809
                }]
            }, {
                "id": 538311715,
                "name": "Final Fantasy",
                "weight": 3.4008097165991904
            }, {
                "id": 538007251,
                "name": "Wii U",
                "weight": 3.3198380566801617
            }, {
                "id": 537072809,
                "name": "Ubisoft",
                "weight": 2.9959514170040484
            }, {
                "id": 537072810,
                "name": "Square Enix",
                "weight": 2.9959514170040484
            }, {
                "id": 537667718,
                "name": "Guitar Hero",
                "weight": 2.5910931174089069
            }, {
                "id": 537856948,
                "name": "Assassin's Creed",
                "weight": 1.94331983805668
            }, {
                "id": 536898385,
                "name": "Electronic Arts",
                "weight": 1.7813765182186234
            }, {
                "id": 537696306,
                "name": "Call of Duty: Black Ops",
                "weight": 1.7813765182186234
            }, {
                "id": 537747988,
                "name": "Metal Gear Solid",
                "weight": 1.7813765182186234
            }, {
                "id": 537783346,
                "name": "Street Fighter",
                "weight": 1.6194331983805668
            }, {
                "id": 537149822,
                "name": "League of Legends",
                "weight": 1.5384615384615385
            }, {
                "id": 537671863,
                "name": "World of Warcraft",
                "weight": 1.45748987854251
            }, {
                "id": 537633015,
                "name": "Star Wars: Battlefront",
                "weight": 1.45748987854251
            }, {
                "id": 537052538,
                "name": "GameStop",
                "weight": 1.3765182186234817
            }, {
                "id": 537580712,
                "name": "Wii",
                "weight": 1.1336032388663968
            }]
        }, {
            "id": 268490692,
            "name": "Esports",
            "weight": 2.467343976777939,
            "topics": [{
                "id": 537149822,
                "name": "League of Legends",
                "weight": 55.882352941176471
            }, {
                "id": 537868430,
                "name": "Dota 2",
                "weight": 23.529411764705884
            }, {
                "id": 537848065,
                "name": "League of Legends: Clash of Fates",
                "weight": 14.705882352941176
            }, {
                "id": 537846433,
                "name": "Riot Games",
                "weight": 11.764705882352942
            }]
        }]
    }, {
        "id": 268449462,
        "name": "Animation",
        "weight": 4.0332705586942872,
        "topics": [{
            "id": 536892993,
            "name": "The Walt Disney Company",
            "weight": 50.291828793774322
        }, {
            "id": 537117003,
            "name": "Warner Bros. Entertainment Company",
            "weight": 34.72762645914397
        }, {
            "id": 537152275,
            "name": "Paramount-Famous Players-Lasky Company",
            "weight": 25.097276264591439
        }, {
            "id": 537131541,
            "name": "DreamWorks Animation SKG, Inc",
            "weight": 14.883268482490273
        }, {
            "id": 537104454,
            "name": "Pixar Animation Studios",
            "weight": 6.9066147859922182
        }, {
            "id": 537135419,
            "name": "Lucasfilm, Limited",
            "weight": 6.5175097276264591
        }, {
            "id": 537286119,
            "name": "Walt Disney",
            "weight": 4.5719844357976651
        }, {
            "id": 537155895,
            "name": "Universal-International Pictures Inc.",
            "weight": 4.3774319066147864
        }, {
            "id": 537072809,
            "name": "Ubisoft",
            "weight": 3.5992217898832686
        }, {
            "id": 268487231,
            "name": "Stop Motion",
            "weight": 3.5019455252918288,
            "topics": [{
                "id": 537192295,
                "name": "Tim Burton",
                "weight": 80.555555555555557
            }]
        }, {
            "id": 537682871,
            "name": "Angry Birds",
            "weight": 3.3073929961089492
        }, {
            "id": 537146436,
            "name": "DreamWorks Animation SKG Inc.",
            "weight": 2.9182879377431905
        }, {
            "id": 537192295,
            "name": "Tim Burton",
            "weight": 2.8210116731517512
        }, {
            "id": 268490693,
            "name": "Animation Software",
            "weight": 2.1400778210116731
        }, {
            "id": 537649428,
            "name": "The Simpsons",
            "weight": 1.9455252918287937
        }, {
            "id": 537194982,
            "name": "Hayao Miyazaki",
            "weight": 1.556420233463035
        }, {
            "id": 537746949,
            "name": "Hotel Transylvania",
            "weight": 1.556420233463035
        }, {
            "id": 537633001,
            "name": "Family Guy",
            "weight": 1.4591439688715953
        }, {
            "id": 537134727,
            "name": "Kabushiki-gaisha Sutajio Jiburi",
            "weight": 1.3618677042801557
        }, {
            "id": 537685070,
            "name": "Looney Tunes",
            "weight": 1.3618677042801557
        }, {
            "id": 538033487,
            "name": "Adventure Time",
            "weight": 1.2645914396887159
        }, {
            "id": 537781051,
            "name": "SpongeBob SquarePants",
            "weight": 1.1673151750972763
        }]
    }, {
        "id": 268489833,
        "name": "Gambling",
        "weight": 2.3618957940991838,
        "topics": [{
            "id": 268490691,
            "name": "Lottery",
            "weight": 46.179401993355484,
            "topics": [{
                "id": 537244646,
                "name": "Heritage Lottery Fund",
                "weight": 3.9568345323741005
            }, {
                "id": 537252484,
                "name": "Multi-State Lottery Association",
                "weight": 3.2374100719424459
            }, {
                "id": 537650218,
                "name": "Grand National",
                "weight": 2.1582733812949639
            }]
        }, {
            "id": 268449467,
            "name": "Casinos",
            "weight": 11.794019933554818,
            "topics": [{
                "id": 538323583,
                "name": "Atlantic City",
                "weight": 49.29577464788732
            }, {
                "id": 537148051,
                "name": "Harrah's Entertainment Incorporated",
                "weight": 9.8591549295774641
            }, {
                "id": 537069927,
                "name": "Stephen Wynn",
                "weight": 5.6338028169014081
            }, {
                "id": 537073189,
                "name": "Rank Group",
                "weight": 2.816901408450704
            }]
        }, {
            "id": 538187955,
            "name": "FanDuel",
            "weight": 9.6345514950166109
        }, {
            "id": 538179494,
            "name": "DraftKings",
            "weight": 9.1362126245847168
        }, {
            "id": 538323583,
            "name": "Atlantic City",
            "weight": 5.8139534883720927
        }, {
            "id": 537283815,
            "name": "Sheldon Adelson",
            "weight": 4.8172757475083055
        }, {
            "id": 537132727,
            "name": "Zynga",
            "weight": 2.823920265780731
        }, {
            "id": 537114426,
            "name": "Pokerchamps.com",
            "weight": 1.9933554817275747
        }, {
            "id": 537073187,
            "name": "Ladbrokes",
            "weight": 1.6611295681063123
        }, {
            "id": 537073184,
            "name": "Las Vegas Sands",
            "weight": 1.4950166112956811
        }, {
            "id": 537148051,
            "name": "Harrah's Entertainment Incorporated",
            "weight": 1.1627906976744187
        }]
    }, {
        "id": 268486125,
        "name": "Fireworks",
        "weight": 1.2672630257376021,
        "topics": [{
            "id": 537233200,
            "name": "Disneyland",
            "weight": 98.761609907120743
        }]
    }]
}, {
    "id": 268435464,
    "name": "Food",
    "weight": 11.472982975573649,
    "color": "#006755",
    "topics": [{
        "id": 268489847,
        "name": "Cooking",
        "weight": 48.82665721375399,
        "topics": [{
            "id": 268453470,
            "name": "Recipes",
            "weight": 79.51212429214462
        }, {
            "id": 268485623,
            "name": "Baking",
            "weight": 11.136924640627269,
            "topics": [{
                "id": 268486899,
                "name": "Pies",
                "weight": 28.03129074315515
            }, {
                "id": 538278834,
                "name": "The Great British Bake Off",
                "weight": 2.2164276401564535
            }]
        }, {
            "id": 537130392,
            "name": "Chipotle Mexican Grill, Inc.",
            "weight": 2.1199361115144475
        }]
    }, {
        "id": 268489956,
        "name": "Chocolate",
        "weight": 15.349166962070187,
        "topics": [{
            "id": 537282246,
            "name": "Oreo",
            "weight": 11.362586605080832
        }, {
            "id": 537588492,
            "name": "Nutella",
            "weight": 1.8013856812933025
        }, {
            "id": 536939351,
            "name": "Nestlé",
            "weight": 1.3856812933025404
        }, {
            "id": 537138775,
            "name": "Tim Hortons",
            "weight": 1.2009237875288683
        }]
    }, {
        "id": 268489952,
        "name": "Sweets",
        "weight": 14.987593052109181
    }, {
        "id": 268489838,
        "name": "Drinks",
        "weight": 9.7199574618929461,
        "topics": [{
            "id": 268487283,
            "name": "Tea",
            "weight": 56.2363238512035,
            "topics": [{
                "id": 537310875,
                "name": "Prince William of Wales",
                "weight": 43.060959792477306
            }, {
                "id": 537622856,
                "name": "Pepsi",
                "weight": 40.077821011673151
            }, {
                "id": 538110359,
                "name": "Pope Francis",
                "weight": 37.224383916990924
            }, {
                "id": 536892904,
                "name": "Starbucks",
                "weight": 13.488975356679637
            }, {
                "id": 537084106,
                "name": "Coca-Cola Company",
                "weight": 10.635538261997405
            }, {
                "id": 536939351,
                "name": "Nestlé",
                "weight": 3.8910505836575875
            }, {
                "id": 537612534,
                "name": "Red Bull",
                "weight": 3.8910505836575875
            }, {
                "id": 537120180,
                "name": "Dunkin' Doughnuts",
                "weight": 3.6316472114137484
            }, {
                "id": 537004867,
                "name": "Evo Morales",
                "weight": 2.5940337224383918
            }, {
                "id": 537588881,
                "name": "Keurig",
                "weight": 1.6861219195849546
            }, {
                "id": 537583453,
                "name": "Frappuccino",
                "weight": 1.6861219195849546
            }, {
                "id": 538136423,
                "name": "Matcha",
                "weight": 1.4267185473411155
            }, {
                "id": 537618948,
                "name": "Lipton",
                "weight": 1.4267185473411155
            }]
        }, {
            "id": 268489902,
            "name": "Coffee",
            "weight": 41.356673960612689,
            "topics": [{
                "id": 537073199,
                "name": "McDonald's",
                "weight": 24.514991181657848
            }, {
                "id": 536892904,
                "name": "Starbucks",
                "weight": 18.34215167548501
            }, {
                "id": 536939351,
                "name": "Nestlé",
                "weight": 5.2910052910052912
            }, {
                "id": 537120180,
                "name": "Dunkin' Doughnuts",
                "weight": 4.9382716049382713
            }, {
                "id": 537138775,
                "name": "Tim Hortons",
                "weight": 4.5855379188712524
            }, {
                "id": 537588881,
                "name": "Keurig",
                "weight": 2.2927689594356262
            }, {
                "id": 537583453,
                "name": "Frappuccino",
                "weight": 2.2927689594356262
            }, {
                "id": 537599251,
                "name": "K-Cups",
                "weight": 1.2345679012345678
            }, {
                "id": 537210124,
                "name": "Howard Schultz",
                "weight": 1.2345679012345678
            }, {
                "id": 537595516,
                "name": "Nespresso",
                "weight": 1.0582010582010581
            }, {
                "id": 537112402,
                "name": "Lavazza",
                "weight": 1.0582010582010581
            }]
        }, {
            "id": 537622856,
            "name": "Pepsi",
            "weight": 22.538293216630198
        }, {
            "id": 536892904,
            "name": "Starbucks",
            "weight": 7.5857038657913929
        }, {
            "id": 537084106,
            "name": "Coca-Cola Company",
            "weight": 5.9810357403355212
        }, {
            "id": 536939169,
            "name": "PepsiCo",
            "weight": 3.7199124726477022
        }, {
            "id": 537119554,
            "name": "Colonel Sanders' Kentucky Fried Chicken",
            "weight": 2.9905178701677606
        }, {
            "id": 537612534,
            "name": "Red Bull",
            "weight": 2.1881838074398248
        }, {
            "id": 537280049,
            "name": "Mountain Dew",
            "weight": 1.0211524434719184
        }, {
            "id": 537604268,
            "name": "Gatorade",
            "weight": 1.0211524434719184
        }]
    }, {
        "id": 268485950,
        "name": "Desserts",
        "weight": 7.6568592697624958
    }, {
        "id": 268489837,
        "name": "Seasonings",
        "weight": 7.337823466855725
    }, {
        "id": 268489834,
        "name": "Alcoholic Drinks",
        "weight": 3.58738036157391,
        "topics": [{
            "id": 268490226,
            "name": "Cocktails",
            "weight": 52.766798418972328
        }, {
            "id": 268453476,
            "name": "Wine",
            "weight": 40.316205533596836,
            "topics": [{
                "id": 537125598,
                "name": "Sotheby's Auction House",
                "weight": 41.1764705882353
            }, {
                "id": 537073091,
                "name": "Wm Morrison Supermarkets",
                "weight": 12.254901960784315
            }, {
                "id": 537140953,
                "name": "Traitor Joe's",
                "weight": 11.274509803921569
            }, {
                "id": 537106995,
                "name": "Waite, Rose and Taylor",
                "weight": 7.8431372549019605
            }, {
                "id": 536899930,
                "name": "Pernod Ricard",
                "weight": 6.3725490196078427
            }, {
                "id": 537597435,
                "name": "Amarone",
                "weight": 4.4117647058823533
            }, {
                "id": 536892509,
                "name": "Diageo",
                "weight": 4.4117647058823533
            }, {
                "id": 538174359,
                "name": "Veneto",
                "weight": 3.9215686274509802
            }, {
                "id": 537100903,
                "name": "G.H. Mumm",
                "weight": 2.4509803921568629
            }, {
                "id": 537231555,
                "name": "Mike Portnoy",
                "weight": 1.4705882352941178
            }]
        }, {
            "id": 268453457,
            "name": "Beer",
            "weight": 35.770750988142289,
            "topics": [{
                "id": 537287011,
                "name": "Guinness World Records",
                "weight": 35.35911602209945
            }, {
                "id": 537084965,
                "name": "Guinness",
                "weight": 27.071823204419889
            }, {
                "id": 537084107,
                "name": "Anheuser-Busch Companies",
                "weight": 14.3646408839779
            }, {
                "id": 537099751,
                "name": "Cooper's Sparking Ale",
                "weight": 13.259668508287293
            }, {
                "id": 536939940,
                "name": "Heineken International",
                "weight": 8.8397790055248624
            }, {
                "id": 537073207,
                "name": "InBev",
                "weight": 7.7348066298342539
            }, {
                "id": 536892509,
                "name": "Diageo",
                "weight": 4.972375690607735
            }, {
                "id": 537152470,
                "name": "Peroni Nastro Azzurro",
                "weight": 3.867403314917127
            }, {
                "id": 538574218,
                "name": "SABMiller",
                "weight": 3.3149171270718232
            }, {
                "id": 536937393,
                "name": "Carlsberg Group",
                "weight": 2.7624309392265194
            }, {
                "id": 537085330,
                "name": "Suntory Holdings",
                "weight": 2.7624309392265194
            }, {
                "id": 537106332,
                "name": "The Wolverhampton & Dudley Breweries, PLC",
                "weight": 2.7624309392265194
            }, {
                "id": 537134924,
                "name": "Koninklijke Grolsch N.V.",
                "weight": 2.2099447513812156
            }, {
                "id": 537150624,
                "name": "Miller Genuine Draft (beer)",
                "weight": 2.2099447513812156
            }, {
                "id": 537992579,
                "name": "Stella Artois",
                "weight": 1.6574585635359116
            }, {
                "id": 537983601,
                "name": "Ninkasi Brewing Company",
                "weight": 1.1049723756906078
            }, {
                "id": 537203560,
                "name": "BrewDog",
                "weight": 1.1049723756906078
            }, {
                "id": 537109865,
                "name": "D. G. Yuengling and Son Brewing Complex",
                "weight": 1.1049723756906078
            }, {
                "id": 537712574,
                "name": "Samuel Adams",
                "weight": 1.1049723756906078
            }]
        }, {
            "id": 268487416,
            "name": "Vodka",
            "weight": 30.039525691699605,
            "topics": [{
                "id": 536899930,
                "name": "Pernod Ricard",
                "weight": 8.5526315789473681
            }, {
                "id": 537085330,
                "name": "Suntory Holdings",
                "weight": 3.2894736842105261
            }, {
                "id": 537109592,
                "name": "Compania Ron Bacardi S.A.",
                "weight": 3.2894736842105261
            }]
        }, {
            "id": 268487448,
            "name": "Whisky",
            "weight": 19.565217391304348,
            "topics": [{
                "id": 536899930,
                "name": "Pernod Ricard",
                "weight": 13.131313131313131
            }, {
                "id": 537758699,
                "name": "Johnnie Walker",
                "weight": 11.111111111111111
            }, {
                "id": 536892509,
                "name": "Diageo",
                "weight": 9.0909090909090917
            }, {
                "id": 537149189,
                "name": "Jack Daniel Distillery, Lem Motlow, Prop., Inc.",
                "weight": 6.0606060606060606
            }, {
                "id": 537085330,
                "name": "Suntory Holdings",
                "weight": 5.05050505050505
            }, {
                "id": 537139167,
                "name": "Scotch Whisky Association",
                "weight": 3.0303030303030303
            }, {
                "id": 537595355,
                "name": "Maker's Mark",
                "weight": 2.0202020202020203
            }, {
                "id": 537275829,
                "name": "The Macallan",
                "weight": 1.0101010101010102
            }]
        }, {
            "id": 268487293,
            "name": "Tequila",
            "weight": 15.41501976284585,
            "topics": [{
                "id": 537073211,
                "name": "Brown-Forman Corp",
                "weight": 1.2820512820512822
            }, {
                "id": 538261442,
                "name": "Don Julio",
                "weight": 1.2820512820512822
            }]
        }]
    }, {
        "id": 268486099,
        "name": "Fast Food",
        "weight": 1.9780219780219781,
        "topics": [{
            "id": 537130392,
            "name": "Chipotle Mexican Grill, Inc.",
            "weight": 52.329749103942653
        }, {
            "id": 537073199,
            "name": "McDonald's",
            "weight": 49.820788530465947
        }, {
            "id": 537135305,
            "name": "List of countries with Burger King restaurants",
            "weight": 22.222222222222221
        }, {
            "id": 537156342,
            "name": "Wendy's Old Fashioned Hamburgers",
            "weight": 17.204301075268816
        }, {
            "id": 537119554,
            "name": "Colonel Sanders' Kentucky Fried Chicken",
            "weight": 14.695340501792115
        }, {
            "id": 537118556,
            "name": "Bean Burrito Especial- Taco Bell",
            "weight": 11.827956989247312
        }, {
            "id": 537138775,
            "name": "Tim Hortons",
            "weight": 9.31899641577061
        }, {
            "id": 537135303,
            "name": "List of assets owned by Yum! Brands, Inc.",
            "weight": 8.2437275985663074
        }, {
            "id": 537131482,
            "name": "Doctor's Associates, Inc.",
            "weight": 3.9426523297491038
        }, {
            "id": 537132602,
            "name": "Fresh! Every Stop of the Way",
            "weight": 3.225806451612903
        }]
    }, {
        "id": 537282246,
        "name": "Oreo",
        "weight": 1.7440623892236795
    }, {
        "id": 268489835,
        "name": "Italian Food",
        "weight": 1.467564693371145,
        "topics": [{
            "id": 268490705,
            "name": "Pasta",
            "weight": 86.473429951690818,
            "topics": [{
                "id": 537155234,
                "name": "The Olive Garden",
                "weight": 11.1731843575419
            }, {
                "id": 537954764,
                "name": "Flying Spaghetti Monster",
                "weight": 2.7932960893854748
            }]
        }, {
            "id": 268487025,
            "name": "Risotto",
            "weight": 5.7971014492753623
        }]
    }, {
        "id": 537130392,
        "name": "Chipotle Mexican Grill, Inc.",
        "weight": 1.0350939383197448
    }]
}, {
    "id": 268490173,
    "name": "Arts",
    "weight": 8.632596123343717,
    "color": "#BC2828",
    "topics": [{
        "id": 268445459,
        "name": "Literature",
        "weight": 56.1386978234241,
        "topics": [{
            "id": 268445467,
            "name": "Poetry",
            "weight": 77.542799597180263,
            "topics": [{
                "id": 538008384,
                "name": "William Shakespeare",
                "weight": 1.7316017316017316
            }]
        }, {
            "id": 268449466,
            "name": "Books",
            "weight": 17.522658610271904,
            "topics": [{
                "id": 537069450,
                "name": "J. K. Rowling",
                "weight": 35.3448275862069
            }, {
                "id": 537227711,
                "name": "Harper Lee",
                "weight": 28.639846743295021
            }, {
                "id": 537588231,
                "name": "Harry Potter and the Deathly Hallows",
                "weight": 26.149425287356323
            }, {
                "id": 537152275,
                "name": "Paramount-Famous Players-Lasky Company",
                "weight": 24.712643678160919
            }, {
                "id": 268490429,
                "name": "Novels",
                "weight": 24.137931034482758,
                "topics": [{
                    "id": 537197393,
                    "name": "Stephen King",
                    "weight": 58.333333333333336
                }, {
                    "id": 537548569,
                    "name": "Jane Austen",
                    "weight": 19.444444444444443
                }, {
                    "id": 537598230,
                    "name": "The Lord of the Rings",
                    "weight": 11.111111111111111
                }, {
                    "id": 537649556,
                    "name": "Tolstoi",
                    "weight": 6.746031746031746
                }, {
                    "id": 537586509,
                    "name": "F. Scott Fitzgerald",
                    "weight": 4.7619047619047619
                }, {
                    "id": 537204871,
                    "name": "Kazuo Ishiguro",
                    "weight": 4.3650793650793647
                }, {
                    "id": 537214906,
                    "name": "Jonathan Franzen",
                    "weight": 3.9682539682539684
                }, {
                    "id": 537220256,
                    "name": "Michel Houellebecq",
                    "weight": 3.1746031746031744
                }, {
                    "id": 537773157,
                    "name": "The Great Gatsby",
                    "weight": 2.3809523809523809
                }, {
                    "id": 537650153,
                    "name": "Thomas Hardy",
                    "weight": 2.3809523809523809
                }, {
                    "id": 537226470,
                    "name": "E. L. Doctorow",
                    "weight": 1.9841269841269842
                }, {
                    "id": 537595852,
                    "name": "Jane Eyre",
                    "weight": 1.5873015873015872
                }, {
                    "id": 537203637,
                    "name": "John Grisham",
                    "weight": 1.5873015873015872
                }, {
                    "id": 537350573,
                    "name": "Charlotte Brontë",
                    "weight": 1.5873015873015872
                }, {
                    "id": 537638545,
                    "name": "Arthur Conan Doyle",
                    "weight": 1.5873015873015872
                }]
            }, {
                "id": 537177948,
                "name": "Leonardo DiCaprio",
                "weight": 15.900383141762452
            }, {
                "id": 537197393,
                "name": "Stephen King",
                "weight": 14.080459770114942
            }, {
                "id": 268487084,
                "name": "Science Fiction Books",
                "weight": 11.590038314176246
            }, {
                "id": 268490450,
                "name": "Non-fiction Books",
                "weight": 10.82375478927203
            }, {
                "id": 268490439,
                "name": "Young Adult Books",
                "weight": 9.4827586206896548
            }, {
                "id": 268490437,
                "name": "Children's Books",
                "weight": 8.14176245210728,
                "topics": [{
                    "id": 537189684,
                    "name": "Roald Dahl",
                    "weight": 30.588235294117649
                }, {
                    "id": 537196022,
                    "name": "Maurice Sendak",
                    "weight": 5.882352941176471
                }, {
                    "id": 537639851,
                    "name": "Children's Literature",
                    "weight": 1.1764705882352942
                }]
            }, {
                "id": 538008384,
                "name": "William Shakespeare",
                "weight": 7.6628352490421454
            }, {
                "id": 268490445,
                "name": "Crime Books",
                "weight": 6.4176245210727974
            }, {
                "id": 538038822,
                "name": "The Shadows",
                "weight": 5.7471264367816088
            }, {
                "id": 268489815,
                "name": "Horror Books",
                "weight": 5.4597701149425291
            }, {
                "id": 268490434,
                "name": "Romance Books",
                "weight": 5.4597701149425291
            }, {
                "id": 268490441,
                "name": "Fantasy Books",
                "weight": 5.2681992337164747
            }, {
                "id": 537190476,
                "name": "Ridley Scott",
                "weight": 5.1724137931034484
            }, {
                "id": 268490454,
                "name": "Adventure Books",
                "weight": 5.0766283524904212
            }, {
                "id": 537077417,
                "name": "Random House",
                "weight": 4.9808429118773949
            }, {
                "id": 537764516,
                "name": "The Hunger Games",
                "weight": 4.9808429118773949
            }, {
                "id": 537323972,
                "name": "Adolf Hitler",
                "weight": 4.7892720306513414
            }, {
                "id": 537548569,
                "name": "Jane Austen",
                "weight": 4.6934865900383143
            }, {
                "id": 537590516,
                "name": "Amazon Kindle",
                "weight": 4.5019157088122608
            }, {
                "id": 537586948,
                "name": "Mein Kampf",
                "weight": 4.3103448275862073
            }, {
                "id": 268490443,
                "name": "Supernatural Books",
                "weight": 4.21455938697318
            }, {
                "id": 537194583,
                "name": "Martin Scorsese",
                "weight": 4.1187739463601529
            }, {
                "id": 537211576,
                "name": "George R. R. Martin",
                "weight": 4.1187739463601529
            }, {
                "id": 268490432,
                "name": "Thriller Books",
                "weight": 3.8314176245210727
            }, {
                "id": 538234207,
                "name": "Cara Delevingne",
                "weight": 2.8735632183908044
            }, {
                "id": 268490426,
                "name": "Comedy Books",
                "weight": 2.8735632183908044
            }, {
                "id": 537192528,
                "name": "Ian McKellen",
                "weight": 2.6819923371647509
            }, {
                "id": 537598230,
                "name": "The Lord of the Rings",
                "weight": 2.6819923371647509
            }, {
                "id": 538010163,
                "name": "Alice in Wonderland",
                "weight": 2.2988505747126435
            }, {
                "id": 538087882,
                "name": "Chris Kyle",
                "weight": 2.2030651340996168
            }, {
                "id": 537144054,
                "name": "Barnes and Noble Booksellers",
                "weight": 1.9157088122605364
            }, {
                "id": 537612175,
                "name": "Agatha Christie",
                "weight": 1.9157088122605364
            }, {
                "id": 537798237,
                "name": "Simon & Schuster",
                "weight": 1.6283524904214559
            }, {
                "id": 537122701,
                "name": "Little, Brown Young Readers",
                "weight": 1.5325670498084292
            }, {
                "id": 537590634,
                "name": "The Hobbit",
                "weight": 1.3409961685823755
            }, {
                "id": 537210568,
                "name": "James Patterson",
                "weight": 1.2452107279693487
            }, {
                "id": 537586509,
                "name": "F. Scott Fitzgerald",
                "weight": 1.1494252873563218
            }, {
                "id": 537197846,
                "name": "Terry Pratchett",
                "weight": 1.053639846743295
            }, {
                "id": 537204871,
                "name": "Kazuo Ishiguro",
                "weight": 1.053639846743295
            }]
        }, {
            "id": 537069450,
            "name": "J. K. Rowling",
            "weight": 6.1933534743202419
        }, {
            "id": 268487074,
            "name": "Satire",
            "weight": 5.7905337361530718,
            "topics": [{
                "id": 537202358,
                "name": "Tina Fey",
                "weight": 91.014492753623188
            }, {
                "id": 537233009,
                "name": "The Onion",
                "weight": 3.4782608695652173
            }]
        }, {
            "id": 537227711,
            "name": "Harper Lee",
            "weight": 5.0184625713326616
        }, {
            "id": 268490672,
            "name": "Literary Awards",
            "weight": 3.55824102047667
        }, {
            "id": 268486087,
            "name": "Fairy Tales",
            "weight": 3.5414568647197044,
            "topics": [{
                "id": 537858323,
                "name": "Beauty and the Beast",
                "weight": 6.1611374407582939
            }, {
                "id": 537616830,
                "name": "Hansel and Gretel",
                "weight": 2.8436018957345972
            }, {
                "id": 537963427,
                "name": "Beauty and the Beast",
                "weight": 1.8957345971563981
            }, {
                "id": 537686316,
                "name": "Hans Christian Andersen",
                "weight": 1.4218009478672986
            }, {
                "id": 537774715,
                "name": "Jack and the Beanstalk",
                "weight": 1.4218009478672986
            }]
        }, {
            "id": 537197393,
            "name": "Stephen King",
            "weight": 2.4672708962739174
        }, {
            "id": 268486713,
            "name": "Mythology",
            "weight": 2.1987244041624705,
            "topics": [{
                "id": 537728955,
                "name": "Apollo",
                "weight": 57.251908396946568
            }, {
                "id": 537929257,
                "name": "Wonder Woman",
                "weight": 37.404580152671755
            }, {
                "id": 538225927,
                "name": "Hercules",
                "weight": 30.534351145038169
            }, {
                "id": 537598230,
                "name": "The Lord of the Rings",
                "weight": 21.374045801526716
            }, {
                "id": 538004683,
                "name": "Valkyrie",
                "weight": 21.374045801526716
            }, {
                "id": 537589605,
                "name": "Thor",
                "weight": 19.847328244274809
            }, {
                "id": 537968275,
                "name": "Osiris",
                "weight": 6.8702290076335881
            }, {
                "id": 537971920,
                "name": "Zeus",
                "weight": 6.8702290076335881
            }, {
                "id": 537609250,
                "name": "Medusa",
                "weight": 6.106870229007634
            }, {
                "id": 537955656,
                "name": "Perseus",
                "weight": 3.8167938931297711
            }, {
                "id": 537987060,
                "name": "Horus",
                "weight": 3.053435114503817
            }, {
                "id": 537101652,
                "name": "Iliad",
                "weight": 2.2900763358778624
            }]
        }]
    }, {
        "id": 268445466,
        "name": "Photography",
        "weight": 25.949307453123527,
        "topics": [{
            "id": 537077180,
            "name": "Getty Images",
            "weight": 63.071895424836605
        }, {
            "id": 537623023,
            "name": "Flickr",
            "weight": 10.493827160493828
        }, {
            "id": 537197054,
            "name": "Andy Warhol",
            "weight": 5.2287581699346406
        }, {
            "id": 536890813,
            "name": "Nikon Corporation",
            "weight": 2.2512708787218592
        }, {
            "id": 537146515,
            "name": "Eastman Kodak",
            "weight": 1.4161220043572984
        }, {
            "id": 537158109,
            "name": "Leica Camera AG",
            "weight": 1.2345679012345678
        }, {
            "id": 538149378,
            "name": "500px",
            "weight": 1.1256354393609296
        }]
    }, {
        "id": 268445465,
        "name": "Theatre & Ballet",
        "weight": 13.012343352492227,
        "topics": [{
            "id": 268445468,
            "name": "Theatre",
            "weight": 59.232440260680669,
            "topics": [{
                "id": 268490159,
                "name": "Tony Award",
                "weight": 16.992665036674815,
                "topics": [{
                    "id": 538105321,
                    "name": "Broadway theatre",
                    "weight": 41.007194244604314
                }, {
                    "id": 537198017,
                    "name": "Cyndi Lauper",
                    "weight": 31.654676258992804
                }, {
                    "id": 537213967,
                    "name": "Kristin Chenoweth",
                    "weight": 14.388489208633093
                }, {
                    "id": 537191878,
                    "name": "Kelli O'Hara",
                    "weight": 9.3525179856115113
                }, {
                    "id": 538079472,
                    "name": "Fiddler on the Roof",
                    "weight": 8.6330935251798557
                }, {
                    "id": 537197845,
                    "name": "Glenn Close",
                    "weight": 6.4748201438848918
                }, {
                    "id": 537850602,
                    "name": "Audra McDonald",
                    "weight": 5.0359712230215825
                }, {
                    "id": 537075334,
                    "name": "Alan Cumming",
                    "weight": 4.3165467625899279
                }, {
                    "id": 537196969,
                    "name": "Stephen Sondheim",
                    "weight": 4.3165467625899279
                }, {
                    "id": 537192539,
                    "name": "Harvey Fierstein",
                    "weight": 3.5971223021582732
                }, {
                    "id": 537468152,
                    "name": "Mary-Louise Parker",
                    "weight": 3.5971223021582732
                }, {
                    "id": 537191010,
                    "name": "James Earl Jones",
                    "weight": 2.8776978417266186
                }, {
                    "id": 537193157,
                    "name": "Brian d'Arcy James",
                    "weight": 2.8776978417266186
                }, {
                    "id": 537191655,
                    "name": "Neil Simon",
                    "weight": 2.8776978417266186
                }, {
                    "id": 537122573,
                    "name": "League of American Theatres and Producers",
                    "weight": 2.8776978417266186
                }, {
                    "id": 537201159,
                    "name": "Lea Salonga",
                    "weight": 2.1582733812949639
                }, {
                    "id": 537206670,
                    "name": "Bernadette Peters",
                    "weight": 2.1582733812949639
                }, {
                    "id": 537212095,
                    "name": "Patti LuPone",
                    "weight": 2.1582733812949639
                }, {
                    "id": 537219564,
                    "name": "Cicely Tyson",
                    "weight": 2.1582733812949639
                }, {
                    "id": 538093003,
                    "name": "Terrence Mann",
                    "weight": 1.4388489208633093
                }, {
                    "id": 537128256,
                    "name": "American Theatre Wing",
                    "weight": 1.4388489208633093
                }]
            }, {
                "id": 537196027,
                "name": "David Bowie",
                "weight": 12.591687041564793
            }, {
                "id": 537376730,
                "name": "Maggie Smith",
                "weight": 11.7359413202934
            }, {
                "id": 538008384,
                "name": "William Shakespeare",
                "weight": 9.7799511002445
            }, {
                "id": 537228900,
                "name": "Benedict Cumberbatch",
                "weight": 7.3349633251833737
            }, {
                "id": 538105321,
                "name": "Broadway theatre",
                "weight": 6.9682151589242052
            }, {
                "id": 537178100,
                "name": "Meryl Streep",
                "weight": 5.9902200488997552
            }, {
                "id": 537198017,
                "name": "Cyndi Lauper",
                "weight": 5.3789731051344747
            }, {
                "id": 538305338,
                "name": "Eagles of Death Metal",
                "weight": 5.0122249388753053
            }, {
                "id": 268490721,
                "name": "Acting Techniques",
                "weight": 4.52322738386308
            }, {
                "id": 537202923,
                "name": "Hugh Jackman",
                "weight": 4.2787286063569683
            }, {
                "id": 538281369,
                "name": "Opera House",
                "weight": 4.2787286063569683
            }, {
                "id": 537193264,
                "name": "Helen Mirren",
                "weight": 4.1564792176039118
            }, {
                "id": 537192528,
                "name": "Ian McKellen",
                "weight": 3.4229828850855744
            }, {
                "id": 537202240,
                "name": "Mark Rylance",
                "weight": 2.93398533007335
            }, {
                "id": 537150530,
                "name": "Metropolitan Opera",
                "weight": 2.5672371638141809
            }, {
                "id": 537192293,
                "name": "Patrick Stewart",
                "weight": 2.4449877750611249
            }, {
                "id": 537213967,
                "name": "Kristin Chenoweth",
                "weight": 2.4449877750611249
            }, {
                "id": 537149893,
                "name": "Les Echassiers De Baie-Saint-Paul",
                "weight": 2.3227383863080684
            }, {
                "id": 537284896,
                "name": "Elisabeth Moss",
                "weight": 2.2004889975550124
            }, {
                "id": 537240987,
                "name": "Julie Andrews",
                "weight": 2.0782396088019559
            }, {
                "id": 537198407,
                "name": "Andrew Lloyd Webber",
                "weight": 1.9559902200488997
            }, {
                "id": 537689082,
                "name": "Radio City Music Hall",
                "weight": 1.8337408312958434
            }, {
                "id": 537232783,
                "name": "Roundabout Theatre Company",
                "weight": 1.8337408312958434
            }, {
                "id": 537645682,
                "name": "Royal Shakespeare Company",
                "weight": 1.8337408312958434
            }, {
                "id": 537279960,
                "name": "Judi Dench",
                "weight": 1.7114914425427872
            }, {
                "id": 537876185,
                "name": "Ben Whishaw",
                "weight": 1.7114914425427872
            }, {
                "id": 537191878,
                "name": "Kelli O'Hara",
                "weight": 1.5892420537897312
            }, {
                "id": 537193908,
                "name": "Idina Menzel",
                "weight": 1.5892420537897312
            }, {
                "id": 538310203,
                "name": "Off-Broadway",
                "weight": 1.5892420537897312
            }, {
                "id": 538079472,
                "name": "Fiddler on the Roof",
                "weight": 1.4669926650366749
            }, {
                "id": 537971904,
                "name": "A Midsummer Night's Dream",
                "weight": 1.4669926650366749
            }, {
                "id": 537191236,
                "name": "Keira Knightley",
                "weight": 1.4669926650366749
            }, {
                "id": 537953705,
                "name": "Palace Theatre",
                "weight": 1.3447432762836187
            }, {
                "id": 537192955,
                "name": "Arthur Miller",
                "weight": 1.3447432762836187
            }, {
                "id": 537114610,
                "name": "Public Theater",
                "weight": 1.2224938875305624
            }, {
                "id": 537964456,
                "name": "National Theatre",
                "weight": 1.1002444987775062
            }, {
                "id": 537197359,
                "name": "Harold Pinter",
                "weight": 1.1002444987775062
            }, {
                "id": 537197845,
                "name": "Glenn Close",
                "weight": 1.1002444987775062
            }]
        }, {
            "id": 268485624,
            "name": "Ballet",
            "weight": 32.585083272990587,
            "topics": [{
                "id": 537200465,
                "name": "Gene Kelly",
                "weight": 68.888888888888886
            }, {
                "id": 537128072,
                "name": "American Ballet",
                "weight": 10.222222222222221
            }, {
                "id": 538281369,
                "name": "Opera House",
                "weight": 7.7777777777777777
            }, {
                "id": 537233437,
                "name": "New York City Ballet",
                "weight": 5.333333333333333
            }, {
                "id": 537122224,
                "name": "John F. Kennedy Center for the Performing Arts",
                "weight": 5.333333333333333
            }, {
                "id": 537998346,
                "name": "Swan Lake",
                "weight": 4.8888888888888893
            }, {
                "id": 537150530,
                "name": "Metropolitan Opera",
                "weight": 4.666666666666667
            }, {
                "id": 537329168,
                "name": "Pablo Picasso",
                "weight": 4.666666666666667
            }, {
                "id": 537250760,
                "name": "David Koch",
                "weight": 4.0
            }, {
                "id": 537234061,
                "name": "Royal Ballet, London",
                "weight": 3.7777777777777777
            }, {
                "id": 538064025,
                "name": "English National Ballet",
                "weight": 2.8888888888888888
            }, {
                "id": 537638495,
                "name": "Benjamin Millepied",
                "weight": 2.8888888888888888
            }, {
                "id": 537971904,
                "name": "A Midsummer Night's Dream",
                "weight": 2.6666666666666665
            }, {
                "id": 537828183,
                "name": "Sergei Prokofiev",
                "weight": 2.4444444444444446
            }, {
                "id": 537195040,
                "name": "George Balanchine",
                "weight": 2.4444444444444446
            }, {
                "id": 537310896,
                "name": "Igor Stravinsky",
                "weight": 1.7777777777777777
            }, {
                "id": 537198879,
                "name": "Alvin Ailey",
                "weight": 1.7777777777777777
            }, {
                "id": 538045455,
                "name": "Christopher Wheeldon",
                "weight": 1.3333333333333333
            }, {
                "id": 538079909,
                "name": "Alexei Ratmansky",
                "weight": 1.1111111111111112
            }, {
                "id": 537210182,
                "name": "Rudolf Nureyev",
                "weight": 1.1111111111111112
            }]
        }, {
            "id": 268485730,
            "name": "Burlesque",
            "weight": 24.692251991310645,
            "topics": [{
                "id": 537197040,
                "name": "Christina Aguilera",
                "weight": 97.653958944281527
            }, {
                "id": 537196954,
                "name": "Dita Von Teese",
                "weight": 1.466275659824047
            }]
        }, {
            "id": 268489897,
            "name": "Opera",
            "weight": 13.178855901520636,
            "topics": [{
                "id": 538281369,
                "name": "Opera House",
                "weight": 19.23076923076923
            }, {
                "id": 537150530,
                "name": "Metropolitan Opera",
                "weight": 11.538461538461538
            }, {
                "id": 538295314,
                "name": "Giuseppe Verdi",
                "weight": 7.6923076923076925
            }, {
                "id": 538092217,
                "name": "Giacomo Puccini",
                "weight": 6.0439560439560438
            }, {
                "id": 537585266,
                "name": "Richard Wagner",
                "weight": 4.9450549450549453
            }, {
                "id": 537196490,
                "name": "James Levine",
                "weight": 4.9450549450549453
            }, {
                "id": 537589800,
                "name": "Opera Browser",
                "weight": 4.9450549450549453
            }, {
                "id": 537428384,
                "name": "Wolfgang Amadeus Mozart",
                "weight": 4.395604395604396
            }, {
                "id": 538320870,
                "name": "Gioacchino Rossini",
                "weight": 3.8461538461538463
            }, {
                "id": 537643750,
                "name": "English National Opera",
                "weight": 3.8461538461538463
            }, {
                "id": 538103262,
                "name": "Georges Bizet",
                "weight": 3.2967032967032965
            }, {
                "id": 537191864,
                "name": "Pete Townshend",
                "weight": 3.2967032967032965
            }, {
                "id": 537197019,
                "name": "Daniel Barenboim",
                "weight": 3.2967032967032965
            }, {
                "id": 538044492,
                "name": "Claudio Monteverdi",
                "weight": 3.2967032967032965
            }, {
                "id": 538308809,
                "name": "Alfie Boe",
                "weight": 3.2967032967032965
            }, {
                "id": 537997730,
                "name": "Royal Philharmonic Orchestra",
                "weight": 2.7472527472527473
            }, {
                "id": 538002623,
                "name": "Don Giovanni",
                "weight": 2.7472527472527473
            }, {
                "id": 537638519,
                "name": "Luc Bondy",
                "weight": 2.7472527472527473
            }, {
                "id": 537232492,
                "name": "Opera Australia",
                "weight": 2.197802197802198
            }, {
                "id": 537503392,
                "name": "Kurt Weill",
                "weight": 2.197802197802198
            }, {
                "id": 538316972,
                "name": "Gaetano Donizetti",
                "weight": 1.6483516483516483
            }, {
                "id": 537199509,
                "name": "Benjamin Britten",
                "weight": 1.6483516483516483
            }, {
                "id": 537997337,
                "name": "Yannick Nézet-Séguin",
                "weight": 1.6483516483516483
            }, {
                "id": 537122768,
                "name": "Lyric Opera of Chicago",
                "weight": 1.6483516483516483
            }, {
                "id": 537256719,
                "name": "Bryn Terfel",
                "weight": 1.6483516483516483
            }, {
                "id": 538568788,
                "name": "Tosca",
                "weight": 1.6483516483516483
            }, {
                "id": 537276606,
                "name": "Welsh National Opera",
                "weight": 1.098901098901099
            }, {
                "id": 538098743,
                "name": "La traviata",
                "weight": 1.098901098901099
            }, {
                "id": 538107713,
                "name": "Jonas Kaufmann",
                "weight": 1.098901098901099
            }, {
                "id": 537585619,
                "name": "Nico Muhly",
                "weight": 1.098901098901099
            }, {
                "id": 537979083,
                "name": "Le nozze di Figaro",
                "weight": 1.098901098901099
            }, {
                "id": 537205910,
                "name": "Joan Sutherland",
                "weight": 1.098901098901099
            }, {
                "id": 537656851,
                "name": "Richard Strauss",
                "weight": 1.098901098901099
            }]
        }]
    }, {
        "id": 268445471,
        "name": "Dance",
        "weight": 9.7521907095072073,
        "topics": [{
            "id": 537193636,
            "name": "Missy Elliott",
            "weight": 28.59903381642512
        }, {
            "id": 537630363,
            "name": "Bruno Mars",
            "weight": 25.024154589371982
        }, {
            "id": 537207621,
            "name": "Julianne Hough",
            "weight": 19.033816425120772
        }, {
            "id": 537194227,
            "name": "Jennifer Lopez",
            "weight": 10.917874396135266
        }, {
            "id": 537323920,
            "name": "Beyoncé",
            "weight": 10.434782608695652
        }, {
            "id": 268487274,
            "name": "Tango",
            "weight": 10.338164251207729,
            "topics": [{
                "id": 537705220,
                "name": "Kym Johnson",
                "weight": 66.355140186915889
            }, {
                "id": 537281069,
                "name": "Kristina Rihanoff",
                "weight": 12.149532710280374
            }, {
                "id": 537216755,
                "name": "Anton du Beke",
                "weight": 7.4766355140186915
            }, {
                "id": 537685178,
                "name": "Maksim Chmerkovskiy",
                "weight": 6.5420560747663554
            }, {
                "id": 537959690,
                "name": "Peta Murgatroyd",
                "weight": 6.5420560747663554
            }, {
                "id": 537230782,
                "name": "Mark Ballas Jr.",
                "weight": 6.5420560747663554
            }, {
                "id": 537284976,
                "name": "Derek Hough",
                "weight": 4.6728971962616823
            }]
        }, {
            "id": 537283017,
            "name": "Michael Jackson",
            "weight": 7.9227053140096615
        }, {
            "id": 537199686,
            "name": "Channing Tatum",
            "weight": 5.7971014492753623
        }, {
            "id": 537171590,
            "name": "Britney Spears",
            "weight": 5.7004830917874392
        }, {
            "id": 537189618,
            "name": "Justin Timberlake",
            "weight": 4.5410628019323669
        }, {
            "id": 537195654,
            "name": "Calvin Harris",
            "weight": 4.4444444444444446
        }, {
            "id": 537233437,
            "name": "New York City Ballet",
            "weight": 2.318840579710145
        }, {
            "id": 537998346,
            "name": "Swan Lake",
            "weight": 2.1256038647342996
        }, {
            "id": 537267373,
            "name": "Chris Brown",
            "weight": 2.0289855072463769
        }, {
            "id": 538095759,
            "name": "Bindi Irwin",
            "weight": 2.0289855072463769
        }, {
            "id": 537188459,
            "name": "Craig Revel Horwood",
            "weight": 1.932367149758454
        }, {
            "id": 537650809,
            "name": "Dancing with the Stars",
            "weight": 1.7391304347826086
        }, {
            "id": 537198773,
            "name": "Nicole Scherzinger",
            "weight": 1.642512077294686
        }, {
            "id": 537234061,
            "name": "Royal Ballet, London",
            "weight": 1.642512077294686
        }, {
            "id": 538284962,
            "name": "Dance Moms",
            "weight": 1.3526570048309179
        }, {
            "id": 538017624,
            "name": "Tinashe Kachingwe",
            "weight": 1.2560386473429952
        }, {
            "id": 537753470,
            "name": "Got to Dance",
            "weight": 1.1594202898550725
        }, {
            "id": 537966374,
            "name": "The Ellen DeGeneres Show",
            "weight": 1.0628019323671498
        }, {
            "id": 537195040,
            "name": "George Balanchine",
            "weight": 1.0628019323671498
        }]
    }, {
        "id": 268489817,
        "name": "Visual Arts",
        "weight": 6.0209177423914069,
        "topics": [{
            "id": 268489953,
            "name": "Painting",
            "weight": 94.67918622848201,
            "topics": [{
                "id": 537197054,
                "name": "Andy Warhol",
                "weight": 23.801652892561982
            }, {
                "id": 537125598,
                "name": "Sotheby's Auction House",
                "weight": 13.884297520661157
            }, {
                "id": 537752330,
                "name": "Banksy",
                "weight": 10.909090909090908
            }, {
                "id": 537427916,
                "name": "Vincent van Gogh",
                "weight": 8.7603305785123968
            }, {
                "id": 537633667,
                "name": "Leonardo da Vinci",
                "weight": 6.2809917355371905
            }, {
                "id": 537113172,
                "name": "Museum of Modern Art",
                "weight": 6.2809917355371905
            }, {
                "id": 537277861,
                "name": "Bob Dylan",
                "weight": 6.115702479338843
            }, {
                "id": 537077288,
                "name": "Metropolitan Museum of Art",
                "weight": 6.115702479338843
            }, {
                "id": 537656605,
                "name": "Christie's",
                "weight": 5.12396694214876
            }, {
                "id": 537190918,
                "name": "Mona Lisa",
                "weight": 4.9586776859504136
            }, {
                "id": 537074784,
                "name": "British Museum",
                "weight": 3.4710743801652892
            }, {
                "id": 537329168,
                "name": "Pablo Picasso",
                "weight": 3.4710743801652892
            }, {
                "id": 537796435,
                "name": "Rembrandt",
                "weight": 2.6446280991735538
            }, {
                "id": 537639437,
                "name": "Norman Rockwell",
                "weight": 2.6446280991735538
            }, {
                "id": 537627649,
                "name": "Michelangelo",
                "weight": 2.6446280991735538
            }, {
                "id": 537153375,
                "name": "Royal Academy",
                "weight": 2.3140495867768593
            }, {
                "id": 537198425,
                "name": "David Hockney",
                "weight": 2.3140495867768593
            }, {
                "id": 537648107,
                "name": "Claude Monet",
                "weight": 1.9834710743801653
            }, {
                "id": 537279860,
                "name": "Jackson Pollock",
                "weight": 1.8181818181818181
            }, {
                "id": 538030568,
                "name": "Matisse",
                "weight": 1.8181818181818181
            }, {
                "id": 538006089,
                "name": "Museo del Prado",
                "weight": 1.6528925619834711
            }, {
                "id": 537467999,
                "name": "Frida Kahlo",
                "weight": 1.4876033057851239
            }, {
                "id": 537649974,
                "name": "Henri Matisse",
                "weight": 1.4876033057851239
            }, {
                "id": 538078891,
                "name": "Édouard Manet",
                "weight": 1.3223140495867769
            }, {
                "id": 537993866,
                "name": "Venice Biennale",
                "weight": 1.3223140495867769
            }, {
                "id": 537209981,
                "name": "Mark Rothko",
                "weight": 1.3223140495867769
            }, {
                "id": 537215316,
                "name": "Willem de Kooning",
                "weight": 1.1570247933884297
            }]
        }, {
            "id": 268487095,
            "name": "Sculpture",
            "weight": 45.226917057902973,
            "topics": [{
                "id": 537197054,
                "name": "Andy Warhol",
                "weight": 49.826989619377166
            }, {
                "id": 537125598,
                "name": "Sotheby's Auction House",
                "weight": 29.065743944636679
            }, {
                "id": 537752330,
                "name": "Banksy",
                "weight": 22.837370242214533
            }, {
                "id": 537633667,
                "name": "Leonardo da Vinci",
                "weight": 13.148788927335641
            }, {
                "id": 537113172,
                "name": "Museum of Modern Art",
                "weight": 13.148788927335641
            }, {
                "id": 537074784,
                "name": "British Museum",
                "weight": 7.26643598615917
            }, {
                "id": 537329168,
                "name": "Pablo Picasso",
                "weight": 7.26643598615917
            }, {
                "id": 537627649,
                "name": "Michelangelo",
                "weight": 5.5363321799307954
            }, {
                "id": 537153375,
                "name": "Royal Academy",
                "weight": 4.844290657439446
            }, {
                "id": 537636683,
                "name": "Jeff Koons",
                "weight": 3.4602076124567476
            }, {
                "id": 537993866,
                "name": "Venice Biennale",
                "weight": 2.7681660899653977
            }, {
                "id": 537404230,
                "name": "Anish Kapoor",
                "weight": 1.7301038062283738
            }, {
                "id": 537627294,
                "name": "Damien Hirst",
                "weight": 1.3840830449826989
            }, {
                "id": 537647906,
                "name": "Paul Gauguin",
                "weight": 1.3840830449826989
            }, {
                "id": 538211198,
                "name": "Millennium Park",
                "weight": 1.0380622837370241
            }, {
                "id": 537964588,
                "name": "Donatello",
                "weight": 1.0380622837370241
            }, {
                "id": 537637904,
                "name": "Henry Moore",
                "weight": 1.0380622837370241
            }, {
                "id": 538048449,
                "name": "Auguste Rodin",
                "weight": 1.0380622837370241
            }]
        }, {
            "id": 537197054,
            "name": "Andy Warhol",
            "weight": 22.535211267605632
        }, {
            "id": 268490307,
            "name": "Illusions",
            "weight": 16.588419405320813,
            "topics": [{
                "id": 537716720,
                "name": "Guns N' Roses",
                "weight": 32.075471698113205
            }]
        }, {
            "id": 268485746,
            "name": "Calligraphy",
            "weight": 4.3818466353677623
        }]
    }, {
        "id": 268445457,
        "name": "Architecture",
        "weight": 3.5428248374634883,
        "topics": [{
            "id": 537622188,
            "name": "Windows Vista",
            "weight": 14.361702127659575
        }, {
            "id": 537222060,
            "name": "Ai Weiwei",
            "weight": 14.095744680851064
        }, {
            "id": 537113172,
            "name": "Museum of Modern Art",
            "weight": 10.106382978723405
        }, {
            "id": 537591760,
            "name": "Plymouth",
            "weight": 5.0531914893617023
        }, {
            "id": 537188876,
            "name": "Zaha Hadid",
            "weight": 4.5212765957446805
        }, {
            "id": 537993866,
            "name": "Venice Biennale",
            "weight": 2.1276595744680851
        }, {
            "id": 537147387,
            "name": "Frank Gehry",
            "weight": 1.0638297872340425
        }, {
            "id": 537190261,
            "name": "Renzo Piano",
            "weight": 1.0638297872340425
        }, {
            "id": 537231145,
            "name": "Bjarke Ingels",
            "weight": 1.0638297872340425
        }]
    }, {
        "id": 268489899,
        "name": "Museums",
        "weight": 2.5723169697540751,
        "topics": [{
            "id": 537125458,
            "name": "Smithsonian Institution",
            "weight": 30.4029304029304
        }, {
            "id": 537106018,
            "name": "Tate Gallery",
            "weight": 17.582417582417584
        }, {
            "id": 537117909,
            "name": "American Museum of Natural History",
            "weight": 14.652014652014651
        }, {
            "id": 537113172,
            "name": "Museum of Modern Art",
            "weight": 13.91941391941392
        }, {
            "id": 537077288,
            "name": "Metropolitan Museum of Art",
            "weight": 13.553113553113553
        }, {
            "id": 537136704,
            "name": "Natural History Museum",
            "weight": 9.1575091575091569
        }, {
            "id": 537103367,
            "name": "National Air and Space Museum",
            "weight": 8.791208791208792
        }, {
            "id": 537074784,
            "name": "British Museum",
            "weight": 7.6923076923076925
        }, {
            "id": 537141609,
            "name": "Victoria and Albert Museum",
            "weight": 6.95970695970696
        }, {
            "id": 537122738,
            "name": "Los Angeles County Museum of Art",
            "weight": 5.4945054945054945
        }, {
            "id": 538314653,
            "name": "Madame Tussauds",
            "weight": 4.0293040293040292
        }, {
            "id": 537144611,
            "name": "Brooklyn Museum",
            "weight": 3.2967032967032965
        }, {
            "id": 538012490,
            "name": "J. Paul Getty Museum",
            "weight": 3.2967032967032965
        }, {
            "id": 537127101,
            "name": "Whitney Museum of American Art",
            "weight": 3.2967032967032965
        }, {
            "id": 537151108,
            "name": "National Gallery of Art",
            "weight": 1.4652014652014651
        }]
    }, {
        "id": 268489812,
        "name": "Art Styles",
        "weight": 1.7054555733534345,
        "topics": [{
            "id": 268487234,
            "name": "Street Art",
            "weight": 71.8232044198895,
            "topics": [{
                "id": 268486236,
                "name": "Graffiti",
                "weight": 75.384615384615387,
                "topics": [{
                    "id": 537752330,
                    "name": "Banksy",
                    "weight": 67.34693877551021
                }, {
                    "id": 537199551,
                    "name": "Shepard Fairey",
                    "weight": 21.428571428571427
                }, {
                    "id": 537717618,
                    "name": "Led Zeppelin",
                    "weight": 14.285714285714286
                }, {
                    "id": 537195367,
                    "name": "Jean-Michel Basquiat",
                    "weight": 4.0816326530612246
                }, {
                    "id": 538095294,
                    "name": "Ben Eine",
                    "weight": 1.0204081632653061
                }]
            }, {
                "id": 537752330,
                "name": "Banksy",
                "weight": 50.769230769230766
            }, {
                "id": 537199551,
                "name": "Shepard Fairey",
                "weight": 16.153846153846153
            }]
        }, {
            "id": 268487011,
            "name": "Retro",
            "weight": 68.508287292817684,
            "topics": [{
                "id": 536899762,
                "name": "Nintendo",
                "weight": 65.3225806451613
            }, {
                "id": 538311715,
                "name": "Final Fantasy",
                "weight": 33.87096774193548
            }, {
                "id": 537106205,
                "name": "The Games Community Board",
                "weight": 29.032258064516128
            }, {
                "id": 537071095,
                "name": "Qantas",
                "weight": 25.806451612903224
            }, {
                "id": 537584485,
                "name": "Commodore 64",
                "weight": 4.032258064516129
            }, {
                "id": 537841813,
                "name": "Space Invaders",
                "weight": 3.225806451612903
            }]
        }]
    }]
}, {
    "id": 268459464,
    "name": "Media",
    "weight": 6.7910623795153775,
    "color": "#EF9A46",
    "topics": [{
        "id": 536898834,
        "name": "NBC",
        "weight": 45.478500419211883
    }, {
        "id": 536898836,
        "name": "CBS",
        "weight": 28.506407953048271
    }, {
        "id": 537084737,
        "name": "Youtube",
        "weight": 19.65504850880345
    }, {
        "id": 268486458,
        "name": "Journalism",
        "weight": 10.50425200622829,
        "topics": [{
            "id": 537074675,
            "name": "NBC News",
            "weight": 10.946408209806158
        }, {
            "id": 538113858,
            "name": "BuzzFeed",
            "weight": 8.0957810718358036
        }, {
            "id": 268486892,
            "name": "Photojournalism",
            "weight": 3.5347776510832385
        }, {
            "id": 537282745,
            "name": "Brian Williams",
            "weight": 2.5085518814139109
        }, {
            "id": 537691751,
            "name": "Lester Holt",
            "weight": 2.1664766248574687
        }, {
            "id": 537130713,
            "name": "Committee to Protect Journalists",
            "weight": 1.4823261117445838
        }]
    }, {
        "id": 537072917,
        "name": "Facebook",
        "weight": 5.2820697089471791
    }, {
        "id": 537072927,
        "name": "Twitter",
        "weight": 4.6712181099532879
    }, {
        "id": 537069217,
        "name": "Donald Trump",
        "weight": 4.0483890286261826
    }, {
        "id": 268459468,
        "name": "Radio",
        "weight": 3.5932446999640675,
        "topics": [{
            "id": 537070883,
            "name": "BBC",
            "weight": 56.666666666666664
        }, {
            "id": 537202102,
            "name": "Melanie Brown",
            "weight": 38.0
        }, {
            "id": 537623028,
            "name": "Pandora Radio",
            "weight": 19.333333333333332
        }, {
            "id": 268487272,
            "name": "Talk Radio",
            "weight": 18.666666666666668,
            "topics": [{
                "id": 537188861,
                "name": "Rush Limbaugh",
                "weight": 35.714285714285715
            }, {
                "id": 537188556,
                "name": "Glenn Beck",
                "weight": 26.785714285714285
            }, {
                "id": 537204106,
                "name": "Mark Levin",
                "weight": 17.857142857142858
            }, {
                "id": 537160045,
                "name": "WPHT",
                "weight": 3.5714285714285716
            }, {
                "id": 537197537,
                "name": "Michael Savage",
                "weight": 1.7857142857142858
            }]
        }, {
            "id": 537958560,
            "name": "Rita Ora",
            "weight": 16.0
        }, {
            "id": 537194012,
            "name": "Howard Stern",
            "weight": 10.0
        }, {
            "id": 537139485,
            "name": "Sirius XM Satellite Radio",
            "weight": 9.3333333333333339
        }, {
            "id": 537160775,
            "name": "BBC Radio 1",
            "weight": 9.3333333333333339
        }, {
            "id": 537587759,
            "name": "Foo Fighters",
            "weight": 9.3333333333333339
        }, {
            "id": 537161450,
            "name": "BBC Radio 4",
            "weight": 9.0
        }, {
            "id": 537174632,
            "name": "Radio 2",
            "weight": 8.0
        }, {
            "id": 537203700,
            "name": "Terry Wogan",
            "weight": 8.0
        }, {
            "id": 537103994,
            "name": "Ofcom",
            "weight": 7.666666666666667
        }, {
            "id": 537188861,
            "name": "Rush Limbaugh",
            "weight": 6.666666666666667
        }, {
            "id": 537280027,
            "name": "Nick Grimshaw",
            "weight": 6.666666666666667
        }, {
            "id": 537188556,
            "name": "Glenn Beck",
            "weight": 5.0
        }, {
            "id": 538114026,
            "name": "Rdio",
            "weight": 5.0
        }, {
            "id": 537161165,
            "name": "KMOX",
            "weight": 4.666666666666667
        }, {
            "id": 537873901,
            "name": "Olly Murs",
            "weight": 4.666666666666667
        }, {
            "id": 537117441,
            "name": "ABC International, Corporate Strategy, and Governance",
            "weight": 4.666666666666667
        }, {
            "id": 537188655,
            "name": "Sean Hannity",
            "weight": 4.333333333333333
        }, {
            "id": 537160913,
            "name": "BBC Radio 2",
            "weight": 4.0
        }, {
            "id": 537161407,
            "name": "WFAN",
            "weight": 3.3333333333333335
        }, {
            "id": 537204106,
            "name": "Mark Levin",
            "weight": 3.3333333333333335
        }, {
            "id": 537162390,
            "name": "BBC 6 Music",
            "weight": 2.6666666666666665
        }, {
            "id": 537145035,
            "name": "CBS Radio, Inc.",
            "weight": 2.3333333333333335
        }, {
            "id": 537696605,
            "name": "Hugh Hewitt",
            "weight": 2.3333333333333335
        }, {
            "id": 537077286,
            "name": "BBC TV",
            "weight": 2.3333333333333335
        }, {
            "id": 537167135,
            "name": "Radio 2",
            "weight": 2.3333333333333335
        }, {
            "id": 537159994,
            "name": "BBC Radio Five Live",
            "weight": 2.0
        }, {
            "id": 537075236,
            "name": "BBC World Service",
            "weight": 2.0
        }, {
            "id": 537254818,
            "name": "Fearne Cotton",
            "weight": 1.6666666666666667
        }, {
            "id": 537779578,
            "name": "America's Got Talent",
            "weight": 1.6666666666666667
        }, {
            "id": 537268679,
            "name": "BBC Local Radio",
            "weight": 1.0
        }, {
            "id": 537161014,
            "name": "BBC Radio Ulster",
            "weight": 1.0
        }, {
            "id": 537204748,
            "name": "Ed Schultz",
            "weight": 1.0
        }, {
            "id": 537173575,
            "name": "Radio 1",
            "weight": 1.0
        }, {
            "id": 537195571,
            "name": "Garrison Keillor",
            "weight": 1.0
        }]
    }, {
        "id": 537100637,
        "name": "Home Box Office",
        "weight": 3.4734698766319321
    }, {
        "id": 537074783,
        "name": "Hillary Clinton",
        "weight": 2.9704156186369626
    }, {
        "id": 538278257,
        "name": "Islamic State in Iraq and the Levant",
        "weight": 2.7069110073062643
    }, {
        "id": 537070883,
        "name": "BBC",
        "weight": 2.036171996646305
    }, {
        "id": 537698143,
        "name": "Ted Cruz",
        "weight": 1.820577314648461
    }, {
        "id": 536925330,
        "name": "Yahoo!",
        "weight": 1.7487124206491795
    }, {
        "id": 536883339,
        "name": "Vladimir Putin",
        "weight": 1.6888250089831118
    }, {
        "id": 537195905,
        "name": "Jon Stewart",
        "weight": 1.5570727033177627
    }, {
        "id": 537190239,
        "name": "Muhammadu Buhari",
        "weight": 1.521140256318122
    }, {
        "id": 537219591,
        "name": "Ben Carson",
        "weight": 1.4492753623188406
    }, {
        "id": 537074675,
        "name": "NBC News",
        "weight": 1.1498383039885016
    }]
}, {
    "id": 268435458,
    "name": "Business",
    "weight": 6.7560862527553871,
    "color": "#001765",
    "topics": [{
        "id": 268489873,
        "name": "Marketing",
        "weight": 28.533590175776546,
        "topics": [{
            "id": 537926669,
            "name": "Instagram",
            "weight": 13.459915611814345
        }, {
            "id": 268487333,
            "name": "Trading",
            "weight": 8.7341772151898738,
            "topics": [{
                "id": 536899866,
                "name": "NASDAQ",
                "weight": 80.676328502415458
            }, {
                "id": 537072045,
                "name": "New York Stock Exchange",
                "weight": 61.352657004830917
            }, {
                "id": 536887934,
                "name": "Goldman Sachs",
                "weight": 45.410628019323674
            }, {
                "id": 536892448,
                "name": "Citigroup",
                "weight": 35.265700483091784
            }, {
                "id": 536892636,
                "name": "JPMorgan Chase",
                "weight": 32.850241545893716
            }, {
                "id": 537077338,
                "name": "U.S. Securities and Exchange Commission",
                "weight": 30.917874396135264
            }, {
                "id": 538115084,
                "name": "Bitcoin",
                "weight": 30.434782608695652
            }, {
                "id": 536892733,
                "name": "Morgan Stanley",
                "weight": 28.985507246376812
            }, {
                "id": 537084212,
                "name": "UBS AG (diversified)",
                "weight": 18.840579710144926
            }, {
                "id": 538290703,
                "name": "Securities and Exchange Commission",
                "weight": 17.391304347826086
            }, {
                "id": 536892405,
                "name": "BNP Paribas",
                "weight": 6.2801932367149762
            }, {
                "id": 537101640,
                "name": "IG Group",
                "weight": 1.4492753623188406
            }, {
                "id": 537125163,
                "name": "Saxo Bank",
                "weight": 1.4492753623188406
            }]
        }, {
            "id": 536930557,
            "name": "Samsung Electronics",
            "weight": 8.4810126582278489
        }, {
            "id": 268485970,
            "name": "Direct Marketing",
            "weight": 7.552742616033755
        }, {
            "id": 537154550,
            "name": "Steve Jobs",
            "weight": 6.8776371308016877
        }, {
            "id": 268489894,
            "name": "Branding",
            "weight": 5.2320675105485233,
            "topics": [{
                "id": 268486879,
                "name": "Personal Branding",
                "weight": 11.290322580645162
            }, {
                "id": 537658951,
                "name": "Interbrand",
                "weight": 1.6129032258064515
            }]
        }, {
            "id": 268486605,
            "name": "Market Research",
            "weight": 5.0210970464135025,
            "topics": [{
                "id": 537084708,
                "name": "GfK SE",
                "weight": 9.2436974789915958
            }, {
                "id": 537084741,
                "name": "Kantar Group",
                "weight": 3.3613445378151261
            }, {
                "id": 537246690,
                "name": "Millward Brown",
                "weight": 1.680672268907563
            }]
        }, {
            "id": 537953873,
            "name": "Pinterest",
            "weight": 4.9789029535864975
        }, {
            "id": 536892904,
            "name": "Starbucks",
            "weight": 4.3881856540084385
        }, {
            "id": 536892982,
            "name": "Verizon Communications",
            "weight": 4.30379746835443
        }, {
            "id": 268490509,
            "name": "Content Marketing",
            "weight": 4.1772151898734178,
            "topics": [{
                "id": 538111713,
                "name": "NewsCred",
                "weight": 3.0303030303030303
            }]
        }, {
            "id": 537072920,
            "name": "LinkedIn",
            "weight": 4.1772151898734178
        }, {
            "id": 537101550,
            "name": "NIKE (biz)",
            "weight": 3.5443037974683542
        }, {
            "id": 537001386,
            "name": "Salesforce.com",
            "weight": 2.8270042194092828
        }, {
            "id": 268487165,
            "name": "Social Media Marketing",
            "weight": 2.7426160337552741
        }, {
            "id": 537812725,
            "name": "Google+",
            "weight": 2.4894514767932487
        }, {
            "id": 268490288,
            "name": "Gamification",
            "weight": 1.4767932489451476
        }]
    }, {
        "id": 268446468,
        "name": "Finance",
        "weight": 20.250421382133396,
        "topics": [{
            "id": 268446474,
            "name": "Stocks & Markets",
            "weight": 47.919143876337692,
            "topics": [{
                "id": 268489874,
                "name": "Oil Prices",
                "weight": 20.223325062034739,
                "topics": [{
                    "id": 537077305,
                    "name": "Organization of Petroleum Exporting Countries",
                    "weight": 54.601226993865033
                }]
            }, {
                "id": 268486044,
                "name": "Emerging Markets",
                "weight": 12.406947890818859,
                "topics": [{
                    "id": 537197033,
                    "name": "Mark Mobius",
                    "weight": 2.0
                }]
            }]
        }, {
            "id": 268490016,
            "name": "Audit",
            "weight": 32.699167657550532,
            "topics": [{
                "id": 537077397,
                "name": "U.S. State Department",
                "weight": 90.9090909090909
            }, {
                "id": 537074648,
                "name": "Department of Homeland Security",
                "weight": 11.454545454545455
            }, {
                "id": 537077257,
                "name": "U.S. Government Accountability Office",
                "weight": 4.7272727272727275
            }, {
                "id": 537084853,
                "name": "PricewaterhouseCoopers",
                "weight": 4.5454545454545459
            }, {
                "id": 537084860,
                "name": "Deloitte",
                "weight": 4.1818181818181817
            }, {
                "id": 537211352,
                "name": "Kathleen Wynne",
                "weight": 3.0909090909090908
            }, {
                "id": 537071657,
                "name": "KPMG Corporate Finance",
                "weight": 2.3636363636363638
            }, {
                "id": 537073013,
                "name": "Nigerian National Petroleum Corporation",
                "weight": 2.3636363636363638
            }, {
                "id": 538297849,
                "name": "National Audit Office",
                "weight": 1.4545454545454546
            }]
        }, {
            "id": 268487012,
            "name": "Revenue",
            "weight": 24.851367419738406,
            "topics": [{
                "id": 536892344,
                "name": "Apple Inc.",
                "weight": 90.191387559808618
            }, {
                "id": 536925330,
                "name": "Yahoo!",
                "weight": 34.928229665071768
            }, {
                "id": 536929918,
                "name": "IBM",
                "weight": 26.315789473684209
            }, {
                "id": 537587540,
                "name": "Spotify",
                "weight": 25.598086124401913
            }, {
                "id": 537072920,
                "name": "LinkedIn",
                "weight": 23.684210526315791
            }, {
                "id": 536926433,
                "name": "Intel",
                "weight": 23.684210526315791
            }, {
                "id": 537282917,
                "name": "BlackBerry",
                "weight": 23.205741626794257
            }, {
                "id": 536921239,
                "name": "Cisco Systems, Inc.",
                "weight": 17.224880382775119
            }, {
                "id": 536892379,
                "name": "Bank of America Corporation",
                "weight": 15.789473684210526
            }, {
                "id": 537623028,
                "name": "Pandora Radio",
                "weight": 13.875598086124402
            }, {
                "id": 537074870,
                "name": "U.S. Internal Revenue Service",
                "weight": 13.157894736842104
            }, {
                "id": 537077370,
                "name": "U.S. Treasury",
                "weight": 9.8086124401913874
            }, {
                "id": 537132727,
                "name": "Zynga",
                "weight": 4.0669856459330145
            }]
        }, {
            "id": 268446460,
            "name": "Banking",
            "weight": 22.651605231866824,
            "topics": [{
                "id": 268489799,
                "name": "Credit Cards",
                "weight": 54.068241469816272,
                "topics": [{
                    "id": 537104293,
                    "name": "PayPal",
                    "weight": 36.407766990291265
                }, {
                    "id": 536892448,
                    "name": "Citigroup",
                    "weight": 35.436893203883493
                }, {
                    "id": 536892331,
                    "name": "American Express",
                    "weight": 21.844660194174757
                }, {
                    "id": 536893719,
                    "name": "MasterCard",
                    "weight": 19.417475728155338
                }, {
                    "id": 536892475,
                    "name": "Costco",
                    "weight": 16.50485436893204
                }, {
                    "id": 536892422,
                    "name": "Capital One",
                    "weight": 14.563106796116505
                }, {
                    "id": 537126914,
                    "name": "Visa International Service Association",
                    "weight": 14.077669902912621
                }, {
                    "id": 537119373,
                    "name": "China Union Pay",
                    "weight": 10.679611650485437
                }, {
                    "id": 537233922,
                    "name": "GE Capital",
                    "weight": 9.2233009708737868
                }, {
                    "id": 538287967,
                    "name": "Barclaycard",
                    "weight": 1.4563106796116505
                }]
            }, {
                "id": 537084692,
                "name": "Federal Reserve System",
                "weight": 44.356955380577425
            }, {
                "id": 536887934,
                "name": "Goldman Sachs",
                "weight": 24.671916010498688
            }, {
                "id": 536892386,
                "name": "Barclays PLC",
                "weight": 19.685039370078741
            }, {
                "id": 536892448,
                "name": "Citigroup",
                "weight": 19.16010498687664
            }, {
                "id": 536892636,
                "name": "JPMorgan Chase",
                "weight": 17.84776902887139
            }, {
                "id": 536892379,
                "name": "Bank of America Corporation",
                "weight": 17.322834645669293
            }, {
                "id": 536892733,
                "name": "Morgan Stanley",
                "weight": 15.748031496062993
            }, {
                "id": 536892999,
                "name": "Wells Fargo",
                "weight": 15.748031496062993
            }, {
                "id": 536892616,
                "name": "HSBC",
                "weight": 15.485564304461942
            }, {
                "id": 536908638,
                "name": "Bank of England",
                "weight": 14.698162729658792
            }, {
                "id": 537074627,
                "name": "European Central Bank",
                "weight": 14.698162729658792
            }, {
                "id": 536892481,
                "name": "Credit Suisse",
                "weight": 12.598425196850394
            }, {
                "id": 268489800,
                "name": "Online Banking",
                "weight": 12.598425196850394
            }, {
                "id": 536892331,
                "name": "American Express",
                "weight": 11.811023622047244
            }, {
                "id": 536892851,
                "name": "The Royal Bank of Scotland",
                "weight": 11.286089238845145
            }, {
                "id": 536892504,
                "name": "Deutsche Bank",
                "weight": 11.286089238845145
            }, {
                "id": 537084212,
                "name": "UBS AG (diversified)",
                "weight": 10.236220472440944
            }, {
                "id": 536892850,
                "name": "Royal Bank of Canada",
                "weight": 9.9737532808398957
            }, {
                "id": 536892960,
                "name": "U.S. Bancorp",
                "weight": 7.0866141732283463
            }, {
                "id": 537072183,
                "name": "Scotiabank",
                "weight": 6.2992125984251972
            }, {
                "id": 537147212,
                "name": "First National City Bank of New York",
                "weight": 6.0367454068241466
            }, {
                "id": 538110917,
                "name": "Financial Conduct Authority",
                "weight": 6.0367454068241466
            }, {
                "id": 537074526,
                "name": "Bank of Canada",
                "weight": 5.5118110236220472
            }, {
                "id": 537264790,
                "name": "Central Bank of Nigeria",
                "weight": 4.9868766404199478
            }, {
                "id": 536892381,
                "name": "Bank of Montreal",
                "weight": 4.9868766404199478
            }, {
                "id": 537063568,
                "name": "ANZ",
                "weight": 4.9868766404199478
            }, {
                "id": 537233922,
                "name": "GE Capital",
                "weight": 4.9868766404199478
            }, {
                "id": 537071699,
                "name": "Piper Jaffray",
                "weight": 4.7244094488188972
            }, {
                "id": 537055490,
                "name": "Nomura Holdings",
                "weight": 4.1994750656167978
            }, {
                "id": 537075196,
                "name": "Reserve Bank of India",
                "weight": 4.1994750656167978
            }, {
                "id": 536892405,
                "name": "BNP Paribas",
                "weight": 3.4120734908136483
            }, {
                "id": 536892604,
                "name": "Lloyds Bank",
                "weight": 3.4120734908136483
            }, {
                "id": 536892738,
                "name": "National Australia Bank",
                "weight": 3.1496062992125986
            }, {
                "id": 537063426,
                "name": "Commonwealth Bank",
                "weight": 3.1496062992125986
            }, {
                "id": 538293343,
                "name": "National Bank",
                "weight": 2.8871391076115485
            }, {
                "id": 536892719,
                "name": "Merrill Lynch",
                "weight": 2.8871391076115485
            }, {
                "id": 536892461,
                "name": "Commerzbank",
                "weight": 2.6246719160104988
            }, {
                "id": 537063424,
                "name": "Westpac",
                "weight": 2.6246719160104988
            }, {
                "id": 537284691,
                "name": "Reserve Bank of Australia",
                "weight": 2.3622047244094486
            }, {
                "id": 537072427,
                "name": "Federal Deposit Insurance",
                "weight": 2.3622047244094486
            }, {
                "id": 536892950,
                "name": "Toronto-Dominion Bank",
                "weight": 1.837270341207349
            }, {
                "id": 537194311,
                "name": "Raghuram Rajan",
                "weight": 1.837270341207349
            }, {
                "id": 537071551,
                "name": "Cowen Group",
                "weight": 1.3123359580052494
            }]
        }, {
            "id": 537084692,
            "name": "Federal Reserve System",
            "weight": 10.04756242568371
        }, {
            "id": 536887934,
            "name": "Goldman Sachs",
            "weight": 5.58858501783591
        }, {
            "id": 268490652,
            "name": "Cryptocurrencies",
            "weight": 5.35077288941736,
            "topics": [{
                "id": 538115084,
                "name": "Bitcoin",
                "weight": 70.0
            }, {
                "id": 538257369,
                "name": "Dogecoin",
                "weight": 1.1111111111111112
            }]
        }, {
            "id": 537074517,
            "name": "International Monetary Fund",
            "weight": 5.1129607609988108
        }, {
            "id": 536889179,
            "name": "BP",
            "weight": 4.6373365041617118
        }, {
            "id": 536892386,
            "name": "Barclays PLC",
            "weight": 4.4589774078478
        }, {
            "id": 536892448,
            "name": "Citigroup",
            "weight": 4.3400713436385256
        }, {
            "id": 537119094,
            "name": "Tesla Motors",
            "weight": 4.3400713436385256
        }, {
            "id": 536892581,
            "name": "General Electric",
            "weight": 4.2806183115338881
        }, {
            "id": 536892636,
            "name": "JPMorgan Chase",
            "weight": 4.0428061831153386
        }, {
            "id": 536892379,
            "name": "Bank of America Corporation",
            "weight": 3.9239001189060643
        }, {
            "id": 537077338,
            "name": "U.S. Securities and Exchange Commission",
            "weight": 3.8049940546967895
        }, {
            "id": 538115084,
            "name": "Bitcoin",
            "weight": 3.7455410225921524
        }, {
            "id": 536891403,
            "name": "Exxon Mobil",
            "weight": 3.6860879904875148
        }, {
            "id": 536892733,
            "name": "Morgan Stanley",
            "weight": 3.56718192627824
        }, {
            "id": 536892999,
            "name": "Wells Fargo",
            "weight": 3.56718192627824
        }, {
            "id": 536892616,
            "name": "HSBC",
            "weight": 3.5077288941736029
        }, {
            "id": 537070014,
            "name": "Warren Buffett",
            "weight": 3.4482758620689653
        }, {
            "id": 537074627,
            "name": "European Central Bank",
            "weight": 3.329369797859691
        }, {
            "id": 537035124,
            "name": "Dow Jones & Company",
            "weight": 2.9726516052318672
        }, {
            "id": 536892851,
            "name": "The Royal Bank of Scotland",
            "weight": 2.5564803804994054
        }, {
            "id": 536892504,
            "name": "Deutsche Bank",
            "weight": 2.5564803804994054
        }, {
            "id": 537084212,
            "name": "UBS AG (diversified)",
            "weight": 2.3186682520808559
        }, {
            "id": 536892850,
            "name": "Royal Bank of Canada",
            "weight": 2.2592152199762188
        }, {
            "id": 538161004,
            "name": "REIT",
            "weight": 1.8430439952437574
        }, {
            "id": 268485936,
            "name": "Deflation",
            "weight": 1.5457788347205708,
            "topics": [{
                "id": 537242459,
                "name": "Ben Bernanke",
                "weight": 38.46153846153846
            }]
        }, {
            "id": 537072236,
            "name": "Moody's",
            "weight": 1.3079667063020215
        }, {
            "id": 268486653,
            "name": "Microfinance",
            "weight": 1.2485136741973841,
            "topics": [{
                "id": 538242775,
                "name": "Bangko Sentral ng Pilipinas",
                "weight": 9.5238095238095237
            }]
        }, {
            "id": 537074526,
            "name": "Bank of Canada",
            "weight": 1.2485136741973841
        }, {
            "id": 537063568,
            "name": "ANZ",
            "weight": 1.1296076099881094
        }]
    }, {
        "id": 268447468,
        "name": "Real Estate",
        "weight": 15.217914760414159,
        "topics": [{
            "id": 268490715,
            "name": "Residential Real Estate",
            "weight": 6.4082278481012658
        }, {
            "id": 538161004,
            "name": "REIT",
            "weight": 2.4525316455696204
        }, {
            "id": 537656605,
            "name": "Christie's",
            "weight": 2.4525316455696204
        }, {
            "id": 268485839,
            "name": "Commercial Real Estate",
            "weight": 2.3734177215189876,
            "topics": [{
                "id": 537963637,
                "name": "Colliers International",
                "weight": 13.333333333333334
            }]
        }, {
            "id": 537107359,
            "name": "Zillow.com",
            "weight": 1.9778481012658229
        }, {
            "id": 537071516,
            "name": "Blackstone Group",
            "weight": 1.740506329113924
        }, {
            "id": 537075043,
            "name": "National Association of Realtors",
            "weight": 1.6613924050632911
        }, {
            "id": 537124789,
            "name": "Redfin",
            "weight": 1.2658227848101267
        }]
    }, {
        "id": 268490511,
        "name": "Technology Industry",
        "weight": 11.678304839874789
    }, {
        "id": 268456468,
        "name": "Energy",
        "weight": 8.0905369612328446,
        "topics": [{
            "id": 536899060,
            "name": "Google",
            "weight": 52.083333333333336
        }, {
            "id": 268446478,
            "name": "Oil",
            "weight": 37.648809523809526,
            "topics": [{
                "id": 537077305,
                "name": "Organization of Petroleum Exporting Countries",
                "weight": 35.177865612648219
            }, {
                "id": 536889179,
                "name": "BP",
                "weight": 30.8300395256917
            }, {
                "id": 536891403,
                "name": "Exxon Mobil",
                "weight": 24.505928853754941
            }, {
                "id": 536891422,
                "name": "Royal Dutch Shell",
                "weight": 18.972332015810277
            }, {
                "id": 537074515,
                "name": "International Energy Agency",
                "weight": 18.57707509881423
            }, {
                "id": 536952528,
                "name": "BG Group",
                "weight": 15.41501976284585
            }, {
                "id": 536891610,
                "name": "Halliburton",
                "weight": 10.671936758893281
            }, {
                "id": 537112241,
                "name": "Kinder Morgan Power Company",
                "weight": 10.276679841897232
            }, {
                "id": 537101219,
                "name": "Greenpeace International",
                "weight": 9.8814229249011856
            }, {
                "id": 536892374,
                "name": "Baker Hughes",
                "weight": 8.3003952569169961
            }, {
                "id": 537074013,
                "name": "Freeport-McMoRan",
                "weight": 7.9051383399209483
            }, {
                "id": 537177205,
                "name": "Ali al-Naimi",
                "weight": 7.1146245059288535
            }, {
                "id": 537126679,
                "name": "United States Bureau of Land Management",
                "weight": 6.7193675889328066
            }, {
                "id": 536877907,
                "name": "Gazprom",
                "weight": 6.3241106719367588
            }, {
                "id": 536892466,
                "name": "ConocoPhillips",
                "weight": 6.3241106719367588
            }, {
                "id": 536892795,
                "name": "Pemex",
                "weight": 5.5335968379446641
            }, {
                "id": 537073013,
                "name": "Nigerian National Petroleum Corporation",
                "weight": 5.1383399209486162
            }, {
                "id": 537145254,
                "name": "Chevron Eurasia, Europe and Middle East Exploration & Production",
                "weight": 4.7430830039525693
            }, {
                "id": 536877978,
                "name": "Rosneft",
                "weight": 4.3478260869565215
            }, {
                "id": 536892882,
                "name": "Sinopec",
                "weight": 3.9525691699604741
            }, {
                "id": 536891402,
                "name": "Eni",
                "weight": 3.5573122529644268
            }, {
                "id": 536892868,
                "name": "Schlumberger",
                "weight": 3.5573122529644268
            }, {
                "id": 537084776,
                "name": "Platts",
                "weight": 3.5573122529644268
            }, {
                "id": 536901854,
                "name": "Saudi Aramco",
                "weight": 3.1620553359683794
            }, {
                "id": 537063108,
                "name": "Transocean",
                "weight": 3.1620553359683794
            }, {
                "id": 537063194,
                "name": "Chesapeake Energy",
                "weight": 2.766798418972332
            }, {
                "id": 537063201,
                "name": "Enbridge",
                "weight": 2.766798418972332
            }, {
                "id": 537070213,
                "name": "Noble Energy",
                "weight": 2.3715415019762847
            }, {
                "id": 537278971,
                "name": "CNG (biz)",
                "weight": 1.9762845849802371
            }, {
                "id": 537070150,
                "name": "GAIL (India)",
                "weight": 1.9762845849802371
            }, {
                "id": 537273230,
                "name": "North Sea oil",
                "weight": 1.5810276679841897
            }, {
                "id": 537073005,
                "name": "Anadarko Petroleum",
                "weight": 1.5810276679841897
            }, {
                "id": 536944131,
                "name": "Encana",
                "weight": 1.5810276679841897
            }, {
                "id": 537073015,
                "name": "Pertamina",
                "weight": 1.5810276679841897
            }, {
                "id": 537073017,
                "name": "PetroChina",
                "weight": 1.5810276679841897
            }, {
                "id": 537069671,
                "name": "Mikhail Fridman",
                "weight": 1.1857707509881423
            }, {
                "id": 536891397,
                "name": "China National Petroleum Corporation",
                "weight": 1.1857707509881423
            }]
        }, {
            "id": 268487004,
            "name": "Renewable Energy",
            "weight": 29.910714285714285,
            "topics": [{
                "id": 268487174,
                "name": "Solar Power",
                "weight": 87.562189054726375,
                "topics": [{
                    "id": 537171616,
                    "name": "Elon Musk",
                    "weight": 79.545454545454547
                }, {
                    "id": 538060298,
                    "name": "SolarCity",
                    "weight": 21.59090909090909
                }, {
                    "id": 538050305,
                    "name": "SunEdison",
                    "weight": 12.5
                }, {
                    "id": 537124533,
                    "name": "PowerLight Corporation",
                    "weight": 6.8181818181818183
                }, {
                    "id": 537062895,
                    "name": "First Solar",
                    "weight": 4.5454545454545459
                }, {
                    "id": 537073992,
                    "name": "Abengoa",
                    "weight": 3.4090909090909092
                }]
            }, {
                "id": 268487457,
                "name": "Wind Power",
                "weight": 39.800995024875618,
                "topics": [{
                    "id": 537070326,
                    "name": "Vestas Wind Systems",
                    "weight": 7.5
                }, {
                    "id": 537073029,
                    "name": "Gamesa Corporacion Tecnologica",
                    "weight": 3.75
                }, {
                    "id": 538243474,
                    "name": "Enel Green Power",
                    "weight": 2.5
                }, {
                    "id": 537074778,
                    "name": "Enel SpA",
                    "weight": 2.5
                }, {
                    "id": 537996445,
                    "name": "NextEra Energy Resources",
                    "weight": 2.5
                }, {
                    "id": 537070297,
                    "name": "Suzlon Energy",
                    "weight": 1.25
                }, {
                    "id": 537111042,
                    "name": "Global Wind Energy Council",
                    "weight": 1.25
                }]
            }, {
                "id": 537077245,
                "name": "U.S. Department of Energy",
                "weight": 31.343283582089551
            }, {
                "id": 537074515,
                "name": "International Energy Agency",
                "weight": 23.383084577114428
            }, {
                "id": 538050305,
                "name": "SunEdison",
                "weight": 10.945273631840797
            }, {
                "id": 537070326,
                "name": "Vestas Wind Systems",
                "weight": 2.9850746268656718
            }, {
                "id": 537151213,
                "name": "National Renewable Energy Laboratory",
                "weight": 1.9900497512437811
            }, {
                "id": 537143215,
                "name": "American Wind Energy Association",
                "weight": 1.4925373134328359
            }]
        }, {
            "id": 268446477,
            "name": "Nuclear Power",
            "weight": 20.238095238095237,
            "topics": [{
                "id": 537074505,
                "name": "International Atomic Energy Agency",
                "weight": 32.352941176470587
            }, {
                "id": 537191734,
                "name": "Nawaz Sharif",
                "weight": 30.882352941176471
            }, {
                "id": 537101219,
                "name": "Greenpeace International",
                "weight": 18.382352941176471
            }, {
                "id": 536892518,
                "name": "Duke Energy",
                "weight": 7.3529411764705879
            }, {
                "id": 537070119,
                "name": "E.ON (energy)",
                "weight": 6.617647058823529
            }, {
                "id": 536892550,
                "name": "Exelon",
                "weight": 5.1470588235294121
            }, {
                "id": 537137180,
                "name": "Nuclear Regulatory Commission",
                "weight": 4.4117647058823533
            }, {
                "id": 536892947,
                "name": "Tokyo Electric Power Company",
                "weight": 4.4117647058823533
            }, {
                "id": 537112597,
                "name": "London Electric",
                "weight": 1.4705882352941178
            }]
        }, {
            "id": 268489880,
            "name": "Gas",
            "weight": 20.089285714285715,
            "topics": [{
                "id": 536892581,
                "name": "General Electric",
                "weight": 53.333333333333336
            }, {
                "id": 536891403,
                "name": "Exxon Mobil",
                "weight": 45.925925925925924
            }, {
                "id": 536952528,
                "name": "BG Group",
                "weight": 28.888888888888889
            }, {
                "id": 536892516,
                "name": "Dow Chemical Company",
                "weight": 28.148148148148149
            }, {
                "id": 536891610,
                "name": "Halliburton",
                "weight": 20.0
            }, {
                "id": 537127011,
                "name": "Waste Management",
                "weight": 20.0
            }, {
                "id": 537112241,
                "name": "Kinder Morgan Power Company",
                "weight": 19.25925925925926
            }, {
                "id": 536892374,
                "name": "Baker Hughes",
                "weight": 15.555555555555555
            }, {
                "id": 537074013,
                "name": "Freeport-McMoRan",
                "weight": 14.814814814814815
            }, {
                "id": 536877907,
                "name": "Gazprom",
                "weight": 11.851851851851851
            }, {
                "id": 536892466,
                "name": "ConocoPhillips",
                "weight": 11.851851851851851
            }, {
                "id": 538124722,
                "name": "GasBuddy",
                "weight": 11.851851851851851
            }, {
                "id": 537145254,
                "name": "Chevron Eurasia, Europe and Middle East Exploration & Production",
                "weight": 8.88888888888889
            }, {
                "id": 538094962,
                "name": "Phillips 66",
                "weight": 8.1481481481481488
            }, {
                "id": 536892518,
                "name": "Duke Energy",
                "weight": 7.4074074074074074
            }, {
                "id": 536891402,
                "name": "Eni",
                "weight": 6.666666666666667
            }, {
                "id": 536892435,
                "name": "Centrica",
                "weight": 6.666666666666667
            }, {
                "id": 536892514,
                "name": "Dominion Resources",
                "weight": 5.9259259259259256
            }, {
                "id": 536892484,
                "name": "Cummins",
                "weight": 5.9259259259259256
            }, {
                "id": 536892550,
                "name": "Exelon",
                "weight": 5.1851851851851851
            }, {
                "id": 537063194,
                "name": "Chesapeake Energy",
                "weight": 5.1851851851851851
            }, {
                "id": 537070213,
                "name": "Noble Energy",
                "weight": 4.4444444444444446
            }, {
                "id": 537278971,
                "name": "CNG (biz)",
                "weight": 3.7037037037037037
            }, {
                "id": 537074994,
                "name": "Federal Energy Regulatory Commission",
                "weight": 3.7037037037037037
            }, {
                "id": 537273230,
                "name": "North Sea oil",
                "weight": 2.9629629629629628
            }, {
                "id": 536892873,
                "name": "5fb488e0d5322c39688b439f02bd5a96d7054768e76b1022b164112cc71a3259",
                "weight": 2.9629629629629628
            }, {
                "id": 537073005,
                "name": "Anadarko Petroleum",
                "weight": 2.9629629629629628
            }, {
                "id": 537084030,
                "name": "Marathon Oil",
                "weight": 2.9629629629629628
            }, {
                "id": 536892310,
                "name": "Air Products & Chemicals",
                "weight": 2.2222222222222223
            }, {
                "id": 537070112,
                "name": "Delek Group",
                "weight": 2.2222222222222223
            }, {
                "id": 537070290,
                "name": "Spectra Energy",
                "weight": 2.2222222222222223
            }, {
                "id": 537084032,
                "name": "OMV Group",
                "weight": 2.2222222222222223
            }, {
                "id": 538104002,
                "name": "National Iranian Gas Company",
                "weight": 1.4814814814814814
            }]
        }, {
            "id": 268490563,
            "name": "Energy Efficiency",
            "weight": 16.36904761904762,
            "topics": [{
                "id": 537074515,
                "name": "International Energy Agency",
                "weight": 42.727272727272727
            }, {
                "id": 538060298,
                "name": "SolarCity",
                "weight": 34.545454545454547
            }, {
                "id": 537151213,
                "name": "National Renewable Energy Laboratory",
                "weight": 3.6363636363636362
            }, {
                "id": 537143075,
                "name": "American Council for an Energy-Efficient Economy",
                "weight": 1.8181818181818181
            }, {
                "id": 537104000,
                "name": "Office of Energy Efficiency and Renewable Energy",
                "weight": 1.8181818181818181
            }]
        }, {
            "id": 537074749,
            "name": "U.S. Environmental Protection Agency",
            "weight": 16.071428571428573
        }, {
            "id": 536887934,
            "name": "Goldman Sachs",
            "weight": 13.988095238095237
        }, {
            "id": 537077305,
            "name": "Organization of Petroleum Exporting Countries",
            "weight": 13.244047619047619
        }, {
            "id": 536889179,
            "name": "BP",
            "weight": 11.607142857142858
        }, {
            "id": 268489807,
            "name": "Electricity",
            "weight": 11.458333333333334,
            "topics": [{
                "id": 537077245,
                "name": "U.S. Department of Energy",
                "weight": 81.818181818181813
            }, {
                "id": 537070139,
                "name": "FirstEnergy",
                "weight": 14.285714285714286
            }, {
                "id": 536892514,
                "name": "Dominion Resources",
                "weight": 10.38961038961039
            }, {
                "id": 268487152,
                "name": "Smart Grid",
                "weight": 10.38961038961039,
                "topics": [{
                    "id": 537074778,
                    "name": "Enel SpA",
                    "weight": 25.0
                }]
            }, {
                "id": 536892947,
                "name": "Tokyo Electric Power Company",
                "weight": 7.7922077922077921
            }, {
                "id": 537074994,
                "name": "Federal Energy Regulatory Commission",
                "weight": 6.4935064935064934
            }, {
                "id": 537117875,
                "name": "American Electric Power Company Incorporated",
                "weight": 2.5974025974025974
            }, {
                "id": 537074778,
                "name": "Enel SpA",
                "weight": 2.5974025974025974
            }, {
                "id": 537150257,
                "name": "Manila Electric Company",
                "weight": 1.2987012987012987
            }, {
                "id": 537119587,
                "name": "Commonwealth Edison Company",
                "weight": 1.2987012987012987
            }, {
                "id": 537100360,
                "name": "Energy Future Holdings Corporation",
                "weight": 1.2987012987012987
            }, {
                "id": 537120442,
                "name": "Eskom",
                "weight": 1.2987012987012987
            }]
        }, {
            "id": 537119094,
            "name": "Tesla Motors",
            "weight": 10.863095238095237
        }, {
            "id": 536892581,
            "name": "General Electric",
            "weight": 10.714285714285714
        }, {
            "id": 537077245,
            "name": "U.S. Department of Energy",
            "weight": 9.375
        }, {
            "id": 536891403,
            "name": "Exxon Mobil",
            "weight": 9.2261904761904763
        }, {
            "id": 536892687,
            "name": "Lockheed Martin",
            "weight": 8.6309523809523814
        }, {
            "id": 536930560,
            "name": "Toshiba",
            "weight": 7.291666666666667
        }, {
            "id": 536891422,
            "name": "Royal Dutch Shell",
            "weight": 7.1428571428571432
        }, {
            "id": 537074515,
            "name": "International Energy Agency",
            "weight": 6.9940476190476186
        }, {
            "id": 537074505,
            "name": "International Atomic Energy Agency",
            "weight": 6.5476190476190474
        }, {
            "id": 536952528,
            "name": "BG Group",
            "weight": 5.8035714285714288
        }, {
            "id": 538060298,
            "name": "SolarCity",
            "weight": 5.6547619047619051
        }, {
            "id": 536892401,
            "name": "BHP Billiton Ltd.",
            "weight": 4.4642857142857144
        }, {
            "id": 537112241,
            "name": "Kinder Morgan Power Company",
            "weight": 3.8690476190476191
        }, {
            "id": 537101219,
            "name": "Greenpeace International",
            "weight": 3.7202380952380953
        }, {
            "id": 538050305,
            "name": "SunEdison",
            "weight": 3.2738095238095237
        }, {
            "id": 536929923,
            "name": "Siemens",
            "weight": 2.9761904761904763
        }, {
            "id": 536877907,
            "name": "Gazprom",
            "weight": 2.3809523809523809
        }, {
            "id": 536892466,
            "name": "ConocoPhillips",
            "weight": 2.3809523809523809
        }, {
            "id": 537145254,
            "name": "Chevron Eurasia, Europe and Middle East Exploration & Production",
            "weight": 1.7857142857142858
        }, {
            "id": 536892518,
            "name": "Duke Energy",
            "weight": 1.4880952380952381
        }, {
            "id": 536891402,
            "name": "Eni",
            "weight": 1.3392857142857142
        }, {
            "id": 537070119,
            "name": "E.ON (energy)",
            "weight": 1.3392857142857142
        }, {
            "id": 537084776,
            "name": "Platts",
            "weight": 1.3392857142857142
        }, {
            "id": 537063194,
            "name": "Chesapeake Energy",
            "weight": 1.0416666666666667
        }, {
            "id": 537063201,
            "name": "Enbridge",
            "weight": 1.0416666666666667
        }]
    }, {
        "id": 268446485,
        "name": "Taxes",
        "weight": 7.4042860582711292,
        "topics": [{
            "id": 537084397,
            "name": "Bill Clinton",
            "weight": 48.130081300813011
        }, {
            "id": 537197393,
            "name": "Stephen King",
            "weight": 23.902439024390244
        }, {
            "id": 537192318,
            "name": "Marco Rubio",
            "weight": 23.252032520325205
        }, {
            "id": 537171652,
            "name": "Jeb Bush",
            "weight": 21.300813008130081
        }, {
            "id": 537681698,
            "name": "Christopher J. Christie",
            "weight": 18.86178861788618
        }, {
            "id": 268486358,
            "name": "Income Tax",
            "weight": 16.422764227642276,
            "topics": [{
                "id": 537074870,
                "name": "U.S. Internal Revenue Service",
                "weight": 54.455445544554458
            }, {
                "id": 537654264,
                "name": "Paul LePage",
                "weight": 25.742574257425744
            }, {
                "id": 537189456,
                "name": "Sam Brownback",
                "weight": 5.9405940594059405
            }, {
                "id": 537074795,
                "name": "Senate Finance Committee",
                "weight": 4.9504950495049505
            }, {
                "id": 537119016,
                "name": "Canada Revenue Agency",
                "weight": 3.9603960396039604
            }]
        }, {
            "id": 537074870,
            "name": "U.S. Internal Revenue Service",
            "weight": 8.94308943089431
        }, {
            "id": 536892481,
            "name": "Credit Suisse",
            "weight": 7.8048780487804876
        }, {
            "id": 537177786,
            "name": "Jerry Brown",
            "weight": 7.4796747967479673
        }, {
            "id": 268490720,
            "name": "Property Tax",
            "weight": 7.4796747967479673
        }, {
            "id": 537084212,
            "name": "UBS AG (diversified)",
            "weight": 6.3414634146341466
        }, {
            "id": 537668620,
            "name": "Scott Walker",
            "weight": 4.8780487804878048
        }, {
            "id": 537075525,
            "name": "Bobby Jindal",
            "weight": 4.7154471544715451
        }, {
            "id": 537654264,
            "name": "Paul LePage",
            "weight": 4.2276422764227641
        }, {
            "id": 538202181,
            "name": "EBITDA",
            "weight": 2.2764227642276422
        }]
    }, {
        "id": 268486965,
        "name": "Publishing",
        "weight": 7.163496267758247,
        "topics": [{
            "id": 537227711,
            "name": "Harper Lee",
            "weight": 50.252100840336134
        }, {
            "id": 537121515,
            "name": "Houghton Mifflin Harcourt Publishing Company",
            "weight": 17.815126050420169
        }, {
            "id": 537623052,
            "name": "Playboy",
            "weight": 9.2436974789915958
        }, {
            "id": 537077417,
            "name": "Random House",
            "weight": 8.7394957983193269
        }, {
            "id": 537278803,
            "name": "Rupert Murdoch",
            "weight": 8.5714285714285712
        }, {
            "id": 537590516,
            "name": "Amazon Kindle",
            "weight": 7.8991596638655466
        }, {
            "id": 536892748,
            "name": "News Corporation",
            "weight": 4.2016806722689077
        }, {
            "id": 537310793,
            "name": "Mark Twain",
            "weight": 3.865546218487395
        }, {
            "id": 538321881,
            "name": "Warner/Chappell Music",
            "weight": 3.6974789915966388
        }, {
            "id": 537144054,
            "name": "Barnes and Noble Booksellers",
            "weight": 3.3613445378151261
        }, {
            "id": 537130803,
            "name": "Conde Nast Publications, Inc.",
            "weight": 3.3613445378151261
        }, {
            "id": 537798237,
            "name": "Simon & Schuster",
            "weight": 2.8571428571428572
        }, {
            "id": 537106280,
            "name": "Penguin Books",
            "weight": 2.8571428571428572
        }, {
            "id": 537122701,
            "name": "Little, Brown Young Readers",
            "weight": 2.6890756302521011
        }, {
            "id": 537135329,
            "name": "Little, Brown Books for Young Readers",
            "weight": 1.680672268907563
        }, {
            "id": 537237491,
            "name": "Publishers Weekly",
            "weight": 1.680672268907563
        }, {
            "id": 537122689,
            "name": "List of current IDW Productions publications",
            "weight": 1.680672268907563
        }, {
            "id": 537256047,
            "name": "Crown Publishing Group",
            "weight": 1.5126050420168067
        }, {
            "id": 537126353,
            "name": "Times Mirror Company",
            "weight": 1.3445378151260505
        }]
    }, {
        "id": 268447461,
        "name": "Transportation",
        "weight": 7.019022393450518,
        "topics": [{
            "id": 268486559,
            "name": "Logistics",
            "weight": 54.373927958833619,
            "topics": [{
                "id": 536888921,
                "name": "TNT N.V.",
                "weight": 76.025236593059944
            }, {
                "id": 536891404,
                "name": "FedEx",
                "weight": 17.034700315457414
            }, {
                "id": 536888922,
                "name": "DHL Express",
                "weight": 5.0473186119873814
            }, {
                "id": 537072904,
                "name": "United Parcel Service",
                "weight": 3.4700315457413251
            }]
        }, {
            "id": 268446457,
            "name": "Airlines",
            "weight": 50.943396226415096,
            "topics": [{
                "id": 536889162,
                "name": "Boeing",
                "weight": 37.373737373737377
            }, {
                "id": 536916874,
                "name": "Airbus",
                "weight": 29.966329966329965
            }, {
                "id": 536926855,
                "name": "American Airlines",
                "weight": 27.946127946127945
            }, {
                "id": 536940086,
                "name": "United Airlines",
                "weight": 26.262626262626263
            }, {
                "id": 537072862,
                "name": "London Heathrow Airport",
                "weight": 19.19191919191919
            }, {
                "id": 536892500,
                "name": "Delta Air Lines",
                "weight": 19.19191919191919
            }, {
                "id": 536892412,
                "name": "British Airways",
                "weight": 17.508417508417509
            }, {
                "id": 536892309,
                "name": "Air France",
                "weight": 14.478114478114477
            }, {
                "id": 536892897,
                "name": "Southwest Airlines",
                "weight": 14.141414141414142
            }, {
                "id": 537071038,
                "name": "JetBlue Airways Corporation",
                "weight": 14.141414141414142
            }, {
                "id": 537100443,
                "name": "Etihad Airways Crystal Cargo",
                "weight": 11.447811447811448
            }, {
                "id": 537071095,
                "name": "Qantas",
                "weight": 10.774410774410775
            }, {
                "id": 538038975,
                "name": "Boeing 787",
                "weight": 10.437710437710438
            }, {
                "id": 536921881,
                "name": "Air Canada",
                "weight": 10.1010101010101
            }, {
                "id": 536922614,
                "name": "Virgin Atlantic",
                "weight": 10.1010101010101
            }, {
                "id": 537071193,
                "name": "EasyJet",
                "weight": 8.0808080808080813
            }, {
                "id": 537728084,
                "name": "Boeing 777",
                "weight": 7.7441077441077439
            }, {
                "id": 536900629,
                "name": "Turkish Airlines",
                "weight": 7.0707070707070709
            }, {
                "id": 537070999,
                "name": "International Air Transport Association",
                "weight": 7.0707070707070709
            }, {
                "id": 536899563,
                "name": "Air India",
                "weight": 6.7340067340067344
            }, {
                "id": 537956423,
                "name": "Boeing 737",
                "weight": 6.7340067340067344
            }, {
                "id": 537056432,
                "name": "Cathay Pacific",
                "weight": 6.7340067340067344
            }, {
                "id": 536911264,
                "name": "Ryanair",
                "weight": 6.3973063973063971
            }, {
                "id": 537062313,
                "name": "Germanwings",
                "weight": 5.7239057239057241
            }, {
                "id": 537071141,
                "name": "Alaska Airlines",
                "weight": 5.7239057239057241
            }, {
                "id": 537071315,
                "name": "Virgin America",
                "weight": 5.7239057239057241
            }, {
                "id": 537097626,
                "name": "AirAsia timeline",
                "weight": 5.05050505050505
            }, {
                "id": 537154434,
                "name": "Spirit Airlines",
                "weight": 5.05050505050505
            }, {
                "id": 537071215,
                "name": "Iberia Group",
                "weight": 4.7138047138047137
            }, {
                "id": 536956133,
                "name": "All Nippon Airways",
                "weight": 4.7138047138047137
            }, {
                "id": 536898704,
                "name": "KLM Royal Dutch Airlines",
                "weight": 4.0404040404040407
            }, {
                "id": 537071205,
                "name": "Frontier Airlines",
                "weight": 3.7037037037037037
            }, {
                "id": 537071322,
                "name": "WestJet Airlines",
                "weight": 3.7037037037037037
            }, {
                "id": 537071082,
                "name": "Air New Zealand",
                "weight": 3.3670033670033672
            }, {
                "id": 537071213,
                "name": "Hawaiian Airlines",
                "weight": 3.3670033670033672
            }, {
                "id": 537071224,
                "name": "Jet Airways",
                "weight": 3.3670033670033672
            }, {
                "id": 537084039,
                "name": "US Airways Group",
                "weight": 3.3670033670033672
            }, {
                "id": 537731020,
                "name": "Airbus A380",
                "weight": 3.0303030303030303
            }, {
                "id": 537636996,
                "name": "United Continental Holdings",
                "weight": 3.0303030303030303
            }, {
                "id": 536892470,
                "name": "Continental Airlines",
                "weight": 2.6936026936026938
            }, {
                "id": 537072843,
                "name": "Dallas-Fort Worth International Airport",
                "weight": 2.6936026936026938
            }, {
                "id": 536898871,
                "name": "Alitalia",
                "weight": 2.3569023569023568
            }, {
                "id": 538099153,
                "name": "International Airlines Group",
                "weight": 2.3569023569023568
            }, {
                "id": 537071008,
                "name": "Aer Lingus Group",
                "weight": 2.3569023569023568
            }, {
                "id": 538009650,
                "name": "Jeff Smisek",
                "weight": 2.3569023569023568
            }, {
                "id": 537084037,
                "name": "Air Berlin",
                "weight": 2.3569023569023568
            }, {
                "id": 536877882,
                "name": "Aeroflot",
                "weight": 2.0202020202020203
            }, {
                "id": 536932467,
                "name": "Asiana Airlines",
                "weight": 2.0202020202020203
            }, {
                "id": 536936749,
                "name": "Air China",
                "weight": 2.0202020202020203
            }, {
                "id": 537072868,
                "name": "McCarran International Airport",
                "weight": 1.6835016835016836
            }]
        }, {
            "id": 268487337,
            "name": "Transit",
            "weight": 25.214408233276156,
            "topics": [{
                "id": 537619035,
                "name": "Google Maps",
                "weight": 38.775510204081634
            }, {
                "id": 537158255,
                "name": "Amtrak",
                "weight": 34.693877551020407
            }, {
                "id": 537116706,
                "name": "United States Department of Transportation",
                "weight": 30.612244897959183
            }, {
                "id": 537074294,
                "name": "Massachusetts Bay Transportation Authority",
                "weight": 15.646258503401361
            }, {
                "id": 537211352,
                "name": "Kathleen Wynne",
                "weight": 11.564625850340136
            }, {
                "id": 537246389,
                "name": "Rosa Parks",
                "weight": 9.5238095238095237
            }, {
                "id": 537138063,
                "name": "Port Authority of New York and New Jersey",
                "weight": 7.4829931972789119
            }, {
                "id": 538064877,
                "name": "Green Line",
                "weight": 7.4829931972789119
            }, {
                "id": 537255208,
                "name": "Metropolitan Transportation Authority",
                "weight": 5.4421768707482991
            }, {
                "id": 537198445,
                "name": "John Tory",
                "weight": 5.4421768707482991
            }, {
                "id": 537735103,
                "name": "Bay Area Rapid Transit",
                "weight": 4.0816326530612246
            }, {
                "id": 537278971,
                "name": "CNG (biz)",
                "weight": 3.4013605442176869
            }, {
                "id": 537074399,
                "name": "SMRT Corporation",
                "weight": 2.7210884353741496
            }, {
                "id": 537074406,
                "name": "South Coast British Columbia Transportation Authority",
                "weight": 2.0408163265306123
            }, {
                "id": 537074447,
                "name": "Toronto Transit Commission",
                "weight": 2.0408163265306123
            }, {
                "id": 537074227,
                "name": "GO Transit",
                "weight": 2.0408163265306123
            }, {
                "id": 537074300,
                "name": "Metro Transit (Halifax)",
                "weight": 1.3605442176870748
            }, {
                "id": 537253157,
                "name": "Washington Metropolitan Area Transit Authority",
                "weight": 1.3605442176870748
            }, {
                "id": 538002402,
                "name": "Land Transport Authority",
                "weight": 1.3605442176870748
            }]
        }, {
            "id": 537074651,
            "name": "Federal Aviation Administration",
            "weight": 19.725557461406517
        }, {
            "id": 268489810,
            "name": "Railways",
            "weight": 18.524871355060036,
            "topics": [{
                "id": 537073334,
                "name": "Canadian Pacific Railway",
                "weight": 19.444444444444443
            }, {
                "id": 537129919,
                "name": "Canadian National Railway",
                "weight": 14.814814814814815
            }, {
                "id": 537147671,
                "name": "German Railway Corporation",
                "weight": 7.4074074074074074
            }, {
                "id": 536892324,
                "name": "Alstom",
                "weight": 6.4814814814814818
            }, {
                "id": 537152796,
                "name": "Production Units of the Indian Railways",
                "weight": 3.7037037037037037
            }, {
                "id": 537115445,
                "name": "SNCF (Société Nationale des Chemins de fer français)",
                "weight": 2.7777777777777777
            }, {
                "id": 537232889,
                "name": "Russian Railways",
                "weight": 1.8518518518518519
            }, {
                "id": 538281701,
                "name": "National Railway Museum",
                "weight": 1.8518518518518519
            }]
        }, {
            "id": 536892500,
            "name": "Delta Air Lines",
            "weight": 9.7770154373927962
        }, {
            "id": 537072855,
            "name": "John F. Kennedy International Airport",
            "weight": 8.9193825042881638
        }, {
            "id": 537072875,
            "name": "O'Hare International Airport",
            "weight": 7.7186963979416809
        }, {
            "id": 537116706,
            "name": "United States Department of Transportation",
            "weight": 7.7186963979416809
        }, {
            "id": 536892897,
            "name": "Southwest Airlines",
            "weight": 7.2041166380789026
        }, {
            "id": 537085269,
            "name": "Transportation Security Administration",
            "weight": 6.6895368782161233
        }, {
            "id": 538038975,
            "name": "Boeing 787",
            "weight": 5.3173241852487134
        }, {
            "id": 536921881,
            "name": "Air Canada",
            "weight": 5.1457975986277873
        }, {
            "id": 268489895,
            "name": "Water Transport",
            "weight": 4.2881646655231558
        }, {
            "id": 537073334,
            "name": "Canadian Pacific Railway",
            "weight": 3.6020583190394513
        }, {
            "id": 536899563,
            "name": "Air India",
            "weight": 3.4305317324185247
        }, {
            "id": 537071141,
            "name": "Alaska Airlines",
            "weight": 2.9159519725557463
        }, {
            "id": 537072858,
            "name": "LaGuardia Airport",
            "weight": 2.5728987993138936
        }, {
            "id": 537071224,
            "name": "Jet Airways",
            "weight": 1.7152658662092624
        }, {
            "id": 537072843,
            "name": "Dallas-Fort Worth International Airport",
            "weight": 1.3722126929674099
        }, {
            "id": 537255208,
            "name": "Metropolitan Transportation Authority",
            "weight": 1.3722126929674099
        }]
    }, {
        "id": 268446481,
        "name": "Retail",
        "weight": 6.8865880086684328,
        "topics": [{
            "id": 536892635,
            "name": "J. C. Penney",
            "weight": 40.55944055944056
        }, {
            "id": 268490718,
            "name": "E-commerce",
            "weight": 32.51748251748252,
            "topics": [{
                "id": 537104293,
                "name": "PayPal",
                "weight": 40.322580645161288
            }, {
                "id": 537142852,
                "name": "Alibaba Group",
                "weight": 33.333333333333336
            }, {
                "id": 537073117,
                "name": "Tencent Holdings",
                "weight": 25.268817204301076
            }, {
                "id": 538176814,
                "name": "Flipkart",
                "weight": 11.290322580645162
            }, {
                "id": 537599714,
                "name": "Shopify",
                "weight": 10.21505376344086
            }, {
                "id": 538123008,
                "name": "Snapdeal",
                "weight": 4.838709677419355
            }, {
                "id": 538335354,
                "name": "Snapdeal",
                "weight": 4.301075268817204
            }, {
                "id": 537084690,
                "name": "Rakuten",
                "weight": 4.301075268817204
            }, {
                "id": 537596275,
                "name": "Magento",
                "weight": 1.075268817204301
            }, {
                "id": 538127963,
                "name": "Myntra",
                "weight": 1.075268817204301
            }]
        }, {
            "id": 537130392,
            "name": "Chipotle Mexican Grill, Inc.",
            "weight": 25.524475524475523
        }, {
            "id": 536892992,
            "name": "Walmart",
            "weight": 20.104895104895103
        }, {
            "id": 536892904,
            "name": "Starbucks",
            "weight": 18.181818181818183
        }, {
            "id": 536913692,
            "name": "eBay",
            "weight": 15.034965034965035
        }, {
            "id": 537142852,
            "name": "Alibaba Group",
            "weight": 10.839160839160838
        }, {
            "id": 537140628,
            "name": "The IKEA International Group",
            "weight": 9.44055944055944
        }, {
            "id": 537073001,
            "name": "Macy's",
            "weight": 9.0909090909090917
        }, {
            "id": 536892634,
            "name": "Sainsbury's",
            "weight": 8.3916083916083917
        }, {
            "id": 537142824,
            "name": "Aldi",
            "weight": 7.1678321678321675
        }, {
            "id": 536892929,
            "name": "Target Corporation",
            "weight": 6.1188811188811192
        }, {
            "id": 536892611,
            "name": "The Home Depot",
            "weight": 5.9440559440559442
        }, {
            "id": 536892475,
            "name": "Costco",
            "weight": 5.9440559440559442
        }, {
            "id": 536892761,
            "name": "Nordstrom",
            "weight": 5.7692307692307692
        }, {
            "id": 537098155,
            "name": "ASDA Wal-Mart Supercentre",
            "weight": 5.06993006993007
        }, {
            "id": 537073090,
            "name": "Whole Foods Market",
            "weight": 4.72027972027972
        }, {
            "id": 537073091,
            "name": "Wm Morrison Supermarkets",
            "weight": 4.3706293706293708
        }, {
            "id": 537073257,
            "name": "Lowe's Companies",
            "weight": 4.1958041958041958
        }, {
            "id": 536892775,
            "name": "Office Depot",
            "weight": 3.8461538461538463
        }, {
            "id": 537073263,
            "name": "Sears Holdings",
            "weight": 3.8461538461538463
        }, {
            "id": 538176814,
            "name": "Flipkart",
            "weight": 3.6713286713286712
        }, {
            "id": 537113191,
            "name": "Myer City Centre",
            "weight": 3.1468531468531467
        }, {
            "id": 537135232,
            "name": "Lidl Stiftung & Co KG",
            "weight": 2.9720279720279721
        }, {
            "id": 537052538,
            "name": "GameStop",
            "weight": 2.9720279720279721
        }, {
            "id": 537106995,
            "name": "Waite, Rose and Taylor",
            "weight": 2.7972027972027971
        }, {
            "id": 537113407,
            "name": "National Retail Federation",
            "weight": 2.6223776223776225
        }, {
            "id": 536893007,
            "name": "Woolworths Limited",
            "weight": 2.4475524475524475
        }, {
            "id": 537072999,
            "name": "Kohl's",
            "weight": 2.4475524475524475
        }, {
            "id": 537123587,
            "name": "Neiman Marcus Last Call",
            "weight": 2.4475524475524475
        }, {
            "id": 537073245,
            "name": "Carphone Warehouse",
            "weight": 2.0979020979020979
        }, {
            "id": 536892666,
            "name": "Kroger",
            "weight": 1.7482517482517483
        }, {
            "id": 537128049,
            "name": "American Apparel",
            "weight": 1.7482517482517483
        }, {
            "id": 537155950,
            "name": "Urban Outfitters Inc.",
            "weight": 1.5734265734265733
        }, {
            "id": 538123008,
            "name": "Snapdeal",
            "weight": 1.5734265734265733
        }, {
            "id": 268486086,
            "name": "Fair Trade",
            "weight": 1.3986013986013985
        }, {
            "id": 536892662,
            "name": "Kmart",
            "weight": 1.3986013986013985
        }, {
            "id": 537124159,
            "name": "Pace Club Wholesale",
            "weight": 1.2237762237762237
        }, {
            "id": 537152974,
            "name": "Radio Shack Corporation",
            "weight": 1.048951048951049
        }]
    }, {
        "id": 268447465,
        "name": "Investing",
        "weight": 6.1281001685528533,
        "topics": [{
            "id": 268490079,
            "name": "Investment Banking",
            "weight": 35.756385068762278,
            "topics": [{
                "id": 536887934,
                "name": "Goldman Sachs",
                "weight": 51.64835164835165
            }, {
                "id": 536892386,
                "name": "Barclays PLC",
                "weight": 41.208791208791212
            }, {
                "id": 536892448,
                "name": "Citigroup",
                "weight": 40.109890109890109
            }, {
                "id": 536892636,
                "name": "JPMorgan Chase",
                "weight": 37.362637362637365
            }, {
                "id": 536892379,
                "name": "Bank of America Corporation",
                "weight": 36.263736263736263
            }, {
                "id": 536892733,
                "name": "Morgan Stanley",
                "weight": 32.967032967032964
            }, {
                "id": 536892481,
                "name": "Credit Suisse",
                "weight": 26.373626373626372
            }, {
                "id": 536892331,
                "name": "American Express",
                "weight": 24.725274725274726
            }, {
                "id": 537084212,
                "name": "UBS AG (diversified)",
                "weight": 21.428571428571427
            }, {
                "id": 537071699,
                "name": "Piper Jaffray",
                "weight": 9.89010989010989
            }]
        }, {
            "id": 268447462,
            "name": "Venture Capital",
            "weight": 30.058939096267192,
            "topics": [{
                "id": 537682930,
                "name": "Marc Andreessen",
                "weight": 24.836601307189543
            }, {
                "id": 537069753,
                "name": "Peter Thiel",
                "weight": 18.954248366013072
            }, {
                "id": 537682929,
                "name": "Andreessen Horowitz",
                "weight": 13.725490196078431
            }, {
                "id": 537112259,
                "name": "Kleiner, Perkins, Caufield and Byers",
                "weight": 10.457516339869281
            }, {
                "id": 537153779,
                "name": "Sequoia Capital",
                "weight": 9.15032679738562
            }, {
                "id": 537158200,
                "name": "Draper Fisher Jurveston",
                "weight": 8.49673202614379
            }, {
                "id": 537070005,
                "name": "Vinod Khosla",
                "weight": 8.49673202614379
            }, {
                "id": 538317235,
                "name": "Ellen Pao",
                "weight": 6.5359477124183005
            }, {
                "id": 537118607,
                "name": "Bessemer Venture Partners",
                "weight": 5.2287581699346406
            }, {
                "id": 537133024,
                "name": "Google Ventures",
                "weight": 5.2287581699346406
            }, {
                "id": 537778390,
                "name": "Timothy C. Draper",
                "weight": 3.2679738562091503
            }, {
                "id": 538024427,
                "name": "Bill Gurley",
                "weight": 1.9607843137254901
            }]
        }, {
            "id": 268486289,
            "name": "Hedge Fund",
            "weight": 30.058939096267192,
            "topics": [{
                "id": 536887934,
                "name": "Goldman Sachs",
                "weight": 61.437908496732028
            }, {
                "id": 536892448,
                "name": "Citigroup",
                "weight": 47.712418300653596
            }, {
                "id": 537069113,
                "name": "Carl Icahn",
                "weight": 35.947712418300654
            }, {
                "id": 536892481,
                "name": "Credit Suisse",
                "weight": 31.372549019607842
            }, {
                "id": 538222054,
                "name": "Retrophin",
                "weight": 25.490196078431371
            }, {
                "id": 536891018,
                "name": "George Soros",
                "weight": 15.032679738562091
            }, {
                "id": 538123818,
                "name": "KaloBios Pharmaceuticals",
                "weight": 14.379084967320262
            }, {
                "id": 537071516,
                "name": "Blackstone Group",
                "weight": 14.379084967320262
            }, {
                "id": 536922606,
                "name": "The Carlyle Group",
                "weight": 13.071895424836601
            }, {
                "id": 537649692,
                "name": "William Ackman",
                "weight": 9.8039215686274517
            }, {
                "id": 537069189,
                "name": "David Tepper",
                "weight": 7.8431372549019605
            }, {
                "id": 537227349,
                "name": "Daniel S. Loeb",
                "weight": 5.882352941176471
            }, {
                "id": 538110625,
                "name": "Elliott Management Corporation",
                "weight": 5.2287581699346406
            }, {
                "id": 537069476,
                "name": "John Paulson",
                "weight": 4.57516339869281
            }, {
                "id": 537153496,
                "name": "SAC Capital Advisors",
                "weight": 3.2679738562091503
            }, {
                "id": 537069788,
                "name": "Ray Dalio",
                "weight": 3.2679738562091503
            }, {
                "id": 537150245,
                "name": "Man Group",
                "weight": 2.6143790849673203
            }, {
                "id": 537144500,
                "name": "Bridgewater Associates",
                "weight": 1.9607843137254901
            }, {
                "id": 538198766,
                "name": "Tiger Global Management",
                "weight": 1.9607843137254901
            }, {
                "id": 538199625,
                "name": "Greenlight Capital",
                "weight": 1.3071895424836601
            }]
        }, {
            "id": 268486941,
            "name": "Private Equity",
            "weight": 19.449901768172889,
            "topics": [{
                "id": 537071516,
                "name": "Blackstone Group",
                "weight": 22.222222222222221
            }, {
                "id": 537128425,
                "name": "Apollo Investment Corporation",
                "weight": 21.212121212121211
            }, {
                "id": 536922606,
                "name": "The Carlyle Group",
                "weight": 20.2020202020202
            }, {
                "id": 537069185,
                "name": "David Rubenstein",
                "weight": 9.0909090909090917
            }, {
                "id": 537101133,
                "name": "Golder, Thoma & Cressey",
                "weight": 8.0808080808080813
            }, {
                "id": 537158190,
                "name": "Cerberus Capital Management LP",
                "weight": 7.0707070707070709
            }, {
                "id": 536973870,
                "name": "Temasek Holdings",
                "weight": 5.05050505050505
            }, {
                "id": 537109387,
                "name": "Cinven",
                "weight": 5.05050505050505
            }, {
                "id": 537053083,
                "name": "TPG Capital",
                "weight": 4.0404040404040407
            }, {
                "id": 536926499,
                "name": "Warburg Pincus",
                "weight": 4.0404040404040407
            }, {
                "id": 537077212,
                "name": "Bain Capital LLC",
                "weight": 4.0404040404040407
            }, {
                "id": 537154724,
                "name": "SV Investment Partners",
                "weight": 4.0404040404040407
            }, {
                "id": 537072142,
                "name": "KKR Financial",
                "weight": 1.0101010101010102
            }, {
                "id": 537113162,
                "name": "Multinational Management Group",
                "weight": 1.0101010101010102
            }]
        }, {
            "id": 536887934,
            "name": "Goldman Sachs",
            "weight": 18.467583497053045
        }, {
            "id": 537070014,
            "name": "Warren Buffett",
            "weight": 11.394891944990176
        }, {
            "id": 538161004,
            "name": "REIT",
            "weight": 6.0903732809430258
        }, {
            "id": 536922606,
            "name": "The Carlyle Group",
            "weight": 3.9292730844793713
        }]
    }, {
        "id": 268490573,
        "name": "Business Trends",
        "weight": 5.7548759932578859
    }, {
        "id": 268486031,
        "name": "Electric Vehicles",
        "weight": 5.6104021189501569,
        "topics": [{
            "id": 536888945,
            "name": "Ford Motor Company",
            "weight": 82.832618025751074
        }, {
            "id": 536888943,
            "name": "Toyota",
            "weight": 27.896995708154506
        }, {
            "id": 538578358,
            "name": "Tesla Motors",
            "weight": 23.175965665236053
        }, {
            "id": 537119094,
            "name": "Tesla Motors",
            "weight": 15.665236051502147
        }, {
            "id": 537725406,
            "name": "Tesla Model S",
            "weight": 13.733905579399142
        }, {
            "id": 537639976,
            "name": "Chevrolet Volt",
            "weight": 6.6523605150214591
        }, {
            "id": 538020544,
            "name": "Electric Car",
            "weight": 2.5751072961373391
        }]
    }, {
        "id": 268489879,
        "name": "World Finances",
        "weight": 5.0204671321935948,
        "topics": [{
            "id": 268486211,
            "name": "Globalization",
            "weight": 76.2589928057554,
            "topics": [{
                "id": 537074860,
                "name": "World Economic Forum",
                "weight": 82.704402515723274
            }, {
                "id": 537074517,
                "name": "International Monetary Fund",
                "weight": 27.044025157232703
            }, {
                "id": 537074755,
                "name": "World Trade Organization",
                "weight": 10.691823899371069
            }]
        }, {
            "id": 268446469,
            "name": "Financial Crisis",
            "weight": 33.812949640287769,
            "topics": [{
                "id": 536887934,
                "name": "Goldman Sachs",
                "weight": 66.666666666666671
            }, {
                "id": 536892448,
                "name": "Citigroup",
                "weight": 51.773049645390074
            }, {
                "id": 536892307,
                "name": "American International Group",
                "weight": 17.730496453900709
            }, {
                "id": 537655264,
                "name": "Mark Carney",
                "weight": 16.312056737588652
            }, {
                "id": 537072236,
                "name": "Moody's",
                "weight": 15.602836879432624
            }, {
                "id": 537242459,
                "name": "Ben Bernanke",
                "weight": 7.0921985815602833
            }]
        }, {
            "id": 268446470,
            "name": "Financial Regulation",
            "weight": 29.016786570743406
        }, {
            "id": 268485932,
            "name": "Debt Relief",
            "weight": 7.434052757793765
        }]
    }, {
        "id": 536892344,
        "name": "Apple Inc.",
        "weight": 4.53888755116783
    }, {
        "id": 268446471,
        "name": "Fuel",
        "weight": 4.4064531663857451,
        "topics": [{
            "id": 268486884,
            "name": "Petroleum",
            "weight": 71.311475409836063,
            "topics": [{
                "id": 537190239,
                "name": "Muhammadu Buhari",
                "weight": 48.659003831417621
            }, {
                "id": 537077305,
                "name": "Organization of Petroleum Exporting Countries",
                "weight": 34.099616858237546
            }, {
                "id": 536889179,
                "name": "BP",
                "weight": 29.885057471264368
            }, {
                "id": 536891403,
                "name": "Exxon Mobil",
                "weight": 23.754789272030653
            }, {
                "id": 536892401,
                "name": "BHP Billiton Ltd.",
                "weight": 11.494252873563218
            }, {
                "id": 537112241,
                "name": "Kinder Morgan Power Company",
                "weight": 9.96168582375479
            }, {
                "id": 536892466,
                "name": "ConocoPhillips",
                "weight": 6.1302681992337167
            }, {
                "id": 537073013,
                "name": "Nigerian National Petroleum Corporation",
                "weight": 4.9808429118773949
            }, {
                "id": 536877978,
                "name": "Rosneft",
                "weight": 4.21455938697318
            }, {
                "id": 536892882,
                "name": "Sinopec",
                "weight": 3.8314176245210727
            }, {
                "id": 536891402,
                "name": "Eni",
                "weight": 3.4482758620689653
            }, {
                "id": 536901854,
                "name": "Saudi Aramco",
                "weight": 3.0651340996168583
            }, {
                "id": 537084825,
                "name": "Energy Information Administration",
                "weight": 3.0651340996168583
            }, {
                "id": 537070150,
                "name": "GAIL (India)",
                "weight": 1.9157088122605364
            }, {
                "id": 537073005,
                "name": "Anadarko Petroleum",
                "weight": 1.5325670498084292
            }, {
                "id": 537073017,
                "name": "PetroChina",
                "weight": 1.5325670498084292
            }, {
                "id": 537070334,
                "name": "Woodside Petroleum",
                "weight": 1.1494252873563218
            }, {
                "id": 536891397,
                "name": "China National Petroleum Corporation",
                "weight": 1.1494252873563218
            }]
        }, {
            "id": 268485671,
            "name": "Biofuel",
            "weight": 30.601092896174862,
            "topics": [{
                "id": 536889162,
                "name": "Boeing",
                "weight": 99.107142857142861
            }, {
                "id": 537073992,
                "name": "Abengoa",
                "weight": 5.3571428571428568
            }]
        }, {
            "id": 536889179,
            "name": "BP",
            "weight": 21.311475409836067
        }, {
            "id": 536891403,
            "name": "Exxon Mobil",
            "weight": 16.939890710382514
        }, {
            "id": 536891422,
            "name": "Royal Dutch Shell",
            "weight": 13.114754098360656
        }, {
            "id": 537074515,
            "name": "International Energy Agency",
            "weight": 12.841530054644808
        }, {
            "id": 538124722,
            "name": "GasBuddy",
            "weight": 4.3715846994535523
        }, {
            "id": 537145254,
            "name": "Chevron Eurasia, Europe and Middle East Exploration & Production",
            "weight": 3.278688524590164
        }, {
            "id": 537278971,
            "name": "CNG (biz)",
            "weight": 1.3661202185792349
        }, {
            "id": 537070150,
            "name": "GAIL (India)",
            "weight": 1.3661202185792349
        }]
    }, {
        "id": 536899060,
        "name": "Google",
        "weight": 4.21382133397544
    }, {
        "id": 268446483,
        "name": "Small Business",
        "weight": 3.9609920539369132,
        "topics": [{
            "id": 536892992,
            "name": "Walmart",
            "weight": 34.954407294832826
        }, {
            "id": 536921239,
            "name": "Cisco Systems, Inc.",
            "weight": 21.88449848024316
        }, {
            "id": 537077209,
            "name": "Small Business Administration",
            "weight": 3.0395136778115504
        }, {
            "id": 537120624,
            "name": "Federation of Small Businesses",
            "weight": 1.8237082066869301
        }, {
            "id": 537616494,
            "name": "QuickBooks",
            "weight": 1.21580547112462
        }]
    }, {
        "id": 268490580,
        "name": "Supply Chain Management",
        "weight": 3.6840837948470986
    }, {
        "id": 268446458,
        "name": "Automotive Industry",
        "weight": 3.6238863472188778,
        "topics": [{
            "id": 536889743,
            "name": "General Motors",
            "weight": 38.538205980066444
        }, {
            "id": 536938996,
            "name": "Tata Motors",
            "weight": 9.30232558139535
        }]
    }, {
        "id": 268487131,
        "name": "Silicon Valley",
        "weight": 3.4312545148085722,
        "topics": [{
            "id": 537154550,
            "name": "Steve Jobs",
            "weight": 57.192982456140349
        }, {
            "id": 537069624,
            "name": "Mark Zuckerberg",
            "weight": 38.245614035087719
        }, {
            "id": 538317235,
            "name": "Ellen Pao",
            "weight": 3.5087719298245612
        }, {
            "id": 537695336,
            "name": "Yuri Milner",
            "weight": 2.807017543859649
        }]
    }, {
        "id": 268447459,
        "name": "Startups",
        "weight": 3.3108596195521312,
        "topics": [{
            "id": 537968684,
            "name": "Dave McClure",
            "weight": 5.8181818181818183
        }, {
            "id": 538320915,
            "name": "Rocket Internet",
            "weight": 5.0909090909090908
        }, {
            "id": 538174517,
            "name": "AngelList",
            "weight": 2.5454545454545454
        }]
    }, {
        "id": 268446475,
        "name": "Mining",
        "weight": 3.0339513604623165,
        "topics": [{
            "id": 268446480,
            "name": "Precious Metals",
            "weight": 50.0
        }, {
            "id": 268489881,
            "name": "Oil and Gas Mining",
            "weight": 36.904761904761905,
            "topics": [{
                "id": 268490711,
                "name": "Fracking",
                "weight": 47.311827956989248
            }, {
                "id": 268486806,
                "name": "Oil Sands",
                "weight": 35.483870967741936,
                "topics": [{
                    "id": 537070296,
                    "name": "Suncor Energy",
                    "weight": 27.272727272727273
                }, {
                    "id": 537063201,
                    "name": "Enbridge",
                    "weight": 21.212121212121211
                }, {
                    "id": 537105968,
                    "name": "Syncrude Canada, Ltd.",
                    "weight": 18.181818181818183
                }, {
                    "id": 537119022,
                    "name": "Canadian Association of Petroleum Producers",
                    "weight": 12.121212121212121
                }, {
                    "id": 538289144,
                    "name": "Cenovus Energy",
                    "weight": 12.121212121212121
                }, {
                    "id": 537070173,
                    "name": "Husky Energy",
                    "weight": 9.0909090909090917
                }, {
                    "id": 537070207,
                    "name": "Nexen",
                    "weight": 6.0606060606060606
                }, {
                    "id": 538184804,
                    "name": "Cenovus Energy",
                    "weight": 3.0303030303030303
                }]
            }]
        }, {
            "id": 268487370,
            "name": "Uranium",
            "weight": 36.111111111111114,
            "topics": [{
                "id": 536892401,
                "name": "BHP Billiton Ltd.",
                "weight": 32.967032967032964
            }, {
                "id": 537145491,
                "name": "Clinton Foundation",
                "weight": 27.472527472527471
            }, {
                "id": 536940352,
                "name": "Rio Tinto Group",
                "weight": 24.175824175824175
            }, {
                "id": 537074078,
                "name": "Cameco",
                "weight": 4.395604395604396
            }, {
                "id": 537156606,
                "name": "World Nuclear Association",
                "weight": 1.098901098901099
            }, {
                "id": 536938742,
                "name": "Areva",
                "weight": 1.098901098901099
            }, {
                "id": 537077316,
                "name": "Uranium One Inc.",
                "weight": 1.098901098901099
            }]
        }, {
            "id": 536891403,
            "name": "Exxon Mobil",
            "weight": 24.603174603174605
        }, {
            "id": 536892401,
            "name": "BHP Billiton Ltd.",
            "weight": 11.904761904761905
        }, {
            "id": 536940352,
            "name": "Rio Tinto Group",
            "weight": 8.73015873015873
        }, {
            "id": 537074013,
            "name": "Freeport-McMoRan",
            "weight": 7.9365079365079367
        }, {
            "id": 537126679,
            "name": "United States Bureau of Land Management",
            "weight": 6.746031746031746
        }, {
            "id": 537077256,
            "name": "Glencore International AG",
            "weight": 4.3650793650793647
        }, {
            "id": 536933922,
            "name": "Barrick Gold",
            "weight": 3.9682539682539684
        }, {
            "id": 537069310,
            "name": "Gina Rinehart",
            "weight": 3.5714285714285716
        }, {
            "id": 537074024,
            "name": "Newcrest Mining",
            "weight": 2.3809523809523809
        }, {
            "id": 536920561,
            "name": "Newmont Mining Corporation",
            "weight": 1.9841269841269842
        }, {
            "id": 537062154,
            "name": "Goldcorp",
            "weight": 1.5873015873015872
        }, {
            "id": 537074038,
            "name": "Teck Cominco",
            "weight": 1.5873015873015872
        }, {
            "id": 537074078,
            "name": "Cameco",
            "weight": 1.5873015873015872
        }]
    }, {
        "id": 268490481,
        "name": "Personal Finance",
        "weight": 2.877437996628943,
        "topics": [{
            "id": 538044454,
            "name": "Kiplinger",
            "weight": 3.3472803347280333
        }]
    }, {
        "id": 268447460,
        "name": "Agriculture",
        "weight": 2.8413195280520105,
        "topics": [{
            "id": 268490591,
            "name": "Livestock Industry",
            "weight": 45.33898305084746
        }, {
            "id": 536938710,
            "name": "Monsanto",
            "weight": 19.915254237288135
        }, {
            "id": 536939351,
            "name": "Nestlé",
            "weight": 12.711864406779661
        }, {
            "id": 537063273,
            "name": "Syngenta",
            "weight": 11.864406779661017
        }, {
            "id": 537072420,
            "name": "Deere & Company",
            "weight": 8.898305084745763
        }, {
            "id": 537207396,
            "name": "Barnaby Joyce",
            "weight": 7.6271186440677967
        }, {
            "id": 537679446,
            "name": "House Committee on Agriculture",
            "weight": 4.2372881355932206
        }, {
            "id": 537074664,
            "name": "Tom Vilsack",
            "weight": 3.8135593220338984
        }, {
            "id": 537110699,
            "name": "Food and Agriculture Organization",
            "weight": 3.8135593220338984
        }, {
            "id": 537127410,
            "name": "4-H",
            "weight": 3.3898305084745761
        }, {
            "id": 537118005,
            "name": "Animal and Plant Health Inspection Service",
            "weight": 1.6949152542372881
        }, {
            "id": 537607997,
            "name": "Meat",
            "weight": 1.271186440677966
        }]
    }, {
        "id": 536930557,
        "name": "Samsung Electronics",
        "weight": 2.4199373946544664
    }, {
        "id": 268489809,
        "name": "Metal Industry",
        "weight": 2.3958584156031786,
        "topics": [{
            "id": 268487208,
            "name": "Stainless Steel",
            "weight": 99.497487437185924,
            "topics": [{
                "id": 538279808,
                "name": "Apple Watch",
                "weight": 98.98989898989899
            }, {
                "id": 537724326,
                "name": "DeLorean DMC-12",
                "weight": 1.0101010101010102
            }]
        }]
    }, {
        "id": 268446479,
        "name": "Pharmaceutical Industry",
        "weight": 2.3115819889236695
    }, {
        "id": 537084692,
        "name": "Federal Reserve System",
        "weight": 2.0346737298338549
    }, {
        "id": 268489947,
        "name": "Consulting",
        "weight": 2.010594750782567,
        "topics": [{
            "id": 536929918,
            "name": "IBM",
            "weight": 65.868263473053887
        }, {
            "id": 537084853,
            "name": "PricewaterhouseCoopers",
            "weight": 14.970059880239521
        }, {
            "id": 536946508,
            "name": "Infosys",
            "weight": 13.77245508982036
        }, {
            "id": 537084860,
            "name": "Deloitte",
            "weight": 13.77245508982036
        }, {
            "id": 536892293,
            "name": "Accenture",
            "weight": 11.377245508982035
        }, {
            "id": 537723035,
            "name": "Huma Abedin",
            "weight": 7.7844311377245505
        }, {
            "id": 537071657,
            "name": "KPMG Corporate Finance",
            "weight": 7.7844311377245505
        }, {
            "id": 537177357,
            "name": "McKinsey & Company",
            "weight": 7.18562874251497
        }, {
            "id": 537150203,
            "name": "Mahindra British Telecom",
            "weight": 6.5868263473053892
        }, {
            "id": 536922049,
            "name": "Boston Consulting Group",
            "weight": 4.1916167664670656
        }, {
            "id": 536946509,
            "name": "Wipro",
            "weight": 2.3952095808383231
        }, {
            "id": 538134387,
            "name": "Navigant",
            "weight": 2.3952095808383231
        }, {
            "id": 536889173,
            "name": "Ernst & Young",
            "weight": 1.7964071856287425
        }, {
            "id": 536945280,
            "name": "Capgemini",
            "weight": 1.7964071856287425
        }]
    }, {
        "id": 537225077,
        "name": "Timothy D. Cook",
        "weight": 1.8059234288466168
    }, {
        "id": 536888943,
        "name": "Toyota",
        "weight": 1.5651336383337346
    }, {
        "id": 268489783,
        "name": "Business Analytics",
        "weight": 1.5290151697568024
    }, {
        "id": 537072045,
        "name": "New York Stock Exchange",
        "weight": 1.5290151697568024
    }, {
        "id": 536889743,
        "name": "General Motors",
        "weight": 1.3965807849747172
    }, {
        "id": 268446464,
        "name": "Chemicals",
        "weight": 1.384541295449073,
        "topics": [{
            "id": 536938710,
            "name": "Monsanto",
            "weight": 40.869565217391305
        }, {
            "id": 536892516,
            "name": "Dow Chemical Company",
            "weight": 33.043478260869563
        }, {
            "id": 536892769,
            "name": "Novartis AG",
            "weight": 29.565217391304348
        }, {
            "id": 536892525,
            "name": "Eastman Chemical Company",
            "weight": 11.304347826086957
        }, {
            "id": 536892612,
            "name": "Honeywell",
            "weight": 10.434782608695652
        }, {
            "id": 536892388,
            "name": "BASF",
            "weight": 6.0869565217391308
        }, {
            "id": 537100398,
            "name": "Environmental Working Group",
            "weight": 4.3478260869565215
        }, {
            "id": 537237311,
            "name": "Andrew N. Liveris",
            "weight": 4.3478260869565215
        }, {
            "id": 537102781,
            "name": "Lyondell",
            "weight": 3.4782608695652173
        }, {
            "id": 536892310,
            "name": "Air Products & Chemicals",
            "weight": 2.6086956521739131
        }, {
            "id": 537073904,
            "name": "Ashland Inc.",
            "weight": 2.6086956521739131
        }, {
            "id": 537073073,
            "name": "Merck KGaA",
            "weight": 1.7391304347826086
        }, {
            "id": 537073906,
            "name": "Celanese",
            "weight": 1.7391304347826086
        }]
    }, {
        "id": 536892992,
        "name": "Walmart",
        "weight": 1.384541295449073
    }, {
        "id": 536889162,
        "name": "Boeing",
        "weight": 1.3363833373464966
    }, {
        "id": 268489898,
        "name": "Construction",
        "weight": 1.3363833373464966,
        "topics": [{
            "id": 537140628,
            "name": "The IKEA International Group",
            "weight": 48.648648648648646
        }, {
            "id": 536892985,
            "name": "Vinci",
            "weight": 24.324324324324323
        }, {
            "id": 537072420,
            "name": "Deere & Company",
            "weight": 18.918918918918919
        }, {
            "id": 537133223,
            "name": "Habitat for Humanity International",
            "weight": 13.513513513513514
        }, {
            "id": 536891402,
            "name": "Eni",
            "weight": 8.1081081081081088
        }, {
            "id": 537104264,
            "name": "Parsons Brinckerhoff",
            "weight": 2.7027027027027026
        }, {
            "id": 537145791,
            "name": "Construction, Forestry, Mining and Energy Union",
            "weight": 1.8018018018018018
        }]
    }, {
        "id": 268446461,
        "name": "Bankruptcies",
        "weight": 1.3243438478208525
    }, {
        "id": 536929918,
        "name": "IBM",
        "weight": 1.3243438478208525
    }, {
        "id": 537074749,
        "name": "U.S. Environmental Protection Agency",
        "weight": 1.3002648687695642
    }, {
        "id": 536892982,
        "name": "Verizon Communications",
        "weight": 1.2280279316156995
    }, {
        "id": 537072920,
        "name": "LinkedIn",
        "weight": 1.1919094630387672
    }, {
        "id": 536926433,
        "name": "Intel",
        "weight": 1.1919094630387672
    }, {
        "id": 536887934,
        "name": "Goldman Sachs",
        "weight": 1.1317120154105467
    }, {
        "id": 536929917,
        "name": "Hewlett-Packard",
        "weight": 1.1196725258849025
    }, {
        "id": 536916874,
        "name": "Airbus",
        "weight": 1.0715145677823261
    }, {
        "id": 537077305,
        "name": "Organization of Petroleum Exporting Countries",
        "weight": 1.0715145677823261
    }, {
        "id": 536892360,
        "name": "AT&T",
        "weight": 1.0474355887310378
    }, {
        "id": 536913692,
        "name": "eBay",
        "weight": 1.0353960992053937
    }]
}, {
    "id": 268490687,
    "name": "Politics",
    "weight": 6.6877607958288934,
    "color": "#B3515E",
    "topics": [{
        "id": 268436593,
        "name": "World Politics",
        "weight": 74.5195816103138,
        "topics": [{
            "id": 268489867,
            "name": "Warfare and Conflicts",
            "weight": 77.982699526685167,
            "topics": [{
                "id": 268487426,
                "name": "War",
                "weight": 91.272498953537038,
                "topics": [{
                    "id": 536898834,
                    "name": "NBC",
                    "weight": 87.067186425131851
                }, {
                    "id": 537233008,
                    "name": "Royal Air Force",
                    "weight": 7.2231139646869984
                }, {
                    "id": 538278257,
                    "name": "Islamic State in Iraq and the Levant",
                    "weight": 5.1822976381563866
                }, {
                    "id": 536889302,
                    "name": "United Nations",
                    "weight": 3.4854391194680119
                }, {
                    "id": 536883339,
                    "name": "Vladimir Putin",
                    "weight": 3.2332033937170372
                }, {
                    "id": 537074550,
                    "name": "John Kerry",
                    "weight": 3.0497592295345104
                }, {
                    "id": 536891982,
                    "name": "George W. Bush",
                    "weight": 2.7058014216922723
                }, {
                    "id": 537265246,
                    "name": "Bashar al-Assad",
                    "weight": 2.2930520522815869
                }, {
                    "id": 536889339,
                    "name": "North Atlantic Treaty Organization (NATO)",
                    "weight": 2.2701215317587708
                }, {
                    "id": 537283844,
                    "name": "United States Marine Corps",
                    "weight": 2.1096078880990596
                }, {
                    "id": 537077479,
                    "name": "Al-Qaeda",
                    "weight": 2.1096078880990596
                }, {
                    "id": 537084986,
                    "name": "UN Security Council",
                    "weight": 1.8803026828709011
                }, {
                    "id": 537190481,
                    "name": "Xi Jinping",
                    "weight": 1.7885806007796377
                }, {
                    "id": 537070495,
                    "name": "Elizabeth II",
                    "weight": 1.6280669571199267
                }, {
                    "id": 537075268,
                    "name": "Defence Department",
                    "weight": 1.5592753955514791
                }, {
                    "id": 537177522,
                    "name": "Ban Ki-moon",
                    "weight": 1.5363448750286632
                }, {
                    "id": 536933926,
                    "name": "Hezbollah",
                    "weight": 1.5363448750286632
                }, {
                    "id": 538011497,
                    "name": "Shinzō Abe",
                    "weight": 1.4675533134602154
                }, {
                    "id": 537075021,
                    "name": "John McCain",
                    "weight": 1.2841091492776886
                }, {
                    "id": 537397819,
                    "name": "Abraham Lincoln",
                    "weight": 1.215317587709241
                }, {
                    "id": 537323972,
                    "name": "Adolf Hitler",
                    "weight": 1.1465260261407935
                }, {
                    "id": 537730368,
                    "name": "Bowe Bergdahl",
                    "weight": 1.1465260261407935
                }, {
                    "id": 538038558,
                    "name": "Iron Man",
                    "weight": 1.1006649850951618
                }, {
                    "id": 538053663,
                    "name": "Churchill",
                    "weight": 1.031873423526714
                }]
            }, {
                "id": 268462457,
                "name": "Military",
                "weight": 19.171201339472582,
                "topics": [{
                    "id": 268454461,
                    "name": "Defense",
                    "weight": 72.161572052401752,
                    "topics": [{
                        "id": 537233008,
                        "name": "Royal Air Force",
                        "weight": 47.655068078668684
                    }, {
                        "id": 538278257,
                        "name": "Islamic State in Iraq and the Levant",
                        "weight": 34.190620272314675
                    }, {
                        "id": 536883339,
                        "name": "Vladimir Putin",
                        "weight": 21.331316187594553
                    }, {
                        "id": 537746875,
                        "name": "Boko Haram",
                        "weight": 17.549167927382754
                    }, {
                        "id": 536889162,
                        "name": "Boeing",
                        "weight": 16.792738275340394
                    }, {
                        "id": 536889339,
                        "name": "North Atlantic Treaty Organization (NATO)",
                        "weight": 14.97730711043873
                    }, {
                        "id": 537283844,
                        "name": "United States Marine Corps",
                        "weight": 13.918305597579424
                    }, {
                        "id": 537077479,
                        "name": "Al-Qaeda",
                        "weight": 13.918305597579424
                    }, {
                        "id": 536916874,
                        "name": "Airbus",
                        "weight": 13.464447806354009
                    }, {
                        "id": 537075268,
                        "name": "Defence Department",
                        "weight": 10.287443267776096
                    }, {
                        "id": 536892687,
                        "name": "Lockheed Martin",
                        "weight": 8.7745839636913772
                    }, {
                        "id": 537075021,
                        "name": "John McCain",
                        "weight": 8.472012102874432
                    }, {
                        "id": 537193488,
                        "name": "Ashton Carter",
                        "weight": 7.5642965204236008
                    }, {
                        "id": 538167877,
                        "name": "Iraqi Army",
                        "weight": 7.2617246596066565
                    }, {
                        "id": 537707586,
                        "name": "United States Senate Committee on Armed Services",
                        "weight": 6.5052950075642961
                    }, {
                        "id": 537619382,
                        "name": "F-35 Lightning II",
                        "weight": 6.3540090771558244
                    }, {
                        "id": 538254271,
                        "name": "Nigerian Army",
                        "weight": 4.53857791225416
                    }, {
                        "id": 538233771,
                        "name": "Syrian Armed Forces",
                        "weight": 3.6308623298033282
                    }, {
                        "id": 538214836,
                        "name": "Ministry of Defence",
                        "weight": 3.4795763993948561
                    }, {
                        "id": 536892766,
                        "name": "Northrop Grumman",
                        "weight": 3.3282904689863844
                    }, {
                        "id": 538080820,
                        "name": "Indian Air Force",
                        "weight": 3.02571860816944
                    }, {
                        "id": 537650576,
                        "name": "Israel Defense Forces",
                        "weight": 2.8744326777609683
                    }, {
                        "id": 538248885,
                        "name": "Ministry of Defence",
                        "weight": 2.571860816944024
                    }, {
                        "id": 537241795,
                        "name": "Donald Rumsfeld",
                        "weight": 2.571860816944024
                    }, {
                        "id": 537191350,
                        "name": "Sergei Shoigu",
                        "weight": 2.118003025718608
                    }, {
                        "id": 538217080,
                        "name": "Moshe Ya'alon",
                        "weight": 2.118003025718608
                    }, {
                        "id": 537114260,
                        "name": "People's Liberation Army",
                        "weight": 2.118003025718608
                    }, {
                        "id": 536892373,
                        "name": "BAE Systems",
                        "weight": 1.8154311649016641
                    }, {
                        "id": 536892835,
                        "name": "Raytheon",
                        "weight": 1.8154311649016641
                    }]
                }, {
                    "id": 537233008,
                    "name": "Royal Air Force",
                    "weight": 34.388646288209607
                }, {
                    "id": 538278257,
                    "name": "Islamic State in Iraq and the Levant",
                    "weight": 24.672489082969431
                }, {
                    "id": 537070879,
                    "name": "Central Intelligence Agency",
                    "weight": 16.921397379912662
                }, {
                    "id": 536883339,
                    "name": "Vladimir Putin",
                    "weight": 15.393013100436681
                }, {
                    "id": 537074550,
                    "name": "John Kerry",
                    "weight": 14.519650655021834
                }, {
                    "id": 537190239,
                    "name": "Muhammadu Buhari",
                    "weight": 13.864628820960698
                }, {
                    "id": 537746875,
                    "name": "Boko Haram",
                    "weight": 12.663755458515285
                }, {
                    "id": 537265246,
                    "name": "Bashar al-Assad",
                    "weight": 10.91703056768559
                }, {
                    "id": 536889339,
                    "name": "North Atlantic Treaty Organization (NATO)",
                    "weight": 10.807860262008735
                }, {
                    "id": 536898981,
                    "name": "Taliban",
                    "weight": 10.698689956331878
                }, {
                    "id": 537283844,
                    "name": "United States Marine Corps",
                    "weight": 10.043668122270743
                }, {
                    "id": 537077479,
                    "name": "Al-Qaeda",
                    "weight": 10.043668122270743
                }, {
                    "id": 536933926,
                    "name": "Hezbollah",
                    "weight": 7.3144104803493448
                }, {
                    "id": 538011497,
                    "name": "Shinzō Abe",
                    "weight": 6.9868995633187776
                }, {
                    "id": 536892687,
                    "name": "Lockheed Martin",
                    "weight": 6.3318777292576423
                }, {
                    "id": 537075021,
                    "name": "John McCain",
                    "weight": 6.11353711790393
                }, {
                    "id": 537075012,
                    "name": "Goodluck Jonathan",
                    "weight": 5.7860262008733621
                }, {
                    "id": 537193488,
                    "name": "Ashton Carter",
                    "weight": 5.4585152838427948
                }, {
                    "id": 537730368,
                    "name": "Bowe Bergdahl",
                    "weight": 5.4585152838427948
                }, {
                    "id": 538167877,
                    "name": "Iraqi Army",
                    "weight": 5.2401746724890828
                }, {
                    "id": 537784838,
                    "name": "F-16 Fighting Falcon",
                    "weight": 5.1310043668122267
                }, {
                    "id": 538250562,
                    "name": "Petro Poroshenko",
                    "weight": 5.0218340611353716
                }, {
                    "id": 537074598,
                    "name": "Hamas",
                    "weight": 4.9126637554585155
                }, {
                    "id": 537707586,
                    "name": "United States Senate Committee on Armed Services",
                    "weight": 4.6943231441048034
                }, {
                    "id": 537191734,
                    "name": "Nawaz Sharif",
                    "weight": 4.5851528384279474
                }, {
                    "id": 537619382,
                    "name": "F-35 Lightning II",
                    "weight": 4.5851528384279474
                }, {
                    "id": 537075108,
                    "name": "Aung San Suu Kyi",
                    "weight": 4.4759825327510914
                }, {
                    "id": 537077411,
                    "name": "African Union",
                    "weight": 4.3668122270742362
                }, {
                    "id": 537106702,
                    "name": "United States Air Force",
                    "weight": 4.25764192139738
                }, {
                    "id": 537135737,
                    "name": "Medecins Sans Frontieres",
                    "weight": 4.1484716157205241
                }, {
                    "id": 537190211,
                    "name": "Saddam Hussein",
                    "weight": 4.1484716157205241
                }, {
                    "id": 537077270,
                    "name": "International Criminal Court",
                    "weight": 3.9301310043668121
                }, {
                    "id": 538248884,
                    "name": "Syrian Army",
                    "weight": 3.7117903930131004
                }, {
                    "id": 537084959,
                    "name": "Revolutionary Armed Forces of Colombia",
                    "weight": 3.3842794759825328
                }, {
                    "id": 538254271,
                    "name": "Nigerian Army",
                    "weight": 3.2751091703056767
                }, {
                    "id": 538244650,
                    "name": "The Nusra Front",
                    "weight": 3.2751091703056767
                }, {
                    "id": 537150874,
                    "name": "Muslim Brotherhood",
                    "weight": 2.6200873362445414
                }, {
                    "id": 538233771,
                    "name": "Syrian Armed Forces",
                    "weight": 2.6200873362445414
                }, {
                    "id": 537077405,
                    "name": "Royal Navy",
                    "weight": 2.5109170305676858
                }, {
                    "id": 536994698,
                    "name": "Jens Stoltenberg",
                    "weight": 2.4017467248908297
                }, {
                    "id": 538080820,
                    "name": "Indian Air Force",
                    "weight": 2.1834061135371181
                }, {
                    "id": 537084224,
                    "name": "British Army",
                    "weight": 2.0742358078602621
                }, {
                    "id": 537650576,
                    "name": "Israel Defense Forces",
                    "weight": 2.0742358078602621
                }, {
                    "id": 537077445,
                    "name": "Palestine Liberation Organization",
                    "weight": 1.965065502183406
                }, {
                    "id": 537117455,
                    "name": "Abu Sayyaf",
                    "weight": 1.965065502183406
                }, {
                    "id": 537114260,
                    "name": "People's Liberation Army",
                    "weight": 1.5283842794759825
                }, {
                    "id": 537108989,
                    "name": "Canadian Forces",
                    "weight": 1.3100436681222707
                }, {
                    "id": 537783375,
                    "name": "Sikorsky UH-60 Black Hawk",
                    "weight": 1.0917030567685591
                }]
            }]
        }, {
            "id": 268489900,
            "name": "Middle East Politics",
            "weight": 12.191937326587237,
            "topics": [{
                "id": 537052009,
                "name": "Barack Obama",
                "weight": 64.2570281124498
            }, {
                "id": 538278257,
                "name": "Islamic State in Iraq and the Levant",
                "weight": 30.254350736278447
            }, {
                "id": 536889302,
                "name": "United Nations",
                "weight": 20.348058902275771
            }, {
                "id": 536895947,
                "name": "The Pentagon",
                "weight": 19.946452476572958
            }, {
                "id": 536883339,
                "name": "Vladimir Putin",
                "weight": 18.875502008032129
            }, {
                "id": 537074831,
                "name": "David Cameron",
                "weight": 18.072289156626507
            }, {
                "id": 537074550,
                "name": "John Kerry",
                "weight": 17.8045515394913
            }, {
                "id": 536891982,
                "name": "George W. Bush",
                "weight": 15.796519410977242
            }, {
                "id": 536937327,
                "name": "United States Congress",
                "weight": 15.261044176706827
            }, {
                "id": 537265246,
                "name": "Bashar al-Assad",
                "weight": 13.386880856760374
            }, {
                "id": 536889339,
                "name": "North Atlantic Treaty Organization (NATO)",
                "weight": 13.253012048192771
            }, {
                "id": 537077479,
                "name": "Al-Qaeda",
                "weight": 12.315930388219545
            }, {
                "id": 537077305,
                "name": "Organization of Petroleum Exporting Countries",
                "weight": 11.914323962516734
            }, {
                "id": 537252187,
                "name": "Regierung der Russischen Föderation",
                "weight": 11.780455153949131
            }, {
                "id": 537084986,
                "name": "UN Security Council",
                "weight": 10.977242302543507
            }, {
                "id": 537077152,
                "name": "Benjamin Netanyahu",
                "weight": 10.441767068273093
            }, {
                "id": 537177522,
                "name": "Ban Ki-moon",
                "weight": 8.96921017402945
            }, {
                "id": 536933926,
                "name": "Hezbollah",
                "weight": 8.96921017402945
            }, {
                "id": 537070852,
                "name": "Recep Tayyip Erdogan",
                "weight": 8.1659973226238289
            }, {
                "id": 538573666,
                "name": "Benjamin Netanyahu",
                "weight": 8.1659973226238289
            }, {
                "id": 537077322,
                "name": "U.S. government",
                "weight": 8.0321285140562253
            }, {
                "id": 538569035,
                "name": "Hassan Rouhani",
                "weight": 7.6305220883534135
            }, {
                "id": 537084357,
                "name": "Sergey Lavrov",
                "weight": 7.3627844712182062
            }, {
                "id": 537193488,
                "name": "Ashton Carter",
                "weight": 6.6934404283801872
            }, {
                "id": 538167877,
                "name": "Iraqi Army",
                "weight": 6.42570281124498
            }, {
                "id": 537784838,
                "name": "F-16 Fighting Falcon",
                "weight": 6.2918340026773762
            }, {
                "id": 537074598,
                "name": "Hamas",
                "weight": 6.024096385542169
            }, {
                "id": 537074505,
                "name": "International Atomic Energy Agency",
                "weight": 5.8902275769745653
            }, {
                "id": 537097977,
                "name": "Amnesty International",
                "weight": 5.7563587684069608
            }, {
                "id": 536899274,
                "name": "Ali Khamenei",
                "weight": 5.4886211512717535
            }, {
                "id": 538219189,
                "name": "Mohammad Javad Zarif",
                "weight": 5.4886211512717535
            }, {
                "id": 537629404,
                "name": "Philip Hammond",
                "weight": 5.4886211512717535
            }, {
                "id": 537190737,
                "name": "Laurent Fabius",
                "weight": 5.2208835341365463
            }, {
                "id": 537112262,
                "name": "Knesset",
                "weight": 5.2208835341365463
            }, {
                "id": 538009961,
                "name": "Khaled",
                "weight": 5.2208835341365463
            }, {
                "id": 537693102,
                "name": "Staffan de Mistura",
                "weight": 5.0870147255689426
            }, {
                "id": 537190211,
                "name": "Saddam Hussein",
                "weight": 5.0870147255689426
            }, {
                "id": 537077346,
                "name": "Tony Blair",
                "weight": 5.0870147255689426
            }, {
                "id": 537084704,
                "name": "UNESCO (culture)",
                "weight": 4.953145917001339
            }, {
                "id": 537077270,
                "name": "International Criminal Court",
                "weight": 4.8192771084337354
            }, {
                "id": 538248884,
                "name": "Syrian Army",
                "weight": 4.5515394912985272
            }, {
                "id": 536891253,
                "name": "Mahmoud Abbas",
                "weight": 4.28380187416332
            }, {
                "id": 538320442,
                "name": "Ahmet Davutoğlu",
                "weight": 4.1499330655957163
            }, {
                "id": 537074593,
                "name": "Osama bin Laden",
                "weight": 4.1499330655957163
            }, {
                "id": 537084274,
                "name": "Islamic Revolution Guards Corps",
                "weight": 4.1499330655957163
            }, {
                "id": 537106687,
                "name": "United Nations General Assembly",
                "weight": 4.0160642570281126
            }, {
                "id": 538244650,
                "name": "The Nusra Front",
                "weight": 4.0160642570281126
            }, {
                "id": 537074857,
                "name": "Palestinian Authority",
                "weight": 3.6144578313253013
            }, {
                "id": 537077153,
                "name": "Iraqi government",
                "weight": 3.3467202141900936
            }, {
                "id": 537150874,
                "name": "Muslim Brotherhood",
                "weight": 3.21285140562249
            }]
        }, {
            "id": 268454462,
            "name": "Diplomacy",
            "weight": 9.4826179206789618,
            "topics": [{
                "id": 537077397,
                "name": "U.S. State Department",
                "weight": 86.058519793459553
            }, {
                "id": 537077152,
                "name": "Benjamin Netanyahu",
                "weight": 13.425129087779689
            }, {
                "id": 538011497,
                "name": "Shinzō Abe",
                "weight": 11.015490533562822
            }, {
                "id": 538573666,
                "name": "Benjamin Netanyahu",
                "weight": 10.499139414802066
            }]
        }, {
            "id": 268487013,
            "name": "Revolution",
            "weight": 5.6144932267014855,
            "topics": [{
                "id": 538110359,
                "name": "Pope Francis",
                "weight": 83.430232558139537
            }, {
                "id": 537265246,
                "name": "Bashar al-Assad",
                "weight": 29.069767441860463
            }, {
                "id": 536933926,
                "name": "Hezbollah",
                "weight": 19.476744186046513
            }, {
                "id": 538250562,
                "name": "Petro Poroshenko",
                "weight": 13.372093023255815
            }, {
                "id": 536899274,
                "name": "Ali Khamenei",
                "weight": 11.918604651162791
            }, {
                "id": 537070378,
                "name": "Raul Castro",
                "weight": 11.918604651162791
            }, {
                "id": 536892115,
                "name": "Hosni Mubarak",
                "weight": 11.627906976744185
            }, {
                "id": 537649259,
                "name": "Mao Zedong",
                "weight": 11.627906976744185
            }, {
                "id": 537190211,
                "name": "Saddam Hussein",
                "weight": 11.046511627906977
            }, {
                "id": 536892114,
                "name": "Muammar Gaddafi",
                "weight": 9.0116279069767433
            }, {
                "id": 537084274,
                "name": "Islamic Revolution Guards Corps",
                "weight": 9.0116279069767433
            }, {
                "id": 537084959,
                "name": "Revolutionary Armed Forces of Colombia",
                "weight": 9.0116279069767433
            }, {
                "id": 538244650,
                "name": "The Nusra Front",
                "weight": 8.720930232558139
            }, {
                "id": 537150874,
                "name": "Muslim Brotherhood",
                "weight": 6.9767441860465116
            }, {
                "id": 537856948,
                "name": "Assassin's Creed",
                "weight": 6.9767441860465116
            }, {
                "id": 538208351,
                "name": "Free Syrian Army",
                "weight": 5.8139534883720927
            }, {
                "id": 537075136,
                "name": "Fidel Castro",
                "weight": 5.2325581395348841
            }, {
                "id": 537639995,
                "name": "Marie Antoinette",
                "weight": 5.2325581395348841
            }, {
                "id": 537466716,
                "name": "George Washington",
                "weight": 4.941860465116279
            }, {
                "id": 537966125,
                "name": "Mohamed Morsy",
                "weight": 4.6511627906976747
            }, {
                "id": 537084239,
                "name": "Islamic Republic News Agency",
                "weight": 4.0697674418604652
            }, {
                "id": 538316776,
                "name": "José Martí",
                "weight": 3.4883720930232558
            }, {
                "id": 537070499,
                "name": "Hugo Chavez",
                "weight": 3.4883720930232558
            }, {
                "id": 537652754,
                "name": "Napoleon Bonaparte",
                "weight": 3.4883720930232558
            }, {
                "id": 537944826,
                "name": "Ruhollah Khomeini",
                "weight": 3.1976744186046511
            }, {
                "id": 537193324,
                "name": "Che Guevara",
                "weight": 3.1976744186046511
            }, {
                "id": 537812799,
                "name": "Deus Ex",
                "weight": 2.6162790697674421
            }, {
                "id": 537200251,
                "name": "Russell Brand",
                "weight": 2.6162790697674421
            }, {
                "id": 537191333,
                "name": "Viktor Yanukovych",
                "weight": 1.4534883720930232
            }, {
                "id": 537070488,
                "name": "Zine El Abidine Ben Ali",
                "weight": 1.1627906976744187
            }]
        }, {
            "id": 268486950,
            "name": "Propaganda",
            "weight": 3.9170882976987107,
            "topics": [{
                "id": 538278257,
                "name": "Islamic State in Iraq and the Levant",
                "weight": 94.166666666666671
            }, {
                "id": 537323972,
                "name": "Adolf Hitler",
                "weight": 20.833333333333332
            }, {
                "id": 537194476,
                "name": "George Orwell",
                "weight": 5.0
            }, {
                "id": 537481821,
                "name": "Joseph Goebbels",
                "weight": 2.5
            }]
        }, {
            "id": 268489883,
            "name": "Asian Politics",
            "weight": 3.8028398890158317,
            "topics": [{
                "id": 537268971,
                "name": "Narendra Modi",
                "weight": 40.772532188841204
            }, {
                "id": 537190481,
                "name": "Xi Jinping",
                "weight": 33.476394849785407
            }, {
                "id": 538011497,
                "name": "Shinzō Abe",
                "weight": 27.467811158798284
            }, {
                "id": 537126153,
                "name": "the Chinese government",
                "weight": 23.605150214592275
            }, {
                "id": 537191734,
                "name": "Nawaz Sharif",
                "weight": 18.025751072961373
            }, {
                "id": 537075108,
                "name": "Aung San Suu Kyi",
                "weight": 17.596566523605151
            }, {
                "id": 538279660,
                "name": "Park Chung-hee",
                "weight": 17.596566523605151
            }, {
                "id": 537053026,
                "name": "Ma Ying-jeou",
                "weight": 11.158798283261802
            }, {
                "id": 537074986,
                "name": "Ashraf Ghani",
                "weight": 10.300429184549357
            }, {
                "id": 537286728,
                "name": "Sonia Gandhi",
                "weight": 9.44206008583691
            }, {
                "id": 537084995,
                "name": "Rahul Gandhi",
                "weight": 9.44206008583691
            }, {
                "id": 537776555,
                "name": "Arvind Kejriwal",
                "weight": 9.44206008583691
            }, {
                "id": 538058814,
                "name": "Rahul",
                "weight": 9.0128755364806867
            }, {
                "id": 538567602,
                "name": "Narendra Modi",
                "weight": 9.0128755364806867
            }, {
                "id": 537286633,
                "name": "Communist Party of China",
                "weight": 7.7253218884120169
            }, {
                "id": 537190012,
                "name": "Arun Jaitley",
                "weight": 6.0085836909871242
            }, {
                "id": 537672801,
                "name": "Jawaharlal Nehru",
                "weight": 5.5793991416309012
            }, {
                "id": 537190153,
                "name": "Sushma Swaraj",
                "weight": 5.5793991416309012
            }, {
                "id": 537189012,
                "name": "Benigno Aquino III",
                "weight": 4.7210300429184553
            }, {
                "id": 537070477,
                "name": "Mahinda Rajapaksa",
                "weight": 4.7210300429184553
            }, {
                "id": 537075193,
                "name": "Pranab Mukherjee",
                "weight": 4.7210300429184553
            }, {
                "id": 537070824,
                "name": "Lee Hsien Loong",
                "weight": 3.8626609442060085
            }, {
                "id": 537135362,
                "name": "Lok Sabha",
                "weight": 3.4334763948497855
            }, {
                "id": 537639037,
                "name": "Li Keqiang",
                "weight": 3.4334763948497855
            }, {
                "id": 537190459,
                "name": "Indira Gandhi",
                "weight": 3.0042918454935621
            }, {
                "id": 537084489,
                "name": "National People's Congress",
                "weight": 3.0042918454935621
            }, {
                "id": 537190963,
                "name": "Manohar Parrikar",
                "weight": 2.5751072961373391
            }, {
                "id": 537192089,
                "name": "Mohammed Omar",
                "weight": 2.5751072961373391
            }, {
                "id": 537345672,
                "name": "Mahatma Gandhi",
                "weight": 2.5751072961373391
            }, {
                "id": 537188436,
                "name": "Lee Kuan Yew",
                "weight": 2.1459227467811157
            }, {
                "id": 537266677,
                "name": "Imran Khan",
                "weight": 1.7167381974248928
            }, {
                "id": 537070350,
                "name": "Ilham Aliyev",
                "weight": 1.7167381974248928
            }, {
                "id": 537223213,
                "name": "Ranil Wickremasinghe",
                "weight": 1.7167381974248928
            }, {
                "id": 538284971,
                "name": "Prashanth",
                "weight": 1.7167381974248928
            }, {
                "id": 537129082,
                "name": "Barisan Nasional",
                "weight": 1.7167381974248928
            }, {
                "id": 537285743,
                "name": "Manmohan Singh",
                "weight": 1.2875536480686696
            }, {
                "id": 537139361,
                "name": "Shiv Sena",
                "weight": 1.2875536480686696
            }, {
                "id": 537218722,
                "name": "Abdul Kalam",
                "weight": 1.2875536480686696
            }, {
                "id": 537098170,
                "name": "Asia-Pacific Economic Cooperation",
                "weight": 1.2875536480686696
            }, {
                "id": 537756504,
                "name": "Prakash Javadekar",
                "weight": 1.2875536480686696
            }]
        }, {
            "id": 268490463,
            "name": "Nuclear Threat",
            "weight": 2.9704586257548558
        }]
    }, {
        "id": 268436520,
        "name": "US Politics",
        "weight": 36.20773534419849,
        "topics": [{
            "id": 268454463,
            "name": "US Elections",
            "weight": 72.253946926436015,
            "topics": [{
                "id": 268490270,
                "name": "Political Analysis",
                "weight": 28.312412831241282
            }, {
                "id": 537052009,
                "name": "Barack Obama",
                "weight": 22.315202231520225
            }, {
                "id": 537277356,
                "name": "Democratic Party (USA)",
                "weight": 17.201301720130171
            }, {
                "id": 537069217,
                "name": "Donald Trump",
                "weight": 15.713621571362157
            }, {
                "id": 537070878,
                "name": "White House",
                "weight": 15.434681543468153
            }, {
                "id": 268489968,
                "name": "G.O.P. Candidates",
                "weight": 15.109251510925152
            }, {
                "id": 538330853,
                "name": "McCarthy",
                "weight": 14.737331473733148
            }, {
                "id": 537265857,
                "name": "Republican Party (USA)",
                "weight": 13.90051139005114
            }, {
                "id": 537084397,
                "name": "Bill Clinton",
                "weight": 13.761041376104137
            }, {
                "id": 268490269,
                "name": "Politics in Blogs",
                "weight": 12.459321245932125
            }, {
                "id": 537074783,
                "name": "Hillary Clinton",
                "weight": 11.529521152952116
            }, {
                "id": 537070877,
                "name": "Senate",
                "weight": 10.599721059972106
            }, {
                "id": 537259158,
                "name": "Bernie Sanders",
                "weight": 9.9488609948860987
            }, {
                "id": 537193199,
                "name": "Michelle Obama",
                "weight": 8.04277080427708
            }, {
                "id": 268489976,
                "name": "National Security (US Elections)",
                "weight": 7.3454207345420732,
                "topics": [{
                    "id": 536891982,
                    "name": "George W. Bush",
                    "weight": 74.683544303797461
                }, {
                    "id": 537141329,
                    "name": "United States National Security Agency",
                    "weight": 47.468354430379748
                }, {
                    "id": 538247860,
                    "name": "Edward Snowden",
                    "weight": 37.341772151898731
                }, {
                    "id": 537074619,
                    "name": "American Civil Liberties Union",
                    "weight": 32.911392405063289
                }, {
                    "id": 537074790,
                    "name": "National Security Council",
                    "weight": 12.658227848101266
                }, {
                    "id": 537074990,
                    "name": "Dick Cheney",
                    "weight": 10.126582278481013
                }, {
                    "id": 537075287,
                    "name": "Susan Rice",
                    "weight": 3.1645569620253164
                }]
            }, {
                "id": 537698143,
                "name": "Ted Cruz",
                "weight": 7.066480706648071
            }, {
                "id": 268489964,
                "name": "US Primaries",
                "weight": 6.8805206880520684
            }, {
                "id": 537192318,
                "name": "Marco Rubio",
                "weight": 6.6480706648070669
            }, {
                "id": 537171652,
                "name": "Jeb Bush",
                "weight": 6.0901906090190607
            }, {
                "id": 537219591,
                "name": "Ben Carson",
                "weight": 5.6252905625290559
            }, {
                "id": 536891982,
                "name": "George W. Bush",
                "weight": 5.4858205485820548
            }, {
                "id": 537681698,
                "name": "Christopher J. Christie",
                "weight": 5.3928405392840535
            }, {
                "id": 536937327,
                "name": "United States Congress",
                "weight": 5.2998605299860531
            }, {
                "id": 268489983,
                "name": "Foreign Policy (US Elections)",
                "weight": 5.160390516039052
            }, {
                "id": 268489986,
                "name": "Polling (US Elections)",
                "weight": 4.9279404927940496
            }, {
                "id": 537074775,
                "name": "Democratic National Committee",
                "weight": 4.6025104602510458
            }, {
                "id": 537208579,
                "name": "Rand Paul",
                "weight": 4.4165504416550441
            }, {
                "id": 537074572,
                "name": "Joe Biden",
                "weight": 4.3235704323570436
            }, {
                "id": 537636346,
                "name": "John Kasich",
                "weight": 4.137610413761041
            }, {
                "id": 537233220,
                "name": "Late Show with David Letterman",
                "weight": 3.9516503951650397
            }, {
                "id": 538563588,
                "name": "Carly Fiorina",
                "weight": 3.8121803812180381
            }, {
                "id": 268489972,
                "name": "Immigration (US Elections)",
                "weight": 3.7192003719200373
            }, {
                "id": 268490267,
                "name": "Campaign Finances",
                "weight": 3.5797303579730357
            }, {
                "id": 537077276,
                "name": "Sarah Palin",
                "weight": 3.5797303579730357
            }, {
                "id": 537077301,
                "name": "Ronald Reagan",
                "weight": 3.393770339377034
            }, {
                "id": 537084164,
                "name": "U.S. House of Representatives",
                "weight": 3.393770339377034
            }, {
                "id": 268489974,
                "name": "Scandals (US Elections)",
                "weight": 3.2543003254300324
            }, {
                "id": 538314224,
                "name": "Megyn Kelly",
                "weight": 3.1148303114830314
            }, {
                "id": 268489965,
                "name": "Presidential Debates",
                "weight": 3.0683403068340307,
                "topics": [{
                    "id": 537705145,
                    "name": "Commission on Presidential Debates",
                    "weight": 3.0303030303030303
                }]
            }, {
                "id": 537189500,
                "name": "Rahm Emanuel",
                "weight": 3.0683403068340307
            }, {
                "id": 537074578,
                "name": "Mitch McConnell",
                "weight": 3.0683403068340307
            }, {
                "id": 537190882,
                "name": "Paul Ryan",
                "weight": 2.97536029753603
            }, {
                "id": 537074648,
                "name": "Department of Homeland Security",
                "weight": 2.9288702928870292
            }, {
                "id": 268490271,
                "name": "Election Statistics",
                "weight": 2.8358902835890283
            }, {
                "id": 537077322,
                "name": "U.S. government",
                "weight": 2.7894002789400281
            }, {
                "id": 537102660,
                "name": "Lindsey Graham",
                "weight": 2.7894002789400281
            }, {
                "id": 537075056,
                "name": "Mitt Romney",
                "weight": 2.6499302649930265
            }, {
                "id": 537075021,
                "name": "John McCain",
                "weight": 2.6034402603440259
            }, {
                "id": 537075022,
                "name": "Republican National Committee",
                "weight": 2.5569502556950257
            }, {
                "id": 537190075,
                "name": "Martin O'Malley",
                "weight": 2.4639702463970248
            }]
        }, {
            "id": 268454465,
            "name": "Republican Party Politics",
            "weight": 38.427947598253276,
            "topics": [{
                "id": 537277356,
                "name": "Democratic Party (USA)",
                "weight": 32.34265734265734
            }, {
                "id": 537069217,
                "name": "Donald Trump",
                "weight": 29.545454545454547
            }, {
                "id": 537070878,
                "name": "White House",
                "weight": 29.02097902097902
            }, {
                "id": 538330853,
                "name": "McCarthy",
                "weight": 27.70979020979021
            }, {
                "id": 537265857,
                "name": "Republican Party (USA)",
                "weight": 26.136363636363637
            }, {
                "id": 537074783,
                "name": "Hillary Clinton",
                "weight": 21.678321678321677
            }, {
                "id": 537070877,
                "name": "Senate",
                "weight": 19.93006993006993
            }, {
                "id": 537698143,
                "name": "Ted Cruz",
                "weight": 13.286713286713287
            }, {
                "id": 537192318,
                "name": "Marco Rubio",
                "weight": 12.5
            }, {
                "id": 537171652,
                "name": "Jeb Bush",
                "weight": 11.451048951048952
            }, {
                "id": 537219591,
                "name": "Ben Carson",
                "weight": 10.576923076923077
            }, {
                "id": 536891982,
                "name": "George W. Bush",
                "weight": 10.314685314685315
            }, {
                "id": 537681698,
                "name": "Christopher J. Christie",
                "weight": 10.13986013986014
            }, {
                "id": 536937327,
                "name": "United States Congress",
                "weight": 9.965034965034965
            }, {
                "id": 537074775,
                "name": "Democratic National Committee",
                "weight": 8.6538461538461533
            }, {
                "id": 537208579,
                "name": "Rand Paul",
                "weight": 8.3041958041958051
            }, {
                "id": 537134705,
                "name": "Junularo Esperantista Brita",
                "weight": 8.12937062937063
            }, {
                "id": 537636346,
                "name": "John Kasich",
                "weight": 7.77972027972028
            }, {
                "id": 538563588,
                "name": "Carly Fiorina",
                "weight": 7.1678321678321675
            }, {
                "id": 537077276,
                "name": "Sarah Palin",
                "weight": 6.7307692307692308
            }, {
                "id": 537077301,
                "name": "Ronald Reagan",
                "weight": 6.3811188811188808
            }, {
                "id": 537084164,
                "name": "U.S. House of Representatives",
                "weight": 6.3811188811188808
            }, {
                "id": 538314224,
                "name": "Megyn Kelly",
                "weight": 5.8566433566433567
            }, {
                "id": 537074578,
                "name": "Mitch McConnell",
                "weight": 5.7692307692307692
            }, {
                "id": 537190882,
                "name": "Paul Ryan",
                "weight": 5.5944055944055942
            }, {
                "id": 537074648,
                "name": "Department of Homeland Security",
                "weight": 5.5069930069930066
            }, {
                "id": 537697739,
                "name": "Fox Business Network",
                "weight": 5.3321678321678325
            }, {
                "id": 537102660,
                "name": "Lindsey Graham",
                "weight": 5.244755244755245
            }, {
                "id": 537075056,
                "name": "Mitt Romney",
                "weight": 4.9825174825174825
            }, {
                "id": 537075021,
                "name": "John McCain",
                "weight": 4.895104895104895
            }, {
                "id": 537075022,
                "name": "Republican National Committee",
                "weight": 4.8076923076923075
            }, {
                "id": 537286360,
                "name": "John Boehner",
                "weight": 4.3706293706293708
            }, {
                "id": 537136607,
                "name": "National Rifle Association",
                "weight": 4.1958041958041958
            }, {
                "id": 537193215,
                "name": "Mike Huckabee",
                "weight": 4.1958041958041958
            }, {
                "id": 537198700,
                "name": "Nikki Haley",
                "weight": 3.8461538461538463
            }, {
                "id": 537077375,
                "name": "Harry Reid",
                "weight": 3.6713286713286712
            }, {
                "id": 537074564,
                "name": "Nancy Pelosi",
                "weight": 3.4965034965034967
            }, {
                "id": 537190051,
                "name": "Jim Gilmore",
                "weight": 3.3216783216783217
            }, {
                "id": 537153443,
                "name": "Rubio's Fresh Mexican Grill",
                "weight": 3.0594405594405596
            }, {
                "id": 537668620,
                "name": "Scott Walker",
                "weight": 2.6223776223776225
            }, {
                "id": 537283815,
                "name": "Sheldon Adelson",
                "weight": 2.534965034965035
            }, {
                "id": 537075525,
                "name": "Bobby Jindal",
                "weight": 2.534965034965035
            }, {
                "id": 537178033,
                "name": "George Pataki",
                "weight": 2.2727272727272729
            }, {
                "id": 537190360,
                "name": "Rick Santorum",
                "weight": 2.1853146853146854
            }, {
                "id": 537191722,
                "name": "Ron Paul",
                "weight": 2.0979020979020979
            }, {
                "id": 537195455,
                "name": "Rachel Maddow",
                "weight": 2.0104895104895104
            }, {
                "id": 537286713,
                "name": "Rick Perry",
                "weight": 1.9230769230769231
            }, {
                "id": 537207994,
                "name": "Dennis Hastert",
                "weight": 1.9230769230769231
            }, {
                "id": 537197584,
                "name": "Tom Wolfe",
                "weight": 1.486013986013986
            }, {
                "id": 538564929,
                "name": "Reince Priebus",
                "weight": 1.3111888111888113
            }]
        }, {
            "id": 268489849,
            "name": "Democratic Party Politics",
            "weight": 20.826335236815588,
            "topics": [{
                "id": 537277356,
                "name": "Democratic Party (USA)",
                "weight": 59.677419354838712
            }, {
                "id": 537074783,
                "name": "Hillary Clinton",
                "weight": 40.0
            }, {
                "id": 537070877,
                "name": "Senate",
                "weight": 36.774193548387096
            }, {
                "id": 537259158,
                "name": "Bernie Sanders",
                "weight": 34.516129032258064
            }, {
                "id": 536937327,
                "name": "United States Congress",
                "weight": 18.387096774193548
            }, {
                "id": 537074775,
                "name": "Democratic National Committee",
                "weight": 15.96774193548387
            }, {
                "id": 537074572,
                "name": "Joe Biden",
                "weight": 15.0
            }, {
                "id": 537199349,
                "name": "Debbie Wasserman Schultz",
                "weight": 14.35483870967742
            }, {
                "id": 537084164,
                "name": "U.S. House of Representatives",
                "weight": 11.774193548387096
            }, {
                "id": 537074578,
                "name": "Mitch McConnell",
                "weight": 10.64516129032258
            }, {
                "id": 537074648,
                "name": "Department of Homeland Security",
                "weight": 10.161290322580646
            }, {
                "id": 537190075,
                "name": "Martin O'Malley",
                "weight": 8.5483870967741939
            }, {
                "id": 537286360,
                "name": "John Boehner",
                "weight": 8.064516129032258
            }, {
                "id": 537084373,
                "name": "Charles Schumer",
                "weight": 8.064516129032258
            }, {
                "id": 537077375,
                "name": "Harry Reid",
                "weight": 6.774193548387097
            }, {
                "id": 537074564,
                "name": "Nancy Pelosi",
                "weight": 6.4516129032258061
            }, {
                "id": 538010754,
                "name": "Matteo Renzi",
                "weight": 5.4838709677419351
            }, {
                "id": 537267379,
                "name": "Elizabeth Warren",
                "weight": 5.161290322580645
            }, {
                "id": 537668620,
                "name": "Scott Walker",
                "weight": 4.838709677419355
            }, {
                "id": 537075104,
                "name": "Al Gore",
                "weight": 4.354838709677419
            }, {
                "id": 537188243,
                "name": "Terry McAuliffe",
                "weight": 3.870967741935484
            }, {
                "id": 537084250,
                "name": "Federal Emergency Management Agency",
                "weight": 3.5483870967741935
            }, {
                "id": 537660292,
                "name": "United States Senate Committee on Foreign Relations",
                "weight": 2.5806451612903225
            }, {
                "id": 537124868,
                "name": "Richard Blumenthal",
                "weight": 2.5806451612903225
            }, {
                "id": 537142538,
                "name": "Adam Schiff",
                "weight": 2.4193548387096775
            }, {
                "id": 537210805,
                "name": "Elijah Cummings",
                "weight": 2.4193548387096775
            }, {
                "id": 537190041,
                "name": "Cory Booker",
                "weight": 2.096774193548387
            }, {
                "id": 537075070,
                "name": "Dianne Feinstein",
                "weight": 2.096774193548387
            }, {
                "id": 537077431,
                "name": "Dick Durbin",
                "weight": 2.096774193548387
            }, {
                "id": 537177867,
                "name": "Jim Webb",
                "weight": 1.7741935483870968
            }, {
                "id": 537191128,
                "name": "Robert Menendez",
                "weight": 1.7741935483870968
            }, {
                "id": 537171331,
                "name": "Claire McCaskill",
                "weight": 1.6129032258064515
            }, {
                "id": 537195333,
                "name": "Alan Grayson",
                "weight": 1.6129032258064515
            }, {
                "id": 537074565,
                "name": "Edward Kennedy",
                "weight": 1.6129032258064515
            }, {
                "id": 537230763,
                "name": "Barbara Mikulski",
                "weight": 1.6129032258064515
            }, {
                "id": 537109655,
                "name": "Congressional Black Caucus",
                "weight": 1.4516129032258065
            }, {
                "id": 537192209,
                "name": "Kamala Harris",
                "weight": 1.2903225806451613
            }, {
                "id": 537177664,
                "name": "Barbara Boxer",
                "weight": 1.1290322580645162
            }, {
                "id": 537202898,
                "name": "Patrick Murphy",
                "weight": 1.1290322580645162
            }, {
                "id": 537214563,
                "name": "Ben Cardin",
                "weight": 1.1290322580645162
            }]
        }, {
            "id": 537077397,
            "name": "U.S. State Department",
            "weight": 16.795431642593215
        }, {
            "id": 537052009,
            "name": "Barack Obama",
            "weight": 16.123614376889485
        }, {
            "id": 537277356,
            "name": "Democratic Party (USA)",
            "weight": 12.428619415518979
        }, {
            "id": 537069217,
            "name": "Donald Trump",
            "weight": 11.353711790393014
        }, {
            "id": 537070878,
            "name": "White House",
            "weight": 11.152166610681894
        }, {
            "id": 538330853,
            "name": "McCarthy",
            "weight": 10.648303661404098
        }, {
            "id": 537265857,
            "name": "Republican Party (USA)",
            "weight": 10.043668122270743
        }, {
            "id": 537084397,
            "name": "Bill Clinton",
            "weight": 9.9428955324151822
        }, {
            "id": 537074783,
            "name": "Hillary Clinton",
            "weight": 8.3305340947262341
        }, {
            "id": 537070877,
            "name": "Senate",
            "weight": 7.6587168290225058
        }, {
            "id": 537259158,
            "name": "Bernie Sanders",
            "weight": 7.1884447430298959
        }, {
            "id": 537193199,
            "name": "Michelle Obama",
            "weight": 5.8112193483372518
        }, {
            "id": 537698143,
            "name": "Ted Cruz",
            "weight": 5.1058112193483369
        }, {
            "id": 537192318,
            "name": "Marco Rubio",
            "weight": 4.8034934497816595
        }, {
            "id": 537171652,
            "name": "Jeb Bush",
            "weight": 4.400403090359422
        }, {
            "id": 537219591,
            "name": "Ben Carson",
            "weight": 4.0644944575075579
        }, {
            "id": 536891982,
            "name": "George W. Bush",
            "weight": 3.9637218676519987
        }, {
            "id": 537681698,
            "name": "Christopher J. Christie",
            "weight": 3.8965401410816258
        }, {
            "id": 536937327,
            "name": "United States Congress",
            "weight": 3.8293584145112529
        }, {
            "id": 537074775,
            "name": "Democratic National Committee",
            "weight": 3.3254954652334563
        }, {
            "id": 537074675,
            "name": "NBC News",
            "weight": 3.2247228753778971
        }, {
            "id": 537208579,
            "name": "Rand Paul",
            "weight": 3.1911320120927109
        }, {
            "id": 537134705,
            "name": "Junularo Esperantista Brita",
            "weight": 3.123950285522338
        }, {
            "id": 537074572,
            "name": "Joe Biden",
            "weight": 3.123950285522338
        }, {
            "id": 537636346,
            "name": "John Kasich",
            "weight": 2.9895868323815922
        }, {
            "id": 538563588,
            "name": "Carly Fiorina",
            "weight": 2.7544507893852872
        }, {
            "id": 537077152,
            "name": "Benjamin Netanyahu",
            "weight": 2.6200873362445414
        }, {
            "id": 537077276,
            "name": "Sarah Palin",
            "weight": 2.5864964729593551
        }, {
            "id": 537077301,
            "name": "Ronald Reagan",
            "weight": 2.4521330198186093
        }, {
            "id": 537084164,
            "name": "U.S. House of Representatives",
            "weight": 2.4521330198186093
        }, {
            "id": 538314224,
            "name": "Megyn Kelly",
            "weight": 2.2505878401074906
        }, {
            "id": 537189500,
            "name": "Rahm Emanuel",
            "weight": 2.2169969768223043
        }, {
            "id": 537074578,
            "name": "Mitch McConnell",
            "weight": 2.2169969768223043
        }, {
            "id": 537190882,
            "name": "Paul Ryan",
            "weight": 2.1498152502519314
        }, {
            "id": 538110669,
            "name": "Bill de Blasio",
            "weight": 2.1498152502519314
        }, {
            "id": 537074648,
            "name": "Department of Homeland Security",
            "weight": 2.1162243869667452
        }, {
            "id": 537697739,
            "name": "Fox Business Network",
            "weight": 2.0490426603963723
        }, {
            "id": 537077322,
            "name": "U.S. government",
            "weight": 2.0154517971111856
        }, {
            "id": 537102660,
            "name": "Lindsey Graham",
            "weight": 2.0154517971111856
        }, {
            "id": 538312091,
            "name": "Trans-Pacific Partnership",
            "weight": 1.9482700705408129
        }, {
            "id": 537075056,
            "name": "Mitt Romney",
            "weight": 1.9146792072556265
        }, {
            "id": 538014440,
            "name": "Bill Moseley",
            "weight": 1.9146792072556265
        }, {
            "id": 537075021,
            "name": "John McCain",
            "weight": 1.88108834397044
        }, {
            "id": 537075022,
            "name": "Republican National Committee",
            "weight": 1.8474974806852535
        }, {
            "id": 537190075,
            "name": "Martin O'Malley",
            "weight": 1.7803157541148809
        }, {
            "id": 537286360,
            "name": "John Boehner",
            "weight": 1.6795431642593215
        }, {
            "id": 537084373,
            "name": "Charles Schumer",
            "weight": 1.6795431642593215
        }]
    }, {
        "id": 268489884,
        "name": "European Politics",
        "weight": 4.9136463147652636,
        "topics": [{
            "id": 268454458,
            "name": "British Politics",
            "weight": 59.158415841584159,
            "topics": [{
                "id": 537077159,
                "name": "House of Lords",
                "weight": 14.644351464435147
            }]
        }, {
            "id": 537074831,
            "name": "David Cameron",
            "weight": 33.415841584158414
        }, {
            "id": 537070756,
            "name": "Angela Merkel",
            "weight": 25.247524752475247
        }, {
            "id": 537077226,
            "name": "European Commission",
            "weight": 22.277227722772277
        }, {
            "id": 537252187,
            "name": "Regierung der Russischen Föderation",
            "weight": 21.782178217821784
        }, {
            "id": 537074517,
            "name": "International Monetary Fund",
            "weight": 21.287128712871286
        }, {
            "id": 537278799,
            "name": "Margaret Thatcher",
            "weight": 20.297029702970296
        }, {
            "id": 537070495,
            "name": "Elizabeth II",
            "weight": 17.574257425742573
        }, {
            "id": 537223896,
            "name": "Jeremy Corbyn",
            "weight": 17.326732673267326
        }, {
            "id": 537074627,
            "name": "European Central Bank",
            "weight": 13.861386138613861
        }, {
            "id": 537213190,
            "name": "Alexis Tsipras",
            "weight": 13.118811881188119
        }, {
            "id": 537077386,
            "name": "Boris Johnson",
            "weight": 12.128712871287128
        }, {
            "id": 537954720,
            "name": "François Hollande",
            "weight": 11.633663366336634
        }, {
            "id": 537070790,
            "name": "Donald Tusk",
            "weight": 11.633663366336634
        }, {
            "id": 537077377,
            "name": "European Parliament",
            "weight": 11.633663366336634
        }, {
            "id": 537255325,
            "name": "British government",
            "weight": 11.633663366336634
        }, {
            "id": 537674391,
            "name": "Marine Le Pen",
            "weight": 11.386138613861386
        }, {
            "id": 538250562,
            "name": "Petro Poroshenko",
            "weight": 11.386138613861386
        }, {
            "id": 537077344,
            "name": "George Osborne",
            "weight": 11.138613861386139
        }, {
            "id": 537629404,
            "name": "Philip Hammond",
            "weight": 10.148514851485148
        }, {
            "id": 537130410,
            "name": "Christian Democratic Union",
            "weight": 9.9009900990099009
        }, {
            "id": 537198132,
            "name": "Nigel Farage",
            "weight": 9.653465346534654
        }, {
            "id": 537199285,
            "name": "Ed Miliband",
            "weight": 9.4059405940594054
        }, {
            "id": 537077346,
            "name": "Tony Blair",
            "weight": 9.4059405940594054
        }, {
            "id": 537213012,
            "name": "Jean-Marie Le Pen",
            "weight": 9.4059405940594054
        }, {
            "id": 537108763,
            "name": "British House of Commons",
            "weight": 8.9108910891089117
        }, {
            "id": 537077159,
            "name": "House of Lords",
            "weight": 8.6633663366336631
        }, {
            "id": 538010754,
            "name": "Matteo Renzi",
            "weight": 8.4158415841584162
        }, {
            "id": 537070343,
            "name": "Nicolas Sarkozy",
            "weight": 7.9207920792079207
        }, {
            "id": 537070813,
            "name": "Jean-Claude Juncker",
            "weight": 7.673267326732673
        }, {
            "id": 537651388,
            "name": "Wolfgang Schäuble",
            "weight": 6.9306930693069306
        }, {
            "id": 537259588,
            "name": "Mario Draghi",
            "weight": 6.9306930693069306
        }, {
            "id": 538007335,
            "name": "Michael Fallon",
            "weight": 6.6831683168316829
        }, {
            "id": 537122555,
            "name": "Law and Justice",
            "weight": 6.6831683168316829
        }, {
            "id": 537203384,
            "name": "Theresa May",
            "weight": 6.1881188118811883
        }, {
            "id": 537074718,
            "name": "Nicola Sturgeon",
            "weight": 5.9405940594059405
        }, {
            "id": 537198329,
            "name": "Boris Nemtsov",
            "weight": 5.6930693069306928
        }, {
            "id": 537077357,
            "name": "Bundesregierung (Deutschland)",
            "weight": 5.6930693069306928
        }, {
            "id": 537502316,
            "name": "Viktor Orbán",
            "weight": 5.4455445544554459
        }, {
            "id": 537120871,
            "name": "Front National",
            "weight": 5.1980198019801982
        }, {
            "id": 537198625,
            "name": "Nick Clegg",
            "weight": 4.7029702970297027
        }, {
            "id": 537085015,
            "name": "Frank Walter Steinmeier",
            "weight": 4.7029702970297027
        }, {
            "id": 537119405,
            "name": "Christian Social Union",
            "weight": 4.7029702970297027
        }, {
            "id": 537075178,
            "name": "Alex Salmond",
            "weight": 4.2079207920792081
        }, {
            "id": 537655640,
            "name": "Andrew Burnham",
            "weight": 4.2079207920792081
        }, {
            "id": 537739919,
            "name": "Scottish Government",
            "weight": 3.7128712871287131
        }, {
            "id": 537059564,
            "name": "Werner Faymann",
            "weight": 3.217821782178218
        }, {
            "id": 537212995,
            "name": "Sigmar Gabriel",
            "weight": 3.217821782178218
        }, {
            "id": 538282416,
            "name": "Yanis Varoufakis",
            "weight": 2.9702970297029703
        }, {
            "id": 537954730,
            "name": "New Democracy",
            "weight": 2.722772277227723
        }]
    }, {
        "id": 268489946,
        "name": "Canadian Politics",
        "weight": 2.0189734857698856,
        "topics": [{
            "id": 538108609,
            "name": "Harper",
            "weight": 48.795180722891565
        }, {
            "id": 537676191,
            "name": "Justin Trudeau",
            "weight": 38.554216867469883
        }, {
            "id": 537124976,
            "name": "Royal Canadian Mounted Police",
            "weight": 17.46987951807229
        }, {
            "id": 537669409,
            "name": "Liberal Party",
            "weight": 16.867469879518072
        }, {
            "id": 537284877,
            "name": "Stephen Harper",
            "weight": 16.867469879518072
        }, {
            "id": 537211352,
            "name": "Kathleen Wynne",
            "weight": 10.240963855421686
        }, {
            "id": 537177848,
            "name": "Pierre Trudeau",
            "weight": 7.831325301204819
        }, {
            "id": 537108989,
            "name": "Canadian Forces",
            "weight": 7.2289156626506026
        }, {
            "id": 537942967,
            "name": "Thomas J. Mulcair",
            "weight": 6.6265060240963853
        }, {
            "id": 537686220,
            "name": "Christy Clark",
            "weight": 6.6265060240963853
        }, {
            "id": 538313415,
            "name": "Thomas de Maizière",
            "weight": 5.4216867469879517
        }, {
            "id": 538037817,
            "name": "Philippe Couillard",
            "weight": 5.4216867469879517
        }, {
            "id": 537072252,
            "name": "Canada Pension Plan",
            "weight": 4.8192771084337354
        }, {
            "id": 537227276,
            "name": "Rona Ambrose",
            "weight": 4.8192771084337354
        }, {
            "id": 537198445,
            "name": "John Tory",
            "weight": 4.8192771084337354
        }, {
            "id": 537195523,
            "name": "David Johnston",
            "weight": 4.2168674698795181
        }, {
            "id": 537709176,
            "name": "Elizabeth May",
            "weight": 3.0120481927710845
        }, {
            "id": 537981642,
            "name": "Nigel Wright",
            "weight": 3.0120481927710845
        }, {
            "id": 537223838,
            "name": "Mike Duffy",
            "weight": 3.0120481927710845
        }, {
            "id": 537128596,
            "name": "Assembly of First Nations",
            "weight": 3.0120481927710845
        }, {
            "id": 537201627,
            "name": "Christine Elliott",
            "weight": 2.4096385542168677
        }, {
            "id": 537191815,
            "name": "Jason Kenney",
            "weight": 2.4096385542168677
        }, {
            "id": 537077264,
            "name": "Supreme Court of Canada",
            "weight": 2.4096385542168677
        }, {
            "id": 537707397,
            "name": "Elizabeth May",
            "weight": 1.8072289156626506
        }, {
            "id": 537190130,
            "name": "Paul Martin",
            "weight": 1.8072289156626506
        }, {
            "id": 537190942,
            "name": "Tony Clement",
            "weight": 1.8072289156626506
        }, {
            "id": 537129929,
            "name": "Canadian Security Intelligence Service",
            "weight": 1.8072289156626506
        }, {
            "id": 537955775,
            "name": "Joe Oliver",
            "weight": 1.2048192771084338
        }, {
            "id": 538105734,
            "name": "Stephen McNeil",
            "weight": 1.2048192771084338
        }, {
            "id": 537084499,
            "name": "Gilles Duceppe",
            "weight": 1.2048192771084338
        }, {
            "id": 537250704,
            "name": "Treasury Board",
            "weight": 1.2048192771084338
        }, {
            "id": 537122208,
            "name": "Jim Prentice",
            "weight": 1.2048192771084338
        }, {
            "id": 537129369,
            "name": "Bloc Quebecois",
            "weight": 1.2048192771084338
        }]
    }, {
        "id": 268489945,
        "name": "Australian Politics",
        "weight": 1.7392361955728532,
        "topics": [{
            "id": 537074699,
            "name": "Malcolm Turnbull",
            "weight": 44.755244755244753
        }, {
            "id": 537193986,
            "name": "Tony Abbott",
            "weight": 35.664335664335667
        }, {
            "id": 537202985,
            "name": "Peter Dutton",
            "weight": 23.076923076923077
        }, {
            "id": 538214496,
            "name": "Julie Bishop",
            "weight": 22.377622377622377
        }, {
            "id": 537140521,
            "name": "the Australian government",
            "weight": 19.58041958041958
        }, {
            "id": 537669409,
            "name": "Liberal Party",
            "weight": 19.58041958041958
        }, {
            "id": 537547761,
            "name": "Mike Baird",
            "weight": 18.88111888111888
        }, {
            "id": 537224347,
            "name": "Bill Shorten",
            "weight": 17.482517482517483
        }, {
            "id": 537193495,
            "name": "Scott Morrison",
            "weight": 15.384615384615385
        }, {
            "id": 537286074,
            "name": "Clive Palmer",
            "weight": 13.986013986013987
        }, {
            "id": 537053222,
            "name": "Kevin Rudd",
            "weight": 13.986013986013987
        }, {
            "id": 537273648,
            "name": "Daniel Andrews",
            "weight": 13.286713286713287
        }, {
            "id": 537207396,
            "name": "Barnaby Joyce",
            "weight": 12.587412587412587
        }, {
            "id": 538009506,
            "name": "Government of New South Wales",
            "weight": 11.188811188811188
        }, {
            "id": 537242319,
            "name": "Andrew Robb",
            "weight": 7.6923076923076925
        }, {
            "id": 537207451,
            "name": "Gordie Howe",
            "weight": 7.6923076923076925
        }, {
            "id": 537191621,
            "name": "Sussan Ley",
            "weight": 7.6923076923076925
        }, {
            "id": 537108312,
            "name": "Australian Productivity Commission",
            "weight": 6.9930069930069934
        }, {
            "id": 538096763,
            "name": "Simon Corbell",
            "weight": 5.5944055944055942
        }, {
            "id": 537219396,
            "name": "George Brandis",
            "weight": 5.5944055944055942
        }, {
            "id": 537931131,
            "name": "Andrew Barr",
            "weight": 4.895104895104895
        }, {
            "id": 537202861,
            "name": "Greg Hunt",
            "weight": 4.895104895104895
        }, {
            "id": 537204531,
            "name": "Warren Truss",
            "weight": 4.895104895104895
        }, {
            "id": 537212040,
            "name": "Fiona Nash",
            "weight": 4.895104895104895
        }, {
            "id": 537221107,
            "name": "Jay Weatherill",
            "weight": 4.895104895104895
        }, {
            "id": 537106277,
            "name": "The Perth Gazette and Western Australian Journal",
            "weight": 4.895104895104895
        }, {
            "id": 538304983,
            "name": "George Dyson",
            "weight": 4.895104895104895
        }, {
            "id": 537202429,
            "name": "Christopher Pyne",
            "weight": 4.895104895104895
        }, {
            "id": 537273928,
            "name": "Kevin Andrews",
            "weight": 4.1958041958041958
        }, {
            "id": 537062682,
            "name": "China Shenhua Energy Company",
            "weight": 4.1958041958041958
        }, {
            "id": 537195291,
            "name": "Nick Xenophon",
            "weight": 4.1958041958041958
        }, {
            "id": 537241380,
            "name": "Colin Barnett",
            "weight": 4.1958041958041958
        }, {
            "id": 537216578,
            "name": "Cory Bernardi",
            "weight": 3.4965034965034967
        }, {
            "id": 538214139,
            "name": "Bronwyn Bishop",
            "weight": 3.4965034965034967
        }, {
            "id": 537204916,
            "name": "Joe Hockey",
            "weight": 3.4965034965034967
        }, {
            "id": 537223951,
            "name": "Michael Keenan",
            "weight": 3.4965034965034967
        }, {
            "id": 537128881,
            "name": "Australian Medical Association",
            "weight": 3.4965034965034967
        }, {
            "id": 537188272,
            "name": "Malcolm Fraser",
            "weight": 2.7972027972027971
        }, {
            "id": 537211832,
            "name": "Mathias Cormann",
            "weight": 2.7972027972027971
        }, {
            "id": 537212624,
            "name": "Tanya Plibersek",
            "weight": 2.7972027972027971
        }, {
            "id": 537231982,
            "name": "Citadel Media",
            "weight": 2.7972027972027971
        }, {
            "id": 537143810,
            "name": "Australian Capital Territory Legislative Assembly",
            "weight": 2.0979020979020979
        }, {
            "id": 537427911,
            "name": "Kate Jones",
            "weight": 2.0979020979020979
        }, {
            "id": 537202772,
            "name": "Eric Abetz",
            "weight": 2.0979020979020979
        }, {
            "id": 537204042,
            "name": "Philip Ruddock",
            "weight": 2.0979020979020979
        }, {
            "id": 537212128,
            "name": "Ian Macfarlane",
            "weight": 2.0979020979020979
        }, {
            "id": 537694519,
            "name": "Liberal National Party of Queensland",
            "weight": 2.0979020979020979
        }, {
            "id": 537230148,
            "name": "Campbell Newman",
            "weight": 2.0979020979020979
        }, {
            "id": 537112129,
            "name": "Julia Gillard",
            "weight": 2.0979020979020979
        }, {
            "id": 538030021,
            "name": "Kelly O'Dwyer",
            "weight": 2.0979020979020979
        }]
    }]
}, {
    "id": 268436556,
    "name": "Society",
    "weight": 6.2192433769043687,
    "color": "#8F9437",
    "topics": [{
        "id": 268457475,
        "name": "Human Rights",
        "weight": 25.098090504839131,
        "topics": [{
            "id": 268457459,
            "name": "Civil Rights",
            "weight": 49.08806670140698,
            "topics": [{
                "id": 537176810,
                "name": "Martin Luther King, Jr.",
                "weight": 36.305732484076437
            }, {
                "id": 537070880,
                "name": "FBI (govt bodies)",
                "weight": 36.305732484076437
            }, {
                "id": 537198419,
                "name": "Nina Simone",
                "weight": 24.416135881104033
            }, {
                "id": 537259158,
                "name": "Bernie Sanders",
                "weight": 22.717622080679405
            }, {
                "id": 537074619,
                "name": "American Civil Liberties Union",
                "weight": 5.5201698513800421
            }, {
                "id": 537202493,
                "name": "Al Sharpton",
                "weight": 3.397027600849257
            }, {
                "id": 537103393,
                "name": "National Association for the Advancement of Colored People",
                "weight": 1.4861995753715498
            }, {
                "id": 537246389,
                "name": "Rosa Parks",
                "weight": 1.4861995753715498
            }, {
                "id": 537074886,
                "name": "Los Angeles Police Department",
                "weight": 1.3800424628450105
            }, {
                "id": 537204736,
                "name": "Joe Arpaio",
                "weight": 1.2738853503184713
            }, {
                "id": 537077263,
                "name": "Lyndon B. Johnson",
                "weight": 1.167728237791932
            }]
        }, {
            "id": 268485974,
            "name": "Discrimination",
            "weight": 32.308494007295465,
            "topics": [{
                "id": 268486981,
                "name": "Racism",
                "weight": 70.483870967741936,
                "topics": [{
                    "id": 268485558,
                    "name": "Apartheid",
                    "weight": 15.560640732265446,
                    "topics": [{
                        "id": 537084396,
                        "name": "Nelson Mandela",
                        "weight": 60.294117647058826
                    }, {
                        "id": 537084221,
                        "name": "Jacob Zuma",
                        "weight": 36.764705882352942
                    }, {
                        "id": 537117575,
                        "name": "African National Congress",
                        "weight": 23.529411764705884
                    }, {
                        "id": 537171213,
                        "name": "Frederik Willem de Klerk",
                        "weight": 8.8235294117647065
                    }, {
                        "id": 537190795,
                        "name": "Desmond Tutu",
                        "weight": 7.3529411764705879
                    }, {
                        "id": 537050492,
                        "name": "Naspers",
                        "weight": 2.9411764705882355
                    }]
                }, {
                    "id": 537103393,
                    "name": "National Association for the Advancement of Colored People",
                    "weight": 3.2036613272311212
                }]
            }, {
                "id": 537074619,
                "name": "American Civil Liberties Union",
                "weight": 8.387096774193548
            }, {
                "id": 537103393,
                "name": "National Association for the Advancement of Colored People",
                "weight": 2.2580645161290325
            }, {
                "id": 537106717,
                "name": "United States Equal Employment Opportunity Commission",
                "weight": 2.096774193548387
            }]
        }, {
            "id": 268487466,
            "name": "Women's Rights",
            "weight": 24.179260031266285,
            "topics": [{
                "id": 537074783,
                "name": "Hillary Clinton",
                "weight": 53.448275862068968
            }, {
                "id": 537074619,
                "name": "American Civil Liberties Union",
                "weight": 11.206896551724139
            }, {
                "id": 537196462,
                "name": "Gloria Steinem",
                "weight": 9.2672413793103452
            }, {
                "id": 537217690,
                "name": "Ruth Bader Ginsburg",
                "weight": 3.2327586206896552
            }]
        }, {
            "id": 268487328,
            "name": "Torture",
            "weight": 15.268368942157373,
            "topics": [{
                "id": 537070879,
                "name": "Central Intelligence Agency",
                "weight": 52.901023890784984
            }, {
                "id": 536891982,
                "name": "George W. Bush",
                "weight": 40.273037542662117
            }, {
                "id": 537075021,
                "name": "John McCain",
                "weight": 19.112627986348123
            }, {
                "id": 537074598,
                "name": "Hamas",
                "weight": 15.358361774744028
            }, {
                "id": 537097977,
                "name": "Amnesty International",
                "weight": 14.675767918088738
            }, {
                "id": 538564852,
                "name": "Shaker Aamer",
                "weight": 8.5324232081911262
            }, {
                "id": 537097909,
                "name": "American Psychological Association",
                "weight": 6.4846416382252556
            }, {
                "id": 537992801,
                "name": "Omar Khadr",
                "weight": 3.4129692832764507
            }, {
                "id": 537190530,
                "name": "Augusto Pinochet",
                "weight": 2.04778156996587
            }, {
                "id": 537233921,
                "name": "Chicago Police Department",
                "weight": 1.7064846416382253
            }]
        }, {
            "id": 538110359,
            "name": "Pope Francis",
            "weight": 14.955706096925482
        }, {
            "id": 537074783,
            "name": "Hillary Clinton",
            "weight": 12.923397602918186
        }, {
            "id": 268490607,
            "name": "Death Penalty",
            "weight": 10.109431995831162,
            "topics": [{
                "id": 537077173,
                "name": "U.S. Supreme Court",
                "weight": 59.793814432989691
            }, {
                "id": 537190793,
                "name": "Antonin Scalia",
                "weight": 43.814432989690722
            }, {
                "id": 537069797,
                "name": "Richard Branson",
                "weight": 31.958762886597938
            }, {
                "id": 537097977,
                "name": "Amnesty International",
                "weight": 22.164948453608247
            }, {
                "id": 538215577,
                "name": "Dzhokhar A. Tsarnaev",
                "weight": 7.2164948453608249
            }, {
                "id": 537268601,
                "name": "Andrew Chan",
                "weight": 5.1546391752577323
            }, {
                "id": 537695341,
                "name": "Death Penalty Information Center",
                "weight": 5.1546391752577323
            }]
        }, {
            "id": 537070879,
            "name": "Central Intelligence Agency",
            "weight": 8.0771235018238663
        }, {
            "id": 536889302,
            "name": "United Nations",
            "weight": 7.9207920792079207
        }, {
            "id": 268490609,
            "name": "Freedom of Speech",
            "weight": 6.9306930693069306,
            "topics": [{
                "id": 537074619,
                "name": "American Civil Liberties Union",
                "weight": 39.097744360902254
            }]
        }, {
            "id": 537746875,
            "name": "Boko Haram",
            "weight": 6.0448150078165712
        }, {
            "id": 537177522,
            "name": "Ban Ki-moon",
            "weight": 3.4914017717561228
        }, {
            "id": 268485808,
            "name": "Civil Society",
            "weight": 3.4392912975508079
        }, {
            "id": 537097977,
            "name": "Amnesty International",
            "weight": 2.2407503908285564
        }, {
            "id": 536898899,
            "name": "Human Rights Watch",
            "weight": 1.4069828035435124
        }]
    }, {
        "id": 268485729,
        "name": "Bullying",
        "weight": 23.410933821606069,
        "topics": [{
            "id": 537084737,
            "name": "Youtube",
            "weight": 91.675977653631278
        }, {
            "id": 538275093,
            "name": "Yik Yak",
            "weight": 2.011173184357542
        }]
    }, {
        "id": 268457458,
        "name": "Charity",
        "weight": 20.795187025895892,
        "topics": [{
            "id": 537590915,
            "name": "Kate Middleton",
            "weight": 61.257861635220124
        }, {
            "id": 537084616,
            "name": "Taylor Swift",
            "weight": 27.672955974842768
        }, {
            "id": 537310875,
            "name": "Prince William of Wales",
            "weight": 20.880503144654089
        }, {
            "id": 268490698,
            "name": "Foodbanks",
            "weight": 15.59748427672956
        }, {
            "id": 537937100,
            "name": "Ed Sheeran",
            "weight": 11.761006289308176
        }, {
            "id": 537069624,
            "name": "Mark Zuckerberg",
            "weight": 6.8553459119496853
        }, {
            "id": 537191286,
            "name": "Miley Cyrus",
            "weight": 6.0377358490566042
        }, {
            "id": 536913692,
            "name": "eBay",
            "weight": 5.4088050314465406
        }, {
            "id": 537070014,
            "name": "Warren Buffett",
            "weight": 3.6477987421383649
        }, {
            "id": 537084942,
            "name": "UNICEF (ngo)",
            "weight": 3.3962264150943398
        }, {
            "id": 268487306,
            "name": "Thrift Shops",
            "weight": 3.0188679245283021
        }, {
            "id": 537077287,
            "name": "American Cancer Society",
            "weight": 3.0188679245283021
        }, {
            "id": 537969885,
            "name": "Prince Harry",
            "weight": 1.8867924528301887
        }, {
            "id": 537105185,
            "name": "Save the Children",
            "weight": 1.8867924528301887
        }, {
            "id": 537145491,
            "name": "Clinton Foundation",
            "weight": 1.5723270440251573
        }, {
            "id": 537152144,
            "name": "Oxfam",
            "weight": 1.4465408805031446
        }]
    }, {
        "id": 268447464,
        "name": "Employment",
        "weight": 17.630133403086582,
        "topics": [{
            "id": 537052009,
            "name": "Barack Obama",
            "weight": 35.608308605341243
        }, {
            "id": 268457462,
            "name": "Unemployment",
            "weight": 22.8486646884273,
            "topics": [{
                "id": 537084692,
                "name": "Federal Reserve System",
                "weight": 54.870129870129873
            }, {
                "id": 537084184,
                "name": "Bureau of Labor Statistics",
                "weight": 4.5454545454545459
            }]
        }, {
            "id": 268446482,
            "name": "Retirement",
            "weight": 15.875370919881306,
            "topics": [{
                "id": 536892720,
                "name": "MetLife Inc",
                "weight": 8.4112149532710276
            }, {
                "id": 537075307,
                "name": "Social Security Administration",
                "weight": 6.0747663551401869
            }, {
                "id": 537072252,
                "name": "Canada Pension Plan",
                "weight": 3.7383177570093458
            }, {
                "id": 537072251,
                "name": "California State Teachers' Retirement System",
                "weight": 1.4018691588785046
            }, {
                "id": 537074709,
                "name": "Calpers",
                "weight": 1.4018691588785046
            }]
        }, {
            "id": 537084692,
            "name": "Federal Reserve System",
            "weight": 12.537091988130564
        }, {
            "id": 536889162,
            "name": "Boeing",
            "weight": 8.2344213649851632
        }, {
            "id": 536929918,
            "name": "IBM",
            "weight": 8.1602373887240365
        }, {
            "id": 268486162,
            "name": "Freelance",
            "weight": 3.486646884272997,
            "topics": [{
                "id": 538154737,
                "name": "Matt Barrie",
                "weight": 8.51063829787234
            }, {
                "id": 537120845,
                "name": "Freelancers Union",
                "weight": 4.25531914893617
            }]
        }, {
            "id": 268487405,
            "name": "Virtual Assistants",
            "weight": 3.4124629080118694
        }, {
            "id": 268485900,
            "name": "Crowd Sourcing",
            "weight": 2.5964391691394657
        }, {
            "id": 268486948,
            "name": "Professional Development",
            "weight": 2.0029673590504453
        }, {
            "id": 537084184,
            "name": "Bureau of Labor Statistics",
            "weight": 1.0385756676557865
        }]
    }, {
        "id": 268490465,
        "name": "Social Issues",
        "weight": 12.22861626994507,
        "topics": [{
            "id": 268490461,
            "name": "Gun Control",
            "weight": 55.614973262032088,
            "topics": [{
                "id": 537052009,
                "name": "Barack Obama",
                "weight": 92.3076923076923
            }, {
                "id": 537285748,
                "name": "Michael Bloomberg",
                "weight": 11.538461538461538
            }, {
                "id": 537136607,
                "name": "National Rifle Association",
                "weight": 9.23076923076923
            }, {
                "id": 537689963,
                "name": "Wayne LaPierre",
                "weight": 1.7307692307692308
            }]
        }, {
            "id": 268490508,
            "name": "Protests",
            "weight": 45.989304812834227,
            "topics": [{
                "id": 268489862,
                "name": "Rioting",
                "weight": 45.813953488372093
            }, {
                "id": 268457477,
                "name": "Strike Action",
                "weight": 27.674418604651162
            }, {
                "id": 537265246,
                "name": "Bashar al-Assad",
                "weight": 23.255813953488371
            }, {
                "id": 537070852,
                "name": "Recep Tayyip Erdogan",
                "weight": 14.186046511627907
            }, {
                "id": 536891422,
                "name": "Royal Dutch Shell",
                "weight": 11.162790697674419
            }, {
                "id": 536892115,
                "name": "Hosni Mubarak",
                "weight": 9.30232558139535
            }, {
                "id": 537070364,
                "name": "Pierre Nkurunziza",
                "weight": 9.0697674418604652
            }, {
                "id": 537191403,
                "name": "Dilma Rousseff",
                "weight": 7.2093023255813957
            }, {
                "id": 537101219,
                "name": "Greenpeace International",
                "weight": 5.8139534883720927
            }, {
                "id": 537150874,
                "name": "Muslim Brotherhood",
                "weight": 5.5813953488372094
            }, {
                "id": 537198329,
                "name": "Boris Nemtsov",
                "weight": 5.3488372093023253
            }, {
                "id": 537966125,
                "name": "Mohamed Morsy",
                "weight": 3.7209302325581395
            }, {
                "id": 538301453,
                "name": "Leopoldo López",
                "weight": 1.3953488372093024
            }, {
                "id": 538280288,
                "name": "Ferguson Police Department",
                "weight": 1.1627906976744187
            }]
        }, {
            "id": 268490523,
            "name": "Drones",
            "weight": 22.566844919786096,
            "topics": [{
                "id": 537583250,
                "name": "RQ-1 Predator",
                "weight": 1.4218009478672986
            }]
        }, {
            "id": 268490482,
            "name": "Labor Rights",
            "weight": 21.711229946524064
        }, {
            "id": 268490466,
            "name": "Abortion Law",
            "weight": 14.010695187165775,
            "topics": [{
                "id": 537103346,
                "name": "NARAL Pro-Choice America",
                "weight": 2.2900763358778624
            }]
        }, {
            "id": 268486626,
            "name": "Marijuana Legalization",
            "weight": 11.871657754010695
        }, {
            "id": 268490601,
            "name": "Sex Industry",
            "weight": 7.2727272727272725
        }]
    }, {
        "id": 268489864,
        "name": "Peace",
        "weight": 11.574679571017526,
        "topics": [{
            "id": 268486775,
            "name": "Nobel Peace Prize",
            "weight": 66.327683615819211,
            "topics": [{
                "id": 537176810,
                "name": "Martin Luther King, Jr.",
                "weight": 58.262350936967636
            }, {
                "id": 538320693,
                "name": "Malala Yousafzai",
                "weight": 25.724020442930154
            }, {
                "id": 537232567,
                "name": "Jimmy Carter",
                "weight": 8.0068143100511069
            }, {
                "id": 537075108,
                "name": "Aung San Suu Kyi",
                "weight": 6.9846678023850082
            }, {
                "id": 537084396,
                "name": "Nelson Mandela",
                "weight": 6.9846678023850082
            }, {
                "id": 537135737,
                "name": "Medecins Sans Frontieres",
                "weight": 6.4735945485519588
            }, {
                "id": 537287014,
                "name": "Mother Teresa",
                "weight": 5.1107325383304945
            }, {
                "id": 537075104,
                "name": "Al Gore",
                "weight": 4.5996592844974442
            }, {
                "id": 537640578,
                "name": "Liu Xiaobo",
                "weight": 2.2146507666098807
            }, {
                "id": 537137434,
                "name": "Organisation for the Prohibition of Chemical Weapons",
                "weight": 1.362862010221465
            }, {
                "id": 537679417,
                "name": "Tenzin Gyatso, 14th Dalai Lama",
                "weight": 1.0221465076660987
            }]
        }, {
            "id": 537176810,
            "name": "Martin Luther King, Jr.",
            "weight": 38.644067796610166
        }, {
            "id": 537653192,
            "name": "Bono",
            "weight": 26.214689265536723
        }, {
            "id": 536889302,
            "name": "United Nations",
            "weight": 17.175141242937855
        }, {
            "id": 538320693,
            "name": "Malala Yousafzai",
            "weight": 17.062146892655367
        }, {
            "id": 536898981,
            "name": "Taliban",
            "weight": 11.073446327683616
        }, {
            "id": 538575936,
            "name": "Alfred Nobel",
            "weight": 8.2485875706214689
        }, {
            "id": 537177522,
            "name": "Ban Ki-moon",
            "weight": 7.5706214689265536
        }, {
            "id": 537232567,
            "name": "Jimmy Carter",
            "weight": 5.3107344632768365
        }, {
            "id": 537196462,
            "name": "Gloria Steinem",
            "weight": 4.8587570621468927
        }, {
            "id": 537075108,
            "name": "Aung San Suu Kyi",
            "weight": 4.6327683615819213
        }, {
            "id": 537084396,
            "name": "Nelson Mandela",
            "weight": 4.6327683615819213
        }, {
            "id": 536892169,
            "name": "Robert Mugabe",
            "weight": 4.406779661016949
        }, {
            "id": 537135737,
            "name": "Medecins Sans Frontieres",
            "weight": 4.2937853107344637
        }, {
            "id": 537287014,
            "name": "Mother Teresa",
            "weight": 3.3898305084745761
        }, {
            "id": 537106687,
            "name": "United Nations General Assembly",
            "weight": 3.3898305084745761
        }, {
            "id": 537075104,
            "name": "Al Gore",
            "weight": 3.0508474576271185
        }, {
            "id": 537640578,
            "name": "Liu Xiaobo",
            "weight": 1.4689265536723164
        }]
    }, {
        "id": 268487249,
        "name": "Surveillance",
        "weight": 10.29296364111954,
        "topics": [{
            "id": 537176810,
            "name": "Martin Luther King, Jr.",
            "weight": 43.4561626429479
        }, {
            "id": 537070880,
            "name": "FBI (govt bodies)",
            "weight": 43.4561626429479
        }, {
            "id": 537070879,
            "name": "Central Intelligence Agency",
            "weight": 19.695044472681069
        }, {
            "id": 537208579,
            "name": "Rand Paul",
            "weight": 12.071156289707751
        }, {
            "id": 536892360,
            "name": "AT&T",
            "weight": 11.054637865311308
        }, {
            "id": 537084180,
            "name": "New York Police Department",
            "weight": 10.419313850063533
        }, {
            "id": 537141329,
            "name": "United States National Security Agency",
            "weight": 9.529860228716645
        }, {
            "id": 538247860,
            "name": "Edward Snowden",
            "weight": 7.4968233799237609
        }, {
            "id": 538252261,
            "name": "Edward Snowden",
            "weight": 2.5412960609911055
        }, {
            "id": 538004167,
            "name": "Government Communications Headquarters",
            "weight": 2.4142312579415504
        }]
    }, {
        "id": 268446473,
        "name": "Insurance",
        "weight": 7.8341616531519751,
        "topics": [{
            "id": 537052009,
            "name": "Barack Obama",
            "weight": 80.133555926544247
        }, {
            "id": 536892481,
            "name": "Credit Suisse",
            "weight": 8.013355592654424
        }, {
            "id": 536892397,
            "name": "Berkshire Hathaway",
            "weight": 7.8464106844741233
        }, {
            "id": 537141313,
            "name": "United States Department of Health and Human Services",
            "weight": 7.0116861435726214
        }, {
            "id": 536892302,
            "name": "Aetna",
            "weight": 4.3405676126878134
        }, {
            "id": 536892307,
            "name": "American International Group",
            "weight": 4.1736227045075127
        }, {
            "id": 537084853,
            "name": "PricewaterhouseCoopers",
            "weight": 4.1736227045075127
        }, {
            "id": 536892618,
            "name": "Humana",
            "weight": 3.672787979966611
        }, {
            "id": 536892369,
            "name": "Aviva",
            "weight": 3.1719532554257097
        }, {
            "id": 536892720,
            "name": "MetLife Inc",
            "weight": 3.005008347245409
        }, {
            "id": 537072357,
            "name": "Blue Cross and Blue Shield Association",
            "weight": 2.671118530884808
        }, {
            "id": 536892444,
            "name": "Cigna",
            "weight": 2.671118530884808
        }, {
            "id": 536892318,
            "name": "Allianz",
            "weight": 2.5041736227045077
        }, {
            "id": 536892321,
            "name": "Allstate",
            "weight": 2.337228714524207
        }, {
            "id": 536892604,
            "name": "Lloyds Bank",
            "weight": 2.1702838063439067
        }, {
            "id": 537072376,
            "name": "Wellpoint",
            "weight": 1.8363939899833055
        }, {
            "id": 537072427,
            "name": "Federal Deposit Insurance",
            "weight": 1.5025041736227045
        }, {
            "id": 537134734,
            "name": "Kaiser Family Foundation",
            "weight": 1.335559265442404
        }]
    }, {
        "id": 268457461,
        "name": "Immigration",
        "weight": 5.571540674862673,
        "topics": [{
            "id": 537069217,
            "name": "Donald Trump",
            "weight": 79.342723004694832
        }, {
            "id": 537698143,
            "name": "Ted Cruz",
            "weight": 35.68075117370892
        }, {
            "id": 537192318,
            "name": "Marco Rubio",
            "weight": 33.568075117370896
        }, {
            "id": 537074831,
            "name": "David Cameron",
            "weight": 31.690140845070424
        }, {
            "id": 537171652,
            "name": "Jeb Bush",
            "weight": 30.751173708920188
        }, {
            "id": 537074648,
            "name": "Department of Homeland Security",
            "weight": 14.788732394366198
        }, {
            "id": 537102660,
            "name": "Lindsey Graham",
            "weight": 14.084507042253522
        }, {
            "id": 537674391,
            "name": "Marine Le Pen",
            "weight": 10.7981220657277
        }, {
            "id": 537198132,
            "name": "Nigel Farage",
            "weight": 9.1549295774647881
        }, {
            "id": 538010754,
            "name": "Matteo Renzi",
            "weight": 7.981220657276995
        }, {
            "id": 537202985,
            "name": "Peter Dutton",
            "weight": 7.746478873239437
        }, {
            "id": 537668620,
            "name": "Scott Walker",
            "weight": 7.042253521126761
        }, {
            "id": 537203384,
            "name": "Theresa May",
            "weight": 5.868544600938967
        }, {
            "id": 537077442,
            "name": "Home Office",
            "weight": 5.6338028169014081
        }, {
            "id": 537120871,
            "name": "Front National",
            "weight": 4.929577464788732
        }, {
            "id": 537116528,
            "name": "U.S. Immigration and Customs Enforcement",
            "weight": 4.694835680751174
        }, {
            "id": 537191619,
            "name": "Jeh Johnson",
            "weight": 3.9906103286384975
        }, {
            "id": 537200147,
            "name": "Ann Coulter",
            "weight": 3.051643192488263
        }, {
            "id": 537204736,
            "name": "Joe Arpaio",
            "weight": 2.816901408450704
        }, {
            "id": 538057852,
            "name": "Immigration Department",
            "weight": 1.1737089201877935
        }, {
            "id": 537141307,
            "name": "United States Border Patrol",
            "weight": 1.1737089201877935
        }]
    }, {
        "id": 268486932,
        "name": "Poverty",
        "weight": 5.0091551137849857,
        "topics": [{
            "id": 538110359,
            "name": "Pope Francis",
            "weight": 74.934725848563971
        }, {
            "id": 537074517,
            "name": "International Monetary Fund",
            "weight": 22.454308093994779
        }, {
            "id": 537152144,
            "name": "Oxfam",
            "weight": 6.0052219321148828
        }, {
            "id": 537158282,
            "name": "World Bank Group",
            "weight": 4.1775456919060057
        }, {
            "id": 537085110,
            "name": "Iain Duncan Smith",
            "weight": 3.3942558746736293
        }, {
            "id": 537075112,
            "name": "Asian Development Bank",
            "weight": 3.133159268929504
        }, {
            "id": 537077263,
            "name": "Lyndon B. Johnson",
            "weight": 2.8720626631853787
        }, {
            "id": 537110699,
            "name": "Food and Agriculture Organization",
            "weight": 2.3498694516971281
        }, {
            "id": 537106701,
            "name": "United States Agency for International Development",
            "weight": 1.8276762402088773
        }, {
            "id": 537074649,
            "name": "Southern Poverty Law Center",
            "weight": 1.566579634464752
        }]
    }, {
        "id": 268486886,
        "name": "Philanthropy",
        "weight": 4.6037143604499082,
        "topics": [{
            "id": 537070026,
            "name": "William Gates III",
            "weight": 74.147727272727266
        }, {
            "id": 268487162,
            "name": "NGOs",
            "weight": 35.511363636363633,
            "topics": [{
                "id": 537074598,
                "name": "Hamas",
                "weight": 36.0
            }, {
                "id": 537135737,
                "name": "Medecins Sans Frontieres",
                "weight": 30.4
            }, {
                "id": 537106701,
                "name": "United States Agency for International Development",
                "weight": 5.6
            }]
        }, {
            "id": 268487161,
            "name": "Social Enterprise",
            "weight": 17.045454545454547
        }, {
            "id": 537069734,
            "name": "Paul Allen",
            "weight": 7.1022727272727275
        }, {
            "id": 537155070,
            "name": "The Bill and Melinda Gates Foundation",
            "weight": 4.5454545454545459
        }]
    }, {
        "id": 268490584,
        "name": "Information Privacy",
        "weight": 4.5383206905571543
    }, {
        "id": 268490579,
        "name": "Millennials",
        "weight": 4.1328799372220768,
        "topics": [{
            "id": 537722191,
            "name": "Generation X",
            "weight": 3.481012658227848
        }]
    }, {
        "id": 268489861,
        "name": "Labor",
        "weight": 3.9105414595867121,
        "topics": [{
            "id": 537259158,
            "name": "Bernie Sanders",
            "weight": 71.57190635451505
        }, {
            "id": 537073199,
            "name": "McDonald's",
            "weight": 46.488294314381271
        }, {
            "id": 536892992,
            "name": "Walmart",
            "weight": 38.46153846153846
        }, {
            "id": 537668620,
            "name": "Scott Walker",
            "weight": 10.033444816053512
        }, {
            "id": 537224347,
            "name": "Bill Shorten",
            "weight": 8.3612040133779271
        }, {
            "id": 537126616,
            "name": "United Auto Workers",
            "weight": 7.6923076923076925
        }, {
            "id": 537084184,
            "name": "Bureau of Labor Statistics",
            "weight": 4.6822742474916392
        }, {
            "id": 537116730,
            "name": "United Steelworkers",
            "weight": 4.6822742474916392
        }, {
            "id": 537113369,
            "name": "National Labor Relations Board",
            "weight": 4.0133779264214047
        }, {
            "id": 537123958,
            "name": "Occupational Safety and Health Administration",
            "weight": 3.0100334448160537
        }, {
            "id": 537105310,
            "name": "Service Employees International Union",
            "weight": 2.6755852842809364
        }, {
            "id": 537874816,
            "name": "Thomas Perez",
            "weight": 2.0066889632107023
        }, {
            "id": 537077463,
            "name": "American Federation of Labor and Congress of Industrial Organizations",
            "weight": 1.6722408026755853
        }, {
            "id": 537195304,
            "name": "Robert Reich",
            "weight": 1.0033444816053512
        }]
    }, {
        "id": 268487146,
        "name": "Slavery",
        "weight": 3.7797541198012032,
        "topics": [{
            "id": 538278257,
            "name": "Islamic State in Iraq and the Levant",
            "weight": 78.200692041522487
        }, {
            "id": 537219591,
            "name": "Ben Carson",
            "weight": 41.868512110726641
        }, {
            "id": 537397819,
            "name": "Abraham Lincoln",
            "weight": 18.339100346020761
        }, {
            "id": 536939351,
            "name": "Nestlé",
            "weight": 10.380622837370241
        }, {
            "id": 537428341,
            "name": "Robert E. Lee",
            "weight": 4.844290657439446
        }, {
            "id": 537770143,
            "name": "Human Trafficking",
            "weight": 3.4602076124567476
        }, {
            "id": 537329113,
            "name": "Thomas Jefferson",
            "weight": 2.422145328719723
        }, {
            "id": 537976852,
            "name": "Andrew Jackson",
            "weight": 2.0761245674740483
        }, {
            "id": 537663258,
            "name": "Frederick Douglass",
            "weight": 1.3840830449826989
        }]
    }, {
        "id": 538110359,
        "name": "Pope Francis",
        "weight": 3.7535966518441013
    }, {
        "id": 268487166,
        "name": "Social Security",
        "weight": 3.4527857703374312,
        "topics": [{
            "id": 537259158,
            "name": "Bernie Sanders",
            "weight": 81.060606060606062
        }, {
            "id": 537077322,
            "name": "U.S. government",
            "weight": 22.727272727272727
        }, {
            "id": 537141313,
            "name": "United States Department of Health and Human Services",
            "weight": 15.909090909090908
        }, {
            "id": 537142446,
            "name": "AARP (nonprofit)",
            "weight": 6.8181818181818183
        }, {
            "id": 537075307,
            "name": "Social Security Administration",
            "weight": 4.9242424242424239
        }, {
            "id": 537077263,
            "name": "Lyndon B. Johnson",
            "weight": 4.166666666666667
        }, {
            "id": 537074795,
            "name": "Senate Finance Committee",
            "weight": 1.893939393939394
        }]
    }, {
        "id": 268489866,
        "name": "Violence and Abuse",
        "weight": 3.3873921004446768,
        "topics": [{
            "id": 268487402,
            "name": "Violence",
            "weight": 74.131274131274125,
            "topics": [{
                "id": 537109159,
                "name": "Centers for Disease Control",
                "weight": 75.520833333333329
            }, {
                "id": 537171487,
                "name": "Angelina Jolie",
                "weight": 47.395833333333336
            }, {
                "id": 537097977,
                "name": "Amnesty International",
                "weight": 22.395833333333332
            }, {
                "id": 537267373,
                "name": "Chris Brown",
                "weight": 10.9375
            }, {
                "id": 537618796,
                "name": "Ray Rice",
                "weight": 8.3333333333333339
            }, {
                "id": 537830065,
                "name": "Greg Hardy",
                "weight": 5.729166666666667
            }, {
                "id": 537731311,
                "name": "Hope Solo",
                "weight": 3.6458333333333335
            }, {
                "id": 537214725,
                "name": "Kurt Busch",
                "weight": 3.125
            }, {
                "id": 538251499,
                "name": "UN Women",
                "weight": 2.0833333333333335
            }, {
                "id": 538097746,
                "name": "Violence Policy Center",
                "weight": 1.0416666666666667
            }]
        }, {
            "id": 268490244,
            "name": "Sexual Abuse",
            "weight": 56.756756756756758,
            "topics": [{
                "id": 537220017,
                "name": "George Pell",
                "weight": 12.92517006802721
            }, {
                "id": 537229648,
                "name": "Jimmy Savile",
                "weight": 6.8027210884353737
            }]
        }, {
            "id": 268485988,
            "name": "Domestic Violence",
            "weight": 50.19305019305019,
            "topics": [{
                "id": 537259159,
                "name": "Chris Brown",
                "weight": 28.46153846153846
            }, {
                "id": 537267373,
                "name": "Chris Brown",
                "weight": 16.153846153846153
            }, {
                "id": 537618796,
                "name": "Ray Rice",
                "weight": 12.307692307692308
            }, {
                "id": 537731311,
                "name": "Hope Solo",
                "weight": 5.384615384615385
            }, {
                "id": 537214725,
                "name": "Kurt Busch",
                "weight": 4.615384615384615
            }, {
                "id": 537254554,
                "name": "Chris Brown",
                "weight": 3.8461538461538463
            }, {
                "id": 537782432,
                "name": "Ray McDonald",
                "weight": 2.3076923076923075
            }, {
                "id": 537190170,
                "name": "Ross Mirkarimi",
                "weight": 1.5384615384615385
            }]
        }, {
            "id": 268485786,
            "name": "Child Abuse",
            "weight": 37.065637065637063,
            "topics": [{
                "id": 537229648,
                "name": "Jimmy Savile",
                "weight": 10.416666666666666
            }, {
                "id": 538012854,
                "name": "Jerry Sandusky",
                "weight": 7.291666666666667
            }, {
                "id": 537210880,
                "name": "Cyril Smith",
                "weight": 1.0416666666666667
            }]
        }]
    }, {
        "id": 268489850,
        "name": "Political Movements",
        "weight": 3.2696834946377189,
        "topics": [{
            "id": 268487169,
            "name": "Socialism",
            "weight": 94.0,
            "topics": [{
                "id": 537259158,
                "name": "Bernie Sanders",
                "weight": 91.063829787234042
            }, {
                "id": 537323972,
                "name": "Adolf Hitler",
                "weight": 21.276595744680851
            }, {
                "id": 537077346,
                "name": "Tony Blair",
                "weight": 16.170212765957448
            }, {
                "id": 537420883,
                "name": "Joseph Stalin",
                "weight": 11.063829787234043
            }, {
                "id": 537004867,
                "name": "Evo Morales",
                "weight": 8.51063829787234
            }, {
                "id": 537075136,
                "name": "Fidel Castro",
                "weight": 7.6595744680851068
            }, {
                "id": 537194476,
                "name": "George Orwell",
                "weight": 5.1063829787234045
            }, {
                "id": 537070499,
                "name": "Hugo Chavez",
                "weight": 5.1063829787234045
            }, {
                "id": 537193324,
                "name": "Che Guevara",
                "weight": 4.6808510638297873
            }, {
                "id": 537198405,
                "name": "Christopher Hitchens",
                "weight": 4.25531914893617
            }, {
                "id": 537323495,
                "name": "Karl Marx",
                "weight": 2.5531914893617023
            }, {
                "id": 537376690,
                "name": "Karl Marx",
                "weight": 2.1276595744680851
            }, {
                "id": 537954733,
                "name": "Coalition of the Radical Left",
                "weight": 1.2765957446808511
            }, {
                "id": 537788221,
                "name": "Friedrich Hayek",
                "weight": 1.2765957446808511
            }]
        }, {
            "id": 268489886,
            "name": "Nationalism",
            "weight": 26.8,
            "topics": [{
                "id": 537139361,
                "name": "Shiv Sena",
                "weight": 4.4776119402985071
            }, {
                "id": 538574645,
                "name": "Chiang Kai-shek",
                "weight": 4.4776119402985071
            }]
        }, {
            "id": 268486536,
            "name": "Libertarianism",
            "weight": 16.4
        }]
    }, {
        "id": 537074783,
        "name": "Hillary Clinton",
        "weight": 3.2435260266806174
    }, {
        "id": 268490477,
        "name": "Gender",
        "weight": 2.9819513471095997,
        "topics": [{
            "id": 537191286,
            "name": "Miley Cyrus",
            "weight": 42.10526315789474
        }, {
            "id": 537064188,
            "name": "Wikipedia",
            "weight": 35.087719298245617
        }, {
            "id": 537204727,
            "name": "Emma Watson",
            "weight": 23.684210526315791
        }, {
            "id": 537626705,
            "name": "Caitlyn Jenner",
            "weight": 22.368421052631579
        }, {
            "id": 537101579,
            "name": "Human Rights Campaign",
            "weight": 10.087719298245615
        }, {
            "id": 538251499,
            "name": "UN Women",
            "weight": 1.7543859649122806
        }]
    }, {
        "id": 538278257,
        "name": "Islamic State in Iraq and the Levant",
        "weight": 2.9557938791524982
    }, {
        "id": 268487445,
        "name": "Welfare",
        "weight": 2.3541721161391576,
        "topics": [{
            "id": 537074831,
            "name": "David Cameron",
            "weight": 75.0
        }, {
            "id": 537223896,
            "name": "Jeremy Corbyn",
            "weight": 38.888888888888886
        }, {
            "id": 537141313,
            "name": "United States Department of Health and Human Services",
            "weight": 23.333333333333332
        }, {
            "id": 537654264,
            "name": "Paul LePage",
            "weight": 14.444444444444445
        }, {
            "id": 537114247,
            "name": "People for the Ethical Treatment of Animals",
            "weight": 9.4444444444444446
        }, {
            "id": 537826478,
            "name": "Ministry of Health",
            "weight": 8.3333333333333339
        }, {
            "id": 537085110,
            "name": "Iain Duncan Smith",
            "weight": 7.2222222222222223
        }, {
            "id": 537143188,
            "name": "American Society for the Prevention of Cruelty to Animals",
            "weight": 5.5555555555555554
        }, {
            "id": 537275818,
            "name": "Department for Work and Pensions",
            "weight": 5.5555555555555554
        }]
    }, {
        "id": 268487431,
        "name": "Wealth",
        "weight": 2.1056761705466909,
        "topics": [{
            "id": 536887934,
            "name": "Goldman Sachs",
            "weight": 58.385093167701861
        }, {
            "id": 536892386,
            "name": "Barclays PLC",
            "weight": 46.58385093167702
        }, {
            "id": 536892636,
            "name": "JPMorgan Chase",
            "weight": 42.2360248447205
        }, {
            "id": 536892379,
            "name": "Bank of America Corporation",
            "weight": 40.993788819875775
        }, {
            "id": 536892733,
            "name": "Morgan Stanley",
            "weight": 37.267080745341616
        }, {
            "id": 536892616,
            "name": "HSBC",
            "weight": 36.645962732919251
        }, {
            "id": 536892481,
            "name": "Credit Suisse",
            "weight": 29.813664596273291
        }, {
            "id": 536892504,
            "name": "Deutsche Bank",
            "weight": 26.70807453416149
        }, {
            "id": 537084212,
            "name": "UBS AG (diversified)",
            "weight": 24.22360248447205
        }, {
            "id": 536892719,
            "name": "Merrill Lynch",
            "weight": 6.8322981366459627
        }, {
            "id": 537151504,
            "name": "Newmark & Company",
            "weight": 3.7267080745341614
        }, {
            "id": 536892778,
            "name": "Old Mutual",
            "weight": 3.7267080745341614
        }, {
            "id": 538168820,
            "name": "BNY Mellon",
            "weight": 3.1055900621118013
        }, {
            "id": 537145912,
            "name": "Coutts and Company",
            "weight": 1.8633540372670807
        }, {
            "id": 536945280,
            "name": "Capgemini",
            "weight": 1.8633540372670807
        }, {
            "id": 537072133,
            "name": "Investec",
            "weight": 1.2422360248447204
        }, {
            "id": 537072193,
            "name": "Stifel Nicolaus",
            "weight": 1.2422360248447204
        }]
    }, {
        "id": 537074831,
        "name": "David Cameron",
        "weight": 1.7656290871043683
    }, {
        "id": 268489863,
        "name": "Social Movements",
        "weight": 1.7002354172116139,
        "topics": [{
            "id": 268486104,
            "name": "Feminism",
            "weight": 92.3076923076923,
            "topics": [{
                "id": 537196462,
                "name": "Gloria Steinem",
                "weight": 35.833333333333336
            }, {
                "id": 537284711,
                "name": "Joss Whedon",
                "weight": 9.1666666666666661
            }, {
                "id": 537199272,
                "name": "Germaine Greer",
                "weight": 2.5
            }]
        }, {
            "id": 268485863,
            "name": "Consumerism",
            "weight": 23.846153846153847
        }, {
            "id": 268486331,
            "name": "Humanism",
            "weight": 5.384615384615385,
            "topics": [{
                "id": 537672765,
                "name": "Martin Heidegger",
                "weight": 42.857142857142854
            }, {
                "id": 537144563,
                "name": "British Humanist Association",
                "weight": 14.285714285714286
            }, {
                "id": 537099239,
                "name": "Center for Inquiry",
                "weight": 14.285714285714286
            }, {
                "id": 537128142,
                "name": "American Humanist Association",
                "weight": 14.285714285714286
            }]
        }]
    }, {
        "id": 537219591,
        "name": "Ben Carson",
        "weight": 1.582526811404656
    }, {
        "id": 537077173,
        "name": "U.S. Supreme Court",
        "weight": 1.5171331415119016
    }, {
        "id": 268487371,
        "name": "Urban Planning",
        "weight": 1.4778969395762491,
        "topics": [{
            "id": 538291878,
            "name": "Urban Redevelopment Authority",
            "weight": 2.6548672566371683
        }]
    }, {
        "id": 268485944,
        "name": "Demographics",
        "weight": 1.4386607376405964,
        "topics": [{
            "id": 268454468,
            "name": "Census",
            "weight": 81.818181818181813,
            "topics": [{
                "id": 537676191,
                "name": "Justin Trudeau",
                "weight": 71.111111111111114
            }, {
                "id": 537084184,
                "name": "Bureau of Labor Statistics",
                "weight": 15.555555555555555
            }, {
                "id": 537074993,
                "name": "Census Bureau",
                "weight": 11.111111111111111
            }, {
                "id": 537236753,
                "name": "Statistics Canada",
                "weight": 4.4444444444444446
            }, {
                "id": 537128850,
                "name": "Australian Bureau of Statistics",
                "weight": 3.3333333333333335
            }, {
                "id": 537651736,
                "name": "Palestinian Central Bureau of Statistics",
                "weight": 2.2222222222222223
            }]
        }]
    }, {
        "id": 268485971,
        "name": "Disability",
        "weight": 1.4255820036620455,
        "topics": [{
            "id": 537075307,
            "name": "Social Security Administration",
            "weight": 11.926605504587156
        }, {
            "id": 537106717,
            "name": "United States Equal Employment Opportunity Commission",
            "weight": 11.926605504587156
        }, {
            "id": 537154405,
            "name": "Special Olympics",
            "weight": 11.009174311926605
        }, {
            "id": 537275818,
            "name": "Department for Work and Pensions",
            "weight": 9.1743119266055047
        }]
    }, {
        "id": 268490265,
        "name": "Sexual Harassment",
        "weight": 1.373267067747842
    }, {
        "id": 536898981,
        "name": "Taliban",
        "weight": 1.2817159298979859
    }, {
        "id": 268487495,
        "name": "Zionism",
        "weight": 1.2424797279623332,
        "topics": [{
            "id": 536933926,
            "name": "Hezbollah",
            "weight": 70.526315789473685
        }, {
            "id": 537074598,
            "name": "Hamas",
            "weight": 47.368421052631582
        }, {
            "id": 536891253,
            "name": "Mahmoud Abbas",
            "weight": 33.684210526315788
        }, {
            "id": 537149302,
            "name": "Jewish Agency for Israel",
            "weight": 11.578947368421053
        }, {
            "id": 537135793,
            "name": "Menachem Begin",
            "weight": 3.1578947368421053
        }, {
            "id": 537147985,
            "name": "Hadassah",
            "weight": 2.1052631578947367
        }, {
            "id": 538247519,
            "name": "Ze'ev Jabotinsky",
            "weight": 2.1052631578947367
        }, {
            "id": 537653272,
            "name": "David Ben-Gurion",
            "weight": 2.1052631578947367
        }, {
            "id": 537216114,
            "name": "Peter Beinart",
            "weight": 1.0526315789473684
        }, {
            "id": 537107244,
            "name": "World Zionist Organization",
            "weight": 1.0526315789473684
        }, {
            "id": 537981347,
            "name": "Theodor Herzl",
            "weight": 1.0526315789473684
        }]
    }]
}, {
    "id": 268436616,
    "name": "Law & Crime",
    "weight": 5.8084772370486659,
    "color": "#5770B1",
    "topics": [{
        "id": 268452462,
        "name": "Law",
        "weight": 73.491107687998877,
        "topics": [{
            "id": 536898836,
            "name": "CBS",
            "weight": 45.350609756097562
        }, {
            "id": 268452458,
            "name": "Copyright",
            "weight": 35.670731707317074,
            "topics": [{
                "id": 537084737,
                "name": "Youtube",
                "weight": 87.660256410256409
            }, {
                "id": 536899060,
                "name": "Google",
                "weight": 18.696581196581196
            }, {
                "id": 268490562,
                "name": "Patents",
                "weight": 12.98076923076923,
                "topics": [{
                    "id": 537282917,
                    "name": "BlackBerry",
                    "weight": 39.91769547325103
                }, {
                    "id": 536896661,
                    "name": "Huawei",
                    "weight": 36.213991769547327
                }, {
                    "id": 536892827,
                    "name": "Qualcomm",
                    "weight": 30.452674897119341
                }, {
                    "id": 536921239,
                    "name": "Cisco Systems, Inc.",
                    "weight": 29.62962962962963
                }, {
                    "id": 536892769,
                    "name": "Novartis AG",
                    "weight": 13.991769547325102
                }, {
                    "id": 536929916,
                    "name": "Ericsson",
                    "weight": 8.6419753086419746
                }, {
                    "id": 538160439,
                    "name": "USPTO",
                    "weight": 2.4691358024691357
                }]
            }, {
                "id": 268485996,
                "name": "DRM",
                "weight": 8.11965811965812,
                "topics": [{
                    "id": 537609238,
                    "name": "iTunes",
                    "weight": 74.34210526315789
                }, {
                    "id": 537604903,
                    "name": "Mozilla Firefox",
                    "weight": 38.1578947368421
                }, {
                    "id": 537590516,
                    "name": "Amazon Kindle",
                    "weight": 30.921052631578949
                }, {
                    "id": 537072809,
                    "name": "Ubisoft",
                    "weight": 24.342105263157894
                }, {
                    "id": 536898385,
                    "name": "Electronic Arts",
                    "weight": 14.473684210526315
                }]
            }, {
                "id": 268486959,
                "name": "Public Domain",
                "weight": 4.8076923076923075,
                "topics": [{
                    "id": 537109776,
                    "name": "Creative Commons",
                    "weight": 43.333333333333336
                }, {
                    "id": 537984306,
                    "name": "Public Domain (film)",
                    "weight": 21.111111111111111
                }]
            }, {
                "id": 538312091,
                "name": "Trans-Pacific Partnership",
                "weight": 3.0982905982905984
            }, {
                "id": 537928645,
                "name": "Kim Schmitz",
                "weight": 1.1752136752136753
            }, {
                "id": 537984306,
                "name": "Public Domain (film)",
                "weight": 1.0149572649572649
            }]
        }, {
            "id": 268486466,
            "name": "Justice",
            "weight": 15.091463414634147,
            "topics": [{
                "id": 537052009,
                "name": "Barack Obama",
                "weight": 60.606060606060609
            }, {
                "id": 537070880,
                "name": "FBI (govt bodies)",
                "weight": 43.18181818181818
            }, {
                "id": 537077173,
                "name": "U.S. Supreme Court",
                "weight": 14.646464646464647
            }, {
                "id": 537116529,
                "name": "Justice Department",
                "weight": 13.51010101010101
            }, {
                "id": 537190793,
                "name": "Antonin Scalia",
                "weight": 10.732323232323232
            }, {
                "id": 536889179,
                "name": "BP",
                "weight": 9.8484848484848477
            }, {
                "id": 537106564,
                "name": "U.S. Drug Enforcement Administration",
                "weight": 6.5656565656565657
            }, {
                "id": 537097977,
                "name": "Amnesty International",
                "weight": 5.4292929292929291
            }, {
                "id": 537286581,
                "name": "John Roberts",
                "weight": 4.7979797979797976
            }, {
                "id": 537077270,
                "name": "International Criminal Court",
                "weight": 4.5454545454545459
            }, {
                "id": 537329688,
                "name": "Justice League",
                "weight": 4.2929292929292933
            }, {
                "id": 537284877,
                "name": "Stephen Harper",
                "weight": 3.5353535353535355
            }, {
                "id": 537122555,
                "name": "Law and Justice",
                "weight": 3.4090909090909092
            }, {
                "id": 537177548,
                "name": "Michael Gove",
                "weight": 3.2828282828282829
            }, {
                "id": 537192326,
                "name": "Samuel Alito",
                "weight": 3.2828282828282829
            }, {
                "id": 537194921,
                "name": "Clarence Thomas",
                "weight": 3.1565656565656566
            }, {
                "id": 537278802,
                "name": "Eric Holder",
                "weight": 2.1464646464646466
            }, {
                "id": 537223930,
                "name": "Anthony Kennedy",
                "weight": 2.1464646464646466
            }, {
                "id": 538251311,
                "name": "European Court of Justice",
                "weight": 2.0202020202020203
            }, {
                "id": 537217690,
                "name": "Ruth Bader Ginsburg",
                "weight": 1.893939393939394
            }, {
                "id": 538215577,
                "name": "Dzhokhar A. Tsarnaev",
                "weight": 1.7676767676767677
            }, {
                "id": 537955707,
                "name": "Trayvon Martin",
                "weight": 1.5151515151515151
            }, {
                "id": 537191128,
                "name": "Robert Menendez",
                "weight": 1.3888888888888888
            }, {
                "id": 538284835,
                "name": "Justice Ministry",
                "weight": 1.2626262626262625
            }, {
                "id": 537139583,
                "name": "Social Justice",
                "weight": 1.0101010101010102
            }, {
                "id": 537190009,
                "name": "Barry Bonds",
                "weight": 1.0101010101010102
            }]
        }, {
            "id": 537077397,
            "name": "U.S. State Department",
            "weight": 9.5274390243902438
        }, {
            "id": 537052009,
            "name": "Barack Obama",
            "weight": 9.1463414634146343
        }, {
            "id": 268486520,
            "name": "Law Enforcement",
            "weight": 8.650914634146341,
            "topics": [{
                "id": 537070880,
                "name": "FBI (govt bodies)",
                "weight": 75.330396475770925
            }, {
                "id": 537084180,
                "name": "New York Police Department",
                "weight": 18.061674008810574
            }, {
                "id": 537141329,
                "name": "United States National Security Agency",
                "weight": 16.519823788546255
            }, {
                "id": 537074648,
                "name": "Department of Homeland Security",
                "weight": 13.876651982378855
            }, {
                "id": 537074619,
                "name": "American Civil Liberties Union",
                "weight": 11.453744493392071
            }, {
                "id": 537106564,
                "name": "U.S. Drug Enforcement Administration",
                "weight": 11.453744493392071
            }, {
                "id": 537074585,
                "name": "William Bratton",
                "weight": 9.6916299559471373
            }, {
                "id": 537085269,
                "name": "Transportation Security Administration",
                "weight": 8.5903083700440526
            }, {
                "id": 537116528,
                "name": "U.S. Immigration and Customs Enforcement",
                "weight": 4.4052863436123344
            }, {
                "id": 537132547,
                "name": "Fraternal Order of Police",
                "weight": 4.1850220264317182
            }, {
                "id": 537278802,
                "name": "Eric Holder",
                "weight": 3.7444933920704844
            }, {
                "id": 538245361,
                "name": "National Crime Agency",
                "weight": 3.303964757709251
            }, {
                "id": 538249363,
                "name": "State police",
                "weight": 3.0837004405286343
            }, {
                "id": 537121896,
                "name": "International Criminal Police Organization",
                "weight": 3.0837004405286343
            }, {
                "id": 537074886,
                "name": "Los Angeles Police Department",
                "weight": 2.8634361233480177
            }, {
                "id": 537075175,
                "name": "California Highway Patrol",
                "weight": 2.643171806167401
            }, {
                "id": 537116526,
                "name": "U.S. Customs and Border Protection",
                "weight": 2.2026431718061672
            }, {
                "id": 537118931,
                "name": "Bureau of Alcohol, Tobacco, Firearms and Explosives",
                "weight": 1.3215859030837005
            }, {
                "id": 538280288,
                "name": "Ferguson Police Department",
                "weight": 1.1013215859030836
            }]
        }, {
            "id": 536892344,
            "name": "Apple Inc.",
            "weight": 7.1836890243902438
        }, {
            "id": 537070880,
            "name": "FBI (govt bodies)",
            "weight": 6.5167682926829267
        }, {
            "id": 537284095,
            "name": "iPhone",
            "weight": 6.1166158536585362
        }, {
            "id": 537073706,
            "name": "Warner Norcross & Judd",
            "weight": 4.3064024390243905
        }, {
            "id": 536930557,
            "name": "Samsung Electronics",
            "weight": 3.8300304878048781
        }, {
            "id": 537221002,
            "name": "Bill Cosby",
            "weight": 2.2484756097560976
        }, {
            "id": 537681698,
            "name": "Christopher J. Christie",
            "weight": 2.2103658536585367
        }, {
            "id": 537077173,
            "name": "U.S. Supreme Court",
            "weight": 2.2103658536585367
        }, {
            "id": 537137974,
            "name": "Planned Parenthood",
            "weight": 2.1913109756097562
        }, {
            "id": 536892992,
            "name": "Walmart",
            "weight": 2.1913109756097562
        }, {
            "id": 537132221,
            "name": "Federation Internationale de Football Association",
            "weight": 2.1722560975609757
        }, {
            "id": 537074749,
            "name": "U.S. Environmental Protection Agency",
            "weight": 2.0579268292682928
        }, {
            "id": 537190793,
            "name": "Antonin Scalia",
            "weight": 1.6196646341463414
        }, {
            "id": 537084180,
            "name": "New York Police Department",
            "weight": 1.5625
        }, {
            "id": 537074547,
            "name": "Federal Communications Commission",
            "weight": 1.5434451219512195
        }, {
            "id": 536889179,
            "name": "BP",
            "weight": 1.4862804878048781
        }, {
            "id": 537141329,
            "name": "United States National Security Agency",
            "weight": 1.4291158536585367
        }, {
            "id": 537084164,
            "name": "U.S. House of Representatives",
            "weight": 1.3910060975609757
        }, {
            "id": 537074648,
            "name": "Department of Homeland Security",
            "weight": 1.2004573170731707
        }, {
            "id": 537286790,
            "name": "Andrew Cuomo",
            "weight": 1.1051829268292683
        }, {
            "id": 538312091,
            "name": "Trans-Pacific Partnership",
            "weight": 1.1051829268292683
        }, {
            "id": 537074870,
            "name": "U.S. Internal Revenue Service",
            "weight": 1.0480182926829269
        }, {
            "id": 537074659,
            "name": "Federal Trade Commission",
            "weight": 1.0289634146341464
        }]
    }, {
        "id": 268452461,
        "name": "Crime",
        "weight": 26.886990617560567,
        "topics": [{
            "id": 537070880,
            "name": "FBI (govt bodies)",
            "weight": 17.8125
        }, {
            "id": 268489826,
            "name": "White-collar Crime",
            "weight": 16.666666666666668,
            "topics": [{
                "id": 268447463,
                "name": "Fraud",
                "weight": 65.625,
                "topics": [{
                    "id": 268486888,
                    "name": "Phishing",
                    "weight": 38.571428571428569,
                    "topics": [{
                        "id": 537104070,
                        "name": "Open DNS",
                        "weight": 2.4691358024691357
                    }]
                }, {
                    "id": 268486345,
                    "name": "Identity Theft",
                    "weight": 36.19047619047619,
                    "topics": [{
                        "id": 537126372,
                        "name": "Todd Davis",
                        "weight": 11.842105263157896
                    }, {
                        "id": 538045661,
                        "name": "Identity Theft Resource Center",
                        "weight": 2.6315789473684212
                    }]
                }, {
                    "id": 537104293,
                    "name": "PayPal",
                    "weight": 35.714285714285715
                }, {
                    "id": 536892636,
                    "name": "JPMorgan Chase",
                    "weight": 32.38095238095238
                }, {
                    "id": 537077338,
                    "name": "U.S. Securities and Exchange Commission",
                    "weight": 30.476190476190474
                }, {
                    "id": 537692072,
                    "name": "Eric Schneiderman",
                    "weight": 17.142857142857142
                }, {
                    "id": 537596007,
                    "name": "TurboTax",
                    "weight": 5.7142857142857144
                }]
            }, {
                "id": 268490722,
                "name": "Insider Trading",
                "weight": 6.25,
                "topics": [{
                    "id": 537153496,
                    "name": "SAC Capital Advisors",
                    "weight": 25.0
                }]
            }]
        }, {
            "id": 268486939,
            "name": "Prison",
            "weight": 15.260416666666666,
            "topics": [{
                "id": 537077479,
                "name": "Al-Qaeda",
                "weight": 31.399317406143346
            }, {
                "id": 538244298,
                "name": "Orange Is the New Black",
                "weight": 18.430034129692832
            }, {
                "id": 537074619,
                "name": "American Civil Liberties Union",
                "weight": 17.747440273037544
            }, {
                "id": 537730368,
                "name": "Bowe Bergdahl",
                "weight": 17.064846416382252
            }, {
                "id": 537097977,
                "name": "Amnesty International",
                "weight": 14.675767918088738
            }, {
                "id": 537971266,
                "name": "Teresa Giudice",
                "weight": 13.993174061433447
            }, {
                "id": 538288765,
                "name": "Jared Fogle",
                "weight": 13.993174061433447
            }, {
                "id": 536892115,
                "name": "Hosni Mubarak",
                "weight": 13.651877133105803
            }, {
                "id": 537070792,
                "name": "Ehud Olmert",
                "weight": 9.2150170648464158
            }, {
                "id": 538008875,
                "name": "Joaquín Guzmán",
                "weight": 8.19112627986348
            }, {
                "id": 537070428,
                "name": "Mohamed Nasheed",
                "weight": 7.5085324232081909
            }, {
                "id": 537639263,
                "name": "Jonathan Pollard",
                "weight": 6.8259385665529013
            }, {
                "id": 537203321,
                "name": "Darren Sharper",
                "weight": 5.802047781569966
            }, {
                "id": 537966125,
                "name": "Mohamed Morsy",
                "weight": 5.4607508532423212
            }, {
                "id": 538215577,
                "name": "Dzhokhar A. Tsarnaev",
                "weight": 4.7781569965870307
            }, {
                "id": 537751505,
                "name": "Salman Khan",
                "weight": 4.7781569965870307
            }, {
                "id": 537193547,
                "name": "Bob McDonnell",
                "weight": 4.09556313993174
            }, {
                "id": 537268601,
                "name": "Andrew Chan",
                "weight": 3.4129692832764507
            }, {
                "id": 537992801,
                "name": "Omar Khadr",
                "weight": 3.4129692832764507
            }, {
                "id": 537697805,
                "name": "Al Jazeera English",
                "weight": 2.7303754266211606
            }, {
                "id": 537654764,
                "name": "Charles Manson",
                "weight": 2.04778156996587
            }, {
                "id": 537132203,
                "name": "Federal Bureau of Prisons",
                "weight": 2.04778156996587
            }, {
                "id": 537938743,
                "name": "Mumia Abu-Jamal",
                "weight": 1.7064846416382253
            }, {
                "id": 538576699,
                "name": "Oscar Pistorius",
                "weight": 1.0238907849829351
            }, {
                "id": 537138129,
                "name": "Premier Monitoring",
                "weight": 1.0238907849829351
            }, {
                "id": 537671080,
                "name": "Prison Break",
                "weight": 1.0238907849829351
            }, {
                "id": 537287041,
                "name": "Anwar Ibrahim",
                "weight": 1.0238907849829351
            }]
        }, {
            "id": 268486903,
            "name": "Pirates",
            "weight": 7.708333333333333,
            "topics": [{
                "id": 537693455,
                "name": "Indian Navy",
                "weight": 2.0270270270270272
            }]
        }, {
            "id": 537746875,
            "name": "Boko Haram",
            "weight": 6.041666666666667
        }, {
            "id": 536898981,
            "name": "Taliban",
            "weight": 5.104166666666667
        }, {
            "id": 537084180,
            "name": "New York Police Department",
            "weight": 4.270833333333333
        }, {
            "id": 538288238,
            "name": "Economic and Financial Crimes Commission",
            "weight": 3.8541666666666665
        }, {
            "id": 537106564,
            "name": "U.S. Drug Enforcement Administration",
            "weight": 2.7083333333333335
        }, {
            "id": 268452457,
            "name": "Arrests",
            "weight": 2.5520833333333335,
            "topics": [{
                "id": 537074598,
                "name": "Hamas",
                "weight": 91.836734693877546
            }]
        }, {
            "id": 537103774,
            "name": "Nichole Marie Blackwell",
            "weight": 2.34375
        }, {
            "id": 537277126,
            "name": "Metropolitan Police Service",
            "weight": 2.1354166666666665
        }, {
            "id": 538288765,
            "name": "Jared Fogle",
            "weight": 2.1354166666666665
        }, {
            "id": 537077270,
            "name": "International Criminal Court",
            "weight": 1.875
        }, {
            "id": 537124976,
            "name": "Royal Canadian Mounted Police",
            "weight": 1.5104166666666667
        }, {
            "id": 537198329,
            "name": "Boris Nemtsov",
            "weight": 1.1979166666666667
        }]
    }, {
        "id": 268452463,
        "name": "Supreme Court",
        "weight": 12.491247724408346,
        "topics": [{
            "id": 537052009,
            "name": "Barack Obama",
            "weight": 53.811659192825111
        }, {
            "id": 537698143,
            "name": "Ted Cruz",
            "weight": 17.04035874439462
        }, {
            "id": 537077173,
            "name": "U.S. Supreme Court",
            "weight": 13.004484304932735
        }, {
            "id": 537190793,
            "name": "Antonin Scalia",
            "weight": 9.52914798206278
        }, {
            "id": 537074619,
            "name": "American Civil Liberties Union",
            "weight": 5.8295964125560538
        }, {
            "id": 537286581,
            "name": "John Roberts",
            "weight": 4.260089686098655
        }, {
            "id": 537668620,
            "name": "Scott Walker",
            "weight": 3.3632286995515694
        }, {
            "id": 537192326,
            "name": "Samuel Alito",
            "weight": 2.9147982062780269
        }, {
            "id": 537194921,
            "name": "Clarence Thomas",
            "weight": 2.8026905829596411
        }, {
            "id": 537119218,
            "name": "Central Bureau of Investigation",
            "weight": 2.2421524663677128
        }, {
            "id": 538336449,
            "name": "Citizens United",
            "weight": 2.1300448430493275
        }, {
            "id": 537223930,
            "name": "Anthony Kennedy",
            "weight": 1.905829596412556
        }, {
            "id": 537217690,
            "name": "Ruth Bader Ginsburg",
            "weight": 1.6816143497757847
        }, {
            "id": 538035835,
            "name": "Kathleen Kane",
            "weight": 1.3452914798206279
        }, {
            "id": 537241249,
            "name": "New York Supreme Court",
            "weight": 1.3452914798206279
        }, {
            "id": 538279128,
            "name": "Jayalalithaa",
            "weight": 1.1210762331838564
        }]
    }, {
        "id": 268452460,
        "name": "Courts",
        "weight": 8.332166363254446,
        "topics": [{
            "id": 537077173,
            "name": "U.S. Supreme Court",
            "weight": 19.495798319327729
        }, {
            "id": 537074619,
            "name": "American Civil Liberties Union",
            "weight": 8.7394957983193269
        }, {
            "id": 538010010,
            "name": "Crown Prosecution Service",
            "weight": 3.865546218487395
        }, {
            "id": 537119218,
            "name": "Central Bureau of Investigation",
            "weight": 3.3613445378151261
        }, {
            "id": 537074605,
            "name": "U.S. District Court",
            "weight": 2.6890756302521011
        }]
    }, {
        "id": 268452459,
        "name": "Corruption",
        "weight": 4.0610558745273773,
        "topics": [{
            "id": 537190239,
            "name": "Muhammadu Buhari",
            "weight": 43.793103448275865
        }, {
            "id": 537132221,
            "name": "Federation Internationale de Football Association",
            "weight": 39.310344827586206
        }, {
            "id": 537190481,
            "name": "Xi Jinping",
            "weight": 26.896551724137932
        }, {
            "id": 537077426,
            "name": "Sepp Blatter",
            "weight": 22.068965517241381
        }, {
            "id": 537075012,
            "name": "Goodluck Jonathan",
            "weight": 18.275862068965516
        }, {
            "id": 536892115,
            "name": "Hosni Mubarak",
            "weight": 13.793103448275861
        }, {
            "id": 538574694,
            "name": "Michel Platini",
            "weight": 11.379310344827585
        }, {
            "id": 537282278,
            "name": "Dean Skelos",
            "weight": 11.03448275862069
        }, {
            "id": 537084456,
            "name": "Najib Razak",
            "weight": 10.344827586206897
        }, {
            "id": 537070792,
            "name": "Ehud Olmert",
            "weight": 9.3103448275862064
        }, {
            "id": 537124545,
            "name": "Preet Bharara",
            "weight": 9.3103448275862064
        }, {
            "id": 537109612,
            "name": "CONCACAF (nonprofit)",
            "weight": 7.5862068965517242
        }, {
            "id": 537776555,
            "name": "Arvind Kejriwal",
            "weight": 7.5862068965517242
        }, {
            "id": 537119218,
            "name": "Central Bureau of Investigation",
            "weight": 6.8965517241379306
        }, {
            "id": 537140978,
            "name": "Transparency International",
            "weight": 6.2068965517241379
        }, {
            "id": 537075106,
            "name": "Sheldon Silver",
            "weight": 5.5172413793103452
        }, {
            "id": 537119681,
            "name": "CONMEBOL (nonprofit)",
            "weight": 4.4827586206896548
        }, {
            "id": 537193547,
            "name": "Bob McDonnell",
            "weight": 4.1379310344827589
        }, {
            "id": 537191128,
            "name": "Robert Menendez",
            "weight": 3.7931034482758621
        }, {
            "id": 537070477,
            "name": "Mahinda Rajapaksa",
            "weight": 3.7931034482758621
        }, {
            "id": 537148866,
            "name": "International Cricket Council",
            "weight": 3.103448275862069
        }, {
            "id": 538083275,
            "name": "Otto Pérez Molina",
            "weight": 2.0689655172413794
        }, {
            "id": 537285743,
            "name": "Manmohan Singh",
            "weight": 1.0344827586206897
        }]
    }, {
        "id": 268485892,
        "name": "Criminal Justice",
        "weight": 1.8064696821173505,
        "topics": [{
            "id": 537106564,
            "name": "U.S. Drug Enforcement Administration",
            "weight": 40.310077519379846
        }, {
            "id": 537278802,
            "name": "Eric Holder",
            "weight": 13.178294573643411
        }, {
            "id": 537177867,
            "name": "Jim Webb",
            "weight": 8.5271317829457356
        }]
    }]
}, {
    "id": 268489916,
    "name": "Design",
    "weight": 4.8649352128256647,
    "color": "#00BBE2",
    "topics": [{
        "id": 268490143,
        "name": "Graphic Design",
        "weight": 52.683497742852367,
        "topics": [{
            "id": 268490225,
            "name": "Design Inspiration",
            "weight": 83.814662012059657,
            "topics": [{
                "id": 268490008,
                "name": "Creative Ads",
                "weight": 16.3195759182128
            }]
        }, {
            "id": 268490005,
            "name": "Illustration",
            "weight": 9.96509044747699,
            "topics": [{
                "id": 538010163,
                "name": "Alice in Wonderland",
                "weight": 7.6433121019108281
            }]
        }, {
            "id": 268490224,
            "name": "Icon Design",
            "weight": 8.9812757854649323
        }, {
            "id": 268490155,
            "name": "Brand Design",
            "weight": 5.2364328784512857
        }, {
            "id": 268490142,
            "name": "Typography",
            "weight": 3.6496350364963503
        }, {
            "id": 268490147,
            "name": "Desktop Publishing",
            "weight": 3.2053316407489687,
            "topics": [{
                "id": 537283275,
                "name": "Macintosh",
                "weight": 52.475247524752476
            }]
        }]
    }, {
        "id": 536889304,
        "name": "Microsoft Corporation",
        "weight": 7.239592041464638
    }, {
        "id": 536899060,
        "name": "Google",
        "weight": 5.8518642367497078
    }, {
        "id": 537284095,
        "name": "iPhone",
        "weight": 5.3669954857047317
    }, {
        "id": 268490502,
        "name": "Tech Design",
        "weight": 3.9959872930948004,
        "topics": [{
            "id": 268490014,
            "name": "Web Design",
            "weight": 62.343096234309627,
            "topics": [{
                "id": 537622522,
                "name": "Cascading Style Sheets",
                "weight": 1.3422818791946309
            }]
        }, {
            "id": 268485850,
            "name": "Computer Graphics",
            "weight": 59.414225941422593,
            "topics": [{
                "id": 268487254,
                "name": "SVG",
                "weight": 57.74647887323944,
                "topics": [{
                    "id": 537604903,
                    "name": "Mozilla Firefox",
                    "weight": 70.731707317073173
                }, {
                    "id": 537580675,
                    "name": "Google Chrome",
                    "weight": 50.0
                }, {
                    "id": 537587858,
                    "name": "Adobe Illustrator",
                    "weight": 3.6585365853658538
                }, {
                    "id": 537621544,
                    "name": "Inkscape",
                    "weight": 1.2195121951219512
                }]
            }, {
                "id": 537104454,
                "name": "Pixar Animation Studios",
                "weight": 50.0
            }, {
                "id": 268487450,
                "name": "Widgets",
                "weight": 23.239436619718308
            }, {
                "id": 537719861,
                "name": "OpenGL",
                "weight": 9.8591549295774641
            }]
        }, {
            "id": 268490494,
            "name": "UX Design",
            "weight": 42.25941422594142
        }]
    }, {
        "id": 537605538,
        "name": "iPad",
        "weight": 3.4776793178398262
    }, {
        "id": 537601628,
        "name": "iPhone OS",
        "weight": 3.3439224209998328
    }, {
        "id": 538279808,
        "name": "Apple Watch",
        "weight": 3.2770439725798362
    }, {
        "id": 537606170,
        "name": "Microsoft Windows",
        "weight": 2.9259321183748539
    }, {
        "id": 537122604,
        "name": "LEGO Education WeDo",
        "weight": 2.1735495736498915
    }, {
        "id": 268490525,
        "name": "Landscaping",
        "weight": 2.0230730647048989
    }, {
        "id": 537111468,
        "name": "HTC (telecom)",
        "weight": 1.5883631499749207
    }, {
        "id": 538300437,
        "name": "Google Apps for Business",
        "weight": 1.5382043136599231
    }, {
        "id": 537101550,
        "name": "NIKE (biz)",
        "weight": 1.4044474168199297
    }, {
        "id": 538269409,
        "name": "Internet of Things",
        "weight": 1.3710081926099313
    }, {
        "id": 537104454,
        "name": "Pixar Animation Studios",
        "weight": 1.1870924594549406
    }, {
        "id": 537618110,
        "name": "Mac OS X",
        "weight": 1.1703728473499415
    }, {
        "id": 536920872,
        "name": "Lenovo",
        "weight": 1.1536532352449422
    }, {
        "id": 536896381,
        "name": "Nvidia",
        "weight": 1.0700551747199465
    }]
}, {
    "id": 268435472,
    "name": "Sports",
    "weight": 4.6062745544610832,
    "color": "#6F4100",
    "topics": [{
        "id": 268458479,
        "name": "American Football",
        "weight": 49.2318559067632,
        "topics": [{
            "id": 268436974,
            "name": "NFL Football",
            "weight": 73.6728837876614,
            "topics": [{
                "id": 268487241,
                "name": "Super Bowl",
                "weight": 81.742940603700092,
                "topics": [{
                    "id": 537193636,
                    "name": "Missy Elliott",
                    "weight": 17.629541393686718
                }, {
                    "id": 537630363,
                    "name": "Bruno Mars",
                    "weight": 15.425848719475878
                }, {
                    "id": 537632745,
                    "name": "Carolina Panthers",
                    "weight": 12.507444907683144
                }, {
                    "id": 537233006,
                    "name": "New England Patriots",
                    "weight": 4.8838594401429418
                }, {
                    "id": 537195804,
                    "name": "Peyton Manning",
                    "weight": 4.5860631328171531
                }, {
                    "id": 537192691,
                    "name": "Tom Brady",
                    "weight": 3.8713519952352593
                }, {
                    "id": 537233204,
                    "name": "Pittsburgh Steelers",
                    "weight": 3.3948779035139962
                }, {
                    "id": 537192999,
                    "name": "Katy Perry",
                    "weight": 3.2162001191185228
                }, {
                    "id": 537233201,
                    "name": "Green Bay Packers",
                    "weight": 2.6206075044669448
                }, {
                    "id": 537630852,
                    "name": "Seattle Seahawks",
                    "weight": 2.3823704586063132
                }, {
                    "id": 537113586,
                    "name": "New York Jets",
                    "weight": 2.20369267421084
                }, {
                    "id": 537232481,
                    "name": "Oakland Raiders",
                    "weight": 1.8463371054198927
                }, {
                    "id": 537197252,
                    "name": "Bill Belichick",
                    "weight": 1.4889815366289458
                }, {
                    "id": 537228488,
                    "name": "Tom Coughlin",
                    "weight": 1.4889815366289458
                }, {
                    "id": 537623012,
                    "name": "Denver Broncos",
                    "weight": 1.4294222751637879
                }, {
                    "id": 537192842,
                    "name": "Aaron Rodgers",
                    "weight": 1.36986301369863
                }, {
                    "id": 537628265,
                    "name": "Indianapolis Colts",
                    "weight": 1.36986301369863
                }, {
                    "id": 537283269,
                    "name": "Doritos",
                    "weight": 1.2507444907683145
                }, {
                    "id": 537218140,
                    "name": "Marshawn Lynch",
                    "weight": 1.2507444907683145
                }, {
                    "id": 537627913,
                    "name": "Cincinnati Bengals",
                    "weight": 1.2507444907683145
                }, {
                    "id": 537636109,
                    "name": "Atlanta Falcons",
                    "weight": 1.2507444907683145
                }, {
                    "id": 537155151,
                    "name": "The Go Daddy Group, Inc.",
                    "weight": 1.1911852293031566
                }, {
                    "id": 537637726,
                    "name": "Rob Gronkowski",
                    "weight": 1.1316259678379987
                }, {
                    "id": 537193261,
                    "name": "Eli Manning",
                    "weight": 1.0720667063728411
                }, {
                    "id": 537220950,
                    "name": "Ken Stabler",
                    "weight": 1.0720667063728411
                }, {
                    "id": 537203321,
                    "name": "Darren Sharper",
                    "weight": 1.0125074449076832
                }, {
                    "id": 537468436,
                    "name": "Arizona Cardinals",
                    "weight": 1.0125074449076832
                }]
            }, {
                "id": 537632745,
                "name": "Carolina Panthers",
                "weight": 10.223953261927946
            }, {
                "id": 537233006,
                "name": "New England Patriots",
                "weight": 3.9922103213242455
            }, {
                "id": 537195804,
                "name": "Peyton Manning",
                "weight": 3.7487828627069133
            }, {
                "id": 537192691,
                "name": "Tom Brady",
                "weight": 3.1645569620253164
            }, {
                "id": 537233204,
                "name": "Pittsburgh Steelers",
                "weight": 2.7750730282375851
            }, {
                "id": 537233201,
                "name": "Green Bay Packers",
                "weight": 2.1421616358325219
            }, {
                "id": 537074799,
                "name": "Washington Redskins",
                "weight": 2.0934761441090557
            }, {
                "id": 537630852,
                "name": "Seattle Seahawks",
                "weight": 1.9474196689386563
            }, {
                "id": 537113586,
                "name": "New York Jets",
                "weight": 1.801363193768257
            }, {
                "id": 537358172,
                "name": "Minnesota Vikings",
                "weight": 1.801363193768257
            }, {
                "id": 537635903,
                "name": "San Diego Chargers",
                "weight": 1.7039922103213243
            }, {
                "id": 537232481,
                "name": "Oakland Raiders",
                "weight": 1.5092502434274586
            }, {
                "id": 537628089,
                "name": "Buffalo Bills",
                "weight": 1.5092502434274586
            }, {
                "id": 537397625,
                "name": "Roger Goodell",
                "weight": 1.4118792599805259
            }, {
                "id": 537197252,
                "name": "Bill Belichick",
                "weight": 1.2171372930866602
            }, {
                "id": 537623012,
                "name": "Denver Broncos",
                "weight": 1.1684518013631937
            }, {
                "id": 537192842,
                "name": "Aaron Rodgers",
                "weight": 1.1197663096397275
            }, {
                "id": 537628265,
                "name": "Indianapolis Colts",
                "weight": 1.1197663096397275
            }, {
                "id": 537218140,
                "name": "Marshawn Lynch",
                "weight": 1.0223953261927945
            }, {
                "id": 537627913,
                "name": "Cincinnati Bengals",
                "weight": 1.0223953261927945
            }, {
                "id": 537628088,
                "name": "Kansas City Chiefs",
                "weight": 1.0223953261927945
            }, {
                "id": 537636109,
                "name": "Atlanta Falcons",
                "weight": 1.0223953261927945
            }]
        }, {
            "id": 268458487,
            "name": "College Football",
            "weight": 8.0344332855093263,
            "topics": [{
                "id": 537084735,
                "name": "National Collegiate Athletic Association",
                "weight": 54.464285714285715
            }, {
                "id": 537190861,
                "name": "Jim Harbaugh",
                "weight": 10.714285714285714
            }, {
                "id": 537191979,
                "name": "Urban Meyer",
                "weight": 5.3571428571428568
            }, {
                "id": 537628001,
                "name": "Southeastern Conference",
                "weight": 4.9107142857142856
            }, {
                "id": 537649567,
                "name": "Charlie Strong",
                "weight": 4.4642857142857144
            }, {
                "id": 537196202,
                "name": "Nick Saban",
                "weight": 3.5714285714285716
            }, {
                "id": 537632176,
                "name": "Atlantic Coast Conference",
                "weight": 3.125
            }, {
                "id": 537195495,
                "name": "Mike Riley",
                "weight": 2.6785714285714284
            }, {
                "id": 537251613,
                "name": "LSU Tigers football",
                "weight": 2.6785714285714284
            }, {
                "id": 537655600,
                "name": "Pat Haden",
                "weight": 2.2321428571428572
            }, {
                "id": 537262683,
                "name": "Steve Sarkisian",
                "weight": 2.2321428571428572
            }, {
                "id": 537643722,
                "name": "Dabo Swinney",
                "weight": 1.7857142857142858
            }, {
                "id": 537648097,
                "name": "Big Ten Conference",
                "weight": 1.7857142857142858
            }, {
                "id": 537643734,
                "name": "Steve Spurrier",
                "weight": 1.3392857142857142
            }, {
                "id": 537210577,
                "name": "Mark Richt",
                "weight": 1.3392857142857142
            }, {
                "id": 537249415,
                "name": "Les Miles",
                "weight": 1.3392857142857142
            }]
        }, {
            "id": 537632745,
            "name": "Carolina Panthers",
            "weight": 7.5322812051649928
        }, {
            "id": 537233006,
            "name": "New England Patriots",
            "weight": 2.9411764705882355
        }, {
            "id": 537195804,
            "name": "Peyton Manning",
            "weight": 2.7618364418938306
        }, {
            "id": 537233204,
            "name": "Pittsburgh Steelers",
            "weight": 2.0444763271162123
        }, {
            "id": 537626445,
            "name": "Cam Newton",
            "weight": 1.757532281205165
        }, {
            "id": 537233201,
            "name": "Green Bay Packers",
            "weight": 1.5781922525107603
        }, {
            "id": 537074799,
            "name": "Washington Redskins",
            "weight": 1.5423242467718794
        }, {
            "id": 537630852,
            "name": "Seattle Seahawks",
            "weight": 1.4347202295552368
        }, {
            "id": 537113586,
            "name": "New York Jets",
            "weight": 1.327116212338594
        }, {
            "id": 537358172,
            "name": "Minnesota Vikings",
            "weight": 1.327116212338594
        }, {
            "id": 537635903,
            "name": "San Diego Chargers",
            "weight": 1.2553802008608321
        }, {
            "id": 537232481,
            "name": "Oakland Raiders",
            "weight": 1.1119081779053084
        }, {
            "id": 537628089,
            "name": "Buffalo Bills",
            "weight": 1.1119081779053084
        }, {
            "id": 268486094,
            "name": "Fantasy Football",
            "weight": 1.0760401721664274
        }]
    }, {
        "id": 268458461,
        "name": "College Sports",
        "weight": 19.512625816704926,
        "topics": [{
            "id": 537084735,
            "name": "National Collegiate Athletic Association",
            "weight": 11.040723981900452
        }]
    }, {
        "id": 268486610,
        "name": "Martial Arts",
        "weight": 15.186297015716052,
        "topics": [{
            "id": 268458459,
            "name": "Boxing",
            "weight": 88.488372093023258,
            "topics": [{
                "id": 537189013,
                "name": "Muhammad Ali",
                "weight": 29.829172141918527
            }, {
                "id": 537201343,
                "name": "Sonny Liston",
                "weight": 8.015768725361367
            }, {
                "id": 537341147,
                "name": "Manny Pacquiáo",
                "weight": 6.3074901445466489
            }, {
                "id": 537956603,
                "name": "Floyd Mayweather Sr.",
                "weight": 3.54796320630749
            }, {
                "id": 537201927,
                "name": "Floyd Mayweather Jr.",
                "weight": 3.2851511169513796
            }, {
                "id": 537957863,
                "name": "Tyson Fury",
                "weight": 2.8909329829172141
            }, {
                "id": 537193583,
                "name": "Mike Tyson",
                "weight": 2.759526938239159
            }, {
                "id": 537200614,
                "name": "David Haye",
                "weight": 1.971090670170828
            }, {
                "id": 537189112,
                "name": "Miguel Cotto",
                "weight": 1.5768725361366622
            }, {
                "id": 537251371,
                "name": "Wladimir Klitschko",
                "weight": 1.0512483574244416
            }]
        }, {
            "id": 268486674,
            "name": "Mixed Martial Arts",
            "weight": 10.930232558139535,
            "topics": [{
                "id": 538571921,
                "name": "Ronda Rousey",
                "weight": 73.40425531914893
            }, {
                "id": 537705715,
                "name": "Jose Aldo",
                "weight": 23.404255319148938
            }, {
                "id": 537118121,
                "name": "Art Davie & Rorion Gracie - WOW Productions",
                "weight": 20.212765957446809
            }, {
                "id": 537129179,
                "name": "Bellator Fighting Championships",
                "weight": 10.638297872340425
            }, {
                "id": 537955676,
                "name": "Kimbo Slice",
                "weight": 8.51063829787234
            }, {
                "id": 537196777,
                "name": "Brock Lesnar",
                "weight": 8.51063829787234
            }, {
                "id": 537730666,
                "name": "Dan Henderson",
                "weight": 6.3829787234042552
            }, {
                "id": 537926051,
                "name": "Chad Mendes",
                "weight": 5.3191489361702127
            }, {
                "id": 537683280,
                "name": "Michael Bisping",
                "weight": 4.25531914893617
            }, {
                "id": 537945997,
                "name": "T.J. Dillashaw",
                "weight": 4.25531914893617
            }, {
                "id": 537957647,
                "name": "Kurt Angle",
                "weight": 4.25531914893617
            }, {
                "id": 538029234,
                "name": "Robbie Lawler",
                "weight": 4.25531914893617
            }, {
                "id": 537238679,
                "name": "Jon Jones",
                "weight": 3.1914893617021276
            }, {
                "id": 537142368,
                "name": "Zuffa, LLC",
                "weight": 2.1276595744680851
            }, {
                "id": 537669061,
                "name": "Anderson Silva",
                "weight": 2.1276595744680851
            }, {
                "id": 538042660,
                "name": "Cain Velasquez",
                "weight": 2.1276595744680851
            }, {
                "id": 537219834,
                "name": "Gina Carano",
                "weight": 2.1276595744680851
            }, {
                "id": 538294669,
                "name": "Luke Rockhold",
                "weight": 2.1276595744680851
            }, {
                "id": 538086675,
                "name": "Chael Sonnen",
                "weight": 1.0638297872340425
            }, {
                "id": 537963938,
                "name": "Nick Díaz",
                "weight": 1.0638297872340425
            }, {
                "id": 537971140,
                "name": "Gabriel Gonzaga",
                "weight": 1.0638297872340425
            }, {
                "id": 537847947,
                "name": "Quinton Jackson",
                "weight": 1.0638297872340425
            }, {
                "id": 537717892,
                "name": "Chris Weidman",
                "weight": 1.0638297872340425
            }, {
                "id": 538093465,
                "name": "Mark Hunt",
                "weight": 1.0638297872340425
            }, {
                "id": 537954050,
                "name": "Miesha Tate",
                "weight": 1.0638297872340425
            }, {
                "id": 537997353,
                "name": "Josh Thomson",
                "weight": 1.0638297872340425
            }, {
                "id": 537499453,
                "name": "Michael Chandler",
                "weight": 1.0638297872340425
            }]
        }, {
            "id": 268490213,
            "name": "Judo",
            "weight": 8.720930232558139,
            "topics": [{
                "id": 538571921,
                "name": "Ronda Rousey",
                "weight": 92.0
            }, {
                "id": 537148903,
                "name": "International Judo Federation",
                "weight": 2.6666666666666665
            }, {
                "id": 537106236,
                "name": "The Jitsu Foundation",
                "weight": 2.6666666666666665
            }]
        }, {
            "id": 538571921,
            "name": "Ronda Rousey",
            "weight": 8.0232558139534884
        }, {
            "id": 268487269,
            "name": "Tai Chi",
            "weight": 4.1860465116279073,
            "topics": [{
                "id": 537122339,
                "name": "Keanu Reeves",
                "weight": 55.555555555555557
            }]
        }, {
            "id": 538287001,
            "name": "Kung Fu Panda 3",
            "weight": 3.4883720930232558
        }, {
            "id": 537118121,
            "name": "Art Davie & Rorion Gracie - WOW Productions",
            "weight": 2.2093023255813953
        }, {
            "id": 537129179,
            "name": "Bellator Fighting Championships",
            "weight": 1.1627906976744187
        }]
    }, {
        "id": 268436979,
        "name": "Soccer",
        "weight": 9.9417269998234143,
        "topics": [{
            "id": 268490325,
            "name": "Premier League (England)",
            "weight": 31.438721136767317
        }, {
            "id": 537232566,
            "name": "Chelsea F.C.",
            "weight": 17.761989342806395
        }, {
            "id": 538278671,
            "name": "Premier League",
            "weight": 13.854351687388988
        }, {
            "id": 537251011,
            "name": "Arsenal F.C.",
            "weight": 13.49911190053286
        }, {
            "id": 268490335,
            "name": "Major League Soccer",
            "weight": 13.143872113676732,
            "topics": [{
                "id": 537639832,
                "name": "Los Angeles Galaxy",
                "weight": 27.027027027027028
            }, {
                "id": 537194943,
                "name": "Steven Gerrard",
                "weight": 25.675675675675677
            }, {
                "id": 537194934,
                "name": "Frank Lampard",
                "weight": 18.918918918918919
            }, {
                "id": 537194941,
                "name": "Thierry Henry",
                "weight": 17.567567567567568
            }, {
                "id": 537427908,
                "name": "Jozy Altidore",
                "weight": 10.810810810810811
            }, {
                "id": 537197727,
                "name": "Tim Cahill",
                "weight": 10.810810810810811
            }, {
                "id": 537271726,
                "name": "Didier Drogba",
                "weight": 9.45945945945946
            }, {
                "id": 537193166,
                "name": "Obafemi Martins",
                "weight": 9.45945945945946
            }, {
                "id": 537663711,
                "name": "D.C. United",
                "weight": 8.1081081081081088
            }, {
                "id": 537665593,
                "name": "Portland Timbers",
                "weight": 8.1081081081081088
            }, {
                "id": 537958574,
                "name": "Portland Timbers",
                "weight": 8.1081081081081088
            }, {
                "id": 537193823,
                "name": "Clint Dempsey",
                "weight": 8.1081081081081088
            }, {
                "id": 537686695,
                "name": "Columbus Crew",
                "weight": 6.756756756756757
            }, {
                "id": 537653412,
                "name": "New England Revolution",
                "weight": 6.756756756756757
            }, {
                "id": 537664235,
                "name": "Toronto FC",
                "weight": 5.4054054054054053
            }, {
                "id": 537685569,
                "name": "Red Bull New York",
                "weight": 5.4054054054054053
            }, {
                "id": 537644306,
                "name": "Kansas City Wizards",
                "weight": 5.4054054054054053
            }, {
                "id": 537664716,
                "name": "Real Salt Lake",
                "weight": 4.0540540540540544
            }, {
                "id": 537551127,
                "name": "Kei Kamara",
                "weight": 4.0540540540540544
            }, {
                "id": 537084269,
                "name": "David Villa",
                "weight": 4.0540540540540544
            }, {
                "id": 538004234,
                "name": "United Soccer League",
                "weight": 4.0540540540540544
            }, {
                "id": 537803639,
                "name": "Sebastian Giovinco",
                "weight": 4.0540540540540544
            }, {
                "id": 537171097,
                "name": "Benny Feilhaber",
                "weight": 4.0540540540540544
            }, {
                "id": 537761481,
                "name": "Montreal Impact",
                "weight": 4.0540540540540544
            }, {
                "id": 537194424,
                "name": "Robbie Keane",
                "weight": 4.0540540540540544
            }, {
                "id": 537638306,
                "name": "Landon Donovan",
                "weight": 4.0540540540540544
            }, {
                "id": 537658003,
                "name": "Vancouver Whitecaps",
                "weight": 2.7027027027027026
            }, {
                "id": 537635521,
                "name": "Houston Dynamo",
                "weight": 2.7027027027027026
            }, {
                "id": 537206786,
                "name": "Lamar Hunt",
                "weight": 2.7027027027027026
            }, {
                "id": 537657440,
                "name": "Colorado Rapids",
                "weight": 1.3513513513513513
            }, {
                "id": 537266582,
                "name": "Bradley Wright-Phillips",
                "weight": 1.3513513513513513
            }, {
                "id": 537660414,
                "name": "Seattle Sounders",
                "weight": 1.3513513513513513
            }, {
                "id": 537666928,
                "name": "San Jose Earthquakes",
                "weight": 1.3513513513513513
            }, {
                "id": 537690977,
                "name": "Javier Morales",
                "weight": 1.3513513513513513
            }, {
                "id": 537685988,
                "name": "Philadelphia Major League Soccer team",
                "weight": 1.3513513513513513
            }, {
                "id": 537698623,
                "name": "Seattle Major League Soccer team",
                "weight": 1.3513513513513513
            }, {
                "id": 537212134,
                "name": "DaMarcus Beasley",
                "weight": 1.3513513513513513
            }, {
                "id": 538002251,
                "name": "North American Soccer League",
                "weight": 1.3513513513513513
            }, {
                "id": 538003941,
                "name": "Montreal Impact",
                "weight": 1.3513513513513513
            }, {
                "id": 537323660,
                "name": "Nick Rimando",
                "weight": 1.3513513513513513
            }, {
                "id": 537983220,
                "name": "Jason Kreis",
                "weight": 1.3513513513513513
            }, {
                "id": 537654897,
                "name": "Chris Wondolowski",
                "weight": 1.3513513513513513
            }]
        }, {
            "id": 537084843,
            "name": "Manchester United",
            "weight": 9.946714031971581
        }, {
            "id": 537628045,
            "name": "Real Madrid",
            "weight": 9.0586145648312613
        }, {
            "id": 537466833,
            "name": "Lionel Messi",
            "weight": 8.1705150976909415
        }, {
            "id": 537506771,
            "name": "José Mourinho",
            "weight": 8.1705150976909415
        }, {
            "id": 537634869,
            "name": "West Ham United F.C.",
            "weight": 7.63765541740675
        }, {
            "id": 537259591,
            "name": "Cristiano Ronaldo",
            "weight": 7.2824156305506218
        }, {
            "id": 537277350,
            "name": "Manchester City Football Club",
            "weight": 7.1047957371225579
        }, {
            "id": 537075244,
            "name": "Arsene Wenger",
            "weight": 7.1047957371225579
        }, {
            "id": 268490010,
            "name": "Football Euro 2016",
            "weight": 6.9271758436944939
        }, {
            "id": 268490310,
            "name": "Scottish Premier League",
            "weight": 6.3943161634103021,
            "topics": [{
                "id": 537630511,
                "name": "Rangers F.C.",
                "weight": 33.333333333333336
            }, {
                "id": 537191792,
                "name": "Gordon Strachan",
                "weight": 11.111111111111111
            }, {
                "id": 537468232,
                "name": "St Johnstone F.C.",
                "weight": 8.3333333333333339
            }, {
                "id": 537661220,
                "name": "Inverness Caledonian Thistle F.C.",
                "weight": 5.5555555555555554
            }, {
                "id": 537197491,
                "name": "Anthony Stokes",
                "weight": 5.5555555555555554
            }, {
                "id": 537964038,
                "name": "Kris Boyd",
                "weight": 2.7777777777777777
            }, {
                "id": 537192977,
                "name": "Scott McDonald",
                "weight": 2.7777777777777777
            }, {
                "id": 537983531,
                "name": "Scottish Football League",
                "weight": 2.7777777777777777
            }, {
                "id": 538025791,
                "name": "Efe Ambrose",
                "weight": 2.7777777777777777
            }, {
                "id": 537653240,
                "name": "Celtic F.C.",
                "weight": 2.7777777777777777
            }, {
                "id": 537646722,
                "name": "Motherwell F.C.",
                "weight": 2.7777777777777777
            }, {
                "id": 537655969,
                "name": "Hibernian F.C.",
                "weight": 2.7777777777777777
            }]
        }, {
            "id": 537683565,
            "name": "Louis van Gaal",
            "weight": 6.2166962699822381
        }, {
            "id": 537116548,
            "name": "UEFA (soccer)",
            "weight": 6.2166962699822381
        }, {
            "id": 537233199,
            "name": "A.C. Milan",
            "weight": 5.6838365896980463
        }, {
            "id": 537189387,
            "name": "Wayne Rooney",
            "weight": 5.1509769094138544
        }, {
            "id": 537199329,
            "name": "Gareth Bale",
            "weight": 4.9733570159857905
        }, {
            "id": 538577290,
            "name": "Premier League",
            "weight": 4.4404973357015987
        }, {
            "id": 537653674,
            "name": "Stoke City F.C.",
            "weight": 4.4404973357015987
        }, {
            "id": 537191895,
            "name": "John Terry",
            "weight": 4.2628774422735347
        }, {
            "id": 537368663,
            "name": "Juventus F.C.",
            "weight": 4.2628774422735347
        }, {
            "id": 537631935,
            "name": "FC Barcelona",
            "weight": 4.0852575488454708
        }, {
            "id": 537636743,
            "name": "Mario Balotelli Barwuah",
            "weight": 3.7300177619893429
        }, {
            "id": 537260605,
            "name": "Liverpool Football Club",
            "weight": 3.7300177619893429
        }, {
            "id": 537639832,
            "name": "Los Angeles Galaxy",
            "weight": 3.5523978685612789
        }, {
            "id": 538039225,
            "name": "Rafael Benítez",
            "weight": 3.5523978685612789
        }, {
            "id": 537194943,
            "name": "Steven Gerrard",
            "weight": 3.374777975133215
        }, {
            "id": 537725516,
            "name": "David de Gea",
            "weight": 3.374777975133215
        }, {
            "id": 537958245,
            "name": "Eden Hazard",
            "weight": 3.197158081705151
        }, {
            "id": 537657171,
            "name": "Norwich City F.C.",
            "weight": 3.197158081705151
        }, {
            "id": 537663111,
            "name": "Atlético de Madrid",
            "weight": 3.0195381882770871
        }, {
            "id": 537543961,
            "name": "Sergio Agüero",
            "weight": 3.0195381882770871
        }, {
            "id": 537964944,
            "name": "Karim Benzema",
            "weight": 3.0195381882770871
        }, {
            "id": 537084177,
            "name": "Carlo Ancelotti",
            "weight": 2.6642984014209592
        }, {
            "id": 537547804,
            "name": "Alexis Sánchez",
            "weight": 2.4866785079928952
        }, {
            "id": 537075573,
            "name": "Sam Allardyce",
            "weight": 2.4866785079928952
        }, {
            "id": 537074723,
            "name": "Alex Ferguson",
            "weight": 2.3090586145648313
        }, {
            "id": 537773893,
            "name": "Robert Lewandowski",
            "weight": 2.3090586145648313
        }, {
            "id": 537442402,
            "name": "Bayer Leverkusen",
            "weight": 1.9538188277087034
        }, {
            "id": 537202537,
            "name": "Theo Walcott",
            "weight": 1.9538188277087034
        }, {
            "id": 538067823,
            "name": "Paul Pogba",
            "weight": 1.7761989342806395
        }, {
            "id": 537946804,
            "name": "Kevin De Bruyne",
            "weight": 1.7761989342806395
        }, {
            "id": 537310587,
            "name": "Steve McClaren",
            "weight": 1.7761989342806395
        }, {
            "id": 538334997,
            "name": "Juventus",
            "weight": 1.5985790408525755
        }, {
            "id": 538087161,
            "name": "Petr Čech",
            "weight": 1.4209591474245116
        }, {
            "id": 537995797,
            "name": "Raheem Sterling",
            "weight": 1.4209591474245116
        }, {
            "id": 537271726,
            "name": "Didier Drogba",
            "weight": 1.2433392539964476
        }]
    }, {
        "id": 268458480,
        "name": "Baseball",
        "weight": 8.5467066925657775,
        "topics": [{
            "id": 268436976,
            "name": "MLB Baseball",
            "weight": 96.280991735537185,
            "topics": [{
                "id": 268487472,
                "name": "World Series",
                "weight": 73.605150214592271,
                "topics": [{
                    "id": 537638066,
                    "name": "Florida Marlins",
                    "weight": 56.268221574344025
                }, {
                    "id": 537074732,
                    "name": "New York Yankees",
                    "weight": 19.533527696793
                }, {
                    "id": 537232568,
                    "name": "New York Mets",
                    "weight": 13.119533527696793
                }, {
                    "id": 537467748,
                    "name": "Boston Red Sox",
                    "weight": 11.078717201166182
                }, {
                    "id": 537339333,
                    "name": "Toronto Blue Jays",
                    "weight": 11.078717201166182
                }, {
                    "id": 537658624,
                    "name": "Washington Nationals",
                    "weight": 9.3294460641399422
                }, {
                    "id": 537657324,
                    "name": "Los Angeles Dodgers",
                    "weight": 8.7463556851311957
                }, {
                    "id": 537233205,
                    "name": "Philadelphia Phillies",
                    "weight": 7.8717201166180759
                }, {
                    "id": 537074949,
                    "name": "American League",
                    "weight": 6.7055393586005829
                }, {
                    "id": 537188605,
                    "name": "Derek Jeter",
                    "weight": 5.5393586005830908
                }, {
                    "id": 537606276,
                    "name": "Astros",
                    "weight": 4.6647230320699711
                }, {
                    "id": 537149364,
                    "name": "Johnny Cueto",
                    "weight": 3.4985422740524781
                }, {
                    "id": 537686598,
                    "name": "National Baseball Hall of Fame and Museum",
                    "weight": 3.4985422740524781
                }, {
                    "id": 537357293,
                    "name": "Cy Young",
                    "weight": 3.2069970845481048
                }, {
                    "id": 537196045,
                    "name": "Pablo Sandoval",
                    "weight": 2.9154518950437316
                }, {
                    "id": 537199597,
                    "name": "Willie Mays",
                    "weight": 2.6239067055393588
                }, {
                    "id": 537151149,
                    "name": "National League West",
                    "weight": 2.6239067055393588
                }, {
                    "id": 537202400,
                    "name": "Pete Rose",
                    "weight": 2.6239067055393588
                }, {
                    "id": 537246615,
                    "name": "C.C. Sabathia",
                    "weight": 2.6239067055393588
                }, {
                    "id": 537651182,
                    "name": "Little League",
                    "weight": 2.6239067055393588
                }, {
                    "id": 537196845,
                    "name": "Jonathan Papelbon",
                    "weight": 2.3323615160349855
                }, {
                    "id": 537228758,
                    "name": "Alex Gordon",
                    "weight": 2.3323615160349855
                }, {
                    "id": 537120184,
                    "name": "Dusty Baker",
                    "weight": 2.3323615160349855
                }, {
                    "id": 537084288,
                    "name": "Joe Maddon",
                    "weight": 2.0408163265306123
                }, {
                    "id": 537232570,
                    "name": "San Francisco Giants",
                    "weight": 2.0408163265306123
                }, {
                    "id": 537254386,
                    "name": "Don Mattingly",
                    "weight": 2.0408163265306123
                }, {
                    "id": 537279919,
                    "name": "Ned Yost",
                    "weight": 1.749271137026239
                }, {
                    "id": 537158294,
                    "name": "National League",
                    "weight": 1.4577259475218658
                }, {
                    "id": 537200478,
                    "name": "Cole Hamels",
                    "weight": 1.4577259475218658
                }, {
                    "id": 537657186,
                    "name": "Cleveland Indians",
                    "weight": 1.4577259475218658
                }, {
                    "id": 537075354,
                    "name": "Bruce Bochy",
                    "weight": 1.1661807580174928
                }]
            }, {
                "id": 268490596,
                "name": "Grapefruit League",
                "weight": 64.377682403433482
            }, {
                "id": 537638066,
                "name": "Florida Marlins",
                "weight": 41.416309012875537
            }, {
                "id": 268490597,
                "name": "Cactus League",
                "weight": 17.596566523605151
            }, {
                "id": 537232568,
                "name": "New York Mets",
                "weight": 9.6566523605150216
            }, {
                "id": 537339333,
                "name": "Toronto Blue Jays",
                "weight": 8.15450643776824
            }, {
                "id": 537658624,
                "name": "Washington Nationals",
                "weight": 6.866952789699571
            }, {
                "id": 537657324,
                "name": "Los Angeles Dodgers",
                "weight": 6.437768240343348
            }, {
                "id": 537653381,
                "name": "St. Louis Cardinals",
                "weight": 6.0085836909871242
            }, {
                "id": 537233205,
                "name": "Philadelphia Phillies",
                "weight": 5.7939914163090132
            }, {
                "id": 537232479,
                "name": "Houston Astros",
                "weight": 5.5793991416309012
            }, {
                "id": 537664859,
                "name": "Atlanta Braves",
                "weight": 4.9356223175965663
            }, {
                "id": 537074949,
                "name": "American League",
                "weight": 4.9356223175965663
            }, {
                "id": 537137217,
                "name": "Oakland American League Baseball Club",
                "weight": 3.648068669527897
            }, {
                "id": 537606276,
                "name": "Astros",
                "weight": 3.4334763948497855
            }, {
                "id": 537232483,
                "name": "San Diego Padres",
                "weight": 3.4334763948497855
            }, {
                "id": 537511270,
                "name": "Milwaukee Brewers",
                "weight": 3.4334763948497855
            }, {
                "id": 537659122,
                "name": "Chicago White Sox",
                "weight": 2.7896995708154506
            }, {
                "id": 537201322,
                "name": "Daniel Murphy",
                "weight": 2.7896995708154506
            }, {
                "id": 537149364,
                "name": "Johnny Cueto",
                "weight": 2.5751072961373391
            }, {
                "id": 537955539,
                "name": "Josh Donaldson",
                "weight": 2.5751072961373391
            }, {
                "id": 537210119,
                "name": "David Price",
                "weight": 2.3605150214592276
            }, {
                "id": 537728637,
                "name": "Todd Frazier",
                "weight": 2.3605150214592276
            }, {
                "id": 537357293,
                "name": "Cy Young",
                "weight": 2.3605150214592276
            }, {
                "id": 537481616,
                "name": "Tampa Bay Rays",
                "weight": 2.3605150214592276
            }, {
                "id": 537123471,
                "name": "National League East",
                "weight": 2.1459227467811157
            }, {
                "id": 537196045,
                "name": "Pablo Sandoval",
                "weight": 2.1459227467811157
            }, {
                "id": 537228566,
                "name": "Zack Greinke",
                "weight": 2.1459227467811157
            }, {
                "id": 537229745,
                "name": "Clayton Kershaw",
                "weight": 2.1459227467811157
            }, {
                "id": 537113372,
                "name": "National League Central",
                "weight": 2.1459227467811157
            }, {
                "id": 537151149,
                "name": "National League West",
                "weight": 1.9313304721030042
            }, {
                "id": 537498495,
                "name": "Detroit Tigers",
                "weight": 1.9313304721030042
            }, {
                "id": 537640456,
                "name": "Arizona Diamondbacks",
                "weight": 1.9313304721030042
            }, {
                "id": 537194236,
                "name": "Justin Verlander",
                "weight": 1.7167381974248928
            }, {
                "id": 537196845,
                "name": "Jonathan Papelbon",
                "weight": 1.7167381974248928
            }, {
                "id": 537213317,
                "name": "Chase Utley",
                "weight": 1.7167381974248928
            }, {
                "id": 537629431,
                "name": "Pittsburgh Pirates",
                "weight": 1.502145922746781
            }, {
                "id": 537232570,
                "name": "San Francisco Giants",
                "weight": 1.502145922746781
            }, {
                "id": 537254386,
                "name": "Don Mattingly",
                "weight": 1.502145922746781
            }, {
                "id": 538042439,
                "name": "Wilmer Flores",
                "weight": 1.502145922746781
            }, {
                "id": 537651508,
                "name": "Cincinnati Reds",
                "weight": 1.502145922746781
            }, {
                "id": 537701546,
                "name": "Anthony Rizzo",
                "weight": 1.2875536480686696
            }, {
                "id": 537216703,
                "name": "Max Scherzer",
                "weight": 1.2875536480686696
            }, {
                "id": 537279919,
                "name": "Ned Yost",
                "weight": 1.2875536480686696
            }, {
                "id": 537227929,
                "name": "Nelson Cruz",
                "weight": 1.2875536480686696
            }, {
                "id": 537177817,
                "name": "Miguel Cabrera",
                "weight": 1.0729613733905579
            }, {
                "id": 537325992,
                "name": "Baltimore Orioles",
                "weight": 1.0729613733905579
            }, {
                "id": 537200478,
                "name": "Cole Hamels",
                "weight": 1.0729613733905579
            }, {
                "id": 537201323,
                "name": "Mark Teixeira",
                "weight": 1.0729613733905579
            }, {
                "id": 537657186,
                "name": "Cleveland Indians",
                "weight": 1.0729613733905579
            }]
        }, {
            "id": 537638066,
            "name": "Florida Marlins",
            "weight": 39.876033057851238
        }, {
            "id": 537232568,
            "name": "New York Mets",
            "weight": 9.2975206611570247
        }, {
            "id": 537339333,
            "name": "Toronto Blue Jays",
            "weight": 7.8512396694214877
        }, {
            "id": 537658624,
            "name": "Washington Nationals",
            "weight": 6.6115702479338845
        }, {
            "id": 537657324,
            "name": "Los Angeles Dodgers",
            "weight": 6.1983471074380168
        }, {
            "id": 537653381,
            "name": "St. Louis Cardinals",
            "weight": 5.785123966942149
        }, {
            "id": 537233205,
            "name": "Philadelphia Phillies",
            "weight": 5.5785123966942152
        }, {
            "id": 537232479,
            "name": "Houston Astros",
            "weight": 5.3719008264462813
        }, {
            "id": 537664859,
            "name": "Atlanta Braves",
            "weight": 4.75206611570248
        }, {
            "id": 537074949,
            "name": "American League",
            "weight": 4.75206611570248
        }, {
            "id": 537137217,
            "name": "Oakland American League Baseball Club",
            "weight": 3.5123966942148761
        }, {
            "id": 537606276,
            "name": "Astros",
            "weight": 3.3057851239669422
        }, {
            "id": 537232483,
            "name": "San Diego Padres",
            "weight": 3.3057851239669422
        }, {
            "id": 537511270,
            "name": "Milwaukee Brewers",
            "weight": 3.3057851239669422
        }, {
            "id": 537659122,
            "name": "Chicago White Sox",
            "weight": 2.6859504132231407
        }, {
            "id": 537201322,
            "name": "Daniel Murphy",
            "weight": 2.6859504132231407
        }, {
            "id": 537149364,
            "name": "Johnny Cueto",
            "weight": 2.4793388429752068
        }, {
            "id": 537955539,
            "name": "Josh Donaldson",
            "weight": 2.4793388429752068
        }, {
            "id": 537728637,
            "name": "Todd Frazier",
            "weight": 2.2727272727272729
        }, {
            "id": 537357293,
            "name": "Cy Young",
            "weight": 2.2727272727272729
        }, {
            "id": 537481616,
            "name": "Tampa Bay Rays",
            "weight": 2.2727272727272729
        }, {
            "id": 537123471,
            "name": "National League East",
            "weight": 2.0661157024793386
        }, {
            "id": 537196045,
            "name": "Pablo Sandoval",
            "weight": 2.0661157024793386
        }, {
            "id": 537228566,
            "name": "Zack Greinke",
            "weight": 2.0661157024793386
        }, {
            "id": 537229745,
            "name": "Clayton Kershaw",
            "weight": 2.0661157024793386
        }, {
            "id": 537113372,
            "name": "National League Central",
            "weight": 2.0661157024793386
        }, {
            "id": 537151149,
            "name": "National League West",
            "weight": 1.859504132231405
        }, {
            "id": 537498495,
            "name": "Detroit Tigers",
            "weight": 1.859504132231405
        }, {
            "id": 537640456,
            "name": "Arizona Diamondbacks",
            "weight": 1.859504132231405
        }, {
            "id": 537194236,
            "name": "Justin Verlander",
            "weight": 1.6528925619834711
        }, {
            "id": 537213317,
            "name": "Chase Utley",
            "weight": 1.6528925619834711
        }, {
            "id": 537629431,
            "name": "Pittsburgh Pirates",
            "weight": 1.4462809917355373
        }, {
            "id": 537232570,
            "name": "San Francisco Giants",
            "weight": 1.4462809917355373
        }, {
            "id": 537254386,
            "name": "Don Mattingly",
            "weight": 1.4462809917355373
        }, {
            "id": 538042439,
            "name": "Wilmer Flores",
            "weight": 1.4462809917355373
        }, {
            "id": 537651508,
            "name": "Cincinnati Reds",
            "weight": 1.4462809917355373
        }, {
            "id": 537701546,
            "name": "Anthony Rizzo",
            "weight": 1.2396694214876034
        }, {
            "id": 537204548,
            "name": "Albert Pujols",
            "weight": 1.2396694214876034
        }, {
            "id": 537216703,
            "name": "Max Scherzer",
            "weight": 1.2396694214876034
        }, {
            "id": 537279919,
            "name": "Ned Yost",
            "weight": 1.2396694214876034
        }, {
            "id": 537227929,
            "name": "Nelson Cruz",
            "weight": 1.2396694214876034
        }, {
            "id": 537177817,
            "name": "Miguel Cabrera",
            "weight": 1.0330578512396693
        }, {
            "id": 537325992,
            "name": "Baltimore Orioles",
            "weight": 1.0330578512396693
        }, {
            "id": 537200478,
            "name": "Cole Hamels",
            "weight": 1.0330578512396693
        }, {
            "id": 537201323,
            "name": "Mark Teixeira",
            "weight": 1.0330578512396693
        }, {
            "id": 537657186,
            "name": "Cleveland Indians",
            "weight": 1.0330578512396693
        }, {
            "id": 537245348,
            "name": "Andrew McCutchen",
            "weight": 1.0330578512396693
        }]
    }, {
        "id": 268458476,
        "name": "Tennis",
        "weight": 6.7278827476602512,
        "topics": [{
            "id": 268490383,
            "name": "Australian Open",
            "weight": 92.6509186351706,
            "topics": [{
                "id": 537243107,
                "name": "Serena Williams",
                "weight": 88.385269121813025
            }, {
                "id": 538570661,
                "name": "Novak Djokovic",
                "weight": 6.2322946175637393
            }, {
                "id": 537646399,
                "name": "Andy Murray",
                "weight": 3.9660056657223794
            }, {
                "id": 537285535,
                "name": "Roger Federer",
                "weight": 3.68271954674221
            }, {
                "id": 537084573,
                "name": "Caroline Wozniacki",
                "weight": 3.1161473087818696
            }, {
                "id": 537084440,
                "name": "Novak Djokovic",
                "weight": 2.8328611898016995
            }, {
                "id": 537661688,
                "name": "Stefanie Graf",
                "weight": 2.54957507082153
            }, {
                "id": 537274139,
                "name": "Andre Agassi",
                "weight": 2.26628895184136
            }, {
                "id": 537651402,
                "name": "Venus Williams",
                "weight": 1.9830028328611897
            }, {
                "id": 537511405,
                "name": "Marin Čilić",
                "weight": 1.9830028328611897
            }, {
                "id": 537663631,
                "name": "Stanislas Wawrinka",
                "weight": 1.4164305949008498
            }, {
                "id": 538079575,
                "name": "Sloane Stephens",
                "weight": 1.4164305949008498
            }, {
                "id": 537084459,
                "name": "Rafael Nadal",
                "weight": 1.4164305949008498
            }, {
                "id": 537645687,
                "name": "Pablo Cuevas",
                "weight": 1.4164305949008498
            }, {
                "id": 537511334,
                "name": "Bernard Tomic",
                "weight": 1.13314447592068
            }]
        }, {
            "id": 268487350,
            "name": "U.S. Open",
            "weight": 87.4015748031496,
            "topics": [{
                "id": 537243107,
                "name": "Serena Williams",
                "weight": 93.693693693693689
            }, {
                "id": 538574040,
                "name": "Maria Sharapova",
                "weight": 1.2012012012012012
            }, {
                "id": 537644306,
                "name": "Kansas City Wizards",
                "weight": 1.2012012012012012
            }]
        }, {
            "id": 268489995,
            "name": "Fed Cup",
            "weight": 85.30183727034121,
            "topics": [{
                "id": 537243107,
                "name": "Serena Williams",
                "weight": 96.0
            }, {
                "id": 537651402,
                "name": "Venus Williams",
                "weight": 2.1538461538461537
            }, {
                "id": 537652424,
                "name": "Angelique Kerber",
                "weight": 1.8461538461538463
            }, {
                "id": 538079575,
                "name": "Sloane Stephens",
                "weight": 1.5384615384615385
            }, {
                "id": 538574040,
                "name": "Maria Sharapova",
                "weight": 1.2307692307692308
            }]
        }, {
            "id": 537243107,
            "name": "Serena Williams",
            "weight": 81.889763779527556
        }, {
            "id": 268490004,
            "name": "Davis Cup",
            "weight": 14.435695538057743,
            "topics": [{
                "id": 538570661,
                "name": "Novak Djokovic",
                "weight": 40.0
            }, {
                "id": 537646399,
                "name": "Andy Murray",
                "weight": 25.454545454545453
            }, {
                "id": 537285535,
                "name": "Roger Federer",
                "weight": 23.636363636363637
            }, {
                "id": 537084440,
                "name": "Novak Djokovic",
                "weight": 18.181818181818183
            }, {
                "id": 538572139,
                "name": "Rafael Nadal",
                "weight": 14.545454545454545
            }, {
                "id": 537511405,
                "name": "Marin Čilić",
                "weight": 12.727272727272727
            }, {
                "id": 537663631,
                "name": "Stanislas Wawrinka",
                "weight": 9.0909090909090917
            }, {
                "id": 537084459,
                "name": "Rafael Nadal",
                "weight": 9.0909090909090917
            }, {
                "id": 537158288,
                "name": "Association of Tennis Professionals",
                "weight": 7.2727272727272725
            }, {
                "id": 537511334,
                "name": "Bernard Tomic",
                "weight": 7.2727272727272725
            }, {
                "id": 537668221,
                "name": "Lleyton Hewitt",
                "weight": 5.4545454545454541
            }, {
                "id": 538051014,
                "name": "Patrick Rafter",
                "weight": 3.6363636363636362
            }, {
                "id": 537467225,
                "name": "Richard Gasquet",
                "weight": 3.6363636363636362
            }, {
                "id": 537467737,
                "name": "Jamie Murray",
                "weight": 3.6363636363636362
            }, {
                "id": 537657530,
                "name": "Daniel Nestor",
                "weight": 1.8181818181818181
            }, {
                "id": 537085079,
                "name": "Fernando Verdasco",
                "weight": 1.8181818181818181
            }, {
                "id": 537717552,
                "name": "Leonardo Mayer",
                "weight": 1.8181818181818181
            }]
        }, {
            "id": 538570661,
            "name": "Novak Djokovic",
            "weight": 5.7742782152230969
        }, {
            "id": 537646399,
            "name": "Andy Murray",
            "weight": 3.674540682414698
        }, {
            "id": 537285535,
            "name": "Roger Federer",
            "weight": 3.4120734908136483
        }, {
            "id": 537084573,
            "name": "Caroline Wozniacki",
            "weight": 2.8871391076115485
        }, {
            "id": 537084440,
            "name": "Novak Djokovic",
            "weight": 2.6246719160104988
        }, {
            "id": 537661688,
            "name": "Stefanie Graf",
            "weight": 2.3622047244094486
        }, {
            "id": 537651402,
            "name": "Venus Williams",
            "weight": 1.837270341207349
        }, {
            "id": 537511405,
            "name": "Marin Čilić",
            "weight": 1.837270341207349
        }, {
            "id": 537652424,
            "name": "Angelique Kerber",
            "weight": 1.5748031496062993
        }, {
            "id": 537663631,
            "name": "Stanislas Wawrinka",
            "weight": 1.3123359580052494
        }, {
            "id": 538079575,
            "name": "Sloane Stephens",
            "weight": 1.3123359580052494
        }, {
            "id": 537158288,
            "name": "Association of Tennis Professionals",
            "weight": 1.0498687664041995
        }, {
            "id": 537511334,
            "name": "Bernard Tomic",
            "weight": 1.0498687664041995
        }]
    }, {
        "id": 268458482,
        "name": "Basketball",
        "weight": 6.3570545647183474,
        "topics": [{
            "id": 268458483,
            "name": "College Basketball",
            "weight": 66.944444444444443,
            "topics": [{
                "id": 537084735,
                "name": "National Collegiate Athletic Association",
                "weight": 50.622406639004147
            }, {
                "id": 537200044,
                "name": "John Wooden",
                "weight": 37.344398340248965
            }, {
                "id": 537467837,
                "name": "Tom Izzo",
                "weight": 2.0746887966804981
            }, {
                "id": 537084174,
                "name": "John Calipari",
                "weight": 2.0746887966804981
            }]
        }, {
            "id": 268436975,
            "name": "NBA Basketball",
            "weight": 54.722222222222221,
            "topics": [{
                "id": 537666082,
                "name": "Cleveland Cavaliers",
                "weight": 26.395939086294415
            }, {
                "id": 537233221,
                "name": "Los Angeles Lakers",
                "weight": 25.888324873096447
            }, {
                "id": 537636071,
                "name": "New York Knicks",
                "weight": 20.304568527918782
            }, {
                "id": 537233018,
                "name": "Golden State Warriors",
                "weight": 19.289340101522843
            }, {
                "id": 537631070,
                "name": "Oklahoma City Thunder",
                "weight": 17.766497461928935
            }, {
                "id": 537192523,
                "name": "Stephen Curry",
                "weight": 16.751269035532996
            }, {
                "id": 537074743,
                "name": "National Basketball Association",
                "weight": 15.228426395939087
            }, {
                "id": 537195630,
                "name": "James Harden",
                "weight": 12.690355329949238
            }, {
                "id": 537421295,
                "name": "San Antonio Spurs",
                "weight": 11.167512690355331
            }, {
                "id": 538202232,
                "name": "Kyrie Irving",
                "weight": 10.659898477157361
            }, {
                "id": 537233015,
                "name": "Miami Heat",
                "weight": 10.659898477157361
            }, {
                "id": 537634155,
                "name": "New Orleans Hornets",
                "weight": 10.659898477157361
            }, {
                "id": 537633440,
                "name": "Houston Rockets",
                "weight": 10.152284263959391
            }, {
                "id": 537233214,
                "name": "Portland Trail Blazers",
                "weight": 9.6446700507614214
            }, {
                "id": 537634550,
                "name": "Blake Griffin",
                "weight": 9.6446700507614214
            }, {
                "id": 537631788,
                "name": "Toronto Raptors",
                "weight": 9.1370558375634516
            }, {
                "id": 537671141,
                "name": "Kevin Love",
                "weight": 8.6294416243654819
            }, {
                "id": 537656418,
                "name": "Washington Wizards",
                "weight": 8.6294416243654819
            }, {
                "id": 537543966,
                "name": "Phoenix Suns",
                "weight": 8.1218274111675122
            }, {
                "id": 537192693,
                "name": "Chris Bosh",
                "weight": 8.1218274111675122
            }, {
                "id": 537233215,
                "name": "Boston Celtics",
                "weight": 8.1218274111675122
            }, {
                "id": 537676777,
                "name": "Jimmy Butler",
                "weight": 7.6142131979695433
            }, {
                "id": 537188395,
                "name": "Dwight Howard",
                "weight": 7.1065989847715736
            }, {
                "id": 537195541,
                "name": "Russell Westbrook",
                "weight": 7.1065989847715736
            }, {
                "id": 537668127,
                "name": "Atlanta Hawks",
                "weight": 6.0913705583756341
            }, {
                "id": 537647930,
                "name": "Memphis Grizzlies",
                "weight": 6.0913705583756341
            }, {
                "id": 537631108,
                "name": "Los Angeles Clippers",
                "weight": 6.0913705583756341
            }, {
                "id": 537511441,
                "name": "Orlando Magic",
                "weight": 6.0913705583756341
            }, {
                "id": 538202235,
                "name": "DeMarcus Cousins",
                "weight": 5.5837563451776653
            }, {
                "id": 537285837,
                "name": "Rajon Rondo",
                "weight": 5.5837563451776653
            }, {
                "id": 537975625,
                "name": "Kawhi Leonard",
                "weight": 5.5837563451776653
            }, {
                "id": 537626325,
                "name": "Denver Nuggets",
                "weight": 5.5837563451776653
            }, {
                "id": 537629907,
                "name": "Milwaukee Bucks",
                "weight": 5.5837563451776653
            }, {
                "id": 537368561,
                "name": "John Wall",
                "weight": 5.5837563451776653
            }, {
                "id": 537632763,
                "name": "Dallas Mavericks",
                "weight": 5.5837563451776653
            }, {
                "id": 537638584,
                "name": "Gregg Popovich",
                "weight": 5.5837563451776653
            }, {
                "id": 537123572,
                "name": "NBA D-League",
                "weight": 5.5837563451776653
            }, {
                "id": 537192826,
                "name": "Chris Paul",
                "weight": 5.0761421319796955
            }, {
                "id": 537195900,
                "name": "Kyle Lowry",
                "weight": 5.0761421319796955
            }, {
                "id": 537196309,
                "name": "J.R. Smith",
                "weight": 5.0761421319796955
            }, {
                "id": 537357448,
                "name": "New Jersey Nets",
                "weight": 5.0761421319796955
            }, {
                "id": 537232580,
                "name": "Detroit Pistons",
                "weight": 5.0761421319796955
            }, {
                "id": 537511363,
                "name": "Pau Gasol",
                "weight": 4.5685279187817258
            }, {
                "id": 537224745,
                "name": "Jeff Teague",
                "weight": 4.5685279187817258
            }, {
                "id": 537631969,
                "name": "Indiana Pacers",
                "weight": 4.5685279187817258
            }, {
                "id": 537643590,
                "name": "Sacramento Kings",
                "weight": 4.5685279187817258
            }, {
                "id": 537192677,
                "name": "Tim Duncan",
                "weight": 4.0609137055837561
            }, {
                "id": 537195562,
                "name": "Tony Parker",
                "weight": 4.0609137055837561
            }, {
                "id": 537199495,
                "name": "Marc Gasol",
                "weight": 4.0609137055837561
            }, {
                "id": 538202234,
                "name": "LaMarcus Aldridge",
                "weight": 3.5532994923857868
            }]
        }, {
            "id": 537666082,
            "name": "Cleveland Cavaliers",
            "weight": 14.444444444444445
        }, {
            "id": 537233221,
            "name": "Los Angeles Lakers",
            "weight": 14.166666666666666
        }, {
            "id": 537636071,
            "name": "New York Knicks",
            "weight": 11.111111111111111
        }, {
            "id": 537233018,
            "name": "Golden State Warriors",
            "weight": 10.555555555555555
        }, {
            "id": 537631070,
            "name": "Oklahoma City Thunder",
            "weight": 9.7222222222222214
        }, {
            "id": 537074743,
            "name": "National Basketball Association",
            "weight": 8.3333333333333339
        }, {
            "id": 537193522,
            "name": "Kevin Durant",
            "weight": 7.5
        }, {
            "id": 537195630,
            "name": "James Harden",
            "weight": 6.9444444444444446
        }, {
            "id": 537634315,
            "name": "Chicago Bulls",
            "weight": 6.9444444444444446
        }, {
            "id": 537421295,
            "name": "San Antonio Spurs",
            "weight": 6.1111111111111107
        }, {
            "id": 538202232,
            "name": "Kyrie Irving",
            "weight": 5.833333333333333
        }, {
            "id": 537233015,
            "name": "Miami Heat",
            "weight": 5.833333333333333
        }, {
            "id": 537634155,
            "name": "New Orleans Hornets",
            "weight": 5.833333333333333
        }, {
            "id": 537633440,
            "name": "Houston Rockets",
            "weight": 5.5555555555555554
        }, {
            "id": 537193523,
            "name": "Carmelo Anthony",
            "weight": 5.2777777777777777
        }, {
            "id": 537233214,
            "name": "Portland Trail Blazers",
            "weight": 5.2777777777777777
        }, {
            "id": 537634550,
            "name": "Blake Griffin",
            "weight": 5.2777777777777777
        }, {
            "id": 537631788,
            "name": "Toronto Raptors",
            "weight": 5.0
        }, {
            "id": 537671141,
            "name": "Kevin Love",
            "weight": 4.7222222222222223
        }, {
            "id": 537656418,
            "name": "Washington Wizards",
            "weight": 4.7222222222222223
        }, {
            "id": 537543966,
            "name": "Phoenix Suns",
            "weight": 4.4444444444444446
        }, {
            "id": 537192693,
            "name": "Chris Bosh",
            "weight": 4.4444444444444446
        }, {
            "id": 537233215,
            "name": "Boston Celtics",
            "weight": 4.4444444444444446
        }, {
            "id": 537188395,
            "name": "Dwight Howard",
            "weight": 3.8888888888888888
        }, {
            "id": 537195541,
            "name": "Russell Westbrook",
            "weight": 3.8888888888888888
        }, {
            "id": 537668127,
            "name": "Atlanta Hawks",
            "weight": 3.3333333333333335
        }, {
            "id": 537192827,
            "name": "Derrick Rose",
            "weight": 3.3333333333333335
        }, {
            "id": 537647930,
            "name": "Memphis Grizzlies",
            "weight": 3.3333333333333335
        }, {
            "id": 537631108,
            "name": "Los Angeles Clippers",
            "weight": 3.3333333333333335
        }, {
            "id": 537511441,
            "name": "Orlando Magic",
            "weight": 3.3333333333333335
        }, {
            "id": 538202235,
            "name": "DeMarcus Cousins",
            "weight": 3.0555555555555554
        }, {
            "id": 537285837,
            "name": "Rajon Rondo",
            "weight": 3.0555555555555554
        }, {
            "id": 537975625,
            "name": "Kawhi Leonard",
            "weight": 3.0555555555555554
        }, {
            "id": 537626325,
            "name": "Denver Nuggets",
            "weight": 3.0555555555555554
        }, {
            "id": 537629907,
            "name": "Milwaukee Bucks",
            "weight": 3.0555555555555554
        }, {
            "id": 537632763,
            "name": "Dallas Mavericks",
            "weight": 3.0555555555555554
        }, {
            "id": 537638584,
            "name": "Gregg Popovich",
            "weight": 3.0555555555555554
        }, {
            "id": 537123572,
            "name": "NBA D-League",
            "weight": 3.0555555555555554
        }, {
            "id": 537192826,
            "name": "Chris Paul",
            "weight": 2.7777777777777777
        }, {
            "id": 537195900,
            "name": "Kyle Lowry",
            "weight": 2.7777777777777777
        }, {
            "id": 537196309,
            "name": "J.R. Smith",
            "weight": 2.7777777777777777
        }, {
            "id": 537357448,
            "name": "New Jersey Nets",
            "weight": 2.7777777777777777
        }, {
            "id": 537232580,
            "name": "Detroit Pistons",
            "weight": 2.7777777777777777
        }, {
            "id": 537511363,
            "name": "Pau Gasol",
            "weight": 2.5
        }, {
            "id": 537631969,
            "name": "Indiana Pacers",
            "weight": 2.5
        }, {
            "id": 537643590,
            "name": "Sacramento Kings",
            "weight": 2.5
        }, {
            "id": 537192677,
            "name": "Tim Duncan",
            "weight": 2.2222222222222223
        }, {
            "id": 537199495,
            "name": "Marc Gasol",
            "weight": 2.2222222222222223
        }]
    }, {
        "id": 268489821,
        "name": "Extreme Sports",
        "weight": 5.5624227441285541,
        "topics": [{
            "id": 268490239,
            "name": "Climbing",
            "weight": 46.984126984126981,
            "topics": [{
                "id": 537263789,
                "name": "Bear Grylls",
                "weight": 61.486486486486484
            }, {
                "id": 537224927,
                "name": "Edmund Hillary",
                "weight": 4.0540540540540544
            }, {
                "id": 537285550,
                "name": "Conrad Anker",
                "weight": 1.3513513513513513
            }]
        }, {
            "id": 268487247,
            "name": "Surfing",
            "weight": 31.428571428571427,
            "topics": [{
                "id": 537717916,
                "name": "The Beach Boys",
                "weight": 23.232323232323232
            }, {
                "id": 537231622,
                "name": "Mick Fanning",
                "weight": 14.141414141414142
            }, {
                "id": 537214676,
                "name": "Kelly Slater",
                "weight": 12.121212121212121
            }, {
                "id": 537132537,
                "name": "François Payot",
                "weight": 2.0202020202020203
            }, {
                "id": 537702785,
                "name": "Bethany Hamilton",
                "weight": 1.0101010101010102
            }, {
                "id": 538117312,
                "name": "Surfline",
                "weight": 1.0101010101010102
            }, {
                "id": 537126960,
                "name": "Volcom",
                "weight": 1.0101010101010102
            }]
        }, {
            "id": 268487138,
            "name": "Skateboarding",
            "weight": 30.793650793650794,
            "topics": [{
                "id": 537101550,
                "name": "NIKE (biz)",
                "weight": 86.5979381443299
            }, {
                "id": 537257258,
                "name": "Nike Skateboarding",
                "weight": 8.24742268041237
            }, {
                "id": 537195948,
                "name": "Tony Hawk",
                "weight": 5.1546391752577323
            }, {
                "id": 537503426,
                "name": "Paul Rodriguez Jr.",
                "weight": 5.1546391752577323
            }, {
                "id": 537195752,
                "name": "Shaun White",
                "weight": 2.0618556701030926
            }, {
                "id": 537665545,
                "name": "Tony Hawk's Pro Skater",
                "weight": 1.0309278350515463
            }]
        }, {
            "id": 268486482,
            "name": "Canoeing and Kayaking",
            "weight": 10.476190476190476
        }, {
            "id": 268490002,
            "name": "Kiting",
            "weight": 3.1746031746031744
        }, {
            "id": 268490671,
            "name": "Windsurfing",
            "weight": 1.5873015873015872
        }]
    }, {
        "id": 268458475,
        "name": "Swimming",
        "weight": 4.96203425746071,
        "topics": [{
            "id": 537108824,
            "name": "Budgie Smuggler",
            "weight": 41.637010676156585
        }, {
            "id": 537585639,
            "name": "YMCA",
            "weight": 41.281138790035584
        }, {
            "id": 268490719,
            "name": "Open Water Swimming",
            "weight": 9.252669039145907
        }, {
            "id": 537193578,
            "name": "Michael Phelps",
            "weight": 5.3380782918149468
        }, {
            "id": 537730553,
            "name": "Rebecca Adlington",
            "weight": 3.5587188612099645
        }, {
            "id": 537219141,
            "name": "Pavel Bure",
            "weight": 3.2028469750889679
        }, {
            "id": 268490297,
            "name": "Synchronized Swimming",
            "weight": 1.0676156583629892
        }, {
            "id": 537254107,
            "name": "Natalie Coughlin",
            "weight": 1.0676156583629892
        }]
    }, {
        "id": 268458457,
        "name": "Athletics",
        "weight": 3.3551121313791277,
        "topics": [{
            "id": 268487045,
            "name": "Running",
            "weight": 73.15789473684211,
            "topics": [{
                "id": 537101550,
                "name": "NIKE (biz)",
                "weight": 60.431654676258994
            }, {
                "id": 268486600,
                "name": "Marathon",
                "weight": 55.39568345323741,
                "topics": [{
                    "id": 538215577,
                    "name": "Dzhokhar A. Tsarnaev",
                    "weight": 18.181818181818183
                }, {
                    "id": 538005717,
                    "name": "Mohamed Farah",
                    "weight": 5.1948051948051948
                }, {
                    "id": 537466788,
                    "name": "Paula Radcliffe",
                    "weight": 1.2987012987012987
                }, {
                    "id": 537655847,
                    "name": "Judy Clarke",
                    "weight": 1.2987012987012987
                }]
            }, {
                "id": 268489824,
                "name": "Sprinting",
                "weight": 12.23021582733813
            }, {
                "id": 537151394,
                "name": "New Balance Athletic Shoe, Inc.",
                "weight": 10.071942446043165
            }, {
                "id": 537198848,
                "name": "Sebastian Coe, Baron Coe",
                "weight": 6.4748201438848918
            }, {
                "id": 537192823,
                "name": "Jimmie Johnson",
                "weight": 2.8776978417266186
            }, {
                "id": 538005717,
                "name": "Mohamed Farah",
                "weight": 2.8776978417266186
            }, {
                "id": 537997283,
                "name": "Galen Rupp",
                "weight": 2.1582733812949639
            }, {
                "id": 537176853,
                "name": "Usain Bolt",
                "weight": 1.4388489208633093
            }, {
                "id": 537988022,
                "name": "Alberto Salazar",
                "weight": 1.4388489208633093
            }]
        }, {
            "id": 268490696,
            "name": "Track and Field",
            "weight": 49.473684210526315,
            "topics": [{
                "id": 537626705,
                "name": "Caitlyn Jenner",
                "weight": 54.255319148936174
            }, {
                "id": 538568235,
                "name": "Caitlyn Jenner",
                "weight": 30.851063829787233
            }, {
                "id": 537198848,
                "name": "Sebastian Coe, Baron Coe",
                "weight": 9.5744680851063837
            }, {
                "id": 537996609,
                "name": "Greg Rutherford",
                "weight": 3.1914893617021276
            }, {
                "id": 538577972,
                "name": "Sebastian Coe",
                "weight": 2.1276595744680851
            }, {
                "id": 537176853,
                "name": "Usain Bolt",
                "weight": 2.1276595744680851
            }, {
                "id": 537988022,
                "name": "Alberto Salazar",
                "weight": 2.1276595744680851
            }, {
                "id": 537678045,
                "name": "Nick Willis",
                "weight": 1.0638297872340425
            }, {
                "id": 537131998,
                "name": "European Athletic Association",
                "weight": 1.0638297872340425
            }]
        }, {
            "id": 537101550,
            "name": "NIKE (biz)",
            "weight": 44.210526315789473
        }, {
            "id": 537101867,
            "name": "International Association of Athletics Federations",
            "weight": 8.4210526315789469
        }, {
            "id": 537198848,
            "name": "Sebastian Coe, Baron Coe",
            "weight": 4.7368421052631575
        }, {
            "id": 538005717,
            "name": "Mohamed Farah",
            "weight": 2.1052631578947367
        }, {
            "id": 537997283,
            "name": "Galen Rupp",
            "weight": 1.5789473684210527
        }, {
            "id": 537996609,
            "name": "Greg Rutherford",
            "weight": 1.5789473684210527
        }, {
            "id": 537155660,
            "name": "UK Athletics",
            "weight": 1.0526315789473684
        }, {
            "id": 537176853,
            "name": "Usain Bolt",
            "weight": 1.0526315789473684
        }, {
            "id": 537988022,
            "name": "Alberto Salazar",
            "weight": 1.0526315789473684
        }]
    }, {
        "id": 268490621,
        "name": "FIFA World Cup",
        "weight": 3.1961857672611691,
        "topics": [{
            "id": 537132221,
            "name": "Federation Internationale de Football Association",
            "weight": 62.983425414364639
        }, {
            "id": 537077426,
            "name": "Sepp Blatter",
            "weight": 35.35911602209945
        }, {
            "id": 537176359,
            "name": "David Beckham",
            "weight": 27.624309392265193
        }, {
            "id": 537466833,
            "name": "Lionel Messi",
            "weight": 25.414364640883978
        }, {
            "id": 538039745,
            "name": "Luis Suárez",
            "weight": 25.414364640883978
        }, {
            "id": 537259591,
            "name": "Cristiano Ronaldo",
            "weight": 22.651933701657459
        }, {
            "id": 537116548,
            "name": "UEFA (soccer)",
            "weight": 19.337016574585636
        }, {
            "id": 538574168,
            "name": "Neymar",
            "weight": 18.232044198895029
        }, {
            "id": 538574694,
            "name": "Michel Platini",
            "weight": 18.232044198895029
        }, {
            "id": 537189387,
            "name": "Wayne Rooney",
            "weight": 16.022099447513813
        }, {
            "id": 537140597,
            "name": "The Football Association",
            "weight": 12.707182320441989
        }, {
            "id": 537109612,
            "name": "CONCACAF (nonprofit)",
            "weight": 12.154696132596685
        }, {
            "id": 537124967,
            "name": "Roy Hodgson",
            "weight": 12.154696132596685
        }, {
            "id": 537543961,
            "name": "Sergio Agüero",
            "weight": 9.3922651933701662
        }, {
            "id": 537668216,
            "name": "Jürgen Klinsmann",
            "weight": 7.7348066298342539
        }, {
            "id": 538016433,
            "name": "Pelé",
            "weight": 7.7348066298342539
        }, {
            "id": 537194941,
            "name": "Thierry Henry",
            "weight": 7.18232044198895
        }, {
            "id": 537119681,
            "name": "CONMEBOL (nonprofit)",
            "weight": 7.18232044198895
        }, {
            "id": 537118156,
            "name": "Asian Football Confederation",
            "weight": 4.4198895027624312
        }, {
            "id": 537448435,
            "name": "Bastian Schweinsteiger",
            "weight": 3.867403314917127
        }, {
            "id": 537962966,
            "name": "German Football Association",
            "weight": 3.3149171270718232
        }, {
            "id": 537629917,
            "name": "Fabio Capello",
            "weight": 1.1049723756906078
        }]
    }, {
        "id": 268458467,
        "name": "Motor Sports",
        "weight": 2.80769909941727,
        "topics": [{
            "id": 268458485,
            "name": "Car Racing",
            "weight": 97.484276729559753,
            "topics": [{
                "id": 268486148,
                "name": "Formula One",
                "weight": 87.741935483870961,
                "topics": [{
                    "id": 536888939,
                    "name": "Mercedes-Benz",
                    "weight": 69.117647058823536
                }, {
                    "id": 538109615,
                    "name": "McLaren",
                    "weight": 30.882352941176471
                }, {
                    "id": 537170935,
                    "name": "Lewis Hamilton",
                    "weight": 21.323529411764707
                }, {
                    "id": 538044990,
                    "name": "Grand Prix",
                    "weight": 19.852941176470587
                }, {
                    "id": 538020444,
                    "name": "Grand Prix",
                    "weight": 13.970588235294118
                }, {
                    "id": 537084521,
                    "name": "Jenson Button",
                    "weight": 9.5588235294117645
                }, {
                    "id": 537201889,
                    "name": "Nico Rosberg",
                    "weight": 8.8235294117647065
                }, {
                    "id": 537190707,
                    "name": "Sebastian Vettel",
                    "weight": 6.617647058823529
                }, {
                    "id": 537069094,
                    "name": "Bernard Ecclestone",
                    "weight": 6.617647058823529
                }, {
                    "id": 537193719,
                    "name": "Michael Schumacher",
                    "weight": 5.882352941176471
                }, {
                    "id": 538336438,
                    "name": "Pastor Maldonado",
                    "weight": 4.4117647058823533
                }, {
                    "id": 537171047,
                    "name": "Fernando Alonso",
                    "weight": 4.4117647058823533
                }, {
                    "id": 538280412,
                    "name": "Kevin Magnussen",
                    "weight": 4.4117647058823533
                }, {
                    "id": 536897917,
                    "name": "Ferrari S.p.A.",
                    "weight": 3.6764705882352939
                }, {
                    "id": 538106956,
                    "name": "Scuderia Ferrari",
                    "weight": 2.2058823529411766
                }, {
                    "id": 537468337,
                    "name": "Kimi Räikkönen",
                    "weight": 2.2058823529411766
                }, {
                    "id": 537206244,
                    "name": "Romain Grosjean",
                    "weight": 2.2058823529411766
                }, {
                    "id": 537731845,
                    "name": "Daniel Ricciardo",
                    "weight": 2.2058823529411766
                }, {
                    "id": 537188947,
                    "name": "Felipe Massa",
                    "weight": 2.2058823529411766
                }, {
                    "id": 537788876,
                    "name": "Giedo van der Garde",
                    "weight": 1.4705882352941178
                }, {
                    "id": 538319883,
                    "name": "Red Bull Racing",
                    "weight": 1.4705882352941178
                }, {
                    "id": 538321303,
                    "name": "Scuderia Toro Rosso",
                    "weight": 1.4705882352941178
                }, {
                    "id": 538320981,
                    "name": "Sergio Pérez",
                    "weight": 1.4705882352941178
                }, {
                    "id": 537189673,
                    "name": "Ron Dennis",
                    "weight": 1.4705882352941178
                }, {
                    "id": 537195156,
                    "name": "Alain Prost",
                    "weight": 1.4705882352941178
                }, {
                    "id": 537196075,
                    "name": "Jackie Stewart",
                    "weight": 1.4705882352941178
                }, {
                    "id": 537075210,
                    "name": "Federation Internationale de l'Automobile",
                    "weight": 1.4705882352941178
                }, {
                    "id": 537214307,
                    "name": "Juan Pablo Montoya",
                    "weight": 1.4705882352941178
                }, {
                    "id": 538284323,
                    "name": "Toto Wolff",
                    "weight": 1.4705882352941178
                }, {
                    "id": 537499325,
                    "name": "Nicolas Hülkenberg",
                    "weight": 1.4705882352941178
                }]
            }, {
                "id": 268486720,
                "name": "NASCAR Racing",
                "weight": 36.774193548387096
            }, {
                "id": 537286420,
                "name": "Tony Stewart",
                "weight": 12.258064516129032
            }]
        }, {
            "id": 268490706,
            "name": "Motorcycle Racing",
            "weight": 11.949685534591195,
            "topics": [{
                "id": 537551079,
                "name": "Valentino Rossi",
                "weight": 21.05263157894737
            }, {
                "id": 537118049,
                "name": "Aprilla SpA",
                "weight": 21.05263157894737
            }, {
                "id": 537150883,
                "name": "MV Agusta Purchase and Sale by Proton",
                "weight": 15.789473684210526
            }, {
                "id": 537978391,
                "name": "Marc Márquez",
                "weight": 15.789473684210526
            }, {
                "id": 537955192,
                "name": "Nicky Hayden",
                "weight": 10.526315789473685
            }, {
                "id": 537699309,
                "name": "Troy Bayliss",
                "weight": 10.526315789473685
            }, {
                "id": 537706421,
                "name": "Jorge Lorenzo",
                "weight": 10.526315789473685
            }, {
                "id": 537717280,
                "name": "Cal Crutchlow",
                "weight": 10.526315789473685
            }, {
                "id": 537718683,
                "name": "Casey Stoner",
                "weight": 10.526315789473685
            }]
        }]
    }, {
        "id": 268458488,
        "name": "Ice Hockey",
        "weight": 2.7194066749072929,
        "topics": [{
            "id": 268436973,
            "name": "NHL Hockey",
            "weight": 85.064935064935071,
            "topics": [{
                "id": 537636215,
                "name": "Toronto Maple Leafs",
                "weight": 28.244274809160306
            }, {
                "id": 537232491,
                "name": "Boston Bruins",
                "weight": 22.137404580152673
            }, {
                "id": 537629119,
                "name": "Montreal Canadiens",
                "weight": 19.847328244274809
            }, {
                "id": 537630274,
                "name": "New York Rangers",
                "weight": 19.847328244274809
            }, {
                "id": 537628441,
                "name": "Calgary Flames",
                "weight": 18.3206106870229
            }, {
                "id": 537647406,
                "name": "Vancouver Canucks",
                "weight": 16.793893129770993
            }, {
                "id": 537627862,
                "name": "Ottawa Senators",
                "weight": 16.03053435114504
            }, {
                "id": 537628272,
                "name": "Edmonton Oilers",
                "weight": 16.03053435114504
            }, {
                "id": 538032004,
                "name": "Winnipeg Jets",
                "weight": 15.267175572519085
            }, {
                "id": 537206059,
                "name": "Alexander Ovechkin",
                "weight": 12.977099236641221
            }, {
                "id": 537628367,
                "name": "Washington Capitals",
                "weight": 12.977099236641221
            }, {
                "id": 537628981,
                "name": "Columbus Blue Jackets",
                "weight": 12.213740458015268
            }, {
                "id": 537637148,
                "name": "Carolina Hurricanes",
                "weight": 10.687022900763358
            }, {
                "id": 537631013,
                "name": "Pittsburgh Penguins",
                "weight": 9.9236641221374047
            }, {
                "id": 537225389,
                "name": "Cory Schneider",
                "weight": 9.16030534351145
            }, {
                "id": 537195764,
                "name": "Jonathan Toews",
                "weight": 8.3969465648854964
            }, {
                "id": 537656481,
                "name": "Braden Holtby",
                "weight": 8.3969465648854964
            }, {
                "id": 537199902,
                "name": "Derick Brassard",
                "weight": 6.8702290076335881
            }, {
                "id": 537645486,
                "name": "Philadelphia Flyers",
                "weight": 6.8702290076335881
            }, {
                "id": 537196471,
                "name": "Ryan Getzlaf",
                "weight": 6.8702290076335881
            }, {
                "id": 537200400,
                "name": "Henrik Lundqvist",
                "weight": 6.8702290076335881
            }, {
                "id": 537626339,
                "name": "Corey Crawford",
                "weight": 6.8702290076335881
            }, {
                "id": 537233217,
                "name": "San Jose Sharks",
                "weight": 6.8702290076335881
            }, {
                "id": 537628271,
                "name": "New Jersey Devils",
                "weight": 6.8702290076335881
            }, {
                "id": 537628741,
                "name": "Derek Stepan",
                "weight": 6.106870229007634
            }, {
                "id": 537196775,
                "name": "Steven Stamkos",
                "weight": 6.106870229007634
            }, {
                "id": 537516593,
                "name": "Detroit Red Wings",
                "weight": 6.106870229007634
            }, {
                "id": 538249601,
                "name": "Nicklas Bäckström",
                "weight": 5.343511450381679
            }, {
                "id": 537206071,
                "name": "Corey Perry",
                "weight": 5.343511450381679
            }, {
                "id": 537188992,
                "name": "Evgeni Malkin",
                "weight": 5.343511450381679
            }, {
                "id": 537628708,
                "name": "Nashville Predators",
                "weight": 5.343511450381679
            }, {
                "id": 537635768,
                "name": "Tampa Bay Lightning",
                "weight": 5.343511450381679
            }, {
                "id": 537193962,
                "name": "Zach Parise",
                "weight": 4.5801526717557248
            }, {
                "id": 537209684,
                "name": "Carey Price",
                "weight": 4.5801526717557248
            }, {
                "id": 537627959,
                "name": "St. Louis Blues",
                "weight": 4.5801526717557248
            }, {
                "id": 537635733,
                "name": "Florida Panthers",
                "weight": 4.5801526717557248
            }, {
                "id": 537637712,
                "name": "Anaheim Ducks",
                "weight": 4.5801526717557248
            }, {
                "id": 537638506,
                "name": "Evander Kane",
                "weight": 4.5801526717557248
            }, {
                "id": 537256425,
                "name": "Marc-Andre Fleury",
                "weight": 4.5801526717557248
            }, {
                "id": 538082050,
                "name": "Pekka Rinne",
                "weight": 3.8167938931297711
            }, {
                "id": 537694935,
                "name": "Todd McLellan",
                "weight": 3.8167938931297711
            }, {
                "id": 538277397,
                "name": "Tuukka Rask",
                "weight": 3.8167938931297711
            }, {
                "id": 537195607,
                "name": "Ryan Miller",
                "weight": 3.8167938931297711
            }, {
                "id": 537198759,
                "name": "Jaroslav Halak",
                "weight": 3.8167938931297711
            }, {
                "id": 537233216,
                "name": "Los Angeles Kings",
                "weight": 3.8167938931297711
            }, {
                "id": 537498480,
                "name": "Patrick Sharp",
                "weight": 3.8167938931297711
            }, {
                "id": 537630216,
                "name": "Minnesota Wild",
                "weight": 3.8167938931297711
            }, {
                "id": 537631948,
                "name": "New York Islanders",
                "weight": 3.8167938931297711
            }, {
                "id": 537649450,
                "name": "Chris Kreider",
                "weight": 3.8167938931297711
            }, {
                "id": 537650514,
                "name": "Buffalo Sabres",
                "weight": 3.8167938931297711
            }]
        }, {
            "id": 268487209,
            "name": "Stanley Cup",
            "weight": 64.285714285714292,
            "topics": [{
                "id": 537074686,
                "name": "National Hockey League",
                "weight": 81.818181818181813
            }, {
                "id": 537285666,
                "name": "Chicago Blackhawks",
                "weight": 34.343434343434346
            }, {
                "id": 537629119,
                "name": "Montreal Canadiens",
                "weight": 26.262626262626263
            }, {
                "id": 537630274,
                "name": "New York Rangers",
                "weight": 26.262626262626263
            }, {
                "id": 537628441,
                "name": "Calgary Flames",
                "weight": 24.242424242424242
            }, {
                "id": 537192352,
                "name": "Patrick Kane",
                "weight": 19.19191919191919
            }, {
                "id": 537075027,
                "name": "Sidney Crosby",
                "weight": 15.151515151515152
            }, {
                "id": 537637148,
                "name": "Carolina Hurricanes",
                "weight": 14.141414141414142
            }, {
                "id": 537195764,
                "name": "Jonathan Toews",
                "weight": 11.111111111111111
            }, {
                "id": 537188820,
                "name": "Marian Gaborik",
                "weight": 9.0909090909090917
            }, {
                "id": 537196471,
                "name": "Ryan Getzlaf",
                "weight": 9.0909090909090917
            }, {
                "id": 537626339,
                "name": "Corey Crawford",
                "weight": 9.0909090909090917
            }, {
                "id": 537628271,
                "name": "New Jersey Devils",
                "weight": 9.0909090909090917
            }, {
                "id": 537956378,
                "name": "Hockey Hall of Fame",
                "weight": 8.0808080808080813
            }, {
                "id": 537206071,
                "name": "Corey Perry",
                "weight": 7.0707070707070709
            }, {
                "id": 537635768,
                "name": "Tampa Bay Lightning",
                "weight": 7.0707070707070709
            }, {
                "id": 537467193,
                "name": "Joel Quenneville",
                "weight": 6.0606060606060606
            }, {
                "id": 537637712,
                "name": "Anaheim Ducks",
                "weight": 6.0606060606060606
            }, {
                "id": 537606643,
                "name": "Mike Babcock",
                "weight": 5.05050505050505
            }, {
                "id": 537345853,
                "name": "Kris Versteeg",
                "weight": 5.05050505050505
            }, {
                "id": 537233216,
                "name": "Los Angeles Kings",
                "weight": 5.05050505050505
            }, {
                "id": 537498480,
                "name": "Patrick Sharp",
                "weight": 5.05050505050505
            }, {
                "id": 537643049,
                "name": "Dan Bylsma",
                "weight": 5.05050505050505
            }, {
                "id": 537649450,
                "name": "Chris Kreider",
                "weight": 5.05050505050505
            }, {
                "id": 537650187,
                "name": "Brad Richards",
                "weight": 5.05050505050505
            }, {
                "id": 537198771,
                "name": "Mike Richards",
                "weight": 4.0404040404040407
            }, {
                "id": 537194847,
                "name": "Jonathan Quick",
                "weight": 4.0404040404040407
            }, {
                "id": 537198090,
                "name": "Duncan Keith",
                "weight": 4.0404040404040407
            }, {
                "id": 537198736,
                "name": "Brent Seabrook",
                "weight": 4.0404040404040407
            }, {
                "id": 537200140,
                "name": "Steve Yzerman",
                "weight": 4.0404040404040407
            }, {
                "id": 537189865,
                "name": "Glen Sather",
                "weight": 3.0303030303030303
            }, {
                "id": 537202893,
                "name": "Kimmo Timonen",
                "weight": 3.0303030303030303
            }, {
                "id": 538050564,
                "name": "Justin Williams",
                "weight": 2.0202020202020203
            }, {
                "id": 537991095,
                "name": "Brandon Saad",
                "weight": 2.0202020202020203
            }, {
                "id": 537652791,
                "name": "Antoine Vermette",
                "weight": 2.0202020202020203
            }, {
                "id": 538322704,
                "name": "Al Arbour",
                "weight": 1.0101010101010102
            }, {
                "id": 538197601,
                "name": "Valtteri Filppula",
                "weight": 1.0101010101010102
            }, {
                "id": 537204144,
                "name": "Johnny Oduya",
                "weight": 1.0101010101010102
            }, {
                "id": 537196655,
                "name": "Marian Hossa",
                "weight": 1.0101010101010102
            }, {
                "id": 537198144,
                "name": "Ryan Callahan",
                "weight": 1.0101010101010102
            }, {
                "id": 537843010,
                "name": "NHL Stanley Cup",
                "weight": 1.0101010101010102
            }, {
                "id": 537198763,
                "name": "Jeff Carter",
                "weight": 1.0101010101010102
            }, {
                "id": 537198806,
                "name": "Chris Pronger",
                "weight": 1.0101010101010102
            }, {
                "id": 537192703,
                "name": "Martin St. Louis",
                "weight": 1.0101010101010102
            }, {
                "id": 537105780,
                "name": "Stan Bowman",
                "weight": 1.0101010101010102
            }, {
                "id": 537638375,
                "name": "John Tortorella",
                "weight": 1.0101010101010102
            }]
        }, {
            "id": 537636215,
            "name": "Toronto Maple Leafs",
            "weight": 24.025974025974026
        }, {
            "id": 537285666,
            "name": "Chicago Blackhawks",
            "weight": 22.077922077922079
        }, {
            "id": 268490545,
            "name": "AHL Hockey",
            "weight": 20.129870129870131
        }, {
            "id": 537232491,
            "name": "Boston Bruins",
            "weight": 18.831168831168831
        }, {
            "id": 537629119,
            "name": "Montreal Canadiens",
            "weight": 16.883116883116884
        }, {
            "id": 537630274,
            "name": "New York Rangers",
            "weight": 16.883116883116884
        }, {
            "id": 537628441,
            "name": "Calgary Flames",
            "weight": 15.584415584415584
        }, {
            "id": 537647406,
            "name": "Vancouver Canucks",
            "weight": 14.285714285714286
        }, {
            "id": 537627862,
            "name": "Ottawa Senators",
            "weight": 13.636363636363637
        }, {
            "id": 537628272,
            "name": "Edmonton Oilers",
            "weight": 13.636363636363637
        }, {
            "id": 537206059,
            "name": "Alexander Ovechkin",
            "weight": 11.038961038961039
        }, {
            "id": 537628367,
            "name": "Washington Capitals",
            "weight": 11.038961038961039
        }, {
            "id": 537628981,
            "name": "Columbus Blue Jackets",
            "weight": 10.38961038961039
        }, {
            "id": 537074687,
            "name": "American Hockey League",
            "weight": 9.0909090909090917
        }, {
            "id": 537637148,
            "name": "Carolina Hurricanes",
            "weight": 9.0909090909090917
        }, {
            "id": 537631013,
            "name": "Pittsburgh Penguins",
            "weight": 8.4415584415584419
        }, {
            "id": 537225389,
            "name": "Cory Schneider",
            "weight": 7.7922077922077921
        }, {
            "id": 537195764,
            "name": "Jonathan Toews",
            "weight": 7.1428571428571432
        }, {
            "id": 537656481,
            "name": "Braden Holtby",
            "weight": 7.1428571428571432
        }, {
            "id": 537645486,
            "name": "Philadelphia Flyers",
            "weight": 5.8441558441558445
        }, {
            "id": 537196471,
            "name": "Ryan Getzlaf",
            "weight": 5.8441558441558445
        }, {
            "id": 537200400,
            "name": "Henrik Lundqvist",
            "weight": 5.8441558441558445
        }, {
            "id": 537626339,
            "name": "Corey Crawford",
            "weight": 5.8441558441558445
        }, {
            "id": 537233217,
            "name": "San Jose Sharks",
            "weight": 5.8441558441558445
        }, {
            "id": 537628271,
            "name": "New Jersey Devils",
            "weight": 5.8441558441558445
        }, {
            "id": 537628741,
            "name": "Derek Stepan",
            "weight": 5.1948051948051948
        }, {
            "id": 537196775,
            "name": "Steven Stamkos",
            "weight": 5.1948051948051948
        }, {
            "id": 537516593,
            "name": "Detroit Red Wings",
            "weight": 5.1948051948051948
        }, {
            "id": 537206071,
            "name": "Corey Perry",
            "weight": 4.5454545454545459
        }, {
            "id": 537188992,
            "name": "Evgeni Malkin",
            "weight": 4.5454545454545459
        }, {
            "id": 537628708,
            "name": "Nashville Predators",
            "weight": 4.5454545454545459
        }, {
            "id": 537635768,
            "name": "Tampa Bay Lightning",
            "weight": 4.5454545454545459
        }, {
            "id": 537467193,
            "name": "Joel Quenneville",
            "weight": 3.8961038961038961
        }, {
            "id": 537209684,
            "name": "Carey Price",
            "weight": 3.8961038961038961
        }, {
            "id": 537627959,
            "name": "St. Louis Blues",
            "weight": 3.8961038961038961
        }, {
            "id": 537635733,
            "name": "Florida Panthers",
            "weight": 3.8961038961038961
        }, {
            "id": 537637712,
            "name": "Anaheim Ducks",
            "weight": 3.8961038961038961
        }, {
            "id": 537256425,
            "name": "Marc-Andre Fleury",
            "weight": 3.8961038961038961
        }, {
            "id": 538082050,
            "name": "Pekka Rinne",
            "weight": 3.2467532467532467
        }, {
            "id": 537694935,
            "name": "Todd McLellan",
            "weight": 3.2467532467532467
        }, {
            "id": 538277397,
            "name": "Tuukka Rask",
            "weight": 3.2467532467532467
        }, {
            "id": 537198759,
            "name": "Jaroslav Halak",
            "weight": 3.2467532467532467
        }, {
            "id": 537606643,
            "name": "Mike Babcock",
            "weight": 3.2467532467532467
        }, {
            "id": 537233216,
            "name": "Los Angeles Kings",
            "weight": 3.2467532467532467
        }, {
            "id": 537498480,
            "name": "Patrick Sharp",
            "weight": 3.2467532467532467
        }, {
            "id": 537630216,
            "name": "Minnesota Wild",
            "weight": 3.2467532467532467
        }, {
            "id": 537631948,
            "name": "New York Islanders",
            "weight": 3.2467532467532467
        }, {
            "id": 537649450,
            "name": "Chris Kreider",
            "weight": 3.2467532467532467
        }]
    }, {
        "id": 268458490,
        "name": "Volleyball",
        "weight": 2.6664312202013067,
        "topics": [{
            "id": 537084735,
            "name": "National Collegiate Athletic Association",
            "weight": 80.794701986754973
        }, {
            "id": 268490122,
            "name": "Beach Volley",
            "weight": 13.245033112582782,
            "topics": [{
                "id": 537698940,
                "name": "Kerri Walsh",
                "weight": 5.0
            }, {
                "id": 537132222,
                "name": "Federation Internationale de Volleyball",
                "weight": 5.0
            }]
        }]
    }, {
        "id": 268489825,
        "name": "Gymnastics",
        "weight": 2.5957972805933252,
        "topics": [{
            "id": 537084735,
            "name": "National Collegiate Athletic Association",
            "weight": 82.993197278911566
        }, {
            "id": 268490101,
            "name": "Artistic Gymnastics",
            "weight": 13.605442176870747,
            "topics": [{
                "id": 537873103,
                "name": "Beth Tweddle",
                "weight": 45.0
            }, {
                "id": 537191313,
                "name": "Shawn Johnson",
                "weight": 25.0
            }]
        }, {
            "id": 537628001,
            "name": "Southeastern Conference",
            "weight": 7.4829931972789119
        }, {
            "id": 268489993,
            "name": "Gymnastics World Championships",
            "weight": 6.8027210884353737,
            "topics": [{
                "id": 537873103,
                "name": "Beth Tweddle",
                "weight": 90.0
            }]
        }, {
            "id": 537873103,
            "name": "Beth Tweddle",
            "weight": 6.1224489795918364
        }, {
            "id": 268490102,
            "name": "Rhythmic Gymnastics",
            "weight": 5.4421768707482991
        }, {
            "id": 537191313,
            "name": "Shawn Johnson",
            "weight": 3.4013605442176869
        }]
    }, {
        "id": 268486508,
        "name": "Lacrosse",
        "weight": 2.4015539466713758,
        "topics": [{
            "id": 537084735,
            "name": "National Collegiate Athletic Association",
            "weight": 89.705882352941174
        }, {
            "id": 537732760,
            "name": "Buick",
            "weight": 16.176470588235293
        }, {
            "id": 537632176,
            "name": "Atlantic Coast Conference",
            "weight": 5.1470588235294121
        }, {
            "id": 537653777,
            "name": "Big East Conference",
            "weight": 3.6764705882352939
        }, {
            "id": 537648097,
            "name": "Big Ten Conference",
            "weight": 2.9411764705882355
        }, {
            "id": 537644988,
            "name": "Patriot League",
            "weight": 2.2058823529411766
        }, {
            "id": 537150221,
            "name": "Major League Lacrosse",
            "weight": 1.4705882352941178
        }, {
            "id": 538065206,
            "name": "Ivy League",
            "weight": 1.4705882352941178
        }]
    }, {
        "id": 268436980,
        "name": "Golf",
        "weight": 2.3132615221613984,
        "topics": [{
            "id": 268490211,
            "name": "Ryder Cup",
            "weight": 53.435114503816791,
            "topics": [{
                "id": 537177720,
                "name": "Rory McIlroy",
                "weight": 44.285714285714285
            }, {
                "id": 537705363,
                "name": "Jordan Spieth",
                "weight": 41.428571428571431
            }, {
                "id": 537192392,
                "name": "Phil Mickelson",
                "weight": 34.285714285714285
            }, {
                "id": 537178034,
                "name": "Tiger Woods",
                "weight": 32.857142857142854
            }, {
                "id": 537631491,
                "name": "PGA European Tour",
                "weight": 24.285714285714285
            }, {
                "id": 537188588,
                "name": "Justin Rose",
                "weight": 18.571428571428573
            }, {
                "id": 537199526,
                "name": "Dustin Johnson",
                "weight": 7.1428571428571432
            }, {
                "id": 537188970,
                "name": "Darren Clarke",
                "weight": 7.1428571428571432
            }, {
                "id": 537271953,
                "name": "Jason Dufner",
                "weight": 5.7142857142857144
            }, {
                "id": 537196680,
                "name": "Jack Nicklaus",
                "weight": 4.2857142857142856
            }, {
                "id": 537286415,
                "name": "Nick Faldo",
                "weight": 2.8571428571428572
            }, {
                "id": 537188589,
                "name": "Henrik Stenson",
                "weight": 2.8571428571428572
            }, {
                "id": 537188967,
                "name": "Ian Poulter",
                "weight": 2.8571428571428572
            }, {
                "id": 537189480,
                "name": "Paul McGinley",
                "weight": 2.8571428571428572
            }, {
                "id": 537196100,
                "name": "Jim Furyk",
                "weight": 2.8571428571428572
            }, {
                "id": 537188735,
                "name": "Lee Westwood",
                "weight": 2.8571428571428572
            }, {
                "id": 537250764,
                "name": "Paul Lawrie",
                "weight": 2.8571428571428572
            }, {
                "id": 537251814,
                "name": "Graeme McDowell",
                "weight": 2.8571428571428572
            }, {
                "id": 537266238,
                "name": "Jay Haas",
                "weight": 1.4285714285714286
            }, {
                "id": 537189630,
                "name": "Ross Fisher",
                "weight": 1.4285714285714286
            }, {
                "id": 537202554,
                "name": "Martin Kaymer",
                "weight": 1.4285714285714286
            }, {
                "id": 537213115,
                "name": "Tom Lehman",
                "weight": 1.4285714285714286
            }, {
                "id": 537084365,
                "name": "Padraig Harrington",
                "weight": 1.4285714285714286
            }]
        }, {
            "id": 268490209,
            "name": "PGA Championship",
            "weight": 47.328244274809158,
            "topics": [{
                "id": 537177720,
                "name": "Rory McIlroy",
                "weight": 50.0
            }, {
                "id": 537705363,
                "name": "Jordan Spieth",
                "weight": 46.774193548387096
            }, {
                "id": 537192392,
                "name": "Phil Mickelson",
                "weight": 38.70967741935484
            }, {
                "id": 537178034,
                "name": "Tiger Woods",
                "weight": 37.096774193548384
            }, {
                "id": 537177756,
                "name": "Rickie Fowler",
                "weight": 20.967741935483872
            }, {
                "id": 537188588,
                "name": "Justin Rose",
                "weight": 20.967741935483872
            }, {
                "id": 537208480,
                "name": "Bubba Watson",
                "weight": 12.903225806451612
            }, {
                "id": 537199526,
                "name": "Dustin Johnson",
                "weight": 8.064516129032258
            }, {
                "id": 537188970,
                "name": "Darren Clarke",
                "weight": 8.064516129032258
            }, {
                "id": 537271953,
                "name": "Jason Dufner",
                "weight": 6.4516129032258061
            }, {
                "id": 537188589,
                "name": "Henrik Stenson",
                "weight": 3.225806451612903
            }, {
                "id": 537189998,
                "name": "Greg Norman",
                "weight": 3.225806451612903
            }, {
                "id": 537104609,
                "name": "Professional Golfers' Association of America",
                "weight": 3.225806451612903
            }, {
                "id": 537251814,
                "name": "Graeme McDowell",
                "weight": 3.225806451612903
            }, {
                "id": 538321821,
                "name": "Inbee Park",
                "weight": 1.6129032258064515
            }, {
                "id": 537202554,
                "name": "Martin Kaymer",
                "weight": 1.6129032258064515
            }, {
                "id": 537084365,
                "name": "Padraig Harrington",
                "weight": 1.6129032258064515
            }]
        }, {
            "id": 536892410,
            "name": "Bridgestone",
            "weight": 32.824427480916029
        }, {
            "id": 537177720,
            "name": "Rory McIlroy",
            "weight": 23.664122137404579
        }, {
            "id": 537705363,
            "name": "Jordan Spieth",
            "weight": 22.137404580152673
        }, {
            "id": 537192392,
            "name": "Phil Mickelson",
            "weight": 18.3206106870229
        }, {
            "id": 537178034,
            "name": "Tiger Woods",
            "weight": 17.557251908396946
        }, {
            "id": 268490519,
            "name": "British Open",
            "weight": 12.977099236641221,
            "topics": [{
                "id": 538069763,
                "name": "Lydia Ko",
                "weight": 29.411764705882351
            }, {
                "id": 537196680,
                "name": "Jack Nicklaus",
                "weight": 17.647058823529413
            }, {
                "id": 537201496,
                "name": "Michelle Wie",
                "weight": 11.764705882352942
            }, {
                "id": 537189998,
                "name": "Greg Norman",
                "weight": 11.764705882352942
            }, {
                "id": 538321821,
                "name": "Inbee Park",
                "weight": 5.882352941176471
            }]
        }, {
            "id": 537631491,
            "name": "PGA European Tour",
            "weight": 12.977099236641221
        }, {
            "id": 537177756,
            "name": "Rickie Fowler",
            "weight": 9.9236641221374047
        }, {
            "id": 537188588,
            "name": "Justin Rose",
            "weight": 9.9236641221374047
        }, {
            "id": 537208480,
            "name": "Bubba Watson",
            "weight": 6.106870229007634
        }, {
            "id": 537135412,
            "name": "LPGA (nonprofit)",
            "weight": 3.8167938931297711
        }, {
            "id": 537199526,
            "name": "Dustin Johnson",
            "weight": 3.8167938931297711
        }, {
            "id": 538069763,
            "name": "Lydia Ko",
            "weight": 3.8167938931297711
        }, {
            "id": 537188970,
            "name": "Darren Clarke",
            "weight": 3.8167938931297711
        }, {
            "id": 537192325,
            "name": "Arnold Palmer",
            "weight": 3.053435114503817
        }, {
            "id": 537197161,
            "name": "Ernie Els",
            "weight": 3.053435114503817
        }, {
            "id": 537196680,
            "name": "Jack Nicklaus",
            "weight": 2.2900763358778624
        }, {
            "id": 537286415,
            "name": "Nick Faldo",
            "weight": 1.5267175572519085
        }, {
            "id": 537188589,
            "name": "Henrik Stenson",
            "weight": 1.5267175572519085
        }, {
            "id": 537188967,
            "name": "Ian Poulter",
            "weight": 1.5267175572519085
        }, {
            "id": 537189480,
            "name": "Paul McGinley",
            "weight": 1.5267175572519085
        }, {
            "id": 537196100,
            "name": "Jim Furyk",
            "weight": 1.5267175572519085
        }, {
            "id": 537188735,
            "name": "Lee Westwood",
            "weight": 1.5267175572519085
        }, {
            "id": 537189998,
            "name": "Greg Norman",
            "weight": 1.5267175572519085
        }, {
            "id": 537104609,
            "name": "Professional Golfers' Association of America",
            "weight": 1.5267175572519085
        }, {
            "id": 537640491,
            "name": "Branden Grace",
            "weight": 1.5267175572519085
        }, {
            "id": 537250764,
            "name": "Paul Lawrie",
            "weight": 1.5267175572519085
        }, {
            "id": 537251814,
            "name": "Graeme McDowell",
            "weight": 1.5267175572519085
        }]
    }, {
        "id": 268458473,
        "name": "Winter Sports",
        "weight": 2.295603037259403,
        "topics": [{
            "id": 268487139,
            "name": "Skating",
            "weight": 40.769230769230766,
            "topics": [{
                "id": 268490379,
                "name": "Figure Skating",
                "weight": 62.264150943396224,
                "topics": [{
                    "id": 537210933,
                    "name": "Tonya Harding",
                    "weight": 9.0909090909090917
                }, {
                    "id": 537217536,
                    "name": "Meryl Davis",
                    "weight": 9.0909090909090917
                }, {
                    "id": 537875259,
                    "name": "Andrew Poje",
                    "weight": 9.0909090909090917
                }, {
                    "id": 537701316,
                    "name": "Nancy Kerrigan",
                    "weight": 6.0606060606060606
                }, {
                    "id": 537196796,
                    "name": "Yu-Na Kim",
                    "weight": 6.0606060606060606
                }, {
                    "id": 537873602,
                    "name": "Kaitlyn Weaver",
                    "weight": 6.0606060606060606
                }, {
                    "id": 538241536,
                    "name": "Evan Bates",
                    "weight": 3.0303030303030303
                }, {
                    "id": 538239599,
                    "name": "Madison Chock",
                    "weight": 3.0303030303030303
                }, {
                    "id": 537195035,
                    "name": "Johnny Weir",
                    "weight": 3.0303030303030303
                }, {
                    "id": 537197814,
                    "name": "Patrick Chan",
                    "weight": 3.0303030303030303
                }, {
                    "id": 537655115,
                    "name": "Michelle Kwan",
                    "weight": 3.0303030303030303
                }, {
                    "id": 537121945,
                    "name": "International Skating Union",
                    "weight": 3.0303030303030303
                }, {
                    "id": 537197699,
                    "name": "Adam Rippon",
                    "weight": 3.0303030303030303
                }]
            }, {
                "id": 268490377,
                "name": "Speed Skating",
                "weight": 41.509433962264154,
                "topics": [{
                    "id": 537193666,
                    "name": "Clara Hughes",
                    "weight": 13.636363636363637
                }, {
                    "id": 537662073,
                    "name": "Mark Tuitert",
                    "weight": 4.5454545454545459
                }, {
                    "id": 537196111,
                    "name": "Cindy Klassen",
                    "weight": 4.5454545454545459
                }, {
                    "id": 537197817,
                    "name": "Charles Hamelin",
                    "weight": 4.5454545454545459
                }, {
                    "id": 537197818,
                    "name": "Marianne St-Gelais",
                    "weight": 4.5454545454545459
                }, {
                    "id": 537121945,
                    "name": "International Skating Union",
                    "weight": 4.5454545454545459
                }]
            }, {
                "id": 537193666,
                "name": "Clara Hughes",
                "weight": 5.6603773584905657
            }, {
                "id": 537210933,
                "name": "Tonya Harding",
                "weight": 5.6603773584905657
            }, {
                "id": 537875259,
                "name": "Andrew Poje",
                "weight": 5.6603773584905657
            }, {
                "id": 537662685,
                "name": "Christopher Dean",
                "weight": 3.7735849056603774
            }, {
                "id": 537701316,
                "name": "Nancy Kerrigan",
                "weight": 3.7735849056603774
            }, {
                "id": 537196796,
                "name": "Yu-Na Kim",
                "weight": 3.7735849056603774
            }, {
                "id": 537873602,
                "name": "Kaitlyn Weaver",
                "weight": 3.7735849056603774
            }, {
                "id": 538239599,
                "name": "Madison Chock",
                "weight": 1.8867924528301887
            }, {
                "id": 537195035,
                "name": "Johnny Weir",
                "weight": 1.8867924528301887
            }, {
                "id": 537196111,
                "name": "Cindy Klassen",
                "weight": 1.8867924528301887
            }, {
                "id": 537197814,
                "name": "Patrick Chan",
                "weight": 1.8867924528301887
            }, {
                "id": 537197817,
                "name": "Charles Hamelin",
                "weight": 1.8867924528301887
            }, {
                "id": 537197818,
                "name": "Marianne St-Gelais",
                "weight": 1.8867924528301887
            }, {
                "id": 537217159,
                "name": "Jayne Torvill",
                "weight": 1.8867924528301887
            }, {
                "id": 537655115,
                "name": "Michelle Kwan",
                "weight": 1.8867924528301887
            }, {
                "id": 537121945,
                "name": "International Skating Union",
                "weight": 1.8867924528301887
            }]
        }, {
            "id": 268487142,
            "name": "Skiing",
            "weight": 40.769230769230766,
            "topics": [{
                "id": 537218512,
                "name": "Lindsey Kildow",
                "weight": 43.39622641509434
            }, {
                "id": 537197139,
                "name": "Lara Gut",
                "weight": 9.433962264150944
            }, {
                "id": 537214516,
                "name": "Ingemar Stenmark",
                "weight": 7.5471698113207548
            }, {
                "id": 537134244,
                "name": "International Ski Federation",
                "weight": 3.7735849056603774
            }, {
                "id": 537193345,
                "name": "Kjetil Jansrud",
                "weight": 3.7735849056603774
            }, {
                "id": 537197875,
                "name": "Fabienne Suter",
                "weight": 3.7735849056603774
            }, {
                "id": 537202227,
                "name": "Steven Nyman",
                "weight": 3.7735849056603774
            }, {
                "id": 537648723,
                "name": "Felix Neureuther",
                "weight": 3.7735849056603774
            }, {
                "id": 537672090,
                "name": "Hannes Reichelt",
                "weight": 1.8867924528301887
            }, {
                "id": 537934788,
                "name": "Marcel Hirscher",
                "weight": 1.8867924528301887
            }, {
                "id": 537170825,
                "name": "Manuel Osborne-Paradis",
                "weight": 1.8867924528301887
            }, {
                "id": 537193681,
                "name": "Ted Ligety",
                "weight": 1.8867924528301887
            }, {
                "id": 537200801,
                "name": "Nadia Fanchini",
                "weight": 1.8867924528301887
            }, {
                "id": 537221215,
                "name": "Bode Miller",
                "weight": 1.8867924528301887
            }, {
                "id": 538023340,
                "name": "Mikaela Shiffrin",
                "weight": 1.8867924528301887
            }, {
                "id": 537206040,
                "name": "Jennifer Heil",
                "weight": 1.8867924528301887
            }, {
                "id": 537197585,
                "name": "Erik Guay",
                "weight": 1.8867924528301887
            }, {
                "id": 538568950,
                "name": "Aksel Lund Svindal",
                "weight": 1.8867924528301887
            }]
        }, {
            "id": 268489822,
            "name": "Sledding",
            "weight": 40.769230769230766
        }, {
            "id": 268487159,
            "name": "Snowboarding",
            "weight": 39.230769230769234,
            "topics": [{
                "id": 537134244,
                "name": "International Ski Federation",
                "weight": 3.9215686274509802
            }, {
                "id": 537195752,
                "name": "Shaun White",
                "weight": 3.9215686274509802
            }, {
                "id": 537195021,
                "name": "Kelly Clark",
                "weight": 1.9607843137254901
            }, {
                "id": 537197134,
                "name": "Seth Wescott",
                "weight": 1.9607843137254901
            }]
        }, {
            "id": 268490317,
            "name": "Curling",
            "weight": 11.538461538461538
        }]
    }, {
        "id": 268490294,
        "name": "Futsal",
        "weight": 2.2426275825534168,
        "topics": [{
            "id": 537132221,
            "name": "Federation Internationale de Football Association",
            "weight": 89.763779527559052
        }, {
            "id": 537116548,
            "name": "UEFA (soccer)",
            "weight": 27.559055118110237
        }, {
            "id": 537109612,
            "name": "CONCACAF (nonprofit)",
            "weight": 17.322834645669293
        }, {
            "id": 537119681,
            "name": "CONMEBOL (nonprofit)",
            "weight": 10.236220472440944
        }]
    }, {
        "id": 268458471,
        "name": "Rugby",
        "weight": 2.0660427335334628,
        "topics": [{
            "id": 268489958,
            "name": "Rugby Union",
            "weight": 64.1025641025641,
            "topics": [{
                "id": 268490391,
                "name": "Six Nations Championships",
                "weight": 44.0
            }, {
                "id": 536939940,
                "name": "Heineken International",
                "weight": 21.333333333333332
            }, {
                "id": 537954316,
                "name": "Rugby Football Union",
                "weight": 8.0
            }, {
                "id": 537994525,
                "name": "Sam Burgess",
                "weight": 5.333333333333333
            }, {
                "id": 538571557,
                "name": "Super 15",
                "weight": 5.333333333333333
            }, {
                "id": 537708490,
                "name": "Dylan Hartley",
                "weight": 4.0
            }, {
                "id": 537538223,
                "name": "Matt Giteau",
                "weight": 2.6666666666666665
            }, {
                "id": 537989313,
                "name": "Michael Cheika",
                "weight": 2.6666666666666665
            }, {
                "id": 538005699,
                "name": "Quade Cooper",
                "weight": 2.6666666666666665
            }, {
                "id": 537118394,
                "name": "Australian Rugby Union",
                "weight": 2.6666666666666665
            }, {
                "id": 538053590,
                "name": "South African Rugby Union",
                "weight": 1.3333333333333333
            }, {
                "id": 537267891,
                "name": "Irish Rugby Football Union",
                "weight": 1.3333333333333333
            }, {
                "id": 537784825,
                "name": "Jamie Roberts",
                "weight": 1.3333333333333333
            }, {
                "id": 537800868,
                "name": "Paul O'Connell",
                "weight": 1.3333333333333333
            }, {
                "id": 538089238,
                "name": "Scottish Rugby Union",
                "weight": 1.3333333333333333
            }, {
                "id": 537445072,
                "name": "Adam Ashley-Cooper",
                "weight": 1.3333333333333333
            }, {
                "id": 537481522,
                "name": "Will Genia",
                "weight": 1.3333333333333333
            }, {
                "id": 537357291,
                "name": "Jamie Heaslip",
                "weight": 1.3333333333333333
            }, {
                "id": 537357434,
                "name": "Drew Mitchell",
                "weight": 1.3333333333333333
            }, {
                "id": 537310488,
                "name": "Sonny Bill Williams",
                "weight": 1.3333333333333333
            }, {
                "id": 537782220,
                "name": "Victor Matfield",
                "weight": 1.3333333333333333
            }, {
                "id": 538571961,
                "name": "Exeter Chiefs",
                "weight": 1.3333333333333333
            }, {
                "id": 538279079,
                "name": "New South Wales Waratahs",
                "weight": 1.3333333333333333
            }, {
                "id": 537258324,
                "name": "Welsh Rugby Union",
                "weight": 1.3333333333333333
            }]
        }, {
            "id": 268458472,
            "name": "Rugby League",
            "weight": 49.572649572649574,
            "topics": [{
                "id": 268490329,
                "name": "National Rugby League",
                "weight": 50.0,
                "topics": [{
                    "id": 537994525,
                    "name": "Sam Burgess",
                    "weight": 13.793103448275861
                }, {
                    "id": 537877488,
                    "name": "Johnathan Thurston",
                    "weight": 6.8965517241379306
                }, {
                    "id": 537957694,
                    "name": "Ricky Stuart",
                    "weight": 3.4482758620689653
                }, {
                    "id": 537960549,
                    "name": "Greg Bird",
                    "weight": 3.4482758620689653
                }, {
                    "id": 537348716,
                    "name": "Steve McNamara",
                    "weight": 3.4482758620689653
                }, {
                    "id": 537956852,
                    "name": "Paul Gallen",
                    "weight": 3.4482758620689653
                }, {
                    "id": 537982124,
                    "name": "Daly Cherry-Evans",
                    "weight": 3.4482758620689653
                }]
            }, {
                "id": 538000512,
                "name": "Mitchell Pearce",
                "weight": 13.793103448275861
            }, {
                "id": 537105895,
                "name": "Super League",
                "weight": 13.793103448275861
            }, {
                "id": 538314147,
                "name": "Wigan",
                "weight": 12.068965517241379
            }, {
                "id": 537153447,
                "name": "Rugby Football League",
                "weight": 6.8965517241379306
            }, {
                "id": 537994525,
                "name": "Sam Burgess",
                "weight": 6.8965517241379306
            }, {
                "id": 537154683,
                "name": "Super League",
                "weight": 6.8965517241379306
            }, {
                "id": 538270349,
                "name": "Hull F.C.",
                "weight": 3.4482758620689653
            }, {
                "id": 537877488,
                "name": "Johnathan Thurston",
                "weight": 3.4482758620689653
            }, {
                "id": 537957694,
                "name": "Ricky Stuart",
                "weight": 1.7241379310344827
            }, {
                "id": 537960549,
                "name": "Greg Bird",
                "weight": 1.7241379310344827
            }, {
                "id": 537348716,
                "name": "Steve McNamara",
                "weight": 1.7241379310344827
            }, {
                "id": 538007323,
                "name": "Kevin Sinfield",
                "weight": 1.7241379310344827
            }, {
                "id": 537956852,
                "name": "Paul Gallen",
                "weight": 1.7241379310344827
            }, {
                "id": 537310488,
                "name": "Sonny Bill Williams",
                "weight": 1.7241379310344827
            }, {
                "id": 537957715,
                "name": "Trent Robinson",
                "weight": 1.7241379310344827
            }, {
                "id": 537982124,
                "name": "Daly Cherry-Evans",
                "weight": 1.7241379310344827
            }]
        }, {
            "id": 268489979,
            "name": "Rugby World Cup",
            "weight": 22.222222222222221,
            "topics": [{
                "id": 537994525,
                "name": "Sam Burgess",
                "weight": 15.384615384615385
            }, {
                "id": 537538223,
                "name": "Matt Giteau",
                "weight": 7.6923076923076925
            }, {
                "id": 537989313,
                "name": "Michael Cheika",
                "weight": 7.6923076923076925
            }, {
                "id": 538005699,
                "name": "Quade Cooper",
                "weight": 7.6923076923076925
            }, {
                "id": 537784825,
                "name": "Jamie Roberts",
                "weight": 3.8461538461538463
            }, {
                "id": 537445072,
                "name": "Adam Ashley-Cooper",
                "weight": 3.8461538461538463
            }, {
                "id": 537866099,
                "name": "Keith Earls",
                "weight": 3.8461538461538463
            }, {
                "id": 537310488,
                "name": "Sonny Bill Williams",
                "weight": 3.8461538461538463
            }, {
                "id": 537782220,
                "name": "Victor Matfield",
                "weight": 3.8461538461538463
            }]
        }, {
            "id": 536892369,
            "name": "Aviva",
            "weight": 16.239316239316238
        }, {
            "id": 538000512,
            "name": "Mitchell Pearce",
            "weight": 6.8376068376068373
        }, {
            "id": 537105895,
            "name": "Super League",
            "weight": 6.8376068376068373
        }, {
            "id": 538314147,
            "name": "Wigan",
            "weight": 5.982905982905983
        }, {
            "id": 537954316,
            "name": "Rugby Football Union",
            "weight": 5.1282051282051286
        }, {
            "id": 537153447,
            "name": "Rugby Football League",
            "weight": 3.4188034188034186
        }, {
            "id": 537994525,
            "name": "Sam Burgess",
            "weight": 3.4188034188034186
        }, {
            "id": 538571557,
            "name": "Super 15",
            "weight": 3.4188034188034186
        }, {
            "id": 537154683,
            "name": "Super League",
            "weight": 3.4188034188034186
        }, {
            "id": 537538223,
            "name": "Matt Giteau",
            "weight": 1.7094017094017093
        }, {
            "id": 537989313,
            "name": "Michael Cheika",
            "weight": 1.7094017094017093
        }, {
            "id": 538005699,
            "name": "Quade Cooper",
            "weight": 1.7094017094017093
        }, {
            "id": 538270349,
            "name": "Hull F.C.",
            "weight": 1.7094017094017093
        }, {
            "id": 537877488,
            "name": "Johnathan Thurston",
            "weight": 1.7094017094017093
        }, {
            "id": 537118394,
            "name": "Australian Rugby Union",
            "weight": 1.7094017094017093
        }]
    }, {
        "id": 268458478,
        "name": "Wrestling",
        "weight": 1.8364824298075224,
        "topics": [{
            "id": 537106336,
            "name": "The World Wrestling Federation Entertainment, Incorporated",
            "weight": 26.923076923076923
        }, {
            "id": 537991948,
            "name": "Mark Calaway",
            "weight": 17.307692307692307
        }, {
            "id": 538080407,
            "name": "Jim Ross",
            "weight": 16.346153846153847
        }, {
            "id": 537970665,
            "name": "Royal Rumble",
            "weight": 13.461538461538462
        }, {
            "id": 537196487,
            "name": "John Cena",
            "weight": 10.576923076923077
        }, {
            "id": 538074305,
            "name": "Joe Anoa'i",
            "weight": 8.6538461538461533
        }, {
            "id": 537661113,
            "name": "Owen Hart",
            "weight": 7.6923076923076925
        }, {
            "id": 537962736,
            "name": "Ric Flair",
            "weight": 7.6923076923076925
        }, {
            "id": 537196777,
            "name": "Brock Lesnar",
            "weight": 7.6923076923076925
        }, {
            "id": 538019027,
            "name": "Bryan Danielson",
            "weight": 6.7307692307692308
        }, {
            "id": 537233291,
            "name": "Ring of Honor",
            "weight": 5.7692307692307692
        }, {
            "id": 537662741,
            "name": "WWE Friday Night SmackDown!",
            "weight": 4.8076923076923075
        }, {
            "id": 537226459,
            "name": "Bret Hart",
            "weight": 4.8076923076923075
        }, {
            "id": 537121552,
            "name": "Hulk Hogan",
            "weight": 4.8076923076923075
        }, {
            "id": 537658128,
            "name": "WWE NXT",
            "weight": 3.8461538461538463
        }, {
            "id": 537956837,
            "name": "Matt Hardy",
            "weight": 3.8461538461538463
        }, {
            "id": 537957647,
            "name": "Kurt Angle",
            "weight": 3.8461538461538463
        }, {
            "id": 537227143,
            "name": "Vince McMahon",
            "weight": 3.8461538461538463
        }, {
            "id": 537285541,
            "name": "Kevin Nash",
            "weight": 3.8461538461538463
        }, {
            "id": 537202166,
            "name": "Chris Jericho",
            "weight": 2.8846153846153846
        }, {
            "id": 538209780,
            "name": "Seth Rollins",
            "weight": 2.8846153846153846
        }, {
            "id": 537989827,
            "name": "Booker Huffman",
            "weight": 2.8846153846153846
        }, {
            "id": 537227241,
            "name": "Mick Foley",
            "weight": 2.8846153846153846
        }, {
            "id": 537659986,
            "name": "Virgil Runnels III",
            "weight": 1.9230769230769231
        }, {
            "id": 538329230,
            "name": "Bray Wyatt",
            "weight": 1.9230769230769231
        }, {
            "id": 538206711,
            "name": "Alberto Del Rio",
            "weight": 1.9230769230769231
        }, {
            "id": 538084814,
            "name": "Jeff Jarrett",
            "weight": 1.9230769230769231
        }, {
            "id": 537196511,
            "name": "Randy Orton",
            "weight": 1.9230769230769231
        }, {
            "id": 537611004,
            "name": "Wrestling",
            "weight": 1.9230769230769231
        }, {
            "id": 538015101,
            "name": "Daniel Bryan",
            "weight": 1.9230769230769231
        }, {
            "id": 537117031,
            "name": "WCW Studios",
            "weight": 1.9230769230769231
        }]
    }, {
        "id": 268489951,
        "name": "Rowing",
        "weight": 1.5186297015716053
    }, {
        "id": 268458463,
        "name": "Cricket",
        "weight": 1.5009712166696096,
        "topics": [{
            "id": 537511167,
            "name": "Kevin Pietersen",
            "weight": 12.941176470588236
        }, {
            "id": 537148866,
            "name": "International Cricket Council",
            "weight": 10.588235294117647
        }, {
            "id": 538226625,
            "name": "Big Bash League",
            "weight": 10.588235294117647
        }, {
            "id": 537466854,
            "name": "Alastair Cook",
            "weight": 9.4117647058823533
        }, {
            "id": 537396324,
            "name": "Stuart Broad",
            "weight": 5.882352941176471
        }, {
            "id": 537148580,
            "name": "Indian Premier League",
            "weight": 5.882352941176471
        }, {
            "id": 538262651,
            "name": "Australia national cricket team",
            "weight": 5.882352941176471
        }, {
            "id": 537651390,
            "name": "Eoin Morgan",
            "weight": 5.882352941176471
        }, {
            "id": 537644753,
            "name": "Chris Gayle",
            "weight": 5.882352941176471
        }, {
            "id": 538307495,
            "name": "New Zealand national cricket team",
            "weight": 4.7058823529411766
        }, {
            "id": 538048757,
            "name": "Richie Benaud",
            "weight": 4.7058823529411766
        }, {
            "id": 537677383,
            "name": "Adam Voges",
            "weight": 3.5294117647058822
        }, {
            "id": 537629585,
            "name": "Dale Steyn",
            "weight": 3.5294117647058822
        }, {
            "id": 537631612,
            "name": "Shane Watson",
            "weight": 3.5294117647058822
        }, {
            "id": 537637856,
            "name": "Peter Siddle",
            "weight": 3.5294117647058822
        }, {
            "id": 537957706,
            "name": "Joe Root",
            "weight": 2.3529411764705883
        }, {
            "id": 537190487,
            "name": "Sachin Tendulkar",
            "weight": 2.3529411764705883
        }, {
            "id": 537991102,
            "name": "West Indian cricket team",
            "weight": 2.3529411764705883
        }, {
            "id": 537085043,
            "name": "Mahendra Dhoni",
            "weight": 2.3529411764705883
        }, {
            "id": 538003531,
            "name": "India national cricket team",
            "weight": 2.3529411764705883
        }, {
            "id": 537746015,
            "name": "Jos Buttler",
            "weight": 2.3529411764705883
        }, {
            "id": 537881196,
            "name": "Mitchell Starc",
            "weight": 2.3529411764705883
        }, {
            "id": 537640171,
            "name": "Martin Guptill",
            "weight": 2.3529411764705883
        }, {
            "id": 537643455,
            "name": "Abraham de Villiers",
            "weight": 2.3529411764705883
        }, {
            "id": 537647528,
            "name": "Brendon McCullum",
            "weight": 2.3529411764705883
        }, {
            "id": 538250189,
            "name": "Chris Cairns",
            "weight": 1.1764705882352942
        }, {
            "id": 537638522,
            "name": "Suresh Raina",
            "weight": 1.1764705882352942
        }, {
            "id": 537687487,
            "name": "Angelo Mathews",
            "weight": 1.1764705882352942
        }, {
            "id": 537953718,
            "name": "England and Wales Cricket Board",
            "weight": 1.1764705882352942
        }, {
            "id": 537780278,
            "name": "Anurag Thakur",
            "weight": 1.1764705882352942
        }, {
            "id": 537362626,
            "name": "Jonathan Trott",
            "weight": 1.1764705882352942
        }, {
            "id": 538024888,
            "name": "Cricket World Cup",
            "weight": 1.1764705882352942
        }, {
            "id": 537638821,
            "name": "Ross Taylor",
            "weight": 1.1764705882352942
        }, {
            "id": 537639051,
            "name": "Yuvraj Singh",
            "weight": 1.1764705882352942
        }, {
            "id": 537639710,
            "name": "Michael Vaughan",
            "weight": 1.1764705882352942
        }, {
            "id": 537641016,
            "name": "Pakistan Cricket Board",
            "weight": 1.1764705882352942
        }, {
            "id": 537646249,
            "name": "Phillip Hughes",
            "weight": 1.1764705882352942
        }, {
            "id": 537646311,
            "name": "Rohit Sharma",
            "weight": 1.1764705882352942
        }]
    }, {
        "id": 268490141,
        "name": "Shooting Sports",
        "weight": 1.1124845488257107,
        "topics": [{
            "id": 537136607,
            "name": "National Rifle Association",
            "weight": 76.19047619047619
        }, {
            "id": 537722015,
            "name": "National Shooting Sports Foundation",
            "weight": 3.1746031746031744
        }]
    }]
}, {
    "id": 268449469,
    "name": "Celebrations",
    "weight": 4.2638338715318733,
    "color": "#5770B1",
    "topics": [{
        "id": 268490125,
        "name": "Mother's Day",
        "weight": 46.928653185806944
    }, {
        "id": 268490368,
        "name": "New Year's Eve",
        "weight": 22.186188477680275,
        "topics": [{
            "id": 538197574,
            "name": "New Year's Day",
            "weight": 4.4711951848667244
        }, {
            "id": 537642056,
            "name": "Dick Clark's New Year's Rockin' Eve",
            "weight": 1.0318142734307825
        }]
    }, {
        "id": 268490399,
        "name": "Valentine's Day",
        "weight": 19.324685234643265
    }, {
        "id": 268490398,
        "name": "Mardi Gras",
        "weight": 9.1186570011446015,
        "topics": [{
            "id": 538226621,
            "name": "Mardi Gras: Spring Break",
            "weight": 2.3012552301255229
        }]
    }, {
        "id": 268436594,
        "name": "Christmas",
        "weight": 8.298359404807325,
        "topics": [{
            "id": 538278444,
            "name": "Halloween (Metal Band)",
            "weight": 28.045977011494251
        }, {
            "id": 536892904,
            "name": "Starbucks",
            "weight": 23.908045977011493
        }, {
            "id": 537191657,
            "name": "Mariah Carey",
            "weight": 13.103448275862069
        }, {
            "id": 538197574,
            "name": "New Year's Day",
            "weight": 11.954022988505747
        }, {
            "id": 538219644,
            "name": "Ariana Grande",
            "weight": 10.804597701149426
        }, {
            "id": 537188306,
            "name": "Kylie Minogue",
            "weight": 9.1954022988505741
        }, {
            "id": 537197213,
            "name": "Charlie Brown",
            "weight": 6.4367816091954024
        }, {
            "id": 537073091,
            "name": "Wm Morrison Supermarkets",
            "weight": 5.7471264367816088
        }, {
            "id": 537612043,
            "name": "Father Christmas",
            "weight": 5.7471264367816088
        }, {
            "id": 537105132,
            "name": "Salvation Army",
            "weight": 3.4482758620689653
        }, {
            "id": 537084699,
            "name": "Royal Mail",
            "weight": 3.2183908045977012
        }, {
            "id": 538299309,
            "name": "Pentatonix",
            "weight": 3.2183908045977012
        }, {
            "id": 538078859,
            "name": "Winter Wonderland",
            "weight": 2.0689655172413794
        }, {
            "id": 537620847,
            "name": "A Christmas Carol",
            "weight": 1.8390804597701149
        }]
    }, {
        "id": 268490457,
        "name": "Easter",
        "weight": 6.4097672644029,
        "topics": [{
            "id": 538110359,
            "name": "Pope Francis",
            "weight": 85.416666666666671
        }, {
            "id": 537956175,
            "name": "Saint George",
            "weight": 5.9523809523809526
        }]
    }, {
        "id": 268490378,
        "name": "Martin Luther King, Jr. Day",
        "weight": 4.9408622663105684
    }, {
        "id": 268490625,
        "name": "Independence Day",
        "weight": 3.6818008393742847,
        "topics": [{
            "id": 537214208,
            "name": "Roland Emmerich",
            "weight": 6.7357512953367875
        }, {
            "id": 537226497,
            "name": "Jeff Goldblum",
            "weight": 6.2176165803108807
        }, {
            "id": 537241008,
            "name": "Bill Pullman",
            "weight": 3.6269430051813472
        }, {
            "id": 537192279,
            "name": "Vivica A. Fox",
            "weight": 1.0362694300518134
        }]
    }, {
        "id": 268490302,
        "name": "Thanksgiving Day",
        "weight": 3.1667302556276229
    }, {
        "id": 268486267,
        "name": "Halloween",
        "weight": 2.9187333078977491,
        "topics": [{
            "id": 538278444,
            "name": "Halloween (Metal Band)",
            "weight": 79.738562091503269
        }, {
            "id": 537649428,
            "name": "The Simpsons",
            "weight": 13.071895424836601
        }, {
            "id": 537158343,
            "name": "ABC Family",
            "weight": 9.8039215686274517
        }, {
            "id": 537202111,
            "name": "John Carpenter",
            "weight": 7.1895424836601309
        }, {
            "id": 537210546,
            "name": "Rob Zombie",
            "weight": 7.1895424836601309
        }, {
            "id": 537970717,
            "name": "Day of the Dead",
            "weight": 2.6143790849673203
        }]
    }, {
        "id": 268490395,
        "name": "Brazilian Carnival",
        "weight": 1.0492178557802365
    }]
}, {
    "id": 268436597,
    "name": "Tech",
    "weight": 4.227230948178395,
    "color": "#1C5E9A",
    "topics": [{
        "id": 268459463,
        "name": "Internet",
        "weight": 68.020011545122188,
        "topics": [{
            "id": 537084737,
            "name": "Youtube",
            "weight": 46.421499292786422
        }, {
            "id": 268490148,
            "name": "Social Media",
            "weight": 34.455445544554458,
            "topics": [{
                "id": 268459477,
                "name": "Social Networking",
                "weight": 77.011494252873561,
                "topics": [{
                    "id": 537072917,
                    "name": "Facebook",
                    "weight": 47.014925373134325
                }, {
                    "id": 537072927,
                    "name": "Twitter",
                    "weight": 41.57782515991471
                }, {
                    "id": 537926669,
                    "name": "Instagram",
                    "weight": 34.008528784648185
                }, {
                    "id": 537232813,
                    "name": "Tumblr",
                    "weight": 8.7420042643923246
                }, {
                    "id": 537812725,
                    "name": "Google+",
                    "weight": 6.28997867803838
                }, {
                    "id": 537072922,
                    "name": "MySpace",
                    "weight": 3.8379530916844349
                }]
            }, {
                "id": 537072917,
                "name": "Facebook",
                "weight": 36.206896551724135
            }, {
                "id": 537072927,
                "name": "Twitter",
                "weight": 32.019704433497537
            }, {
                "id": 538278257,
                "name": "Islamic State in Iraq and the Levant",
                "weight": 18.555008210180624
            }, {
                "id": 537953873,
                "name": "Pinterest",
                "weight": 9.6880131362889976
            }, {
                "id": 537268971,
                "name": "Narendra Modi",
                "weight": 7.7996715927750406
            }, {
                "id": 538113858,
                "name": "BuzzFeed",
                "weight": 5.8292282430213467
            }]
        }, {
            "id": 537072917,
            "name": "Facebook",
            "weight": 12.475247524752476
        }, {
            "id": 536889304,
            "name": "Microsoft Corporation",
            "weight": 12.248939179632249
        }, {
            "id": 537072927,
            "name": "Twitter",
            "weight": 11.032531824611032
        }, {
            "id": 536899060,
            "name": "Google",
            "weight": 9.9009900990099009
        }, {
            "id": 537284095,
            "name": "iPhone",
            "weight": 9.0806223479490811
        }, {
            "id": 268487434,
            "name": "Web Servers",
            "weight": 7.4115983026874117
        }, {
            "id": 537074783,
            "name": "Hillary Clinton",
            "weight": 7.0155586987270153
        }, {
            "id": 268486677,
            "name": "Mobile Web",
            "weight": 5.7708628005657712
        }, {
            "id": 268485686,
            "name": "Blogging",
            "weight": 5.12022630834512,
            "topics": [{
                "id": 268486651,
                "name": "Micro-Blogging",
                "weight": 49.171270718232044
            }, {
                "id": 537232813,
                "name": "Tumblr",
                "weight": 45.303867403314918
            }, {
                "id": 537603493,
                "name": "WordPress",
                "weight": 23.756906077348066
            }, {
                "id": 537972409,
                "name": "Blogger",
                "weight": 14.3646408839779
            }]
        }, {
            "id": 537606170,
            "name": "Microsoft Windows",
            "weight": 4.9504950495049505
        }, {
            "id": 268459484,
            "name": "Cloud Computing",
            "weight": 4.3847241867043847,
            "topics": [{
                "id": 536929915,
                "name": "Dell",
                "weight": 49.032258064516128
            }, {
                "id": 537001386,
                "name": "Salesforce.com",
                "weight": 43.225806451612904
            }, {
                "id": 537142852,
                "name": "Alibaba Group",
                "weight": 40.0
            }, {
                "id": 538291314,
                "name": "Amazon Web Services",
                "weight": 21.29032258064516
            }, {
                "id": 536892536,
                "name": "EMC Corporation",
                "weight": 18.06451612903226
            }, {
                "id": 538125630,
                "name": "Amazon Web Services",
                "weight": 9.03225806451613
            }, {
                "id": 538135371,
                "name": "Mirantis",
                "weight": 3.225806451612903
            }]
        }, {
            "id": 536925330,
            "name": "Yahoo!",
            "weight": 4.13012729844413
        }, {
            "id": 268459478,
            "name": "Search Engines",
            "weight": 3.9886845827439887,
            "topics": [{
                "id": 538113673,
                "name": "DuckDuckGo",
                "weight": 4.25531914893617
            }]
        }, {
            "id": 537198213,
            "name": "Kim Kardashian",
            "weight": 3.932107496463932
        }, {
            "id": 268489760,
            "name": "Web Browsers",
            "weight": 3.6492220650636491,
            "topics": [{
                "id": 537604903,
                "name": "Mozilla Firefox",
                "weight": 44.961240310077521
            }, {
                "id": 537580675,
                "name": "Google Chrome",
                "weight": 31.782945736434108
            }, {
                "id": 537598491,
                "name": "JavaScript",
                "weight": 30.232558139534884
            }, {
                "id": 537608302,
                "name": "Internet Explorer",
                "weight": 26.356589147286822
            }, {
                "id": 537588399,
                "name": "Adobe Flash",
                "weight": 19.379844961240309
            }]
        }, {
            "id": 268485864,
            "name": "Content Management",
            "weight": 3.4512022630834513,
            "topics": [{
                "id": 268486881,
                "name": "Personalization",
                "weight": 52.459016393442624
            }, {
                "id": 268485919,
                "name": "Data Mining",
                "weight": 36.0655737704918,
                "topics": [{
                    "id": 537582040,
                    "name": "Microsoft SQL Server",
                    "weight": 11.363636363636363
                }]
            }, {
                "id": 537603493,
                "name": "WordPress",
                "weight": 35.245901639344261
            }, {
                "id": 537146444,
                "name": "Drupal",
                "weight": 1.639344262295082
            }]
        }, {
            "id": 538134442,
            "name": "Snapchat",
            "weight": 3.2531824611032532
        }, {
            "id": 537609238,
            "name": "iTunes",
            "weight": 3.1966053748231964
        }, {
            "id": 536929918,
            "name": "IBM",
            "weight": 3.1117397454031117
        }, {
            "id": 537069624,
            "name": "Mark Zuckerberg",
            "weight": 3.0834512022630833
        }, {
            "id": 536892982,
            "name": "Verizon Communications",
            "weight": 2.8854314002828856
        }, {
            "id": 537072920,
            "name": "LinkedIn",
            "weight": 2.8005657708628005
        }, {
            "id": 536926433,
            "name": "Intel",
            "weight": 2.8005657708628005
        }, {
            "id": 537734690,
            "name": "Reddit",
            "weight": 2.659123055162659
        }, {
            "id": 536892360,
            "name": "AT&T",
            "weight": 2.4611032531824613
        }, {
            "id": 536913692,
            "name": "eBay",
            "weight": 2.4328147100424329
        }, {
            "id": 268486739,
            "name": "Internet Security",
            "weight": 2.3479490806223478,
            "topics": [{
                "id": 536958235,
                "name": "McAfee",
                "weight": 32.53012048192771
            }, {
                "id": 537134782,
                "name": "Kaspersky Online Scanner",
                "weight": 24.096385542168676
            }, {
                "id": 538190347,
                "name": "Zscaler",
                "weight": 8.4337349397590362
            }, {
                "id": 537604053,
                "name": "BitDefender",
                "weight": 8.4337349397590362
            }, {
                "id": 537119613,
                "name": "Comodo Group",
                "weight": 4.8192771084337354
            }, {
                "id": 538574495,
                "name": "Intel Security",
                "weight": 3.6144578313253013
            }]
        }, {
            "id": 538269409,
            "name": "Internet of Things",
            "weight": 2.31966053748232
        }, {
            "id": 537232813,
            "name": "Tumblr",
            "weight": 2.31966053748232
        }, {
            "id": 537074547,
            "name": "Federal Communications Commission",
            "weight": 2.2913719943422914
        }, {
            "id": 537635485,
            "name": "Gmail",
            "weight": 2.2630834512022631
        }, {
            "id": 537227356,
            "name": "Skype",
            "weight": 2.1782178217821784
        }, {
            "id": 536929915,
            "name": "Dell",
            "weight": 2.14992927864215
        }, {
            "id": 537104293,
            "name": "PayPal",
            "weight": 2.1216407355021216
        }, {
            "id": 536921239,
            "name": "Cisco Systems, Inc.",
            "weight": 2.0367751060820369
        }, {
            "id": 268487111,
            "name": "SEO",
            "weight": 1.9801980198019802,
            "topics": [{
                "id": 537620762,
                "name": "Search Engine Marketing",
                "weight": 1.4285714285714286
            }]
        }, {
            "id": 537101573,
            "name": "Hulu.com",
            "weight": 1.9801980198019802
        }, {
            "id": 536892459,
            "name": "Comcast",
            "weight": 1.9236209335219236
        }, {
            "id": 268487433,
            "name": "Web Applications",
            "weight": 1.7821782178217822,
            "topics": [{
                "id": 537580675,
                "name": "Google Chrome",
                "weight": 65.079365079365076
            }, {
                "id": 537600072,
                "name": "JSON",
                "weight": 12.698412698412698
            }, {
                "id": 537581585,
                "name": "Ruby on Rails",
                "weight": 7.9365079365079367
            }, {
                "id": 537609346,
                "name": "PHP",
                "weight": 4.7619047619047619
            }, {
                "id": 537609302,
                "name": "ASP.NET",
                "weight": 3.1746031746031744
            }, {
                "id": 537618125,
                "name": "HTML 5",
                "weight": 1.5873015873015872
            }]
        }, {
            "id": 537142852,
            "name": "Alibaba Group",
            "weight": 1.7538896746817538
        }, {
            "id": 537812725,
            "name": "Google+",
            "weight": 1.6690240452616689
        }, {
            "id": 537604903,
            "name": "Mozilla Firefox",
            "weight": 1.6407355021216408
        }, {
            "id": 268486005,
            "name": "e-Learning",
            "weight": 1.5275813295615275
        }, {
            "id": 537596096,
            "name": "GNU/Linux",
            "weight": 1.4144271570014144
        }, {
            "id": 537580675,
            "name": "Google Chrome",
            "weight": 1.15983026874116
        }, {
            "id": 537598491,
            "name": "JavaScript",
            "weight": 1.1032531824611032
        }]
    }, {
        "id": 268459471,
        "name": "Gadgets",
        "weight": 23.494323648258611,
        "topics": [{
            "id": 268487153,
            "name": "Smartphones",
            "weight": 50.450450450450454,
            "topics": [{
                "id": 268490662,
                "name": "iPhone 6",
                "weight": 81.006493506493513,
                "topics": [{
                    "id": 536892344,
                    "name": "Apple Inc.",
                    "weight": 75.551102204408821
                }, {
                    "id": 537284095,
                    "name": "iPhone",
                    "weight": 64.328657314629254
                }, {
                    "id": 537601628,
                    "name": "iPhone OS",
                    "weight": 40.080160320641284
                }, {
                    "id": 538564546,
                    "name": "iOS 9",
                    "weight": 19.038076152304608
                }, {
                    "id": 537861931,
                    "name": "Siri",
                    "weight": 12.825651302605211
                }, {
                    "id": 538229941,
                    "name": "iPhone 5c",
                    "weight": 5.811623246492986
                }, {
                    "id": 538229940,
                    "name": "iPhone 5s",
                    "weight": 5.01002004008016
                }]
            }, {
                "id": 537284095,
                "name": "iPhone",
                "weight": 52.11038961038961
            }, {
                "id": 537282917,
                "name": "BlackBerry",
                "weight": 15.746753246753247
            }, {
                "id": 537111468,
                "name": "HTC (telecom)",
                "weight": 15.422077922077921
            }, {
                "id": 536920872,
                "name": "Lenovo",
                "weight": 11.2012987012987
            }, {
                "id": 538007618,
                "name": "Samsung Galaxy",
                "weight": 11.038961038961039
            }, {
                "id": 538006117,
                "name": "XPERIA",
                "weight": 8.9285714285714288
            }, {
                "id": 538224208,
                "name": "Xiaomi",
                "weight": 4.220779220779221
            }, {
                "id": 537073145,
                "name": "MediaTek",
                "weight": 1.948051948051948
            }]
        }, {
            "id": 268489949,
            "name": "Mobile Apps",
            "weight": 36.117936117936118,
            "topics": [{
                "id": 268490470,
                "name": "Mobile Games",
                "weight": 39.682539682539684
            }]
        }, {
            "id": 536892344,
            "name": "Apple Inc.",
            "weight": 30.876330876330876
        }, {
            "id": 537284095,
            "name": "iPhone",
            "weight": 26.289926289926289
        }, {
            "id": 268459475,
            "name": "Tablets",
            "weight": 22.276822276822276,
            "topics": [{
                "id": 537605538,
                "name": "iPad",
                "weight": 76.470588235294116
            }, {
                "id": 536929915,
                "name": "Dell",
                "weight": 27.941176470588236
            }, {
                "id": 536920872,
                "name": "Lenovo",
                "weight": 25.367647058823529
            }, {
                "id": 538007618,
                "name": "Samsung Galaxy",
                "weight": 25.0
            }, {
                "id": 536896381,
                "name": "Nvidia",
                "weight": 23.529411764705884
            }, {
                "id": 536900119,
                "name": "ASUS",
                "weight": 23.529411764705884
            }, {
                "id": 537785649,
                "name": "Windows 8",
                "weight": 21.691176470588236
            }, {
                "id": 538006117,
                "name": "XPERIA",
                "weight": 20.220588235294116
            }, {
                "id": 538006895,
                "name": "Samsung Galaxy Note",
                "weight": 18.014705882352942
            }, {
                "id": 537590516,
                "name": "Amazon Kindle",
                "weight": 17.279411764705884
            }, {
                "id": 537073145,
                "name": "MediaTek",
                "weight": 4.4117647058823533
            }, {
                "id": 537625329,
                "name": "Samsung Galaxy Tab",
                "weight": 4.4117647058823533
            }, {
                "id": 537141751,
                "name": "Wacom",
                "weight": 3.3088235294117645
            }, {
                "id": 538007740,
                "name": "Kindle Fire",
                "weight": 2.5735294117647061
            }]
        }, {
            "id": 268459476,
            "name": "Notebooks",
            "weight": 12.940212940212939,
            "topics": [{
                "id": 536929915,
                "name": "Dell",
                "weight": 48.101265822784811
            }, {
                "id": 536900119,
                "name": "ASUS",
                "weight": 40.506329113924053
            }, {
                "id": 537585175,
                "name": "MacBook Pro",
                "weight": 15.189873417721518
            }, {
                "id": 537622825,
                "name": "Moleskine",
                "weight": 3.7974683544303796
            }]
        }, {
            "id": 268486736,
            "name": "Netbooks",
            "weight": 6.1425061425061429,
            "topics": [{
                "id": 537583763,
                "name": "Google Chrome OS",
                "weight": 70.666666666666671
            }, {
                "id": 537596096,
                "name": "GNU/Linux",
                "weight": 66.666666666666671
            }]
        }, {
            "id": 538006117,
            "name": "XPERIA",
            "weight": 4.5045045045045047
        }, {
            "id": 268459462,
            "name": "E-Book Readers",
            "weight": 2.4570024570024569
        }, {
            "id": 268486311,
            "name": "Home Theatre",
            "weight": 2.4570024570024569
        }, {
            "id": 538176814,
            "name": "Flipkart",
            "weight": 1.71990171990172
        }]
    }, {
        "id": 268459461,
        "name": "Computers",
        "weight": 22.917067538964787,
        "topics": [{
            "id": 268459474,
            "name": "Software",
            "weight": 62.88832913518052,
            "topics": [{
                "id": 536889304,
                "name": "Microsoft Corporation",
                "weight": 57.810413885180239
            }, {
                "id": 538279808,
                "name": "Apple Watch",
                "weight": 26.168224299065422
            }, {
                "id": 537606170,
                "name": "Microsoft Windows",
                "weight": 23.364485981308412
            }, {
                "id": 538134442,
                "name": "Snapchat",
                "weight": 15.353805073431241
            }, {
                "id": 536929918,
                "name": "IBM",
                "weight": 14.686248331108144
            }, {
                "id": 537587540,
                "name": "Spotify",
                "weight": 14.285714285714286
            }, {
                "id": 536926433,
                "name": "Intel",
                "weight": 13.21762349799733
            }, {
                "id": 536929917,
                "name": "Hewlett-Packard",
                "weight": 12.416555407209612
            }, {
                "id": 537720197,
                "name": "Adobe Flash Player",
                "weight": 11.615487316421897
            }, {
                "id": 538269409,
                "name": "Internet of Things",
                "weight": 10.947930574098798
            }, {
                "id": 537227356,
                "name": "Skype",
                "weight": 10.280373831775702
            }, {
                "id": 536929915,
                "name": "Dell",
                "weight": 10.146862483311082
            }, {
                "id": 536921239,
                "name": "Cisco Systems, Inc.",
                "weight": 9.6128170894526033
            }, {
                "id": 537618110,
                "name": "Mac OS X",
                "weight": 9.3457943925233646
            }, {
                "id": 536920872,
                "name": "Lenovo",
                "weight": 9.2122830440587453
            }, {
                "id": 537001386,
                "name": "Salesforce.com",
                "weight": 8.9452603471295067
            }, {
                "id": 536896381,
                "name": "Nvidia",
                "weight": 8.544726301735647
            }, {
                "id": 537785649,
                "name": "Windows 8",
                "weight": 7.87716955941255
            }, {
                "id": 537604903,
                "name": "Mozilla Firefox",
                "weight": 7.74365821094793
            }, {
                "id": 536929913,
                "name": "Advanced Micro Devices",
                "weight": 7.4766355140186915
            }, {
                "id": 537283275,
                "name": "Macintosh",
                "weight": 7.0761014686248327
            }, {
                "id": 537596096,
                "name": "GNU/Linux",
                "weight": 6.6755674232309747
            }, {
                "id": 537053396,
                "name": "VMware",
                "weight": 6.1415220293724966
            }, {
                "id": 537610615,
                "name": "Windows 7",
                "weight": 5.8744993324432579
            }, {
                "id": 537603493,
                "name": "WordPress",
                "weight": 5.7409879839786377
            }, {
                "id": 537580675,
                "name": "Google Chrome",
                "weight": 5.4739652870493991
            }, {
                "id": 537613463,
                "name": "Adobe Photoshop Lightroom",
                "weight": 5.4739652870493991
            }, {
                "id": 537598491,
                "name": "JavaScript",
                "weight": 5.2069425901201605
            }, {
                "id": 537704891,
                "name": "GitHub",
                "weight": 4.939919893190921
            }, {
                "id": 537601515,
                "name": "Microsoft Excel",
                "weight": 4.8064085447263016
            }, {
                "id": 537608302,
                "name": "Internet Explorer",
                "weight": 4.539385847797063
            }, {
                "id": 268486972,
                "name": "QR Code",
                "weight": 4.4058744993324437
            }, {
                "id": 537595310,
                "name": "Microsoft PowerPoint",
                "weight": 3.7383177570093458
            }, {
                "id": 537588399,
                "name": "Adobe Flash",
                "weight": 3.3377837116154874
            }, {
                "id": 537620138,
                "name": "Microsoft Visual Studio",
                "weight": 3.2042723631508676
            }, {
                "id": 537598618,
                "name": "Hadoop",
                "weight": 3.0707610146862483
            }, {
                "id": 538049048,
                "name": "Windows XP",
                "weight": 2.937249666221629
            }, {
                "id": 537134782,
                "name": "Kaspersky Online Scanner",
                "weight": 2.67022696929239
            }, {
                "id": 537114749,
                "name": "Red Hat India",
                "weight": 2.1361815754339117
            }, {
                "id": 268487298,
                "name": "Text Editors",
                "weight": 2.1361815754339117,
                "topics": [{
                    "id": 537598696,
                    "name": "Emacs",
                    "weight": 6.25
                }]
            }, {
                "id": 537600072,
                "name": "JSON",
                "weight": 1.0680907877169559
            }]
        }, {
            "id": 268459473,
            "name": "Hardware",
            "weight": 42.31738035264484,
            "topics": [{
                "id": 268487232,
                "name": "Storage",
                "weight": 75.7936507936508,
                "topics": [{
                    "id": 536930557,
                    "name": "Samsung Electronics",
                    "weight": 52.617801047120416
                }, {
                    "id": 536926433,
                    "name": "Intel",
                    "weight": 25.916230366492147
                }, {
                    "id": 536929917,
                    "name": "Hewlett-Packard",
                    "weight": 24.345549738219894
                }, {
                    "id": 536929915,
                    "name": "Dell",
                    "weight": 19.895287958115183
                }, {
                    "id": 536920872,
                    "name": "Lenovo",
                    "weight": 18.062827225130889
                }, {
                    "id": 537623016,
                    "name": "Windows Phone 7",
                    "weight": 17.539267015706805
                }, {
                    "id": 537785649,
                    "name": "Windows 8",
                    "weight": 15.445026178010471
                }, {
                    "id": 536930560,
                    "name": "Toshiba",
                    "weight": 12.827225130890053
                }, {
                    "id": 538291314,
                    "name": "Amazon Web Services",
                    "weight": 8.6387434554973819
                }, {
                    "id": 537609578,
                    "name": "iMac",
                    "weight": 7.5916230366492146
                }, {
                    "id": 536892536,
                    "name": "EMC Corporation",
                    "weight": 7.329842931937173
                }, {
                    "id": 537585175,
                    "name": "MacBook Pro",
                    "weight": 6.2827225130890056
                }, {
                    "id": 537151354,
                    "name": "NetApp",
                    "weight": 4.7120418848167542
                }, {
                    "id": 538304106,
                    "name": "Google Drive",
                    "weight": 4.7120418848167542
                }, {
                    "id": 538125630,
                    "name": "Amazon Web Services",
                    "weight": 3.6649214659685865
                }, {
                    "id": 536900717,
                    "name": "Seagate Technology",
                    "weight": 3.4031413612565444
                }, {
                    "id": 536898796,
                    "name": "Western Digital",
                    "weight": 2.6178010471204187
                }, {
                    "id": 537118077,
                    "name": "Archos Gmini 400",
                    "weight": 2.6178010471204187
                }]
            }, {
                "id": 537606170,
                "name": "Microsoft Windows",
                "weight": 34.722222222222221
            }, {
                "id": 268486938,
                "name": "Printing (Hardware)",
                "weight": 31.349206349206348
            }, {
                "id": 536929918,
                "name": "IBM",
                "weight": 21.825396825396826
            }, {
                "id": 536926433,
                "name": "Intel",
                "weight": 19.642857142857142
            }, {
                "id": 536929917,
                "name": "Hewlett-Packard",
                "weight": 18.452380952380953
            }, {
                "id": 536896661,
                "name": "Huawei",
                "weight": 17.460317460317459
            }, {
                "id": 536929915,
                "name": "Dell",
                "weight": 15.079365079365079
            }, {
                "id": 536892827,
                "name": "Qualcomm",
                "weight": 14.682539682539682
            }, {
                "id": 536921239,
                "name": "Cisco Systems, Inc.",
                "weight": 14.285714285714286
            }, {
                "id": 536920872,
                "name": "Lenovo",
                "weight": 13.69047619047619
            }, {
                "id": 537623016,
                "name": "Windows Phone 7",
                "weight": 13.293650793650794
            }, {
                "id": 536896381,
                "name": "Nvidia",
                "weight": 12.698412698412698
            }, {
                "id": 536900119,
                "name": "ASUS",
                "weight": 12.698412698412698
            }, {
                "id": 537785649,
                "name": "Windows 8",
                "weight": 11.706349206349206
            }, {
                "id": 537583763,
                "name": "Google Chrome OS",
                "weight": 10.515873015873016
            }, {
                "id": 537596096,
                "name": "GNU/Linux",
                "weight": 9.9206349206349209
            }, {
                "id": 537053396,
                "name": "VMware",
                "weight": 9.1269841269841265
            }, {
                "id": 268486652,
                "name": "Microcontroller",
                "weight": 9.1269841269841265,
                "topics": [{
                    "id": 538116214,
                    "name": "Arduino",
                    "weight": 54.347826086956523
                }, {
                    "id": 536892939,
                    "name": "Texas Instruments",
                    "weight": 26.086956521739129
                }, {
                    "id": 537142580,
                    "name": "Advanced RISC Machines (company)",
                    "weight": 19.565217391304348
                }, {
                    "id": 537603911,
                    "name": "ARM architecture",
                    "weight": 8.695652173913043
                }, {
                    "id": 537593327,
                    "name": "Atmel AVR",
                    "weight": 4.3478260869565215
                }, {
                    "id": 537128804,
                    "name": "Atmel Corporation",
                    "weight": 4.3478260869565215
                }, {
                    "id": 537073146,
                    "name": "Microchip Technology",
                    "weight": 2.1739130434782608
                }]
            }, {
                "id": 268486923,
                "name": "Device Polling",
                "weight": 7.5396825396825395
            }, {
                "id": 538114500,
                "name": "Raspberry Pi",
                "weight": 7.5396825396825395
            }, {
                "id": 537609578,
                "name": "iMac",
                "weight": 5.753968253968254
            }, {
                "id": 538116214,
                "name": "Arduino",
                "weight": 4.9603174603174605
            }, {
                "id": 537585175,
                "name": "MacBook Pro",
                "weight": 4.7619047619047619
            }, {
                "id": 537607631,
                "name": "x86",
                "weight": 3.1746031746031744
            }]
        }, {
            "id": 536889304,
            "name": "Microsoft Corporation",
            "weight": 36.356003358522251
        }, {
            "id": 536892344,
            "name": "Apple Inc.",
            "weight": 31.654072208228378
        }, {
            "id": 268489778,
            "name": "Operating Systems",
            "weight": 25.692695214105793,
            "topics": [{
                "id": 537601628,
                "name": "iPhone OS",
                "weight": 65.359477124183
            }, {
                "id": 537606170,
                "name": "Microsoft Windows",
                "weight": 57.189542483660134
            }, {
                "id": 268487417,
                "name": "VOIP",
                "weight": 36.928104575163395,
                "topics": [{
                    "id": 537227356,
                    "name": "Skype",
                    "weight": 68.141592920353986
                }, {
                    "id": 536921239,
                    "name": "Cisco Systems, Inc.",
                    "weight": 63.716814159292035
                }, {
                    "id": 538119141,
                    "name": "Viber",
                    "weight": 15.044247787610619
                }, {
                    "id": 537063701,
                    "name": "Bharti Airtel",
                    "weight": 10.619469026548673
                }, {
                    "id": 538158368,
                    "name": "Twilio",
                    "weight": 8.8495575221238933
                }, {
                    "id": 537123736,
                    "name": "Nimbuzz",
                    "weight": 2.6548672566371683
                }]
            }, {
                "id": 537618110,
                "name": "Mac OS X",
                "weight": 22.875816993464053
            }, {
                "id": 537785649,
                "name": "Windows 8",
                "weight": 19.281045751633986
            }, {
                "id": 268487406,
                "name": "Virtual Machines",
                "weight": 17.647058823529413,
                "topics": [{
                    "id": 537053396,
                    "name": "VMware",
                    "weight": 85.18518518518519
                }, {
                    "id": 537682932,
                    "name": "Windows Azure",
                    "weight": 14.814814814814815
                }, {
                    "id": 537584156,
                    "name": "VMware ESX Server",
                    "weight": 3.7037037037037037
                }]
            }, {
                "id": 537622188,
                "name": "Windows Vista",
                "weight": 17.647058823529413
            }, {
                "id": 537583763,
                "name": "Google Chrome OS",
                "weight": 17.320261437908496
            }, {
                "id": 537596096,
                "name": "GNU/Linux",
                "weight": 16.33986928104575
            }, {
                "id": 537610615,
                "name": "Windows 7",
                "weight": 14.379084967320262
            }, {
                "id": 538114500,
                "name": "Raspberry Pi",
                "weight": 12.418300653594772
            }, {
                "id": 538049048,
                "name": "Windows XP",
                "weight": 7.1895424836601309
            }, {
                "id": 537607631,
                "name": "x86",
                "weight": 5.2287581699346406
            }, {
                "id": 538218292,
                "name": "Tizen",
                "weight": 4.57516339869281
            }, {
                "id": 537584645,
                "name": "Unix",
                "weight": 2.9411764705882355
            }, {
                "id": 537613951,
                "name": "Xen",
                "weight": 1.3071895424836601
            }]
        }, {
            "id": 537605538,
            "name": "iPad",
            "weight": 17.464315701091518
        }, {
            "id": 268459467,
            "name": "Networking",
            "weight": 15.449202350965574,
            "topics": [{
                "id": 536926433,
                "name": "Intel",
                "weight": 53.804347826086953
            }, {
                "id": 268486842,
                "name": "P2P",
                "weight": 51.086956521739133,
                "topics": [{
                    "id": 537074780,
                    "name": "Recording Industry Association of America",
                    "weight": 39.361702127659576
                }, {
                    "id": 537098717,
                    "name": "BitTorrent (company)",
                    "weight": 1.0638297872340425
                }]
            }, {
                "id": 536929917,
                "name": "Hewlett-Packard",
                "weight": 50.543478260869563
            }, {
                "id": 536892827,
                "name": "Qualcomm",
                "weight": 40.217391304347828
            }, {
                "id": 536921239,
                "name": "Cisco Systems, Inc.",
                "weight": 39.130434782608695
            }, {
                "id": 537053396,
                "name": "VMware",
                "weight": 25.0
            }, {
                "id": 536901179,
                "name": "Juniper Networks",
                "weight": 12.5
            }, {
                "id": 536902416,
                "name": "Broadcom",
                "weight": 4.3478260869565215
            }, {
                "id": 536901114,
                "name": "D-Link",
                "weight": 3.2608695652173911
            }]
        }, {
            "id": 537606170,
            "name": "Microsoft Windows",
            "weight": 14.693534844668346
        }, {
            "id": 537154550,
            "name": "Steve Jobs",
            "weight": 13.685978169605374
        }, {
            "id": 536926433,
            "name": "Intel",
            "weight": 8.3123425692695214
        }, {
            "id": 536929917,
            "name": "Hewlett-Packard",
            "weight": 7.8085642317380355
        }, {
            "id": 536929915,
            "name": "Dell",
            "weight": 6.3811922753988242
        }, {
            "id": 537618110,
            "name": "Mac OS X",
            "weight": 5.8774139378673382
        }, {
            "id": 536920872,
            "name": "Lenovo",
            "weight": 5.7934508816120909
        }, {
            "id": 536900119,
            "name": "ASUS",
            "weight": 5.3736356003358523
        }, {
            "id": 268485920,
            "name": "Data Recovery",
            "weight": 5.2057094878253567,
            "topics": [{
                "id": 537266688,
                "name": "Kroll Inc.",
                "weight": 20.967741935483872
            }]
        }, {
            "id": 537785649,
            "name": "Windows 8",
            "weight": 4.9538203190596137
        }, {
            "id": 536929913,
            "name": "Advanced Micro Devices",
            "weight": 4.7019311502938708
        }, {
            "id": 537283275,
            "name": "Macintosh",
            "weight": 4.4500419815281278
        }, {
            "id": 537596096,
            "name": "GNU/Linux",
            "weight": 4.1981528127623848
        }, {
            "id": 537610615,
            "name": "Windows 7",
            "weight": 3.6943744752308985
        }, {
            "id": 538114500,
            "name": "Raspberry Pi",
            "weight": 3.1905961376994121
        }, {
            "id": 268487242,
            "name": "Supercomputers",
            "weight": 2.8547439126784213
        }, {
            "id": 537585175,
            "name": "MacBook Pro",
            "weight": 2.0151133501259446
        }]
    }, {
        "id": 268446486,
        "name": "Telecom",
        "weight": 12.064652684240908,
        "topics": [{
            "id": 268489780,
            "name": "Wireless",
            "weight": 66.8261562998405,
            "topics": [{
                "id": 268485691,
                "name": "Bluetooth",
                "weight": 88.782816229116946,
                "topics": [{
                    "id": 537284095,
                    "name": "iPhone",
                    "weight": 86.290322580645167
                }, {
                    "id": 537605538,
                    "name": "iPad",
                    "weight": 55.913978494623656
                }, {
                    "id": 538006117,
                    "name": "XPERIA",
                    "weight": 14.78494623655914
                }, {
                    "id": 537610227,
                    "name": "iPod touch",
                    "weight": 10.21505376344086
                }, {
                    "id": 538008385,
                    "name": "IPad Mini",
                    "weight": 7.5268817204301079
                }, {
                    "id": 536902416,
                    "name": "Broadcom",
                    "weight": 2.150537634408602
                }, {
                    "id": 537098752,
                    "name": "Bluetooth Special Interest Group",
                    "weight": 1.6129032258064515
                }, {
                    "id": 537585574,
                    "name": "Apple Magic Mouse",
                    "weight": 1.6129032258064515
                }]
            }, {
                "id": 537284095,
                "name": "iPhone",
                "weight": 76.6109785202864
            }, {
                "id": 537605538,
                "name": "iPad",
                "weight": 49.64200477326969
            }, {
                "id": 536892982,
                "name": "Verizon Communications",
                "weight": 24.343675417661096
            }, {
                "id": 536926433,
                "name": "Intel",
                "weight": 23.627684964200476
            }, {
                "id": 538114270,
                "name": "Fitbit",
                "weight": 21.241050119331742
            }, {
                "id": 536896661,
                "name": "Huawei",
                "weight": 21.002386634844868
            }, {
                "id": 536892360,
                "name": "AT&T",
                "weight": 20.763723150357997
            }, {
                "id": 536919559,
                "name": "T-Mobile",
                "weight": 20.047732696897373
            }, {
                "id": 268487014,
                "name": "RFID",
                "weight": 20.047732696897373,
                "topics": [{
                    "id": 538269409,
                    "name": "Internet of Things",
                    "weight": 97.61904761904762
                }, {
                    "id": 537142333,
                    "name": "Zebra Technologies'A'",
                    "weight": 1.1904761904761905
                }]
            }, {
                "id": 538269409,
                "name": "Internet of Things",
                "weight": 19.570405727923628
            }, {
                "id": 537074547,
                "name": "Federal Communications Commission",
                "weight": 19.331742243436754
            }, {
                "id": 536892827,
                "name": "Qualcomm",
                "weight": 17.661097852028639
            }, {
                "id": 536921239,
                "name": "Cisco Systems, Inc.",
                "weight": 17.183770883054894
            }, {
                "id": 536929920,
                "name": "Motorola",
                "weight": 14.797136038186158
            }, {
                "id": 536944775,
                "name": "Verizon Wireless",
                "weight": 11.217183770883056
            }, {
                "id": 537156800,
                "name": "Zhong Xing Telecommunication Equipment Company Limited",
                "weight": 5.7279236276849641
            }, {
                "id": 536925322,
                "name": "Logitech",
                "weight": 5.7279236276849641
            }, {
                "id": 536929916,
                "name": "Ericsson",
                "weight": 5.0119331742243434
            }, {
                "id": 537073302,
                "name": "Rogers Communications",
                "weight": 4.5346062052505971
            }, {
                "id": 537073309,
                "name": "Telus",
                "weight": 3.1026252983293556
            }, {
                "id": 537151947,
                "name": "Omnipoint Communications",
                "weight": 2.8639618138424821
            }, {
                "id": 536902416,
                "name": "Broadcom",
                "weight": 1.909307875894988
            }, {
                "id": 537036870,
                "name": "Plantronics",
                "weight": 1.909307875894988
            }, {
                "id": 537098752,
                "name": "Bluetooth Special Interest Group",
                "weight": 1.431980906921241
            }]
        }, {
            "id": 268487073,
            "name": "Satellites",
            "weight": 29.665071770334929,
            "topics": [{
                "id": 537105699,
                "name": "SpaceX",
                "weight": 67.741935483870961
            }, {
                "id": 537077385,
                "name": "European Space Agency",
                "weight": 56.451612903225808
            }, {
                "id": 537192167,
                "name": "Virgin Galactic",
                "weight": 35.483870967741936
            }, {
                "id": 537103536,
                "name": "National Oceanic and Atmospheric Administration",
                "weight": 35.483870967741936
            }, {
                "id": 537063703,
                "name": "DIRECTV",
                "weight": 19.35483870967742
            }, {
                "id": 538278790,
                "name": "Galileo",
                "weight": 18.817204301075268
            }, {
                "id": 537636512,
                "name": "Russian Federal Space Agency",
                "weight": 18.817204301075268
            }, {
                "id": 537139485,
                "name": "Sirius XM Satellite Radio",
                "weight": 15.053763440860216
            }, {
                "id": 537599148,
                "name": "GPS",
                "weight": 14.516129032258064
            }, {
                "id": 538233245,
                "name": "Internet.org",
                "weight": 11.290322580645162
            }, {
                "id": 537133870,
                "name": "Indian Space Research Organisation",
                "weight": 7.5268817204301079
            }, {
                "id": 537073162,
                "name": "SES S.A. (telecom)",
                "weight": 7.5268817204301079
            }, {
                "id": 537836026,
                "name": "Galileo Galilei",
                "weight": 6.989247311827957
            }, {
                "id": 537098097,
                "name": "Arianespace, Inc.",
                "weight": 5.913978494623656
            }, {
                "id": 537104095,
                "name": "Orbcomm",
                "weight": 5.913978494623656
            }, {
                "id": 537073164,
                "name": "DISH Network",
                "weight": 4.838709677419355
            }, {
                "id": 537120511,
                "name": "Eutelsat Communications",
                "weight": 4.301075268817204
            }, {
                "id": 537072912,
                "name": "Inmarsat",
                "weight": 2.6881720430107525
            }, {
                "id": 537241483,
                "name": "Space Systems/Loral",
                "weight": 2.150537634408602
            }, {
                "id": 537257557,
                "name": "National Broadband Network",
                "weight": 1.075268817204301
            }]
        }, {
            "id": 537697633,
            "name": "iPhone 5",
            "weight": 20.733652312599681
        }, {
            "id": 536892982,
            "name": "Verizon Communications",
            "weight": 16.267942583732058
        }, {
            "id": 536896661,
            "name": "Huawei",
            "weight": 14.035087719298245
        }, {
            "id": 536892360,
            "name": "AT&T",
            "weight": 13.875598086124402
        }, {
            "id": 536919559,
            "name": "T-Mobile",
            "weight": 13.397129186602871
        }, {
            "id": 537074547,
            "name": "Federal Communications Commission",
            "weight": 12.918660287081339
        }, {
            "id": 536892827,
            "name": "Qualcomm",
            "weight": 11.802232854864434
        }, {
            "id": 536892459,
            "name": "Comcast",
            "weight": 10.845295055821371
        }, {
            "id": 536929921,
            "name": "Nokia",
            "weight": 10.685805422647528
        }, {
            "id": 538006117,
            "name": "XPERIA",
            "weight": 8.7719298245614041
        }, {
            "id": 536944775,
            "name": "Verizon Wireless",
            "weight": 7.4960127591706538
        }, {
            "id": 536892933,
            "name": "Telstra",
            "weight": 4.4657097288676235
        }, {
            "id": 536892988,
            "name": "Vodafone Group Plc",
            "weight": 4.4657097288676235
        }, {
            "id": 537156800,
            "name": "Zhong Xing Telecommunication Equipment Company Limited",
            "weight": 3.8277511961722488
        }, {
            "id": 537103994,
            "name": "Ofcom",
            "weight": 3.668261562998405
        }, {
            "id": 538233245,
            "name": "Internet.org",
            "weight": 3.3492822966507179
        }, {
            "id": 536929916,
            "name": "Ericsson",
            "weight": 3.3492822966507179
        }, {
            "id": 537073302,
            "name": "Rogers Communications",
            "weight": 3.0303030303030303
        }, {
            "id": 537021209,
            "name": "Alcatel-Lucent",
            "weight": 2.5518341307814993
        }, {
            "id": 537133870,
            "name": "Indian Space Research Organisation",
            "weight": 2.2328548644338118
        }, {
            "id": 537063701,
            "name": "Bharti Airtel",
            "weight": 1.9138755980861244
        }, {
            "id": 537151947,
            "name": "Omnipoint Communications",
            "weight": 1.9138755980861244
        }, {
            "id": 537119130,
            "name": "Carphone Warehouse Broadband Services",
            "weight": 1.7543859649122806
        }, {
            "id": 536892437,
            "name": "Charter Communications",
            "weight": 1.594896331738437
        }, {
            "id": 537072906,
            "name": "Reliance Communications",
            "weight": 1.594896331738437
        }, {
            "id": 537116411,
            "name": "TRAI (nonprofit)",
            "weight": 1.594896331738437
        }, {
            "id": 537120511,
            "name": "Eutelsat Communications",
            "weight": 1.2759170653907497
        }, {
            "id": 537137394,
            "name": "Optus Broadband Satellite",
            "weight": 1.1164274322169059
        }]
    }, {
        "id": 537072917,
        "name": "Facebook",
        "weight": 8.4856648066192033
    }, {
        "id": 536889304,
        "name": "Microsoft Corporation",
        "weight": 8.33172984414085
    }, {
        "id": 537072927,
        "name": "Twitter",
        "weight": 7.5043294208197038
    }, {
        "id": 536892344,
        "name": "Apple Inc.",
        "weight": 7.25418510679238
    }, {
        "id": 268489779,
        "name": "Programming",
        "weight": 7.0425245333846451,
        "topics": [{
            "id": 537601628,
            "name": "iPhone OS",
            "weight": 54.6448087431694
        }, {
            "id": 268486050,
            "name": "Encryption",
            "weight": 53.825136612021858,
            "topics": [{
                "id": 537282917,
                "name": "BlackBerry",
                "weight": 49.238578680203048
            }, {
                "id": 537227356,
                "name": "Skype",
                "weight": 39.086294416243653
            }, {
                "id": 537141329,
                "name": "United States National Security Agency",
                "weight": 38.071065989847718
            }, {
                "id": 538247860,
                "name": "Edward Snowden",
                "weight": 29.9492385786802
            }, {
                "id": 538177080,
                "name": "Whatsapp",
                "weight": 17.766497461928935
            }, {
                "id": 538252261,
                "name": "Edward Snowden",
                "weight": 10.152284263959391
            }, {
                "id": 537588218,
                "name": "Pretty Good Privacy",
                "weight": 3.5532994923857868
            }, {
                "id": 537602934,
                "name": "TrueCrypt",
                "weight": 1.015228426395939
            }]
        }, {
            "id": 268487092,
            "name": "Scripting",
            "weight": 51.366120218579233,
            "topics": [{
                "id": 537720197,
                "name": "Adobe Flash Player",
                "weight": 46.276595744680854
            }, {
                "id": 537598491,
                "name": "JavaScript",
                "weight": 20.74468085106383
            }, {
                "id": 537608302,
                "name": "Internet Explorer",
                "weight": 18.085106382978722
            }, {
                "id": 537588399,
                "name": "Adobe Flash",
                "weight": 13.297872340425531
            }, {
                "id": 537600072,
                "name": "JSON",
                "weight": 4.25531914893617
            }, {
                "id": 537596220,
                "name": "ECMAScript",
                "weight": 2.6595744680851063
            }, {
                "id": 537593960,
                "name": "Perl",
                "weight": 2.1276595744680851
            }, {
                "id": 537609346,
                "name": "PHP",
                "weight": 1.5957446808510638
            }, {
                "id": 537584309,
                "name": "Windows PowerShell",
                "weight": 1.0638297872340425
            }]
        }, {
            "id": 268486166,
            "name": "Functional Programming",
            "weight": 27.868852459016395
        }, {
            "id": 268487409,
            "name": "Virtualization",
            "weight": 24.863387978142075,
            "topics": [{
                "id": 536929913,
                "name": "Advanced Micro Devices",
                "weight": 61.53846153846154
            }, {
                "id": 537053396,
                "name": "VMware",
                "weight": 50.549450549450547
            }, {
                "id": 536892536,
                "name": "EMC Corporation",
                "weight": 30.76923076923077
            }, {
                "id": 537607631,
                "name": "x86",
                "weight": 17.582417582417584
            }, {
                "id": 538327691,
                "name": "LXC",
                "weight": 6.5934065934065931
            }, {
                "id": 537593085,
                "name": "Xeon",
                "weight": 6.5934065934065931
            }, {
                "id": 537613951,
                "name": "Xen",
                "weight": 4.395604395604396
            }, {
                "id": 538234385,
                "name": "CoreOS",
                "weight": 3.2967032967032965
            }, {
                "id": 537593502,
                "name": "VirtualBox",
                "weight": 3.2967032967032965
            }, {
                "id": 537052974,
                "name": "Dell Wyse",
                "weight": 2.197802197802198
            }]
        }, {
            "id": 537618110,
            "name": "Mac OS X",
            "weight": 19.125683060109289
        }, {
            "id": 537596096,
            "name": "GNU/Linux",
            "weight": 13.66120218579235
        }, {
            "id": 537598491,
            "name": "JavaScript",
            "weight": 10.655737704918034
        }, {
            "id": 537601515,
            "name": "Microsoft Excel",
            "weight": 9.8360655737704921
        }, {
            "id": 537583899,
            "name": "Xcode",
            "weight": 7.1038251366120218
        }, {
            "id": 538116214,
            "name": "Arduino",
            "weight": 6.8306010928961749
        }, {
            "id": 537620138,
            "name": "Microsoft Visual Studio",
            "weight": 6.557377049180328
        }, {
            "id": 537598618,
            "name": "Hadoop",
            "weight": 6.2841530054644812
        }, {
            "id": 537622424,
            "name": "C++",
            "weight": 4.3715846994535523
        }, {
            "id": 537682932,
            "name": "Windows Azure",
            "weight": 2.1857923497267762
        }, {
            "id": 537589241,
            "name": "SQL",
            "weight": 2.1857923497267762
        }, {
            "id": 537600072,
            "name": "JSON",
            "weight": 2.1857923497267762
        }, {
            "id": 268487077,
            "name": "Scalability",
            "weight": 1.9125683060109289,
            "topics": [{
                "id": 537582040,
                "name": "Microsoft SQL Server",
                "weight": 71.428571428571431
            }]
        }, {
            "id": 537617147,
            "name": "jQuery",
            "weight": 1.9125683060109289
        }, {
            "id": 537596220,
            "name": "ECMAScript",
            "weight": 1.3661202185792349
        }, {
            "id": 537582040,
            "name": "Microsoft SQL Server",
            "weight": 1.3661202185792349
        }, {
            "id": 537593960,
            "name": "Perl",
            "weight": 1.0928961748633881
        }]
    }, {
        "id": 536899060,
        "name": "Google",
        "weight": 6.7346546084279391
    }, {
        "id": 537284095,
        "name": "iPhone",
        "weight": 6.17664036944391
    }, {
        "id": 268487102,
        "name": "Information Security",
        "weight": 5.5609005195304988,
        "topics": [{
            "id": 268486261,
            "name": "Hacking",
            "weight": 77.508650519031136,
            "topics": [{
                "id": 537141329,
                "name": "United States National Security Agency",
                "weight": 33.482142857142854
            }, {
                "id": 538247860,
                "name": "Edward Snowden",
                "weight": 26.339285714285715
            }]
        }, {
            "id": 268486589,
            "name": "Malware",
            "weight": 59.515570934256054,
            "topics": [{
                "id": 538115084,
                "name": "Bitcoin",
                "weight": 36.627906976744185
            }, {
                "id": 537283275,
                "name": "Macintosh",
                "weight": 30.813953488372093
            }, {
                "id": 537608302,
                "name": "Internet Explorer",
                "weight": 19.767441860465116
            }, {
                "id": 536958235,
                "name": "McAfee",
                "weight": 15.697674418604651
            }, {
                "id": 537100679,
                "name": "FireEye, Inc.",
                "weight": 14.534883720930232
            }, {
                "id": 537134782,
                "name": "Kaspersky Online Scanner",
                "weight": 11.627906976744185
            }, {
                "id": 537608792,
                "name": "Malwarebytes' Anti-Malware",
                "weight": 7.558139534883721
            }, {
                "id": 537604053,
                "name": "BitDefender",
                "weight": 4.0697674418604652
            }, {
                "id": 536959907,
                "name": "Trend Micro",
                "weight": 4.0697674418604652
            }, {
                "id": 538185032,
                "name": "Superfish",
                "weight": 3.4883720930232558
            }, {
                "id": 538574495,
                "name": "Intel Security",
                "weight": 1.7441860465116279
            }]
        }, {
            "id": 268490628,
            "name": "Cryptography",
            "weight": 33.217993079584772,
            "topics": [{
                "id": 537141329,
                "name": "United States National Security Agency",
                "weight": 78.125
            }, {
                "id": 538004167,
                "name": "Government Communications Headquarters",
                "weight": 19.791666666666668
            }, {
                "id": 537588218,
                "name": "Pretty Good Privacy",
                "weight": 7.291666666666667
            }, {
                "id": 537227052,
                "name": "Bruce Schneier",
                "weight": 4.166666666666667
            }, {
                "id": 537602934,
                "name": "TrueCrypt",
                "weight": 2.0833333333333335
            }]
        }, {
            "id": 268485554,
            "name": "Antiviruses",
            "weight": 16.608996539792386
        }, {
            "id": 268487202,
            "name": "Spyware",
            "weight": 14.186851211072664
        }]
    }, {
        "id": 268459460,
        "name": "Cameras",
        "weight": 5.0606118914758511,
        "topics": [{
            "id": 536930559,
            "name": "Sony Corporation",
            "weight": 55.893536121673
        }, {
            "id": 538182415,
            "name": "GoPro",
            "weight": 33.840304182509506
        }, {
            "id": 268486000,
            "name": "Digital SLR",
            "weight": 23.954372623574145,
            "topics": [{
                "id": 536890813,
                "name": "Nikon Corporation",
                "weight": 98.412698412698418
            }, {
                "id": 537716752,
                "name": "Canon EOS",
                "weight": 11.111111111111111
            }]
        }, {
            "id": 536890813,
            "name": "Nikon Corporation",
            "weight": 23.574144486692017
        }, {
            "id": 538313655,
            "name": "GoPro",
            "weight": 19.011406844106464
        }, {
            "id": 537146515,
            "name": "Eastman Kodak",
            "weight": 14.828897338403042
        }, {
            "id": 537635047,
            "name": "Google Street View",
            "weight": 13.307984790874524
        }, {
            "id": 537158109,
            "name": "Leica Camera AG",
            "weight": 12.927756653992395
        }, {
            "id": 537098152,
            "name": "Asahi Optical Corporation",
            "weight": 8.3650190114068437
        }, {
            "id": 537074886,
            "name": "Los Angeles Police Department",
            "weight": 4.9429657794676807
        }, {
            "id": 537614273,
            "name": "Canon PowerShot",
            "weight": 4.9429657794676807
        }, {
            "id": 537101369,
            "name": "Hasselblad/Imacon",
            "weight": 4.9429657794676807
        }, {
            "id": 537109059,
            "name": "Carl Zeiss Jena GmbH",
            "weight": 4.5627376425855513
        }, {
            "id": 537140313,
            "name": "Tamron",
            "weight": 4.1825095057034218
        }, {
            "id": 537062949,
            "name": "Tomtom Nv",
            "weight": 3.4220532319391634
        }, {
            "id": 537716752,
            "name": "Canon EOS",
            "weight": 2.661596958174905
        }, {
            "id": 538194189,
            "name": "Lytro",
            "weight": 1.9011406844106464
        }, {
            "id": 537603268,
            "name": "Cyber-shot",
            "weight": 1.1406844106463878
        }]
    }, {
        "id": 268486701,
        "name": "Multimedia",
        "weight": 4.3486626900134695,
        "topics": [{
            "id": 268449457,
            "name": "Audio",
            "weight": 86.725663716814154,
            "topics": [{
                "id": 537609238,
                "name": "iTunes",
                "weight": 57.6530612244898
            }, {
                "id": 537587540,
                "name": "Spotify",
                "weight": 54.591836734693878
            }, {
                "id": 537281473,
                "name": "iPod",
                "weight": 34.693877551020407
            }, {
                "id": 537623028,
                "name": "Pandora Radio",
                "weight": 29.591836734693878
            }, {
                "id": 537467741,
                "name": "50 Cent",
                "weight": 18.877551020408163
            }, {
                "id": 537100122,
                "name": "Dolby Stereo Format Codes",
                "weight": 18.367346938775512
            }, {
                "id": 537117361,
                "name": "ZonePlayer",
                "weight": 18.367346938775512
            }, {
                "id": 537154293,
                "name": "SoundCloud",
                "weight": 17.857142857142858
            }, {
                "id": 537160775,
                "name": "BBC Radio 1",
                "weight": 14.285714285714286
            }, {
                "id": 538114026,
                "name": "Rdio",
                "weight": 7.6530612244897958
            }]
        }, {
            "id": 268486917,
            "name": "Podcasting",
            "weight": 50.884955752212392,
            "topics": [{
                "id": 537609238,
                "name": "iTunes",
                "weight": 98.260869565217391
            }, {
                "id": 537216072,
                "name": "Paul F. Tompkins",
                "weight": 1.7391304347826086
            }]
        }, {
            "id": 538279464,
            "name": "Xbox One",
            "weight": 37.168141592920357
        }]
    }, {
        "id": 537605538,
        "name": "iPad",
        "weight": 4.0023090244371753
    }, {
        "id": 536930557,
        "name": "Samsung Electronics",
        "weight": 3.8676159322686163
    }, {
        "id": 537601628,
        "name": "iPhone OS",
        "weight": 3.8483740619588223
    }, {
        "id": 268487030,
        "name": "Robots",
        "weight": 3.79064845102944,
        "topics": [{
            "id": 268490695,
            "name": "Home Automation",
            "weight": 45.685279187817258,
            "topics": [{
                "id": 538130152,
                "name": "ZigBee",
                "weight": 1.1111111111111112
            }]
        }, {
            "id": 537104779,
            "name": "iRobot",
            "weight": 8.6294416243654819
        }, {
            "id": 268490633,
            "name": "RoboCup",
            "weight": 6.5989847715736039
        }, {
            "id": 537239587,
            "name": "Boston Dynamics",
            "weight": 5.5837563451776653
        }]
    }, {
        "id": 538279808,
        "name": "Apple Watch",
        "weight": 3.771406580719646
    }, {
        "id": 537606170,
        "name": "Microsoft Windows",
        "weight": 3.3673273042139695
    }, {
        "id": 268490507,
        "name": "Big Data",
        "weight": 3.1556667308062343,
        "topics": [{
            "id": 538269409,
            "name": "Internet of Things",
            "weight": 50.0
        }, {
            "id": 536892536,
            "name": "EMC Corporation",
            "weight": 17.073170731707318
        }, {
            "id": 538112117,
            "name": "Splunk",
            "weight": 6.7073170731707314
        }, {
            "id": 538231560,
            "name": "Databricks",
            "weight": 2.4390243902439024
        }]
    }, {
        "id": 537225077,
        "name": "Timothy D. Cook",
        "weight": 2.8862805464691168
    }, {
        "id": 268490594,
        "name": "3D Printing",
        "weight": 2.6361362324417934,
        "topics": [{
            "id": 537127400,
            "name": "3D Systems",
            "weight": 8.02919708029197
        }, {
            "id": 538164357,
            "name": "MakerBot",
            "weight": 5.8394160583941606
        }, {
            "id": 538188397,
            "name": "Formlabs",
            "weight": 2.9197080291970803
        }, {
            "id": 538119483,
            "name": "Shapeways",
            "weight": 2.9197080291970803
        }]
    }, {
        "id": 537697633,
        "name": "iPhone 5",
        "weight": 2.5014431402732344
    }, {
        "id": 537953873,
        "name": "Pinterest",
        "weight": 2.2705406965557051
    }, {
        "id": 268486817,
        "name": "Open Source Software",
        "weight": 2.251298826245911,
        "topics": [{
            "id": 537114749,
            "name": "Red Hat India",
            "weight": 13.675213675213675
        }]
    }, {
        "id": 536890616,
        "name": "LG Electronics",
        "weight": 2.1358476043871466
    }, {
        "id": 536929918,
        "name": "IBM",
        "weight": 2.1166057340773525
    }, {
        "id": 537069624,
        "name": "Mark Zuckerberg",
        "weight": 2.097363863767558
    }, {
        "id": 268489872,
        "name": "Business Software",
        "weight": 2.05888012314797,
        "topics": [{
            "id": 268485896,
            "name": "CRM",
            "weight": 72.89719626168224,
            "topics": [{
                "id": 537001386,
                "name": "Salesforce.com",
                "weight": 85.8974358974359
            }, {
                "id": 537967433,
                "name": "HubSpot",
                "weight": 10.256410256410257
            }, {
                "id": 538116820,
                "name": "Pegasystems",
                "weight": 1.2820512820512822
            }, {
                "id": 537140097,
                "name": "Sugarcrm",
                "weight": 1.2820512820512822
            }]
        }]
    }, {
        "id": 536892982,
        "name": "Verizon Communications",
        "weight": 1.9626707715989995
    }, {
        "id": 268490178,
        "name": "Augmented Reality",
        "weight": 1.9049451606696171,
        "topics": [{
            "id": 538202231,
            "name": "Google Glass",
            "weight": 26.262626262626263
        }, {
            "id": 538205050,
            "name": "Vuzix",
            "weight": 2.0202020202020203
        }, {
            "id": 538125513,
            "name": "Blippar",
            "weight": 2.0202020202020203
        }]
    }, {
        "id": 537072920,
        "name": "LinkedIn",
        "weight": 1.9049451606696171
    }, {
        "id": 536926433,
        "name": "Intel",
        "weight": 1.9049451606696171
    }, {
        "id": 268486734,
        "name": "Net Neutrality",
        "weight": 1.885703290359823,
        "topics": [{
            "id": 537074547,
            "name": "Federal Communications Commission",
            "weight": 82.65306122448979
        }, {
            "id": 538233245,
            "name": "Internet.org",
            "weight": 21.428571428571427
        }, {
            "id": 537063701,
            "name": "Bharti Airtel",
            "weight": 12.244897959183673
        }]
    }, {
        "id": 537282917,
        "name": "BlackBerry",
        "weight": 1.8664614200500289
    }, {
        "id": 537111468,
        "name": "HTC (telecom)",
        "weight": 1.8279776794304405
    }, {
        "id": 538564546,
        "name": "iOS 9",
        "weight": 1.8279776794304405
    }, {
        "id": 536929917,
        "name": "Hewlett-Packard",
        "weight": 1.7894939388108524
    }, {
        "id": 536896661,
        "name": "Huawei",
        "weight": 1.6932845872618818
    }, {
        "id": 268489759,
        "name": "Databases",
        "weight": 1.6740427169520877,
        "topics": [{
            "id": 268485921,
            "name": "Data Storage",
            "weight": 81.609195402298852,
            "topics": [{
                "id": 536892536,
                "name": "EMC Corporation",
                "weight": 39.436619718309856
            }, {
                "id": 537072724,
                "name": "Imation",
                "weight": 2.816901408450704
            }]
        }, {
            "id": 268486659,
            "name": "Middleware",
            "weight": 19.540229885057471,
            "topics": [{
                "id": 537114749,
                "name": "Red Hat India",
                "weight": 94.117647058823536
            }, {
                "id": 537265450,
                "name": "WSO2 (biz)",
                "weight": 5.882352941176471
            }]
        }, {
            "id": 268486785,
            "name": "NoSQL",
            "weight": 12.64367816091954,
            "topics": [{
                "id": 538175287,
                "name": "Basho Technologies",
                "weight": 27.272727272727273
            }, {
                "id": 537604134,
                "name": "MongoDB",
                "weight": 18.181818181818183
            }, {
                "id": 538132558,
                "name": "FoundationDB",
                "weight": 9.0909090909090917
            }]
        }, {
            "id": 537589241,
            "name": "SQL",
            "weight": 9.1954022988505741
        }, {
            "id": 537582040,
            "name": "Microsoft SQL Server",
            "weight": 5.7471264367816088
        }, {
            "id": 537593875,
            "name": "MySQL",
            "weight": 2.2988505747126435
        }, {
            "id": 537602249,
            "name": "PostgreSQL",
            "weight": 1.1494252873563218
        }]
    }, {
        "id": 536892360,
        "name": "AT&T",
        "weight": 1.6740427169520877
    }, {
        "id": 536919559,
        "name": "T-Mobile",
        "weight": 1.6163171060227055
    }, {
        "id": 538269409,
        "name": "Internet of Things",
        "weight": 1.5778333654031171
    }, {
        "id": 536898159,
        "name": "Adobe Systems",
        "weight": 1.5585914950933231
    }, {
        "id": 537074547,
        "name": "Federal Communications Commission",
        "weight": 1.5585914950933231
    }, {
        "id": 537227356,
        "name": "Skype",
        "weight": 1.4816240138541465
    }, {
        "id": 536929915,
        "name": "Dell",
        "weight": 1.4623821435443525
    }, {
        "id": 536892827,
        "name": "Qualcomm",
        "weight": 1.4238984029247643
    }, {
        "id": 536921239,
        "name": "Cisco Systems, Inc.",
        "weight": 1.385414662305176
    }]
}, {
    "id": 268489617,
    "name": "Social Sciences",
    "weight": 3.2958898984065526,
    "color": "#EAD819",
    "topics": [{
        "id": 268489870,
        "name": "Philosophy",
        "weight": 49.407699901283316,
        "topics": [{
            "id": 537627476,
            "name": "Albert Einstein",
            "weight": 26.373626373626372
        }, {
            "id": 537673030,
            "name": "Gautama Buddha",
            "weight": 2.0979020979020979
        }, {
            "id": 537428293,
            "name": "Isaac Newton",
            "weight": 1.948051948051948
        }, {
            "id": 268487377,
            "name": "Utopia",
            "weight": 1.3986013986013985,
            "topics": [{
                "id": 537687326,
                "name": "Thomas More",
                "weight": 50.0
            }, {
                "id": 537223630,
                "name": "David Fincher",
                "weight": 32.142857142857146
            }, {
                "id": 537213053,
                "name": "Todd Rundgren",
                "weight": 17.857142857142858
            }]
        }, {
            "id": 268490713,
            "name": "Dystopia",
            "weight": 1.2487512487512487,
            "topics": [{
                "id": 537715772,
                "name": "Megadeth",
                "weight": 64.0
            }]
        }, {
            "id": 537631563,
            "name": "Aristotle",
            "weight": 1.048951048951049
        }]
    }, {
        "id": 268456461,
        "name": "History",
        "weight": 39.634748272458047,
        "topics": [{
            "id": 536892993,
            "name": "The Walt Disney Company",
            "weight": 32.19178082191781
        }, {
            "id": 537084397,
            "name": "Bill Clinton",
            "weight": 18.430884184308841
        }, {
            "id": 538110359,
            "name": "Pope Francis",
            "weight": 17.870485678704856
        }, {
            "id": 537761491,
            "name": "Game of Thrones",
            "weight": 14.321295143212952
        }, {
            "id": 538278257,
            "name": "Islamic State in Iraq and the Levant",
            "weight": 14.072229140722291
        }, {
            "id": 537227304,
            "name": "John F. Kennedy",
            "weight": 13.947696139476962
        }, {
            "id": 537140849,
            "name": "Timely Marvel Comics",
            "weight": 13.760896637608967
        }, {
            "id": 537259158,
            "name": "Bernie Sanders",
            "weight": 13.325031133250311
        }, {
            "id": 537103496,
            "name": "National Geographic Society",
            "weight": 11.394769613947696
        }, {
            "id": 268486242,
            "name": "Great Depression",
            "weight": 11.207970112079702,
            "topics": [{
                "id": 537084692,
                "name": "Federal Reserve System",
                "weight": 93.888888888888886
            }, {
                "id": 537329504,
                "name": "Franklin D. Roosevelt",
                "weight": 11.666666666666666
            }, {
                "id": 537242459,
                "name": "Ben Bernanke",
                "weight": 5.5555555555555554
            }]
        }, {
            "id": 537084692,
            "name": "Federal Reserve System",
            "weight": 10.523038605230386
        }, {
            "id": 268489657,
            "name": "Vikings",
            "weight": 10.08717310087173,
            "topics": [{
                "id": 537358172,
                "name": "Minnesota Vikings",
                "weight": 22.839506172839506
            }, {
                "id": 537285160,
                "name": "Adrian Peterson",
                "weight": 3.7037037037037037
            }, {
                "id": 537280868,
                "name": "Adrian Peterson",
                "weight": 3.0864197530864197
            }, {
                "id": 537944120,
                "name": "Mike Zimmer",
                "weight": 3.0864197530864197
            }, {
                "id": 537502332,
                "name": "Travis Fimmel",
                "weight": 2.4691358024691357
            }, {
                "id": 538039905,
                "name": "Katheryn Winnick",
                "weight": 1.8518518518518519
            }, {
                "id": 537930487,
                "name": "Alexander Ludwig",
                "weight": 1.2345679012345678
            }, {
                "id": 537879698,
                "name": "Clive Standen",
                "weight": 1.2345679012345678
            }]
        }, {
            "id": 536883339,
            "name": "Vladimir Putin",
            "weight": 8.7795765877957663
        }, {
            "id": 537219591,
            "name": "Ben Carson",
            "weight": 7.5342465753424657
        }, {
            "id": 536891982,
            "name": "George W. Bush",
            "weight": 7.3474470734744708
        }, {
            "id": 537125598,
            "name": "Sotheby's Auction House",
            "weight": 5.23038605230386
        }, {
            "id": 537125458,
            "name": "Smithsonian Institution",
            "weight": 5.1681195516811957
        }, {
            "id": 537064188,
            "name": "Wikipedia",
            "weight": 4.9813200498132009
        }, {
            "id": 538008384,
            "name": "William Shakespeare",
            "weight": 4.9813200498132009
        }, {
            "id": 537077301,
            "name": "Ronald Reagan",
            "weight": 4.5454545454545459
        }, {
            "id": 268489630,
            "name": "Ancient Egypt",
            "weight": 4.4831880448318806,
            "topics": [{
                "id": 538575511,
                "name": "Tutankhamun",
                "weight": 37.5
            }, {
                "id": 537074784,
                "name": "British Museum",
                "weight": 29.166666666666668
            }, {
                "id": 537979473,
                "name": "Ra",
                "weight": 27.777777777777779
            }, {
                "id": 537989655,
                "name": "Ra",
                "weight": 27.777777777777779
            }, {
                "id": 537968275,
                "name": "Osiris",
                "weight": 12.5
            }, {
                "id": 538006863,
                "name": "Akhenaten",
                "weight": 12.5
            }, {
                "id": 538006688,
                "name": "Nefertiti",
                "weight": 8.3333333333333339
            }, {
                "id": 537138827,
                "name": "Rosetta Stone (software)",
                "weight": 5.5555555555555554
            }, {
                "id": 537987060,
                "name": "Horus",
                "weight": 5.5555555555555554
            }, {
                "id": 538576251,
                "name": "Khufu",
                "weight": 4.166666666666667
            }, {
                "id": 537670920,
                "name": "Zahi Hawass",
                "weight": 4.166666666666667
            }, {
                "id": 537961785,
                "name": "Ancient Egyptians",
                "weight": 1.3888888888888888
            }]
        }, {
            "id": 537070495,
            "name": "Elizabeth II",
            "weight": 4.4209215442092153
        }, {
            "id": 538011497,
            "name": "Shinzō Abe",
            "weight": 3.9850560398505603
        }, {
            "id": 537070852,
            "name": "Recep Tayyip Erdogan",
            "weight": 3.7982565379825655
        }, {
            "id": 538573666,
            "name": "Benjamin Netanyahu",
            "weight": 3.7982565379825655
        }, {
            "id": 538576505,
            "name": "Adolf Hitler",
            "weight": 3.4869240348692405
        }, {
            "id": 537397819,
            "name": "Abraham Lincoln",
            "weight": 3.3001245330012452
        }, {
            "id": 537190075,
            "name": "Martin O'Malley",
            "weight": 3.3001245330012452
        }, {
            "id": 537323972,
            "name": "Adolf Hitler",
            "weight": 3.1133250311332503
        }, {
            "id": 538053663,
            "name": "Churchill",
            "weight": 2.8019925280199254
        }, {
            "id": 537586948,
            "name": "Mein Kampf",
            "weight": 2.8019925280199254
        }, {
            "id": 537074911,
            "name": "Library of Congress",
            "weight": 2.5529265255292652
        }, {
            "id": 537633667,
            "name": "Leonardo da Vinci",
            "weight": 2.3661270236612704
        }, {
            "id": 537072809,
            "name": "Ubisoft",
            "weight": 2.3038605230386051
        }, {
            "id": 537077288,
            "name": "Metropolitan Museum of Art",
            "weight": 2.3038605230386051
        }, {
            "id": 537084704,
            "name": "UNESCO (culture)",
            "weight": 2.3038605230386051
        }, {
            "id": 537190918,
            "name": "Mona Lisa",
            "weight": 1.86799501867995
        }, {
            "id": 538575511,
            "name": "Tutankhamun",
            "weight": 1.6811955168119552
        }, {
            "id": 537420883,
            "name": "Joseph Stalin",
            "weight": 1.6189290161892902
        }, {
            "id": 537069734,
            "name": "Paul Allen",
            "weight": 1.5566625155666252
        }, {
            "id": 538087882,
            "name": "Chris Kyle",
            "weight": 1.4321295143212951
        }, {
            "id": 537201153,
            "name": "Barbra Streisand",
            "weight": 1.36986301369863
        }, {
            "id": 538050440,
            "name": "Saxon",
            "weight": 1.36986301369863
        }, {
            "id": 537074784,
            "name": "British Museum",
            "weight": 1.307596513075965
        }, {
            "id": 537329504,
            "name": "Franklin D. Roosevelt",
            "weight": 1.307596513075965
        }, {
            "id": 538317973,
            "name": "Christopher Columbus",
            "weight": 1.1830635118306352
        }]
    }, {
        "id": 268456466,
        "name": "Psychology",
        "weight": 13.746298124383021,
        "topics": [{
            "id": 268490567,
            "name": "Depression",
            "weight": 70.3770197486535,
            "topics": [{
                "id": 537217726,
                "name": "Hayden Panettiere",
                "weight": 50.765306122448976
            }, {
                "id": 537238110,
                "name": "Robin Williams",
                "weight": 14.540816326530612
            }, {
                "id": 538234207,
                "name": "Cara Delevingne",
                "weight": 7.6530612244897958
            }, {
                "id": 537661218,
                "name": "Coronation Street",
                "weight": 6.8877551020408161
            }, {
                "id": 538026633,
                "name": "Deepika Padukone",
                "weight": 3.8265306122448979
            }]
        }, {
            "id": 268486874,
            "name": "Perception",
            "weight": 26.391382405745063,
            "topics": [{
                "id": 537631563,
                "name": "Aristotle",
                "weight": 14.285714285714286
            }, {
                "id": 537225370,
                "name": "David Eagleman",
                "weight": 3.4013605442176869
            }]
        }, {
            "id": 268490615,
            "name": "Emotional Intelligence",
            "weight": 13.464991023339318,
            "topics": [{
                "id": 537214359,
                "name": "Daniel Goleman",
                "weight": 1.3333333333333333
            }]
        }, {
            "id": 537097909,
            "name": "American Psychological Association",
            "weight": 3.4111310592459607
        }, {
            "id": 537677282,
            "name": "Sigmund Freud",
            "weight": 1.9748653500897666
        }, {
            "id": 538053353,
            "name": "Psychological science",
            "weight": 1.4362657091561939
        }]
    }, {
        "id": 268487171,
        "name": "Sociology",
        "weight": 7.28035538005923
    }, {
        "id": 268490655,
        "name": "Economics",
        "weight": 6.4659427443237911,
        "topics": [{
            "id": 537084692,
            "name": "Federal Reserve System",
            "weight": 64.503816793893137
        }, {
            "id": 536887934,
            "name": "Goldman Sachs",
            "weight": 35.877862595419849
        }, {
            "id": 537077305,
            "name": "Organization of Petroleum Exporting Countries",
            "weight": 33.969465648854964
        }, {
            "id": 537074517,
            "name": "International Monetary Fund",
            "weight": 32.824427480916029
        }, {
            "id": 537134544,
            "name": "Janet Yellen",
            "weight": 32.061068702290079
        }, {
            "id": 537188536,
            "name": "Paul Krugman",
            "weight": 6.106870229007634
        }, {
            "id": 537077453,
            "name": "Group of 20",
            "weight": 5.7251908396946565
        }, {
            "id": 537242459,
            "name": "Ben Bernanke",
            "weight": 3.8167938931297711
        }, {
            "id": 537194311,
            "name": "Raghuram Rajan",
            "weight": 2.6717557251908395
        }, {
            "id": 537074716,
            "name": "Capital Economics",
            "weight": 1.5267175572519085
        }]
    }, {
        "id": 268456457,
        "name": "Archaeology",
        "weight": 4.7384007897334648,
        "topics": [{
            "id": 537670920,
            "name": "Zahi Hawass",
            "weight": 1.5625
        }, {
            "id": 537108038,
            "name": "Archaeological Survey of India",
            "weight": 1.0416666666666667
        }]
    }, {
        "id": 268487015,
        "name": "Rhetoric",
        "weight": 2.2211253701875617,
        "topics": [{
            "id": 537077301,
            "name": "Ronald Reagan",
            "weight": 81.111111111111114
        }, {
            "id": 537631563,
            "name": "Aristotle",
            "weight": 23.333333333333332
        }, {
            "id": 537629195,
            "name": "Plato",
            "weight": 13.333333333333334
        }]
    }, {
        "id": 268485552,
        "name": "Anthropology",
        "weight": 1.9002961500493583,
        "topics": [{
            "id": 537117909,
            "name": "American Museum of Natural History",
            "weight": 51.948051948051948
        }, {
            "id": 537110586,
            "name": "Field Museum of Natural History",
            "weight": 5.1948051948051948
        }, {
            "id": 537107802,
            "name": "American Anthropological Association",
            "weight": 3.8961038961038961
        }]
    }, {
        "id": 268486545,
        "name": "Linguistics",
        "weight": 1.8015794669299112,
        "topics": [{
            "id": 268486726,
            "name": "Computational Linguistics",
            "weight": 47.945205479452056
        }, {
            "id": 537073006,
            "name": "Apache",
            "weight": 45.205479452054796
        }, {
            "id": 268487110,
            "name": "Semantics",
            "weight": 27.397260273972602
        }, {
            "id": 537214947,
            "name": "Steven Pinker",
            "weight": 12.328767123287671
        }]
    }, {
        "id": 268490730,
        "name": "Vexillology",
        "weight": 1.2833168805528135
    }, {
        "id": 268490638,
        "name": "Semiotics",
        "weight": 1.0858835143139192
    }]
}, {
    "id": 268435465,
    "name": "Health",
    "weight": 2.927420469981536,
    "color": "#3EB668",
    "topics": [{
        "id": 268489459,
        "name": "Health Conditions",
        "weight": 51.681022506251736,
        "topics": [{
            "id": 268450467,
            "name": "Mental Health",
            "weight": 50.0,
            "topics": [{
                "id": 268487235,
                "name": "Stress",
                "weight": 73.870967741935488
            }, {
                "id": 268486958,
                "name": "Psychiatry",
                "weight": 20.0,
                "topics": [{
                    "id": 268487080,
                    "name": "Schizophrenia",
                    "weight": 37.634408602150536
                }, {
                    "id": 268490058,
                    "name": "Bipolar Disorder",
                    "weight": 33.333333333333336
                }, {
                    "id": 538033065,
                    "name": "Molecular Psychiatry",
                    "weight": 6.989247311827957
                }, {
                    "id": 537123345,
                    "name": "National Alliance on Mental Illness",
                    "weight": 4.838709677419355
                }]
            }, {
                "id": 268450460,
                "name": "Autism",
                "weight": 18.817204301075268,
                "topics": [{
                    "id": 537128913,
                    "name": "Autism Speaks",
                    "weight": 2.8571428571428572
                }, {
                    "id": 537240407,
                    "name": "Andrew Wakefield",
                    "weight": 1.1428571428571428
                }]
            }, {
                "id": 268490059,
                "name": "PTSD",
                "weight": 7.849462365591398,
                "topics": [{
                    "id": 537727858,
                    "name": "Veterans Health Administration",
                    "weight": 8.2191780821917817
                }]
            }, {
                "id": 268485481,
                "name": "ADHD",
                "weight": 6.881720430107527
            }, {
                "id": 537211019,
                "name": "Demi Lovato",
                "weight": 5.161290322580645
            }, {
                "id": 537141313,
                "name": "United States Department of Health and Human Services",
                "weight": 4.5161290322580649
            }]
        }, {
            "id": 268450461,
            "name": "Cancer",
            "weight": 30.161290322580644,
            "topics": [{
                "id": 268450472,
                "name": "Breast Cancer",
                "weight": 68.805704099821753,
                "topics": [{
                    "id": 537171487,
                    "name": "Angelina Jolie",
                    "weight": 23.575129533678755
                }, {
                    "id": 538279824,
                    "name": "United States Preventive Services Task Force",
                    "weight": 5.9585492227979273
                }]
            }, {
                "id": 268490686,
                "name": "Skin Cancer",
                "weight": 18.71657754010695
            }, {
                "id": 268486573,
                "name": "Lung Cancer",
                "weight": 16.577540106951872
            }, {
                "id": 268486951,
                "name": "Prostate Cancer",
                "weight": 16.399286987522281,
                "topics": [{
                    "id": 537958558,
                    "name": "Abdel Basset Ali al-Megrahi",
                    "weight": 2.1739130434782608
                }]
            }, {
                "id": 537171487,
                "name": "Angelina Jolie",
                "weight": 16.221033868092693
            }, {
                "id": 536892803,
                "name": "Pfizer",
                "weight": 9.9821746880570412
            }, {
                "id": 537077287,
                "name": "American Cancer Society",
                "weight": 8.5561497326203213
            }, {
                "id": 536892718,
                "name": "Merck & Co.",
                "weight": 8.5561497326203213
            }, {
                "id": 537232567,
                "name": "Jimmy Carter",
                "weight": 8.37789661319073
            }, {
                "id": 536892359,
                "name": "AstraZeneca",
                "weight": 6.595365418894831
            }, {
                "id": 536892769,
                "name": "Novartis AG",
                "weight": 6.0606060606060606
            }, {
                "id": 536892336,
                "name": "Amgen",
                "weight": 5.16934046345811
            }, {
                "id": 538279824,
                "name": "United States Preventive Services Task Force",
                "weight": 4.09982174688057
            }, {
                "id": 537050854,
                "name": "Bristol-Myers Squibb",
                "weight": 3.3868092691622103
            }, {
                "id": 537667605,
                "name": "Iron Maiden",
                "weight": 3.2085561497326203
            }, {
                "id": 537128228,
                "name": "American Society of Clinical Oncology",
                "weight": 2.6737967914438503
            }, {
                "id": 537143027,
                "name": "American Association for Cancer Research",
                "weight": 2.3172905525846703
            }, {
                "id": 537070824,
                "name": "Lee Hsien Loong",
                "weight": 1.6042780748663101
            }, {
                "id": 537148786,
                "name": "International Agency for Research on Cancer",
                "weight": 1.4260249554367201
            }, {
                "id": 537310510,
                "name": "Johan Cruijff",
                "weight": 1.2477718360071302
            }, {
                "id": 537971826,
                "name": "Biomarkers",
                "weight": 1.2477718360071302
            }, {
                "id": 537237130,
                "name": "Cancer Research UK",
                "weight": 1.0695187165775402
            }]
        }, {
            "id": 268489464,
            "name": "Immune Disorders",
            "weight": 27.526881720430108,
            "topics": [{
                "id": 268485501,
                "name": "AIDS",
                "weight": 88.0859375,
                "topics": [{
                    "id": 537653192,
                    "name": "Bono",
                    "weight": 51.441241685144121
                }, {
                    "id": 537077175,
                    "name": "U.S. Food and Drug Administration",
                    "weight": 30.155210643015522
                }, {
                    "id": 537074516,
                    "name": "World Health Organization",
                    "weight": 23.725055432372507
                }, {
                    "id": 537193977,
                    "name": "Elton John",
                    "weight": 13.747228381374724
                }, {
                    "id": 537055776,
                    "name": "Gilead Sciences",
                    "weight": 12.638580931263858
                }, {
                    "id": 536892803,
                    "name": "Pfizer",
                    "weight": 12.416851441241684
                }, {
                    "id": 537084942,
                    "name": "UNICEF (ngo)",
                    "weight": 11.973392461197339
                }, {
                    "id": 537198904,
                    "name": "Charlie Sheen",
                    "weight": 8.8691796008869179
                }, {
                    "id": 538125951,
                    "name": "amfAR",
                    "weight": 3.3259423503325944
                }, {
                    "id": 537107580,
                    "name": "AIDS Healthcare Foundation",
                    "weight": 1.7738359201773837
                }, {
                    "id": 537106701,
                    "name": "United States Agency for International Development",
                    "weight": 1.5521064301552105
                }, {
                    "id": 538028496,
                    "name": "AIDS Research and Human Retroviruses",
                    "weight": 1.1086474501108647
                }]
            }, {
                "id": 268485523,
                "name": "Allergies",
                "weight": 28.3203125
            }]
        }, {
            "id": 268450473,
            "name": "Infectious Diseases",
            "weight": 20.752688172043012,
            "topics": [{
                "id": 268490665,
                "name": "Ebola",
                "weight": 50.777202072538863,
                "topics": [{
                    "id": 537109159,
                    "name": "Centers for Disease Control",
                    "weight": 73.9795918367347
                }, {
                    "id": 537074516,
                    "name": "World Health Organization",
                    "weight": 54.591836734693878
                }, {
                    "id": 537135737,
                    "name": "Medecins Sans Frontieres",
                    "weight": 19.387755102040817
                }, {
                    "id": 537973527,
                    "name": "Royal Free Hospital",
                    "weight": 5.1020408163265305
                }, {
                    "id": 538181277,
                    "name": "Tekmira Pharmaceuticals",
                    "weight": 3.0612244897959182
                }, {
                    "id": 537198575,
                    "name": "Nancy Snyderman",
                    "weight": 1.0204081632653061
                }]
            }, {
                "id": 268486365,
                "name": "Influenza",
                "weight": 43.005181347150256,
                "topics": [{
                    "id": 537073077,
                    "name": "CSL Limited",
                    "weight": 4.8192771084337354
                }]
            }, {
                "id": 268487056,
                "name": "Salmonella",
                "weight": 40.155440414507773,
                "topics": [{
                    "id": 537130392,
                    "name": "Chipotle Mexican Grill, Inc.",
                    "weight": 94.193548387096769
                }, {
                    "id": 537073212,
                    "name": "ConAgra Foods",
                    "weight": 2.5806451612903225
                }]
            }, {
                "id": 537109159,
                "name": "Centers for Disease Control",
                "weight": 37.564766839378237
            }, {
                "id": 268486586,
                "name": "Malaria",
                "weight": 33.419689119170982,
                "topics": [{
                    "id": 537074516,
                    "name": "World Health Organization",
                    "weight": 82.945736434108525
                }, {
                    "id": 536892587,
                    "name": "GlaxoSmithKline",
                    "weight": 27.906976744186046
                }, {
                    "id": 537155070,
                    "name": "The Bill and Melinda Gates Foundation",
                    "weight": 12.4031007751938
                }, {
                    "id": 537126187,
                    "name": "The Global Fund to Fight AIDS, Tuberculosis & Malaria",
                    "weight": 1.5503875968992249
                }]
            }]
        }, {
            "id": 268489463,
            "name": "Endocrine Disorders",
            "weight": 17.311827956989248,
            "topics": [{
                "id": 268450474,
                "name": "Diabetes",
                "weight": 89.1304347826087,
                "topics": [{
                    "id": 536892718,
                    "name": "Merck & Co.",
                    "weight": 16.724738675958189
                }, {
                    "id": 536892359,
                    "name": "AstraZeneca",
                    "weight": 12.89198606271777
                }, {
                    "id": 536892367,
                    "name": "Sanofi",
                    "weight": 10.452961672473867
                }, {
                    "id": 537710361,
                    "name": "B.B. King",
                    "weight": 5.5749128919860631
                }, {
                    "id": 536892715,
                    "name": "Medtronic",
                    "weight": 2.0905923344947737
                }, {
                    "id": 537956504,
                    "name": "Diabetes Care",
                    "weight": 2.0905923344947737
                }, {
                    "id": 537128113,
                    "name": "American Diabetes Association",
                    "weight": 1.7421602787456445
                }, {
                    "id": 536892535,
                    "name": "Eli Lilly and Company",
                    "weight": 1.0452961672473868
                }]
            }, {
                "id": 268490701,
                "name": "Osteoporosis",
                "weight": 8.3850931677018625
            }]
        }, {
            "id": 268486741,
            "name": "Neurology",
            "weight": 14.78494623655914,
            "topics": [{
                "id": 268450459,
                "name": "Alzheimers",
                "weight": 60.0,
                "topics": [{
                    "id": 537197846,
                    "name": "Terry Pratchett",
                    "weight": 6.666666666666667
                }, {
                    "id": 537097793,
                    "name": "Alzheimer's Society",
                    "weight": 1.8181818181818181
                }]
            }, {
                "id": 268485533,
                "name": "Amnesia",
                "weight": 29.09090909090909,
                "topics": [{
                    "id": 537810325,
                    "name": "Idea Factory",
                    "weight": 6.25
                }, {
                    "id": 537147445,
                    "name": "Frictional Games",
                    "weight": 2.5
                }, {
                    "id": 537720863,
                    "name": "50 First Dates",
                    "weight": 2.5
                }]
            }, {
                "id": 268486282,
                "name": "Headaches",
                "weight": 18.545454545454547
            }, {
                "id": 268487339,
                "name": "Trauma",
                "weight": 12.0,
                "topics": [{
                    "id": 536892911,
                    "name": "Stryker Corporation",
                    "weight": 9.0909090909090917
                }, {
                    "id": 537688848,
                    "name": "San Francisco General Hospital",
                    "weight": 3.0303030303030303
                }, {
                    "id": 537214766,
                    "name": "Freida Pinto",
                    "weight": 3.0303030303030303
                }, {
                    "id": 537244335,
                    "name": "Brain Trauma Foundation",
                    "weight": 3.0303030303030303
                }]
            }, {
                "id": 537128041,
                "name": "American Academy of Neurology",
                "weight": 4.0
            }, {
                "id": 537195664,
                "name": "Oliver Sacks",
                "weight": 2.9090909090909092
            }]
        }, {
            "id": 268489470,
            "name": "Blood Disorders",
            "weight": 13.387096774193548,
            "topics": [{
                "id": 268485687,
                "name": "Blood Pressure",
                "weight": 79.518072289156621
            }]
        }, {
            "id": 268486286,
            "name": "Heart Disease",
            "weight": 13.333333333333334,
            "topics": [{
                "id": 537075090,
                "name": "American Heart Association",
                "weight": 24.193548387096776
            }, {
                "id": 537098878,
                "name": "British Heart Foundation",
                "weight": 2.8225806451612905
            }]
        }, {
            "id": 268489467,
            "name": "Nutrition and Metabolism Disorders",
            "weight": 8.172043010752688
        }, {
            "id": 268489462,
            "name": "Respiratory Disorders",
            "weight": 6.720430107526882,
            "topics": [{
                "id": 268485588,
                "name": "Asthma",
                "weight": 68.0
            }]
        }, {
            "id": 268450479,
            "name": "Eye Health",
            "weight": 5.5376344086021509
        }, {
            "id": 268486378,
            "name": "Sleep Disorders",
            "weight": 4.56989247311828
        }, {
            "id": 268450464,
            "name": "Dental Diseases",
            "weight": 3.3870967741935485
        }, {
            "id": 268489461,
            "name": "Musculoskeletal Disorders",
            "weight": 2.6881720430107525,
            "topics": [{
                "id": 268490710,
                "name": "Neck Pain",
                "weight": 54.0
            }, {
                "id": 268485617,
                "name": "Back Pain",
                "weight": 42.0
            }]
        }]
    }, {
        "id": 268489460,
        "name": "Medicine",
        "weight": 23.33981661572659,
        "topics": [{
            "id": 268487302,
            "name": "Therapy",
            "weight": 54.642857142857146,
            "topics": [{
                "id": 537135737,
                "name": "Medecins Sans Frontieres",
                "weight": 8.2788671023965144
            }, {
                "id": 537055778,
                "name": "Celgene",
                "weight": 6.1002178649237475
            }]
        }, {
            "id": 268487248,
            "name": "Surgery",
            "weight": 16.904761904761905,
            "topics": [{
                "id": 537178034,
                "name": "Tiger Woods",
                "weight": 16.197183098591548
            }, {
                "id": 538082703,
                "name": "Mehmet Öz",
                "weight": 15.492957746478874
            }, {
                "id": 537671141,
                "name": "Kevin Love",
                "weight": 11.971830985915492
            }, {
                "id": 537195541,
                "name": "Russell Westbrook",
                "weight": 9.8591549295774641
            }, {
                "id": 537192827,
                "name": "Derrick Rose",
                "weight": 8.4507042253521121
            }, {
                "id": 537193628,
                "name": "Jack Wilshere",
                "weight": 8.4507042253521121
            }, {
                "id": 537074090,
                "name": "Intuitive Surgical",
                "weight": 4.929577464788732
            }, {
                "id": 538005735,
                "name": "Tommy John",
                "weight": 3.5211267605633805
            }, {
                "id": 537143202,
                "name": "American Society of Plastic Surgeons",
                "weight": 1.408450704225352
            }, {
                "id": 537196846,
                "name": "John Smoltz",
                "weight": 1.408450704225352
            }]
        }, {
            "id": 537077175,
            "name": "U.S. Food and Drug Administration",
            "weight": 16.19047619047619
        }, {
            "id": 537055776,
            "name": "Gilead Sciences",
            "weight": 6.7857142857142856
        }, {
            "id": 536892803,
            "name": "Pfizer",
            "weight": 6.666666666666667
        }, {
            "id": 537074508,
            "name": "American Medical Association",
            "weight": 5.1190476190476186
        }, {
            "id": 537135737,
            "name": "Medecins Sans Frontieres",
            "weight": 4.5238095238095237
        }, {
            "id": 536892587,
            "name": "GlaxoSmithKline",
            "weight": 4.2857142857142856
        }, {
            "id": 536892646,
            "name": "Johnson & Johnson",
            "weight": 4.2857142857142856
        }, {
            "id": 536892769,
            "name": "Novartis AG",
            "weight": 4.0476190476190474
        }, {
            "id": 537151410,
            "name": "New England Journal of Medicine",
            "weight": 3.6904761904761907
        }, {
            "id": 536892367,
            "name": "Sanofi",
            "weight": 3.5714285714285716
        }, {
            "id": 538082703,
            "name": "Mehmet Öz",
            "weight": 2.6190476190476191
        }, {
            "id": 538250277,
            "name": "Eli Lilly",
            "weight": 2.0238095238095237
        }]
    }, {
        "id": 268450470,
        "name": "Women's Health",
        "weight": 17.616004445679355,
        "topics": [{
            "id": 268486936,
            "name": "Pregnancy",
            "weight": 34.069400630914828,
            "topics": [{
                "id": 537965100,
                "name": "Teen Mom",
                "weight": 13.425925925925926
            }, {
                "id": 538276902,
                "name": "C-Section",
                "weight": 4.166666666666667
            }, {
                "id": 538111870,
                "name": "BabyCenter",
                "weight": 3.2407407407407409
            }]
        }, {
            "id": 268457470,
            "name": "Abortions",
            "weight": 27.444794952681388,
            "topics": [{
                "id": 537137974,
                "name": "Planned Parenthood",
                "weight": 66.0919540229885
            }]
        }]
    }, {
        "id": 268450465,
        "name": "Health Care",
        "weight": 15.837732703528758,
        "topics": [{
            "id": 537052009,
            "name": "Barack Obama",
            "weight": 84.21052631578948
        }, {
            "id": 537074508,
            "name": "American Medical Association",
            "weight": 7.5438596491228074
        }, {
            "id": 537074564,
            "name": "Nancy Pelosi",
            "weight": 7.0175438596491224
        }, {
            "id": 537075525,
            "name": "Bobby Jindal",
            "weight": 5.0877192982456139
        }, {
            "id": 536892302,
            "name": "Aetna",
            "weight": 4.56140350877193
        }, {
            "id": 536892618,
            "name": "Humana",
            "weight": 3.8596491228070176
        }, {
            "id": 537072376,
            "name": "Wellpoint",
            "weight": 1.9298245614035088
        }, {
            "id": 537134734,
            "name": "Kaiser Family Foundation",
            "weight": 1.4035087719298245
        }]
    }, {
        "id": 268450478,
        "name": "Health Insurance",
        "weight": 13.892747985551543,
        "topics": [{
            "id": 537052009,
            "name": "Barack Obama",
            "weight": 96.0
        }, {
            "id": 537075056,
            "name": "Mitt Romney",
            "weight": 11.4
        }, {
            "id": 536892302,
            "name": "Aetna",
            "weight": 5.2
        }, {
            "id": 536892618,
            "name": "Humana",
            "weight": 4.4
        }, {
            "id": 537072357,
            "name": "Blue Cross and Blue Shield Association",
            "weight": 3.2
        }, {
            "id": 536892444,
            "name": "Cigna",
            "weight": 3.2
        }]
    }, {
        "id": 268489468,
        "name": "Medical Treatments",
        "weight": 12.003334259516532,
        "topics": [{
            "id": 268450468,
            "name": "Vaccines",
            "weight": 43.981481481481481,
            "topics": [{
                "id": 536892803,
                "name": "Pfizer",
                "weight": 29.473684210526315
            }, {
                "id": 536892718,
                "name": "Merck & Co.",
                "weight": 25.263157894736842
            }, {
                "id": 536892587,
                "name": "GlaxoSmithKline",
                "weight": 18.94736842105263
            }, {
                "id": 536892769,
                "name": "Novartis AG",
                "weight": 17.894736842105264
            }, {
                "id": 537193502,
                "name": "Jim Carrey",
                "weight": 6.8421052631578947
            }, {
                "id": 537599036,
                "name": "Gardasil",
                "weight": 4.7368421052631575
            }, {
                "id": 537240407,
                "name": "Andrew Wakefield",
                "weight": 1.0526315789473684
            }]
        }]
    }, {
        "id": 268450475,
        "name": "Child Health",
        "weight": 10.919699916643513,
        "topics": [{
            "id": 268486616,
            "name": "Maternity",
            "weight": 60.814249363867681
        }, {
            "id": 268453478,
            "name": "Babies",
            "weight": 42.239185750636132,
            "topics": [{
                "id": 537106438,
                "name": "Toys \"R\" Us International",
                "weight": 12.048192771084338
            }, {
                "id": 537102873,
                "name": "March of Dimes",
                "weight": 4.8192771084337354
            }]
        }, {
            "id": 268485787,
            "name": "Childhood Obesity",
            "weight": 27.2264631043257
        }, {
            "id": 268485712,
            "name": "Breastfeeding",
            "weight": 17.048346055979643,
            "topics": [{
                "id": 537143809,
                "name": "Australian Breastfeeding Association",
                "weight": 4.4776119402985071
            }]
        }]
    }, {
        "id": 268486793,
        "name": "Nutrition",
        "weight": 10.030564045568214,
        "topics": [{
            "id": 537074516,
            "name": "World Health Organization",
            "weight": 29.6398891966759
        }, {
            "id": 536939351,
            "name": "Nestlé",
            "weight": 8.310249307479225
        }, {
            "id": 537107223,
            "name": "World Food Programme",
            "weight": 4.986149584487535
        }, {
            "id": 537073917,
            "name": "Royal DSM",
            "weight": 3.8781163434903045
        }, {
            "id": 537130116,
            "name": "Center for Nutrition Policy and Promotion",
            "weight": 2.4930747922437675
        }, {
            "id": 538227714,
            "name": "Academy of Nutrition and Dietetics",
            "weight": 1.3850415512465375
        }, {
            "id": 537148171,
            "name": "Herbal Life",
            "weight": 1.10803324099723
        }, {
            "id": 537119213,
            "name": "Center for Science in the Public Interest",
            "weight": 1.10803324099723
        }]
    }, {
        "id": 268486792,
        "name": "Nursing",
        "weight": 9.2525701583773277,
        "topics": [{
            "id": 537137590,
            "name": "Palliative Care",
            "weight": 1.8018018018018018
        }]
    }, {
        "id": 268490731,
        "name": "Wellness",
        "weight": 7.1130869686023894
    }, {
        "id": 268486960,
        "name": "Public Health",
        "weight": 6.501806057238122,
        "topics": [{
            "id": 537109159,
            "name": "Centers for Disease Control",
            "weight": 61.965811965811966
        }, {
            "id": 537077175,
            "name": "U.S. Food and Drug Administration",
            "weight": 58.119658119658119
        }, {
            "id": 537074516,
            "name": "World Health Organization",
            "weight": 45.726495726495727
        }, {
            "id": 537074508,
            "name": "American Medical Association",
            "weight": 18.376068376068375
        }, {
            "id": 537141313,
            "name": "United States Department of Health and Human Services",
            "weight": 17.948717948717949
        }, {
            "id": 537074925,
            "name": "Margaret Chan",
            "weight": 7.6923076923076925
        }, {
            "id": 537826478,
            "name": "Ministry of Health",
            "weight": 6.4102564102564106
        }, {
            "id": 537152861,
            "name": "Public Health Agency of Canada",
            "weight": 2.9914529914529915
        }, {
            "id": 537265710,
            "name": "California Department of Public Health",
            "weight": 2.1367521367521367
        }, {
            "id": 538110448,
            "name": "Ministry of Health",
            "weight": 2.1367521367521367
        }]
    }, {
        "id": 268489457,
        "name": "Addictions",
        "weight": 5.7793831619894416,
        "topics": [{
            "id": 268487154,
            "name": "Smoking",
            "weight": 61.057692307692307,
            "topics": [{
                "id": 538260049,
                "name": "Vape",
                "weight": 3.9370078740157481
            }]
        }, {
            "id": 268489458,
            "name": "Drug Addiction",
            "weight": 57.692307692307693,
            "topics": [{
                "id": 538563588,
                "name": "Carly Fiorina",
                "weight": 68.333333333333329
            }]
        }, {
            "id": 268450457,
            "name": "Alcohol Addiction",
            "weight": 48.557692307692307
        }]
    }, {
        "id": 268450476,
        "name": "Reproductive Health",
        "weight": 5.4737427063073074,
        "topics": [{
            "id": 268485678,
            "name": "Birth Control",
            "weight": 90.862944162436548,
            "topics": [{
                "id": 537137974,
                "name": "Planned Parenthood",
                "weight": 64.245810055865917
            }, {
                "id": 538563588,
                "name": "Carly Fiorina",
                "weight": 45.81005586592179
            }, {
                "id": 536892390,
                "name": "Bayer",
                "weight": 16.201117318435752
            }, {
                "id": 537699023,
                "name": "Cory Gardner",
                "weight": 3.35195530726257
            }]
        }, {
            "id": 537137974,
            "name": "Planned Parenthood",
            "weight": 58.3756345177665
        }, {
            "id": 268486109,
            "name": "Fertility",
            "weight": 8.1218274111675122
        }]
    }, {
        "id": 268450458,
        "name": "Alternative Medicine",
        "weight": 4.890247290914143,
        "topics": [{
            "id": 537668603,
            "name": "Charles, Prince of Wales",
            "weight": 24.431818181818183
        }, {
            "id": 268486338,
            "name": "Hypnosis",
            "weight": 22.727272727272727,
            "topics": [{
                "id": 537677282,
                "name": "Sigmund Freud",
                "weight": 27.5
            }, {
                "id": 537768044,
                "name": "Derren Brown",
                "weight": 7.5
            }, {
                "id": 537197944,
                "name": "Paul McKenna",
                "weight": 5.0
            }]
        }, {
            "id": 268485575,
            "name": "Aromatherapy",
            "weight": 14.772727272727273
        }, {
            "id": 537189576,
            "name": "Deepak Chopra",
            "weight": 9.6590909090909083
        }]
    }, {
        "id": 268450466,
        "name": "Men's Health",
        "weight": 4.5846068352320088
    }, {
        "id": 537109159,
        "name": "Centers for Disease Control",
        "weight": 4.0288969158099475
    }, {
        "id": 537077175,
        "name": "U.S. Food and Drug Administration",
        "weight": 3.7788274520700194
    }, {
        "id": 268490603,
        "name": "Organ Transplantation",
        "weight": 3.7232564601278133
    }, {
        "id": 537137974,
        "name": "Planned Parenthood",
        "weight": 3.1953320366768545
    }, {
        "id": 268486564,
        "name": "Longevity",
        "weight": 3.1397610447346485,
        "topics": [{
            "id": 537214751,
            "name": "Dan Buettner",
            "weight": 6.1946902654867255
        }, {
            "id": 537132875,
            "name": "Gerontology Research Group",
            "weight": 2.6548672566371683
        }]
    }, {
        "id": 268489469,
        "name": "Aging",
        "weight": 3.0841900527924424,
        "topics": [{
            "id": 537142446,
            "name": "AARP (nonprofit)",
            "weight": 16.216216216216218
        }]
    }, {
        "id": 537074516,
        "name": "World Health Organization",
        "weight": 2.97304806890803
    }, {
        "id": 537075008,
        "name": "Mayo Clinic",
        "weight": 1.6949152542372881
    }, {
        "id": 537075090,
        "name": "American Heart Association",
        "weight": 1.667129758266185
    }, {
        "id": 536892803,
        "name": "Pfizer",
        "weight": 1.5559877743817727
    }, {
        "id": 537077287,
        "name": "American Cancer Society",
        "weight": 1.3337038066129481
    }, {
        "id": 536892718,
        "name": "Merck & Co.",
        "weight": 1.3337038066129481
    }, {
        "id": 537232567,
        "name": "Jimmy Carter",
        "weight": 1.305918310641845
    }, {
        "id": 537177786,
        "name": "Jerry Brown",
        "weight": 1.2781328146707418
    }, {
        "id": 537074508,
        "name": "American Medical Association",
        "weight": 1.1947763267574327
    }, {
        "id": 537141313,
        "name": "United States Department of Health and Human Services",
        "weight": 1.1669908307863295
    }, {
        "id": 537135737,
        "name": "Medecins Sans Frontieres",
        "weight": 1.0558488469019172
    }, {
        "id": 536892587,
        "name": "GlaxoSmithKline",
        "weight": 1.0002778549597111
    }, {
        "id": 536892646,
        "name": "Johnson & Johnson",
        "weight": 1.0002778549597111
    }]
}, {
    "id": 268490144,
    "name": "Good News",
    "weight": 2.900578326188985,
    "color": "#844DD6"
}, {
    "id": 268435476,
    "name": "World News",
    "weight": 2.8355064624494677,
    "color": "#564DD6",
    "topics": [{
        "id": 268490520,
        "name": "Latin America News",
        "weight": 26.44865174985657
    }, {
        "id": 537077397,
        "name": "U.S. State Department",
        "weight": 14.343086632243258
    }, {
        "id": 537052009,
        "name": "Barack Obama",
        "weight": 13.769363166953529
    }, {
        "id": 538110359,
        "name": "Pope Francis",
        "weight": 8.23293172690763
    }, {
        "id": 538278257,
        "name": "Islamic State in Iraq and the Levant",
        "weight": 6.4830751577739534
    }, {
        "id": 536889302,
        "name": "United Nations",
        "weight": 4.360298336201951
    }, {
        "id": 536895947,
        "name": "The Pentagon",
        "weight": 4.2742398164084907
    }, {
        "id": 536883339,
        "name": "Vladimir Putin",
        "weight": 4.0447504302925994
    }, {
        "id": 537074831,
        "name": "David Cameron",
        "weight": 3.87263339070568
    }, {
        "id": 537074550,
        "name": "John Kerry",
        "weight": 3.8152610441767068
    }, {
        "id": 537190239,
        "name": "Muhammadu Buhari",
        "weight": 3.6431440045897876
    }, {
        "id": 537746875,
        "name": "Boko Haram",
        "weight": 3.327596098680436
    }, {
        "id": 537132221,
        "name": "Federation Internationale de Football Association",
        "weight": 3.270223752151463
    }, {
        "id": 537074516,
        "name": "World Health Organization",
        "weight": 3.0694205393000575
    }, {
        "id": 537070756,
        "name": "Angela Merkel",
        "weight": 2.9259896729776247
    }, {
        "id": 537265246,
        "name": "Bashar al-Assad",
        "weight": 2.8686173264486516
    }, {
        "id": 536889339,
        "name": "North Atlantic Treaty Organization (NATO)",
        "weight": 2.8399311531841653
    }, {
        "id": 536898981,
        "name": "Taliban",
        "weight": 2.8112449799196786
    }, {
        "id": 537268971,
        "name": "Narendra Modi",
        "weight": 2.7251864601262192
    }, {
        "id": 537077479,
        "name": "Al-Qaeda",
        "weight": 2.6391279403327594
    }, {
        "id": 537077226,
        "name": "European Commission",
        "weight": 2.5817555938037864
    }, {
        "id": 537252187,
        "name": "Regierung der Russischen Föderation",
        "weight": 2.5243832472748133
    }, {
        "id": 537074517,
        "name": "International Monetary Fund",
        "weight": 2.4670109007458403
    }, {
        "id": 537084986,
        "name": "UN Security Council",
        "weight": 2.3522662076878946
    }, {
        "id": 537190481,
        "name": "Xi Jinping",
        "weight": 2.2375215146299485
    }, {
        "id": 537077152,
        "name": "Benjamin Netanyahu",
        "weight": 2.2375215146299485
    }, {
        "id": 537141329,
        "name": "United States National Security Agency",
        "weight": 2.1514629948364887
    }, {
        "id": 537075268,
        "name": "Defence Department",
        "weight": 1.9506597819850833
    }, {
        "id": 537177522,
        "name": "Ban Ki-moon",
        "weight": 1.9219736087205967
    }, {
        "id": 536933926,
        "name": "Hezbollah",
        "weight": 1.9219736087205967
    }, {
        "id": 537676191,
        "name": "Justin Trudeau",
        "weight": 1.8359150889271372
    }, {
        "id": 537074699,
        "name": "Malcolm Turnbull",
        "weight": 1.8359150889271372
    }, {
        "id": 537077426,
        "name": "Sepp Blatter",
        "weight": 1.8359150889271372
    }, {
        "id": 538011497,
        "name": "Shinzō Abe",
        "weight": 1.8359150889271372
    }, {
        "id": 537070852,
        "name": "Recep Tayyip Erdogan",
        "weight": 1.7498565691336776
    }, {
        "id": 537074627,
        "name": "European Central Bank",
        "weight": 1.606425702811245
    }, {
        "id": 537075012,
        "name": "Goodluck Jonathan",
        "weight": 1.5203671830177854
    }, {
        "id": 537213190,
        "name": "Alexis Tsipras",
        "weight": 1.5203671830177854
    }, {
        "id": 537193986,
        "name": "Tony Abbott",
        "weight": 1.4629948364888123
    }, {
        "id": 537954720,
        "name": "François Hollande",
        "weight": 1.3482501434308662
    }, {
        "id": 537077377,
        "name": "European Parliament",
        "weight": 1.3482501434308662
    }, {
        "id": 538250562,
        "name": "Petro Poroshenko",
        "weight": 1.3195639701663797
    }, {
        "id": 537074598,
        "name": "Hamas",
        "weight": 1.2908777969018932
    }, {
        "id": 537097977,
        "name": "Amnesty International",
        "weight": 1.2335054503729201
    }, {
        "id": 537191734,
        "name": "Nawaz Sharif",
        "weight": 1.2048192771084338
    }, {
        "id": 537130410,
        "name": "Christian Democratic Union",
        "weight": 1.1474469305794608
    }]
}, {
    "id": 268490049,
    "name": "Fashion & Beauty",
    "weight": 2.68828137073881,
    "color": "#4DD6D6",
    "topics": [{
        "id": 268435462,
        "name": "Fashion",
        "weight": 84.357034795764,
        "topics": [{
            "id": 268490618,
            "name": "Fashion Accessories",
            "weight": 45.157819225251075,
            "topics": [{
                "id": 268490007,
                "name": "Jewellery",
                "weight": 70.929308975377282,
                "topics": [{
                    "id": 537158120,
                    "name": "The House of Chanel",
                    "weight": 4.8152295632698765
                }]
            }, {
                "id": 268486142,
                "name": "Shoes",
                "weight": 19.459888800635426,
                "topics": [{
                    "id": 537101550,
                    "name": "NIKE (biz)",
                    "weight": 34.285714285714285
                }, {
                    "id": 536894842,
                    "name": "Adidas",
                    "weight": 25.714285714285715
                }, {
                    "id": 537199286,
                    "name": "Christian Louboutin",
                    "weight": 6.5306122448979593
                }, {
                    "id": 537113961,
                    "name": "Onitsuka Tiger",
                    "weight": 6.5306122448979593
                }, {
                    "id": 537151394,
                    "name": "New Balance Athletic Shoe, Inc.",
                    "weight": 5.7142857142857144
                }, {
                    "id": 537657479,
                    "name": "Back to the Future Part II",
                    "weight": 4.0816326530612246
                }, {
                    "id": 537153087,
                    "name": "Reebok International",
                    "weight": 3.6734693877551021
                }, {
                    "id": 537927762,
                    "name": "Salvatore Ferragamo",
                    "weight": 3.2653061224489797
                }, {
                    "id": 537257258,
                    "name": "Nike Skateboarding",
                    "weight": 3.2653061224489797
                }, {
                    "id": 537150146,
                    "name": "Crocs",
                    "weight": 2.4489795918367347
                }, {
                    "id": 537139105,
                    "name": "Saucony",
                    "weight": 2.4489795918367347
                }, {
                    "id": 537270186,
                    "name": "Stuart Weitzman",
                    "weight": 1.6326530612244898
                }, {
                    "id": 538101927,
                    "name": "Tinker Hatfield",
                    "weight": 1.6326530612244898
                }, {
                    "id": 537246803,
                    "name": "Manolo Blahnik",
                    "weight": 1.6326530612244898
                }]
            }, {
                "id": 268490702,
                "name": "Handbags",
                "weight": 6.671961874503574
            }]
        }, {
            "id": 537590915,
            "name": "Kate Middleton",
            "weight": 34.935437589670016
        }, {
            "id": 537252332,
            "name": "Lady Gaga",
            "weight": 13.988522238163558
        }, {
            "id": 268490019,
            "name": "Clothing",
            "weight": 12.589670014347202,
            "topics": [{
                "id": 537716183,
                "name": "Melissa McCarthy",
                "weight": 21.652421652421651
            }, {
                "id": 537135204,
                "name": "Levi Strauss & Co. (LS&CO)",
                "weight": 20.227920227920229
            }, {
                "id": 536894842,
                "name": "Adidas",
                "weight": 17.948717948717949
            }, {
                "id": 537133582,
                "name": "House of Gucci",
                "weight": 8.8319088319088319
            }, {
                "id": 537194337,
                "name": "Kate Moss",
                "weight": 7.4074074074074074
            }, {
                "id": 537229051,
                "name": "Tommy Hilfiger",
                "weight": 3.7037037037037037
            }, {
                "id": 537147329,
                "name": "Forever XXI",
                "weight": 3.4188034188034186
            }, {
                "id": 537100123,
                "name": "Dolce & Gabbana",
                "weight": 2.8490028490028489
            }, {
                "id": 537122120,
                "name": "J. Crew",
                "weight": 2.8490028490028489
            }, {
                "id": 537126607,
                "name": "Uniqlock",
                "weight": 2.8490028490028489
            }, {
                "id": 537128049,
                "name": "American Apparel",
                "weight": 2.8490028490028489
            }]
        }, {
            "id": 268489985,
            "name": "Fashion Weeks",
            "weight": 7.2453371592539453,
            "topics": [{
                "id": 268489982,
                "name": "Paris Fashion Week",
                "weight": 84.158415841584159,
                "topics": [{
                    "id": 537171581,
                    "name": "Kanye West",
                    "weight": 82.3529411764706
                }, {
                    "id": 537656740,
                    "name": "Kendall Jenner",
                    "weight": 40.0
                }]
            }, {
                "id": 268489980,
                "name": "London Fashion Week",
                "weight": 24.257425742574256,
                "topics": [{
                    "id": 538234207,
                    "name": "Cara Delevingne",
                    "weight": 61.224489795918366
                }]
            }, {
                "id": 268489981,
                "name": "Milan Fashion Week",
                "weight": 10.396039603960396
            }]
        }, {
            "id": 538279808,
            "name": "Apple Watch",
            "weight": 7.03012912482066
        }, {
            "id": 537171581,
            "name": "Kanye West",
            "weight": 5.0215208034433285
        }, {
            "id": 537198213,
            "name": "Kim Kardashian",
            "weight": 4.9856527977044474
        }, {
            "id": 537323920,
            "name": "Beyoncé",
            "weight": 3.873744619799139
        }, {
            "id": 537101550,
            "name": "NIKE (biz)",
            "weight": 3.0129124820659969
        }, {
            "id": 537188322,
            "name": "Gwyneth Paltrow",
            "weight": 2.4390243902439024
        }, {
            "id": 537656740,
            "name": "Kendall Jenner",
            "weight": 2.4390243902439024
        }, {
            "id": 536894842,
            "name": "Adidas",
            "weight": 2.2596843615494979
        }, {
            "id": 537657701,
            "name": "Kylie Jenner",
            "weight": 2.0444763271162123
        }, {
            "id": 537192999,
            "name": "Katy Perry",
            "weight": 1.9368723098995695
        }, {
            "id": 537137941,
            "name": "Pink (Victoria's Secret)",
            "weight": 1.8292682926829269
        }, {
            "id": 537158120,
            "name": "The House of Chanel",
            "weight": 1.5423242467718794
        }, {
            "id": 537144663,
            "name": "Burberry Group plc",
            "weight": 1.4705882352941178
        }, {
            "id": 537188852,
            "name": "Reese Witherspoon",
            "weight": 1.4705882352941178
        }, {
            "id": 537070165,
            "name": "Hermes International",
            "weight": 1.4705882352941178
        }, {
            "id": 537428074,
            "name": "Rihanna",
            "weight": 1.3629842180774749
        }, {
            "id": 537191863,
            "name": "Victoria Beckham",
            "weight": 1.3629842180774749
        }, {
            "id": 536892511,
            "name": "Christian Dior S.A.",
            "weight": 1.327116212338594
        }, {
            "id": 537194304,
            "name": "Tom Ford",
            "weight": 1.1836441893830703
        }, {
            "id": 537075315,
            "name": "Anna Wintour",
            "weight": 1.1477761836441893
        }, {
            "id": 537133582,
            "name": "House of Gucci",
            "weight": 1.1119081779053084
        }, {
            "id": 537189474,
            "name": "Marc Jacobs",
            "weight": 1.1119081779053084
        }, {
            "id": 538234207,
            "name": "Cara Delevingne",
            "weight": 1.0760401721664274
        }, {
            "id": 537833422,
            "name": "Louis Vuitton",
            "weight": 1.0401721664275467
        }, {
            "id": 537195119,
            "name": "Naomi Campbell",
            "weight": 1.0401721664275467
        }, {
            "id": 537228465,
            "name": "Calvin Klein",
            "weight": 1.0043041606886658
        }, {
            "id": 537106885,
            "name": "Versace Precious Items",
            "weight": 1.0043041606886658
        }]
    }, {
        "id": 268457471,
        "name": "Beauty",
        "weight": 36.459909228441752,
        "topics": [{
            "id": 268485875,
            "name": "Cosmetics",
            "weight": 93.195020746887963,
            "topics": [{
                "id": 268486264,
                "name": "Hair Care",
                "weight": 60.819234194122885
            }, {
                "id": 268486585,
                "name": "Makeup",
                "weight": 14.158504007123776,
                "topics": [{
                    "id": 537656740,
                    "name": "Kendall Jenner",
                    "weight": 42.767295597484278
                }, {
                    "id": 268490279,
                    "name": "Nail Art",
                    "weight": 28.930817610062892
                }, {
                    "id": 268490707,
                    "name": "Body Painting",
                    "weight": 15.723270440251572
                }, {
                    "id": 537283303,
                    "name": "CoverGirl",
                    "weight": 8.80503144654088
                }, {
                    "id": 536923889,
                    "name": "Lancôme",
                    "weight": 5.6603773584905657
                }, {
                    "id": 537198451,
                    "name": "Bobbi Brown",
                    "weight": 3.7735849056603774
                }]
            }, {
                "id": 268487143,
                "name": "Skin Care",
                "weight": 12.911843276936777
            }, {
                "id": 268487189,
                "name": "Spa",
                "weight": 11.843276936776492,
                "topics": [{
                    "id": 537188322,
                    "name": "Gwyneth Paltrow",
                    "weight": 51.127819548872182
                }, {
                    "id": 536892722,
                    "name": "Michelin",
                    "weight": 36.8421052631579
                }, {
                    "id": 538109615,
                    "name": "McLaren",
                    "weight": 31.578947368421051
                }, {
                    "id": 537122847,
                    "name": "Mandarin Oriental International Limited",
                    "weight": 24.81203007518797
                }, {
                    "id": 537965487,
                    "name": "Asbury Park",
                    "weight": 6.0150375939849621
                }, {
                    "id": 537861137,
                    "name": "Berlin-Tegel International Airport",
                    "weight": 3.007518796992481
                }]
            }, {
                "id": 268486876,
                "name": "Perfume",
                "weight": 11.487088156723063,
                "topics": [{
                    "id": 537158120,
                    "name": "The House of Chanel",
                    "weight": 33.333333333333336
                }, {
                    "id": 537070165,
                    "name": "Hermes International",
                    "weight": 31.782945736434108
                }, {
                    "id": 537189129,
                    "name": "Paris Hilton",
                    "weight": 20.930232558139537
                }, {
                    "id": 537234288,
                    "name": "Givenchy",
                    "weight": 14.728682170542635
                }, {
                    "id": 537100123,
                    "name": "Dolce & Gabbana",
                    "weight": 7.7519379844961236
                }]
            }, {
                "id": 268487275,
                "name": "Sun Tanning",
                "weight": 4.27426536064114
            }, {
                "id": 536928638,
                "name": "Sephora",
                "weight": 1.7809439002671417
            }, {
                "id": 537073749,
                "name": "L'Oreal",
                "weight": 1.7809439002671417
            }, {
                "id": 536892371,
                "name": "Avon Products",
                "weight": 1.3357079252003561
            }, {
                "id": 537283303,
                "name": "CoverGirl",
                "weight": 1.2466607301869992
            }, {
                "id": 536917407,
                "name": "Maybelline",
                "weight": 1.2466607301869992
            }, {
                "id": 536892549,
                "name": "Estée Lauder Companies",
                "weight": 1.1576135351736421
            }, {
                "id": 536892608,
                "name": "Henkel",
                "weight": 1.068566340160285
            }]
        }, {
            "id": 537198213,
            "name": "Kim Kardashian",
            "weight": 11.535269709543568
        }, {
            "id": 537656740,
            "name": "Kendall Jenner",
            "weight": 5.6431535269709547
        }, {
            "id": 268450463,
            "name": "Cosmetic Surgery",
            "weight": 5.1452282157676352
        }, {
            "id": 537428074,
            "name": "Rihanna",
            "weight": 3.1535269709543567
        }, {
            "id": 536928638,
            "name": "Sephora",
            "weight": 1.6597510373443984
        }, {
            "id": 537073749,
            "name": "L'Oreal",
            "weight": 1.6597510373443984
        }, {
            "id": 536892371,
            "name": "Avon Products",
            "weight": 1.2448132780082988
        }, {
            "id": 536892549,
            "name": "Estée Lauder Companies",
            "weight": 1.0788381742738589
        }]
    }]
}, {
    "id": 268436537,
    "name": "Religion",
    "weight": 2.480051406772354,
    "color": "#D64DCD",
    "topics": [{
        "id": 268455462,
        "name": "Islam",
        "weight": 64.250573958674977,
        "topics": [{
            "id": 537084737,
            "name": "Youtube",
            "weight": 83.767228177641655
        }, {
            "id": 537189013,
            "name": "Muhammad Ali",
            "weight": 11.587544665645737
        }, {
            "id": 538278257,
            "name": "Islamic State in Iraq and the Levant",
            "weight": 11.53649821337417
        }, {
            "id": 538568249,
            "name": "Jesus Christ",
            "weight": 3.1648800408371618
        }, {
            "id": 537674391,
            "name": "Marine Le Pen",
            "weight": 2.3481368044920878
        }, {
            "id": 536899274,
            "name": "Ali Khamenei",
            "weight": 2.0929045431342521
        }, {
            "id": 537678036,
            "name": "Muhammad",
            "weight": 1.9908116385911179
        }, {
            "id": 537244348,
            "name": "Islamic Society",
            "weight": 1.9908116385911179
        }, {
            "id": 538318110,
            "name": "Allah",
            "weight": 1.6845329249617151
        }, {
            "id": 537084456,
            "name": "Najib Razak",
            "weight": 1.5313935681470139
        }, {
            "id": 537150874,
            "name": "Muslim Brotherhood",
            "weight": 1.2251148545176109
        }, {
            "id": 537220624,
            "name": "Franklin Graham",
            "weight": 1.1740684022460439
        }, {
            "id": 537880739,
            "name": "Akbar",
            "weight": 1.0209290454313424
        }]
    }, {
        "id": 268455461,
        "name": "Christianity",
        "weight": 14.398163332240079,
        "topics": [{
            "id": 268455460,
            "name": "Catholic Church",
            "weight": 79.271070615034162,
            "topics": [{
                "id": 538110359,
                "name": "Pope Francis",
                "weight": 82.47126436781609
            }, {
                "id": 537139687,
                "name": "Society of Jesus",
                "weight": 7.1839080459770113
            }, {
                "id": 537190492,
                "name": "Pope John Paul II",
                "weight": 6.6091954022988508
            }, {
                "id": 537220017,
                "name": "George Pell",
                "weight": 5.4597701149425291
            }, {
                "id": 538308623,
                "name": "Holy See",
                "weight": 3.1609195402298851
            }, {
                "id": 537070498,
                "name": "Benedict XVI",
                "weight": 2.2988505747126435
            }, {
                "id": 538298051,
                "name": "Blase J. Cupich",
                "weight": 1.4367816091954022
            }]
        }, {
            "id": 268487301,
            "name": "Theology",
            "weight": 73.804100227790428,
            "topics": [{
                "id": 538110359,
                "name": "Pope Francis",
                "weight": 88.580246913580254
            }, {
                "id": 538568249,
                "name": "Jesus Christ",
                "weight": 19.135802469135804
            }, {
                "id": 538316495,
                "name": "Paul the Apostle",
                "weight": 10.493827160493828
            }, {
                "id": 537139687,
                "name": "Society of Jesus",
                "weight": 7.716049382716049
            }, {
                "id": 537190492,
                "name": "Pope John Paul II",
                "weight": 7.0987654320987659
            }, {
                "id": 538318264,
                "name": "Eastern Orthodox Church",
                "weight": 6.7901234567901234
            }, {
                "id": 537233007,
                "name": "Presbyterian Church",
                "weight": 6.7901234567901234
            }, {
                "id": 537125635,
                "name": "Southern Baptist Convention",
                "weight": 3.3950617283950617
            }, {
                "id": 537070498,
                "name": "Benedict XVI",
                "weight": 2.4691358024691357
            }, {
                "id": 537879528,
                "name": "Augustine of Hippo",
                "weight": 2.1604938271604937
            }, {
                "id": 538049203,
                "name": "John Calvin",
                "weight": 1.2345679012345678
            }]
        }, {
            "id": 538110359,
            "name": "Pope Francis",
            "weight": 65.375854214123009
        }, {
            "id": 268489853,
            "name": "Protestantism",
            "weight": 26.879271070615033,
            "topics": [{
                "id": 537233007,
                "name": "Presbyterian Church",
                "weight": 18.64406779661017
            }]
        }, {
            "id": 268486686,
            "name": "Mormons",
            "weight": 20.956719817767652,
            "topics": [{
                "id": 537075056,
                "name": "Mitt Romney",
                "weight": 61.956521739130437
            }, {
                "id": 537188556,
                "name": "Glenn Beck",
                "weight": 16.304347826086957
            }, {
                "id": 537811462,
                "name": "Brigham Young",
                "weight": 5.4347826086956523
            }, {
                "id": 538272694,
                "name": "John Dehlin",
                "weight": 2.1739130434782608
            }, {
                "id": 537793659,
                "name": "Joseph Smith, Jr.",
                "weight": 1.0869565217391304
            }, {
                "id": 537642306,
                "name": "Joseph Smith",
                "weight": 1.0869565217391304
            }]
        }, {
            "id": 268489892,
            "name": "Anglicanism",
            "weight": 17.312072892938495,
            "topics": [{
                "id": 537673903,
                "name": "Church of England",
                "weight": 21.05263157894737
            }]
        }, {
            "id": 268489890,
            "name": "Orthodoxy",
            "weight": 17.084282460136674,
            "topics": [{
                "id": 538318264,
                "name": "Eastern Orthodox Church",
                "weight": 29.333333333333332
            }, {
                "id": 538110499,
                "name": "Eastern Catholic Churches",
                "weight": 1.3333333333333333
            }]
        }, {
            "id": 268489852,
            "name": "Baptists",
            "weight": 15.261958997722095,
            "topics": [{
                "id": 537232567,
                "name": "Jimmy Carter",
                "weight": 70.149253731343279
            }, {
                "id": 537125635,
                "name": "Southern Baptist Convention",
                "weight": 16.417910447761194
            }, {
                "id": 537107086,
                "name": "Westboro Baptist Church",
                "weight": 10.447761194029852
            }, {
                "id": 537953408,
                "name": "Baptist Theological Seminary",
                "weight": 1.4925373134328359
            }]
        }, {
            "id": 538568249,
            "name": "Jesus Christ",
            "weight": 14.123006833712983
        }, {
            "id": 537139687,
            "name": "Society of Jesus",
            "weight": 5.6947608200455582
        }, {
            "id": 537190360,
            "name": "Rick Santorum",
            "weight": 5.6947608200455582
        }, {
            "id": 537190492,
            "name": "Pope John Paul II",
            "weight": 5.2391799544419131
        }, {
            "id": 538318264,
            "name": "Eastern Orthodox Church",
            "weight": 5.0113895216400914
        }, {
            "id": 537673903,
            "name": "Church of England",
            "weight": 3.6446469248291571
        }, {
            "id": 537212867,
            "name": "Billy Graham",
            "weight": 2.7334851936218678
        }, {
            "id": 537070498,
            "name": "Benedict XVI",
            "weight": 1.8223234624145785
        }]
    }, {
        "id": 268487199,
        "name": "Spirituality",
        "weight": 11.31518530665792,
        "topics": [{
            "id": 537139687,
            "name": "Society of Jesus",
            "weight": 7.2463768115942031
        }]
    }, {
        "id": 268489948,
        "name": "Scientology",
        "weight": 7.2482781239750738,
        "topics": [{
            "id": 537192280,
            "name": "John Travolta",
            "weight": 77.828054298642527
        }, {
            "id": 537267571,
            "name": "Tom Cruise",
            "weight": 22.624434389140273
        }, {
            "id": 537189581,
            "name": "Neil Gaiman",
            "weight": 4.97737556561086
        }, {
            "id": 537130436,
            "name": "Church of Scientology",
            "weight": 4.5248868778280542
        }, {
            "id": 537189896,
            "name": "Leah Remini",
            "weight": 3.6199095022624435
        }, {
            "id": 537949628,
            "name": "David Miscavige",
            "weight": 1.8099547511312217
        }, {
            "id": 537177521,
            "name": "Paul Haggis",
            "weight": 1.8099547511312217
        }, {
            "id": 537113224,
            "name": "Nation of Islam",
            "weight": 1.3574660633484164
        }]
    }, {
        "id": 268455463,
        "name": "Judaism",
        "weight": 6.3627418825844542,
        "topics": [{
            "id": 537077152,
            "name": "Benjamin Netanyahu",
            "weight": 40.206185567010309
        }, {
            "id": 538568249,
            "name": "Jesus Christ",
            "weight": 31.958762886597938
        }, {
            "id": 538573666,
            "name": "Benjamin Netanyahu",
            "weight": 31.443298969072163
        }, {
            "id": 268490663,
            "name": "Yom Kippur",
            "weight": 13.402061855670103,
            "topics": [{
                "id": 537650576,
                "name": "Israel Defense Forces",
                "weight": 73.07692307692308
            }, {
                "id": 537206933,
                "name": "Sandy Koufax",
                "weight": 3.8461538461538463
            }]
        }, {
            "id": 537965860,
            "name": "Reuven Rivlin",
            "weight": 12.371134020618557
        }, {
            "id": 537190492,
            "name": "Pope John Paul II",
            "weight": 11.855670103092784
        }, {
            "id": 537600543,
            "name": "Abraham",
            "weight": 9.2783505154639183
        }, {
            "id": 268490657,
            "name": "Rosh Hashanah",
            "weight": 8.24742268041237
        }, {
            "id": 537511274,
            "name": "Isaac",
            "weight": 5.1546391752577323
        }, {
            "id": 538565352,
            "name": "Maimonides",
            "weight": 2.5773195876288661
        }, {
            "id": 538074832,
            "name": "Rabbinical Council of America",
            "weight": 2.0618556701030926
        }, {
            "id": 537106625,
            "name": "Union for Reform Judaism",
            "weight": 1.5463917525773196
        }, {
            "id": 537127164,
            "name": "Women Of The Wall",
            "weight": 1.5463917525773196
        }, {
            "id": 537117299,
            "name": "Young Israel",
            "weight": 1.0309278350515463
        }, {
            "id": 538323819,
            "name": "Yaakov Litzman",
            "weight": 1.0309278350515463
        }]
    }, {
        "id": 268455459,
        "name": "Buddhism",
        "weight": 5.7723843883240411,
        "topics": [{
            "id": 268485912,
            "name": "Dalai Lama",
            "weight": 29.545454545454547,
            "topics": [{
                "id": 537126338,
                "name": "Tibetan Buddhism",
                "weight": 28.846153846153847
            }, {
                "id": 537679417,
                "name": "Tenzin Gyatso, 14th Dalai Lama",
                "weight": 11.538461538461538
            }, {
                "id": 537190795,
                "name": "Desmond Tutu",
                "weight": 9.615384615384615
            }, {
                "id": 537257412,
                "name": "Central Tibetan Administration",
                "weight": 7.6923076923076925
            }]
        }, {
            "id": 537673030,
            "name": "Gautama Buddha",
            "weight": 23.863636363636363
        }, {
            "id": 537075108,
            "name": "Aung San Suu Kyi",
            "weight": 23.295454545454547
        }, {
            "id": 537126338,
            "name": "Tibetan Buddhism",
            "weight": 8.5227272727272734
        }, {
            "id": 537679417,
            "name": "Tenzin Gyatso, 14th Dalai Lama",
            "weight": 3.4090909090909092
        }, {
            "id": 537282835,
            "name": "Nhat Hanh",
            "weight": 2.2727272727272729
        }]
    }, {
        "id": 268486301,
        "name": "Hinduism",
        "weight": 3.2797638570022958,
        "topics": [{
            "id": 537673030,
            "name": "Gautama Buddha",
            "weight": 42.0
        }, {
            "id": 268486476,
            "name": "Karma",
            "weight": 39.0,
            "topics": [{
                "id": 537126338,
                "name": "Tibetan Buddhism",
                "weight": 38.46153846153846
            }, {
                "id": 537997325,
                "name": "Culture Club",
                "weight": 30.76923076923077
            }, {
                "id": 538569423,
                "name": "Credit Karma",
                "weight": 20.512820512820515
            }, {
                "id": 537731527,
                "name": "Fisker Karma",
                "weight": 2.5641025641025643
            }]
        }, {
            "id": 268486501,
            "name": "Krishna",
            "weight": 26.0,
            "topics": [{
                "id": 537672801,
                "name": "Jawaharlal Nehru",
                "weight": 50.0
            }, {
                "id": 538051216,
                "name": "Devi",
                "weight": 23.076923076923077
            }, {
                "id": 538278547,
                "name": "Radha",
                "weight": 23.076923076923077
            }, {
                "id": 537935041,
                "name": "Govinda",
                "weight": 11.538461538461538
            }, {
                "id": 537937172,
                "name": "Arjun Sarja",
                "weight": 7.6923076923076925
            }, {
                "id": 537134255,
                "name": "International Society for Krishna Consciousness",
                "weight": 3.8461538461538463
            }]
        }, {
            "id": 537766798,
            "name": "Murugan",
            "weight": 13.0
        }, {
            "id": 538051216,
            "name": "Devi",
            "weight": 6.0
        }, {
            "id": 537345672,
            "name": "Mahatma Gandhi",
            "weight": 6.0
        }, {
            "id": 537957396,
            "name": "Shakti",
            "weight": 4.0
        }, {
            "id": 537134255,
            "name": "International Society for Krishna Consciousness",
            "weight": 1.0
        }, {
            "id": 538043358,
            "name": "Hindu American Foundation",
            "weight": 1.0
        }, {
            "id": 537784649,
            "name": "B. R. Ambedkar",
            "weight": 1.0
        }]
    }, {
        "id": 268489858,
        "name": "Esoteric and Occult",
        "weight": 3.115775664152181
    }, {
        "id": 268485594,
        "name": "Atheism",
        "weight": 2.5254181698917679,
        "topics": [{
            "id": 537194439,
            "name": "Richard Dawkins",
            "weight": 19.480519480519479
        }, {
            "id": 537809203,
            "name": "Penn Jillette",
            "weight": 5.1948051948051948
        }, {
            "id": 537635778,
            "name": "C. S. Lewis",
            "weight": 5.1948051948051948
        }, {
            "id": 537226386,
            "name": "Sam Harris",
            "weight": 3.8961038961038961
        }, {
            "id": 537226063,
            "name": "Sam Harris",
            "weight": 2.5974025974025974
        }, {
            "id": 537100835,
            "name": "Freedom From Religion Foundation",
            "weight": 2.5974025974025974
        }, {
            "id": 537143046,
            "name": "American Atheists",
            "weight": 1.2987012987012987
        }, {
            "id": 538249208,
            "name": "Jerry A. Coyne",
            "weight": 1.2987012987012987
        }]
    }, {
        "id": 268485886,
        "name": "Creationism",
        "weight": 1.6726795670711709,
        "topics": [{
            "id": 537203988,
            "name": "Bill Nye",
            "weight": 39.215686274509807
        }, {
            "id": 537194439,
            "name": "Richard Dawkins",
            "weight": 29.411764705882351
        }, {
            "id": 537954764,
            "name": "Flying Spaghetti Monster",
            "weight": 9.8039215686274517
        }, {
            "id": 537113300,
            "name": "National Center for Science Education",
            "weight": 7.8431372549019605
        }, {
            "id": 537270155,
            "name": "Kent Hovind",
            "weight": 1.9607843137254901
        }, {
            "id": 537273601,
            "name": "Ken Ham",
            "weight": 1.9607843137254901
        }, {
            "id": 537144563,
            "name": "British Humanist Association",
            "weight": 1.9607843137254901
        }, {
            "id": 538249208,
            "name": "Jerry A. Coyne",
            "weight": 1.9607843137254901
        }, {
            "id": 537158281,
            "name": "Answers in Genesis",
            "weight": 1.9607843137254901
        }, {
            "id": 538020950,
            "name": "Noah's Ark",
            "weight": 1.9607843137254901
        }, {
            "id": 538310068,
            "name": "Michael Behe",
            "weight": 1.9607843137254901
        }]
    }]
}, {
    "id": 268436598,
    "name": "Science",
    "weight": 2.0652182754329313,
    "color": "#B3AC11",
    "topics": [{
        "id": 268456462,
        "name": "Math",
        "weight": 44.860181173690428,
        "topics": [{
            "id": 268485517,
            "name": "Algebra",
            "weight": 47.322212467076383,
            "topics": [{
                "id": 537989270,
                "name": "Alexander Grothendieck",
                "weight": 1.2987012987012987
            }]
        }, {
            "id": 537627476,
            "name": "Albert Einstein",
            "weight": 46.35645302897278
        }, {
            "id": 268486558,
            "name": "Logic",
            "weight": 26.07550482879719,
            "topics": [{
                "id": 537210761,
                "name": "Alan Turing",
                "weight": 9.0909090909090917
            }, {
                "id": 537631563,
                "name": "Aristotle",
                "weight": 7.0707070707070709
            }, {
                "id": 537119440,
                "name": "Cirrus Logic Inc.",
                "weight": 1.6835016835016836
            }, {
                "id": 537597265,
                "name": "Bertrand Russell",
                "weight": 1.0101010101010102
            }]
        }, {
            "id": 268486942,
            "name": "Probability",
            "weight": 5.0043898156277438,
            "topics": [{
                "id": 537739615,
                "name": "Blaise Pascal",
                "weight": 5.2631578947368425
            }, {
                "id": 538225520,
                "name": "Ludwig Boltzmann",
                "weight": 3.5087719298245612
            }, {
                "id": 538109064,
                "name": "Nassim Nicholas Taleb",
                "weight": 3.5087719298245612
            }]
        }, {
            "id": 537052371,
            "name": "National Science Foundation",
            "weight": 4.2142230026338892
        }, {
            "id": 537153416,
            "name": "Royal Society",
            "weight": 3.5118525021949076
        }, {
            "id": 537428293,
            "name": "Isaac Newton",
            "weight": 3.424056189640035
        }, {
            "id": 537210761,
            "name": "Alan Turing",
            "weight": 2.3705004389815629
        }, {
            "id": 537631563,
            "name": "Aristotle",
            "weight": 1.8437225636523267
        }, {
            "id": 537631173,
            "name": "Erwin Schrödinger",
            "weight": 1.4925373134328359
        }, {
            "id": 538308570,
            "name": "Siméon Denis Poisson",
            "weight": 1.2291483757682178
        }]
    }, {
        "id": 268456465,
        "name": "Physics",
        "weight": 29.854273335959039,
        "topics": [{
            "id": 537627476,
            "name": "Albert Einstein",
            "weight": 69.656992084432716
        }, {
            "id": 268490542,
            "name": "Gravity",
            "weight": 28.232189973614776,
            "topics": [{
                "id": 537196592,
                "name": "Stephen Hawking",
                "weight": 47.663551401869157
            }, {
                "id": 537936164,
                "name": "Neptune",
                "weight": 20.560747663551403
            }, {
                "id": 537428293,
                "name": "Isaac Newton",
                "weight": 18.22429906542056
            }, {
                "id": 537633629,
                "name": "Dark Matter",
                "weight": 8.4112149532710276
            }]
        }, {
            "id": 268490539,
            "name": "Particle Physics",
            "weight": 15.699208443271768,
            "topics": [{
                "id": 268490540,
                "name": "Large Hadron Collider",
                "weight": 57.983193277310924,
                "topics": [{
                    "id": 537132041,
                    "name": "European Organization for Nuclear Research",
                    "weight": 34.782608695652172
                }]
            }, {
                "id": 537132041,
                "name": "European Organization for Nuclear Research",
                "weight": 20.168067226890756
            }, {
                "id": 537848123,
                "name": "Stanford Linear Accelerator Center",
                "weight": 17.647058823529413
            }]
        }, {
            "id": 268486973,
            "name": "Quantum Physics",
            "weight": 14.379947229551451
        }, {
            "id": 537196592,
            "name": "Stephen Hawking",
            "weight": 13.45646437994723
        }, {
            "id": 268490538,
            "name": "String Theory",
            "weight": 10.817941952506596,
            "topics": [{
                "id": 537783828,
                "name": "Edward Witten",
                "weight": 2.4390243902439024
            }]
        }, {
            "id": 268490541,
            "name": "Electromagnetism",
            "weight": 9.2348284960422156
        }, {
            "id": 268490543,
            "name": "Multiverse",
            "weight": 7.9155672823218994,
            "topics": [{
                "id": 537632571,
                "name": "The Flash",
                "weight": 68.333333333333329
            }, {
                "id": 537136582,
                "name": "National Periodical Publications",
                "weight": 38.333333333333336
            }, {
                "id": 537845329,
                "name": "DC Universe",
                "weight": 3.3333333333333335
            }]
        }, {
            "id": 537856247,
            "name": "Johannes Kepler",
            "weight": 7.9155672823218994
        }, {
            "id": 537102944,
            "name": "Max Planck Society",
            "weight": 7.3878627968337733
        }, {
            "id": 538090042,
            "name": "Michael Faraday",
            "weight": 6.2005277044854878
        }, {
            "id": 537428293,
            "name": "Isaac Newton",
            "weight": 5.1451187335092348
        }, {
            "id": 538232394,
            "name": "Lawrence Berkeley National Laboratory",
            "weight": 4.4854881266490763
        }, {
            "id": 537108794,
            "name": "Brookhaven National Laboratories",
            "weight": 4.0897097625329817
        }, {
            "id": 537132041,
            "name": "European Organization for Nuclear Research",
            "weight": 3.1662269129287597
        }, {
            "id": 538001064,
            "name": "Max Planck",
            "weight": 2.9023746701846966
        }, {
            "id": 537848123,
            "name": "Stanford Linear Accelerator Center",
            "weight": 2.7704485488126651
        }, {
            "id": 537633629,
            "name": "Dark Matter",
            "weight": 2.37467018469657
        }, {
            "id": 537631173,
            "name": "Erwin Schrödinger",
            "weight": 2.2427440633245381
        }, {
            "id": 537713023,
            "name": "Nature Physics",
            "weight": 1.4511873350923483
        }, {
            "id": 537695336,
            "name": "Yuri Milner",
            "weight": 1.0554089709762533
        }]
    }, {
        "id": 268489625,
        "name": "Scientific Awards",
        "weight": 28.4757778653013,
        "topics": [{
            "id": 268486776,
            "name": "Nobel Prize",
            "weight": 99.446749654218536,
            "topics": [{
                "id": 537627476,
                "name": "Albert Einstein",
                "weight": 73.43532684283727
            }, {
                "id": 538320693,
                "name": "Malala Yousafzai",
                "weight": 21.001390820584145
            }, {
                "id": 538575936,
                "name": "Alfred Nobel",
                "weight": 10.15299026425591
            }, {
                "id": 537196475,
                "name": "Francis Crick",
                "weight": 2.642559109874826
            }, {
                "id": 537216089,
                "name": "Tim Hunt",
                "weight": 2.2253129346314324
            }, {
                "id": 537515406,
                "name": "Marie Curie",
                "weight": 2.2253129346314324
            }]
        }]
    }, {
        "id": 268456459,
        "name": "Biology",
        "weight": 24.222134698700277,
        "topics": [{
            "id": 268486952,
            "name": "Protein",
            "weight": 41.6260162601626,
            "topics": [{
                "id": 537849979,
                "name": "Molecular Biology",
                "weight": 4.296875
            }, {
                "id": 537583245,
                "name": "Special K",
                "weight": 1.5625
            }]
        }, {
            "id": 268456460,
            "name": "Genetics",
            "weight": 40.162601626016261,
            "topics": [{
                "id": 537117387,
                "name": "23andme",
                "weight": 14.17004048582996
            }, {
                "id": 537196475,
                "name": "Francis Crick",
                "weight": 7.6923076923076925
            }, {
                "id": 537849979,
                "name": "Molecular Biology",
                "weight": 4.4534412955465585
            }, {
                "id": 537639849,
                "name": "Nature Genetics",
                "weight": 4.4534412955465585
            }]
        }, {
            "id": 268487219,
            "name": "Stem Cell",
            "weight": 28.943089430894307
        }, {
            "id": 268456469,
            "name": "Biotech",
            "weight": 26.504065040650406,
            "topics": [{
                "id": 537141504,
                "name": "Valeant",
                "weight": 36.809815950920246
            }, {
                "id": 537055776,
                "name": "Gilead Sciences",
                "weight": 34.969325153374236
            }, {
                "id": 536938710,
                "name": "Monsanto",
                "weight": 28.834355828220858
            }, {
                "id": 538222054,
                "name": "Retrophin",
                "weight": 23.926380368098158
            }, {
                "id": 536892359,
                "name": "AstraZeneca",
                "weight": 22.699386503067483
            }, {
                "id": 536892587,
                "name": "GlaxoSmithKline",
                "weight": 22.085889570552148
            }, {
                "id": 536892367,
                "name": "Sanofi",
                "weight": 18.404907975460123
            }, {
                "id": 537055778,
                "name": "Celgene",
                "weight": 17.177914110429448
            }, {
                "id": 537063273,
                "name": "Syngenta",
                "weight": 17.177914110429448
            }, {
                "id": 538123818,
                "name": "KaloBios Pharmaceuticals",
                "weight": 13.496932515337424
            }, {
                "id": 538193819,
                "name": "Alexion Pharmaceuticals",
                "weight": 8.5889570552147241
            }, {
                "id": 537141589,
                "name": "Vertex Pharmaceuticals",
                "weight": 3.6809815950920246
            }, {
                "id": 537110926,
                "name": "Genentech, Inc.",
                "weight": 3.0674846625766872
            }, {
                "id": 538294795,
                "name": "Department of Biotechnology",
                "weight": 1.2269938650306749
            }]
        }, {
            "id": 268490548,
            "name": "Evolution",
            "weight": 26.016260162601625,
            "topics": [{
                "id": 537376707,
                "name": "Charles Darwin",
                "weight": 16.875
            }, {
                "id": 537203988,
                "name": "Bill Nye",
                "weight": 12.5
            }, {
                "id": 537194439,
                "name": "Richard Dawkins",
                "weight": 9.375
            }]
        }, {
            "id": 268490546,
            "name": "Genomics",
            "weight": 25.203252032520325,
            "topics": [{
                "id": 537117387,
                "name": "23andme",
                "weight": 22.580645161290324
            }, {
                "id": 537281811,
                "name": "Pathway Genomics",
                "weight": 1.2903225806451613
            }, {
                "id": 537203691,
                "name": "Craig Venter",
                "weight": 1.2903225806451613
            }]
        }, {
            "id": 268489621,
            "name": "Zoology",
            "weight": 20.8130081300813,
            "topics": [{
                "id": 537376707,
                "name": "Charles Darwin",
                "weight": 21.09375
            }, {
                "id": 537117362,
                "name": "Zoological Society of London",
                "weight": 5.46875
            }]
        }, {
            "id": 268490009,
            "name": "Microbiology",
            "weight": 19.024390243902438,
            "topics": [{
                "id": 537128217,
                "name": "American Society for Microbiology",
                "weight": 1.7094017094017093
            }]
        }, {
            "id": 268485620,
            "name": "Bacteria",
            "weight": 18.536585365853657,
            "topics": [{
                "id": 537849979,
                "name": "Molecular Biology",
                "weight": 9.6491228070175445
            }]
        }, {
            "id": 268490649,
            "name": "Cell Biology",
            "weight": 14.634146341463415,
            "topics": [{
                "id": 538003160,
                "name": "Journal of Cell Biology",
                "weight": 2.2222222222222223
            }]
        }, {
            "id": 268485704,
            "name": "Botany",
            "weight": 10.894308943089431
        }, {
            "id": 537102944,
            "name": "Max Planck Society",
            "weight": 9.1056910569105689
        }, {
            "id": 537153416,
            "name": "Royal Society",
            "weight": 6.5040650406504064
        }, {
            "id": 537636866,
            "name": "Current Biology",
            "weight": 4.3902439024390247
        }, {
            "id": 537376707,
            "name": "Charles Darwin",
            "weight": 4.3902439024390247
        }, {
            "id": 268490547,
            "name": "Biohacking",
            "weight": 3.7398373983739837
        }, {
            "id": 537849979,
            "name": "Molecular Biology",
            "weight": 1.7886178861788617
        }]
    }, {
        "id": 268489623,
        "name": "Computer Science",
        "weight": 17.093343836155967,
        "topics": [{
            "id": 268485578,
            "name": "Artificial Intelligence",
            "weight": 91.2442396313364,
            "topics": [{
                "id": 536899060,
                "name": "Google",
                "weight": 88.383838383838381
            }, {
                "id": 268486577,
                "name": "Machine Learning",
                "weight": 36.616161616161619,
                "topics": [{
                    "id": 537984198,
                    "name": "Andrew Ng",
                    "weight": 1.3793103448275863
                }]
            }, {
                "id": 537171616,
                "name": "Elon Musk",
                "weight": 35.353535353535356
            }, {
                "id": 536929918,
                "name": "IBM",
                "weight": 27.777777777777779
            }, {
                "id": 268490553,
                "name": "Natural Language Processing",
                "weight": 26.262626262626263,
                "topics": [{
                    "id": 268490558,
                    "name": "Speech Recognition",
                    "weight": 40.384615384615387,
                    "topics": [{
                        "id": 537980080,
                        "name": "Raymond Kurzweil",
                        "weight": 4.7619047619047619
                    }, {
                        "id": 537072826,
                        "name": "Nuance Communications",
                        "weight": 2.3809523809523809
                    }]
                }]
            }, {
                "id": 538257951,
                "name": "DeepMind",
                "weight": 7.8282828282828278
            }, {
                "id": 538045103,
                "name": "MIT Computer Science and Artificial Intelligence Laboratory",
                "weight": 3.7878787878787881
            }]
        }, {
            "id": 268485519,
            "name": "Algorithms",
            "weight": 29.493087557603687,
            "topics": [{
                "id": 537940831,
                "name": "Edsger Dijkstra",
                "weight": 1.5625
            }]
        }, {
            "id": 268490600,
            "name": "Data Science",
            "weight": 26.036866359447004
        }, {
            "id": 268489660,
            "name": "Wearable Computing",
            "weight": 23.963133640552996
        }, {
            "id": 268489644,
            "name": "Brain-Computer Interfaces",
            "weight": 11.059907834101383
        }, {
            "id": 268489664,
            "name": "Ubiquitous Computing",
            "weight": 8.7557603686635943
        }, {
            "id": 537210761,
            "name": "Alan Turing",
            "weight": 6.2211981566820276
        }, {
            "id": 538045103,
            "name": "MIT Computer Science and Artificial Intelligence Laboratory",
            "weight": 3.4562211981566819
        }, {
            "id": 536947529,
            "name": "Sergey Brin",
            "weight": 3.225806451612903
        }, {
            "id": 268489618,
            "name": "Scientific Computing",
            "weight": 2.9953917050691246
        }]
    }, {
        "id": 268490409,
        "name": "Earth Science",
        "weight": 13.942497046081135,
        "topics": [{
            "id": 268489622,
            "name": "Geography",
            "weight": 61.864406779661017,
            "topics": [{
                "id": 537103496,
                "name": "National Geographic Society",
                "weight": 83.561643835616437
            }]
        }, {
            "id": 268489955,
            "name": "Geology",
            "weight": 33.61581920903955
        }, {
            "id": 268490549,
            "name": "Forests",
            "weight": 29.096045197740114,
            "topics": [{
                "id": 537101219,
                "name": "Greenpeace International",
                "weight": 24.271844660194176
            }, {
                "id": 537881085,
                "name": "Karnataka",
                "weight": 11.650485436893204
            }, {
                "id": 537110699,
                "name": "Food and Agriculture Organization",
                "weight": 8.7378640776699026
            }, {
                "id": 537155847,
                "name": "United States Forest Service",
                "weight": 3.883495145631068
            }, {
                "id": 537261799,
                "name": "Ontario Ministry of Natural Resources",
                "weight": 3.883495145631068
            }, {
                "id": 537756504,
                "name": "Prakash Javadekar",
                "weight": 2.912621359223301
            }, {
                "id": 537110722,
                "name": "Forest Stewardship Council",
                "weight": 1.941747572815534
            }]
        }, {
            "id": 268490404,
            "name": "Oceanography",
            "weight": 25.423728813559322,
            "topics": [{
                "id": 537687095,
                "name": "Scripps Institution of Oceanography",
                "weight": 21.111111111111111
            }, {
                "id": 537117185,
                "name": "Woods Hole Oceanographic Institution",
                "weight": 16.666666666666668
            }, {
                "id": 537107885,
                "name": "American Meteorological Society",
                "weight": 12.222222222222221
            }, {
                "id": 538053477,
                "name": "National Oceanography Centre",
                "weight": 3.3333333333333335
            }]
        }, {
            "id": 268490403,
            "name": "Glaciology",
            "weight": 23.728813559322035
        }]
    }, {
        "id": 268489663,
        "name": "Cognitive Science",
        "weight": 7.7195746356833395,
        "topics": [{
            "id": 268489670,
            "name": "Neuroscience",
            "weight": 93.877551020408163,
            "topics": [{
                "id": 268486742,
                "name": "Cognitive Neuroscience",
                "weight": 49.456521739130437
            }, {
                "id": 268490107,
                "name": "Neuroinformatics",
                "weight": 18.478260869565219
            }, {
                "id": 537649485,
                "name": "Nature Neuroscience",
                "weight": 8.695652173913043
            }, {
                "id": 537139643,
                "name": "Society for Neuroscience",
                "weight": 1.0869565217391304
            }]
        }, {
            "id": 268490699,
            "name": "Cognitive Linguistics",
            "weight": 14.795918367346939
        }]
    }, {
        "id": 268486639,
        "name": "Meteorology",
        "weight": 7.601417881055534,
        "topics": [{
            "id": 268460457,
            "name": "Weather",
            "weight": 96.891191709844563,
            "topics": [{
                "id": 537103536,
                "name": "National Oceanic and Atmospheric Administration",
                "weight": 35.294117647058826
            }, {
                "id": 537077332,
                "name": "National Weather Service",
                "weight": 33.689839572192511
            }, {
                "id": 537232668,
                "name": "Good Morning America",
                "weight": 29.411764705882351
            }, {
                "id": 537877699,
                "name": "Fahrenheit",
                "weight": 25.668449197860962
            }, {
                "id": 537936164,
                "name": "Neptune",
                "weight": 23.529411764705884
            }, {
                "id": 537075340,
                "name": "Met Office",
                "weight": 18.71657754010695
            }, {
                "id": 537207397,
                "name": "Al Roker",
                "weight": 14.973262032085561
            }, {
                "id": 537098382,
                "name": "Australian Bureau of Meteorology",
                "weight": 12.834224598930481
            }, {
                "id": 537708971,
                "name": "National Hurricane Center",
                "weight": 5.882352941176471
            }, {
                "id": 537693887,
                "name": "AccuWeather",
                "weight": 5.3475935828877006
            }, {
                "id": 538102604,
                "name": "Cold Weather",
                "weight": 5.3475935828877006
            }, {
                "id": 537257986,
                "name": "The Weather Company",
                "weight": 4.81283422459893
            }, {
                "id": 537159548,
                "name": "The AccuWeather Channel",
                "weight": 3.2085561497326203
            }, {
                "id": 538273505,
                "name": "Hilo",
                "weight": 2.6737967914438503
            }, {
                "id": 537159925,
                "name": "KDKA-TV",
                "weight": 2.1390374331550803
            }, {
                "id": 538283054,
                "name": "Heatwave",
                "weight": 2.1390374331550803
            }, {
                "id": 537642633,
                "name": "Storm Prediction Center",
                "weight": 1.6042780748663101
            }, {
                "id": 537100396,
                "name": "Environment Canada",
                "weight": 1.0695187165775402
            }, {
                "id": 537127030,
                "name": "Weather Underground Organization",
                "weight": 1.0695187165775402
            }]
        }, {
            "id": 537098382,
            "name": "Australian Bureau of Meteorology",
            "weight": 12.435233160621761
        }, {
            "id": 538283054,
            "name": "Heatwave",
            "weight": 2.0725388601036268
        }, {
            "id": 537156603,
            "name": "World Meteorological Organization",
            "weight": 1.0362694300518134
        }]
    }, {
        "id": 268485781,
        "name": "Chemistry",
        "weight": 7.2075620322961793,
        "topics": [{
            "id": 537102944,
            "name": "Max Planck Society",
            "weight": 30.601092896174862
        }, {
            "id": 537128087,
            "name": "American Chemical Society",
            "weight": 19.125683060109289
        }, {
            "id": 537108794,
            "name": "Brookhaven National Laboratories",
            "weight": 16.939890710382514
        }, {
            "id": 537772799,
            "name": "Breaking Bad",
            "weight": 16.939890710382514
        }, {
            "id": 538324730,
            "name": "Department of Chemistry",
            "weight": 4.3715846994535523
        }, {
            "id": 537128088,
            "name": "American Chemistry Council",
            "weight": 1.639344262295082
        }]
    }, {
        "id": 268490513,
        "name": "Futurology",
        "weight": 5.9078377313903108,
        "topics": [{
            "id": 268490550,
            "name": "Technological Singularity",
            "weight": 76.0
        }]
    }, {
        "id": 268489671,
        "name": "Paleontology",
        "weight": 5.1988972036234742,
        "topics": [{
            "id": 537710823,
            "name": "T. Rex",
            "weight": 10.606060606060606
        }]
    }, {
        "id": 268485968,
        "name": "Dinosaurs",
        "weight": 5.0807404489956678,
        "topics": [{
            "id": 538292552,
            "name": "Jurassic World",
            "weight": 51.162790697674417
        }, {
            "id": 537117909,
            "name": "American Museum of Natural History",
            "weight": 31.007751937984494
        }, {
            "id": 537710823,
            "name": "T. Rex",
            "weight": 10.852713178294573
        }]
    }, {
        "id": 268456464,
        "name": "Nanotechnology",
        "weight": 3.6234738085860574,
        "topics": [{
            "id": 537052371,
            "name": "National Science Foundation",
            "weight": 52.173913043478258
        }, {
            "id": 538030619,
            "name": "Nature Nanotechnology",
            "weight": 4.3478260869565215
        }, {
            "id": 538281734,
            "name": "Charles M. Lieber",
            "weight": 2.1739130434782608
        }]
    }, {
        "id": 268486907,
        "name": "Plagiarism",
        "weight": 1.1421819614021269,
        "topics": [{
            "id": 537213445,
            "name": "Shia LaBeouf",
            "weight": 79.3103448275862
        }, {
            "id": 538143075,
            "name": "Grammarly",
            "weight": 6.8965517241379306
        }]
    }, {
        "id": 268485764,
        "name": "Cartography",
        "weight": 1.1027963765261914,
        "topics": [{
            "id": 537137412,
            "name": "Ordnance Survey",
            "weight": 53.571428571428569
        }]
    }]
}];

// Treemap

var treemapHintRelativeMargin = 0.0;
var treemapHint = $(".treemap-hint");
var element = $(".report-treemap");
var treemapContainer = element.find(".treemap-container");
var navigationBar = element.find(".report-treemap-navigation");
var treemap = new News360.Analytics.ReportTreemap(treemapContainer);
treemap.setNavigationCallback(function (targetTopic) {
    updateNavigationBar();
});

var navigateToTopicSuper = treemap.navigateToTopic.bind(treemap);
treemap.navigateToTopic = function (topic) {
    hideTreemapHint();
    navigateToTopicSuper(topic);
};

var resizeHandler = function () {
    if (treemapContainer.height() > 0) {
        drawTreemap();
    } else {
        setTimeout(function () {
            resizeHandler();
        }, 500);
    }
};

var window$ = $(window);
window$.on('resize', resizeHandler);
var rootContainer = window$;
rootContainer.scroll(function () {
    updateTreemapHintMargin(rootContainer.scrollTop());
});

treemapHint.click(function () {
    hideTreemapHint();
});

setTimeout(function () {
    updateTreemapData(window.treemapData);
}, 0);

function hideTreemapHint() {
    treemapHint.addClass("hidden");
}

function updateTreemapHintMargin(scroll) {
    if (treemapHintRelativeMargin !== 1.0) {
        if (element.offset()) {
            var top = element.offset().top - scroll;
            var length = window$.height() / 3;
            var relativePosition = Math.max(0, Math.min(0.7 * window$.height() - top, length)) / length;
            treemapHintRelativeMargin = Math.max(treemapHintRelativeMargin, relativePosition);
            var maxMargin = 12.0;
            var margin = (-maxMargin * (1.0 - treemapHintRelativeMargin)) + "%";
            treemapHint.css("margin-top", margin);
            if (treemapHintRelativeMargin === 1.0) {
                postWiggleAnimation(2000);
            }
        }

    }
}

function postWiggleAnimation(delay) {
    setTimeout(function () {
        if (!treemapHint.hasClass("hidden")) {
            treemapHint.addClass("wiggle");
            setTimeout(function () {
                treemapHint.removeClass("wiggle");
            }, 1000);
            postWiggleAnimation(3000);
        }
    }, delay);
}

function updateNavigationBar() {
    navigationBar.empty();
    var navigationPath = getNavigationPath();
    if (navigationPath) {
        for (var i = 0; i < navigationPath.length; i++) {
            var topic = navigationPath[i];
            if (shouldDisplayTopicInNavigationPath(topic)) {
                var navigationLink = $("<span><a>" + navigationLinkName(topic) + "</a></span>");
                setNavigationAction(navigationLink, topic);
                navigationBar.append(navigationLink);
            }
        }
    }
}

function setNavigationAction(link, topic) {
    link.find('a').click(function (e) {
        e.preventDefault();
        navigateToTopic(topic);
        ga('naiTracker.send', 'event', 'landing treemap back')
    });
}

function getNavigationPath() {
    return treemap.getNavigationPath();
}

function navigateToTopic(topic) {
    treemap.navigateToTopic(topic);
}

function navigationLinkName(topic) {
    var link;
    var navigationPath = getNavigationPath();
    if (navigationPath) {
        link = topic.name;
        if (topic !== navigationPath[0]) {
            //link += " " + parseFloat(topic.relativeWeight).toFixed(1) + "%"
            link += " " + Math.max(parseFloat(topic.weight), 0.1).toFixed(1) + "%"
        }
    }
    return link;
}

function shouldDisplayTopicInNavigationPath(topic) {
    var result = true;
    var navigationPath = getNavigationPath();
    if (navigationPath && navigationPath.length > 1) {
        var lastTopic = navigationPath[navigationPath.length - 1];
        result = lastTopic !== topic || topic.id !== topic.parent.id;
    }
    return result;
}

function updateTreemapData(interests) {
    var root;
    if (interests && interests.length) {
        root = {};
        root.id = 0;
        root.name = 'All interests';
        root.topics = $.extend([], interests);
        root.weight = 1.0;
    } else {
        root = null;
    }
    treemap.update(root);
    updateNavigationBar();
}

function drawTreemap() {
    treemap.redraw();
}