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

// ── TRANSLATIONS ──
const i18n = {
    en: {
        //'logo-sub': 'S.R.L. — Civil Engineering',
        //'nav-about': 'About', 'nav-services': 'Services', 'nav-projects': 'Projects', 'nav-contact': 'Contact Us',
        //'hero-eyebrow': 'Ingeniería Civil e Infraestructura',
        //'hero-title': 'Construyendo la <em>infraestructura</em> del mañana',
        //'hero-desc': 'Plastyvial S.R.L. delivers precision-engineered civil infrastructure solutions — from roads and bridges to hydraulic systems — with a commitment to quality, safety, and lasting results.',
        //'hero-cta1': 'Solicitar Presupuesto', 'hero-cta2': 'Ver Proyectos →',
        //'stat1': 'Años de Experiencia', 'stat2': 'Proyectos Completados', 'stat3': 'Entrega en Tiempo', 'stat4': 'Ingenieros Expertos',
        //'hero-visual-text': "Construyendo el futuro de Argentina, proyecto a proyecto",
        //'about-label': 'Quiénes Somos',
        //'about-title': 'Soluciones de ingeniería respaldadas por la experiencia',
        //'about-p1': 'Founded in 2006, Plastyvial S.R.L. has grown into one of Argentina\'s trusted civil infrastructure contractors. We combine technical precision with a deep understanding of local terrain, regulations, and community needs.',
        //'about-p2': 'Our multidisciplinary team handles every project phase — from feasibility studies and design to execution and post-construction maintenance — ensuring continuity and accountability at every step.',
        //'badge-label': 'Certificado por',
        //'feat1': 'Licensed & Certified Professionals', 'feat2': 'Full Project Lifecycle Management',
        //'feat3': 'State & Private Sector Expertise', 'feat4': 'Sustainable Construction Practices',
        //'feat5': 'Advanced Equipment Fleet', 'feat6': 'Strict Safety Protocols',
        //'srv-label': 'Qué Hacemos', 'srv-title': 'Servicios de ingeniería civil',
        //'srv-desc': 'From initial planning through final delivery, we cover the full scope of civil infrastructure.',
        //'s1-name': 'Road & Highway Construction', 's1-desc': 'Design and construction of paved roads, highways, and access routes — including earthworks, paving, drainage, and signage.',
        //'s2-name': 'Bridges & Structures', 's2-desc': 'Engineering and construction of vehicular and pedestrian bridges, overpasses, retaining walls, and structural works.',
        //'s3-name': 'Hydraulic Works', 's3-desc': 'Channels, culverts, stormwater systems, dams, and water containment infrastructure for agricultural and urban use.',
        //'s4-name': 'Urban Infrastructure', 's4-desc': 'Sidewalks, squares, public lighting, underground utilities, and urban renewal projects for municipalities and provinces.',
        //'s5-name': 'Geotechnical Studies', 's5-desc': 'Soil analysis, foundation design, and terrain assessments to ensure structural integrity and regulatory compliance.',
        //'s6-name': 'Project Management', 's6-desc': 'End-to-end project supervision, budgeting, scheduling, and quality control for both public tenders and private contracts.',
        //'proc-label': 'Cómo Trabajamos', 'proc-title': 'Nuestro proceso constructivo',
        //'proc-desc': 'A structured, transparent methodology that keeps every project on time, on budget, and built to last.',
        //'p1-name': 'Consultation', 'p1-desc': 'We meet with you to understand scope, budget, and project goals in detail.',
        //'p2-name': 'Engineering & Design', 'p2-desc': 'Our team produces complete technical plans, specifications, and environmental assessments.',
        //'p3-name': 'Execution', 'p3-desc': 'Construction begins with certified personnel, quality materials, and rigorous safety standards.',
        //'p4-name': 'Delivery & Support', 'p4-desc': 'Final inspection, handover documentation, and post-project maintenance services.',
        //'proj-label': 'Nuestro Trabajo', 'proj-title': 'Proyectos destacados',
        //'proj-desc': 'A selection of civil infrastructure works completed across Argentina.',
        //'tag-roads': 'Roads', 'tag-hydraulics': 'Hydraulics', 'tag-bridge': 'Bridge', 'tag-urban': 'Urban',
        //'proj1-meta': '42 km · Santiago del Estero · 2023',
        //'proj2-meta': 'Irrigation · Córdoba · 2022',
        //'proj3-meta': '80m span · Santa Fe · 2021',
        //'proj4-meta': 'La Rioja · 2022',
        //'why-label': 'Por Qué Plastyvial', 'why-title': 'Las cualidades que nos distinguen',
        //'why1-title': 'Seguridad ante Todo', 'why1-desc': 'Zero-tolerance safety culture with certified protocols, ongoing training, and real-time site supervision.',
        //'why2-title': 'Precisión Técnica', 'why2-desc': 'Every project is backed by rigorous engineering analysis, certified designs, and compliance with national standards.',
        //'why3-title': 'Experiencia Pública y Privada', 'why3-desc': 'Proven track record in government contracts, licitaciones, and private infrastructure projects across Argentina.',
        //'why4-title': 'Enfoque Sustentable', 'why4-desc': 'We integrate environmental best practices into every project, from material sourcing to site restoration.',
        //'ws1': 'Years Active', 'ws2': 'Works Done', 'ws3': 'Engineers', 'ws4': 'Lost-Time Incidents',
        //'ct-label': 'Contáctenos', 'ct-title': "Construyamos algo juntos",
        //'ct-desc': "Tell us about your project and we'll get back to you within 24 hours with a preliminary assessment.",
        //'ci1-label': 'Oficina', 'ci2-label': 'Teléfono', 'ci3-label': 'Correo Electrónico', 'ci4-label': 'Horario de Atención',
        //'ci4-val': 'Mon–Fri, 8:00 am – 6:00 pm',
        //'f-name': 'Nombre Completo', 'ph-name': 'John Smith',
        //'f-company': 'Empresa', 'ph-company': 'Your organization',
        //'f-email': 'Correo Electrónico', 'f-phone': 'Teléfono',
        //'f-service': 'Servicio Requerido', 'f-select': 'Seleccione un servicio...',
        //'f-other': 'Otro',
        //'f-desc': 'Descripción del Proyecto', 'ph-desc': 'Describe your project — location, scope, timeline...',
        //'f-submit': 'Enviar Mensaje →', 'f-sent': '✓ Message Sent!',
        //'footer-copy': '© 2024 Plastyvial S.R.L. Todos los derechos reservados.',
        //'ticker': ['Road Construction', 'Bridge Engineering', 'Hydraulic Systems', 'Urban Infrastructure', 'Structural Works', 'Environmental Projects']
    },
    es: {
        //'logo-sub': 'S.R.L. — Ingeniería Civil',
        //'nav-about': 'Nosotros', 'nav-services': 'Servicios', 'nav-projects': 'Proyectos', 'nav-contact': 'Contacto',
        //'hero-eyebrow': 'Ingeniería Civil e Infraestructura',
        //'hero-title': 'Construyendo la <em>infraestructura</em> del mañana',
        //'hero-desc': 'Plastyvial S.R.L. ofrece soluciones de infraestructura civil de precisión — desde rutas y puentes hasta sistemas hidráulicos — con un firme compromiso con la calidad, la seguridad y la durabilidad.',
        //'hero-cta1': 'Solicitar Presupuesto', 'hero-cta2': 'Ver Proyectos →',
        //'stat1': 'Años de Experiencia', 'stat2': 'Proyectos Completados', 'stat3': 'Entrega en Tiempo', 'stat4': 'Ingenieros Expertos',
        //'hero-visual-text': 'Construyendo el futuro de Argentina, proyecto a proyecto',
        //'about-label': 'Quiénes Somos',
        //'about-title': 'Soluciones de ingeniería respaldadas por la experiencia',
        //'about-p1': 'Fundada en 2006, Plastyvial S.R.L. se ha consolidado como una de las empresas contratistas de infraestructura civil de mayor confianza en Argentina. Combinamos precisión técnica con un profundo conocimiento del terreno local, la normativa vigente y las necesidades de cada comunidad.',
        //'about-p2': 'Nuestro equipo multidisciplinario gestiona cada etapa del proyecto — desde estudios de factibilidad y diseño hasta la ejecución y el mantenimiento post-obra — garantizando continuidad y responsabilidad en cada paso.',
        //'badge-label': 'Certificado por',
        //'feat1': 'Profesionales Habilitados y Certificados', 'feat2': 'Gestión Integral del Ciclo de Proyecto',
        //'feat3': 'Experiencia en Sector Público y Privado', 'feat4': 'Prácticas de Construcción Sustentable',
        //'feat5': 'Flota de Equipos de Última Generación', 'feat6': 'Protocolos de Seguridad Estrictos',
        //'srv-label': 'Qué Hacemos', 'srv-title': 'Servicios de ingeniería civil',
        //'srv-desc': 'Desde la planificación inicial hasta la entrega final, cubrimos todo el alcance de la infraestructura civil.',
        //'s1-name': 'Construcción de Rutas y Autopistas', 's1-desc': 'Diseño y construcción de rutas pavimentadas, autopistas y accesos viales — incluyendo movimiento de suelos, pavimentación, drenaje y señalización.',
        //'s2-name': 'Puentes y Estructuras', 's2-desc': 'Ingeniería y construcción de puentes vehiculares y peatonales, pasos a nivel, muros de contención y obras estructurales.',
        //'s3-name': 'Obras Hidráulicas', 's3-desc': 'Canales, alcantarillas, sistemas de drenaje pluvial, diques e infraestructura de contención hídrica para uso agrícola y urbano.',
        //'s4-name': 'Infraestructura Urbana', 's4-desc': 'Veredas, plazas, alumbrado público, servicios subterráneos y proyectos de renovación urbana para municipios y provincias.',
        //'s5-name': 'Estudios Geotécnicos', 's5-desc': 'Análisis de suelos, diseño de fundaciones y evaluación de terrenos para garantizar la integridad estructural y el cumplimiento normativo.',
        //'s6-name': 'Dirección de Proyectos', 's6-desc': 'Supervisión integral, presupuestación, planificación y control de calidad tanto para licitaciones públicas como contratos privados.',
        //'proc-label': 'Cómo Trabajamos', 'proc-title': 'Nuestro proceso constructivo',
        //'proc-desc': 'Una metodología estructurada y transparente que mantiene cada proyecto en tiempo, en presupuesto y construido para durar.',
        //'p1-name': 'Consulta Inicial', 'p1-desc': 'Nos reunimos con usted para comprender el alcance, el presupuesto y los objetivos del proyecto en detalle.',
        //'p2-name': 'Ingeniería y Diseño', 'p2-desc': 'Nuestro equipo elabora planos técnicos completos, especificaciones y evaluaciones ambientales.',
        //'p3-name': 'Ejecución', 'p3-desc': 'La obra comienza con personal certificado, materiales de calidad y estrictas normas de seguridad.',
        //'p4-name': 'Entrega y Soporte', 'p4-desc': 'Inspección final, documentación de entrega y servicios de mantenimiento post-obra.',
        //'proj-label': 'Nuestro Trabajo', 'proj-title': 'Proyectos destacados',
        //'proj-desc': 'Una selección de obras de infraestructura civil completadas en todo el país.',
        //'tag-roads': 'Rutas', 'tag-hydraulics': 'Hidráulica', 'tag-bridge': 'Puente', 'tag-urban': 'Urbano',
        //'proj1-meta': '42 km · Santiago del Estero · 2023',
        //'proj2-meta': 'Riego · Córdoba · 2022',
        //'proj3-meta': '80m de luz · Santa Fe · 2021',
        //'proj4-meta': 'La Rioja · 2022',
        //'why-label': 'Por Qué Plastyvial', 'why-title': 'Las cualidades que nos distinguen',
        //'why1-title': 'Seguridad ante Todo', 'why1-desc': 'Cultura de tolerancia cero en seguridad, con protocolos certificados, capacitación continua y supervisión en tiempo real.',
        //'why2-title': 'Precisión Técnica', 'why2-desc': 'Cada proyecto cuenta con un análisis de ingeniería riguroso, diseños certificados y cumplimiento de estándares nacionales.',
        //'why3-title': 'Experiencia Pública y Privada', 'why3-desc': 'Historial comprobado en contratos gubernamentales, licitaciones y proyectos de infraestructura privada en toda Argentina.',
        //'why4-title': 'Enfoque Sustentable', 'why4-desc': 'Integramos las mejores prácticas ambientales en cada proyecto, desde el aprovisionamiento de materiales hasta la restauración del sitio.',
        //'ws1': 'Años Activos', 'ws2': 'Obras Realizadas', 'ws3': 'Ingenieros', 'ws4': 'Accidentes con Tiempo Perdido',
        //'ct-label': 'Contáctenos', 'ct-title': 'Construyamos algo juntos',
        //'ct-desc': 'Cuéntenos sobre su proyecto y le responderemos en 24 horas con una evaluación preliminar.',
        //'ci1-label': 'Oficina', 'ci2-label': 'Teléfono', 'ci3-label': 'Correo', 'ci4-label': 'Horario de Atención',
        //'ci4-val': 'Lun–Vie, 8:00 am – 6:00 pm',
        //'f-name': 'Nombre Completo', 'ph-name': 'Juan Pérez',
        //'f-company': 'Empresa', 'ph-company': 'Su organización',
        //'f-email': 'Correo Electrónico', 'f-phone': 'Teléfono',
        //'f-service': 'Servicio Requerido', 'f-select': 'Seleccione un servicio...',
        //'f-other': 'Otro',
        //'f-desc': 'Descripción del Proyecto', 'ph-desc': 'Describa su proyecto — ubicación, alcance, plazos...',
        //'f-submit': 'Enviar Mensaje →', 'f-sent': '✓ ¡Mensaje Enviado!',
        //'footer-copy': '© 2024 Plastyvial S.R.L. Todos los derechos reservados.',
        'ticker': ['Autoelevadores', 'Camiones', 'Apiladores Eléctricas', 'Repuestos', 'Hidroelevadores e Hidrogruas', 'Capacitación'],
        'tickerImage': ['Images/prestolite.png', 'Images/TCM.jpg', 'Images/nichiyu.jpg', 'Images/wheelpam_logo.jfif', 'Images/komatsu.jpg', 'Images/shinko.svg', 'Images/toyota.jpg', 'Images/clark.jpg', 'Images/nissan.jpg', 'Images/mitsubishi.jpg'],
    }
};

let currentLang = 'es';
buildTicker(currentLang);
buildTickerImage(currentLang);

function buildTicker(lang) {
    const items = i18n[lang].ticker;
    const doubled = [...items, ...items];
    document.getElementById('ticker-inner').innerHTML = doubled.map(t =>
        `<span class="ticker-item">${t}<span class="ticker-dot"></span></span>`
    ).join('');
}

function buildTickerImage(lang) {
    const items = i18n[lang].tickerImage;
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
