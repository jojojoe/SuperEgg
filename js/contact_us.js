"use strict";
window.onload = function () {
    createHeaderMenu();
    createEvent();
    createLanguage();
    changeMenu();
    activeInit();
    createFooter();
    getContent();
};
/**
 * 创建页面内容
 */
function getContent() {
    var str = "<div class=\"section-wrap\">\n    <h3>" + baseInfo.contactUs + "</h3>\n    <div class=\"logo\"><img src=\"./assets/se_img/icon_alpha.png\" alt=\"\"></div>\n    <h4>" + companyInfo.companyName + "</h4>\n    <p class=\"position\">" + companyInfo.contactUS.address + "</p>\n   <p class=\"email\">" + companyInfo.contactUS.officePhone + "</p>\n <p class=\"email\">" + companyInfo.contactUS.Email + "</p>\n    <div><img style=\"width: 100%\" src=\"./assets/img/address.png\" alt=\"\"></div>\n  </div>\n  ";
    // <h4 class="business-title">BUSINESS</h4>
    // <div class="business-email">marketing@ihandysoft.com</div>
    // <div class="business-email">advertise@ihandysoft.com</div>
    document.getElementById('content').innerHTML = str;
}
