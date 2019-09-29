"use strict";
window.onload = function () {
    createHeaderMenu();
    createEvent();
    createLanguage();
    changeMenu();
    getProducts();
    activeInit();
    createFooter();
};
/**
 * 获取产品列表
 */
function getProducts() {
    var str = '';
    companyInfo.products.map(function (item, index) {
        // 判断奇偶性
        var flag = (index % 2 === 0);
        // str += "<div class=\"container\"><href=\"" + ('./product.html?productName=' + item.id) + "\" class=\"app-link\">\n    <div class=\"grid grid-6 " + (flag ? 'right' : '') + "\">\n      <picture>\n        <source media=\"(max-width: 639px)\" srcset=\"./assets/img/" + item.imgName + "\">\n        <source media=\"(min-width: 640px)\" srcset=\"./assets/img/" + item.imgName + "\"><img src=\"./assets/img/" + item.imgName + "\" alt=\"\">\n      </picture>\n    </div></a>\n  <div class=\"grid squ-grid-6 apps\"><img src=\"./assets/img/" + item.iconName + "\" alt=\"\" class=\"app-logo\">\n    <h2>" + item.h + "</h2>\n    <p class=\"detail\">" + item.pProduct + "</p><a href=\"" + ('./product.html?productName=' + item.id) + "\" class=\"btn btn-dark\">VIEW MORE</a>\n  </div>\n</div>";
        str += "<div class=\"container\"><a href=\"" + 'javascript:void(0);' + "\" class=\"app-link\">\n    <div class=\"grid grid-6 " + (flag ? 'right' : '') + "\">\n      <picture>\n        <source media=\"(max-width: 639px)\" srcset=\"./assets/img/" + item.imgName + "\">\n        <source media=\"(min-width: 640px)\" srcset=\"./assets/img/" + item.imgName + "\"><img src=\"./assets/img/" + item.imgName + "\" alt=\"\">\n      </picture>\n    </div></a>\n  <div class=\"grid squ-grid-6 apps\"><img src=\"./assets/img/" + item.iconName + "\" alt=\"\" class=\"app-logo\">\n    <h2>" + item.h + "</h2>\n    <p class=\"detail\">" + item.pProduct + "</p><a href=\"" + 'javascript:void(0);' + "\" class=\"btn btn-dark\" style='display:none;'>VIEW MORE</a>\n  </div>\n</div>";

    });
    document.getElementById('section-wrap').innerHTML = str;
}
