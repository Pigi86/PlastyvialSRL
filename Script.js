document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");
    let currentSection = document.querySelector("#home");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    if (currentSection) {
        setTimeout(() => {
            currentSection.classList.add("active");
        }, 50);
    }

    const menuLinks = document.querySelectorAll('nav a[href^="#"], .footer-links a, #solicitarBtn, #verProdBtn');

    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (!targetId || targetId === "#") return;
            const targetSection = document.querySelector(targetId);
            if (!targetSection) return;
            e.preventDefault();
            if (currentSection === targetSection) {
                return;
            }

            if (currentSection) {
                currentSection.classList.remove("active");
            }

            setTimeout(() => {
                sections.forEach(section => {
                    section.style.display = "none";
                });

                targetSection.style.display =
                    targetSection.classList.contains("hero")
                        ? "flex"
                        : "block";

                void targetSection.offsetWidth;
                targetSection.classList.add("active");
                currentSection = targetSection;
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }, 300);
        });
    });

    const mobileBtn = document.getElementById("mobileMenuBtn");
    const navLinks = document.querySelector(".nav-links");
    const overlay = document.getElementById("menuOverlay");

    // TOGGLE MENU
    mobileBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        //overlay.classList.toggle("active");
    });

    // CLOSE MENU
    //overlay.addEventListener("click", closeMenu);

    function closeMenu() {
        navLinks.classList.remove("active");
        //  overlay.classList.remove("active");
    }

    // LINKS
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            if (!link.closest(".has-submenu")) {
                closeMenu();
            }
        });
    });

    document.querySelectorAll(".submenu a").forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    // SUBMENUS MOBILE
    document.querySelectorAll(".has-submenu > a").forEach(link => {
        link.addEventListener("click", (e) => {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                const parent = link.parentElement;
                parent.classList.toggle("open");
            }
        });
    });
});

class Image {
    constructor(name, meta, url) {
        this.name = name;
        this.meta = meta;
        this.url = url;
    }
}

const imageList = [
    new Image("Autoelevador Modelo A", "Completo sistema de luces y equipo de seguridad. Visibilidad Alta.Mástiles standard y triples. Fácil acceso al motor de combustión para chequeo. Alta succión de aire para el sistema filtrado.", "Images/Gallery/25EFL.jpeg"),
    new Image("Apilador Eléctrico X", "Distribuidores de pallet truck. Amplio stock de carretillas hidráulticas de 2.5 con ruedas en tandem y alta calidad de terminación. Carretillas electrohidráulicas de 05 a 1.5 toneladas de capacidad de 1 a 3.5 metros de altura de elevación.", "Images/Gallery/apiladoras.jpg"),
    new Image("Batería Prestolite", "Comercialización y distribución de baterías vehiculares y de tracción marca Prestolite. Asesoramiento técnico. Baterías de tracción 24V - 48V - 560 - 700. Conectores Anderson y Remma.", "Images/Gallery/bateria.jpg"),
    new Image("Hidroelevador Serie H", ">Desmontaje y montaje de equipos. Reparación y construcción de estabilizadores y tramos de pluma - viga cajón o reticulados. Especialistas en marcas mundialmente conocidas, reparamos motores hidráulicos de giro y arrollamiento-coronas y sin fin. Testeo mecánico general y análisis de cordones de soldadura-estabilidad. Capacitación técnica y reparación de barquillas de fibra-construcción y cambio de pernos y bujes de brazos articulados.", "Images/Gallery/hidroelevador.png")
];

function buidGallery() {
    const items = imageList;
    const doubled = [...items];
    document.getElementById('gallery-grid').innerHTML = doubled.map(t =>
        `<div class="gallery-card">
                <div class="gallery-thumb" style="background-image: url('${t.url}');" data-full="${t.url}" data-caption="" role="button" tabindex="0" aria-label="Ver imagen ${t.name}"></div>
                <div class="gallery-info">
                    <div class="gallery-name">${t.name}</div>
                    <div class="gallery-meta">${t.meta}</div>
                </div>
            </div>`
    ).join('');
}

class Product {
    constructor(featured, tag, name, meta, url) {
        this.featured = featured;
        this.tag = tag;
        this.name = name;
        this.meta = meta;
        this.url = url;
    }
}

const productList = [
    new Product(true, "Autoelevadores", "Autoelevadores", "Diverso parque de autoelevadores a combustión gasoil, nafta y GLP.", "Images/Products/25EFL.jpeg"),
    new Product(false, "Kit Electricos para Seguridad", "Kit Electricos para Seguridad", "Comercialización de kit eléctricos para sistemas de seguridad.", "Images/Products/Kit-de-seguridad-y-emergencia-automotriz.png"),
    new Product(false, "Asientos para Autoelevadores y Camiones", "Llantas Simples o Dobles", "Comercializamos asientos para autoelevadores y camiones con bases hidráulicas, ergonométricos con suspensión elásticas regulables.", "Images/Products/asiento.jpg"),
    new Product(false, "Apiladoras Eléctricas", "Cadenas de Elevación para Autoelevadores", "Comercializamos cadenas de elevación para autoelevadores tipo fleyer - BL - LH.", "Images/Products/apiladoras.jpg"),
    new Product(false, "Repuestos", "Cubiertas Industriales", "Distribuimos cubiertas industriales en varias calidades incluyendo ecológicas, aros engomados cuchion y de poliuretano.", "Images/Products/neumatico.jpg"),
];

function buidProducts() {
    const items = productList;
    const doubled = [...items];
    document.getElementById('products-grid').innerHTML = doubled.map(t => {
        if (t.featured == true) {
            return `<div class="project-card featured">
                <div class="project-thumb">
                    <div class="blueprint-bg"></div>
                    <span class="project-tag" data-i18n="tag-roads">${t.tag}</span><span class="project-thumb-label"><img src="${t.url}" /></span>
                </div>
                <div class="project-info">
                    <div class="project-name">${t.name}</div>
                    <div class="project-meta" data-i18n="proj1-meta">${t.meta}</div>
                </div>
             </div>`}
        else {
            return `<div class="project-card">
                <div class="project-thumb">
                    <div class="blueprint-bg"></div>
                    <span class="project-tag" data-i18n="tag-roads">${t.tag}</span><span class="project-thumb-label"><img src="${t.url}" /></span>
                </div>
                <div class="project-info">
                    <div class="project-name">${t.name}</div>
                    <div class="project-meta" data-i18n="proj1-meta">${t.meta}</div>
                </div>
            </div>`
        }
    }).join('');
}

buidProducts();

buidGallery();

// ── TRANSLATIONS ──
const i18n = {
    en: {
        //'ticker': ['Road Construction', 'Bridge Engineering', 'Hydraulic Systems', 'Urban Infrastructure', 'Structural Works', 'Environmental Projects']
    },
    es: {
        //'ticker': ['Road Construction', 'Bridge Engineering', 'Hydraulic Systems', 'Urban Infrastructure', 'Structural Works', 'Environmental Projects']
    }
};

const ticker = ['Autoelevadores', 'Camiones', 'Apiladores Eléctricas', 'Repuestos', 'Hidroelevadores e Hidrogruas', 'Capacitación'];
const tickerImage = ['Images/Marcas/prestolite.png', 'Images/Marcas/TCM.jpg', 'Images/Marcas/nichiyu.jpg', 'Images/Marcas/wheelpam_logo.jfif', 'Images/Marcas/komatsu.jpg', 'Images/Marcas/shinko.svg', 'Images/Marcas/toyota.jpg', 'Images/Marcas/clark.jpg', 'Images/Marcas/nissan.jpg', 'Images/Marcas/mitsubishi.jpg'];

let currentLang = 'es';

buildTicker();
buildTickerImage();

function buildTicker() {
    const items = ticker;
    const doubled = [...items, ...items];
    document.getElementById('ticker-inner').innerHTML = doubled.map(t =>
        `<span class="ticker-item">${t}<span class="ticker-dot"></span></span>`
    ).join('');
}

function buildTickerImage() {
    const items = tickerImage;
    const doubled = [...items, ...items];
    document.getElementById('ticker-inner-image').innerHTML = doubled.map(t =>
        `<img class="ticker-item-image" src="${t}" /><span class="ticker-dot-image"></span>`
    ).join('');
}

function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.textContent === lang.toUpperCase()));
    const t = i18n[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    buildTicker(lang);
}

// Init
//setLang('es');

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .process-step, .project-card, .why-item, .stat-card').forEach(el => {
    el.style.opacity = '0'; el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

window.addEventListener('scroll', () => {
    document.querySelector('nav').style.boxShadow = window.scrollY > 20 ? '0 2px 20px rgba(0,0,0,0.06)' : 'none';
});

function handleSubmit(e) {
    e.preventDefault();

    const myForm = document.querySelector('#contactForm');

    const isValid = myForm.reportValidity();

    if (isValid) {
        const btn = document.getElementById('submit-btn');
        btn.textContent = i18n[currentLang]['f-sent'];
        btn.style.background = '#4a90a4'; btn.style.color = '#fff';
        setTimeout(() => {
            btn.textContent = i18n[currentLang]['f-submit'];
            btn.style.background = ''; btn.style.color = '';
        }, 3000);
    }
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const t = document.querySelector(a.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior: 'smooth' });
    });
});

// SUBMENU: toggle on click to avoid hover flicker
(function () {
    const parents = document.querySelectorAll('.nav-links .has-submenu');
    parents.forEach(p => {
        const link = p.querySelector('a');
        link.addEventListener('mouseenter', (e) => {
            // prevent jumping to #projects and toggle submenu instead
            e.preventDefault();
            e.stopPropagation();
            p.classList.toggle('open');

            const parents2 = document.querySelectorAll('.submenu');
            parents2.forEach(p => {
                p.style.display = "none";
            });

            p.children[1].style.display = "block";

        });

        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                p.classList.toggle('open');
            }
        });
    });

    const parents2 = document.querySelectorAll('.submenu');
    parents2.forEach(p => {
        p.addEventListener('mouseleave', (e) => {
            // prevent jumping to #projects and toggle submenu instead
            p.parentElement.classList.remove('open');

            const parents2 = document.querySelectorAll('.submenu');
            parents2.forEach(p => {
                p.style.display = "none";
            });
        });
    });

    // close when clicking outside
    document.addEventListener('click', (e) => {
        //debugger;
        parents.forEach(p => {
            if (!p.contains(e.target)) {
                p.classList.remove('open');
            }
            p.parentElement.classList.remove('open');
        });
    });

    const parents3 = document.querySelectorAll('.submenu');
    parents3.forEach(p => {
        p.addEventListener('click', (e) => {
            // prevent jumping to #projects and toggle submenu instead
            p.classList.remove('open');
            p.parentElement.classList.remove('open');
            p.style.display = "none";
        });
    });

    // close on escape
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') parents.forEach(p => p.classList.remove('open')); });
})();

// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// LIGHTBOX
(function () {
    const thumbs = document.querySelectorAll('.gallery-thumb');

    // create modal
    const modal = document.createElement('div');
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
    <div class="lightbox-inner" role="dialog" aria-modal="true" aria-label="Imagen ampliada">
        <button class="lightbox-close" aria-label="Cerrar">✕</button>
        <img class="lightbox-img" src="" alt="" />
        <div class="lightbox-caption"></div>
        <button class="lightbox-prev" aria-label="Anterior">‹</button>
        <button class="lightbox-next" aria-label="Siguiente">›</button>
    </div>`;
    document.body.appendChild(modal);

    const lightbox = document.querySelector('.lightbox-modal');
    const img = lightbox.querySelector('.lightbox-img');
    const caption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let currentIndex = -1;

    function openAt(index) {
        const t = thumbs[index];
        if (!t) return;
        const src = t.dataset.full || '';
        const cap = t.dataset.caption || '';
        img.src = src; img.alt = cap; caption.textContent = cap;
        lightbox.classList.add('open');
        currentIndex = index;
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    }

    function close() { lightbox.classList.remove('open'); document.body.style.overflow = ''; }

    thumbs.forEach((t, i) => {
        t.addEventListener('click', () => openAt(i));
        t.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openAt(i); } });
    });

    closeBtn.addEventListener('click', close);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
    prevBtn.addEventListener('click', () => openAt((currentIndex - 1 + thumbs.length) % thumbs.length));
    nextBtn.addEventListener('click', () => openAt((currentIndex + 1) % thumbs.length));

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });
})();
