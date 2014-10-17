window['BBC.mcs.mpAuth.time'] && window['BBC.mcs.mpAuth.time'].push(new Date());
function $getPageScrollHeight() {
    var bodyCath = document.body;
    var doeCath = document.compatMode == 'BackCompat' ? bodyCath : document.documentElement;
    var ua = navigator.userAgent.toLowerCase();
    return (window.MessageEvent && ua.indexOf('firefox') == -1 && ua.indexOf('opera') == -1 && ua.indexOf('msie') == -1) ? bodyCath.scrollTop : doeCath.scrollTop;
};
function $getPageScrollWidth() {
    var bodyCath = document.body;
    var doeCath = document.compatMode == 'BackCompat' ? bodyCath : document.documentElement;
    return (window.MessageEvent && navigator.userAgent.toLowerCase().indexOf('firefox') == -1) ? bodyCath.scrollLeft : doeCath.scrollLeft;
};
function $getContentHeight() {
    var bodyCath = document.body;
    var doeCath = document.compatMode == 'BackCompat' ? bodyCath : document.documentElement;
    return (window.MessageEvent && navigator.userAgent.toLowerCase().indexOf('firefox') == -1) ? bodyCath.scrollHeight : doeCath.scrollHeight;
};
function $getContentWidth() {
    var bodyCath = document.body;
    var doeCath = document.compatMode == 'BackCompat' ? bodyCath : document.documentElement;
    return (window.MessageEvent && navigator.userAgent.toLowerCase().indexOf('firefox') == -1) ? bodyCath.scrollWidth : doeCath.scrollWidth;
};
function $getX(e) {
    var t = e.offsetLeft || 0;
    while ( e = e.offsetParent)
    t += e.offsetLeft;
    return t;
};
function $getY(e) {
    var t = e.offsetTop || 0;
    while ( e = e.offsetParent) {
        t += e.offsetTop;
    }
    return t;
};
function $addEvent(obj, type, handle) {
    if (!obj || !type || !handle) {
        return;
    }
    if ( obj instanceof Array) {
        for (var i = 0, l = obj.length; i < l; i++) {
            $addEvent(obj[i], type, handle);
        }
        return;
    }
    if ( type instanceof Array) {
        for (var i = 0, l = type.length; i < l; i++) {
            $addEvent(obj, type[i], handle);
        }
        return;
    }
    window.__allHandlers = window.__allHandlers || {};
    window.__Hcounter = window.__Hcounter || 1;
    function setHandler(obj, type, handler, wrapper) {
        obj.__hids = obj.__hids || [];
        var hid = 'h' + window.__Hcounter++;
        obj.__hids.push(hid);
        window.__allHandlers[hid] = {
            type : type,
            handler : handler,
            wrapper : wrapper
        }
    }

    function createDelegate(handle, context) {
        return function() {
            return handle.apply(context, arguments);
        };
    }

    if (window.addEventListener) {
        var wrapper = createDelegate(handle, obj);
        setHandler(obj, type, handle, wrapper)
        obj.addEventListener(type, wrapper, false);
    } else if (window.attachEvent) {
        var wrapper = createDelegate(handle, obj);
        setHandler(obj, type, handle, wrapper)
        obj.attachEvent("on" + type, wrapper);
    } else {
        obj["on" + type] = handle;
    }
};
function $addToken(url, type) {
    var token = $getToken();
    if (url == "" || (url.indexOf("://") < 0 ? location.href : url).indexOf("http") != 0) {
        return url;
    }
    if (url.indexOf("#") != -1) {
        var f1 = url.match(/\?.+\#/);
        if (f1) {
            var t = f1[0].split("#"), newPara = [t[0], "&g_tk=", token, "&g_ty=", type, "#", t[1]].join("");
            return url.replace(f1[0], newPara);
        } else {
            var t = url.split("#");
            return [t[0], "?g_tk=", token, "&g_ty=", type, "#", t[1]].join("");
        }
    }
    return token == "" ? (url + (url.indexOf("?") != -1 ? "&" : "?") + "g_ty=" + type) : (url + (url.indexOf("?") != -1 ? "&" : "?") + "g_tk=" + token + "&g_ty=" + type);
};
function $display(ids, state) {
    if (!ids) {
        return;
    }
    var state = state || '';
    if ( typeof (ids) == "string") {
        var arr = ids.split(',');
        for (var i = 0, len = arr.length; i < len; i++) {
            var o = $id(arr[i]);
            o && (o.style.display = state);
        }
    } else if (ids.nodeType) {
        ids.style.display = state;
    } else if (ids.length) {
        for (var i = 0, len = ids.length; i < len; i++) {
            $display(ids[i], state)
        }
    } else {
        ids.style.display = state;
    }
};
function $empty() {
    return function() {
        return true;
    }
};
function $getContentHeight() {
    var bodyCath = document.body;
    var doeCath = document.compatMode == 'BackCompat' ? bodyCath : document.documentElement;
    return (window.MessageEvent && navigator.userAgent.toLowerCase().indexOf('firefox') == -1) ? bodyCath.scrollHeight : doeCath.scrollHeight;
};
function $getContentWidth() {
    var bodyCath = document.body;
    var doeCath = document.compatMode == 'BackCompat' ? bodyCath : document.documentElement;
    return (window.MessageEvent && navigator.userAgent.toLowerCase().indexOf('firefox') == -1) ? bodyCath.scrollWidth : doeCath.scrollWidth;
};
function $getCookie(name) {
    var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"), val = document.cookie.match(reg);
    return val ? (val[2] ? unescape(val[2]) : "") : null;
};
function $getMousePosition(e) {
    var e = window.event ? window.event : e;
    if (e.evt)
        e = e.evt;
    var pos = [];
    if ( typeof e.pageX != "undefined") {
        pos = [e.pageX, e.pageY];
    } else if ( typeof e.clientX != "undefined") {
        pos = [e.clientX + $getScrollPosition()[0], e.clientY + $getScrollPosition()[1]];
    }
    return pos;
};
function $getPageScrollHeight() {
    var bodyCath = document.body;
    var doeCath = document.compatMode == 'BackCompat' ? bodyCath : document.documentElement;
    var ua = navigator.userAgent.toLowerCase();
    return (window.MessageEvent && ua.indexOf('firefox') == -1 && ua.indexOf('opera') == -1 && ua.indexOf('msie') == -1) ? bodyCath.scrollTop : doeCath.scrollTop;
};
function $getScrollPosition() {
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    return [ scrollLeft ? scrollLeft : 0, scrollTop ? scrollTop : 0];
};
function $getTarget(e, parent, tag) {
    var e = window.event || e, tar = e.srcElement || e.target;
    if (parent && tag && tar.nodeName.toLowerCase() != tag) {
        while ( tar = tar.parentNode) {
            if (tar == parent || tar == document.body || tar == document) {
                return null;
            } else if (tar.nodeName.toLowerCase() == tag) {
                break;
            }
        }
    };
    return tar;
};
function $getToken() {
    var skey = $getCookie("token"), token = skey == null ? "" : $time33(skey);
    return token;
};
function $getWindowHeight() {
    var bodyCath = document.body;
    return (document.compatMode == 'BackCompat' ? bodyCath : document.documentElement).clientHeight;
};
function $getWindowWidth() {
    var bodyCath = document.body;
    return (document.compatMode == 'BackCompat' ? bodyCath : document.documentElement).clientWidth;
};
function $id(id) {
    return typeof (id) == "string" ? document.getElementById(id) : id;
};
function $initDragItem(opt) {
    var option = {
        barDom : "",
        targetDom : ""
    };
    for (var i in opt) {
        option[i] = opt[i];
    }
    var that = arguments.callee;
    that.option ? "" : that.option = {};
    option.barDom.style.cursor = 'move';
    option.targetDom.style.position = "absolute";
    option.barDom.onmousedown = function(e) {
        var e = window.event || e;
        that.option.barDom = this;
        that.option.targetDom = option.targetDom;
        var currPostion = [parseInt(option.targetDom.style.left) ? parseInt(option.targetDom.style.left) : 0, parseInt(option.targetDom.style.top) ? parseInt(option.targetDom.style.top) : 0];
        that.option.diffPostion = [$getMousePosition({evt:e})[0] - currPostion[0], $getMousePosition({evt:e})[1] - currPostion[1]];
        document.onselectstart = function() {
            return false;
        };
        window.onblur = window.onfocus = function() {
            document.onmouseup();
        };
        return false;
    };
    option.targetDom.onmouseup = document.onmouseup = function() {
        if (that.option.barDom) {
            that.option = {};
            document.onselectstart = window.onblur = window.onfocus = null;
        }
    };
    option.targetDom.onmousemove = document.onmousemove = function(e) {
        try {
            var e = window.event || e;
            if (that.option.barDom && that.option.targetDom) {
                that.option.targetDom.style.left = ($getMousePosition({evt:e})[0] - that.option.diffPostion[0]) + "px";
                that.option.targetDom.style.top = ($getMousePosition({evt:e})[1] - that.option.diffPostion[1]) + "px";
            }
        } catch(e) {
        }
    };
};
function $isBrowser(str) {
    str = str.toLowerCase();
    var b = navigator.userAgent.toLowerCase();
    var arrB = [];
    arrB['firefox'] = b.indexOf("firefox") != -1;
    arrB['opera'] = b.indexOf("opera") != -1;
    arrB['safari'] = b.indexOf("safari") != -1;
    arrB['chrome'] = b.indexOf("chrome") != -1;
    arrB['gecko'] = !arrB['opera'] && !arrB['safari'] && b.indexOf("gecko") > -1;
    arrB['ie'] = !arrB['opera'] && b.indexOf("msie") != -1;
    arrB['ie6'] = !arrB['opera'] && b.indexOf("msie 6") != -1;
    arrB['ie7'] = !arrB['opera'] && b.indexOf("msie 7") != -1;
    arrB['ie8'] = !arrB['opera'] && b.indexOf("msie 8") != -1;
    arrB['ie9'] = !arrB['opera'] && b.indexOf("msie 9") != -1;
    arrB['ie10'] = !arrB['opera'] && b.indexOf("msie 10") != -1;
    return arrB[str];
};
function $loadCss(path, callback) {
    if (!path) {
        return;
    }
    var l;
    if (!window["_loadCss"] || window["_loadCss"].indexOf(path) < 0) {
        l = document.createElement('link');
        l.setAttribute('type', 'text/css');
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', path);
        l.setAttribute("id", "loadCss" + Math.random());
        document.getElementsByTagName("head")[0].appendChild(l);
        window["_loadCss"] ? (window["_loadCss"] += "|" + path) : (window["_loadCss"] = "|" + path);
    }
    l && ( typeof callback == "function") && (l.onload = callback);
    return true;
};
function $loadScript(obj) {
    if (!$loadScript.counter) {
        $loadScript.counter = 1;
    }
    var isObj = typeof (obj) == "object", url = isObj ? obj.url : arguments[0], id = isObj ? obj.id : arguments[1], obj = isObj ? obj : arguments[2], _head = document.head || document.getElementsByTagName("head")[0] || document.documentElement, _script = document.createElement("script"), D = new Date(), _time = D.getTime(), _isCleared = false, _timer = null, o = obj || {}, data = o.data || '', charset = o.charset || "utf-8", isToken = o.isToken, timeout = o.timeout, isAutoReport = o.isAutoReport || false, reportOptions = o.reportOptions || {}, reportType = o.reportType || 'current', reportRetCodeName = o.reportRetCodeName, reportSuccessCode = typeof (o.reportSuccessCode) == "undefined" ? 200 : o.reportSuccessCode, reportErrorCode = typeof (o.reportErrorCode) == "undefined" ? 500 : o.reportErrorCode, reportTimeoutCode = typeof (o.reportTimeoutCode) == "undefined" ? 600 : o.reportTimeoutCode, onload = o.onload, onsucc = o.onsucc, callbackName = o.callbackName || '', callback = o.callback, errorback = o.errorback, _jsonpLoadState = 'uninitialized';
    var complete = function(errCode) {
        if (!_script || _isCleared) {
            return;
        }
        _isCleared = true;
        if (_timer) {
            clearTimeout(_timer);
            _timer = null;
        }
        _script.onload = _script.onreadystatechange = _script.onerror = null;
        if (_head && _script.parentNode) {
            _head.removeChild(_script);
        }
        _script = null;
        if (callbackName) {
            if (callbackName.indexOf('.') == -1) {
                window[callbackName] = null;
                try {
                    delete window[callbackName];
                } catch(e) {
                }
            } else {
                var arrJ = callbackName.split("."), p = {};
                for (var j = 0, jLen = arrJ.length; j < jLen; j++) {
                    var n = arrJ[j];
                    if (j == 0) {
                        p = window[n];
                    } else {
                        if (j == jLen - 1) {
                            try {
                                delete p[n];
                            } catch(e) {
                            }
                        } else {
                            p = p[n];
                        }
                    }
                }
            }
        }
        if (_jsonpLoadState != "loaded" && typeof errorback == "function") {
            errorback(errCode);
        }
        if (isAutoReport && reportType != 'cross') {
            _retCoder.report(_jsonpLoadState == "loaded", errCode);
        }
    };
    var jsontostr = function(d) {
        var a = [];
        for (var k in d) {
            a.push(k + '=' + d[k]);
        }
        return a.join('&');
    };
    if (isAutoReport && reportOptions) {
        if (reportType == 'cross') {
            $returnCode(reportOptions).reg();
        } else {
            reportOptions.url = reportOptions.url || url.substr(0, url.indexOf('?') == -1 ? url.length : url.indexOf('?'));
            var _retCoder = $returnCode(reportOptions);
        }
    }
    if (data) {
        url += (url.indexOf("?") != -1 ? "&" : "?") + ( typeof data == 'string' ? data : jsontostr(data));
    }
    if (callbackName && typeof callback == "function") {
        var oldName = callbackName;
        if (callbackName.indexOf('.') == -1) {
            callbackName = window[callbackName] ? callbackName + $loadScript.counter++ : callbackName;
            window[callbackName] = function(jsonData) {
                _jsonpLoadState = 'loaded';
                if (isAutoReport && reportRetCodeName) {
                    reportSuccessCode = jsonData[reportRetCodeName];
                }
                callback.apply(null, arguments);
                onsucc && (onsucc());
            };
        } else {
            var arrJ = callbackName.split("."), p = {}, arrF = [];
            for (var j = 0, jLen = arrJ.length; j < jLen; j++) {
                var n = arrJ[j];
                if (j == 0) {
                    p = window[n];
                } else {
                    if (j == jLen - 1) {
                        p[n] ? ( n = n + $loadScript.counter++) : '';
                        p[n] = function(jsonData) {
                            _jsonpLoadState = 'loaded';
                            if (isAutoReport && reportRetCodeName) {
                                reportSuccessCode = jsonData[reportRetCodeName];
                            }
                            callback.apply(null, arguments);
                            onsucc && (onsucc());
                        };
                    } else {
                        p = p[n];
                    }
                }
                arrF.push(n);
            }
            callbackName = arrF.join('.');
        }
        url = url.replace('=' + oldName, '=' + callbackName);
    }
    _jsonpLoadState = 'loading';
    id = id ? (id + _time) : _time;
    url = (isToken !== false ? $addToken(url, "ls") : url);
    _script.charset = charset;
    _script.id = id;
    _script.onload = _script.onreadystatechange = function() {
        var uA = navigator.userAgent.toLowerCase();
        if (!(!(uA.indexOf("opera") != -1) && uA.indexOf("msie") != -1) || /loaded|complete/i.test(this.readyState)) {
            if ( typeof onload == "function") {
                onload();
            }
            complete(_jsonpLoadState == "loaded" ? reportSuccessCode : reportErrorCode);
        }
    };
    _script.onerror = function() {
        complete(reportErrorCode);
    };
    if (timeout) {
        _timer = setTimeout(function() {
            complete(reportTimeoutCode);
        }, parseInt(timeout, 10));
    }
    setTimeout(function() {
        _script.src = url;
        try {
            _head.insertBefore(_script, _head.lastChild);
        } catch(e) {
        }
    }, 0);
};
function $loadUrl(o) {
    o.element = o.element || 'script';
    var el = document.createElement(o.element);
    el.charset = o.charset || 'utf-8';
    if (o.noCallback == true) {
        el.setAttribute("noCallback", "true");
    }
    el.onload = el.onreadystatechange = function() {
        if (/loaded|complete/i.test(this.readyState) || navigator.userAgent.toLowerCase().indexOf("msie") == -1) {
            clear();
        }
    };
    el.onerror = function() {
        clear();
    };
    el.src = o.url;
    document.getElementsByTagName('head')[0].appendChild(el);
    function clear() {
        if (!el) {
            return;
        }
        el.onload = el.onreadystatechange = el.onerror = null;
        el.parentNode && (el.parentNode.removeChild(el));
        el = null;
    }

};
function $md5() {
    var hexcase = 0;
    var b64pad = "";
    var chrsz = 8;
    var option = {};
    option.hexcase = hexcase;
    option.b64pad = b64pad;
    option.chrsz = chrsz;
    option.hex_md5 = hex_md5;
    option.binl2hex = binl2hex;
    option.core_md5 = core_md5;
    return option;
    function hex_md5(s) {
        return binl2hex(core_md5(str2binl(s), s.length * option.chrsz));
    }

    function binl2hex(binarray) {
        var hex_tab = option.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
        }
        return str;
    }

    function core_md5(x, len) {
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return Array(a, b, c, d);
    }

    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }

    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }

    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }

    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }

    function str2binl(str) {
        var bin = Array();
        var mask = (1 << option.chrsz) - 1;
        for (var i = 0; i < str.length * option.chrsz; i += option.chrsz)
            bin[i >> 5] |= (str.charCodeAt(i / option.chrsz) & mask) << (i % 32);
        return bin;
    }

};
function $namespace(name) {
    for (var arr = name.split(','), r = 0, len = arr.length; r < len; r++) {
        for (var i = 0, k, name = arr[r].split('.'), parent = {}; k = name[i]; i++) {
            i === 0 ? eval('(typeof ' + k + ')==="undefined"?(' + k + '={}):"";parent=' + k) : ( parent = parent[k] = parent[k] || {});
        }
    }
};
function $report(url) {
    $loadUrl({
        'url' : url + ((url.indexOf('?') == -1) ? '?' : '&') + Math.random(),
        'element' : 'img'
    });
};
function $returnCode(opt) {
    var option = {
        url : "",
        action : "",
        sTime : "",
        eTime : "",
        retCode : "",
        errCode : "",
        frequence : 1,
        refer : location.href,
        uin : "",
        domain : "paipai.com",
        from : 1,
        report : report,
        isReport : false,
        timeout : 3000,
        timeoutCode : 444,
        formatUrl : true,
        reg : reg
    };
    for (var i in opt) {
        option[i] = opt[i];
    }
    if (option.url) {
        option.sTime = new Date();
    }
    if (option.timeout) {
        setTimeout(function() {
            if (!option.isReport) {
                option.report(false, option.timeoutCode);
            }
        }, option.timeout);
    }
    function reg() {
        this.sTime = new Date();
        if (!this.action) {
            return;
        }
        var rcookie = $getCookie("retcode"), cookie2 = [];
        rcookie = rcookie ? rcookie.split("|") : [];
        for (var i = 0; i < rcookie.length; i++) {
            if (rcookie[i].split(",")[0] != this.action) {
                cookie2.push(rcookie[i]);
            }
        }
        cookie2.push(this.action + "," + this.sTime.getTime());
        $setCookie("retcode", cookie2.join("|"), 60, "/", this.domain);
    }

    function report(ret, errid) {
        if (this.isReport == true) {
            return;
        }
        this.isReport = true;
        this.eTime = new Date();
        this.retCode = ret ? 1 : 2;
        this.errCode = isNaN(parseInt(errid)) ? "0" : parseInt(errid);
        if (this.action) {
            this.url = "http://retcode.paipai.com/" + this.action;
            var rcookie = $getCookie("retcode"), ret = "", ncookie = [];
            rcookie = rcookie ? rcookie.split("|") : [];
            for (var i = 0; i < rcookie.length; i++) {
                if (rcookie[i].split(",")[0] == this.action) {
                    ret = rcookie[i].split(",");
                } else {
                    ncookie.push(rcookie[i]);
                }
            }
            $setCookie("retcode", ncookie.join("|"), 60, "/", this.domain);
            if (!ret) {
                return;
            }
            this.sTime = new Date(parseInt(ret[1]));
        }
        if (!this.url) {
            return;
        }
        var domain = this.url.replace(/^.*\/\//, '').replace(/\/.*/, ''), timer = this.eTime - this.sTime, cgi = encodeURIComponent(this.formatUrl ? this.url.match(/^[\w|/|.|:|-]*/)[0] : this.url);
        this.reportUrl = "http://c.isdspeed.qq.com/code.cgi?domain=" + domain + "&cgi=" + cgi + "&type=" + this.retCode + "&code=" + this.errCode + "&time=" + timer + "&rate=" + this.frequence + (this.uin ? ("&uin=" + this.uin) : "");
        if (this.reportUrl && Math.random() < (1 / this.frequence) && this.url) {
            $report(this.reportUrl);
        }
    }

    return option;
};
function $setCookie(name, value, expires, path, domain, secure) {
    var exp = new Date(), expires = arguments[2] || null, path = arguments[3] || "/", domain = arguments[4] || null, secure = arguments[5] || false;
    expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : "";
    document.cookie = name + '=' + escape(value) + ( expires ? ';expires=' + exp.toGMTString() : '') + ( path ? ';path=' + path : '') + ( domain ? ';domain=' + domain : '') + ( secure ? ';secure' : '');
};
function $strLenGB(v) {
    return v.replace(/[\u00FF-\uFFFF]/g, "  ").length;
};
function $strReplace(str, re, rt) {
    if (rt != undefined) {
        replace(re, rt);
    } else {
        for (var key in re) {
            replace(key, re[key]);
        };
    };
    function replace(a, b) {
        var arr = str.split(a);
        str = arr.join(b);
    };
    return str;
};
function $strTrim(str, code) {
    var argus = code || "\\s";
    var temp = new RegExp("(^" + argus + "*)|(" + argus + "*$)", "g");
    return str.replace(temp, "");
};
function $time33(str) {
    for (var i = 0, len = str.length, hash = 5381; i < len; ++i) {
        hash += (hash << 5) + str.charAt(i).charCodeAt();
    };
    return hash & 0x7fffffff;
};
function $urlEncode(str) {
    if (str && str.length) {
        return escape(str).replace(/\+/g, '%2B').replace(/\"/g, '%22').replace(/\'/g, '%27').replace(/\//g, '%2F');
    }
    return "";
};
function $xss(str, type) {
    if (!str) {
        return str === 0 ? "0" : "";
    }
    switch(type) {
        case"none":
            return str + "";
            break;
        case"html":
            return str.replace(/[&'"<>\/\\\-\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g, function(r) {
                return "&#" + r.charCodeAt(0) + ";"
            }).replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br />").replace(/\n/g, "<br />").replace(/\r/g, "<br />");
            break;
        case"htmlEp":
            return str.replace(/[&'"<>\/\\\-\x00-\x1f\x80-\xff]/g, function(r) {
                return "&#" + r.charCodeAt(0) + ";"
            });
            break;
        case"url":
            return escape(str).replace(/\+/g, "%2B");
            break;
        case"miniUrl":
            return str.replace(/%/g, "%25");
            break;
        case"script":
            return str.replace(/[\\"']/g, function(r) {
                return "\\" + r;
            }).replace(/%/g, "\\x25").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\x01/g, "\\x01");
            break;
        case"reg":
            return str.replace(/[\\\^\$\*\+\?\{\}\.\(\)\[\]]/g, function(a) {
                return "\\" + a;
            });
            break;
        default:
            return escape(str).replace(/[&'"<>\/\\\-\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g, function(r) {
                return "&#" + r.charCodeAt(0) + ";"
            }).replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br />").replace(/\n/g, "<br />").replace(/\r/g, "<br />");
            break;
    }
};
function $strSubGB(str,start,len,flag){
    //进行字符长度验证，如果超过长度则返回截断后的字符串
    var total = $strLenGB(str);
    if(total > (len-start)){
        var flag=flag||"";
        var strTemp=str.replace(/[\u00FF-\uFFFF]/g, "@-").substr(start,len);
        var subLen =strTemp.match(/@-/g)?strTemp.match(/@-/g).length:0;        
        return str.substring(0,len-subLen)+flag;
    }
    return str;
}


$namespace("BBC.mcs.mpAuth");

var Auth = BBC.mcs.mpAuth;

Auth.init = function() {
    Auth.loadTemplate();
    Auth.g.getMPInfo();
    Auth.employeeList.getWorkerLimit.req();
}
Auth.g = {
    mpAuth : {
        bizaid : '',
        biztoken : '',
        bizsession : ''
    },
    urlPath : 'https://crm1.dkf.qq.com/php/index.php/workercontrl/worker/',
    // urlPath:'http://crm2.paipai.com/php/index.php/workercontrl/worker/',
    iframeHeight : 0,
    wxAlias : "",
    bizUin:"",
    employeeData : null,
    empData : {},
    setEmpData : function(ar) {
        if (!ar.length) {
            Auth.g.noEmployee();
        };
        Auth.g.empData = {};
        for (var i = 0, l = ar.length; i < l; i++) {
            if (ar[i]) {
                Auth.g.empData[ar[i].account + ""] = ar[i];
            }
        }
    },
    wnd : {
        addWnd : null,
        modifyWnd : null,
        delWnd : null,
        addsuccWnd : null,
        modifyretWnd : null,
        helpWnd : null
    },
    checkUser : function() {
        if (Auth.g.mpAuth.bizaid == '' || Auth.g.mpAuth.biztoken == '' || Auth.g.mpAuth.bizsession == '' || Auth.g.mpAuth.bizaid != $getCookie('appid') || Auth.g.mpAuth.biztoken != $getCookie('token') || Auth.g.mpAuth.bizsession != $getCookie('session')) {
            Auth.g.noLoginMP();
            return false;
        }
        return true;
    },
    template : {},
    noLoginMP : function() {
        window.location.reload();
    },
    noLogin : function(fn) {
        alert("请登录后继续操作！");
        window.location.reload();
    },
    showError : function(id, msg) {
        if ($id(id)) {
            $id(id).innerHTML = $xss("<span class='frm_msg_content'>" + msg + "</span>", "none");
            $display($id(id),"block");
        }
    },
    hideError : function(id) {
        if ($id(id)) {
            $id(id).style.display = "none";
        }
    },
    showSysError : function(title, text) {
        $id("divSessionErr").innerHTML = Auth.g.template.MPSessionErrTipInner.replace(/{#msgtitle#}/g, title).replace(/{#msgtext#}/g, text);
        $id("divSessionErr").style.display = "";
        $id("divNoEmployeeTips").style.display = "none";
        $id("my_cont").style.display = "none";
    },
    hideSysError : function() {
    },
    showRank : function(id, lv) {
        if ($id(id)) {
            if (lv == 3) {
                $id(id).innerHTML = $xss("密码强度：高<p><span class='process'></span><span class='process'></span><span class='process'></span></p>", "none");
            } else if (lv == 2) {
                $id(id).innerHTML = $xss("密码强度：中<p><span class='process'></span><span class='process'></span></p>", "none");
            } else {
                $id(id).innerHTML = $xss("密码强度：低<p><span class='process'></span></p>", "none");
            }
            $id(id).style.display = "";
        }
    },
    hideRank : function(id) {
        if ($id(id)) {
            $id(id).style.display = "none";
        }
    },
    hexToAsc2 : function(hex) {
        var md5reg = /[0-9a-f]{32}/i;
        if (!md5reg.test(hex)) {
            alert("md5 error");
        } else {
            var rslt = [];
            for (var i = 0; i < 32; i += 2) {
                var num = "0x" + hex.substr(i, 2);
                rslt.push(String.fromCharCode(Number(num)));
            }
            return rslt.join("");
        }
    },
    getPwdRank : function(pwd) {
        var ls = 0;
        if (pwd.match(/[a-z]/g)) {
            ls++;
        }
        if (pwd.match(/[A-Z]/g)) {
            ls++;
        }
        if (pwd.match(/[0-9]/g)) {
            ls++;
        }
        if (pwd.match(/[^a-zA-Z0-9]/g)) {
            ls++;
        }
        if (pwd.length < 8 && ls > 1) {
            ls = 1;
        }
        if (ls > 3) {
            ls = 3;
        };
        return ls;
    },
    maxEmployeeCount : 10,
    displayError : function(errcode) {
        switch(errcode) {
            case 1:
                Auth.g.showError("tipEmployeeAccount", "工号不能为空");
                return true;
                break;
            case 2:
                Auth.g.showError("tipEmployeeAccount", "工号最多12个字符");
                return true;
                break;
            case 3:
                Auth.g.showError("tipEmployeeNickName", "员工昵称不能为空");
                return true;
                break;
            case 4:
                Auth.g.showError("tipEmployeeNickName", "员工昵称最多12个字符");
                return true;
                break;
            case 5:
                Auth.g.showError("tipEmployeePassword", "密码输入有误");
                return true;
                break;
            case 7:
                Auth.g.showError("tipRoleList", "尚未给该员工分配角色，请选择角色");
                return true;
                break;
            case 8:
                Auth.g.showError("tipRoleName", "角色名不能为空");
                return true;
                break;
            case 9:
                Auth.g.showError("tipRoleName", "角色名最多20个字符");
                return true;
                break;
            case 10:
                Auth.g.showError("tipAuthList", "尚未给该角色分配权限，请选择权限");
                return true;
                break;
            default:
                return false;
                break;
        }
    },
    getAccount : function(str) {
        var index = str.indexOf('@');
        if (index != -1) {
            return str.substr(0, index);
        }
        return str;
    },
    setAddEmployBtn : function() {
        if (Auth.g.employeeData.length < Auth.g.maxEmployeeCount) {
            // $id("btnShowAddEmployee").className = $id("btnShowAddEmployee").className.replace(/btn_disabled/g, '');
            // $id("maxEmpTip").style.display = "none";
        } else {
            // $id("btnShowAddEmployee").className += ' btn_disabled';
            // $id("maxEmpTip").style.display = "";
        };
    },
    noEmployee : function() {
        $display("divNoEmployeeTips","");
        $display("tableEmployeeList","none");
        $display("btn_help_return", 'none');     
    },
    initLogic : function() {
        $addEvent($id("btnShowAddEmployee"), "click", function() {
            if (this.className.match(/btn_disabled/)) {
                return;
            };
            Auth.action.addEmployee.req();
        });
        $addEvent($id("btnCreateWorker"), 'click', function() {
            Auth.action.addEmployee.req();
        });
    },
    getMPInfo : function() {
        Auth.g.mpAuth.bizaid = $getCookie('appid');
        Auth.g.mpAuth.biztoken = $getCookie('token');
        Auth.g.mpAuth.bizsession = $getCookie("session");
    },
    errHandle : function(errCode, msg) {
        if ( typeof errCode == "undefined") {
            try{
                console.log("undefined errCode");
            }catch(e){
                
            }
            parent.window.location.href = "https://mp.weixin.qq.com/cgi-bin/readtemplate?t=wxm-iframe-error&lang=zh_CN";
            return;
        };
        errCode = parseInt(errCode);
        if (errCode == 40042) {
            try{
                console.log("errCode:40042");
            }catch(e){
                
            }
            Auth.reloadParent();
        } else if ( typeof msg == "string") {
            Auth.g.wnd.alertWnd = floatWnd({
                id : "errorAlert",
                title : "",
                html : Auth.g.template.errorAlert.replace(/{#word#}/g, "errCode:"+errCode+" msg:"+msg),
                width : 760,
                left : (document.documentElement.clientWidth - 760) / 2,
                top : '',
                fix : true,
                style : '',
                cover : true,
                cName : "dialogBox dialog-new",
                onInit : function() {
                    return true;
                },
                onClose : function() {
                    return true;
                }
            });
            $addEvent([$id("btnEmployeeCancel"), $id("btnEmployeeCancel2")], "click", function() {
                if (Auth.g.wnd.alertWnd) {
                    Auth.g.wnd.alertWnd.close();
                    Auth.g.wnd.alertWnd = null;
                }
            });
        } else {
            try{
                console.log("errCode:"+errCode);
            }catch(e){
                
            }
            parent.window.location.href = "https://mp.weixin.qq.com/cgi-bin/readtemplate?t=wxm-iframe-error&lang=zh_CN";
        }
        ;
    }
}
Auth.loadTemplate = function() {
    var txt = $id("divTemplateList").innerHTML.replace(/[\n\r]/g, "");
    Auth.g.template.employeeTable = txt.match(/<!--employeeTable(.*)employeeTable-->/)[1];
    Auth.g.template.employeeDataTr = txt.match(/<!--employeeDataTr(.*)employeeDataTr-->/)[1];
    Auth.g.template.employeeNoQueryData = txt.match(/<!--employeeNoQueryData(.*)employeeNoQueryData-->/)[1];
    Auth.g.template.authSelectItem = txt.match(/<!--authSelectItem(.*)authSelectItem-->/)[1];
    Auth.g.template.authSelectChildItem = txt.match(/<!--authSelectChildItem(.*)authSelectChildItem-->/)[1];
    Auth.g.template.addEmployeeSucc = txt.match(/<!--addEmployeeSucc(.*)addEmployeeSucc-->/)[1];
    Auth.g.template.modifyEmployeeInfo = txt.match(/<!--modifyEmployeeInfo(.*)modifyEmployeeInfo-->/)[1];
    Auth.g.template.addEmployee = txt.match(/<!--addEmployee(.*)addEmployee-->/)[1];
    Auth.g.template.setWeixinAlias = txt.match(/<!--setWeixinAlias(.*)setWeixinAlias-->/)[1];
    Auth.g.template.modifyEmployee = txt.match(/<!--modifyEmployee(.*)modifyEmployee-->/)[1];
    Auth.g.template.delEmployee = txt.match(/<!--delEmployee(.*)delEmployee-->/)[1];
    Auth.g.template.overEmployeeMaxTip = txt.match(/<!--overEmployeeMaxTip(.*)overEmployeeMaxTip-->/)[1];
    Auth.g.template.modifyEmployeeSucc = txt.match(/<!--modifyEmployeeSucc(.*)modifyEmployeeSucc-->/)[1];
    Auth.g.template.modifyEmployeeSuccUnit = txt.match(/<!--modifyEmployeeSuccUnit(.*)modifyEmployeeSuccUnit-->/)[1];
    Auth.g.template.helpWndOuter = txt.match(/<!--helpWndOuter(.*)helpWndOuter-->/)[1];
    Auth.g.template.helpWndInner = txt.match(/<!--helpWndInner(.*)helpWndInner-->/)[1];
    Auth.g.template.MPSessionErrTipInner = txt.match(/<!--MPSessionErrTipInner(.*)MPSessionErrTipInner-->/)[1];
    Auth.g.template.maxEmployee = txt.match(/<!--maxEmployeeTip(.*)maxEmployeeTip-->/)[1];
    Auth.g.template.errorAlert = txt.match(/<!--ErrAlertTip(.*)ErrAlertTip-->/)[1];
    Auth.g.template.authSelectList = "";
    Auth.g.template.cusRoleSelectList = "";
    Auth.g.template.sysRoleSelectList = "";
};
Auth.check = {
    Account : function() {
        if ($id("txtEmployeeAccount")) {
            var account = $id("txtEmployeeAccount").value.replace(/[^0-9a-zA-Z]/g, "");
            if (account != $id("txtEmployeeAccount").value) {
                $id("txtEmployeeAccount").value = account;
            }
            if (account.length == 0) {
                Auth.g.showError("tipEmployeeAccount", "工号不允许为空");
                return false;
            }
            if ($strLenGB(account) > 10) {
                Auth.g.showError("tipEmployeeAccount", "工号最多10个字符");
                $id("txtEmployeeAccount").value = account.substr(0,10);
                return false;
            }
            var exist = false;
            for (var i in Auth.g.empData) {
                if (i === account) {
                    exist = true;
                    break;
                }
            }
            if (exist) {
                Auth.g.showError("tipEmployeeAccount", "工号不能重复");
                return false;
            }
            Auth.g.hideError("tipEmployeeAccount");
            return account;
        } else {
            return false;
        }
    },
    NickName : function(eid) {
        if ($id("txtEmployeeNickName")) {
            var nickName = $id("txtEmployeeNickName").value.replace(/[^\w\u4e00-\u9fa5]/g, "");
            if (nickName != $id("txtEmployeeNickName").value) {
                $id("txtEmployeeNickName").value = nickName;
            }
            if (nickName.length == 0) {
                Auth.g.showError("tipEmployeeNickName", "员工昵称不能为空");
                return false;
            }
            if ($strLenGB(nickName) > 12) {
                Auth.g.showError("tipEmployeeNickName", "员工昵称最多12个字符，6个汉字");
                var strTemp = $strSubGB(nickName, 0, 12);
				if($strLenGB(strTemp) > 12)//有可能有13位
				{
					strTemp = $strSubGB(nickName, 0, 11);
				}
                $id("txtEmployeeNickName").value = strTemp;
                return false;
            }
            var exist = false;
            if (eid) {
                for (var i in Auth.g.empData) {
                    if (eid + "" != i + "" && Auth.g.empData[i].nick === nickName) {
                        exist = true;
                        break;
                    }
                }
            } else {
                for (var i in Auth.g.empData) {
                    if (Auth.g.empData[i].nick === nickName) {
                        exist = true;
                        break;
                    }
                }
            }
            if (exist) {
                Auth.g.showError("tipEmployeeNickName", "员工昵称不能重复");
                return false;
            }
            Auth.g.hideError("tipEmployeeNickName");
            return nickName;
        } else {
            return false;
        }
    },
    OldPassword : function() {
        if ($id("txtEmployeeOldPassword")) {
            var oldpassword = $id("txtEmployeeOldPassword").value;
            if (oldpassword.length == 0) {
                Auth.g.showError("tipEmployeeOldPassword", "请输入旧密码");
                return false;
            }
            Auth.g.hideError("tipEmployeeOldPassword");
            var str = $md5().hex_md5(oldpassword);
            str = $urlEncode(str);
            return str;
        } else {
            return false;
        }
    },
    Password : function() {
        if ($id("txtEmployeePassword")) {
            var password = $id("txtEmployeePassword").value.replace(/[\u4e00-\u9fa5]|[\ufe30-\uffa0]|[\uff00-\uffff]|[《》。！（）——……；：‘’“”、【】· ]/g, "");
            if (password != $id("txtEmployeePassword").value) {
                $id("txtEmployeePassword").value = password;
            }
            if (password.length < 6) {
                Auth.g.showError("tipEmployeePassword", "密码不能少于6位");
                Auth.g.hideRank("tipPasswordRank");
                return false;
            }
            if (password.length > 16) {
                Auth.g.showError("tipEmployeePassword", "密码最多16位");
                Auth.g.hideRank("tipPasswordRank");
                return false;
            }
            Auth.g.hideError("tipEmployeePassword");
            var str = $md5().hex_md5(password);
            str = $urlEncode(str);
            return str;
        } else {
            return false;
        }
    }
};
Auth.action = {
    url : {
        employeelist : Auth.g.urlPath + "get_worker_list",
        addemployee : Auth.g.urlPath + "add_worker",
        modifyemployee : Auth.g.urlPath + "mod_worker",
        modifyemployeepwd : Auth.g.urlPath + "mod_worker_pwd",
        deleteemployee : Auth.g.urlPath + "del_worker",
        regcrm : Auth.g.urlPath + "reg_and_get_worker_list",
        modifyemployeeinfo : Auth.g.urlPath + "mod_worker_info",
        getWorkerLimit :Auth.g.urlPath +"get_worker_limit"
    },
    reqData : {
        add : null,
        modify : null
    },
    addEmployee : {
        req : function() {
            if (!Auth.g.checkUser()) {
                return false;
            }
            if (Auth.g.employeeData.length >= Auth.g.maxEmployeeCount) {
                // this.disabled = true;
                // this.className += ' btn_disabled';
                Auth.g.wnd.maxEmployeeTipWnd = floatWnd({
                    id : "maxEmployeeFloat",
                    title : "",
                    html : Auth.g.template.maxEmployee,
                    width : 760,
                    left : (document.documentElement.clientWidth - 760) / 2,
                    top : '',
                    fix : true,
                    style : '',
                    cover : true,
                    cName : "dialogBox dialog-new",
                    onInit : function() {
                        return true;
                    },
                    onClose : function() {
                        return true;
                    }
                });
                $addEvent([$id("btnEmployeeCancel"), $id("btnEmployeeCancel2"), $id("btnEmployeeCancel3")], "click", function() {
                    if (Auth.g.wnd.maxEmployeeTipWnd) {
                        Auth.g.wnd.maxEmployeeTipWnd.close();
                        Auth.g.wnd.maxEmployeeTipWnd = null;
                    }
                });
                return false;
            }
            
            Auth.g.wnd.addWnd = floatWnd({
                id : "addEmployeeFloat",
                title : "",
                html : Auth.g.template.addEmployee.replace(/{#employerAccount#}/g, Auth.g.wxAlias),
                width : 760,
                left : (document.documentElement.clientWidth - 760) / 2,
                top : '',
                fix : true,
                style : '',
                cover : true,
                cName : "dialogBox dialog-new",
                onInit : function() {
                    return true;
                },
                onClose : function() {
                    return true;
                }
            });
            $id("txtEmployeeAccount").focus();
            $addEvent([$id("btnEmployeeCancel"), $id("btnEmployeeCancel2")], "click", function() {
                if (Auth.g.wnd.addWnd) {
                    Auth.g.wnd.addWnd.close();
                    Auth.g.wnd.addWnd = null;
                }
            });
            $addEvent($id("txtEmployeeAccount"), "change", function() {
                Auth.check.Account();
            });
            $addEvent($id("txtEmployeeNickName"), "change", function() {
                Auth.check.NickName();
            });
            $addEvent($id("txtEmployeePassword"), "change", function() {
                Auth.check.Password();
            });
            $addEvent($id("btnAddEmployee"), "click", function() {
                var account = Auth.check.Account();
                if (account === false) {
                    return false;
                }
                var nickname = Auth.check.NickName();
                if (nickname === false) {
                    return false;
                }
                var password = Auth.check.Password();
                if (password === false) {
                    return false;
                }
                Auth.action.reqData.add = {};
                Auth.action.reqData.add.accountName = account;
                Auth.action.reqData.add.nick = nickname;
                Auth.action.reqData.add.pwd = $id("txtEmployeePassword").value;
                if (!Auth.g.checkUser()) {
                    return false;
                }
                $id("btnAddEmployee").disabled = true;
                Auth.action.addEmployee.cb
                $loadScript(Auth.action.url.addemployee + "?account=" + account + "&nick=" + nickname + "&role=0" + "&initpwd=" + password + "&reqsign=&callback=Auth.action.addEmployee.cb&t=" + new Date().getTime());
            })
        },
        cb : function(d) {
            if (d) {
                if (d.retcode == 0 && d.errcode == 0) {
                    if (Auth.g.wnd.addWnd) {
                        Auth.g.wnd.addWnd.close();
                        Auth.g.wnd.addWnd = null;
                    }
                    Auth.employeeList.g.isreload = true;
                    Auth.employeeList.init();
                    var inner = $strReplace(Auth.g.template.addEmployeeSucc, {
                        "{#account#}" : Auth.action.reqData.add.accountName,
                        "{#employerAccount#}" : Auth.g.wxAlias,
                        "{#nickname#}" : Auth.action.reqData.add.nick,
                        "{#password#}" : Auth.action.reqData.add.pwd
                    });
                    Auth.g.wnd.addsuccWnd = floatWnd({
                        id : "addEmployeeSuccFloat",
                        title : "",
                        html : inner,
                        width : 760,
                        left : (document.documentElement.clientWidth - 760) / 2,
                        top : '',
                        fix : true,
                        style : '',
                        cover : true,
                        cName : "dialogBox dialog-new",
                        onInit : function() {
                            return true;
                        },
                        onClose : function() {
                            return true;
                        }
                    });
                    $addEvent([$id("btnEmployeeCancel"), $id("btnEmployeeCancel2")], "click", function() {
                        if (Auth.g.wnd.addsuccWnd) {
                            Auth.g.wnd.addsuccWnd.close();
                            Auth.g.wnd.addsuccWnd = null;
                        }
                    });
                } else {
                    Auth.employeeList.g.isreload = true;
                    Auth.employeeList.init();
                    Auth.g.errHandle(d.retcode, '创建工号失败！');
                    $id("btnAddEmployee").disabled = false;
                }
            } else {
                alert("请求失败！");
                $id("btnAddEmployee").disabled = false;
            }
            Auth.action.reqData.add = null;
            Auth.g.setAddEmployBtn();
        }
    },
    delEmployee : {
        req : function(eid,that) {
            if (!Auth.g.checkUser()) {
                return false;
            }
            if (eid && Auth.g.empData[eid + ""]) {
               
                var nickName = Auth.g.empData[eid + ""].nick;
                var flag = Auth.g.empData[eid + ""].flag;

                Auth.g.wnd.delWnd = floatWnd2({
                    id: "delEmployee",
                    html: Auth.g.template.delEmployee.replace(/{#emnick#}/g, nickName),
                    cName:  "dialogBox  dialog-new",
                    fix: true,
                    style: "",
                    cover: false,
                    dragble: false,
                    left:$getX(that)-250,
                    top:$getY(that)+30,
                    width: 257,
                    leaver:2,
                    onInit : function() {
                        $addEvent($id("confirmbtn"), "click", function(e) {
                            if (!Auth.g.checkUser()) {
                                return false;
                            }
                            $loadScript(Auth.action.url.deleteemployee + "?account=" + eid + "&bizuin=" + Auth.g.bizUin + "&reqsign=&flag="+ flag +"&callback=Auth.action.delEmployee.cb&t=" + new Date().getTime());
                            Auth.g.wnd.delWnd.close();
                            Auth.g.wnd.delWnd = null;
                        });
                        $addEvent([$id("cancelbtn"), $id("btnEmployeeCancel2")], "click", function(e) {
                            Auth.g.wnd.delWnd.close();
                            Auth.g.wnd.delWnd = null;
                        });
                        return true;
                    },
                    onClose: function(){return true;}
                });
            }
        },
        cb : function(d) {
            if (d) {
                if (d.retcode == 0 && d.errcode == 0) {
                    if (Auth.g.wnd.delWnd) {
                        Auth.g.wnd.delWnd.close();
                        Auth.g.wnd.delWnd = null;
                    } 
                } else {
                    Auth.g.errHandle(d.retcode, '删除工号失败！');
                }
                Auth.employeeList.g.isreload = true;
                Auth.employeeList.init();
            } else {
                alert("请求失败！");
            }
            Auth.g.setAddEmployBtn();
        }
    },
    modifyEmployee : {
        req : function(eid) {
            if (!Auth.g.checkUser()) {
                return false;
            };
            if (eid && Auth.g.empData[eid + ""]) {
                var d = Auth.g.empData[eid + ""];
                Auth.g.wnd.modifyWnd = floatWnd({
                    html : $strReplace(Auth.g.template.modifyEmployeeInfo,{
                        "{#employerAccount#}":null==d.flag||undefined==d.flag||d.flag==0?$xss(Auth.g.wxAlias, "html"):$xss(Auth.g.bizUin,"html"),
                        "{#account#}":$xss(d.account, "html"),
                        "{#nickname#}":$xss(d.nick, "html")
                    }),
                    width : 760,
                    left : (document.documentElement.clientWidth - 760) / 2,
                    top : '',
                    fix : true,
                    cover : true,
                    style : '',
                    cName : "dialogBox dialog-new",
                    onInit : function() {
                        return true;
                    },
                    onClose : function() {
                        return true;
                    }
                });
                $addEvent([$id("btnEmployeeCancel"), $id("btnEmployeeCancel2")], "click", function() {
                    if (Auth.g.wnd.modifyWnd) {
                        Auth.g.wnd.modifyWnd.close();
                        Auth.g.wnd.modifyWnd = null;
                    }
                });
                $addEvent($id("txtEmployeeNickName"), "change", function() {
                    Auth.check.NickName(eid);
                });
                $addEvent($id("txtEmployeePassword"),"focus",function(){
                    var flag = this.getAttribute("flag");
                    if (flag == 0) {
                        $id("txtEmployeePassword").value = "";
                        $id("txtEmployeePassword").focus();
                        this.setAttribute("flag", 1);
                    }; 
                });
                $addEvent($id("txtEmployeeNickName"),"focus",function(){
                    var flag = this.getAttribute("flag");
                    if (flag == 0) {
                        this.setAttribute("flag", 1);
                    }; 
                });
                $addEvent($id("txtEmployeePassword"), "change", function() {
                    Auth.check.Password();
                });

                $addEvent($id("btnModifyEmployee"), "click", function() {
                    if (!Auth.g.checkUser()) {
                        return false;
                    }
                    var nickModify = parseInt($id("txtEmployeeNickName").getAttribute("flag"));
                    var pwdModify = parseInt($id("txtEmployeePassword").getAttribute("flag"));
                    var nickname = '';
                    var password = '';
                    var type = nickModify + pwdModify * 2;
                    if (type == 0) {
                        if (Auth.g.wnd.modifyWnd) {
                            Auth.g.wnd.modifyWnd.close();
                            Auth.g.wnd.modifyWnd = null;
                        }
                        return;
                    };
                    if (nickModify == 1) {
                        nickname = Auth.check.NickName(eid);
                        if (nickname === false) {
                            return false;
                        }
                    }
                    Auth.action.reqData.modify = {};
                    if (pwdModify == 1) {
                        password = Auth.check.Password();
                        Auth.action.reqData.modify.pwd = $id("txtEmployeePassword").value;
                        if (password === false) {
                            return false;
                        }
                    }
                    Auth.action.reqData.modify.account = eid;
                    Auth.action.reqData.modify.nick = nickname;
                    $id("btnModifyEmployee").disabled = true;
                    $loadScript(Auth.action.url.modifyemployeeinfo + "?type=" + type + "&account=" + eid + "&nick=" + nickname + "&bizuin=" + Auth.g.bizUin + "&newpwd=" + password + "&flag=" + d.flag +"&role=0&reqsign=&callback=Auth.action.modifyEmployee.cb&t=" + new Date().getTime());
                });
            }
        },
        cb : function(d) {
            var wording = '';
            var unit = '';
            if (d) {
                if (d.retcode == 0) {
                    wording = '<p class="succ-wording">成功修改客服信息！</p>';
                    unit = Auth.g.template.modifyEmployeeSuccUnit.replace(/{#name#}/g, "工号").replace(/{#value#}/g, Auth.action.reqData.modify.account);
                    if (Auth.action.reqData.modify.nick) {
                        unit += Auth.g.template.modifyEmployeeSuccUnit.replace(/{#name#}/g, "昵称").replace(/{#value#}/g, Auth.action.reqData.modify.nick);
                        if (Auth.action.reqData.modify.nick) {
                            Auth.employeeList.g.isreload = true;
                            Auth.employeeList.init();
                        };
                    };
                    if (Auth.action.reqData.modify.pwd) {
                        unit += Auth.g.template.modifyEmployeeSuccUnit.replace(/{#name#}/g, "新密码").replace(/{#value#}/g, Auth.action.reqData.modify.pwd);
                    };
                } else if (d.retcode == 1) {
                    wording = '<p class="err-wording">修改客服昵称失败！</p>';
                    if (Auth.action.reqData.modify.pwd) {
                        wording += '<p class="succ-wording">修改客服密码成功！</p>';
                    };
                    unit = Auth.g.template.modifyEmployeeSuccUnit.replace(/{#name#}/g, "工号").replace(/{#value#}/g, Auth.action.reqData.modify.account);
                    if (Auth.action.reqData.modify.pwd) {
                        unit += Auth.g.template.modifyEmployeeSuccUnit.replace(/{#name#}/g, "新密码").replace(/{#value#}/g, Auth.action.reqData.modify.pwd);
                    };
                } else if (d.retcode == 2) {
                    if (Auth.action.reqData.modify.nick) {
                        wording = '<p class="succ-wording">修改客服昵称成功！</p>';
                        Auth.employeeList.g.isreload = true;
                        Auth.employeeList.init();
                    };
                    wording += '<p class="err-wording">修改客服密码失败！</p>';
                    unit = Auth.g.template.modifyEmployeeSuccUnit.replace(/{#name#}/g, "工号").replace(/{#value#}/g, Auth.action.reqData.modify.account);
                    if (Auth.action.reqData.modify.nick) {
                        unit += Auth.g.template.modifyEmployeeSuccUnit.replace(/{#name#}/g, "昵称").replace(/{#value#}/g, Auth.action.reqData.modify.nick);
                    };
                } else if (d.retcode == 3) {
                    wording = '<p class="err-wording">修改客服昵称与密码失败！</p>';
                } else {
                    Auth.g.errHandle(d.retcode);
                    wording = '<p class="err-wording">修改客服信息失败！' + d.errmsg + '！' + d.retcode + '</p>';
                }
                ;
            } else {
                wording = '<p class="err-wording">修改客服昵称与密码失败！</p>';
                $id('btnModifyEmployee').disabled = false;
            };
            if (Auth.g.wnd.modifyWnd) {
                Auth.g.wnd.modifyWnd.close();
                Auth.g.wnd.modifyWnd = null;
            };
            Auth.action.reqData.modify = null;
            Auth.g.wnd.modifyretWnd = floatWnd({
                id : "modifyretWndFloat",
                title : "",
                html : Auth.g.template.modifyEmployeeSucc.replace(/{#wording#}/g, wording).replace(/{#tips#}/g, unit),
                width : 760,
                left : (document.documentElement.clientWidth - 760) / 2,
                top : '',
                fix : true,
                style : '',
                cover : true,
                cName : "dialogBox dialog-new",
                onInit : function() {
                    return true;
                },
                onClose : function() {
                    return true;
                }
            });
            $addEvent([$id("btnEmployeeCancel"), $id("btnEmployeeCancel2")], "click", function() {
                if (Auth.g.wnd.modifyretWnd) {
                    Auth.g.wnd.modifyretWnd.close();
                    Auth.g.wnd.modifyretWnd = null;
                }
            });
        }
    }
};
Auth.employeeList = {
    g : {
        isreload : false
				
    },
    init : function() {
        $loadScript(Auth.action.url.employeelist + "?reqsign=&callback=Auth.employeeList.eListCB&t=" + new Date().getTime());
    },
    getWorkerLimit:{
        regTryTime:0,
        req:function(){
            if (Auth.employeeList.getWorkerLimit.regTryTime < 3) {
               $loadScript({
                 url : Auth.action.url.getWorkerLimit + "?callback=Auth.employeeList.getWorkerLimit.cb&t=" + new Date().getTime(),
                 callbackName : 'Auth.employeeList.getWorkerLimit.cb',
                 callback : Auth.employeeList.getWorkerLimit.cb,
                 errorback : Auth.employeeList.getWorkerLimit.errCB
               });
            }else{
                Auth.employeeList.reginit();
            };
        },
        cb:function(d){
            if (d.retcode == 0 && d.errcode == 0) {
                Auth.g.maxEmployeeCount = d.limit;
                Auth.employeeList.reginit();
            }else {
                Auth.employeeList.getWorkerLimit.regTryTime++;
                Auth.employeeList.getWorkerLimit.req(); 
            }
        },
        errCB:function(errCode){
            Auth.employeeList.getWorkerLimit.regTryTime++;
            Auth.employeeList.getWorkerLimit.req();
        }
    },
    reginit : function() {
        if (Auth.employeeList.regTryTime < 3) {
            $loadScript({
                url : Auth.action.url.regcrm + "?reqsign=&callback=Auth.employeeList.regCB&t=" + new Date().getTime(),
                callbackName : 'Auth.employeeList.regCB',
                callback : Auth.employeeList.regCB,
                errorback : Auth.employeeList.regErrB
            });
        };
    },
    regCB : function(d) {
        if (d) {
            if (d.retcode == 0 && d.errcode == 0) {
                Auth.g.employeeData = d.data;
                Auth.g.setEmpData(Auth.g.employeeData);
                Auth.g.wxAlias = d.wxalias;
                Auth.g.bizUin  = d.bizuin;
                Auth.employeeList.initData();
                Auth.g.setAddEmployBtn();
                Auth.recalculateHeight();
                if (!Auth.employeeList.g.isreload) {
                    Auth.g.initLogic();
                    Auth.employeeList.initLogic();
                }
                Auth.employeeList.regTryTime = 0;
            } else if (d.retcode == -1) {
                Auth.employeeList.regTryTime++;
                if (Auth.employeeList.regTryTime >= 3) {
                    Auth.g.errHandle(d.retcode,d.errmsg);
                } else {
                    Auth.employeeList.reginit();
                };
            } else if(d.retcode == -2){
                try{
                    console.log("regCB return -2 msg:"+d.errmsg);
                }catch(e){
                    
                }
                parent.window.location.href = "https://mp.weixin.qq.com/cgi-bin/readtemplate?t=wxm-iframe-error&lang=zh_CN";
            }else {
                try{
                    console.log("regCB return " + d.retcode + " msg:"+d.errmsg);
                }catch(e){
                    
                }
                Auth.g.errHandle(d.retcode,d.errmsg);
            }
        } else {
            Auth.g.errHandle();
        };
    },
    regErrB : function(errCode) {
        Auth.g.errHandle(errCode);
    },
    regTryTime : 0,
    eListCB : function(d) {
        if (d) {
            if (d.retcode == 0 && d.errcode == 0) {
                Auth.g.employeeData = d.data;
                Auth.g.setEmpData(Auth.g.employeeData);
                Auth.employeeList.initData();
                Auth.g.setAddEmployBtn();
                Auth.recalculateHeight();
                if (!Auth.employeeList.g.isreload) {
                    Auth.g.initLogic();
                    Auth.employeeList.initLogic();
                }
            } else {
                Auth.g.errHandle(d.retcode);
            }
        } else {
            Auth.g.errHandle();
        }
    },
    initData : function() {
        var d = Auth.g.employeeData;
        if (d && d.length) {
            var slt = [];
            slt = d;
            if (slt.length) {
                var self = Auth.employeeList;
                var html = [];
                var start = 0;
                var end = Auth.g.maxEmployeeCount;
                for (var i = start, l = slt.length; i < l && i < end; i++) {
                    html.push(Auth.g.template.employeeDataTr.replace(/{#count#}/g, i + 1).replace(/{#account#}/g, $xss(slt[i].account, "html")).replace(/{#name#}/g, $xss(slt[i].nick, "html") || "　"));
                }  
                $id("tableEmployeeList").innerHTML = $xss(Auth.g.template.employeeTable.replace(/{#employeeList#}/g, html.join("")), "none");
                $id("my_cont").style.display = "";
                $display("divNoEmployeeTips","none");
                $display("tableEmployeeList","");
            } else {
                Auth.g.noEmployee();
            }
        } else {
            Auth.g.noEmployee();
        }
    },
    initLogic : function() {
  
        var timer = null;
        var tiper = null;
        $addEvent($id("tableEmployeeList"), "click", function(e) {
            if (null != Auth.g.wnd.delWnd) {
                Auth.g.wnd.delWnd.close();
                Auth.g.wnd.delWnd = null;
            };
            var actionDom = $getTarget(e);
            if (actionDom) {
                var action = actionDom.getAttribute("action");
                if (action) {
                    if (action == "list") {
                        var self = Auth.employeeList;
                        $id("txtEmployeeKey").value = "";
                        self.initData();
                    } else if (action == "add") {
                        Auth.action.addEmployee.req();
                    } else if (action == "modify") {
                        var eid = $strTrim(actionDom.getAttribute("eid"));
                        if (eid) {
                            Auth.action.modifyEmployee.req(eid);
                        }
                    } else if (action == "delete") {
                        var eid = actionDom.getAttribute("eid");
                        if (eid) {
                            Auth.action.delEmployee.req(eid,actionDom);
                        }
                    }
                }
            }
        });
    }
}


function floatWnd(opt) {
    var option = {
        id : "",
        left : 0,
        top : 0,
        width : 400,
        height : 0,
        title : "",
        html : "",
        leaver : 2,
        zindex : 255,
        autoResize : false,
        cover : true,
        dragble : false,
        fix : false,
        titleId : "",
        showClose : true,
        closeId : "",
        bgframeLeft : -2,
        bgframeTop : -2,
        cName : "module_box_normal vt_float",
        style : "stand",
        contentStyle : "",
        cssUrl : window.config_float_css || "https://crm1.dkf.qq.com/php/static/css/module_box.css",
        onInit : $empty(),
        onClose : $empty()
    };
    for (var i in opt) {
        option[i] = opt[i];
    }
    var that = arguments.callee;
    var _host = window.location.hostname, _isQQ = _host.indexOf("qq.com") != -1, _isBBC = _host.indexOf("buy.qq.com") != -1, _isPP = _host.indexOf("paipai.com") != -1;
    if (_isPP) {
        option.bgframeLeft = 0;
        option.bgframeTop = 0;
    }
    that.data ? "" : init(option.cssUrl);
    option.id = option.id ? option.id : ++that.data.zIndex;
    option.close = closeFloat;
    option.destruct = destructFloat;
    option.closeOther = closeOther;
    option.keepBoxFix = keepBoxFix;
    option.resize = resize;
    option.show = showBox;
    option.setPos = setPos;
    option.onKeepfixCallback = onKeepfixCallback;
    option.closeOther();
    option.show();
    that.data.list.push(option);
    if (option.dragble) {
        $initDragItem({
            barDom : option.boxTitleHandle,
            targetDom : option.boxHandle
        });
    }
    return option;
    function closeFloat() {
        if (!option.onClose(option)) {
            return;
        }
        option.closeOther();
        option.destruct();
        Auth.recalculateHeight();
    }

    function destructFloat() {
        var _this = this;
        _this.cover ? that.data.closeCover() : "";
        if (_this.sizeTimer) {
            clearInterval(_this.sizeTimer);
        }
        if (_this.fixTimer) {
            clearInterval(_this.fixTimer);
        }
        _this.boxHandle ? document.body.removeChild(_this.boxHandle) : "";
        _this.boxHandel = _this.boxHandle = null;
        for (var i = 0, l = that.data.list.length; i < l; i++) {
            if (!that.data.list[i]) {
                continue;
            }
            if (_this.id == that.data.list[i].id) {
                that.data.list[i] = null;
            }
        }
        if (_this.closeId) {
            var arrClose = _this.closeId.split(",");
            for (var l = arrClose.length; l--; ) {
                var _el = $id(arrClose[l]);
                if (_el) {
                    _el.onclick = null;
                    _el = null;
                }
            }
        }
    }

    function closeOther() {
        for (var i = 0, l = that.data.list.length; i < l; i++) {
            if (!that.data.list[i]) {
                continue;
            }
            if (that.data.list[i].leaver >= this.leaver && this.id != that.data.list[i].id) {
                that.data.list[i].destruct();
            }
        }
    }

    function showBox() {
        this.cover ? that.data.showCover() : "";
        var c = document.createElement("div"), content = "", _style = option.contentStyle ? (' style="' + option.contentStyle + '" ') : "";
        c.id = this.boxId = 'float_box_' + this.id;
        c.style.position = "absolute";
        if ($isBrowser("ie6")) {
            content = '<iframe frameBorder="0" style="position:absolute;left:' + option.bgframeLeft + 'px;top:' + option.bgframeTop + 'px;z-index:-1;border:none;" id="float_iframe_' + this.id + '"></iframe>';
        }
        switch(option.style+"") {
            case"stand":
                c.className = option.cName;
                c.innerHTML = content + '<div class="box_title" id="float_title_' + this.id + '"><a href="javascript:;" style="display:' + (this.showClose ? '' : 'none') + ';"  class="bt_close" id="float_closer_' + this.id + '">×</a><h4>' + this.title + '</h4></div><div class="box_content" ' + _style + '>' + this.html + '</div>';
                break;
            case"":
                c.className = option.cName;
                c.innerHTML = content + '<div class="box_content" ' + _style + ' id="float_title_' + this.id + '">' + this.html + '</div>';
                break;
            case"none":
                c.className = "";
                c.innerHTML = content + '<div class="box_content" ' + _style + ' id="float_title_' + this.id + '">' + this.html + '</div>';
                break;
            case"new":
                c.className = option.cName;
                c.innerHTML = content + '<div class="layer_inner"><div class="layer_hd" ' + _style + ' id="float_title_' + this.id + '"><div class="layer_hd_title">' + this.title + '</div><a href="javascript:void(0);" class="layer_hd_close" id="float_closer_' + this.id + '">close</a> </div> <div class="layer_bd">' + this.html + '</div></div></div>';
                break;
        }
        document.body.appendChild(c);
        c = null;
        this.boxHandel = this.boxHandle = $id('float_box_' + this.id);
        if ($isBrowser("ie6")) {
            this.boxIframeHandle = $id('float_iframe_' + this.id);
        }
        this.boxTitleHandle = $id(option.titleId || ('float_title_' + this.id));
        this.boxCloseHandle = $id('float_closer_' + this.id);
        this.height ? (this.boxHandle.style.height = (option.height == "auto" ? option.height : option.height + "px")) : "";
        this.width ? (this.boxHandle.style.width = (option.width == "auto" ? option.width : option.width + "px")) : "";
        this.boxHandle.style.zIndex = that.data.zIndex;
        this.sw = parseInt(this.boxTitleHandle.offsetWidth);
        this.sh = parseInt(this.boxTitleHandle.offsetHeight);
        if (Auth.g.iframeHeight < this.sh) {
            Auth.recalculateHeight(this.sh);
        };
        this.setPos();
        var _this = this;
        _this.boxCloseHandle ? _this.boxCloseHandle.onclick = function() {
            _this.close();
            return false;
        } : "";
        if (_this.closeId) {
            var arrClose = _this.closeId.split(",");
            for (var l = arrClose.length; l--; ) {
                var _el = $id(arrClose[l]);
                if (_el) {
                    _el.onclick = function() {
                        _this.close();
                        return false;
                    };
                    _el = null;
                }
            }
        }
        _this.keepBoxFix();
        if (!_this.onInit(option)) {
            return;
        }
    }

    function setPos(left, top) {
        var _this = this;
        left && (_this.left = left);
        top && (_this.top = top);
        _this.keepBoxFix();
    }

    function resize(w, h) {
        if (w && w.constructor === Number) {
            this.sw = w;
            this.boxHandle.style.width = this.sw + "px";
            if ($isBrowser("ie6")) {
                this.boxIframeHandle.width = (this.sw - 2) + "px";
            }
        }
        if (h && h.constructor === Number) {
            this.sh = h;
            this.boxHandle.style.height = this.sh + "px";
            if ($isBrowser("ie6")) {
                this.boxIframeHandle.height = (this.sh - 2) + "px";
            }
        }
        this.setPos();
    }

    function keepBoxFix() {
        if (this.fix) {
            getParentSizeValue(this.onKeepfixCallback);
            var _this = this;
            if ($isBrowser("ie6")) {
                !_this.fixTimer && (_this.fixTimer = setInterval(function() {
                    _this.boxHandle.style.left = (_this.left ? _this.left : ($getPageScrollWidth() + ($getWindowWidth() - _this.sw) / 2)) + "px";
                    _this.boxHandle.style.top = (_this.top ? _this.top : ($getPageScrollHeight() + ($getWindowHeight() - _this.sh) / 2)) + "px";
                }, 30));
            } else {
                _this.boxHandle.style.position = "fixed";
                _this.boxHandle.style.left = (_this.left ? _this.left : ($getWindowWidth() - _this.sw) / 2) + "px";
                _this.boxHandle.style.top = (_this.top ? _this.top : ($getWindowHeight() - _this.sh) / 2) + "px";
            }
        }
    }

    function onKeepfixCallback(data) {
        var wnd = Auth.g.wnd;
        var _this = option;
        if ($isBrowser("ie")) {
            !_this.fixTimer && (_this.fixTimer = setInterval(function() {
                _this.boxHandle.style.left = (_this.left ? _this.left : (getParentPageScrollWidth() + (getParentWindowWidth() - _this.sw) / 2)) + "px";
                var top = (_this.top ? _this.top : (parseInt(data["scrollTop"]) - parseInt(data['offsetTop']) + (parseInt(data['windowHeight']) - _this.sh) / 2));
                top = top < 0 ? 0 : top;
                top = top + this.sh > Auth.g.iframeHeight ? Auth.g.iframeHeight - this.sh : top;
                _this.boxHandle.style.top = top + 'px';
            }, 30));
        } else {
            _this.boxHandle.style.position = "fixed";
            _this.boxHandle.style.left = (_this.left ? _this.left : (getParentPageScrollWidth() + (getParentWindowWidth() - _this.sw) / 2)) + "px";
            var top = (_this.top ? _this.top : (parseInt(data["scrollTop"]) - parseInt(data['offsetTop']) + (parseInt(data['windowHeight']) - _this.sh) / 2));
            top = top < 0 ? 0 : top;
            top = top + this.sh > Auth.g.iframeHeight ? Auth.g.iframeHeight - this.sh : top;
            _this.boxHandle.style.top = top + 'px';
        }
    }

    function autoResize() {
        if (this.autoResize) {
            var _this = this;
            _this.sizeTimer = setInterval(function() {
                _this.sw = _this.boxHandle.offsetWidth;
                _this.sh = _this.boxHandle.offsetHeight;
                if ($isBrowser("ie6")) {
                    _this.boxIframeHandle.height = (_this.sh - 2) + "px";
                    _this.boxIframeHandle.width = (_this.sw - 2) + "px";
                }
            }, 50);
        }
    }

    function init(cssUrl) {
        if (cssUrl) {
            $loadCss(cssUrl);
        }
        that.data = {};
        that.data.zIndex = option.zindex;
        that.data.list = [];
        createCover();
        that.data.showCover = showCover;
        that.data.closeCover = closeCover;
        function createCover() {
            var c = document.createElement("div");
            c.id = "float_cover";
            c.style.display = "none";
            c.style.width = "0px";
            c.style.height = "0px";
            c.style.backgroundColor = "#000000";
            c.style.zIndex = 250;
            c.style.position = "fixed";
            c.style.hasLayout = -1;
            c.style.left = "0px";
            c.style.top = "0px";
            c.style.filter = "alpha(opacity=50);";
            c.style.opacity = "0.5";
            document.body.appendChild(c);
            if ($isBrowser("ie6")) {
                c.innerHTML = '<iframe frameBorder="0" style="position:absolute;left:0;top:0;width:100%;z-index:-1;border:none;" id="float_cover_iframe"></iframe>';
                c.style.position = "absolute";
            }
            that.data.cover = $id("float_cover");
            that.data.coverIframe = $id("float_cover_iframe");
            that.data.coverIsShow = false;
            that.data.coverSize = [0, 0];
            c = null;
        }

        function showCover() {
            that.data.cover.style.display = "block";
            that.data.coverIsShow = true;
            keepCoverShow();
            Auth.showMask();
            that.data.coverTimer = setInterval(function() {
                keepCoverShow();
            }, 50);
            function keepCoverShow() {
                var _d = that.data;
                if (_d.coverIsShow) {
                    var ch = $getContentHeight(), wh = $getWindowHeight(), cw = $getContentWidth(), ww = $getWindowWidth(), ns = [wh, ww];
                    if ($isBrowser("ie6")) {
                        _d.cover.style.top = $getPageScrollHeight() + "px";
                    }
                    if (ns.toString() != that.data.coverSize.toString()) {
                        _d.coverSize = ns;
                        _d.cover.style.height = ns[0].toFixed(0) + "px";
                        _d.cover.style.width = ns[1].toFixed(0) + "px";
                        if (_d.coverIframe) {
                            _d.coverIframe.style.height = ns[0].toFixed(0) + "px";
                            _d.coverIframe.style.width = ns[1].toFixed(0) + "px";
                        }
                    }
                }
            }

        }

        function closeCover() {
            that.data.cover.style.display = "none";
            that.data.coverIsShow = false;
            Auth.hideMask();
            clearInterval(that.data.coverTimer);
        }

    }

};


function floatWnd2(opt) {
    var option = {
        id : "",
        left : 0,
        top : 0,
        width : 400,
        height : 0,
        title : "",
        html : "",
        leaver : 2,
        zindex : 255,
        autoResize : false,
        opacity : 0.5,
        cover : true,
        isCoverClose : false,
        dragble : false,
        fix : false,
        titleId : "",
        showClose : true,
        closeId : "",
        bgframeLeft : -2,
        bgframeTop : -2,
        cName : "module_box_normal vt_float",
        style : "stand",
        contentStyle : "",
        cssUrl : window.config_float_css || "https://crm1.dkf.qq.com/php/static/css/module_box.css",
        onInit : $empty(),
        onClose : $empty()
    };
    for (var i in opt) {
        option[i] = opt[i];
    }
    var that = arguments.callee;
    var _host = window.location.hostname, _isQQ = _host.indexOf("qq.com") != -1, _isBBC = _host.indexOf("buy.qq.com") != -1, _isPP = _host.indexOf("paipai.com") != -1;
    if (_isPP) {
        option.bgframeLeft = 0;
        option.bgframeTop = 0;
    }
    that.data ? "" : init(option.cssUrl);
    option.id = option.id ? option.id : ++that.data.zIndex;
    option.close = closeFloat;
    option.destruct = destructFloat;
    option.closeOther = closeOther;
    option.keepBoxFix = keepBoxFix;
    option.resize = resize;
    option.show = showBox;
    option.setPos = setPos;
    option.closeOther();
    option.show();
    that.data.list.push(option);
    if (option.dragble) {
        $initDragItem({
            barDom : option.boxTitleHandle,
            targetDom : option.boxHandle
        });
    }
    return option;
    function closeFloat() {
        if (!option.onClose(option)) {
            return;
        }
        option.closeOther();
        option.destruct();
    }

    function destructFloat() {
        var _this = this;
        _this.cover ? that.data.closeCover() : "";
        if (_this.sizeTimer) {
            clearInterval(_this.sizeTimer);
        }
        if (_this.fixTimer) {
            clearInterval(_this.fixTimer);
        }
        _this.boxHandle ? document.body.removeChild(_this.boxHandle) : "";
        _this.boxHandel = _this.boxHandle = null;
        for (var i = 0, l = that.data.list.length; i < l; i++) {
            if (!that.data.list[i]) {
                continue;
            }
            if (_this.id == that.data.list[i].id) {
                that.data.list[i] = null;
            }
        }
        if (_this.closeId) {
            var arrClose = _this.closeId.split(",");
            for (var l = arrClose.length; l--; ) {
                var _el = $id(arrClose[l]);
                if (_el) {
                    _el.onclick = null;
                    _el = null;
                }
            }
        }
    }

    function closeOther() {
        for (var i = 0, l = that.data.list.length; i < l; i++) {
            if (!that.data.list[i]) {
                continue;
            }
            if (that.data.list[i].leaver >= this.leaver && this.id != that.data.list[i].id) {
                that.data.list[i].destruct();
            }
        }
    }

    function showBox() {
        this.cover ? that.data.showCover() : "";
        var c = document.createElement("div"), content = "", _style = option.contentStyle ? (' style="' + option.contentStyle + '" ') : "";
        c.id = this.boxId = 'float_box_' + this.id;
        c.style.position = "absolute";
        if ($isBrowser("ie6")) {
            content = '<iframe frameBorder="0" style="position:absolute;left:' + option.bgframeLeft + 'px;top:' + option.bgframeTop + 'px;z-index:-1;border:none;" id="float_iframe_' + this.id + '"></iframe>';
        }
        switch(option.style+"") {
            case"stand":
                c.className = option.cName;
                c.innerHTML = content + '<div class="box_title" id="float_title_' + this.id + '"><a href="javascript:;" style="display:' + (this.showClose ? '' : 'none') + ';"  class="bt_close" id="float_closer_' + this.id + '">��</a><h4>' + this.title + '</h4></div><div class="box_content" ' + _style + '>' + this.html + '</div>';
                break;
            case"":
                c.className = option.cName;
                c.innerHTML = content + '<div class="box_content" ' + _style + ' id="float_title_' + this.id + '">' + this.html + '</div>';
                break;
            case"none":
                c.className = "";
                c.innerHTML = content + '<div class="box_content" ' + _style + ' id="float_title_' + this.id + '">' + this.html + '</div>';
                break;
            case"new":
                c.className = option.cName;
                c.innerHTML = content + '<div class="layer_inner"><div class="layer_hd" ' + _style + ' id="float_title_' + this.id + '"><div class="layer_hd_title">' + this.title + '</div><a href="javascript:void(0);" class="layer_hd_close" id="float_closer_' + this.id + '">close</a></div><div class="layer_bd">' + this.html + '</div></div></div>';
                break;
        }
        document.body.appendChild(c);
        c = null;
        this.boxHandel = this.boxHandle = $id('float_box_' + this.id);
        if ($isBrowser("ie6")) {
            this.boxIframeHandle = $id('float_iframe_' + this.id);
        }
        this.boxTitleHandle = $id(option.titleId || ('float_title_' + this.id));
        this.boxCloseHandle = $id('float_closer_' + this.id);
        this.isCoverClose ? (this.closeId += ',float_cover') : "";
        this.height ? (this.boxHandle.style.height = (option.height == "auto" ? option.height : option.height + "px")) : "";
        this.width ? (this.boxHandle.style.width = (option.width == "auto" ? option.width : option.width + "px")) : "";
        this.boxHandle.style.zIndex = that.data.zIndex;
        this.sw = parseInt(this.boxHandle.offsetWidth);
        this.sh = parseInt(this.boxHandle.offsetHeight);
        this.setPos();
        var _this = this;
        _this.boxCloseHandle ? _this.boxCloseHandle.onclick = function() {
            _this.close();
            return false;
        } : "";
        if (_this.closeId) {
            var arrClose = _this.closeId.split(",");
            for (var l = arrClose.length; l--; ) {
                var _el = $id(arrClose[l]);
                if (_el) {
                    _el.onclick = function() {
                        _this.close();
                        return false;
                    };
                    _el = null;
                }
            }
        }
        _this.keepBoxFix();
        if (!_this.onInit(option)) {
            return;
        }
    }

    function setPos(left, top) {
        var psw = $getPageScrollWidth(), ww = $getWindowWidth(), psh = $getPageScrollHeight(), wh = $getWindowHeight();
        var p = [0, 0];
        left && (this.left = left);
        top && (this.top = top);
        p[0] = parseInt(this.left ? this.left : (psw + (ww - this.sw) / 2));
        p[1] = parseInt(this.top ? this.top : (psh + (wh - this.sh) / 2));
        (p[0] + this.sw) > (psw + ww) ? (p[0] = psw + ww - this.sw - 10) : "";
        (p[1] + this.sh) > (psh + wh) ? (p[1] = psh + wh - this.sh - 10) : "";
        p[1] < psh ? p[1] = psh : "";
        p[0] < psw ? p[0] = psw : "";
        if ($isBrowser("ie6")) {
            this.boxIframeHandle.height = (this.sh - 2) + "px";
            this.boxIframeHandle.width = (this.sw - 2) + "px";
        }
        this.boxHandle.style.left = p[0] + "px";
        this.boxHandle.style.top = p[1] + "px";
        this.keepBoxFix();
    }

    function resize(w, h) {
        if (w && w.constructor === Number) {
            this.sw = w;
            this.boxHandle.style.width = this.sw + "px";
            if ($isBrowser("ie6")) {
                this.boxIframeHandle.width = (this.sw - 2) + "px";
            }
        }
        if (h && h.constructor === Number) {
            this.sh = h;
            this.boxHandle.style.height = this.sh + "px";
            if ($isBrowser("ie6")) {
                this.boxIframeHandle.height = (this.sh - 2) + "px";
            }
        }
        this.setPos();
    }

    function keepBoxFix() {
        if (this.fix) {
            var _this = this;
            if ($isBrowser("ie6")) {
                !_this.fixTimer && (_this.fixTimer = setInterval(function() {
                    _this.boxHandle.style.left = (_this.left ? _this.left : ($getPageScrollWidth() + ($getWindowWidth() - _this.sw) / 2)) + "px";
                    _this.boxHandle.style.top = (_this.top ? _this.top : ($getPageScrollHeight() + ($getWindowHeight() - _this.sh) / 2)) + "px";
                }, 30));
            } else {
                _this.boxHandle.style.position = "fixed";
                _this.boxHandle.style.left = (_this.left ? _this.left : ($getWindowWidth() - _this.sw) / 2) + "px";
                _this.boxHandle.style.top = (_this.top ? _this.top : ($getWindowHeight() - _this.sh) / 2) + "px";
            }
        }
    }

    function autoResize() {
        if (this.autoResize) {
            var _this = this;
            _this.sizeTimer = setInterval(function() {
                _this.sw = _this.boxHandle.offsetWidth;
                _this.sh = _this.boxHandle.offsetHeight;
                if ($isBrowser("ie6")) {
                    _this.boxIframeHandle.height = (_this.sh - 2) + "px";
                    _this.boxIframeHandle.width = (_this.sw - 2) + "px";
                }
            }, 50);
        }
    }

    function init(cssUrl) {
        if (cssUrl) {
            $loadCss(cssUrl);
        }
        that.data = {};
        that.data.zIndex = option.zindex;
        that.data.list = [];
        createCover();
        that.data.showCover = showCover;
        that.data.closeCover = closeCover;
        function createCover() {
            var c = document.createElement("div");
            c.id = "float_cover";
            c.style.display = "none";
            c.style.width = "0px";
            c.style.height = "0px";
            c.style.backgroundColor = "#000000";
            c.style.zIndex = 250;
            c.style.position = "fixed";
            c.style.hasLayout = -1;
            c.style.left = "0px";
            c.style.top = "0px";
            c.style.filter = "alpha(opacity=" + option.opacity * 100 + ");";
            c.style.opacity = option.opacity;
            document.body.appendChild(c);
            if ($isBrowser("ie6")) {
                c.innerHTML = '<iframe frameBorder="0" style="position:absolute;left:0;top:0;width:100%;z-index:-1;border:none;" id="float_cover_iframe"></iframe>';
                c.style.position = "absolute";
            }
            that.data.cover = $id("float_cover");
            that.data.coverIframe = $id("float_cover_iframe");
            that.data.coverIsShow = false;
            that.data.coverSize = [0, 0];
            c = null;
        }

        function showCover() {
            that.data.cover.style.display = "block";
            that.data.coverIsShow = true;
            keepCoverShow();
            that.data.coverTimer = setInterval(function() {
                keepCoverShow();
            }, 50);
            function keepCoverShow() {
                var _d = that.data;
                if (_d.coverIsShow) {
                    var ch = $getContentHeight(), wh = $getWindowHeight(), cw = $getContentWidth(), ww = $getWindowWidth(), ns = [wh, ww];
                    if ($isBrowser("ie6")) {
                        _d.cover.style.top = $getPageScrollHeight() + "px";
                    }
                    if (ns.toString() != that.data.coverSize.toString()) {
                        _d.coverSize = ns;
                        _d.cover.style.height = ns[0].toFixed(0) + "px";
                        _d.cover.style.width = ns[1].toFixed(0) + "px";
                        if (_d.coverIframe) {
                            _d.coverIframe.style.height = ns[0].toFixed(0) + "px";
                            _d.coverIframe.style.width = ns[1].toFixed(0) + "px";
                        }
                    }
                }
            }

        }

        function closeCover() {
            that.data.cover.style.display = "none";
            that.data.coverIsShow = false;
            clearInterval(that.data.coverTimer);
        }

    }
};

Auth.recalculateHeight = function(h) {
    var height;
    var browser;
    var ua = navigator.userAgent.toLowerCase();
    var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]   +)|)/.exec(ua) || [];
    browser = match[1] || "";
    if ( typeof h == "number") {
        height = h;
    } else {
        if (browser == 'mozilla') {
            height = document.documentElement.offsetHeight;
        } else if (browser == 'msie') {
            var body = document.body;
            height = document.body.scrollHeight + parseInt(body.currentStyle.marginTop) + parseInt(body.currentStyle.marginTop);
        } else {
            height = document.documentElement.scrollHeight;
        }
    }
    height = height < 1027 ? 1027 : height + 100;
    Auth.g.iframeHeight = height;
    Iframe.post({
        type : 'setHeight',
        height : height
    });
}
Auth.showMask = function() {
    Iframe.post({
        type : 'showMask'
    });
}
Auth.hideMask = function() {
    Iframe.post({
        type : 'hideMask'
    });
}
Auth.reloadParent = function() {
    Iframe.post({
        type : 'reload'
    });
}
Auth.tokenExpire = function() {
    Iframe.post({
        type : 'expire'
    });
}
function getParentSizeValue(callback) {
    Iframe.post({
        type : 'getSize',
        proxyUrl : 'https://crm1.dkf.qq.com/php/static/js/proxypage.20140501.html'
    });
    Iframe.on('size', callback);
};
function getParentPageScrollWidth() {
    return 0;
};
function getParentWindowHeight() {
    return $getWindowHeight();
};
function getParentWindowWidth() {
    return $getWindowWidth();
};
function keepPopUpFix() {
    if (Auth.g.wnd.addWnd) {
        Auth.g.wnd.addWnd.keepBoxFix();
    };
    if (Auth.g.wnd.addsuccWnd) {
        Auth.g.wnd.addsuccWnd.keepBoxFix();
    };
    if (Auth.g.wnd.modifyWnd) {
        Auth.g.wnd.modifyWnd.keepBoxFix();
    };
    if (Auth.g.wnd.modifyretWnd) {
        Auth.g.wnd.modifyretWnd.keepBoxFix();
    };
    if (Auth.g.wnd.helpWnd) {
        Auth.g.wnd.helpWnd.keepBoxFix();
    };
    if (Auth.g.wnd.maxEmployeeTipWnd){
        Auth.g.wnd.maxEmployeeTipWnd.keepBoxFix();
    }
    if (Auth.g.wnd.alertWnd ){
        Auth.g.wnd.alertWnd.keepBoxFix();
    }
}

document.domain = 'qq.com';
Auth.init();
window['BBC.mcs.mpAuth'] = '21343:20130916:20131017125453';
window['BBC.mcs.mpAuth.time'] && window['BBC.mcs.mpAuth.time'].push(new Date());
/*  |xGv00|ab68e797bdae8b225bb36acfc6bfd4d3 */