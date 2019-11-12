"use strict";
window.onload = function () {
    createDom();
    createHeaderMenu();
    init();
    createLanguage();
    createEvent();
    changeMenu();
    activeInit();
    createFooter();
    // createOurValues();
    createEnvironment();
};
function init() {
    if ($(window).width() <= 640) {
        var winW = $(window).width();
        $('.menu-wrap').navbarscroll();
        $(".menu-wrap").scrollFix(51);
        $(".menu-wrap").scrollspy({
            offset: 60
        });
    }
    else {
        //- $(".menu-wrap").scrollFix($('.menu-wrap')[0].offsetTop);
        $(".menu-wrap").scrollFix(258);
        $(".menu-wrap").scrollspy();
    }
    $(window).scroll();
}
/**
 * 创建页面内的对应内容
 */
function createDom() {
    // top title   <h1>Learn About Our Team &amp; Culture</h1>// + baseInfo.aboutUs.value 
    var topTitleInfo = "<div class=\"section-wrap\">" + "<h1>" + aboutUsInfo.topTitle + "</h1>" + "</div>";
    var ourValue =  "<h3 id=\"value-h3\">" + baseInfo.aboutUs.value  + "</h3>" + "<p>" + aboutUsInfo.ourValue + "</p>" ;
    // 公司介绍
    var introductionStr = "<h3>" + baseInfo.aboutUs.introduction + "</h3><p>" + companyInfo.companyIntro + "</p>";
    // 时间轴
    var timelineListStr = "<h3>" + baseInfo.aboutUs.timeline + "</h3>\n  <div class=\"timeline-list\"><div class=\"vertical-line\"></div>";
    companyInfo.history.map(function (item, index) {
        timelineListStr += "<div  class=\"year-list year-list-" + (index + 1) + " " + (index % 2 === 0 ? 'left' : 'right') + "\"><span class=\"dot\"></span><span class=\"year\">" + item.time + "</span>\n    <div class=\"year-detail\">\n      <p>" + item.content + "</p>\n    </div>\n  </div>";
    });
    timelineListStr += '</div>';
    // CEO 简介
    var ceoStr = "<h3>" + baseInfo.aboutUs.ceo + "</h3>\n  <div class=\"ceo-info\"><img src=\"./assets/img/avator.jpg\" class=\"avator\"><span class=\"name\">" + companyInfo.ceo.name + "</span><span class=\"position\">CEO of SuperEgg Tech</span></div>\n  <p>" + companyInfo.ceo.content + "</p>";
    var scrollNavStr = "";
    Object.keys(baseInfo.aboutUs).map(function (item, index) {
        scrollNavStr += "<li class=\"" + (index === 0 ? 'active' : '') + "\"><a href=\"#" + item + "\">" + baseInfo.aboutUs[item] + "</a></li>";
    });
    

    document.getElementById('banner').innerHTML = topTitleInfo;
    document.getElementById('introduction').innerHTML = introductionStr;
    document.getElementById('timeline').innerHTML = timelineListStr;
    // document.getElementById('ceo').innerHTML = ceoStr;
    document.getElementById('value-h3').innerHTML = ourValue;
    document.getElementById('value-container').innerHTML = baseInfo.aboutUs.value;
    document.getElementById('environment-h3').innerHTML = baseInfo.aboutUs.environment;
    document.getElementById('partners-h3').innerHTML = baseInfo.aboutUs.partners;
    document.getElementById('scrollNav-menu').innerHTML = scrollNavStr;
}
/**
 * 我们的价值观
 */
function createOurValues() {
    var str = "";
    baseInfo.values.map(function (item, index) {
        str += "<div class=\"grid grid-6-no-mar play-card\">\n      <span style=\"color:" + COlOR[index] + "\">" + item.title + "</span>\n      <h4>" + item.subTitle + "</h4>\n      <p>" + item.content + "</p>\n    </div>";
    });
    document.getElementById('value-container').innerHTML = str;
}
/**
 * 环境
 */
function createEnvironment() {
    var str = "";
    companyInfo.environment.map(function (item, index) {
        str += "<div class=\"grid grid-6-no-mar\">\n    <img src=\"" + item.imgUrl + "\" alt=\"\" srcset=\"" + item.smallImgUrl + "\">\n    <p>" + item.text + "</p>\n  </div>";
    });
    document.getElementById('environment-content').innerHTML = str;
}
