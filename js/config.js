"use strict";
// 轮播图内容
var BANNER_CONTENT = [
    "<div class=\"banner banner-1\">\n      <div class=\"section-wrap\">\n        <h1>Our Apps<br><span>Professional, Powerful & Innovative</span></h1>\n      </div>\n    </div>",
    "<div class=\"banner banner-2\">\n      <div class=\"section-wrap\">\n        <h1>Global Mobile Users<br><span>Over 400 million downloads and over 60 million active users worldwide</span></h1>\n        <a href=\"./html/about_us.html\" class=\"btn btn-light\">LEARN MORE</a>\n      </div>\n    </div>",
    "<div class=\"banner banner-3\">\n    <div class=\"section-wrap\">\n      <h1>Many of the most popular apps<br><span>Top-Ranked & Most-Viewed Apps</span></h1>\n      <a href=\"./html/our_products.html\" class=\"btn btn-light\">LEARN MORE</a>\n    </div>\n  </div>",
     "<div class=\"banner banner-3\">\n    <div class=\"section-wrap\">\n      <h1>Business Development<br><span>Apple ASM official website home page recommendation</span></h1>\n      <a href=\"./html/our_products.html\" class=\"btn btn-light\">LEARN MORE</a>\n    </div>\n  </div>"
];
// 公司信息 - 英文
var COMPANY_INFO_EN = {
    companyName: "Xi'an Button  Software Technology Co., Ltd.",
    companyIntro: "Xi'an Button Software Technology Co.,Ltd was founded in January 2015. Our products are facing global users and available in 193 countries. We are focusing on mobile image/video editing apps, independent research, development and design. Since establishment, our products have accumulated over 100 million downloads, making us one of the most downloaded mobile application developers in China. Our products rank top in the App Store and Google Play, and we are the top partner of Applovin, Vungle and Ironsource.",
    ceo: {
        name: 'Eric Ge',
        content: "Eric Ge is one of these leading people expanding China\u2019s mobile internet business to overseas. He was graduated from Northwest A&F University with Computer Science major at 2007. He started a business from leaving a well-paid job at an US-funded Listed Company. He established Xi\u2019an Button Software Technology Co., Ltd at 2015, and invested Xi'an Tapque Software Technology Co., Ltd as CEO at 2018. Under Eric\u2019s leadership and management, Tapque became an International mobile software company, established long-term strategic partnerships with top global high-tech companies like Apple, Google, Facebook, Unity, Yeahmobi and more."
    },
    products: [
        {
            id: 'Filto',
            imgName: 'filto.png',
            iconName: 'filto-icon.png',
            href: 'javascript:void(0)',
            h: 'Filto',
            pIndex: '',
            pProduct: "Filto is a video editing app with a variety of video filters and cool effects! Whether it's classic aesthetic style or fashion cool style, Filto can always help you. Filto was officially launched in November 2018 and it won the second place in the US total application list and the first place in the US photo & video application list. Characterized by the most IN video effects, massive stylish filters, customizing video type and one-tap save & share, it will satisfy your dream of making movies.",
            achievement: ["Filto debuted at the second place on the overall US apps chart and first place on the photo&video chart"],
            detail: {
                banner: "./assets/img/paintly/bg.png",
                productLogo: "./assets/img/paintly/logo.png",
                productPhone: "./assets/img/paintly/phone.png",
                productElement1: "./assets/img/paintly/element-1.png",
                productElement2: "./assets/img/paintly/element-2.png",
                productElement3: "./assets/img/paintly/element-3.png"
            },
            detailText: {
                banner: 'Wonderful digital art coloring design',
                appContainer1H2: 'Cool Effects',
                appContainer1H4: 'Make your video marvelous instantly',
                appContainer2H2: 'Stylish Filters',
                appContainer2H4: 'Easily define your style',
                appContainer3H2: 'Trending Stickers',
                appContainer3H4: 'Record your mood with fancy stickers'
            },
            download: {
                ios: 'id1386620073',
                android: ''
            }
        },
        {
            id: 'Pinso',
            imgName: 'pinso.png',
            iconName: 'pinso-icon.png',
            href: 'javascript:void(0)',
            h: 'Pinso ',
            pIndex: '',
            pProduct: "Pinso is committed to making beautiful posters, graphic and text effects for people who have no design basis. It includes a variety of professional editing tools and poster templates created by professional designers. The product was released in May 2018 and widely acclaimed as soon as it was launched. The most popular elements, rich text styles and graphics are combined into a complete and outstanding artwork, letting you don't have to rack your brains for the text design of pictures anymore.",
            achievement: "2012 \u2013 ASO Top 1 & US\u2019s App Store Entertainment Games \u2013 Top 4",
            detail: {
                banner: "./assets/img/voxel/bg.png",
                productLogo: "./assets/img/voxel/logo.png",
                productPhone: "./assets/img/voxel/phone.png",
                productElement1: "./assets/img/voxel/element-1.png",
                productElement2: "./assets/img/voxel/element-2.png",
                productElement3: "./assets/img/voxel/element-3.png",
                productElement4: "./assets/img/voxel/element-4.png",
                productElement3D: "./assets/img/voxel/element-3D.jpg",
            },
            detailText: {
                banner: 'Tons of templates to color',
                appContainer1H2: 'Various Templates',
                appContainer1H4: 'Various splendid templates for your creation',
                appContainer2H2: 'Easy to Use',
                appContainer2H4: 'Complete your poster creation in just a few steps',
                appContainer3H2: 'Coloring tools',
                appContainer3H4: 'Massive Materials',
                appContainer4H2: 'Share your masterpieces with your friends',
                appContainer4H4: 'Massive fonts, graphics, backgrounds and so on are available',
                appContainer3DH2: '',
                appContainer3DH4: '',
            },
            download: {
                ios: 'id1439415992',
                android: ''
            }
        },
        {
            id: 'Piczoo2',
            imgName: 'piczoo2.png',
            iconName: 'piczoo2-icon.png',
            href: 'javascript:void(0)',
            h: 'Piczoo2',
            pIndex: '',
            pProduct: "Piczoo2 is derived from Piczoo and focused more on filter-editing. Our goal is to make Piccoo2 a top-ranking filter-editing app, which allows creators to quickly and easily design high quality photos and videos. This product was officially launched in April 2019 and it won the first place in both the US total application list and US photo & video application list.",
            achievement: ["2019/01/25 \u2013 US\u2019s App Store Board Games \u2013 Top 2 Rank"],
            detail: {
                banner: "./assets/img/polyPuzzle/bg.png",
                productLogo: "./assets/img/polyPuzzle/logo.png",
                productPhone: "./assets/img/polyPuzzle/phone.png",
                productElement1: "./assets/img/polyPuzzle/element-1.jpg",
                productElement2: "./assets/img/polyPuzzle/element-2.png",
                productElement3: "./assets/img/polyPuzzle/element-3.png",
                productElement4: "./assets/img/polyPuzzle/element-4.png"
            },
            detailText: {
                banner: 'Innovative Game Experiences',
                appContainer1H2: 'Master Filters',
                appContainer1H4: 'Make your photos and videos more popular',
                appContainer2H2: 'Various Templates',
                appContainer2H4: 'Professional Adjustment Tools',
                appContainer3H2: 'Useful Items & Fantastic Effects',
                appContainer3H4: 'Easily enhance the visual aesthetics of photos and videos',
                appContainer4H2: 'Freestyle Collage',
                appContainer4H4: 'Mix up your photos to create outstanding layouts'
            },
            download: {
                ios: 'id1448828098',
                android: ''
            }
        },
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
        address: "Mo'er Center Tower #B 703&704, Fenghui S Rd, Hi-tech District, XI'AN, Shaanxi Province, China, 710065",
        officePhone: "029-89589559",
        Email: "buttonsoftware@gpower.co"
    },
    history: [
       {
            time: "May 2014",
            content: "Became self-employed"
        },
        {
            time: "Jan 2015",
            content: "Established the button software"
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
            imgUrl: './assets/img/env/clss.png',
            smallImgUrl: './assets/img/env/clss@1.5x.png 1.5x',
            text: 'Clean and comfortable office environment'
        },
        {
            imgUrl: './assets/img/env/env.png',
            smallImgUrl: './assets/img/env@1.5x.png 1.5x',
            text: 'Open and relaxed leisure space'
        },
        {
            imgUrl: './assets/img/env/coff.png',
            smallImgUrl: './assets/img/env/coff@1.5x.png 1.5x',
            text: 'Colorful club activities'
        },
        {
            imgUrl: './assets/img/env/fru.png',
            smallImgUrl: './assets/img/env/fru@1.5x.png 1.5x',
            text: 'Daily afternoon tea and festival activities'
        },
        {
            imgUrl: './assets/img/env/5.png',
            smallImgUrl: './assets/img/env/5.png 1.5x',
            text: 'We provide a variety of drinks'
        },
        {
            imgUrl: './assets/img/env/6.png',
            smallImgUrl: './assets/img/env/6.png 1.5x',
            text: 'Our diverse products'
        }
    ]
};
// 公司信息
var COMPANY_INFO_CN = {
    companyName: '西安纽扣软件科技有限公司',
    companyIntro: "\u897f\u5b89\u7ebd\u6263\u8f6f\u4ef6\u79d1\u6280\u6709\u9650\u516c\u53f8\uff08xi'an button software technology co.,ltd\uff09\u6210\u7acb\u4e8e2015\u5e741\u6708\u3002\u6211\u4eec\u9762\u5411\u5168\u7403\u7528\u6237\uff0c\u4ea7\u54c1\u904d\u5e03193\u4e2a\u56fd\u5bb6\uff0c\u4e13\u6ce8\u4e8e\u79fb\u52a8\u56fe\u50cf\u5de5\u5177\u7c7b\u4ea7\u54c1\uff0c\u81ea\u4e3b\u7814\u53d1\u8bbe\u8ba1\uff0c\u81ea\u6210\u7acb\u81f3\u4eca\u4ea7\u54c1\u7d2f\u8ba1\u4e0b\u8f7d\u91cf\u8fc7\u4ebf\uff0c\u662f\u4e2d\u56fd\u4e0b\u8f7d\u91cf\u6700\u5927\u7684\u79fb\u52a8\u5e94\u7528\u5f00\u53d1\u5546\u4e4b\u4e00\u3002\u65d7\u4e0b\u4ea7\u54c1\u5728app store\u548cgoogle play\u6392\u540d\u524d\u5217\uff0c\u662fapplovin, vungle, ironsource\u7684\u9876\u7ea7\u5408\u4f5c\u4f19\u4f34\u3002",
    ceo: {
        name: '葛贤钰',
        content: "Eric Ge是海外拓展中国移动互联网业务的领军人物之一。2007年毕业于西北农林科技大学计算机专业，2014年辞去美资上市公司待遇优厚的工作，开始创业。2015年正式创办公司——纽扣软件，现在，纽扣软件已成为一家国际移动互联网软件公司，“用产品诠释态度，用专业给予感动”是我们一直不变的使命。"
    },
    products: [
        {
            id: 'Filto',
            imgName: 'filto.png',
            iconName: 'filto-icon.png',
            href: 'javascript:void(0)',
            h: 'Filto',
            pIndex: '',
            pProduct: "Filto是一款拥有多种视频滤镜，超酷特效的视频编辑APP！无论是文艺高逼格风格，还是潮流古典高级风格，Filto都能帮您实现。此款产品于2018年11月正式上线，上线当天获得位于美国应用总榜第二、图像单榜第一的好成绩。其独特之处在于Filto有最IN精致视频效果，超多美颜、美景滤镜，还可以自定义视频样式，简单一键存储、分享，分分钟满足您拍大片的梦想。",
            achievement: ["上线当天获得位于美国应用总榜第二、图像单榜第一"],
            detail: {
                banner: "./assets/img/paintly/bg.png",
                productLogo: "./assets/img/paintly/logo.png",
                productPhone: "./assets/img/paintly/phone.png",
                productElement1: "./assets/img/paintly/element-1.png",
                productElement2: "./assets/img/paintly/element-2.png",
                productElement3: "./assets/img/paintly/element-3.png"
            },
            detailText: {
                banner: '美好的数字艺术涂色制造者',
                appContainer1H2: '潮酷特效',
                appContainer1H4: '让你的视频秒变大片',
                appContainer2H2: '高级感滤镜',
                appContainer2H4: '轻松定义你的风格',
                appContainer3H2: '潮流贴纸',
                appContainer3H4: '用贴纸记录你的心情'
            },
            download: {
                ios: 'id1439415992',
                android: ''
            }
        },
        {
            id: 'Pinso',
            imgName: 'pinso.png',
            iconName: 'pinso-icon.png',
            href: 'javascript:void(0)',
            h: 'Pinso',
            pIndex: '',
            pProduct: "Pinso致力于让普通没有设计基础的人也能制作出漂亮的海报和图文效果，内含多种专业的编辑工具以及专业设计师精心打造的海报模板。产品于2018年5月发布第一版，一经推出就广受好评。随时更新最流行的元素，丰富的文字样式，与图片、图形等共同组合成一个完整出众的作品，让您不用再为图片的文字设计绞尽脑汁。",
            achievement: "2017\u5E7412\u6708\u53D1\u5E03\uFF0C\u53D6\u5F97\u4E86\u5173\u952E\u8BCD\u70ED\u641CTop1\u548C\u7F8E\u56FD\u5A31\u4E50Top4",
            detail: {
                banner: "./assets/img/voxel/bg.png",
                productLogo: "./assets/img/voxel/logo.png",
                productPhone: "./assets/img/voxel/phone.png",
                productElement1: "./assets/img/voxel/element-1.png",
                productElement2: "./assets/img/voxel/element-2.png",
                productElement3: "./assets/img/voxel/element-3.png",
                productElement4: "./assets/img/voxel/element-4.png",
                productElement3D: "./assets/img/voxel/element-3D.jpg",
            },
            detailText: {
                banner: '海量模板供你选择',
                appContainer1H2: '精选模版',
                appContainer1H4: '海量模版满足您的创作梦想',
                appContainer2H2: '操作简单',
                appContainer2H4: '只需几步即可完成海报创作',
                appContainer3H2: '海量素材',
                appContainer3H4: '海量字体，图案，背景等可供选择',
                appContainer4H2: '',
                appContainer4H4: '',
                appContainer3DH2: '',
                appContainer3DH4: '',
            },
            download: {
                ios: 'id1386620073',
                android: ''
            }
        },
        {
            id: 'Piczoo2',
            imgName: 'piczoo2.png',
            iconName: 'piczoo2-icon.png',
            href: 'javascript:void(0)',
            h: 'Piczoo2',
            pIndex: '',
            pProduct: "Piczoo2是由Piczoo衍生而来的，Piczoo2更加专注于滤镜调色编辑，我们的目标是把Piczoo2打造成一个大师级别的滤镜调色编辑APP，方便创作者快速简单设计出高质量的照片和视频。此款产品于2019年4月正式上线，上线第一天就创下了美国应用总榜第一和美国图像单榜第一的记录。",
            achievement: ["上线第一天就创下了美国应用总榜第一和美国图像单榜第一的记录。"],
            detail: {
                banner: "./assets/img/polyPuzzle/bg.png",
                productLogo: "./assets/img/polyPuzzle/logo.png",
                productPhone: "./assets/img/polyPuzzle/phone.png",
                productElement1: "./assets/img/polyPuzzle/element-1.jpg",
                productElement2: "./assets/img/polyPuzzle/element-2.png",
                productElement3: "./assets/img/polyPuzzle/element-3.png",
                productElement4: "./assets/img/polyPuzzle/element-4.png"
            },
            detailText: {
                banner: '创新的游戏体验',
                appContainer1H2: '大师级滤镜',
                appContainer1H4: '让你的照片和视频更受欢迎',
                appContainer2H2: '多种多样的模版',
                appContainer2H4: '专业调节工具',
                appContainer3H2: '轻松提升图片视觉美感',
                appContainer3H4: '个性化拼图',
                appContainer4H2: '快速组合照片，让拼贴更自由',
                appContainer4H4: ''
            },
            download: {
                ios: 'id1448828098',
                android: ''
            }
        },


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
        address: "陕西省西安市高新区沣惠南路34号摩尔中心2幢1单元10703、10704室",
        officePhone: "029-89589559",
        Email: "buttonsoftware@gpower.co"
    },
    history: [
        {
            time: "2014年5月",
            content: "\u8fc8\u51fa\u521b\u4e1a\u7684\u7b2c\u4e00\u6b65"
        },
        {
            time: "2015年1月",
            content: "纽扣软件正式成立"
        },
        {
            time: "2018年11月",
            content: "Filto上线首日位于美国总榜的第二名，图像单榜的第一名"
        },
        {
            time: "2019年3月",
            content: "全球累计下载量破亿"
        }
    ],
    beliefs: ['积极主动的态度（attitude）', '勇于承担责任的魄力（courage）', '感恩归零的初心（Initial heart）'],
    environment: [
         {
            imgUrl: './assets/img/env/clss.png',
            smallImgUrl: './assets/img/env/clss@1.5x.png 1.5x',
            text: '整洁舒适的办公环境'
        },
        {
            imgUrl: './assets/img/env/env.png',
            smallImgUrl: './assets/img/env@1.5x.png 1.5x',
            text: '开放轻松的休闲空间'
        },
        {
            imgUrl: './assets/img/env/coff.png',
            smallImgUrl: './assets/img/env/coff@1.5x.png 1.5x',
            text: '丰富多彩的俱乐部活动'
        },
        {
            imgUrl: './assets/img/env/fru.png',
            smallImgUrl: './assets/img/env/fru@1.5x.png 1.5x',
            text: '每日下午茶以及节日活动'
        },
        {
            imgUrl: './assets/img/env/5.png',
            smallImgUrl: './assets/img/env/5.png 1.5x',
            text: '茶水间提供了各类休闲饮品'
        },
        {
            imgUrl: './assets/img/env/6.png',
            smallImgUrl: './assets/img/env/6.png 1.5x',
            text: '我们多种多样的产品'
        }
    ]
};
// 基本页面配置 - 英文
var BASE_INFO_EN = {
    menu: [
        {
            name: 'About Us',
            href: './about_us.html',
            className: 'about-us'
        },
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
        {
            name: 'Contact Us',
            href: './contact_us.html',
            className: 'contact-us'
        }
    ],
    joinUs: 'Join Us',
    contactUs: 'Contact Us',
    businessSolutions: 'Business Solutions',
    product: 'Our Products',
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
        subTItle: 'At Button Software, the world’s most talented engineers, designers, and thought leaders are shaping the future of Internet.',
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
        {
            name: '关于我们',
            href: './about_us.html',
            className: 'about-us'
        },
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
        {
            name: '联系我们',
            href: './contact_us.html',
            className: 'contact-us'
        }
    ],
    joinUs: '加入我们',
    contactUs: '联系我们',
    businessSolutions: '解决方案',
    product: '产品介绍',
    beian:'',
    aboutUs: {
        introduction: '公司介绍',
        timeline: '发展历程',
        ceo: 'CEO的故事',
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
