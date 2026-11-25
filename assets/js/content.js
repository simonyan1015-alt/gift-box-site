/* ==========================================================================
   Meridian Pack — 站点内容文件 / Site content
   --------------------------------------------------------------------------
   这是官网唯一的内容来源：所有文字、图片、联系方式都在这里。
   1) 直接改下面的文字 → 保存 → 刷新网页即可生效。
   2) 或者打开 index.html?edit=1 用网页里的可视化编辑器改，改完导出本文件覆盖。
   文字字段格式：{ en: "英文", zh: "中文" }；图片字段：直接填图片路径。
   ========================================================================== */

window.SITE = {

  /* ---------- 品牌 ---------- */
  brand:    { en: "Meridian Pack", zh: "子午包装" },
  brandSub: { en: "Paper Packaging Manufacturer", zh: "纸制品包装制造商" },
  brandMark:{ en: "M", zh: "子" },

  /* ---------- 导航 ---------- */
  nav: [
    { href: "#capability", label: { en: "Capability", zh: "制造能力" } },
    { href: "#products",   label: { en: "Products",   zh: "产品" } },
    { href: "#finishing",  label: { en: "Finishing",  zh: "表面工艺" } },
    { href: "#factory",    label: { en: "Factory",    zh: "工厂" } },
    { href: "#industries", label: { en: "Industries", zh: "应用行业" } }
  ],

  /* ---------- 按钮 ---------- */
  cta: {
    quote: { en: "Request a quote", zh: "获取报价" },
    view:  { en: "View products",   zh: "查看产品" },
    send:  { en: "Send enquiry",    zh: "发送询盘" },
    edit:  { en: "Edit content",    zh: "编辑内容" }
  },

  /* ---------- 首屏 ---------- */
  hero: {
    eyebrow:   { en: "Paper packaging manufacturer · OEM & ODM", zh: "纸制品包装制造商 · 支持 OEM / ODM" },
    title:     { en: "Custom gift boxes,", zh: "精品礼盒定制，" },
    titleEm:   { en: "engineered end to end.", zh: "从设计到成型一站式。" },
    sub: {
      en: "Design, proofing, printing, die-cutting, wrapping and assembly under one roof. Rigid boxes, folding cartons, corrugated cases and paper bags — built to your size, structure and finish.",
      zh: "集包装设计、打样、印刷、模切、裱糊、成型于一体。天地盖、书型盒、抽屉盒、折叠彩盒、瓦楞彩箱、手提纸袋——按你的尺寸、结构与工艺定制。"
    },
    image: "assets/img/hero.jpg",
    alt:   { en: "Premium rigid gift boxes on dark linen", zh: "深色布面上的精品天地盖礼盒" }
  },

  /* ---------- 首屏下方能力条 ---------- */
  trust: [
    { en: "In-house design & dielines",     zh: "自有设计与刀版工程" },
    { en: "Sampling in 3–7 days",           zh: "3–7 天出样" },
    { en: "Piece-by-piece inspection",      zh: "逐只全检" },
    { en: "Export packing & documents",     zh: "出口包装与单证" }
  ],

  /* ---------- 制造能力 ---------- */
  capSec: {
    eyebrow: { en: "Capability", zh: "制造能力" },
    title:   { en: "One roof, six stages.", zh: "六道工序，全部自有产线。" },
    lead:    { en: "Every step from artwork to finished carton happens in our own plant — which is why we can give you a sample date and keep it.", zh: "从文件到成品箱，每一道工序都在自己的车间完成——所以打样日期敢承诺，也做得到。" }
  },
  caps: [
    { t: { en: "Structural design", zh: "结构设计" },
      d: { en: "Dielines and 3D mock-ups engineered around your product, protection needs and budget.", zh: "围绕产品、防护需求与成本，输出刀版图与立体效果图。" } },
    { t: { en: "Sampling & proofing", zh: "打样确认" },
      d: { en: "White samples and printed proofs in 3–7 days, adjusted until the box is right.", zh: "3–7 天出白样或印刷样，反复微调直到结构合手。" } },
    { t: { en: "Printing", zh: "印刷" },
      d: { en: "Offset, digital and screen printing on art paper, kraft, specialty stock and greyboard.", zh: "胶印、数码与丝网印刷，适用铜版纸、牛皮纸、特种纸与灰板。" } },
    { t: { en: "Die-cutting & creasing", zh: "模切压痕" },
      d: { en: "Automatic platen cutting, creasing and window patching held to ±0.2 mm.", zh: "自动平压平模切、压痕与开窗贴片，精度控制在 ±0.2 mm。" } },
    { t: { en: "Wrapping & mounting", zh: "裱糊" },
      d: { en: "Hand and machine wrapping of greyboard with paper, cloth or specialty stock.", zh: "手工与机器裱糊，把纸张、布面或特种材料贴合到灰板上。" } },
    { t: { en: "Assembly & QC", zh: "成型质检" },
      d: { en: "Gluing, insert fitting, piece-by-piece inspection and export packing.", zh: "粘合成型、内衬装配、逐只全检与出口包装。" } }
  ],

  /* ---------- 产品 ---------- */
  prodSec: {
    eyebrow: { en: "Products", zh: "产品" },
    title:   { en: "Boxes we build every day.", zh: "每天都在做的几类盒子。" },
    lead:    { en: "Six structures cover most briefs. Anything else, we engineer from your drawing or sample.", zh: "六类结构可覆盖大部分需求，其余按图纸或来样单独开发。" }
  },
  products: [
    { name: { en: "Rigid lid & base box", zh: "天地盖礼盒" },
      desc: { en: "Two-piece greyboard box wrapped in paper or cloth. The default for premium sets, cosmetics and tea.", zh: "上下两片灰板盒身，外包纸或布面。精品套装、美妆与茶叶的常青结构。" },
      image: "assets/img/box-lid.jpg" },
    { name: { en: "Book-style box", zh: "书型盒" },
      desc: { en: "Magnetic flap that opens like a book, with a foam, velvet or paper insert inside.", zh: "磁吸翻盖如书页打开，内配海绵、植绒或纸卡内托。" },
      image: "assets/img/box-book.jpg" },
    { name: { en: "Drawer box", zh: "抽屉盒" },
      desc: { en: "Sliding tray inside a rigid sleeve, with ribbon or thumb-cut pull.", zh: "硬质外套内抽拉托盘，配丝带或指位缺口。" },
      image: "assets/img/box-drawer.jpg" },
    { name: { en: "Folding carton", zh: "折叠彩盒" },
      desc: { en: "Printed, die-cut and glued flat for shipping — the economical option at volume.", zh: "印刷模切后糊成平板运输，量产包装的经济之选。" },
      image: "assets/img/box-folding.jpg" },
    { name: { en: "Paper bag", zh: "手提纸袋" },
      desc: { en: "Art paper or kraft bags with rope, ribbon or die-cut handles, laminated and reinforced.", zh: "铜版纸或牛皮纸袋，棉绳、丝带或模切手提，覆膜加厚加固。" },
      image: "assets/img/bag.jpg" }
  ],
  prodMore: {
    title: { en: "Also made to order", zh: "同样可按需定制" },
    items: [
      { en: "Flip-top rigid box · 翻盖硬盒", zh: "翻盖硬盒" },
      { en: "Corrugated case · 瓦楞彩箱", zh: "瓦楞彩箱" },
      { en: "Mailer box · 飞机盒", zh: "飞机盒" },
      { en: "Hang tag · 彩卡吊牌", zh: "彩卡吊牌" },
      { en: "Paper insert · 纸内衬", zh: "纸内衬" },
      { en: "Card tray · 卡纸内托", zh: "卡纸内托" }
    ]
  },

  /* ---------- 表面工艺 ---------- */
  finSec: {
    eyebrow: { en: "Finishing", zh: "表面工艺" },
    title:   { en: "Finishes that carry the brand.", zh: "工艺，是手感的第一句话。" },
    lead:    { en: "Foil, texture and varnish change how a box feels in the hand — long before it is opened.", zh: "烫金、纹理与光油，决定盒子握在手里时的第一感受。" },
    image:   "assets/img/craft.jpg",
    imgAlt:  { en: "Gold foil stamping on navy paper", zh: "深蓝纸张上的烫金压纹" },
    note:    { en: "Size, structure, logo printing and surface finish are all customised per order.", zh: "尺寸、结构、LOGO 印刷与表面工艺，均可按单定制。" }
  },
  finishes: [
    { t: { en: "Hot foil stamping", zh: "烫金" },
      d: { en: "Gold, silver or coloured foil pressed into the sheet for logos and rules.", zh: "金、银或彩色箔压印到纸面，用于 LOGO 与线条。" } },
    { t: { en: "Embossing & debossing", zh: "击凸压凹" },
      d: { en: "Raised or recessed relief, registered to print, with or without foil.", zh: "浮凸或凹压，可与印刷套准，也可叠加烫金。" } },
    { t: { en: "Spot UV", zh: "局部 UV" },
      d: { en: "Gloss varnish on selected areas against a matte or soft-touch surface.", zh: "哑面或触感面上做局部亮光，形成对比。" } },
    { t: { en: "Lamination", zh: "覆膜" },
      d: { en: "Matte, gloss or soft-touch film for durability and a controlled sheen.", zh: "哑膜、亮膜或触感膜，兼顾耐磨与光泽控制。" } },
    { t: { en: "Textured & specialty paper", zh: "压纹特种纸" },
      d: { en: "Linen, felt, leatherette and metal-ink stocks for tactile contrast.", zh: "布纹、毛毡、仿皮与金属墨纸张，制造触感层次。" } },
    { t: { en: "Window patching", zh: "开窗贴片" },
      d: { en: "Die-cut windows with PET or PLA film so the product shows through.", zh: "模切开窗并贴合 PET / PLA 胶片，露出产品。" } }
  ],

  /* ---------- 工厂 ---------- */
  facSec: {
    eyebrow: { en: "The factory", zh: "关于工厂" },
    title:   { en: "Paper, board and glue — handled in-house.", zh: "纸、板、胶，全部自己经手。" },
    body1:   { en: "We specialise in paper product manufacturing and custom gift box production: packaging design, proofing, printing, die-cutting, wrapping and forming in one continuous line.", zh: "专业从事纸制品加工与礼品盒定制生产，集包装设计、打样、印刷、模切、裱糊、成型于一体的一站式服务。" },
    body2:   { en: "Send a drawing, a reference box, or just a product and a budget. We advise on structure, paper and finish, then make the sample and the production run — OEM or ODM, trial order or container load.", zh: "来图、来样，或只给一个产品和预算都可以。我们先给结构、用纸与工艺建议，再完成打样与批量生产——OEM / ODM，大小订单均可承接。" },
    image:   "assets/img/factory.jpg",
    imgAlt:  { en: "Packaging factory production line", zh: "包装工厂生产线" }
  },
  facPoints: [
    { en: "Structural design & dieline engineering", zh: "结构设计与刀版工程" },
    { en: "Automatic die-cutting, creasing and gluing", zh: "自动模切、压痕与糊盒" },
    { en: "Insert fitting, hand assembly and inspection", zh: "内衬装配、手工组装与全检" },
    { en: "Export packing, marks and shipping documents", zh: "出口包装、唛头与运输单证" }
  ],
  nums: [
    { v: { en: "3–7 days", zh: "3–7 天" },  l: { en: "Sampling and printed proof", zh: "出样与印刷打样" } },
    { v: { en: "15–25 days", zh: "15–25 天" }, l: { en: "Production after approval", zh: "确认样品后大货交期" } },
    { v: { en: "Any size", zh: "不限量级" }, l: { en: "Trial orders and container loads", zh: "试单与整柜订单都接" } }
  ],

  /* ---------- 下单流程 ---------- */
  flowSec: {
    eyebrow: { en: "How it works", zh: "合作流程" },
    title:   { en: "From brief to container.", zh: "从一句需求，到一柜货。" }
  },
  flow: [
    { t: { en: "Send the brief", zh: "提供需求" },
      d: { en: "Size, quantity, artwork or a reference box. A photo is enough to start.", zh: "尺寸、数量、文件或一个参照盒，一张照片就能起步。" } },
    { t: { en: "Quote & dieline", zh: "报价与刀版" },
      d: { en: "Structure advice, material options and a quotation, usually within one working day.", zh: "给出结构建议、用纸方案与报价，通常一个工作日内回复。" } },
    { t: { en: "Approve the sample", zh: "确认样品" },
      d: { en: "White sample or printed proof, revised until the structure and colour are right.", zh: "白样或印刷样，改到结构与颜色都合适为止。" } },
    { t: { en: "Production & shipping", zh: "量产与出货" },
      d: { en: "Mass production, inspection report, export packing, FOB or DDP.", zh: "批量生产、检验报告、出口包装，FOB 或 DDP 均可。" } }
  ],

  /* ---------- 应用行业 ---------- */
  indSec: {
    eyebrow: { en: "Industries", zh: "应用行业" },
    title:   { en: "Who the boxes are for.", zh: "这些盒子，装在什么行业里。" },
    lead:    { en: "Same plant, different rules — food-grade board, cosmetic gloss, or a jewellery flock.", zh: "同一个车间，不同的标准——食品级纸板、美妆亮面，或首饰植绒。" }
  },
  industries: [
    { t: { en: "Cosmetics & skincare", zh: "美妆护肤" }, d: { en: "Rigid boxes, drawer boxes and inserts for bottles, jars and sets.", zh: "瓶、罐与套装用的硬盒、抽屉盒与内托。" } },
    { t: { en: "Food & confectionery", zh: "食品烘焙" }, d: { en: "Folding cartons, window boxes and food-grade paperboard.", zh: "折叠彩盒、开窗盒与食品级纸板。" } },
    { t: { en: "Wine & spirits", zh: "酒水" }, d: { en: "Book boxes, flip-top cases and gift sets with moulded inserts.", zh: "书型盒、翻盖硬盒与配模塑内衬的礼盒。" } },
    { t: { en: "Tea", zh: "茶叶" }, d: { en: "Lid & base boxes, tin sleeves and paper-lined gift sets.", zh: "天地盖、罐套与裱纸礼盒。" } },
    { t: { en: "Electronics", zh: "消费电子" }, d: { en: "Mailers, rigid boxes and protective inserts for devices.", zh: "飞机盒、硬盒与设备防护内衬。" } },
    { t: { en: "Gifts & cultural products", zh: "文创礼品" }, d: { en: "Small-batch runs, specialty paper and hand-finished details.", zh: "小批量、特种纸与手工细节。" } },
    { t: { en: "Jewellery", zh: "珠宝首饰" }, d: { en: "Flocked inserts, small rigid boxes and ribbon closures.", zh: "植绒内衬、小尺寸硬盒与丝带封口。" } },
    { t: { en: "Agricultural produce", zh: "农产品" }, d: { en: "Corrugated cases, kraft boxes and printed trays.", zh: "瓦楞彩箱、牛皮纸盒与印刷托盘。" } }
  ],

  /* ---------- 联系 ---------- */
  contact: {
    eyebrow: { en: "Contact", zh: "联系我们" },
    title:   { en: "Tell us what you need to pack.", zh: "告诉我们要装什么。" },
    lead:    { en: "Send a photo, a drawing or a sample. We will come back with structure options, a price and a sample date.", zh: "发一张照片、一份图纸或一个样品过来，我们会回复结构方案、价格与打样时间。" },
    labels: {
      name:  { en: "Your name", zh: "称呼" },
      company: { en: "Company", zh: "公司" },
      email: { en: "Email", zh: "邮箱" },
      country: { en: "Country / region", zh: "国家 / 地区" },
      interest: { en: "What do you need", zh: "需求产品" },
      message: { en: "Message", zh: "需求描述" },
      options: [
        { en: "Rigid gift box", zh: "精品礼盒" },
        { en: "Folding carton", zh: "折叠彩盒" },
        { en: "Corrugated / mailer", zh: "瓦楞箱 / 飞机盒" },
        { en: "Paper bag", zh: "手提纸袋" },
        { en: "Insert / accessory", zh: "内衬 / 配件" },
        { en: "Not sure yet", zh: "还没确定" }
      ]
    },
    infoTitle: { en: "Direct", zh: "直接联系" },
    rows: [
      { k: { en: "Email", zh: "邮箱" },    v: "sales@meridianpack.com" },
      { k: { en: "Phone", zh: "电话" },    v: "+86 000 0000 0000" },
      { k: { en: "WhatsApp", zh: "WhatsApp" }, v: "+86 000 0000 0000" },
      { k: { en: "Address", zh: "地址" },  v: { en: "Dongguan, Guangdong, China", zh: "中国 · 广东 · 东莞" } },
      { k: { en: "Hours", zh: "工作时间" }, v: { en: "Mon–Sat, 08:30–18:00 (GMT+8)", zh: "周一至周六 08:30–18:00" } }
    ],
    note: { en: "This form opens your mail app with the details filled in. If nothing happens, write to the address on the left.", zh: "提交后会打开你的邮件客户端并自动填好内容；如果没有反应，请直接发邮件到左侧地址。" }
  },

  /* ---------- 页脚 ---------- */
  footer: {
    note:  { en: "Paper packaging · OEM / ODM · Made in China", zh: "纸制品包装 · OEM / ODM · 中国制造" },
    rights:{ en: "© 2026 Meridian Pack. All rights reserved.", zh: "© 2026 子午包装 保留所有权利" }
  },

  /* ---------- SEO ---------- */
  seo: {
    title: { en: "Meridian Pack — Custom Gift Box & Paper Packaging Manufacturer",
             zh: "子午包装 — 精品礼盒与纸制品包装定制工厂" },
    desc:  { en: "Custom gift box manufacturer: rigid boxes, book boxes, drawer boxes, folding cartons, corrugated cases and paper bags. Design, proofing, printing, die-cutting, wrapping and assembly in one factory. OEM / ODM.",
             zh: "精品礼盒定制工厂：天地盖、书型盒、抽屉盒、翻盖硬盒、折叠彩盒、瓦楞彩箱、手提纸袋。集包装设计、打样、印刷、模切、裱糊、成型于一体，支持 OEM / ODM 来图来样生产。" }
  }
};
