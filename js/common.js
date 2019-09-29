"use strict";
function activeInit() {
    debugger;
    var path = window.location.pathname.split('/').reverse()[0].split('.')[0].replace('_', '-');
    var ele = document.getElementsByClassName(path);
    if (path && ele.length > 0) {
        var menuActive = document.getElementsByClassName(path)[0];
        menuActive.className += " active";
    }
}
function other() {
    var mobileToggleBtn = document.getElementsByClassName('mobile-toggle-btn')[0];
    var headerMenu = document.getElementsByClassName('header-menu')[0];
    var mobileLoadMoreBtn = document.getElementsByClassName('mobile-load-more-btn')[0];
    var bannerDOM = document.getElementById('banner');
    var bannerH = bannerDOM ? bannerDOM.scrollHeight : 0;
    var EventUtil = {
        addHandler: function (element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            }
            else if (element.attachEvent) {
                element.attachEvent("on" + type, handler);
            }
            else {
                element["on" + type] = handler;
            }
        }
    };
    var DOMClass = {
        hasClass: function (obj, cls) {
            return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
        },
        addClass: function (obj, cls) {
            if (!this.hasClass(obj, cls))
                obj.className += " " + cls;
        },
        removeClass: function (obj, cls) {
            if (this.hasClass(obj, cls)) {
                var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
                obj.className = obj.className.replace(reg, " ").trim();
            }
        }
    };
    EventUtil.addHandler(mobileToggleBtn, 'click', function () {
        if (DOMClass.hasClass(mobileToggleBtn, 'close')) {
            DOMClass.removeClass(mobileToggleBtn, 'close');
            DOMClass.removeClass(headerMenu, 'close');
        }
        else {
            DOMClass.addClass(mobileToggleBtn, 'close');
            DOMClass.addClass(headerMenu, 'close');
        }
    });
}
