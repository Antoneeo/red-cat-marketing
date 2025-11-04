document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    "nav_how_it_works": {
      "en": "How It Works",
      "it": "Come Funziona"
    },
    "nav_why_red_cat": {
      "en": "Why RED CAT?",
      "it": "Perché RED CAT?"
    },
    "nav_demo_button": {
      "en": "Request a Demo",
      "it": "Richiedi una Demo"
    },
    "hero_title": {
      "en": "Stop Drowning in Compliance Paperwork.",
      "it": "Smetti di Annegare nella Burocrazia della Compliance."
    },
    "hero_subtitle": {
      "en": "Your expert co-pilot for navigating the Radio Equipment Directive (RED). AI-powered analysis in minutes, not months.",
      "it": "Il tuo co-pilota esperto per navigare la Direttiva sulle Apparecchiature Radio (RED). Analisi basata su AI in minuti, non mesi."
    },
    "solution_title": {
      "en": "AI-Powered Compliance in Minutes, Not Months.",
      "it": "Compliance Potenziata dall'AI in Minuti, non Mesi."
    },
    "solution_p": {
      "en": "RED CAT (RED Compliance Assistant Tool) is a specialized tool that uses AI to read your technical documents, map them to RED requirements, and generate the evidence you need. It is designed to evolve and incorporate the upcoming Cyber Resilience Act (CRA) requirements.",
      "it": "RED CAT (RED Compliance Assistant Tool) è uno strumento specializzato che usa l'AI per leggere i tuoi documenti tecnici, mapparli ai requisiti RED e generare le prove di cui hai bisogno. È progettato per evolvere e incorporare i futuri requisiti del Cyber Resilience Act (CRA)."
    },
    "how_it_works_title": {
      "en": "From Documents to Declaration in 3 Simple Steps.",
      "it": "Dai Documenti alla Dichiarazione in 3 Semplici Passi."
    },
    "step1_title": {
      "en": "1. Upload Your Docs",
      "it": "1. Carica i Tuoi Documenti"
    },
    "step1_p": {
      "en": "Securely upload your technical specifications, user manuals, and security whitepapers. Our AI immediately validates them for completeness, ensuring you have the right foundation for your analysis.",
      "it": "Carica in modo sicuro le tue specifiche tecniche, manuali utente e whitepaper sulla sicurezza. La nostra AI li convalida immediatamente per verificarne la completezza, assicurandoti di avere la base giusta per la tua analisi."
    },
    "step2_title": {
      "en": "2. AI Analyzes & Maps Evidence",
      "it": "2. L'AI Analizza e Mappa le Prove"
    },
    "step2_p": {
      "en": "Our AI reads the documents and provides evidence-based justifications for each compliance requirement, showing you the exact source text. This drastically reduces manual effort and the risk of human error.",
      "it": "La nostra AI legge i documenti e fornisce giustificazioni basate sulle prove per ogni requisito di conformità, mostrandoti il testo sorgente esatto. Ciò riduce drasticamente lo sforzo manuale e il rischio di errore umano."
    },
    "step3_title": {
      "en": "3. Generate Professional Reports",
      "it": "3. Genera Report Professionali"
    },
    "step3_p": {
      "en": "Instantly generate a comprehensive, professional compliance report ready for submission. The report clearly outlines the compliance status, evidence, and justifications for every single requirement.",
      "it": "Genera istantaneamente un report di conformità completo e professionale, pronto per la presentazione. Il report delinea chiaramente lo stato di conformità, le prove e le giustificazioni per ogni singolo requisito."
    },
    "why_red_cat_title": {
      "en": "A Tool Designed For Your Role.",
      "it": "Uno Strumento Progettato per il Tuo Ruolo."
    },
    "persona1_title": {
      "en": "For the Compliance Manager",
      "it": "Per il Responsabile della Compliance"
    },
    "persona1_p": {
      "en": "Finally, a clear and structured way to manage compliance. Reduce risk, ensure consistency, and get a real-time overview of your product's status without chasing down engineers.",
      "it": "Finalmente, un modo chiaro e strutturato per gestire la conformità. Riduci i rischi, garantisci la coerenza e ottieni una panoramica in tempo reale dello stato del tuo prodotto senza dover rincorrere gli ingegneri."
    },
    "persona2_title": {
      "en": "For the Technical Lead",
      "it": "Per il Responsabile Tecnico"
    },
    "persona2_p": {
      "en": "Translate abstract legal rules into actionable engineering tasks. Red Cat focuses on your documentation, integrating seamlessly into your workflow without scanning your code.",
      "it": "Traduci le norme legali astratte in compiti ingegneristici attuabili. Red Cat si concentra sulla tua documentazione, integrandosi perfettamente nel tuo flusso di lavoro senza scansionare il tuo codice."
    },
    "cta_title": {
      "en": "Ready to Take Control of Your Compliance?",
      "it": "Pronto a Prendere il Controllo della Tua Compliance?"
    },
    "cta_button": {
      "en": "Request Your Personalized Demo",
      "it": "Richiedi la Tua Demo Personalizzata"
    },
    "cta_secondary_button": {
      "en": "Download a Sample Report",
      "it": "Scarica un Report di Esempio"
    },
    "footer_p": {
      "en": "© 2025 Red Cat Inc. All rights reserved.",
      "it": "© 2025 Red Cat Inc. Tutti i diritti riservati."
    }
  };

  const getInitialLanguage = () => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      return savedLang;
    }
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'it' ? 'it' : 'en';
  };

  const translatePage = (lang) => {
    document.querySelectorAll('[data-key]').forEach(element => {
      const key = element.getAttribute('data-key');
      if (translations[key] && translations[key][lang]) {
        element.textContent = translations[key][lang];
      }
    });
    document.documentElement.lang = lang; // Update page language for accessibility and SEO
    updateSwitcherUI(lang);
  };
  
  const updateSwitcherUI = (lang) => {
      const en = document.getElementById('lang-en');
      const it = document.getElementById('lang-it');
      if(en && it) {
        en.style.fontWeight = lang === 'en' ? 'bold' : 'normal';
        it.style.fontWeight = lang === 'it' ? 'bold' : 'normal';
      }
  };

  const setLanguage = (lang) => {
    localStorage.setItem('language', lang);
    translatePage(lang);
  };

  // Setup switcher events
  const enButton = document.getElementById('lang-en');
  const itButton = document.getElementById('lang-it');

  if(enButton && itButton) {
    enButton.addEventListener('click', () => setLanguage('en'));
    itButton.addEventListener('click', () => setLanguage('it'));
  }
  
  // Initial translation
  const initialLang = getInitialLanguage();
  translatePage(initialLang);
});