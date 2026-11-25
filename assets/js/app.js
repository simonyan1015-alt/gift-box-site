/* ==========================================================================
   Meridian Pack — app.js
   负责：双语渲染 / 导航 / 表单 / 内置可视化编辑器
   ========================================================================== */
(function () {
  "use strict";

  var S = window.SITE;
  var LS_KEY = "meridian.content.v1";
  var LANG_KEY = "meridian.lang";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- path helpers ---------- */
  function getPath(o, p) {
    if (!o || !p) return undefined;
    var parts = p.split("."), cur = o;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }
  function setPath(o, p, v) {
    var parts = p.split("."), cur = o;
    for (var i = 0; i < parts.length - 1; i++) {
      var k = parts[i];
      if (cur[k] == null) cur[k] = /^\d+$/.test(parts[i + 1]) ? [] : {};
      cur = cur[k];
    }
    cur[parts[parts.length - 1]] = v;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* ---------- stored overrides ---------- */
  var ov = {};
  try { ov = JSON.parse(localStorage.getItem(LS_KEY) || "{}") || {}; } catch (e) { ov = {}; }
  Object.keys(ov).forEach(function (k) { setPath(S, k, ov[k]); });

  /* ---------- language ---------- */
  var LANGS = ["en", "zh", "de", "fr"];
  var LANG_CODE = { en: "EN", zh: "ZH", de: "DE", fr: "FR" };
  var LANG_HTML = { en: "en", zh: "zh-CN", de: "de", fr: "fr" };
  var LANG_NAME = { en: "English", zh: "中文", de: "Deutsch", fr: "Français" };

  var qs = new URLSearchParams(location.search);
  var lang = qs.get("lang") || localStorage.getItem(LANG_KEY) || "en";
  if (LANGS.indexOf(lang) < 0) lang = "en";
  function t(v) {
    if (v && typeof v === "object" && !Array.isArray(v) && "en" in v) {
      return v[lang] != null && v[lang] !== "" ? v[lang] : v.en;
    }
    return v == null ? "" : v;
  }
  function ui(en, zh) { return lang === "zh" ? zh : en; }

  /* ======================================================================
     RENDER
     ====================================================================== */
  function render() {
    document.documentElement.lang = LANG_HTML[lang] || "en";

    document.title = t(S.seo.title);
    var md = $('meta[name="description"]');
    if (md) md.setAttribute("content", t(S.seo.desc));
    var ogt = $('meta[property="og:title"]');
    if (ogt) ogt.setAttribute("content", t(S.seo.title));

    /* --- plain text bindings --- */
    $$("[data-edit]").forEach(function (el) {
      var v = getPath(S, el.getAttribute("data-edit"));
      el.textContent = t(v);
    });

    /* --- nav --- */
    var navHtml = S.nav.map(function (n) {
      return '<a href="' + n.href + '">' + esc(t(n.label)) + "</a>";
    }).join("");
    $("#nav").innerHTML = navHtml;
    $("#ftrNav").innerHTML = navHtml;

    /* --- trust strip --- */
    $("#trust").innerHTML = S.trust.map(function (it, i) {
      return '<li data-edit="trust.' + i + '">' + esc(t(it)) + "</li>";
    }).join("");

    /* --- capability --- */
    $("#caps").innerHTML = S.caps.map(function (c, i) {
      return '<li class="rv">' +
        '<span class="n">' + String(i + 1).padStart(2, "0") + "</span>" +
        "<h3 data-edit=\"caps." + i + '.t">' + esc(t(c.t)) + "</h3>" +
        "<p data-edit=\"caps." + i + '.d">' + esc(t(c.d)) + "</p></li>";
    }).join("");

    /* --- products --- */
    var prodHtml = S.products.map(function (p, i) {
      return '<article class="prod rv">' +
        '<div class="prod-ph">' +
          '<span class="prod-idx">' + String(i + 1).padStart(2, "0") + "</span>" +
          '<img data-img="products.' + i + '.image" data-img-alt="products.' + i + '.name" alt="" loading="lazy">' +
        "</div>" +
        '<div class="prod-txt">' +
          "<h3 data-edit=\"products." + i + '.name">' + esc(t(p.name)) + "</h3>" +
          "<p data-edit=\"products." + i + '.desc">' + esc(t(p.desc)) + "</p>" +
        "</div></article>";
    }).join("");

    var moreHtml = '<div class="prod-more rv">' +
      "<div>" +
        '<span class="plus" aria-hidden="true">+</span>' +
        '<h3 data-edit="prodMore.title" style="margin-top:14px">' + esc(t(S.prodMore.title)) + "</h3>" +
        '<ul id="moreList">' +
          S.prodMore.items.map(function (it, i) {
            return '<li data-edit="prodMore.items.' + i + '">' + esc(t(it)) + "</li>";
          }).join("") +
        "</ul>" +
      "</div></div>";

    $("#prodGrid").innerHTML = prodHtml + moreHtml;

    /* --- finishes --- */
    $("#finList").innerHTML = S.finishes.map(function (f, i) {
      return '<div class="fin-item rv">' +
        '<dt data-edit="finishes.' + i + '.t">' + esc(t(f.t)) + "</dt>" +
        '<dd data-edit="finishes.' + i + '.d">' + esc(t(f.d)) + "</dd></div>";
    }).join("");

    /* --- factory points --- */
    $("#facPoints").innerHTML = S.facPoints.map(function (p, i) {
      return '<li class="rv" data-edit="facPoints.' + i + '">' + esc(t(p)) + "</li>";
    }).join("");

    /* --- numbers --- */
    $("#nums").innerHTML = S.nums.map(function (n, i) {
      return "<div>" +
        '<dt data-edit="nums.' + i + '.v">' + esc(t(n.v)) + "</dt>" +
        '<dd data-edit="nums.' + i + '.l">' + esc(t(n.l)) + "</dd></div>";
    }).join("");

    /* --- flow --- */
    $("#flow").innerHTML = S.flow.map(function (f, i) {
      return '<li class="rv">' +
        '<span class="n">' + String(i + 1).padStart(2, "0") + "</span>" +
        "<h3 data-edit=\"flow." + i + '.t">' + esc(t(f.t)) + "</h3>" +
        "<p data-edit=\"flow." + i + '.d">' + esc(t(f.d)) + "</p></li>";
    }).join("");

    /* --- industries --- */
    $("#indGrid").innerHTML = S.industries.map(function (o, i) {
      return '<div class="rv">' +
        '<span class="no">' + String(i + 1).padStart(2, "0") + "</span>" +
        "<h3 data-edit=\"industries." + i + '.t">' + esc(t(o.t)) + "</h3>" +
        "<p data-edit=\"industries." + i + '.d">' + esc(t(o.d)) + "</p></div>";
    }).join("");

    /* --- contact rows --- */
    $("#ctRows").innerHTML = S.contact.rows.map(function (r, i) {
      return '<dt data-edit="contact.rows.' + i + '.k">' + esc(t(r.k)) + "</dt>" +
             '<dd data-edit="contact.rows.' + i + '.v">' + esc(t(r.v)) + "</dd>";
    }).join("");

    /* --- interest select --- */
    var sel = $("#interestSel");
    var keep = sel.value;
    sel.innerHTML = S.contact.labels.options.map(function (o, i) {
      return '<option value="' + i + '">' + esc(t(o)) + "</option>";
    }).join("");
    if (keep) sel.value = keep;

    /* --- language switcher --- */
    var cur = $("#langCur");
    if (cur) cur.textContent = LANG_CODE[lang] || "EN";
    $$("#langMenu [data-lang]").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
    $("#langBtn").setAttribute("aria-label", ui("Language", "语言") + ": " + (LANG_NAME[lang] || "English"));

    /* --- images (after all dynamic lists exist) --- */
    $$("[data-img]").forEach(function (img) {
      var src = getPath(S, img.getAttribute("data-img"));
      if (src && img.getAttribute("src") !== src) img.setAttribute("src", src);
      var ak = img.getAttribute("data-img-alt");
      if (ak) img.alt = t(getPath(S, ak));
    });

    if (editing) applyEdit();
    observeReveal();
  }

  /* ======================================================================
     NAV / HEADER
     ====================================================================== */
  var hdr = $("#hdr");
  function onScroll() {
    hdr.classList.toggle("is-solid", window.scrollY > 30);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var burger = $("#burger");
  burger.addEventListener("click", function () {
    var open = document.body.classList.toggle("nav-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  function closeNav() {
    document.body.classList.remove("nav-open");
    burger.setAttribute("aria-expanded", "false");
  }
  document.addEventListener("click", function (e) {
    if (e.target.closest(".nav a")) closeNav();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeNav(); }
  });

  document.addEventListener("click", function (e) {
    if (!editing) return;
    var a = e.target.closest && e.target.closest("a");
    if (a && a.querySelector('[contenteditable="true"]')) e.preventDefault();
  }, true);

  /* ======================================================================
     LANGUAGE — dropdown
     ====================================================================== */
  var langWrap = $("#lang");
  var langBtn = $("#langBtn");
  var langMenu = $("#langMenu");

  function openLang(open) {
    langWrap.classList.toggle("open", open);
    langBtn.setAttribute("aria-expanded", open ? "true" : "false");
    langMenu.hidden = !open;
  }
  langBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    openLang(langMenu.hidden);
  });
  document.addEventListener("click", function (e) {
    if (!langMenu.hidden && !langWrap.contains(e.target)) openLang(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !langMenu.hidden) { openLang(false); langBtn.focus(); }
  });

  $$("#langMenu [data-lang]").forEach(function (b) {
    b.addEventListener("click", function () {
      lang = b.getAttribute("data-lang");
      localStorage.setItem(LANG_KEY, lang);
      $("#editFlag").textContent = editing ? flagText() : "";
      openLang(false);
      render();
    });
  });

  /* ======================================================================
     REVEAL
     ====================================================================== */
  var io = null;
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
  }
  function observeReveal() {
    if (!io) {
      $$(".rv").forEach(function (el) { el.classList.add("in"); });
      return;
    }
    $$(".rv:not(.in)").forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 6, 5) * 55) + "ms";
      io.observe(el);
    });
  }

  /* ======================================================================
     FORM → mailto
     ====================================================================== */
  var form = $("#form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements;
    var name = f.name.value.trim();
    var email = f.email.value.trim();
    var ok = true;
    [f.name, f.email].forEach(function (el) {
      var bad = !el.value.trim() || (el.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()));
      el.classList.toggle("invalid", bad);
      if (bad) ok = false;
    });
    if (!ok) { toast(lang === "zh" ? "请填写称呼和有效邮箱" : "Please add your name and a valid email"); return; }

    var to = "Simonyan1015@gmail.com";
    var first = S.contact.rows[0];
    if (first && typeof first.v === "string" && first.v.indexOf("@") > -1) to = first.v;
    var interest = t(S.contact.labels.options[Number(f.interest.value)] || {});
    var subject = lang === "zh"
      ? "询盘：" + (interest || "包装定制") + " - " + (f.company.value || name)
      : "Enquiry: " + (interest || "Packaging") + " - " + (f.company.value || name);
    var body = [
      (lang === "zh" ? "称呼：" : "Name: ") + name,
      (lang === "zh" ? "公司：" : "Company: ") + f.company.value,
      (lang === "zh" ? "邮箱：" : "Email: ") + email,
      (lang === "zh" ? "国家/地区：" : "Country: ") + f.country.value,
      (lang === "zh" ? "需求：" : "Interest: ") + interest,
      "",
      f.message.value
    ].join("\n");

    window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    toast(lang === "zh" ? "已打开邮件客户端" : "Opening your mail app");
  });

  /* ======================================================================
     TOAST
     ====================================================================== */
  var toastEl = $("#toast"), toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.hidden = false;
    requestAnimationFrame(function () { toastEl.classList.add("show"); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
      setTimeout(function () { toastEl.hidden = true; }, 320);
    }, 2600);
  }

  /* ======================================================================
     EDITOR
     ====================================================================== */
  var editing = false;
  var toggle = $("#editToggle");
  var bar = $("#editBar");
  var flag = $("#editFlag");

  function saveOv(k, v) {
    ov[k] = v;
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(ov));
    } catch (err) {
      toast(lang === "zh" ? "本地存储已满，请先导出内容" : "Storage full — export your content first");
    }
  }

  function applyEdit() {
    $$("[data-edit]").forEach(function (el) {
      el.contentEditable = "true";
      el.spellcheck = false;
      if (!el.__bound) {
        el.__bound = true;
        el.addEventListener("input", function () {
          var k = el.getAttribute("data-edit");
          var v = el.innerText.replace(/\u00a0/g, " ").replace(/\s*\n+\s*/g, " ").trim();
          setPath(S, k, v);
          saveOv(k, v);
        });
        el.addEventListener("keydown", function (e) {
          if (e.key === "Enter") { e.preventDefault(); el.blur(); }
        });
        el.addEventListener("paste", function (e) {
          e.preventDefault();
          var txt = (e.clipboardData || window.clipboardData).getData("text");
          document.execCommand("insertText", false, txt.replace(/\s*\n+\s*/g, " "));
        });
      }
    });

    $$("[data-img]").forEach(function (img) {
      var wrap = img.parentElement;
      if (!wrap || wrap.querySelector(":scope > .img-edit")) return;
      if (getComputedStyle(wrap).position === "static") wrap.style.position = "relative";
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "img-edit";
      btn.innerHTML = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M11 2.5l2.5 2.5L5 13.5H2.5V11L11 2.5z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg><span>' +
        (lang === "zh" ? "更换图片" : "Replace image") + "</span>";
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        pickImage(img);
      });
      wrap.appendChild(btn);
    });
  }

  function clearEditState() {
    $$("[data-edit]").forEach(function (el) { el.contentEditable = "false"; });
  }

  function pickImage(img) {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", function () {
      var file = input.files && input.files[0];
      if (!file) return;
      compress(file, function (dataUrl) {
        var k = img.getAttribute("data-img");
        setPath(S, k, dataUrl);
        img.src = dataUrl;
        saveOv(k, dataUrl);
        toast(lang === "zh" ? "图片已替换（记得导出）" : "Image replaced — remember to export");
      });
    });
    input.click();
  }

  function compress(file, cb) {
    var url = URL.createObjectURL(file);
    var im = new Image();
    im.onload = function () {
      var max = 1600;
      var w = im.naturalWidth, h = im.naturalHeight;
      var scale = Math.min(1, max / Math.max(w, h));
      var c = document.createElement("canvas");
      c.width = Math.round(w * scale);
      c.height = Math.round(h * scale);
      var ctx = c.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(im, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      cb(c.toDataURL("image/jpeg", 0.82));
    };
    im.onerror = function () { URL.revokeObjectURL(url); };
    im.src = url;
  }

  function flagText() {
    if (lang === "zh") return "编辑中 · 中文";
    return "Editing · " + (LANG_NAME[lang] || "English");
  }

  function setEditing(on) {
    editing = on;
    document.body.classList.toggle("editing", on);
    bar.hidden = !on;
    toggle.style.display = on ? "none" : "";
    flag.textContent = on ? flagText() : "";
    $("#editHint").textContent = on
      ? (lang === "zh" ? "点击文字直接修改；点图片右上角按钮可替换图片。修改会自动保存到本机浏览器。" : "Click any text to edit. Use the button on an image to replace it. Changes save in this browser automatically.")
      : "";
    if (on) { applyEdit(); window.scrollTo({ top: 0, behavior: "smooth" }); }
    else { clearEditState(); }
    toggle.setAttribute("aria-pressed", on ? "true" : "false");
  }

  toggle.addEventListener("click", function () { setEditing(true); });
  $("#ebDone").addEventListener("click", function () { setEditing(false); });

  $("#ebReset").addEventListener("click", function () {
    var msg = lang === "zh" ? "确定放弃所有修改，恢复初始内容？" : "Discard all edits and restore the original content?";
    if (confirm(msg)) {
      localStorage.removeItem(LS_KEY);
      location.reload();
    }
  });

  $("#ebExport").addEventListener("click", function () {
    var txt = "/* =============================================================\n" +
      "   Meridian Pack — site content (exported " + new Date().toISOString().slice(0, 10) + ")\n" +
      "   用这个文件覆盖 assets/js/content.js 即可永久生效 / \n" +
      "   Replace assets/js/content.js with this file to publish permanently.\n" +
      "   ============================================================= */\n\n" +
      "window.SITE = " + JSON.stringify(S, null, 2) + ";\n";
    download("content.js", txt);
    toast(lang === "zh" ? "已下载 content.js" : "content.js downloaded");
  });

  function download(name, text) {
    var blob = new Blob([text], { type: "text/javascript;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  /* ---------- boot ---------- */
  render();
  if (qs.get("edit") === "1") setEditing(true);
})();
