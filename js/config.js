"use strict";
// 轮播图内容
var BANNER_CONTENT_EN = [
    "<div class=\"banner banner-1\">\n      <div class=\"section-wrap\">\n        <h1>Focus On Overseas Marketing<br><span>Professional, Powerful & Innovative</span></h1>\n      </div>\n    </div>",
    "<div class=\"banner banner-2\">\n      <div class=\"section-wrap\">\n        <h1>Global Mobile Client<br><span>Super Egg integrated with top-quality global media resources and combined with professional ad serving technology to drive growth.</span></h1>\n              </div>\n    </div>",
    "<div class=\"banner banner-3\">\n      <div class=\"section-wrap\">\n        <h1>Top Quality Media Traffic<br><span>World-wide and accuracy market for products</span></h1>\n        </div>\n  </div>",
    "<div class=\"banner banner-4\">\n      <div class=\"section-wrap\">\n        <h1>Customized Grow Strategy<br><span>Customized creative advertising solution & design</span></h1>\n        </div>\n  </div>"
];
// 公司信息 - 英文
var COMPANY_INFO_EN = {
    companyName: "Xi'an SuperEgg Technology Co., Ltd.",
    companyIntro: "Xi'an SuperEgg Technology Co.,Ltd was founded in July 2019.",
    ceo: {
        name: '',
        content: ""
    },
    products: [
        {
            id: 'Advertise With Us',
            imgName: 'description1.jpg',
            iconName: '',
            href: 'javascript:void(0)',
            h: 'Advertise With Us',
            pIndex: '',
            pProduct: "We help you reach the right target users with the right media platforms. Planning with a reasonable delivery strategy and optimize to maximize your investment.  Scale up user acquisition with direct brand positioning strategies to ensure matched the effective information to audiences during the services.",
            achievement: [""],
            detail: {
                banner: "",
                productLogo: "",
                productPhone: "",
                productElement1: "",
                productElement2: "",
                productElement3: ""
            },
            detailText: {
                banner: '',
                appContainer1H2: '',
                appContainer1H4: '',
                appContainer2H2: '',
                appContainer2H4: '',
                appContainer3H2: '',
                appContainer3H4: ''
            },
            download: {
                ios: '',
                android: ''
            }
        },
        {
            id: 'Innovation Design',
            imgName: 'description2.jpg',
            iconName: '',
            href: 'javascript:void(0)',
            h: 'Innovation Design',
            pIndex: '',
            pProduct: 'The professional design team create the picture or video with dedicated visual effects and creative advertising design. Consider with different cultural, region and user features that make sure all impression achieve the best results.',
            achievement: "",
            detail: {
                banner: "",
                productLogo: "",
                productPhone: "",
                productElement1: "",
                productElement2: "",
                productElement3: "",
                productElement4: "",
                productElement3D: "",
            },
            detailText: {
                banner: '',
                appContainer1H2: '',
                appContainer1H4: '',
                appContainer2H2: '',
                appContainer2H4: '',
                appContainer3H2: '',
                appContainer3H4: '',
                appContainer4H2: '',
                appContainer4H4: '',
                appContainer3DH2: '',
                appContainer3DH4: '',
            },
            download: {
                ios: '',
                android: ''
            }
        },
        {
            id: 'Account Management',
            imgName: 'description3.jpg',
            iconName: '',
            href: 'javascript:void(0)',
            h: 'Account Management',
            pIndex: '',
            pProduct: "Provide you with fast and safe Google localization account service. Our professional supporting team systematically solve you with any account opening related issues.",
            achievement: [""],
            detail: {
                banner: "",
                productLogo: "",
                productPhone: "",
                productElement1: "",
                productElement2: "",
                productElement3: "",
                productElement4: ""
            },
            detailText: {
                banner: '',
                appContainer1H2: '',
                appContainer1H4: '',
                appContainer2H2: '',
                appContainer2H4: '',
                appContainer3H2: '',
                appContainer3H4: '',
                appContainer4H2: '',
                appContainer4H4: ''
            },
            download: {
                ios: '',
                android: ''
            }
        },
        {
            id: 'Global Marketing Growth',
            imgName: 'description4.jpg',
            iconName: '',
            href: 'javascript:void(0)',
            h: 'Global Marketing Growth',
            pIndex: '',
            pProduct: "Super Egg provides powerful performance marketing solution that help growth and set up your business success globally.",
            achievement: [""],
            detail: {
                banner: "",
                productLogo: "",
                productPhone: "",
                productElement1: "",
                productElement2: "",
                productElement3: "",
                productElement4: ""
            },
            detailText: {
                banner: '',
                appContainer1H2: '',
                appContainer1H4: '',
                appContainer2H2: '',
                appContainer2H4: '',
                appContainer3H2: '',
                appContainer3H4: '',
                appContainer4H2: '',
                appContainer4H4: ''
            },
            download: {
                ios: '',
                android: ''
            }
        }
    ],
    jobs: [
        {
            title: 'iOS engineer',
            content: 'At least 3 years of development experienceProfessional development for iOS,be proficient in Objective-C or Swift',
            url:"http://www.baidu.com"
        },
        {
            title: 'Android engineer',
            content: 'At least 3 years of development experienceProfessional development for Android',
            url:"http://www.baidu.com"
        },
        {
            title: 'Android engineer',
            content: 'At least 3 years of development experienceProfessional development for Android',
            url:"http://www.baidu.com"
        },
        {
            title: 'Android engineer',
            content: 'At least 3 years of development experienceProfessional development for Android',
            url:"http://www.baidu.com"
        },
        {
            title: 'Android engineer',
            content: 'At least 3 years of development experienceProfessional development for Android',
            url:"http://www.baidu.com"
        },
        {
            title: 'Android engineer',
            content: 'At least 3 years of development experienceProfessional development for Android',
            url:"http://www.baidu.com"
        }
    ],
    contactUS: {
        address: "陕西省西安市浐灞生态区欧亚大道1188号企业孵化中心B573",
        officePhone: "86-15829881727",
        Email: "service@supereggtech.cn"
    },
    contactUS_Text: {
        address: "Address",
        officePhone: "Phone",
        Email: "Email"
    },
    history: [
       {
            time: "May 2014",
            content: "Became self-employed"
        },
        {
            time: "Jan 2015",
            content: "Established the SuperEgg Tech"
        },
        {
            time: "Nov 2018",
            content: "Filto debuted at the second place on the overall US apps chart and first place on the photo&video chart"
        },
        {
            time: "2019.3",
            content: "Total cumulative downloads exceed one billion"
        }
    ],
    beliefs: ['Proactive attitude', 'The courage to take responsibility', 'Never forget why you started and be grateful'],
    environment: [
        {
            imgUrl: '',
            smallImgUrl: '',
            text: 'Clean and comfortable office environment'
        },
        {
            imgUrl: '',
            smallImgUrl: '',
            text: 'Open and relaxed leisure space'
        },
        {
            imgUrl: '',
            smallImgUrl: '',
            text: 'Colorful club activities'
        },
        {
            imgUrl: '',
            smallImgUrl: '',
            text: 'Daily afternoon tea and festival activities'
        },
        {
            imgUrl: '',
            smallImgUrl: '',
            text: 'We provide a variety of drinks'
        },
        {
            imgUrl: '',
            smallImgUrl: '',
            text: 'Our diverse products'
        }
    ]
};

// 首页Title 信息
// 轮播图内容
var BANNER_CONTENT_CN = [
    "<div class=\"banner banner-1\">\n      <div class=\"section-wrap\">\n        <h1>专注海外营销<br><span>让广告投放得更加精准</span></h1>\n      </div>\n    </div>",
    "<div class=\"banner banner-2\">\n      <div class=\"section-wrap\">\n        <h1>专业的投放技术和创意方案<br><span>为广告主扩大全球品牌影响和用户获取</span></h1>\n              </div>\n    </div>",
    "<div class=\"banner banner-3\">\n      <div class=\"section-wrap\">\n        <h1>顶级优质流量<br><span>为产品获得更广阔的市场</span></h1>\n          </div>\n  </div>",
    "<div class=\"banner banner-4\">\n      <div class=\"section-wrap\">\n        <h1>定制化投放策略<br><span>定制化创意广告设计</span></h1>\n         </div>\n  </div>"
];

var ABOUT_US_INFO_EN = {
    topTitle : '资深团队  专业高效',
    ourValue : '全心全意  做到最好'
};

var ABOUT_US_INFO_CN = {
    topTitle : '资深团队  专业高效',
    ourValue : '全心全意  做到最好'
};




// 公司信息
var COMPANY_INFO_CN = {
    companyName: '西安超巨蛋网络科技有限公司',
    companyIntro: "西安超巨蛋网络科技有限公司, 成立于2019年7月",
    ceo: {
        name: '',
        content: ""
    },
    products: [
        {
            id: '广告投放',
            imgName: 'description1.jpg',
            iconName: '',
            href: 'javascript:void(0)',
            h: '广告投放',
            pIndex: '',
            pProduct: "帮助客户在指定媒体平台获取目标用户, 为您架设合理的投放逻辑、展现方式、渠道、出价策略以及再营销的品牌定位，确保服务期间的有效信息触达受众。",
            achievement: [""],
            detail: {
                banner: "",
                productLogo: "",
                productPhone: "",
                productElement1: "",
                productElement2: "",
                productElement3: ""
            },
            detailText: {
                banner: '',
                appContainer1H2: '',
                appContainer1H4: '',
                appContainer2H2: '',
                appContainer2H4: '',
                appContainer3H2: '',
                appContainer3H4: ''
            },
            download: {
                ios: '',
                android: ''
            }
        },
        {
            id: '创意设计',
            imgName: 'description2.jpg',
            iconName: '',
            href: 'javascript:void(0)',
            h: '创意设计',
            pIndex: '',
            pProduct: '为产品提供不同媒体环境、用户特征和地域文化的创意设计及视频, 专业设计师精心打造, 让您不用再为图片的文字设计绞尽脑汁。',
            achievement: "",
            detail: {
                banner: "",
                productLogo: "",
                productPhone: "",
                productElement1: "",
                productElement2: "",
                productElement3: "",
                productElement4: "",
                productElement3D: "",
            },
            detailText: {
                banner: '',
                appContainer1H2: '',
                appContainer1H4: '',
                appContainer2H2: '',
                appContainer2H4: '',
                appContainer3H2: '',
                appContainer3H4: '',
                appContainer4H2: '',
                appContainer4H4: '',
                appContainer3DH2: '',
                appContainer3DH4: '',
            },
            download: {
                ios: '',
                android: ''
            }
        },
        {
            id: '账户管理',
            imgName: 'description3.jpg',
            iconName: '',
            href: 'javascript:void(0)',
            h: '账户管理',
            pIndex: '',
            pProduct: "为客户提供顶级流量平台Google本地化快速开户支持, 不再为开户而烦恼，系统化解决您的开户问题",
            achievement: [""],
            detail: {
                banner: "",
                productLogo: "",
                productPhone: "",
                productElement1: "",
                productElement2: "",
                productElement3: "",
                productElement4: ""
            },
            detailText: {
                banner: '',
                appContainer1H2: '',
                appContainer1H4: '',
                appContainer2H2: '',
                appContainer2H4: '',
                appContainer3H2: '',
                appContainer3H4: '',
                appContainer4H2: '',
                appContainer4H4: ''
            },
            download: {
                ios: '',
                android: ''
            }
        },
        {
            id: '专注海外营销',
            imgName: 'description4.jpg',
            iconName: '',
            href: 'javascript:void(0)',
            h: '专注海外营销',
            pIndex: '',
            pProduct: "精准营销、整合全球优质媒体资源, 让广告投放得更加精准",
            achievement: [""],
            detail: {
                banner: "",
                productLogo: "",
                productPhone: "",
                productElement1: "",
                productElement2: "",
                productElement3: "",
                productElement4: ""
            },
            detailText: {
                banner: '',
                appContainer1H2: '',
                appContainer1H4: '',
                appContainer2H2: '',
                appContainer2H4: '',
                appContainer3H2: '',
                appContainer3H4: '',
                appContainer4H2: '',
                appContainer4H4: ''
            },
            download: {
                ios: '',
                android: ''
            }
        }
    ],
    jobs: [
        {
            title: 'iOS工程师',
            content: ' iOS开发工程师：3年以上iOS开发经验，熟练掌握Objective-C/Swift，对图像或音视频处理有一定经验或了解。',
            url:"http://www.baidu.com"
        },
        {
            title: 'Android工程师',
            content: '3年以上Android开发经验，精通Android开发平台及框架原理，可以独立承担开发工作。',
            url:"http://www.baidu.com"
        },
        {
            title: '产品经理',
            content: '计算机、机器学习、统计学、应用数学或相关工程领域，本科以及以上学历，3年以上相关工作经验，熟练掌握图像基础算法。',
            url:"http://www.baidu.com"
        },
        {
            title: 'AI工程师',
            content: '计算机、机器学习、统计学、应用数学或相关工程领域，本科以及以上学历，3年以上相关工作经验，熟练掌握图像基础算法。',
            url:"http://www.baidu.com"
        },
        {
            title: 'UI设计师',
            content: '本科及以上学历，设计／美术相关专业，3年以上UI设计经验。',
            url:"http://www.baidu.com"
        },
        {
            title: '海外运营',
            content: '本科及以上学历，2年以上相关工作经验，优秀的英文读写译能力和数据分析能力。',
            url:"http://www.baidu.com"
        }
    ],
    contactUS: {
        address: "陕西省西安市浐灞生态区欧亚大道1188号企业孵化中心B573",
        officePhone: "86-15829881727",
        Email: "service@supereggtech.cn"
    },
    contactUS_Text: {
        address: "地址",
        officePhone: "电话",
        Email: "邮箱"
    },
    history: [
        {
            time: "",
            content: ""
        },
        {
            time: "2019年7月",
            content: "西安超巨蛋网络科技正式成立"
        },
        {
            time: "",
            content: ""
        },
        {
            time: "",
            content: ""
        }
    ],
    beliefs: ['积极','主动', '认真', '负责'],
    environment: [
         {
            imgUrl: '',
            smallImgUrl: '',
            text: '整洁舒适的办公环境'
        },
        {
            imgUrl: '',
            smallImgUrl: '',
            text: '开放轻松的休闲空间'
        },
        {
            imgUrl: '',
            smallImgUrl: '',
            text: '丰富多彩的俱乐部活动'
        },
        {
            imgUrl: '',
            smallImgUrl: '',
            text: '每日下午茶以及节日活动'
        },
        {
            imgUrl: '',
            smallImgUrl: '',
            text: '茶水间提供了各类休闲饮品'
        },
        {
            imgUrl: '',
            smallImgUrl: '',
            text: '我们多种多样的产品'
        }
    ]
};
// 基本页面配置 - 英文
var BASE_INFO_EN = {
    menu: [
        // {
        //     name: 'About Us',
        //     href: './about_us.html',
        //     className: 'about-us'
        // },
        // {
        //     name: 'Our Products',
        //     href: './our_products.html',
        //     className: 'our-products'
        // },
        // {
        //     name: 'Careers',
        //     href: './careers.html',
        //     className: 'careers'
        // },
        // {
        //     name: 'Contact Us',
        //     href: './contact_us.html',
        //     className: 'contact-us'
        // }
    ],
    joinUs: 'Join Us',
    contactUs: 'Contact Us',
    businessSolutions: 'Business Solutions',
    product: 'What We Can Do',
    aboutUs: {
        introduction: 'Introduction',
        timeline: 'Our Mile Stone',
        ceo: 'Our CEO',
        value: 'Our Values',
        environment: 'Environment',
        partners: 'Partners'
    },
    careers: {
        title: 'Open Positions',
        subTItle: 'At SuperEgg Tech, the world’s most talented engineers, designers, and thought leaders are shaping the future of Internet.',
        subTItle2:'Contanct US By <a href="mailto:hr@gpower.co">Send Your Profile</a>'
    },
    values: [
        {
            title: 'T',
            subTitle: 'Things',
            content: 'Based On People and Firmed On Things'
        },
        {
            title: 'A',
            subTitle: 'Attitude',
            content: 'Based On Positive Attitude'
        },
        {
            title: 'P',
            subTitle: 'Perseverance',
            content: 'Based On Time ande Firmed On Perseverance'
        },
        {
            title: 'Q',
            subTitle: 'Quality',
            content: 'Based On Top-Quality Products'
        }
    ]
};
// 基本页面配置 
var BASE_INFO_CN = {
    menu: [
        // {
        //     name: '关于我们',
        //     href: './about_us.html',
        //     className: 'about-us'
        // },
        // {
        //     name: '产品介绍',
        //     href: './our_products.html',
        //     className: 'our-products'
        // },
        // {
        //     name: '加入我们',
        //     href: './careers.html',
        //     className: 'careers'
        // },
        // {
        //     name: '联系我们',
        //     href: './contact_us.html',
        //     className: 'contact-us'
        // }
    ],
    joinUs: '加入我们',
    contactUs: '联系我们',
    businessSolutions: '解决方案',
    product: '我们能做什么',
    beian:'',
    aboutUs: {
        introduction: '公司介绍',
        timeline: '发展历程',
        // ceo: 'CEO的故事',
        value: '我们的理念',
        environment: '公司环境',
        partners: '合作伙伴'
    },
    careers: {
        title: '虚位以待',
        subTItle: '世界上最有才华的工程师、设计师和思想领袖正在 纽扣软件 塑造互联网的未来。',
        subTItle2:'欢迎致信<a href="mailto:hr@gpower.co">简历投递邮箱</a>'
    },
    values: [
        {
            title: 'T',
            subTitle: 'Things',
            content: '立足于人，坚定于事'
        },
        {
            title: 'A',
            subTitle: 'Attitude',
            content: '立足于积极主动的态度'
        },
        {
            title: 'P',
            subTitle: 'Perseverance',
            content: '立足于时，坚定于恒'
        },
        {
            title: 'Q',
            subTitle: 'Quality',
            content: '立足于最优质的产品'
        }
    ]
};
// 价值观文字配色
var COlOR = ["#ff9ba7", '#ffb260', '#6cd8c0', '#51b3ff'];
// 语言环境
var env = 'EN';
