"use strict";
window.onload = function () {
    createHeaderMenu();
    createEvent();
    createLanguage();
    changeMenu();
    activeInit();
    createFooter();
    createTitle();
    getJobs();
};
/**
 * 创建职位列表
 */
function getJobs() {
    var str = '';
    var GlobalStr='';
    var joinUs='Join US Now'
    var leftStr = '<div class="grid grid-6">';
    var rightstr = '<div class="grid grid-6">';
    if(sessionStorage.getItem('ENV')&&sessionStorage.getItem('ENV')=='EN'){
        GlobalStr="Global"
    }else{
       joinUs="现在加入" 
    }
    companyInfo.jobs.map(function (item, index) {
        if (index % 2 === 0) {
            leftStr += "<div class=\"card\">\n        <span class=\"position\">"+GlobalStr+"</span>\n        <h4>" + item.title + "</h4>\n        <ul>\n          <li>" + item.content + "</li>\n        </ul>\n   <a class='joinusbtn' href="+item.url+" target=_blank>"+joinUs+"</a>   </div>";
        }
        else {
            rightstr += "<div class=\"card\">\n        <span class=\"position\">"+GlobalStr+"</span>\n        <h4>" + item.title + "</h4>\n        <ul>\n          <li>" + item.content + "</li>\n        </ul>\n    <a class='joinusbtn' href="+item.url+" target=_blank>"+joinUs+"</a>  </div>";
        }
    });
    leftStr += "</div>";
    rightstr += "</div>";
    str = leftStr + rightstr;
    document.getElementById('careers-container').innerHTML = str;
}
/**
 * 创建标题
 */
function createTitle() {
    document.getElementById('careers-title').innerHTML = baseInfo.careers.title;
    document.getElementById('careers-sub-title').innerHTML = baseInfo.careers.subTItle;
    document.getElementById('careers-sub-title2').innerHTML = baseInfo.careers.subTItle2;
}
