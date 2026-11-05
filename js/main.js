/*   Salma Maher Portfolio    */

const T = {
  en: {
    navHome:'Home', navAbout:'About', navEdu:'Education', navExp:'Experience',
    navSkills:'Skills', navProjects:'Projects', navContact:'Contact', langBtn:'عربي',

    eyebrow:'Frontend Developer',
    name1:'Salma', name2:'Maher',
    heroCta1:'View My Work', heroCta2:"Let's Talk",

    aboutTag:'About Me',
    aboutTitle:'A Developer Who Thinks in Systems,',
    aboutTitleAc:'Designs with Soul',
    aboutLead:'Frontend Web Developer with a background in <strong>Data Science</strong> and <strong>System Architecture</strong>. I help startups and e-commerce businesses turn weak, frustrating digital experiences into fast, intuitive, and conversion-ready products that their users actually enjoy using.',
    aboutPara:'With 330 hours of hands-on development, I focus on what matters most to your business — reducing bounce rates, improving usability, and delivering interfaces that keep users engaged and coming back.',
    hrs:'330', hrsL:'Hours Hands-On', projs:'10', projsL:'Projects Built',

    eduTag:'Education', eduTitle:'Academic', eduTitleAc:'Foundation',
    eduYear:'2024 – 2028', eduDeg:'Bachelor of Data Science',
    eduInst:'Faculty of Computers & Data Science — Alexandria University',
    edudis:'combining modern web development with analytical thinking to build scalable, intelligent, and user-centered digital experiences. Skilled at transforming complex data-driven ideas into responsive and visually engaging web applications.',
    eduUni:'Faculty of Computers\n& Data Science', eduCountry:'Alexandria University · Egypt',
    eduPill:'Data Science · 2024–2028',

    expTag:'Work Experience', expTitle:'Building Real-World', expTitleAc:'Solutions',
    exp1Role:'Freelancing as a frontend ', exp1Co:'Independent · Remote', exp1Period:'2025 – Present',
    exp1Desc:`on khamsat , linkedin , mostaqel 
          Designing and developing responsive web applications for startups and e-commerce clients
          — focused on performance, UX, and clean architecture.`,
    exp2Role:'Frontend Development Trainee', exp2Co:'Self-Directed Program', exp2Period:'2023 – 2024',
    exp2Desc:'Completed 330 hours of structured training in HTML, CSS, JavaScript, responsive design, and UX principles.',

    skillsTag:'Skills & Tools', skillsTitle:'What I Bring to', skillsTitleAc:'the Table',
    sk1:'Frontend Dev', sk2:'Data & Logic', sk3:'Design & Arch', sk4:'Soft Skills',

    projTag:'Projects', projTitle:'Selected', projTitleAc:'Work',
    p1Tag:'Portfolio · HTML/CSS/JS', p1Name:'Fokir', p1Desc:'Elegant personal portfolio website with smooth animations, responsive layout, and a clean modern design system.',
    p2Tag:'JavaScript · CRUD', p2Name:'Product Manager App', p2Desc:'Full-featured product management app with create, read, update & delete operations — clean UI and robust validation.',
    p3Tag:'API · Weather', p3Name:'AuraCast — Weather Dashboard', p3Desc:'Real-time weather dashboard with city search, hourly forecasts, AQI data, and a polished glassmorphism interface.',
    projLive:'Live Preview →',

    testTag:'Testimonials', testTitle:'What People', testTitleAc:'Say',
    t1q:'Salma\'s attention to detail and her ability to translate complex requirements into beautiful, functional interfaces is truly impressive. She delivered beyond expectations.',
    t1a:'Ahmed K.', t1r:'Startup Founder',
    t2q:'Working with Salma was a fantastic experience. Her blend of technical skill and creative vision made our product feel premium and thoughtful.',
    t2a:'Layla M.', t2r:'E-commerce Manager',
    t3q:'Salma has a rare combination of logical thinking and aesthetic sensibility. She asks the right questions and delivers work that actually converts.',
    t3a:'Omar T.', t3r:'Product Lead',

    cEye:"Work Together  ?", cTitle:'Start a Conversation ?',
    cSub:"Whether you're a startup or a growing business — I'd love to help you build something great.",
    cEmail:'Email Me', cLinkedIn:'LinkedIn', cGitHub:'GitHub', cWhatsApp:'WhatsApp',

    footer:'Designed & Built by Salma Maher · 2026',
    heroTagline:'Turning Complex Ideas into Elegant Digital Interfaces',
    heroSub:'Frontend Developer · Data Science · System Architecture',
  },
  ar: {
    navHome:'الرئيسية', navAbout:'عني', navEdu:'التعليم', navExp:'الخبرة',
    navSkills:'المهارات', navProjects:'المشاريع', navContact:'تواصل', langBtn:'English',

    eyebrow:'مطورة واجهات أمامية',
    name1:'سلمى', name2:'ماهر',
    heroCta1:'شاهدي أعمالي', heroCta2:'تواصلي معي',

    aboutTag:'عني',
    aboutTitle:'مطورة تفكر بمنطق الأنظمة،',
    aboutTitleAc:'وتصمم بروح الفنان',
    aboutLead:'مطورة واجهات أمامية بخلفية في <strong>علم البيانات</strong> و<strong>هندسة الأنظمة</strong>. أساعد الشركات الناشئة ومتاجر التجارة الإلكترونية في تحويل تجاربهم الرقمية إلى منتجات سريعة وجذابة تحقق تحويلات حقيقية.',
    aboutPara:'بأكثر من 330 ساعة من التطوير العملي، أركّز على ما يهم أكثر — تقليل معدلات الارتداد، وتحسين قابلية الاستخدام، وتقديم واجهات تجعل المستخدمين يعودون دائمًا.',
    hrs:'330', hrsL:'ساعة تطوير عملي', projs:'7', projsL:'مشروع مكتمل',

    eduTag:'التعليم', eduTitle:'الأساس', eduTitleAc:'الأكاديمي',
    eduYear:'2024 – 2028', eduDeg:'بكالوريوس علم البيانات',
    eduInst:'كلية الحاسبات وعلوم البيانات — جامعة الإسكندرية',
    //-------------------------------------------
    edudis:'الجمع بين تطوير الويب الحديث والتفكير التحليلي لبناء تجارب رقمية ذكية، وقابلة للتوسع، ومتمحورة حول المستخدم. أمتلك مهارة تحويل الأفكار المعقدة القائمة على البيانات إلى تطبيقات ويب تفاعلية وجذابة بصرياً.',
    //-------------------------------------------
    eduUni:'كلية الحاسبات\nوعلوم البيانات', eduCountry:'جامعة الإسكندرية · مصر',
    eduPill:'علم البيانات · 2024–2028',

    expTag:'الخبرة العملية', expTitle:'بناء حلول', expTitleAc:'حقيقية',
    exp1Role:'فريلانسر كمطور واجهات امامية ', exp1Co:'مستقل · عن بُعد', exp1Period:'2025 – حتى الآن',
    exp1Desc:'أقدم خدماتي في تصميم وتطوير تطبيقات الويب المتجاوبة للشركات الناشئة ومشاريع التجارة الإلكترونية عبر منصات خمسات، مستقل، وLinkedIn — مع التركيز على كفاءة الأداء، تجربة المستخدم (UX)، والمعمارية البرمجية النظيفة.',
    //-----------------------------------------------------------------------
    exp2Role:'متدربة تطوير واجهات أمامية', exp2Co:'برنامج تعلم ذاتي موجّه', exp2Period:'2023 – 2024',
    //-----------------------------------------------------------------------
    exp2Desc:'أتممت أكثر من 330 ساعة من التدريب المنظم في HTML وCSS وJavaScript والتصميم المتجاوب ومبادئ UX.',

    skillsTag:'المهارات والأدوات', skillsTitle:'ما أقدمه', skillsTitleAc:'على الطاولة',
    sk1:'تطوير الواجهات', sk2:'البيانات والمنطق', sk3:'التصميم والهندسة', sk4:'المهارات الشخصية',

    projTag:'المشاريع', projTitle:'أعمال', projTitleAc:'مختارة',
    p1Tag:'محفظة · HTML/CSS/JS', p1Name:'Fokir', p1Desc:'موقع محفظة شخصية أنيق مع حركات سلسة وتصميم حديث ومتجاوب.',
    p2Tag:'JavaScript · CRUD', p2Name:'تطبيق إدارة المنتجات', p2Desc:'تطبيق إدارة منتجات متكامل يدعم الإنشاء والقراءة والتعديل والحذف — بواجهة نظيفة وتحقق قوي.',
    p3Tag:'API · طقس', p3Name:'AuraCast — لوحة الطقس', p3Desc:'لوحة طقس تفاعلية بالوقت الفعلي مع بحث المدن وتوقعات بالساعة وبيانات جودة الهواء وتصميم زجاجي.',
    projLive:'معاينة مباشرة →',

    testTag:'آراء العملاء', testTitle:'ماذا', testTitleAc:'قالوا',
    t1q:'اهتمام سلمى بالتفاصيل وقدرتها على ترجمة المتطلبات المعقدة إلى واجهات جميلة وعملية أمر رائع حقًا.',
    t1a:'أحمد ك.', t1r:'مؤسس شركة ناشئة',
    t2q:'كان العمل مع سلمى تجربة ممتازة. مزيجها بين المهارة التقنية والرؤية الإبداعية جعل منتجنا يبدو احترافيًا.',
    t2a:'ليلى م.', t2r:'مديرة تجارة إلكترونية',
    t3q:'تمتلك سلمى مزيجًا نادرًا من التفكير المنطقي والحس الجمالي. تقدم عملًا يُحقق نتائج فعلية.',
    t3a:'عمر ت.', t3r:'قائد منتج',

    cEye:'لنعمل معًا؟', cTitle:'نبدأ محادثة؟',
    cSub:'سواء كنت شركة ناشئة أو عملًا نامًيا — يسعدني مساعدتك في بناء شيء رائع.',
    cEmail:'راسليني', cLinkedIn:'LinkedIn', cGitHub:'GitHub', cWhatsApp:'واتساب',

    footer:'صُمم وطُوِّر بواسطة سلمى ماهر · 2026',
    heroTagline:'أحوّل الأفكار المعقدة إلى واجهات رقمية أنيقة',
    heroSub:'مطورة Frontend · علم البيانات · هندسة الأنظمة',
  }
};

let lang = 'en';
let testIdx = 0;

// ─── Boot ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  render('en');
  initNav();
  initReveal();
  initTestimonials();
  initActiveNav();
  initParallax();
});

// ─── Render language ──────────────────────────────────────────────────────────
function render(l) {
  lang = l;
  const t = T[l];
  const isAr = l === 'ar';
  document.body.classList.toggle('rtl', isAr);
  document.documentElement.setAttribute('lang', l);
  document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');

  // Map every [data-t] element
  document.querySelectorAll('[data-t]').forEach(el => {
    const k = el.getAttribute('data-t');
    if (t[k] === undefined) return;
    const val = t[k];
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else if (val.includes('<')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  // lang button
  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = t.langBtn;

  renderTestimonials(l);
}

function toggleLanguage() {
  render(lang === 'en' ? 'ar' : 'en');
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function initNav() {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 50), { passive: true });

  burger?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    const [s1,,s3] = burger.querySelectorAll('span');
    if (open) {
      s1.style.cssText = 'transform:rotate(45deg) translate(5px,5px)';
      burger.querySelectorAll('span')[1].style.opacity = '0';
      s3.style.cssText = 'transform:rotate(-45deg) translate(5px,-5px)';
    } else {
      burger.querySelectorAll('span').forEach(s => s.removeAttribute('style'));
    }
  });

  links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    burger?.querySelectorAll('span').forEach(s => s.removeAttribute('style'));
  }));
}

function initActiveNav() {
  const secs = document.querySelectorAll('section[id]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
      });
    });
  }, { threshold: 0.4 });
  secs.forEach(s => io.observe(s));
}

// ─── Scroll reveal ────────────────────────────────────────────────────────────
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (!e.isIntersecting) return;
      const delay = Number(e.target.dataset.delay || 0);
      setTimeout(() => e.target.classList.add('visible'), delay);
      io.unobserve(e.target);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.dataset.delay = (i % 6) * 70;
    io.observe(el);
  });
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function initTestimonials() {
  document.querySelectorAll('.test-dot').forEach((dot, i) => {
    dot.addEventListener('click', () => { testIdx = i; renderTestimonials(lang); });
  });
  setInterval(() => { testIdx = (testIdx + 1) % 3; renderTestimonials(lang); }, 5500);
}

function renderTestimonials(l) {
  const t = T[l];
  const data = [
    { q: t.t1q, a: t.t1a, r: t.t1r },
    { q: t.t2q, a: t.t2a, r: t.t2r },
    { q: t.t3q, a: t.t3a, r: t.t3r },
  ];
  document.querySelectorAll('.test-slide').forEach((s, i) => {
    s.classList.toggle('active', i === testIdx);
    s.querySelector('.tq').textContent = data[i].q;
    s.querySelector('.ta').textContent = data[i].a;
    s.querySelector('.tr').textContent = data[i].r;
  });
  document.querySelectorAll('.test-dot').forEach((d, i) => d.classList.toggle('active', i === testIdx));
}

// ─── Parallax blobs ───────────────────────────────────────────────────────────
function initParallax() {
  const blobs = document.querySelectorAll('.blob');
  window.addEventListener('mousemove', e => {
    const x = (e.clientX / innerWidth - .5) * 22;
    const y = (e.clientY / innerHeight - .5) * 22;
    blobs.forEach((b, i) => {
      b.style.transform = `translate(${x*(i?-1:1)}px,${y*(i?-1:1)}px)`;
    });
  }, { passive: true });
}
