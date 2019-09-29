"use strict";
// 根据 sessionStorage 获取当前用户所查看的语言版本
var localEnv = sessionStorage.getItem('ENV') || 'EN';
// 根据语言选择获取对应的公司详情信息
var companyInfo = localEnv === 'CN' ? COMPANY_INFO_CN : COMPANY_INFO_EN;
// 根据语言选择获取对应页面基本配置信息
var baseInfo = localEnv === 'CN' ? BASE_INFO_CN : BASE_INFO_EN;
/**
 * 创建语言切换功能按钮
 */
function createLanguage() {
    var localEnv = sessionStorage.getItem('ENV') || 'EN';
    var str = "<a href=\"javascript:void(0)\" class=\"env-change\"><span class=\"" + (localEnv === 'CN' ? 'active' : 'no-active') + "\">\u4E2D\u6587</span>/<span class=\"" + (localEnv === 'EN' ? 'active' : 'no-active') + "\">English</span></a>";
    document.getElementById('language').innerHTML = str;
    document.getElementsByClassName('env-change')[0].addEventListener("click", function () {
        var clickEnv = sessionStorage.getItem('ENV') || 'EN';
        sessionStorage.setItem('ENV', clickEnv === 'EN' ? 'CN' : 'EN');
        location.reload();
    });
}
/**
 * 对于手机屏幕大小的菜单按钮事件处理
 */
function createEvent() {
    document.getElementsByClassName('mobile-toggle-btn')[0].addEventListener('click', function (e) {
        if (this.classList.value.indexOf('close') > -1) {
            this.classList.remove('close');
            document.getElementsByClassName('header-menu')[0].classList.remove('close');
        }
        else {
            this.classList.add('close');
            document.getElementsByClassName('header-menu')[0].classList.add('close');
        }
    });
}
/**
 * 整理菜单样式
 */
function changeMenu() {
    window.onresize = function (e) {
        var width = (document.documentElement || document.body).clientWidth;
        if (width < 1024 && width >= 768) {
            document.getElementById('language').style.display = 'none';
        }
        else if (width < 768) {
            document.getElementById('language').style.display = 'block';
        }
        else {
            document.getElementById('language').style.display = 'inline-block';
        }
    };
}
/**
 * 创建顶部菜单栏
 */
function createHeaderMenu() {
    var str = '<ul>';
    baseInfo.menu.map(function (item) {
        str += "<li class=\"" + item.className + "\"><a href=\"" + item.href + "\">" + item.name + "</a><span class=\"line\"></span></li>";
    });
    str += "<li id=\"language\"></li></ul>";
    document.getElementsByClassName('header-menu')[0].innerHTML = str;
}
/**
 * 创建底部
 */
var year=new Date().getFullYear()
function createFooter() {
    var str = "<div class=\"section-wrap\">\n    <ul>\n      <li><a href=\"./careers.html\">" + baseInfo.joinUs + "</a></li>\n      <li><a href=\"./contact_us.html\">" + baseInfo.contactUs + "</a></li>\n      <p class=\"copyright\" style=\"margin: 4% auto 0\">Copyright \u00A9 2015-"+year+" Button Software. All Rights Reserved.</p>\n      <p class=\"copyright\" style=\"margin: 0 auto 4%\">"+ baseInfo.beian+"</p>\n    </ul>\n  </div>";
    document.getElementById('footer').innerHTML = str;
}
/**
 * 菜单选中处理
 */
function activeInit() {
    var path = window.location.pathname.split('/').reverse()[0].split('.')[0].replace('_', '-');
    var ele = document.getElementsByClassName(path);
    if (path && ele.length > 0) {
        var menuActive = document.getElementsByClassName(path)[0];
        menuActive.className += " active";
    }
}
/**
 * 截取路径内的参数
 * @param {*} name 参数名称
 */
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
