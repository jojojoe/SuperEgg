"use strict";
window.onload = function () {
    createHeaderMenu();
    createLanguage();
    createFooter();
    init();
};
function init() {
    // const productName = getQueryString("productName") || "planeAttack";
    var productName = getQueryString("productName") || "planeAttack";
    changeContent(productName);
}
function changeContent(productName) {
    var obj;
    var objText;
    var title;
    var download;
    companyInfo.products.map(function (item) {
        var name = item.id;
        if (productName === name) {
            obj = item.detail;
            objText = item.detailText;
            title = item.h;
            download = item.download;
        }
    });
    document.getElementsByTagName("title")[0].innerText = title;
    if (productName === 'voxel') {
        document.getElementById('app-container-3D').style.display = "block";
        document.getElementById('app-container-3D').getElementsByTagName('h2')[0].innerText = objText.appContainer3DH2;
        document.getElementById('app-container-3D').getElementsByTagName('h4')[0].innerText = objText.appContainer3DH4;
        document.getElementById('product-element-3D').setAttribute("src", obj.productElement3D);
        document.getElementById('product-element-1').style.width = "80%";
    }
    if (download.ios) {
        document.getElementById('ios-href').style.display = "inline-block";
        document.getElementById('ios').setAttribute("href", "https://itunes.apple.com/app/" + download.ios);
        if (!download.android) {
            document.getElementById('ios-href').style.margin = "0 auto";
        }
    }
    if (download.android) {
        document.getElementById('android-href').style.display = "inline-block";
        document.getElementById('android').setAttribute("href", "https://play.google.com/store/apps/details?id=" + download.android);
        if (!download.ios) {
            document.getElementById('android-href').style.margin = "0 auto";
        }
    }
    // if (productName !== 'paintly') {
    //     document.getElementById('product-element-4').setAttribute("src", obj.productElement4);
    //     document.getElementById('app-container-4').getElementsByTagName('h2')[0].innerText = objText.appContainer4H2;
    //     document.getElementById('app-container-4').getElementsByTagName('h4')[0].innerText = objText.appContainer4H4;
    // }
    else {
        document.getElementById('app-container-4').style.display = "none";
    }
    // 图片
    document.getElementById('banner').style.background = "url('" + obj.banner + "') center bottom no-repeat";
    document.getElementById('product-logo').setAttribute("src", obj.productLogo);
    document.getElementById('product-phone').setAttribute("src", obj.productPhone);
    document.getElementById('product-element-1').setAttribute("src", obj.productElement1);
    document.getElementById('product-element-2').setAttribute("src", obj.productElement2);
    document.getElementById('product-element-3').setAttribute("src", obj.productElement3);
    // 文本
    document.getElementById('banner').getElementsByTagName('h4')[0].innerText = objText.banner;
    document.getElementById('app-container-1').getElementsByTagName('h2')[0].innerText = objText.appContainer1H2;
    document.getElementById('app-container-2').getElementsByTagName('h2')[0].innerText = objText.appContainer2H2;
    document.getElementById('app-container-3').getElementsByTagName('h2')[0].innerText = objText.appContainer3H2;
    document.getElementById('app-container-1').getElementsByTagName('h4')[0].innerText = objText.appContainer1H4;
    document.getElementById('app-container-2').getElementsByTagName('h4')[0].innerText = objText.appContainer2H4;
    document.getElementById('app-container-3').getElementsByTagName('h4')[0].innerText = objText.appContainer3H4;
}
