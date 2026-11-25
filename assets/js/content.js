/* ==========================================================================
   Meridian Pack — 站点内容文件 / Site content
   --------------------------------------------------------------------------
   这是官网唯一的内容来源：所有文字、图片、联系方式都在这里。
   支持四种语言：en（英）zh（中）de（德）fr（法）
   1) 直接改下面的文字 → 保存 → 刷新网页即可生效。
   2) 或者打开 index.html?edit=1 用网页里的可视化编辑器改，改完导出本文件覆盖。
   文字字段格式：{ en: "...", zh: "...", de: "...", fr: "..." }；图片字段直接填路径。
   ========================================================================== */

window.SITE = {

  /* ---------- 品牌 ---------- */
  brand:    { en: "Meridian Pack", zh: "子午包装", de: "Meridian Pack", fr: "Meridian Pack" },
  brandSub: { en: "Paper Packaging Manufacturer", zh: "纸制品包装制造商", de: "Hersteller von Papierverpackungen", fr: "Fabricant d'emballages en papier" },
  brandMark:{ en: "M", zh: "子", de: "M", fr: "M" },

  /* ---------- 导航 ---------- */
  nav: [
    { href: "#capability", label: { en: "Capability", zh: "制造能力", de: "Fertigung", fr: "Savoir-faire" } },
    { href: "#products",   label: { en: "Products",   zh: "产品",     de: "Produkte", fr: "Produits" } },
    { href: "#finishing",  label: { en: "Finishing",  zh: "表面工艺", de: "Veredelung", fr: "Finitions" } },
    { href: "#factory",    label: { en: "Factory",    zh: "工厂",     de: "Werk", fr: "Atelier" } },
    { href: "#industries", label: { en: "Industries", zh: "应用行业", de: "Branchen", fr: "Secteurs" } }
  ],

  /* ---------- 按钮 ---------- */
  cta: {
    quote: { en: "Request a quote", zh: "获取报价", de: "Angebot anfordern", fr: "Demander un devis" },
    view:  { en: "View products",   zh: "查看产品", de: "Produkte ansehen", fr: "Voir les produits" },
    send:  { en: "Send enquiry",    zh: "发送询盘", de: "Anfrage senden", fr: "Envoyer la demande" },
    edit:  { en: "Edit content",    zh: "编辑内容", de: "Inhalt bearbeiten", fr: "Modifier le contenu" }
  },

  /* ---------- 首屏 ---------- */
  hero: {
    eyebrow: { en: "Paper packaging manufacturer · OEM & ODM", zh: "纸制品包装制造商 · 支持 OEM / ODM", de: "Hersteller von Papierverpackungen · OEM & ODM", fr: "Fabricant d'emballages en papier · OEM & ODM" },
    title:   { en: "Custom gift boxes,", zh: "精品礼盒定制，", de: "Individuelle Geschenkboxen,", fr: "Coffrets sur mesure," },
    titleEm: { en: "engineered end to end.", zh: "从设计到成型一站式。", de: "von der Idee bis zur fertigen Schachtel.", fr: "de la première esquisse à la boîte finie." },
    sub: {
      en: "Design, proofing, printing, die-cutting, wrapping and assembly under one roof. Rigid boxes, folding cartons, corrugated cases and paper bags — built to your size, structure and finish.",
      zh: "集包装设计、打样、印刷、模切、裱糊、成型于一体。天地盖、书型盒、抽屉盒、折叠彩盒、瓦楞彩箱、手提纸袋——按你的尺寸、结构与工艺定制。",
      de: "Design, Bemusterung, Druck, Stanzen, Beziehen und Montage unter einem Dach. Hartschachteln, Faltschachteln, Wellpappkartons und Papiertragetaschen — nach Ihrem Maß, Ihrer Konstruktion und Ihrer Veredelung.",
      fr: "Design, échantillonnage, impression, découpe, habillage et montage sous un même toit. Boîtes rigides, étuis pliants, caisses en carton ondulé et sacs papier — à vos dimensions, votre structure et votre finition."
    },
    image: "assets/img/hero.jpg",
    alt: {
      en: "Premium rigid gift boxes on dark linen",
      zh: "深色布面上的精品天地盖礼盒",
      de: "Hochwertige Hartschachteln auf dunklem Leinen",
      fr: "Coffrets rigides haut de gamme sur lin sombre"
    }
  },

  /* ---------- 首屏下方能力条 ---------- */
  trust: [
    { en: "In-house design & dielines", zh: "自有设计与刀版工程", de: "Eigenes Design & Stanzformen", fr: "Design et tracés intégrés" },
    { en: "Sampling in 3–7 days", zh: "3–7 天出样", de: "Muster in 3–7 Tagen", fr: "Échantillons en 3 à 7 jours" },
    { en: "Piece-by-piece inspection", zh: "逐只全检", de: "Prüfung Stück für Stück", fr: "Contrôle pièce par pièce" },
    { en: "Export packing & documents", zh: "出口包装与单证", de: "Exportverpackung & Papiere", fr: "Emballage export et documents" }
  ],

  /* ---------- 制造能力 ---------- */
  capSec: {
    eyebrow: { en: "Capability", zh: "制造能力", de: "Fertigung", fr: "Savoir-faire" },
    title:   { en: "One roof, six stages.", zh: "六道工序，全部自有产线。", de: "Ein Dach, sechs Stufen.", fr: "Un toit, six étapes." },
    lead: {
      en: "Every step from artwork to finished carton happens in our own plant — which is why we can give you a sample date and keep it.",
      zh: "从文件到成品箱，每一道工序都在自己的车间完成——所以打样日期敢承诺，也做得到。",
      de: "Jeder Schritt von der Druckdatei bis zur fertigen Schachtel entsteht im eigenen Werk — deshalb können wir einen Mustertag nennen und halten ihn auch.",
      fr: "Chaque étape, du fichier au carton fini, se fait dans notre atelier — c'est pourquoi nous pouvons annoncer une date d'échantillon et la tenir."
    }
  },
  caps: [
    { t: { en: "Structural design", zh: "结构设计", de: "Konstruktion", fr: "Conception de structure" },
      d: { en: "Dielines and 3D mock-ups engineered around your product, protection needs and budget.", zh: "围绕产品、防护需求与成本，输出刀版图与立体效果图。", de: "Stanzformen und 3D-Muster, ausgelegt auf Ihr Produkt, den Schutzbedarf und Ihr Budget.", fr: "Tracés et maquettes 3D étudiés selon votre produit, vos besoins de protection et votre budget." } },
    { t: { en: "Sampling & proofing", zh: "打样确认", de: "Bemusterung", fr: "Échantillonnage" },
      d: { en: "White samples and printed proofs in 3–7 days, adjusted until the box is right.", zh: "3–7 天出白样或印刷样，反复微调直到结构合手。", de: "Weißmuster und Andrucke in 3–7 Tagen, nachjustiert, bis die Box sitzt.", fr: "Échantillons blancs et épreuves imprimées en 3 à 7 jours, ajustés jusqu'à ce que la boîte tombe juste." } },
    { t: { en: "Printing", zh: "印刷", de: "Druck", fr: "Impression" },
      d: { en: "Offset, digital and screen printing on art paper, kraft, specialty stock and greyboard.", zh: "胶印、数码与丝网印刷，适用铜版纸、牛皮纸、特种纸与灰板。", de: "Offset-, Digital- und Siebdruck auf Bilderdruckpapier, Kraftpapier, Strukturpapier und Graupappe.", fr: "Offset, numérique et sérigraphie sur couché, kraft, papiers texturés et carton gris." } },
    { t: { en: "Die-cutting & creasing", zh: "模切压痕", de: "Stanzen & Rillen", fr: "Découpe & rainage" },
      d: { en: "Automatic platen cutting, creasing and window patching held to ±0.2 mm.", zh: "自动平压平模切、压痕与开窗贴片，精度控制在 ±0.2 mm。", de: "Automatisches Stanzen, Rillen und Fensterfolierung mit ±0,2 mm Genauigkeit.", fr: "Découpe, rainage et fenêtrage automatiques, tenus à ±0,2 mm." } },
    { t: { en: "Wrapping & mounting", zh: "裱糊", de: "Beziehen", fr: "Habillage" },
      d: { en: "Hand and machine wrapping of greyboard with paper, cloth or specialty stock.", zh: "手工与机器裱糊，把纸张、布面或特种材料贴合到灰板上。", de: "Beziehen von Graupappe mit Papier, Stoff oder Strukturmaterial — von Hand und maschinell.", fr: "Habillage du carton gris avec papier, tissu ou matière texturée, à la main et à la machine." } },
    { t: { en: "Assembly & QC", zh: "成型质检", de: "Montage & QS", fr: "Montage & contrôle" },
      d: { en: "Gluing, insert fitting, piece-by-piece inspection and export packing.", zh: "粘合成型、内衬装配、逐只全检与出口包装。", de: "Kleben, Einlegen der Einlagen, Prüfung Stück für Stück und Exportverpackung.", fr: "Collage, mise en place des calages, contrôle pièce par pièce et emballage export." } }
  ],

  /* ---------- 产品 ---------- */
  prodSec: {
    eyebrow: { en: "Products", zh: "产品", de: "Produkte", fr: "Produits" },
    title:   { en: "Boxes we build every day.", zh: "每天都在做的几类盒子。", de: "Boxen, die wir täglich bauen.", fr: "Des boîtes que nous fabriquons chaque jour." },
    lead: {
      en: "Six structures cover most briefs. Anything else, we engineer from your drawing or sample.",
      zh: "六类结构可覆盖大部分需求，其余按图纸或来样单独开发。",
      de: "Sechs Konstruktionen decken die meisten Anfragen ab. Alles andere entwickeln wir nach Zeichnung oder Muster.",
      fr: "Six structures couvrent la plupart des demandes. Pour le reste, nous concevons d'après votre plan ou votre échantillon."
    }
  },
  products: [
    { name: { en: "Rigid lid & base box", zh: "天地盖礼盒", de: "Hartschachtel mit Stülpdeckel", fr: "Boîte rigide à couvercle" },
      desc: { en: "Two-piece greyboard box wrapped in paper or cloth. The default for premium sets, cosmetics and tea.", zh: "上下两片灰板盒身，外包纸或布面。精品套装、美妆与茶叶的常青结构。", de: "Zweiteilige Graupappschachtel, bezogen mit Papier oder Stoff. Der Standard für hochwertige Sets, Kosmetik und Tee.", fr: "Boîte en carton gris en deux parties, habillée de papier ou de tissu. Le standard des coffrets, de la cosmétique et du thé." },
      image: "assets/img/box-lid.jpg" },
    { name: { en: "Book-style box", zh: "书型盒", de: "Buchform-Box", fr: "Boîte livre" },
      desc: { en: "Magnetic flap that opens like a book, with a foam, velvet or paper insert inside.", zh: "磁吸翻盖如书页打开，内配海绵、植绒或纸卡内托。", de: "Magnetklappe, die sich wie ein Buch öffnet, mit Einlage aus Schaum, Samt oder Papier.", fr: "Rabat magnétique qui s'ouvre comme un livre, avec calage en mousse, velours ou papier." },
      image: "assets/img/box-book.jpg" },
    { name: { en: "Drawer box", zh: "抽屉盒", de: "Schubladenschachtel", fr: "Boîte tiroir" },
      desc: { en: "Sliding tray inside a rigid sleeve, with ribbon or thumb-cut pull.", zh: "硬质外套内抽拉托盘，配丝带或指位缺口。", de: "Ausziehbare Schale in einer festen Hülle, mit Bändchen oder Daumenaussparung.", fr: "Plateau coulissant dans un fourreau rigide, avec ruban ou encoche digitale." },
      image: "assets/img/box-drawer.jpg" },
    { name: { en: "Folding carton", zh: "折叠彩盒", de: "Faltschachtel", fr: "Étui pliant" },
      desc: { en: "Printed, die-cut and glued flat for shipping — the economical option at volume.", zh: "印刷模切后糊成平板运输，量产包装的经济之选。", de: "Gedruckt, gestanzt und flach geklebt für den Versand — die wirtschaftliche Wahl für Stückzahlen.", fr: "Imprimé, découpé et collé à plat pour l'expédition — la solution économique en volume." },
      image: "assets/img/box-folding.jpg" },
    { name: { en: "Paper bag", zh: "手提纸袋", de: "Papiertragetasche", fr: "Sac papier" },
      desc: { en: "Art paper or kraft bags with rope, ribbon or die-cut handles, laminated and reinforced.", zh: "铜版纸或牛皮纸袋，棉绳、丝带或模切手提，覆膜加厚加固。", de: "Taschen aus Bilderdruck- oder Kraftpapier mit Kordel-, Band- oder Stanzgriff, kaschiert und verstärkt.", fr: "Sacs en couché ou kraft, anses corde, ruban ou découpées, pelliculés et renforcés." },
      image: "assets/img/bag.jpg" }
  ],
  prodMore: {
    title: { en: "Also made to order", zh: "同样可按需定制", de: "Ebenfalls nach Maß", fr: "Également sur mesure" },
    items: [
      { en: "Flip-top rigid box", zh: "翻盖硬盒", de: "Klappdeckelbox", fr: "Boîte à couvercle clapet" },
      { en: "Corrugated case", zh: "瓦楞彩箱", de: "Wellpappkarton", fr: "Caisse en carton ondulé" },
      { en: "Mailer box", zh: "飞机盒", de: "Versandschachtel", fr: "Boîte d'expédition" },
      { en: "Hang tag", zh: "彩卡吊牌", de: "Anhänger", fr: "Étiquette suspendue" },
      { en: "Paper insert", zh: "纸内衬", de: "Papiereinlage", fr: "Calage papier" },
      { en: "Card tray", zh: "卡纸内托", de: "Kartoneinlage", fr: "Plateau carton" }
    ]
  },

  /* ---------- 表面工艺 ---------- */
  finSec: {
    eyebrow: { en: "Finishing", zh: "表面工艺", de: "Veredelung", fr: "Finitions" },
    title:   { en: "Finishes that carry the brand.", zh: "工艺，是手感的第一句话。", de: "Veredelung, die die Marke trägt.", fr: "Des finitions qui portent la marque." },
    lead:    {
      en: "Foil, texture and varnish change how a box feels in the hand — long before it is opened.",
      zh: "烫金、纹理与光油，决定盒子握在手里时的第一感受。",
      de: "Folie, Struktur und Lack verändern, wie sich eine Box in der Hand anfühlt — lange bevor sie geöffnet wird.",
      fr: "Film, matière et vernis changent la sensation d'une boîte en main — bien avant qu'elle ne soit ouverte."
    },
    image:  "assets/img/craft.jpg",
    imgAlt: { en: "Gold foil stamping on navy paper", zh: "深蓝纸张上的烫金压纹", de: "Heißfolienprägung auf dunkelblauem Papier", fr: "Dorure à chaud sur papier bleu nuit" },
    note:   {
      en: "Size, structure, logo printing and surface finish are all customised per order.",
      zh: "尺寸、结构、LOGO 印刷与表面工艺，均可按单定制。",
      de: "Maß, Konstruktion, Logodruck und Oberflächenveredelung werden pro Auftrag individuell gefertigt.",
      fr: "Dimensions, structure, impression du logo et finition de surface sont personnalisées pour chaque commande."
    }
  },
  finishes: [
    { t: { en: "Hot foil stamping", zh: "烫金", de: "Heißfolienprägung", fr: "Dorure à chaud" },
      d: { en: "Gold, silver or coloured foil pressed into the sheet for logos and rules.", zh: "金、银或彩色箔压印到纸面，用于 LOGO 与线条。", de: "Gold-, Silber- oder Farbfolie für Logos und Linien in das Papier geprägt.", fr: "Film or, argent ou couleur pressé dans la feuille pour les logos et les filets." } },
    { t: { en: "Embossing & debossing", zh: "击凸压凹", de: "Prägen & Blindprägen", fr: "Gaufrage & embossage" },
      d: { en: "Raised or recessed relief, registered to print, with or without foil.", zh: "浮凸或凹压，可与印刷套准，也可叠加烫金。", de: "Erhabene oder vertiefte Reliefs, passgenau zum Druck, mit oder ohne Folie.", fr: "Relief en creux ou en bosse, repéré sur l'impression, avec ou sans film." } },
    { t: { en: "Spot UV", zh: "局部 UV", de: "Spotlack (UV)", fr: "Vernis sélectif" },
      d: { en: "Gloss varnish on selected areas against a matte or soft-touch surface.", zh: "哑面或触感面上做局部亮光，形成对比。", de: "Glänzender Lack auf ausgewählten Flächen gegen matte oder Softtouch-Oberfläche.", fr: "Vernis brillant sur zones choisies, sur fond mat ou soft touch." } },
    { t: { en: "Lamination", zh: "覆膜", de: "Kaschierung", fr: "Pelliculage" },
      d: { en: "Matte, gloss or soft-touch film for durability and a controlled sheen.", zh: "哑膜、亮膜或触感膜，兼顾耐磨与光泽控制。", de: "Matte, glänzende oder Softtouch-Folie für Haltbarkeit und kontrollierten Glanz.", fr: "Film mat, brillant ou soft touch pour la tenue et un lustre maîtrisé." } },
    { t: { en: "Textured & specialty paper", zh: "压纹特种纸", de: "Strukturpapier", fr: "Papiers texturés" },
      d: { en: "Linen, felt, leatherette and metal-ink stocks for tactile contrast.", zh: "布纹、毛毡、仿皮与金属墨纸张，制造触感层次。", de: "Leinen, Filz, Lederoptik und Metallic-Papiere für taktilen Kontrast.", fr: "Toile, feutre, aspect cuir et encres métalliques pour un contraste tactile." } },
    { t: { en: "Window patching", zh: "开窗贴片", de: "Fensterfolierung", fr: "Fenêtrage" },
      d: { en: "Die-cut windows with PET or PLA film so the product shows through.", zh: "模切开窗并贴合 PET / PLA 胶片，露出产品。", de: "Gestanzte Fenster mit PET- oder PLA-Folie, damit das Produkt sichtbar bleibt.", fr: "Fenêtres découpées avec film PET ou PLA pour laisser voir le produit." } }
  ],

  /* ---------- 工厂 ---------- */
  facSec: {
    eyebrow: { en: "The factory", zh: "关于工厂", de: "Das Werk", fr: "L'atelier" },
    title:   { en: "Paper, board and glue — handled in-house.", zh: "纸、板、胶，全部自己经手。", de: "Papier, Pappe und Leim — alles im Haus.", fr: "Papier, carton et colle — tout se fait ici." },
    body1:   {
      en: "We specialise in paper product manufacturing and custom gift box production: packaging design, proofing, printing, die-cutting, wrapping and forming in one continuous line.",
      zh: "专业从事纸制品加工与礼品盒定制生产，集包装设计、打样、印刷、模切、裱糊、成型于一体的一站式服务。",
      de: "Wir sind spezialisiert auf Papierverarbeitung und die Fertigung individueller Geschenkboxen: Verpackungsdesign, Bemusterung, Druck, Stanzen, Beziehen und Formgebung in einer durchgehenden Linie.",
      fr: "Nous sommes spécialisés dans la transformation du papier et la fabrication de coffrets sur mesure : design, échantillonnage, impression, découpe, habillage et mise en forme sur une seule ligne."
    },
    body2:   {
      en: "Send a drawing, a reference box, or just a product and a budget. We advise on structure, paper and finish, then make the sample and the production run — OEM or ODM, trial order or container load.",
      zh: "来图、来样，或只给一个产品和预算都可以。我们先给结构、用纸与工艺建议，再完成打样与批量生产——OEM / ODM，大小订单均可承接。",
      de: "Senden Sie eine Zeichnung, eine Referenzbox oder einfach ein Produkt und ein Budget. Wir beraten zu Konstruktion, Papier und Veredelung und fertigen dann Muster und Serie — OEM oder ODM, Kleinserie oder Container.",
      fr: "Envoyez un plan, une boîte de référence, ou simplement un produit et un budget. Nous conseillons la structure, le papier et la finition, puis réalisons l'échantillon et la série — OEM ou ODM, petite série ou conteneur."
    },
    image:   "assets/img/factory.jpg",
    imgAlt:  { en: "Packaging factory production line", zh: "包装工厂生产线", de: "Produktionslinie der Verpackungsfabrik", fr: "Ligne de production de l'atelier" }
  },
  facPoints: [
    { en: "Structural design & dieline engineering", zh: "结构设计与刀版工程", de: "Konstruktion & Stanzformentechnik", fr: "Conception et tracés de découpe" },
    { en: "Automatic die-cutting, creasing and gluing", zh: "自动模切、压痕与糊盒", de: "Automatisches Stanzen, Rillen und Kleben", fr: "Découpe, rainage et collage automatiques" },
    { en: "Insert fitting, hand assembly and inspection", zh: "内衬装配、手工组装与全检", de: "Einlagen, Handmontage und Prüfung", fr: "Calages, montage manuel et contrôle" },
    { en: "Export packing, marks and shipping documents", zh: "出口包装、唛头与运输单证", de: "Exportverpackung, Markierung und Papiere", fr: "Emballage export, marquage et documents" }
  ],
  nums: [
    { v: { en: "3–7 days", zh: "3–7 天", de: "3–7 Tage", fr: "3 à 7 jours" },
      l: { en: "Sampling and printed proof", zh: "出样与印刷打样", de: "Bemusterung und Andruck", fr: "Échantillon et épreuve imprimée" } },
    { v: { en: "15–25 days", zh: "15–25 天", de: "15–25 Tage", fr: "15 à 25 jours" },
      l: { en: "Production after approval", zh: "确认样品后大货交期", de: "Produktion nach Musterfreigabe", fr: "Production après validation" } },
    { v: { en: "Any size", zh: "不限量级", de: "Jede Größe", fr: "Toute quantité" },
      l: { en: "Trial orders and container loads", zh: "试单与整柜订单都接", de: "Testaufträge und Containerladungen", fr: "Petites séries et conteneurs" } }
  ],

  /* ---------- 下单流程 ---------- */
  flowSec: {
    eyebrow: { en: "How it works", zh: "合作流程", de: "So läuft es", fr: "Déroulé" },
    title:   { en: "From brief to container.", zh: "从一句需求，到一柜货。", de: "Von der Anfrage bis zum Container.", fr: "De la demande au conteneur." }
  },
  flow: [
    { t: { en: "Send the brief", zh: "提供需求", de: "Anfrage senden", fr: "Envoyer la demande" },
      d: { en: "Size, quantity, artwork or a reference box. A photo is enough to start.", zh: "尺寸、数量、文件或一个参照盒，一张照片就能起步。", de: "Maß, Menge, Druckdaten oder eine Referenzbox. Ein Foto genügt für den Start.", fr: "Dimensions, quantité, fichiers ou une boîte de référence. Une photo suffit pour commencer." } },
    { t: { en: "Quote & dieline", zh: "报价与刀版", de: "Angebot & Stanzform", fr: "Devis & tracé" },
      d: { en: "Structure advice, material options and a quotation, usually within one working day.", zh: "给出结构建议、用纸方案与报价，通常一个工作日内回复。", de: "Konstruktionsberatung, Materialoptionen und ein Angebot, meist innerhalb eines Werktags.", fr: "Conseil de structure, options de matière et devis, généralement en un jour ouvré." } },
    { t: { en: "Approve the sample", zh: "确认样品", de: "Muster freigeben", fr: "Valider l'échantillon" },
      d: { en: "White sample or printed proof, revised until the structure and colour are right.", zh: "白样或印刷样，改到结构与颜色都合适为止。", de: "Weißmuster oder Andruck, überarbeitet bis Konstruktion und Farbe passen.", fr: "Échantillon blanc ou épreuve, retouché jusqu'à la bonne structure et la bonne couleur." } },
    { t: { en: "Production & shipping", zh: "量产与出货", de: "Produktion & Versand", fr: "Production & expédition" },
      d: { en: "Mass production, inspection report, export packing, FOB or DDP.", zh: "批量生产、检验报告、出口包装，FOB 或 DDP 均可。", de: "Serienfertigung, Prüfbericht, Exportverpackung, FOB oder DDP.", fr: "Fabrication, rapport de contrôle, emballage export, FOB ou DDP." } }
  ],

  /* ---------- 应用行业 ---------- */
  indSec: {
    eyebrow: { en: "Industries", zh: "应用行业", de: "Branchen", fr: "Secteurs" },
    title:   { en: "Who the boxes are for.", zh: "这些盒子，装在什么行业里。", de: "Für wen die Boxen gemacht sind.", fr: "À qui ces boîtes sont destinées." },
    lead:    {
      en: "Same plant, different rules — food-grade board, cosmetic gloss, or a jewellery flock.",
      zh: "同一个车间，不同的标准——食品级纸板、美妆亮面，或首饰植绒。",
      de: "Ein Werk, unterschiedliche Anforderungen — lebensmittelechte Pappe, Kosmetikglanz oder Samt für Schmuck.",
      fr: "Un seul atelier, des exigences différentes — carton alimentaire, brillance cosmétique ou velours pour le bijou."
    }
  },
  industries: [
    { t: { en: "Cosmetics & skincare", zh: "美妆护肤", de: "Kosmetik & Pflege", fr: "Cosmétique & soin" },
      d: { en: "Rigid boxes, drawer boxes and inserts for bottles, jars and sets.", zh: "瓶、罐与套装用的硬盒、抽屉盒与内托。", de: "Hartschachteln, Schubladenboxen und Einlagen für Flaschen, Tiegel und Sets.", fr: "Boîtes rigides, boîtes tiroir et calages pour flacons, pots et coffrets." } },
    { t: { en: "Food & confectionery", zh: "食品烘焙", de: "Lebensmittel & Süßwaren", fr: "Alimentaire & confiserie" },
      d: { en: "Folding cartons, window boxes and food-grade paperboard.", zh: "折叠彩盒、开窗盒与食品级纸板。", de: "Faltschachteln, Fensterboxen und lebensmittelechte Pappe.", fr: "Étuis pliants, boîtes à fenêtre et carton de qualité alimentaire." } },
    { t: { en: "Wine & spirits", zh: "酒水", de: "Wein & Spirituosen", fr: "Vins & spiritueux" },
      d: { en: "Book boxes, flip-top cases and gift sets with moulded inserts.", zh: "书型盒、翻盖硬盒与配模塑内衬的礼盒。", de: "Buchform-Boxen, Klappdeckelboxen und Geschenksets mit Formeinlagen.", fr: "Boîtes livre, boîtes à couvercle clapet et coffrets avec calages moulés." } },
    { t: { en: "Tea", zh: "茶叶", de: "Tee", fr: "Thé" },
      d: { en: "Lid & base boxes, tin sleeves and paper-lined gift sets.", zh: "天地盖、罐套与裱纸礼盒。", de: "Stülpdeckelboxen, Dosenschuber und kaschierte Geschenksets.", fr: "Boîtes à couvercle, fourreaux métalliques et coffrets habillés papier." } },
    { t: { en: "Electronics", zh: "消费电子", de: "Elektronik", fr: "Électronique" },
      d: { en: "Mailers, rigid boxes and protective inserts for devices.", zh: "飞机盒、硬盒与设备防护内衬。", de: "Versandschachteln, Hartschachteln und Schutzeinlagen für Geräte.", fr: "Boîtes d'expédition, boîtes rigides et calages de protection." } },
    { t: { en: "Gifts & cultural products", zh: "文创礼品", de: "Geschenke & Kulturprodukte", fr: "Cadeaux & produits culturels" },
      d: { en: "Small-batch runs, specialty paper and hand-finished details.", zh: "小批量、特种纸与手工细节。", de: "Kleinserien, Strukturpapier und handveredelte Details.", fr: "Petites séries, papiers texturés et finitions à la main." } },
    { t: { en: "Jewellery", zh: "珠宝首饰", de: "Schmuck", fr: "Bijouterie" },
      d: { en: "Flocked inserts, small rigid boxes and ribbon closures.", zh: "植绒内衬、小尺寸硬盒与丝带封口。", de: "Samteinlagen, kleine Hartschachteln und Bandverschlüsse.", fr: "Calages velours, petites boîtes rigides et fermetures à ruban." } },
    { t: { en: "Agricultural produce", zh: "农产品", de: "Agrarprodukte", fr: "Produits agricoles" },
      d: { en: "Corrugated cases, kraft boxes and printed trays.", zh: "瓦楞彩箱、牛皮纸盒与印刷托盘。", de: "Wellpappkartons, Kraftpapierboxen und bedruckte Trays.", fr: "Caisses ondulées, boîtes kraft et plateaux imprimés." } }
  ],

  /* ---------- 联系 ---------- */
  contact: {
    eyebrow: { en: "Contact", zh: "联系我们", de: "Kontakt", fr: "Contact" },
    title:   { en: "Tell us what you need to pack.", zh: "告诉我们要装什么。", de: "Sagen Sie uns, was verpackt werden soll.", fr: "Dites-nous ce que vous devez emballer." },
    lead:    {
      en: "Send a photo, a drawing or a sample. We will come back with structure options, a price and a sample date.",
      zh: "发一张照片、一份图纸或一个样品过来，我们会回复结构方案、价格与打样时间。",
      de: "Senden Sie ein Foto, eine Zeichnung oder ein Muster. Wir melden uns mit Konstruktionsoptionen, Preis und Mustertag.",
      fr: "Envoyez une photo, un plan ou un échantillon. Nous revenons avec des options de structure, un prix et une date d'échantillon."
    },
    labels: {
      name:  { en: "Your name", zh: "称呼", de: "Ihr Name", fr: "Votre nom" },
      company: { en: "Company", zh: "公司", de: "Firma", fr: "Société" },
      email: { en: "Email", zh: "邮箱", de: "E-Mail", fr: "E-mail" },
      country: { en: "Country / region", zh: "国家 / 地区", de: "Land / Region", fr: "Pays / région" },
      interest: { en: "What do you need", zh: "需求产品", de: "Was brauchen Sie", fr: "Votre besoin" },
      message: { en: "Message", zh: "需求描述", de: "Nachricht", fr: "Message" },
      options: [
        { en: "Rigid gift box", zh: "精品礼盒", de: "Hartschachtel / Geschenkbox", fr: "Boîte cadeau rigide" },
        { en: "Folding carton", zh: "折叠彩盒", de: "Faltschachtel", fr: "Étui pliant" },
        { en: "Corrugated / mailer", zh: "瓦楞箱 / 飞机盒", de: "Wellpappe / Versandschachtel", fr: "Ondulé / expédition" },
        { en: "Paper bag", zh: "手提纸袋", de: "Papiertragetasche", fr: "Sac papier" },
        { en: "Insert / accessory", zh: "内衬 / 配件", de: "Einlage / Zubehör", fr: "Calage / accessoire" },
        { en: "Not sure yet", zh: "还没确定", de: "Noch offen", fr: "Pas encore décidé" }
      ]
    },
    infoTitle: { en: "Direct", zh: "直接联系", de: "Direkt", fr: "Direct" },
    rows: [
      { k: { en: "Email", zh: "邮箱", de: "E-Mail", fr: "E-mail" }, v: "Simonyan1015@gmail.com" },
      { k: { en: "Address", zh: "地址", de: "Adresse", fr: "Adresse" },
        v: { en: "Qingdao, Shandong, China", zh: "中国 · 山东 · 青岛", de: "Qingdao, Shandong, China", fr: "Qingdao, Shandong, Chine" } }
    ],
    note: {
      en: "This form opens your mail app with the details filled in. If nothing happens, write to the address on the left.",
      zh: "提交后会打开你的邮件客户端并自动填好内容；如果没有反应，请直接发邮件到左侧地址。",
      de: "Das Formular öffnet Ihr Mailprogramm mit den Angaben. Wenn nichts passiert, schreiben Sie direkt an die Adresse links.",
      fr: "Le formulaire ouvre votre logiciel de messagerie avec les informations. S'il ne s'ouvre pas, écrivez directement à l'adresse à gauche."
    }
  },

  /* ---------- 页脚 ---------- */
  footer: {
    note:  { en: "Paper packaging · OEM / ODM · Made in China", zh: "纸制品包装 · OEM / ODM · 中国制造", de: "Papierverpackung · OEM / ODM · Hergestellt in China", fr: "Emballage papier · OEM / ODM · Fabriqué en Chine" },
    rights:{ en: "© 2026 Meridian Pack. All rights reserved.", zh: "© 2026 子午包装 保留所有权利", de: "© 2026 Meridian Pack. Alle Rechte vorbehalten.", fr: "© 2026 Meridian Pack. Tous droits réservés." }
  },

  /* ---------- SEO ---------- */
  seo: {
    title: {
      en: "Meridian Pack — Custom Gift Box & Paper Packaging Manufacturer",
      zh: "子午包装 — 精品礼盒与纸制品包装定制工厂",
      de: "Meridian Pack — Hersteller individueller Geschenkboxen und Papierverpackungen",
      fr: "Meridian Pack — Fabricant de coffrets cadeaux et d'emballages en papier"
    },
    desc: {
      en: "Custom gift box manufacturer: rigid boxes, book boxes, drawer boxes, folding cartons, corrugated cases and paper bags. Design, proofing, printing, die-cutting, wrapping and assembly in one factory. OEM / ODM.",
      zh: "精品礼盒定制工厂：天地盖、书型盒、抽屉盒、翻盖硬盒、折叠彩盒、瓦楞彩箱、手提纸袋。集包装设计、打样、印刷、模切、裱糊、成型于一体，支持 OEM / ODM 来图来样生产。",
      de: "Hersteller individueller Geschenkboxen: Hartschachteln, Buchform-Boxen, Schubladenschachteln, Faltschachteln, Wellpappkartons und Papiertragetaschen. Design, Bemusterung, Druck, Stanzen, Beziehen und Montage in einem Werk. OEM / ODM.",
      fr: "Fabricant de coffrets sur mesure : boîtes rigides, boîtes livre, boîtes tiroir, étuis pliants, caisses ondulées et sacs papier. Design, échantillonnage, impression, découpe, habillage et montage dans un seul atelier. OEM / ODM."
    }
  }
};
