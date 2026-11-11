/* =========================================================
   Portfolio – Nicolò Cecchetto
   - Traduzioni IT/EN (data-i18n)
   - Tema chiaro/scuro con localStorage
   - Barra di progresso, sezione attiva, animazioni allo scroll
   ========================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     1. TRADUZIONI
     Ogni chiave corrisponde a un attributo data-i18n,
     data-i18n-aria (aria-label) o data-i18n-content (meta).
     --------------------------------------------------------- */
  var translations = {
    it: {
      meta_title: "Nicolò Cecchetto | Digital Management, Operations e Business Development",
      meta_desc: "Portfolio di Nicolò Cecchetto, studente di Digital Management a Ca' Foscari, in Erasmus+ a Stoccolma. Operations, business development e analisi aziendale. Cerco un tirocinio di circa 600 ore.",
      skip: "Vai al contenuto",

      aria_home: "Torna all'inizio",
      aria_nav: "Navigazione principale",
      aria_theme: "Cambia tema chiaro/scuro",
      aria_menu: "Apri il menu",
      aria_menu_close: "Chiudi il menu",
      aria_lang: "Switch to English",
      aria_linkedin: "Apri il profilo LinkedIn di Nicolò Cecchetto (si apre in una nuova scheda)",

      nav_about: "Chi sono",
      nav_experience: "Esperienza",
      nav_education: "Formazione",
      nav_skills: "Competenze",
      nav_languages: "Lingue",
      nav_interests: "Interessi",
      nav_contact: "Contatti",

      hero_badge: "Disponibile per tirocinio",
      hero_hello: "Ciao, sono",
      hero_title: "Studente di Digital Management | Operations, Business Development e Analisi Aziendale",
      hero_tagline: "Approccio pratico e analitico, esperienza sul campo in una PMI e uno sguardo internazionale.",
      hero_cv: "Scarica CV",
      hero_contact: "Contattami",
      hero_location: "Stoccolma, Svezia",

      sec_about: "Chi sono",
      about_p1: "Sono uno studente di Digital Management all'Università Ca' Foscari di Venezia, in un corso interamente in inglese, e attualmente sto vivendo un'esperienza Erasmus+ a Stoccolma presso la Södertörn University.",
      about_p2: "Ho maturato esperienza pratica nelle attività operative di una PMI italiana: vendite, acquisti, analisi dei ricavi, controllo dei costi, fatturazione, e-commerce e marketing digitale. Ho un approccio pratico e analitico e ho lavorato in contesti internazionali e multiculturali.",
      about_p3: "Ragiono prima di agire e, quando c'è da lavorare, non guardo mai l'orario. Ogni estate lavoro nelle attività di famiglia tra Jesolo e Cavallino-Treporti.",
      trait_outgoing: "Estroverso",
      trait_structured: "Schematico",
      trait_punctual: "Puntuale",
      trait_driven: "Ultra motivato",
      trait_resourceful: "Intraprendente",
      trait_fast: "Impara in fretta",
      card_now_label: "Ora",
      card_now: "Erasmus+ a Stoccolma, Södertörn University",
      card_goal_label: "Obiettivo",
      card_goal: "Tirocinio di circa 600 ore nella parte finale del percorso universitario; disponibile anche per opportunità durante l'Erasmus a Stoccolma.",
      card_study_label: "Studi",
      card_study: "Digital Management, Università Ca' Foscari Venezia",

      sec_experience: "Esperienza professionale",
      exp1_role: "Assistente Operations e Marketing Digitale",
      exp1_note: "Attività di famiglia; oggi gestisco contabilità e backend.",
      exp1_b1: "Supporto alle vendite quotidiane e alla gestione delle relazioni con i clienti, incluse interazioni B2B con clienti internazionali.",
      exp1_b2: "Emissione di fatture, monitoraggio dei costi operativi e supporto alla gestione amministrativa e finanziaria.",
      exp1_b3: "Analisi dell'andamento dei ricavi circa ogni due mesi, con confronto con gli anni precedenti per individuare tendenze e supportare le decisioni aziendali.",
      exp1_b4: "Gestione degli approvvigionamenti e coordinamento degli ordini con i fornitori, con attenzione a disponibilità, qualità ed efficienza dei costi.",
      exp1_b5: "Gestione di campagne Meta Ads e supporto all'acquisizione digitale di clienti.",
      exp1_b6: "Sviluppo e gestione del sito e-commerce aziendale su Shopify e supporto alle attività commerciali collegate.",
      exp2_role: "Stagista Contabilità e Paghe",
      exp2_note: "Tirocinio di un mese",
      exp2_b1: "Supporto all'elaborazione delle buste paga dei dipendenti delle aziende clienti e alle procedure amministrative e contabili.",
      exp2_b2: "Gestione di informazioni aziendali e del personale riservate, con precisione e attenzione ai dettagli.",

      sec_education: "Formazione",
      edu1_school: "Università Ca' Foscari Venezia",
      edu1_title: "Laurea triennale in Digital Management",
      edu1_desc: "Percorso su trasformazione digitale, strategia aziendale, management, finanza, marketing e decisioni basate sui dati.",
      edu1_exams: "Esami rilevanti",
      ex1: "Microeconomia",
      ex2: "Macroeconomia",
      ex3: "Diritto dell'Informatica",
      ex4: "Management e Innovazione",
      ex5: "Organizzazione nel Mondo Digitale",
      ex6: "E-Business",
      ex7: "Finanziamento delle Imprese ad Alta Crescita",
      ex8: "Marketing Strategico",
      ex9: "Statistica e Programmazione",
      edu2_date: "Set 2026 – Gen 2027",
      edu2_status: "In corso",
      edu2_title: "Erasmus+ · Södertörn University, Stoccolma",
      edu2_desc: "Corsi su innovazione e sviluppo sostenibile.",
      edu3_title: "Diploma in Relazioni Internazionali per il Marketing",

      sec_skills: "Competenze",
      cat_business: "Business",
      s_sales: "Vendite e relazione con i clienti",
      s_fin: "Analisi finanziaria e controllo costi",
      s_proc: "Acquisti e gestione fornitori",
      s_rev: "Analisi dei ricavi e reportistica",
      s_ecom: "Gestione e-commerce",
      s_inv: "Fatturazione e amministrazione",
      cat_tools: "Strumenti",
      s_suites: "Pacchetto Google e Microsoft",
      s_video: "Editing video base",
      s_ai: "Modelli di IA (ChatGPT, Claude e altri)",
      cat_tech: "Tecniche",
      s_python: "Python (livello accademico)",
      s_data: "Analisi dei dati (livello accademico)",

      sec_languages: "Lingue",
      lang_it: "Italiano",
      lang_it_level: "Madrelingua",
      lang_en: "Inglese",
      lang_de: "Tedesco",
      lang_ru: "Russo",
      lang_scale: "Scala CEFR: A1 · A2 · B1 · B2 · C1 · C2",

      sec_interests: "Interessi",
      interests_lead: "Il settore dei camping village e del turismo open air è quello in cui ho più esperienza, insieme all'illuminotecnica, che mi affascina.",
      int_entre: "Imprenditorialità",
      int_bizdev: "Business development",
      int_camping: "Camping village e turismo open air",
      int_light: "Illuminotecnica",
      int_travel: "Viaggi",
      int_sport: "Sport",
      int_fishing: "Pesca",

      sec_contact: "Contatti",
      contact_lead: "Cerco un tirocinio di circa 600 ore. Se pensi che possiamo lavorare insieme, scrivimi.",
      contact_email: "Scrivimi via email",
      contact_linkedin: "Vedi il profilo LinkedIn",
      contact_loc_label: "Sede",

      footer_rights: "Tutti i diritti riservati",
      footer_top: "Torna su ↑"
    },

    en: {
      meta_title: "Nicolò Cecchetto | Digital Management, Operations & Business Development",
      meta_desc: "Portfolio of Nicolò Cecchetto, Digital Management student at Ca' Foscari University, on Erasmus+ in Stockholm. Operations, business development and business analysis. Looking for an internship of about 600 hours.",
      skip: "Skip to content",

      aria_home: "Back to top",
      aria_nav: "Main navigation",
      aria_theme: "Toggle light/dark theme",
      aria_menu: "Open menu",
      aria_menu_close: "Close menu",
      aria_lang: "Passa all'italiano",
      aria_linkedin: "Open Nicolò Cecchetto's LinkedIn profile (opens in a new tab)",

      nav_about: "About",
      nav_experience: "Experience",
      nav_education: "Education",
      nav_skills: "Skills",
      nav_languages: "Languages",
      nav_interests: "Interests",
      nav_contact: "Contact",

      hero_badge: "Available for an internship",
      hero_hello: "Hi, I'm",
      hero_title: "Digital Management Student | Operations, Business Development & Business Analysis",
      hero_tagline: "A practical, analytical mindset, hands-on experience in an Italian SME and an international outlook.",
      hero_cv: "Download CV",
      hero_contact: "Contact me",
      hero_location: "Stockholm, Sweden",

      sec_about: "About me",
      about_p1: "I'm a Digital Management student at Ca' Foscari University of Venice, in a programme taught entirely in English, and I'm currently on an Erasmus+ exchange at Södertörn University in Stockholm.",
      about_p2: "I've gained hands-on experience in the day-to-day operations of an Italian SME: sales, purchasing, revenue analysis, cost control, invoicing, e-commerce and digital marketing. My approach is practical and analytical, and I'm used to working in international, multicultural settings.",
      about_p3: "I think before I act, and when there's work to be done I never watch the clock. Every summer I work in my family's businesses between Jesolo and Cavallino-Treporti.",
      trait_outgoing: "Outgoing",
      trait_structured: "Structured",
      trait_punctual: "Punctual",
      trait_driven: "Highly motivated",
      trait_resourceful: "Resourceful",
      trait_fast: "Quick learner",
      card_now_label: "Now",
      card_now: "Erasmus+ in Stockholm, Södertörn University",
      card_goal_label: "Goal",
      card_goal: "An internship of about 600 hours at the end of my degree; also open to opportunities during my Erasmus in Stockholm.",
      card_study_label: "Studies",
      card_study: "Digital Management, Ca' Foscari University of Venice",

      sec_experience: "Work experience",
      exp1_role: "Operations & Digital Marketing Assistant",
      exp1_note: "Family business; today I handle accounting and back-office.",
      exp1_b1: "Day-to-day sales support and customer relationship management, including B2B interactions with international clients.",
      exp1_b2: "Invoicing, operating cost monitoring and support for administrative and financial management.",
      exp1_b3: "Revenue trend analysis roughly every two months, compared with previous years to spot trends and support business decisions.",
      exp1_b4: "Procurement management and order coordination with suppliers, focusing on availability, quality and cost efficiency.",
      exp1_b5: "Management of Meta Ads campaigns and support for digital customer acquisition.",
      exp1_b6: "Development and management of the company's Shopify e-commerce site and support for related commercial activities.",
      exp2_role: "Accounting & Payroll Intern",
      exp2_note: "One-month internship",
      exp2_b1: "Support in processing client companies' employee payslips and in administrative and accounting procedures.",
      exp2_b2: "Handling of confidential company and employee information with accuracy and attention to detail.",

      sec_education: "Education",
      edu1_school: "Ca' Foscari University of Venice",
      edu1_title: "Bachelor's degree in Digital Management",
      edu1_desc: "A programme covering digital transformation, business strategy, management, finance, marketing and data-driven decision-making.",
      edu1_exams: "Relevant courses",
      ex1: "Microeconomics",
      ex2: "Macroeconomics",
      ex3: "IT Law",
      ex4: "Management and Innovation",
      ex5: "Organisation in the Digital World",
      ex6: "E-Business",
      ex7: "Financing High-Growth Firms",
      ex8: "Strategic Marketing",
      ex9: "Statistics and Programming",
      edu2_date: "Sep 2026 – Jan 2027",
      edu2_status: "Ongoing",
      edu2_title: "Erasmus+ · Södertörn University, Stockholm",
      edu2_desc: "Courses on innovation and sustainable development.",
      edu3_title: "Diploma in International Relations for Marketing",

      sec_skills: "Skills",
      cat_business: "Business",
      s_sales: "Sales & customer relations",
      s_fin: "Financial analysis & cost control",
      s_proc: "Purchasing & supplier management",
      s_rev: "Revenue analysis & reporting",
      s_ecom: "E-commerce management",
      s_inv: "Invoicing & administration",
      cat_tools: "Tools",
      s_suites: "Google & Microsoft suites",
      s_video: "Basic video editing",
      s_ai: "AI models (ChatGPT, Claude and others)",
      cat_tech: "Technical",
      s_python: "Python (academic level)",
      s_data: "Data analysis (academic level)",

      sec_languages: "Languages",
      lang_it: "Italian",
      lang_it_level: "Native",
      lang_en: "English",
      lang_de: "German",
      lang_ru: "Russian",
      lang_scale: "CEFR scale: A1 · A2 · B1 · B2 · C1 · C2",

      sec_interests: "Interests",
      interests_lead: "Camping villages and open-air tourism are the sector I know best, along with lighting technology, which fascinates me.",
      int_entre: "Entrepreneurship",
      int_bizdev: "Business development",
      int_camping: "Camping villages & open-air tourism",
      int_light: "Lighting technology",
      int_travel: "Travel",
      int_sport: "Sport",
      int_fishing: "Fishing",

      sec_contact: "Get in touch",
      contact_lead: "I'm looking for an internship of about 600 hours. If you think we could work together, get in touch.",
      contact_email: "Send me an email",
      contact_linkedin: "View LinkedIn profile",
      contact_loc_label: "Based in",

      footer_rights: "All rights reserved",
      footer_top: "Back to top ↑"
    }
  };

  var LANG_KEY = "nc-lang";
  var THEME_KEY = "nc-theme";
  var root = document.documentElement;

  /* localStorage "sicuro": non genera errori se bloccato (es. navigazione privata) */
  function store(key, value) {
    try { if (value === undefined) return localStorage.getItem(key); localStorage.setItem(key, value); } catch (e) { /* ignora */ }
    return null;
  }

  /* ---------------------------------------------------------
     2. LINGUA
     --------------------------------------------------------- */
  var langBtn = document.getElementById("langToggle");
  var langLabel = document.getElementById("langLabel");
  var menuBtn = document.getElementById("menuToggle");
  var currentLang = "it";

  function t(key) {
    var dict = translations[currentLang] || translations.it;
    return dict[key] !== undefined ? dict[key] : translations.it[key];
  }

  function applyLanguage(lang) {
    currentLang = translations[lang] ? lang : "it";
    root.setAttribute("lang", currentLang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n"));
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-aria"));
      if (v !== undefined) el.setAttribute("aria-label", v);
    });
    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-content"));
      if (v !== undefined) el.setAttribute("content", v);
    });

    // Og:locale coerente con la lingua scelta
    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", currentLang === "it" ? "it_IT" : "en_GB");

    // Il pulsante mostra la lingua verso cui si passa
    langLabel.textContent = currentLang === "it" ? "EN" : "IT";
    langBtn.setAttribute("aria-label", t("aria_lang"));
    updateMenuLabel();
  }

  langBtn.addEventListener("click", function () {
    var next = currentLang === "it" ? "en" : "it";
    applyLanguage(next);
    store(LANG_KEY, next);
  });

  /* ---------------------------------------------------------
     3. TEMA CHIARO / SCURO
     (il valore iniziale è già impostato nello script dell'<head>)
     --------------------------------------------------------- */
  var themeBtn = document.getElementById("themeToggle");
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeMeta) themeMeta.setAttribute("content", theme === "light" ? "#f6f8fc" : "#0a0b10");
  }

  themeBtn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next);
    store(THEME_KEY, next);
  });

  /* ---------------------------------------------------------
     4. MENU MOBILE
     --------------------------------------------------------- */
  var navLinks = document.getElementById("navLinks");

  function updateMenuLabel() {
    var open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-label", open ? t("aria_menu_close") : t("aria_menu"));
  }

  function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", String(open));
    navLinks.classList.toggle("open", open);
    updateMenuLabel();
  }

  menuBtn.addEventListener("click", function () {
    setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
  });
  navLinks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
      setMenu(false);
      menuBtn.focus();
    }
  });
  // Chiude il menu se si torna al layout desktop
  window.matchMedia("(min-width: 1000px)").addEventListener("change", function (e) {
    if (e.matches) setMenu(false);
  });

  /* ---------------------------------------------------------
     5. SCROLL: barra di progresso + navbar
     --------------------------------------------------------- */
  var progress = document.getElementById("scrollProgress");
  var navbar = document.getElementById("navbar");
  var ticking = false;

  function onScroll() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    var ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    progress.style.transform = "scaleX(" + ratio + ")";
    navbar.classList.toggle("scrolled", window.scrollY > 10);
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ---------------------------------------------------------
     6. LINK ATTIVO IN BASE ALLA SEZIONE VISIBILE
     --------------------------------------------------------- */
  var links = Array.prototype.slice.call(navLinks.querySelectorAll("a"));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  function setActive(id) {
    links.forEach(function (a) {
      var active = a.getAttribute("href") === "#" + id;
      a.classList.toggle("active", active);
      if (active) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  }

  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------------------------------------------------------
     7. ANIMAZIONI ALLO SCROLL (fade/slide + cascata)
     --------------------------------------------------------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Elementi dentro [data-stagger]: ricevono .reveal e un ritardo progressivo
  document.querySelectorAll("[data-stagger]").forEach(function (group) {
    Array.prototype.slice.call(group.children).forEach(function (child, i) {
      child.classList.add("reveal");
      child.style.setProperty("--d", i * 90 + "ms");
    });
  });

  var revealEls = document.querySelectorAll(".reveal");

  function showEl(el) {
    el.classList.add("in-view");
    // A transizione finita rimuove la classe: così il ritardo non rallenta gli effetti hover
    var delay = parseInt((el.style.getPropertyValue("--d") || "0"), 10) || 0;
    window.setTimeout(function () { el.classList.remove("reveal", "in-view"); }, 800 + delay);
  }

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.remove("reveal"); });
  } else {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { showEl(entry.target); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------------------------------------------------------
     8. AVVIO
     --------------------------------------------------------- */
  var savedLang = store(LANG_KEY);
  applyLanguage(savedLang === "en" ? "en" : "it");   // default: italiano

  var themeNow = root.getAttribute("data-theme");
  applyTheme(themeNow === "light" ? "light" : "dark");

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
