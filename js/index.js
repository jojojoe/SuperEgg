"use strict";
///<reference path="./custom.d.ts" />
// 创建 swiper 组件
var mySwiper = null;
window.onload = function () {
    init();
};
/**
 * 页面初始化
 */
function init() {
    createHeaderMenu();
    getBannerData();
    initSwiper();
    getScroll();
    createEvent();
    getContainer();
    createLanguage();
    changeMenu();
    activeInit();
    // createFooter();
    createBaseDom();
    // createOurValues();
}
/**
 * 初始化轮播图的内容
 */
function getBannerData() {
    var str = '';
    bannerContentInfo.map(function (item) {
        str += "<div class=\"swiper-slide\">\n    " + item + "\n    </div>";
    });
    document.getElementsByClassName('swiper-wrapper')[0].innerHTML = str;
}
/**
 * 初始化 swiper 组件
 */
function initSwiper() {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            navigationShow: function () {
            }
        }
    });
    document.getElementsByClassName('swiper-button-prev')[0].addEventListener('click', function () {
        mySwiper.autoplay.stop();
    });
    document.getElementsByClassName('swiper-button-next')[0].addEventListener('click', function () {
        mySwiper.autoplay.stop();
    });
    for (var i = 0; i < document.getElementsByClassName('swiper-pagination-bullet').length; i++) {
        document.getElementsByClassName('swiper-pagination-bullet')[i].addEventListener('click', function () {
            mySwiper.autoplay.stop();
        });
    }
}
/**
 * 点击轮播图上的导航去到指定的锚点
 */
function getScroll() {
    document.getElementsByClassName('load-more')[0].addEventListener('click', function () {
        var ele = document.documentElement || document.body;
        var width = ele.clientWidth;
        var height = ele.clientHeight;
        var distance = height + (width >= 769 ? 56 : 0);
        animationScroll(ele, distance);
    });
}
/**
 * 滚动动画
 */
function animationScroll(ele, distance) {
    var realDistance = distance - ele.scrollTop;
    var lastNum = realDistance % 10;
    var totalNum = Math.floor(realDistance / 10);
    var index = 0;
    if (lastNum !== 0) {
        totalNum += 1;
    }
    var task = setInterval(function () {
        if (index < totalNum - 1) {
            ele.scrollTop += 10;
        }
        else if (index === totalNum - 1) {
            ele.scrollTop += lastNum === 0 ? 10 : lastNum;
        }
        else {
            clearInterval(task);
            return;
        }
        index++;
    }, 5);
}
/**
 * 创建产品展示列表
 */
function getContainer() {
    var str = '';
    companyInfo.products.map(function (item) {
        // str += "<div class=\"grid squ-grid-6 apps\">\n      <picture>\n        <source media=\"(max-width: 639px)\" srcset=\"./assets/img/" + item.imgName + "\">\n        <source media=\"(min-width: 640px)\" srcset=\"./assets/img/" + item.imgName + "\"><img src=\"./assets/img/" + item.imgName + "\" alt=\"\" class=\"app-bg\">\n      </picture>\n      <div class=\"app-detail\"><a href=\"./product.html?productName=" + item.id + "\">\n          <div class=\"app-logo\"><img src=\"./assets/img/" + item.iconName + "\" alt=\"\"></div>\n          <h4>" + item.h + "</h4>\n          <p>" + item.pIndex + "</p></a></div>\n    </div>";
        str += "<div class=\"grid squ-grid-6 apps\">\n      <picture>\n        <source media=\"(max-width: 639px)\" srcset=\"./assets/se_img/" + item.imgName + "\">\n        <source media=\"(min-width: 640px)\" srcset=\"./assets/se_img/" + item.imgName + "\"><img src=\"./assets/se_img/" + item.imgName + "\" alt=\"\" class=\"app-bg\">\n      </picture>\n      <div class=\"app-detail\"><a href=javascript:void(0); />\n        <h4>" + item.h + "</h4>\n  <p>" + item.pProduct + "</p>\n      <p>" + item.pIndex + "</p></a></div>\n    </div>";
    });
    // str += `<div class="grid squ-grid-6 apps">
    // <picture>
    //   <source media="(max-width: 639px)" srcset="./assets/img/more.png">
    //   <source media="(min-width: 640px)" srcset="./assets/img/more.png"><img src="./assets/img/more.png" alt="" class="app-bg">
    // </picture>`;
    document.getElementsByClassName('container')[0].innerHTML = str;
}
/**
 * 创建基础页面
 */
function createBaseDom() {
    document.getElementById('value').innerHTML = baseInfo.aboutUs.value;
    document.getElementById('product').innerHTML = baseInfo.product;
    document.getElementById('contactus_title').innerHTML = baseInfo.contactUs;
    document.getElementById('contactus_1').innerHTML = companyInfo.contactUS_Text.Email + ": " + companyInfo.contactUS.Email;
    // document.getElementById('contactus_2').innerHTML = companyInfo.contactUS_Text.address + ": " + companyInfo.contactUS.address;
;
}
/**
 * 我们的价值观
 */
function createOurValues() {
    var str = "";
    baseInfo.values.map(function (item, index) {
        str += "<div class=\"grid grid-3-no-mar play-card\">\n      <span style=\"color:" + COlOR[index] + "\">" + item.title + "</span>\n      <h4>" + item.subTitle + "</h4>\n      <p>" + item.content + "</p>\n    </div>";
    });
    document.getElementById('value-container').innerHTML = str;
}
