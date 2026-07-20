// ===============================
// FORM SUBMISSION (Web3Forms)
// ===============================
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const originalText = submitBtn.textContent;

        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                alert("Success! Your message has been sent.");
                form.reset();
            } else {
                alert("Error: " + data.message);
            }

        } catch (error) {
            alert("Something went wrong. Please try again.");
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// ===============================
// LANGUAGE TRANSLATION SYSTEM
// ===============================
const translations = {
    en: {
        navHome: "Home",
        navServices: "Services",
        navPricing: "Pricing",
        navGallery: "Gallery",
        navColors: "Colors",
        navReviews: "Reviews",
        navAbout: "About",
        navContact: "Contact",
        getQuote: "GET A QUOTE",
        heroTitle: "We Bring <span>Color</span><br>to Your World",
        heroSubtitle: "Professional painting and decorating services for homes, buildings, apartments and commercial spaces.",
        heroQuality: "Quality Work",
        heroSkilled: "Skilled Painters",
        heroOnTime: "On Time",
        heroServices: "OUR SERVICES",
        heroGallery: "VIEW GALLERY",
        quoteTitle: "Get an Instant Estimate",
        servicesTitle: "Our Services",
        servicesSubtitle: "We bring color to your world by 30%",
        serviceHomes: "Homes",
        serviceHomesDesc: "Interior & exterior painting.",
        serviceBuildings: "Buildings",
        serviceBuildingsDesc: "Professional painting for buildings.",
        serviceApartments: "Apartments",
        serviceApartmentsDesc: "Fresh colors for apartments.",
        serviceCommercial: "Commercial",
        serviceCommercialDesc: "Painting for businesses.",
        serviceDecorating: "Decorating",
        serviceDecoratingDesc: "Wallpaper & decorative finishes.",
        pricingTitle: "Indicative Pricing & Timelines",
        pricingSubtitle: "Transparent m² rates and project durations for Amsterdam & surrounding areas.",
        galleryTitle: "Our Work Gallery",
        gallerySubtitle: "We bring color to your world by 30%",
        baTitle: "Before & After",
        baSubtitle: "Drag the slider to see the transformation",
        sliderTitle: "Try Colors Live",
        sliderSubtitle: "Select a color and drag the slider to see the transformation",
        chooseColor: "Choose Your Color",
        tiktokTitle: "Follow Us on TikTok",
        tiktokSubtitle: "Watch our painting projects and tips",
        reviewsTitle: "What Our Clients Say",
        aboutTitle: "About Us",
        aboutSubtitle: "Professional Painting & Decorating Services in Amsterdam",
        footerSlogan: "We Paint. You Love.",
        footerQuickLinks: "Quick Links",
        footerContact: "Contact"
    },
    nl: {
        navHome: "Home",
        navServices: "Diensten",
        navPricing: "Prijzen",
        navGallery: "Galerij",
        navColors: "Kleuren",
        navReviews: "Reviews",
        navAbout: "Over Ons",
        navContact: "Contact",
        getQuote: "OFFRTE AANVRAGEN",
        heroTitle: "We Brengen <span>Kleur</span><br>in Jouw Wereld",
        heroSubtitle: "Professionele schilder- en decoratieservices voor woningen, gebouwen, appartementen en commerciële ruimtes.",
        heroQuality: "Kwaliteit Werk",
        heroSkilled: "Gevorderde Schilders",
        heroOnTime: "Op Tijd",
        heroServices: "ONZE DIENSTEN",
        heroGallery: "GALERIJ BEKIJKEN",
        quoteTitle: "Directe Schatting",
        servicesTitle: "Onze Diensten",
        servicesSubtitle: "We brengen kleur in jouw wereld met 30%",
        serviceHomes: "Woningen",
        serviceHomesDesc: "Binnen- en buitenschilderwerk.",
        serviceBuildings: "Gebouwen",
        serviceBuildingsDesc: "Professioneel schilderwerk voor gebouwen.",
        serviceApartments: "Appartementen",
        serviceApartmentsDesc: "Verse kleuren voor appartementen.",
        serviceCommercial: "Commercieel",
        serviceCommercialDesc: "Schilderwerk voor bedrijven.",
        serviceDecorating: "Decoratie",
        serviceDecoratingDesc: "Behang en decoratieve afwerkingen.",
        pricingTitle: "Indicatieve Prijzen & Tijdslijnen",
        pricingSubtitle: "Transparante m² tarieven en projectduur voor Amsterdam & omgeving.",
        galleryTitle: "Onze Werk Galerij",
        gallerySubtitle: "We brengen kleur in jouw wereld met 30%",
        baTitle: "Voor & Na",
        baSubtitle: "Sleep de schuifregelaar om de transformatie te zien",
        sliderTitle: "Probeer Kleuren Live",
        sliderSubtitle: "Kies een kleur en sleep de schuifregelaar om de transformatie te zien",
        chooseColor: "Kies Je Kleur",
        tiktokTitle: "Volg Ons op TikTok",
        tiktokSubtitle: "Bekijk onze schilderprojecten en tips",
        reviewsTitle: "Wat Onze Klanten Zeggen",
        aboutTitle: "Over Ons",
        aboutSubtitle: "Professionele Schilder- & Decoratiediensten in Amsterdam",
        footerSlogan: "Wij Schilderen. Jij Houdt Van.",
        footerQuickLinks: "Snelle Links",
        footerContact: "Contact"
    },
    fr: {
        navHome: "Accueil",
        navServices: "Services",
        navPricing: "Tarifs",
        navGallery: "Galerie",
        navColors: "Couleurs",
        navReviews: "Avis",
        navAbout: "À Propos",
        navContact: "Contact",
        getQuote: "OBTENIR UN DEVIS",
        heroTitle: "Nous Apportons de la <span>Couleur</span><br>dans Votre Monde",
        heroSubtitle: "Services professionnels de peinture et décoration pour les maisons, bâtiments, appartements et espaces commerciaux.",
        heroQuality: "Travail de Qualité",
        heroSkilled: "Peintres Expérimentés",
        heroOnTime: "À Temps",
        heroServices: "NOS SERVICES",
        heroGallery: "VOIR LA GALERIE",
        quoteTitle: "Obtenir une Estimation Instantanée",
        servicesTitle: "Nos Services",
        servicesSubtitle: "Nous apportons de la couleur dans votre monde de 30%",
        serviceHomes: "Maisons",
        serviceHomesDesc: "Peinture intérieure et extérieure.",
        serviceBuildings: "Bâtiments",
        serviceBuildingsDesc: "Peinture professionnelle pour les bâtiments.",
        serviceApartments: "Appartements",
        serviceApartmentsDesc: "Couleurs fraîches pour les appartements.",
        serviceCommercial: "Commercial",
        serviceCommercialDesc: "Peinture pour les entreprises.",
        serviceDecorating: "Décoration",
        serviceDecoratingDesc: "Papier peint et finitions décoratives.",
        pricingTitle: "Tarifs Indicatifs & Délais",
        pricingSubtitle: "Tarifs m² transparents et durées de projet pour Amsterdam & environs.",
        galleryTitle: "Notre Galerie de Travaux",
        gallerySubtitle: "Nous apportons de la couleur dans votre monde de 30%",
        baTitle: "Avant & Après",
        baSubtitle: "Faites glisser le curseur pour voir la transformation",
        sliderTitle: "Essayez les Couleurs en Direct",
        sliderSubtitle: "Sélectionnez une couleur et faites glisser le curseur pour voir la transformation",
        chooseColor: "Choisissez Votre Couleur",
        tiktokTitle: "Suivez-nous sur TikTok",
        tiktokSubtitle: "Regardez nos projets de peinture et nos conseils",
        reviewsTitle: "Ce Que Disent Nos Clients",
        aboutTitle: "À Propos de Nous",
        aboutSubtitle: "Services Professionnels de Peinture & Décoration à Amsterdam",
        footerSlogan: "Nous Peignons. Vous Aimez.",
        footerQuickLinks: "Liens Rapides",
        footerContact: "Contact"
    },
    de: {
        navHome: "Startseite",
        navServices: "Dienstleistungen",
        navPricing: "Preise",
        navGallery: "Galerie",
        navColors: "Farben",
        navReviews: "Bewertungen",
        navAbout: "Über Uns",
        navContact: "Kontakt",
        getQuote: "ANGEBOT ANFORDERN",
        heroTitle: "Wir Bringen <span>Farbe</span><br>in Ihre Welt",
        heroSubtitle: "Professionelle Maler- und Dekorationsdienstleistungen für Häuser, Gebäude, Wohnungen und Gewerberäume.",
        heroQuality: "Qualitätsarbeit",
        heroSkilled: "Erfahrene Maler",
        heroOnTime: "Pünktlich",
        heroServices: "UNSE DIENSTLEISTUNGEN",
        heroGallery: "GALERIE ANSEHEN",
        quoteTitle: "Sofortige Kostenschätzung",
        servicesTitle: "Unsere Dienstleistungen",
        servicesSubtitle: "Wir bringen Farbe in Ihre Welt um 30%",
        serviceHomes: "Häuser",
        serviceHomesDesc: "Innen- und Außenanstrich.",
        serviceBuildings: "Gebäude",
        serviceBuildingsDesc: "Professionelle Malerei für Gebäude.",
        serviceApartments: "Wohnungen",
        serviceApartmentsDesc: "Frische Farben für Wohnungen.",
        serviceCommercial: "Gewerblich",
        serviceCommercialDesc: "Malerarbeiten für Unternehmen.",
        serviceDecorating: "Dekoration",
        serviceDecoratingDesc: "Tapeten und dekorative Oberflächen.",
        pricingTitle: "Preise & Zeitpläne",
        pricingSubtitle: "Transparente m²-Preise und Projektdauern für Amsterdam & Umgebung.",
        galleryTitle: "Unsere Arbeitsgalerie",
        gallerySubtitle: "Wir bringen Farbe in Ihre Welt um 30%",
        baTitle: "Vorher & Nachher",
        baSubtitle: "Ziehen Sie den Schieberegler, um die Transformation zu sehen",
        sliderTitle: "Farben Live Testen",
        sliderSubtitle: "Wählen Sie eine Farbe und ziehen Sie den Schieberegler, um die Transformation zu sehen",
        chooseColor: "Wählen Sie Ihre Farbe",
        tiktokTitle: "Folgen Sie uns auf TikTok",
        tiktokSubtitle: "Sehen Sie unsere Malprojekte und Tipps",
        reviewsTitle: "Was Unsere Kunden Sagen",
        aboutTitle: "Über Uns",
        aboutSubtitle: "Professionelle Maler- & Dekorationsdienstleistungen in Amsterdam",
        footerSlogan: "Wir Streichen. Sie Lieben.",
        footerQuickLinks: "Schnelle Links",
        footerContact: "Kontakt"
    },
    es: {
        navHome: "Inicio",
        navServices: "Servicios",
        navPricing: "Precios",
        navGallery: "Galería",
        navColors: "Colores",
        navReviews: "Reseñas",
        navAbout: "Sobre Nosotros",
        navContact: "Contacto",
        getQuote: "SOLICITAR PRESUPUESTO",
        heroTitle: "Traemos <span>Color</span><br>a Tu Mundo",
        heroSubtitle: "Servicios profesionales de pintura y decoración para hogares, edificios, apartamentos y espacios comerciales.",
        heroQuality: "Trabajo de Calidad",
        heroSkilled: "Pintores Expertos",
        heroOnTime: "A Tiempo",
        heroServices: "NUESTROS SERVICIOS",
        heroGallery: "VER GALERÍA",
        quoteTitle: "Obtener Estimación Instantánea",
        servicesTitle: "Nuestros Servicios",
        servicesSubtitle: "Traemos color a tu mundo en un 30%",
        serviceHomes: "Hogares",
        serviceHomesDesc: "Pintura interior y exterior.",
        serviceBuildings: "Edificios",
        serviceBuildingsDesc: "Pintura profesional para edificios.",
        serviceApartments: "Apartamentos",
        serviceApartmentsDesc: "Colores frescos para apartamentos.",
        serviceCommercial: "Comercial",
        serviceCommercialDesc: "Pintura para empresas.",
        serviceDecorating: "Decoración",
        serviceDecoratingDesc: "Papel tapiz y acabados decorativos.",
        pricingTitle: "Precios Indicativos & Plazos",
        pricingSubtitle: "Tarifas m² transparentes y duraciones de proyectos para Amsterdam & alrededores.",
        galleryTitle: "Nuestra Galería de Trabajos",
        gallerySubtitle: "Traemos color a tu mundo en un 30%",
        baTitle: "Antes & Después",
        baSubtitle: "Desliza el control para ver la transformación",
        sliderTitle: "Probar Colores en Vivo",
        sliderSubtitle: "Seleccione un color y deslice el control para ver la transformación",
        chooseColor: "Elija Su Color",
        tiktokTitle: "Síguenos en TikTok",
        tiktokSubtitle: "Mira nuestros proyectos de pintura y consejos",
        reviewsTitle: "Lo Que Dicen Nuestros Clientes",
        aboutTitle: "Sobre Nosotros",
        aboutSubtitle: "Servicios Profesionales de Pintura y Decoración en Amsterdam",
        footerSlogan: "Nosotros Pintamos. Tú Amas.",
        footerQuickLinks: "Enlaces Rápidos",
        footerContact: "Contacto"
    },
    pt: {
        navHome: "Início",
        navServices: "Serviços",
        navPricing: "Preços",
        navGallery: "Galeria",
        navColors: "Cores",
        navReviews: "Avaliações",
        navAbout: "Sobre Nós",
        navContact: "Contacto",
        getQuote: "SOLICITAR ORÇAMENTO",
        heroTitle: "Trazemos <span>Cor</span><br>ao Seu Mundo",
        heroSubtitle: "Serviços profissionais de pintura e decoração para casas, edifícios, apartamentos e espaços comerciais.",
        heroQuality: "Trabalho de Qualidade",
        heroSkilled: "Pintores Experientes",
        heroOnTime: "No Tempo",
        heroServices: "NOSSOS SERVIÇOS",
        heroGallery: "VER GALERIA",
        quoteTitle: "Obter Estimativa Instantânea",
        servicesTitle: "Nossos Serviços",
        servicesSubtitle: "Trazemos cor ao seu mundo em 30%",
        serviceHomes: "Casas",
        serviceHomesDesc: "Pintura interior e exterior.",
        serviceBuildings: "Edifícios",
        serviceBuildingsDesc: "Pintura profissional para edifícios.",
        serviceApartments: "Apartamentos",
        serviceApartmentsDesc: "Cores frescas para apartamentos.",
        serviceCommercial: "Comercial",
        serviceCommercialDesc: "Pintura para empresas.",
        serviceDecorating: "Decoração",
        serviceDecoratingDesc: "Papel de parede e acabamentos decorativos.",
        pricingTitle: "Preços Indicativos & Prazos",
        pricingSubtitle: "Tarifas m² transparentes e durações de projetos para Amsterdam & arredores.",
        galleryTitle: "Nossa Galeria de Trabalhos",
        gallerySubtitle: "Trazemos cor ao seu mundo em 30%",
        baTitle: "Antes & Depois",
        baSubtitle: "Deslize o controle para ver a transformação",
        sliderTitle: "Testar Cores ao Vivo",
        sliderSubtitle: "Selecione uma cor e deslize o controle para ver a transformação",
        chooseColor: "Escolha Sua Cor",
        tiktokTitle: "Siga-nos no TikTok",
        tiktokSubtitle: "Veja nossos projetos de pintura e dicas",
        reviewsTitle: "O Que Nossos Clientes Dizem",
        aboutTitle: "Sobre Nós",
        aboutSubtitle: "Serviços Profissionais de Pintura e Decoração em Amsterdam",
        footerSlogan: "Nós Pintamos. Você Ama.",
        footerQuickLinks: "Links Rápidos",
        footerContact: "Contacto"
    },
    it: {
        navHome: "Home",
        navServices: "Servizi",
        navPricing: "Prezzi",
        navGallery: "Galleria",
        navColors: "Colori",
        navReviews: "Recensioni",
        navAbout: "Chi Siamo",
        navContact: "Contatto",
        getQuote: "RICHIEDI PREVENTIVO",
        heroTitle: "Portiamo <span>Colore</span><br>nel Tuo Mondo",
        heroSubtitle: "Servizi professionali di pittura e decorazione per case, edifici, appartamenti e spazi commerciali.",
        heroQuality: "Lavoro di Qualità",
        heroSkilled: "Pittori Esperti",
        heroOnTime: "In Tempo",
        heroServices: "I NOSTRI SERVIZI",
        heroGallery: "VEDI GALLERIA",
        quoteTitle: "Ottieni Stima Istantanea",
        servicesTitle: "I Nostri Servizi",
        servicesSubtitle: "Portiamo colore nel tuo mondo del 30%",
        serviceHomes: "Case",
        serviceHomesDesc: "Pittura interna ed esterna.",
        serviceBuildings: "Edifici",
        serviceBuildingsDesc: "Pittura professionale per edifici.",
        serviceApartments: "Appartamenti",
        serviceApartmentsDesc: "Colori freschi per appartamenti.",
        serviceCommercial: "Commerciale",
        serviceCommercialDesc: "Pittura per aziende.",
        serviceDecorating: "Decorazione",
        serviceDecoratingDesc: "Carta da parati e finiture decorative.",
        pricingTitle: "Prezzi Indicativi & Tempi",
        pricingSubtitle: "Tariffe m² trasparenti e durate dei progetti per Amsterdam & dintorni.",
        galleryTitle: "La Nostra Galleria di Lavori",
        gallerySubtitle: "Portiamo colore nel tuo mondo del 30%",
        baTitle: "Prima & Dopo",
        baSubtitle: "Scorri il cursore per vedere la trasformazione",
        sliderTitle: "Prova Colori dal Vivo",
        sliderSubtitle: "Seleziona un colore e scorri il cursore per vedere la trasformazione",
        chooseColor: "Scegli Il Tuo Colore",
        tiktokTitle: "Seguici su TikTok",
        tiktokSubtitle: "Guarda i nostri progetti di pittura e consigli",
        reviewsTitle: "Cosa Dicono I Nostri Clienti",
        aboutTitle: "Chi Siamo",
        aboutSubtitle: "Servizi Professionali di Pittura e Decorazione ad Amsterdam",
        footerSlogan: "Noi Dipingiamo. Tu Ami.",
        footerQuickLinks: "Link Rapidi",
        footerContact: "Contatto"
    },
    tr: {
        navHome: "Ana Sayfa",
        navServices: "Hizmetler",
        navPricing: "Fiyatlandırma",
        navGallery: "Galeri",
        navColors: "Renkler",
        navReviews: "Yorumlar",
        navAbout: "Hakkımızda",
        navContact: "İletişim",
        getQuote: "TEKLİF AL",
        heroTitle: "Dünyanıza <span>Renk</span><br>Getiriyoruz",
        heroSubtitle: "Evler, binalar, apartmanlar ve ticari alanlar için profesyonel boya ve dekorasyon hizmetleri.",
        heroQuality: "Kaliteli İş",
        heroSkilled: "Uzman Boyacılar",
        heroOnTime: "Zamanında",
        heroServices: "HİZMETLERİMİZ",
        heroGallery: "GALERİYİ GÖR",
        quoteTitle: "Anında Tahmin Al",
        servicesTitle: "Hizmetlerimiz",
        servicesSubtitle: "Dünyanıza %30 renk getiriyoruz",
        serviceHomes: "Evler",
        serviceHomesDesc: "İç ve dış cephe boyası.",
        serviceBuildings: "Binalar",
        serviceBuildingsDesc: "Binalar için profesyonel boya.",
        serviceApartments: "Apartmanlar",
        serviceApartmentsDesc: "Apartmanlar için taze renkler.",
        serviceCommercial: "Ticari",
        serviceCommercialDesc: "İşletmeler için boya.",
        serviceDecorating: "Dekorasyon",
        serviceDecoratingDesc: "Duvar kağıdı ve dekoratif kaplamalar.",
        pricingTitle: "Göstergesel Fiyatlandırma & Zaman Çizelgesi",
        pricingSubtitle: "Amsterdam ve çevresi için şeffaf m² oranları ve proje süreleri.",
        galleryTitle: "Çalışma Galeri",
        gallerySubtitle: "Dünyanıza %30 renk getiriyoruz",
        baTitle: "Öncesi & Sonrası",
        baSubtitle: "Dönüşümü görmek için kaydırıcıyı sürükleyin",
        sliderTitle: "Renkleri Canlı Deneyin",
        sliderSubtitle: "Dönüşümü görmek için bir renk seçin ve kaydırıcıyı sürükleyin",
        chooseColor: "Renginizi Seçin",
        tiktokTitle: "TikTok'ta Bizi Takip Edin",
        tiktokSubtitle: "Boya projelerimizi ve ipuçlarımızı izleyin",
        reviewsTitle: "Müşterilerimiz Ne Diyor",
        aboutTitle: "Hakkımızda",
        aboutSubtitle: "Amsterdam'da Profesyonel Boya ve Dekorasyon Hizmetleri",
        footerSlogan: "Biz Boyuyoruz. Siz Seviyorsunuz.",
        footerQuickLinks: "Hızlı Linkler",
        footerContact: "İletişim"
    },
    ar: {
        navHome: "الرئيسية",
        navServices: "الخدمات",
        navPricing: "التسعير",
        navGallery: "المعرض",
        navColors: "الألوان",
        navReviews: "المراجعات",
        navAbout: "من نحن",
        navContact: "اتصل بنا",
        getQuote: "احصل على عرض سعر",
        heroTitle: "نحن نحضر <span>اللون</span><br>إلى عالمك",
        heroSubtitle: "خدمات الطلاء والديكور الاحترافية للمنازل والمباني والشقق والمساحات التجارية.",
        heroQuality: "عمل عالي الجودة",
        heroSkilled: "رسامون محترفون",
        heroOnTime: "في الوقت المحدد",
        heroServices: "خدماتنا",
        heroGallery: "عرض المعرض",
        quoteTitle: "احصل على تقدير فوري",
        servicesTitle: "خدماتنا",
        servicesSubtitle: "نحن نحضر اللون إلى عالمك بنسبة 30%",
        serviceHomes: "المنازل",
        serviceHomesDesc: "الطلاء الداخلي والخارجي.",
        serviceBuildings: "المباني",
        serviceBuildingsDesc: "الطلاء الاحترافي للمباني.",
        serviceApartments: "الشقق",
        serviceApartmentsDesc: "ألوان جديدة للشقق.",
        serviceCommercial: "تجاري",
        serviceCommercialDesc: "الطلاء للشركات.",
        serviceDecorating: "الديكور",
        serviceDecoratingDesc: "ورق الحائط والتشطيبات الزخرفية.",
        pricingTitle: "التسعير والجدول الزمني",
        pricingSubtitle: "أسعار م² شفافة ومدد المشاريع لأمستردام والمناطق المحيطة.",
        galleryTitle: "معرض أعمالنا",
        gallerySubtitle: "نحن نحضر اللون إلى عالمك بنسبة 30%",
        baTitle: "قبل وبعد",
        baSubtitle: "اسحب شريط التمرير لرؤية التحويل",
        sliderTitle: "جرب الألوان مباشرة",
        sliderSubtitle: "اختر لونًا واسحب شريط التمرير لرؤية التحويل",
        chooseColor: "اختر لونك",
        tiktokTitle: "تابعنا على TikTok",
        tiktokSubtitle: "شاهد مشاريع الطلاء ونصائحنا",
        reviewsTitle: "ماذا يقول عملاؤنا",
        aboutTitle: "من نحن",
        aboutSubtitle: "خدمات الطلاء والديكور الاحترافية في أمستردام",
        footerSlogan: "نحن نرسم. أنت تحب.",
        footerQuickLinks: "روابط سريعة",
        footerContact: "اتصل بنا"
    },
    ru: {
        navHome: "Главная",
        navServices: "Услуги",
        navPricing: "Цены",
        navGallery: "Галерея",
        navColors: "Цвета",
        navReviews: "Отзывы",
        navAbout: "О нас",
        navContact: "Контакты",
        getQuote: "ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ",
        heroTitle: "Мы приносим <span>цвет</span><br>в ваш мир",
        heroSubtitle: "Профессиональные услуги по покраске и декорированию для домов, зданий, квартир и коммерческих помещений.",
        heroQuality: "Качественная работа",
        heroSkilled: "Квалифицированные маляры",
        heroOnTime: "Вовремя",
        heroServices: "НАШИ УСЛУГИ",
        heroGallery: "ПОСМОТРЕТЬ ГАЛЕРЕЮ",
        quoteTitle: "Получить мгновенную оценку",
        servicesTitle: "Наши услуги",
        servicesSubtitle: "Мы приносим цвет в ваш мир на 30%",
        serviceHomes: "Дома",
        serviceHomesDesc: "Внутренняя и внешняя покраска.",
        serviceBuildings: "Здания",
        serviceBuildingsDesc: "Профессиональная покраска зданий.",
        serviceApartments: "Квартиры",
        serviceApartmentsDesc: "Свежие цвета для квартир.",
        serviceCommercial: "Коммерческий",
        serviceCommercialDesc: "Покраска для бизнеса.",
        serviceDecorating: "Декорирование",
        serviceDecoratingDesc: "Обои и декоративные отделки.",
        pricingTitle: "Ориентировочные цены и сроки",
        pricingSubtitle: "Прозрачные тарифы за м² и сроки проектов для Амстердама и окрестностей.",
        galleryTitle: "Галерея наших работ",
        gallerySubtitle: "Мы приносим цвет в ваш мир на 30%",
        baTitle: "До и после",
        baSubtitle: "Перетащите ползунок, чтобы увидеть трансформацию",
        sliderTitle: "Попробуйте цвета в реальном времени",
        sliderSubtitle: "Выберите цвет и перетащите ползунок, чтобы увидеть трансформацию",
        chooseColor: "Выберите свой цвет",
        tiktokTitle: "Подпишитесь на нас в TikTok",
        tiktokSubtitle: "Смотрите наши проекты покраски и советы",
        reviewsTitle: "Что говорят наши клиенты",
        aboutTitle: "О нас",
        aboutSubtitle: "Профессиональные услуги по покраске и декорированию в Амстердаме",
        footerSlogan: "Мы красим. Вы любите.",
        footerQuickLinks: "Быстрые ссылки",
        footerContact: "Контакты"
    },
    uk: {
        navHome: "Головна",
        navServices: "Послуги",
        navPricing: "Ціни",
        navGallery: "Галерея",
        navColors: "Кольори",
        navReviews: "Відгуки",
        navAbout: "Про нас",
        navContact: "Контакти",
        getQuote: "ОТРИМАТИ ПРОПОЗИЦІЮ",
        heroTitle: "Ми приносимо <span>колір</span><br>у ваш світ",
        heroSubtitle: "Професійні послуги з фарбування та декорування для будинків, будівель, квартир та комерційних приміщень.",
        heroQuality: "Якісна робота",
        heroSkilled: "Кваліфіковані малярі",
        heroOnTime: "Вчасно",
        heroServices: "НАШІ ПОСЛУГИ",
        heroGallery: "ПЕРЕГЛЯНУТИ ГАЛЕРЕЮ",
        quoteTitle: "Отримати миттєву оцінку",
        servicesTitle: "Наші послуги",
        servicesSubtitle: "Ми приносимо колір у ваш світ на 30%",
        serviceHomes: "Будинки",
        serviceHomesDesc: "Внутрішнє та зовнішнє фарбування.",
        serviceBuildings: "Будівлі",
        serviceBuildingsDesc: "Професійне фарбування будівель.",
        serviceApartments: "Квартири",
        serviceApartmentsDesc: "Свіжі кольори для квартир.",
        serviceCommercial: "Комерційний",
        serviceCommercialDesc: "Фарбування для бізнесу.",
        serviceDecorating: "Декорування",
        serviceDecoratingDesc: "Шпалери та декоративні оздоблення.",
        pricingTitle: "Орієнтовні ціни та терміни",
        pricingSubtitle: "Прозорі тарифи за м² та терміни проектів для Амстердама та околиць.",
        galleryTitle: "Галерея наших робіт",
        gallerySubtitle: "Ми приносимо колір у ваш світ на 30%",
        baTitle: "До і після",
        baSubtitle: "Перетягніть повзунок, щоб побачити трансформацію",
        sliderTitle: "Спробуйте кольори в реальному часі",
        sliderSubtitle: "Виберіть колір і перетягніть повзунок, щоб побачити трансформацію",
        chooseColor: "Виберіть свій колір",
        tiktokTitle: "Підпишіться на нас у TikTok",
        tiktokSubtitle: "Дивіться наші проекти фарбування та поради",
        reviewsTitle: "Що кажуть наші клієнти",
        aboutTitle: "Про нас",
        aboutSubtitle: "Професійні послуги з фарбування та декорування в Амстердамі",
        footerSlogan: "Ми фарбуємо. Ви любите.",
        footerQuickLinks: "Швидкі посилання",
        footerContact: "Контакти"
    }
};

let currentLanguage = 'en';

function toggleLanguageDropdown() {
    const menu = document.getElementById('languageMenu');
    menu.classList.toggle('show');
}

function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update current language display
    const langDisplay = document.getElementById('currentLang');
    const langCodes = {
        'en': 'EN',
        'nl': 'NL',
        'fr': 'FR',
        'de': 'DE',
        'es': 'ES',
        'pt': 'PT',
        'it': 'IT',
        'tr': 'TR',
        'ar': 'AR',
        'ru': 'RU',
        'uk': 'UK'
    };
    langDisplay.textContent = langCodes[lang];
    
    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Close dropdown
    document.getElementById('languageMenu').classList.remove('show');
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.language-dropdown');
    const menu = document.getElementById('languageMenu');
    if (!dropdown.contains(event.target)) {
        menu.classList.remove('show');
    }
});

// ===============================
// GALLERY LIGHTBOX
// ===============================
function initGalleryLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.getElementById('lightboxClose');
    const items = document.querySelectorAll('.gallery-item[data-src]');
    
    if (!lightbox || items.length === 0) return;
    
    function openLightbox(src, alt, caption) {
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightboxCaption.textContent = caption || '';
        lightbox.hidden = false;
        document.body.classList.add('no-scroll');
    }
    
    function closeLightbox() {
        lightbox.hidden = true;
        lightboxImg.src = '';
        document.body.classList.remove('no-scroll');
    }
    
    items.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            openLightbox(
                item.dataset.src,
                img?.alt || '',
                item.dataset.caption || ''
            );
        });
        
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.click();
            }
        });
    });
    
    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Zoom functionality - click image to zoom in/out
    lightboxImg.addEventListener('click', (e) => {
        e.stopPropagation();
        lightboxImg.classList.toggle('zoomed');
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });
}

// Initialize lightbox when DOM is ready
document.addEventListener('DOMContentLoaded', initGalleryLightbox);

// ===============================
// REVIEW CAROUSEL
// ===============================
let currentReviewIndex = 0;

function moveCarousel(direction) {
    const reviewCarousel = document.getElementById('reviewCarousel');
    const cardWidth = 330; // card width + gap
    const scrollAmount = cardWidth * direction;
    reviewCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

// ===============================
// BEFORE & AFTER SLIDER
// ===============================
const baSlider = document.getElementById('baSlider');
const baHandle = document.getElementById('baHandle');
const baBefore = document.querySelector('.ba-before');
let isDragging = false;

if (baSlider && baHandle) {
    baSlider.addEventListener('mousedown', startDrag);
    baSlider.addEventListener('touchstart', startDrag, { passive: false });
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag, { passive: false });
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
}

function startDrag(e) {
    isDragging = true;
    drag(e);
}

function drag(e) {
    if (!isDragging) return;
    if (e.touches) e.preventDefault(); // stop page scroll while dragging on mobile

    const rect = baSlider.getBoundingClientRect();
    let x = (e.clientX || e.touches[0].clientX) - rect.left;
    x = Math.max(0, Math.min(x, rect.width));

    const percentage = (x / rect.width) * 100;
    baHandle.style.left = percentage + '%';
    // Clip the "before" (top) layer from the right so it reveals the
    // "after" / painted-door layer underneath instead of squishing the image.
    baBefore.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
}

function stopDrag() {
    isDragging = false;
}

// ===============================
// CHATBOX MINIMIZE/MAXIMIZE
// ===============================
let isChatMinimized = false;

function toggleChatSize() {
    const chatBox = document.getElementById('chatBox');
    const chatToggleIcon = document.getElementById('chatToggleIcon');
    
    isChatMinimized = !isChatMinimized;
    
    if (isChatMinimized) {
        chatBox.classList.add('minimized');
        chatToggleIcon.classList.remove('fa-minus');
        chatToggleIcon.classList.add('fa-expand');
    } else {
        chatBox.classList.remove('minimized');
        chatToggleIcon.classList.remove('fa-expand');
        chatToggleIcon.classList.add('fa-minus');
    }
}

// ===============================
// DARK MODE TOGGLE
// ===============================
let isDarkMode = false;

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    const darkModeIcon = document.getElementById('darkModeIcon');
    
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    } else {
        body.classList.remove('dark-mode');
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
}

// Check for saved dark mode preference
document.addEventListener('DOMContentLoaded', function() {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        toggleDarkMode();
    }

    // Initialize price estimator calculator
    initPriceEstimator();
    // Initialize interactive paint preview
    initPaintPreview();
});

// ===============================
// PRICE ESTIMATOR CALCULATOR
// ===============================
function initPriceEstimator() {
    const slider = document.getElementById("m2Slider");
    const m2Display = document.getElementById("m2Display");
    const priceDisplay = document.getElementById("priceDisplay");
    const timeDisplay = document.getElementById("timeDisplay");
    const serviceSelect = document.getElementById("serviceSelect");
    
    const hiddenM2 = document.getElementById("hiddenM2");
    const hiddenPrice = document.getElementById("hiddenPrice");

    if (!slider || !m2Display || !priceDisplay || !timeDisplay || !serviceSelect) {
        return; // Elements don't exist on this page
    }

    function calculateEstimate() {
        const m2 = parseInt(slider.value);
        const service = serviceSelect.value;
        
        let minPricePerM2 = 8;
        let maxPricePerM2 = 17;
        let daysText = "1 Day";

        // Adjust pricing based on Dutch market rates selected in dropdown
        if (service === "ceiling") {
            minPricePerM2 = 10;
            maxPricePerM2 = 20;
        } else if (service === "spray") {
            minPricePerM2 = 7;
            maxPricePerM2 = 12;
        }

        // Calculate final ranges
        let estMin = m2 * minPricePerM2;
        let estMax = m2 * maxPricePerM2;

        // Estimate timeline rules
        if (m2 <= 30) {
            daysText = "1 Day";
        } else if (m2 > 30 && m2 <= 65) {
            daysText = "1 - 2 Days";
        } else if (m2 > 65 && m2 <= 110) {
            daysText = "2 - 3 Days";
        } else {
            daysText = "4 - 6 Days";
        }

        // Update visual display text
        m2Display.innerText = m2;
        priceDisplay.innerText = `€${estMin.toLocaleString()} - €${estMax.toLocaleString()}`;
        timeDisplay.innerText = daysText;

        // Update hidden fields so data transfers on submit
        hiddenM2.value = m2;
        hiddenPrice.value = `€${estMin} - €${estMax}`;
    }

    // Trigger calculation anytime user interacts with inputs
    slider.addEventListener("input", calculateEstimate);
    serviceSelect.addEventListener("change", calculateEstimate);
}

// ===============================
// INTERACTIVE PAINT PREVIEW (Integrated with Before/After Slider)
// ===============================
function initPaintPreview() {
    const paintBuckets = document.querySelectorAll('.paint-bucket');
    const doorPaintOverlay = document.getElementById('doorPaintOverlay');

    if (!doorPaintOverlay) {
        return; // Elements don't exist on this page
    }

    let selectedColor = '#0a2b57';

    // Handle paint bucket selection
    paintBuckets.forEach(bucket => {
        bucket.addEventListener('click', function() {
            // Remove active class from all buckets
            paintBuckets.forEach(b => b.classList.remove('active'));
            // Add active class to selected bucket
            this.classList.add('active');
            
            // Get selected color
            selectedColor = this.getAttribute('data-color');
            
            // Convert hex to rgba for door overlay
            const r = parseInt(selectedColor.slice(1, 3), 16);
            const g = parseInt(selectedColor.slice(3, 5), 16);
            const b = parseInt(selectedColor.slice(5, 7), 16);
            
            // Update door paint overlay color
            doorPaintOverlay.querySelector('.door-panel').style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.7)`;
        });
    });

    // Set initial state - activate Navy Blue
    const navyBucket = document.querySelector('.paint-bucket[data-color="#0a2b57"]');
    if (navyBucket) {
        navyBucket.classList.add('active');
    }
}

// ===============================
// COLOR FAN DECK DATA
// ===============================
const colorCategories = [
    {
        title: "Pinks",
        subtitle: "Soft and romantic pink shades",
        colors: [
            { name: "Baby Pink", hex: "#F4C2C2" },
            { name: "Hot Pink", hex: "#FF69B4" },
            { name: "Pastel Pink", hex: "#FFD1DC" },
            { name: "Rose Pink", hex: "#FF66B2" },
            { name: "Coral Pink", hex: "#F88379" },
            { name: "Fuchsia", hex: "#FF00FF" },
            { name: "Magenta", hex: "#FF00FF" },
            { name: "Blush", hex: "#DE5D83" },
            { name: "Salmon", hex: "#FA8072" },
            { name: "Dusty Rose", hex: "#DCAE96" },
            { name: "Peach Pink", hex: "#FFCBA4" },
            { name: "Bubblegum", hex: "#FFC6CB" }
        ]
    },
    {
        title: "Oranges",
        subtitle: "Warm and vibrant orange tones",
        colors: [
            { name: "Bright Orange", hex: "#FFA500" },
            { name: "Tangerine", hex: "#FF9966" },
            { name: "Peach", hex: "#FFCBA4" },
            { name: "Apricot", hex: "#FBCEB1" },
            { name: "Coral", hex: "#FF7F50" },
            { name: "Sunset Orange", hex: "#FF6B35" },
            { name: "Burnt Orange", hex: "#CC5500" },
            { name: "Pumpkin", hex: "#FF7518" },
            { name: "Mandarin", hex: "#F3722C" },
            { name: "Clementine", hex: "#E85D04" },
            { name: "Amber", hex: "#FFBF00" },
            { name: "Rust", hex: "#B7410E" }
        ]
    },
    {
        title: "Navy Blues",
        subtitle: "Deep and elegant navy shades",
        colors: [
            { name: "Navy Blue", hex: "#000080" },
            { name: "Royal Navy", hex: "#1E3A5F" },
            { name: "Midnight Navy", hex: "#191970" },
            { name: "Oxford Blue", hex: "#002147" },
            { name: "Dark Navy", hex: "#0B0B3B" },
            { name: "Classic Navy", hex: "#000080" },
            { name: "Steel Navy", hex: "#2C3E50" },
            { name: "Deep Navy", hex: "#0A1628" },
            { name: "Nebula Blue", hex: "#1C1C3D" },
            { name: "Admiral Blue", hex: "#1C39BB" },
            { name: "Sapphire Navy", hex: "#0F52BA" },
            { name: "Indigo Navy", hex: "#4B0082" }
        ]
    },
    {
        title: "Browns",
        subtitle: "Rich and earthy brown tones",
        colors: [
            { name: "Chocolate", hex: "#7B3F00" },
            { name: "Coffee", hex: "#6F4E37" },
            { name: "Cocoa", hex: "#8B4513" },
            { name: "Espresso", hex: "#3C2F2F" },
            { name: "Mocha", hex: "#C68E17" },
            { name: "Caramel", hex: "#C68E17" },
            { name: "Sienna", hex: "#A0522D" },
            { name: "Saddle Brown", hex: "#8B4513" },
            { name: "Chestnut", hex: "#954535" },
            { name: "Walnut", hex: "#5D4037" },
            { name: "Mahogany", hex: "#C04000" },
            { name: "Umber", hex: "#635147" }
        ]
    },
    {
        title: "Whites & Neutrals",
        subtitle: "Classic whites and neutral tones",
        colors: [
            { name: "Pure White", hex: "#FFFFFF" },
            { name: "Ivory", hex: "#FFFFF0" },
            { name: "Cream", hex: "#FFFDD0" },
            { name: "Beige", hex: "#F5F5DC" },
            { name: "Eggshell", hex: "#F0EAD6" },
            { name: "Off-White", hex: "#FAF9F6" },
            { name: "Alabaster", hex: "#EDEAE8" },
            { name: "Navajo White", hex: "#FFDEAD" },
            { name: "Antique White", hex: "#FAEBD7" },
            { name: "Snow", hex: "#FFFAFA" },
            { name: "Ghost White", hex: "#F8F8FF" },
            { name: "Seashell", hex: "#FFF5EE" }
        ]
    },
    {
        title: "Greys",
        subtitle: "Modern grey shades",
        colors: [
            { name: "Light Grey", hex: "#D3D3D3" },
            { name: "Silver", hex: "#C0C0C0" },
            { name: "Slate Grey", hex: "#708090" },
            { name: "Charcoal", hex: "#36454F" },
            { name: "Gunmetal", hex: "#2C3539" },
            { name: "Cool Grey", hex: "#8C92AC" },
            { name: "Warm Grey", hex: "#B5A642" },
            { name: "Pearl Grey", hex: "#DCE8E2" },
            { name: "Steel Grey", hex: "#434B4D" },
            { name: "Ash Grey", hex: "#B2BEB5" },
            { name: "Zinc", hex: "#7B8D8E" },
            { name: "Graphite", hex: "#383E42" }
        ]
    },
    {
        title: "Beiges & Browns",
        subtitle: "Warm earth tones",
        colors: [
            { name: "Tan", hex: "#D2B48C" },
            { name: "Cocoa", hex: "#8B4513" },
            { name: "Coffee", hex: "#6F4E37" },
            { name: "Mocha", hex: "#C68E17" },
            { name: "Caramel", hex: "#C68E17" },
            { name: "Sienna", hex: "#A0522D" },
            { name: "Saddle Brown", hex: "#8B4513" },
            { name: "Chestnut", hex: "#954535" },
            { name: "Amber", hex: "#FFBF00" },
            { name: "Honey", hex: "#EB9605" },
            { name: "Ochre", hex: "#CC7722" },
            { name: "Umber", hex: "#635147" }
        ]
    },
    {
        title: "Reds & Pinks",
        subtitle: "Bold and vibrant reds",
        colors: [
            { name: "Crimson", hex: "#DC143C" },
            { name: "Scarlet", hex: "#FF2400" },
            { name: "Ruby", hex: "#E0115F" },
            { name: "Burgundy", hex: "#800020" },
            { name: "Maroon", hex: "#800000" },
            { name: "Coral", hex: "#FF7F50" },
            { name: "Salmon", hex: "#FA8072" },
            { name: "Rose", hex: "#FF007F" },
            { name: "Magenta", hex: "#FF00FF" },
            { name: "Pink", hex: "#FFC0CB" },
            { name: "Hot Pink", hex: "#FF69B4" },
            { name: "Blush", hex: "#DE5D83" }
        ]
    },
    {
        title: "Oranges & Yellows",
        subtitle: "Warm and energetic tones",
        colors: [
            { name: "Orange", hex: "#FFA500" },
            { name: "Tangerine", hex: "#FF9966" },
            { name: "Peach", hex: "#FFCBA4" },
            { name: "Apricot", hex: "#FBCEB1" },
            { name: "Gold", hex: "#FFD700" },
            { name: "Yellow", hex: "#FFFF00" },
            { name: "Lemon", hex: "#FFFACD" },
            { name: "Canary", hex: "#FFEF00" },
            { name: "Mustard", hex: "#FFDB58" },
            { name: "Amber", hex: "#FFBF00" },
            { name: "Saffron", hex: "#F4C430" },
            { name: "Sunset", hex: "#FF6B35" }
        ]
    },
    {
        title: "Greens",
        subtitle: "Natural and refreshing greens",
        colors: [
            { name: "Forest Green", hex: "#228B22" },
            { name: "Emerald", hex: "#50C878" },
            { name: "Olive", hex: "#808000" },
            { name: "Sage", hex: "#9DC183" },
            { name: "Mint", hex: "#98FF98" },
            { name: "Lime", hex: "#32CD32" },
            { name: "Sea Green", hex: "#2E8B57" },
            { name: "Teal", hex: "#008080" },
            { name: "Turquoise", hex: "#40E0D0" },
            { name: "Hunter Green", hex: "#355E3B" },
            { name: "Pine", hex: "#01796F" },
            { name: "Jade", hex: "#00A86B" }
        ]
    },
    {
        title: "Blues",
        subtitle: "Calm and serene blues",
        colors: [
            { name: "Navy", hex: "#000080" },
            { name: "Royal Blue", hex: "#4169E1" },
            { name: "Sky Blue", hex: "#87CEEB" },
            { name: "Baby Blue", hex: "#89CFF0" },
            { name: "Steel Blue", hex: "#4682B4" },
            { name: "Powder Blue", hex: "#B0E0E6" },
            { name: "Cobalt", hex: "#0047AB" },
            { name: "Cerulean", hex: "#007BA7" },
            { name: "Azure", hex: "#007FFF" },
            { name: "Denim", hex: "#1560BD" },
            { name: "Midnight Blue", hex: "#191970" },
            { name: "Periwinkle", hex: "#CCCCFF" }
        ]
    },
    {
        title: "Purples & Violets",
        subtitle: "Rich and elegant purples",
        colors: [
            { name: "Purple", hex: "#800080" },
            { name: "Lavender", hex: "#E6E6FA" },
            { name: "Lilac", hex: "#C8A2C8" },
            { name: "Violet", hex: "#8B00FF" },
            { name: "Indigo", hex: "#4B0082" },
            { name: "Plum", hex: "#DDA0DD" },
            { name: "Mauve", hex: "#E0B0FF" },
            { name: "Orchid", hex: "#DA70D6" },
            { name: "Fuchsia", hex: "#FF00FF" },
            { name: "Amethyst", hex: "#9966CC" },
            { name: "Grape", hex: "#6F2DA8" },
            { name: "Eggplant", hex: "#614051" }
        ]
    },
    {
        title: "Blacks & Dark Shades",
        subtitle: "Elegant blacks and dark tones",
        colors: [
            { name: "Pure Black", hex: "#000000" },
            { name: "Charcoal", hex: "#36454F" },
            { name: "Jet Black", hex: "#0A0A0A" },
            { name: "Onyx", hex: "#353839" },
            { name: "Ebony", hex: "#555D50" },
            { name: "Midnight", hex: "#191970" },
            { name: "Black Pearl", hex: "#1E272E" },
            { name: "Carbon", hex: "#383E42" },
            { name: "Obsidian", hex: "#0B0B0B" },
            { name: "Dark Slate", hex: "#2F4F4F" },
            { name: "Raven", hex: "#5E5E5E" },
            { name: "Black Velvet", hex: "#1A1A1A" }
        ]
    }
];

// ===============================
// MULTI-LANGUAGE AI CHATBOT
// ===============================
const chatbotKnowledge = {
    dutch: {
        keywords: ["hoeveel", "kosten", "prijs", "wat", "hoe", "wanneer", "waar", "waarom", "kan", "zullen", "moeten", "help", "vraag", "schilder", "verf", "decoratie", "muur", "plafond", "buiten", "binnen", "kleur", "advies", "hallo", "hi", "hey", "dank", "bedankt", "goedemorgen", "offerte", "gratis", "kamer", "appartement", "dienst", "kantoor", "behang", "buiten", "tijd", "boeken", "verf", "materiaal", "meubel", "schoon", "reparatie", "locatie", "amsterdam", "reizen", "sociaal", "review", "nood", "avond", "betaling", "cash", "vooruit", "tot ziens", "doei", "oppervlak", "quote", "plinten", "kozijnen", "deuren", "broos", "elektronica", "scheuren", "gaten", "vuller", "kit", "keuken", "badkamer", "glanzend", "vocht", "schimmel", "donker", "licht", "primer", "geur", "voc", "ventilatie", "behang verwijderen", "lijm", "tapijt", "hout", "vloer", "doek", "winter", "temperatuur", "foto's", "schilderen", "nachts", "bedrijf", "gang", "verkeer", "stoel", "schoonmaken", "corporate", "kleuren", "ral", "pantone", "ncs", "verzekerd", "aansprakelijkheid", "computers", "servers", "statisch", "hoogte", "kooiaap", "steiger", "deadline", "opening", "contract", "lijnen", "parkeerplaats", "magazijn", "epoxy", "brand", "staal", "intumescent", "afval", "chemisch", "recycling", "consultatie", "geldig", "uur", "vast", "aanbetaling", "schema", "rot", "hout", "garantie", "peeling", "bladderen", "bubbels", "voorbereiding", "korting", "team", "verandering", "certificering", "veiligheid", "meter", "m2", "m²", "vierkante", "oppervlakte", "grootte", "afmeting", "schuif", "calculator", "bereken", "slaapkamer", "woonkamer", "keuken", "badkamer", "ruimte", "wand", "sausen", "latex", "spuiten", "plafond", "project", "duur", "dagen", "uur", "schatting", "prijsbereik", "min", "max", "vanaf", "tot", "hoeveel", "meters", "dekken", "vierkante meter", "oppervlakte", "kamergrootte", "muuroppervlakte"],
        responses: {
            greeting: "Hallo 👋 Welkom bij Jone`s Paint & Decorators. Hoe kunnen we u vandaag helpen?",
            hi: "Hi 😊 Op zoek naar schilder- of decoratiediensten?",
            goodMorning: "Goedemorgen ☀️ Hoe kan Jone`s Paint & Decorators u helpen?",
            pricing: "Prijzen zijn afhankelijk van kamergrootte, muurconditie, verftype en locatie. We kunnen een gratis offerte geven.",
            freeQuote: "Absoluut ✅ Stuur kamerafmetingen, foto's of projectdetails voor een gratis offerte.",
            perRoom: "Ja. We kunnen per kamer, per appartement of volledig project rekenen, afhankelijk van het vereiste werk.",
            apartmentPrice: "Prijzen variëren afhankelijk van de conditie en verfafwerking. Upload foto's of vraag om een inspectie voor een exacte offerte.",
            services: "Wij bieden binnen- en buitenschilderwerk, behang, decoratie, kantoorverf, appartementverf en commerciële verf.",
            offices: "Ja ✅ Wij bieden commerciële en kantoorverfdiensten voor bedrijven en gebouwen.",
            wallpaper: "Ja 😊 Wij installeren behang, accentmuren en decoratieve afwerkingen.",
            exterior: "Ja. Wij bieden buitenschilderwerk voor woningen, gebouwen en commerciële panden.",
            duration: "De meeste kamers duren 1-2 dagen, afhankelijk van voorbereiding en droogtijd.",
            availability: "Wij zijn beschikbaar van maandag tot zaterdag van 8:00 tot 18:00.",
            onlineBooking: "Ja ✅ U kunt direct een boeking aanvragen via ons contactformulier.",
            supplyPaint: "Ja. Wij kunnen premium verfmerken leveren of werken met verf die door klanten wordt geleverd.",
            paintBrands: "Wij gebruiken hoogwaardige professionele verf voor langdurige afwerkingen en duurzaamheid.",
            colorHelp: "Ja 🎨 Wij bieden kleuradvies en decoratieadvies.",
            furniture: "Ja. Wij helpen bij het beschermen en verplaatsen van meubels voordat we beginnen met het werk.",
            cleaning: "Absoluut ✅ Wij laten alle gebieden schoon en netjes achter nadat het project is voltooid.",
            wallRepair: "Ja. Wij repareren scheuren, gaten en beschadigde muren voordat we schilderen.",
            location: "Wij zijn gevestigd in Amsterdam en bieden diensten in omliggende gebieden.",
            travel: "Ja 😊 Wij reizen naar woningen, appartementen, kantoren en commerciële panden.",
            seeWork: "Ja ✅ Bezoek onze galerij, Instagram, TikTok en Facebook-pagina's om voltooide projecten te zien.",
            reviews: "Ja ⭐ Klanten kunnen reviews achterlaten op Facebook, Instagram en Google.",
            urgent: "Ja. Afhankelijk van beschikbaarheid kunnen wij dringende schilderdiensten bieden.",
            nightWork: "Voor commerciële projecten en kantoren kunnen wij avond- of nachtwerk aanbieden.",
            payment: "Wij accepteren contant geld, bankoverschrijving en online betalingen.",
            upfront: "Voor grote projecten kan een aanbetaling vereist zijn voordat het werk begint.",
            thanks: "U bent zeer welkom 😊 Wij kijken ernaar uit met u samen te werken.",
            bye: "Bedankt voor uw bezoek aan Jone`s Paint & Decorators. Fijne dag 👋",
            // Residential Projects
            surfacesIncluded: "De offerte omvat alle slaapkamermuren, plinten en kozijnen. Plafonds en deuren zijn uitgesloten zoals gevraagd 🏠",
            moveFurniture: "Verwijder broze items, elektronica en kleine decoraties. Ons team verplaatst en beschermt zware meubels met beschermende plastics 🪑",
            fixCracks: "We schrapen losse puin, brengen premium vuller aan, laten het drogen en schuren het volledig glad voordat we verf aanbrengen 🔧",
            kitchenBathroomFinish: "We gebruiken een satijn of halfglanzende afwerking. Deze afwerkingen bestaan tegen vocht, voorkomen schimmel en zijn gemakkelijk schoon te maken 🚿",
            paintOverDark: "Ja. We brengen eerst een dekkende primer aan om de donkere kleur te blokkeren, gevolgd door twee lagen van uw nieuwe lichte verf 🎨",
            paintSmell: "We gebruiken low-VOC (milieuvriendelijke) verf. Eventuele lichte verfgeur verdwijnt meestal binnen 24 tot 48 uur met goede ventilatie 🌬️",
            removeWallpaper: "Ja. We stomen of brengen een verwijderingsoplossing aan om het behang te verwijderen, reinigen de lijmresten en bereiden het gipsplaat voor 📄",
            paintOnFloor: "We voorkomen dit door alle vloeren te bedekken met zware doeken en de randen af te plakken. Als er een ongeluk gebeurt, repareren we het volledig 🛡️",
            winterExterior: "Nee. Buitenschilderen vereist droge omstandigheden en temperaturen consistent boven 5°C tot 10°C zodat de verf correct hecht ❄️",
            hangPictures: "Verf voelt snel droog aan, maar het duurt ongeveer 5 tot 7 dagen om volledig uit te harden. Wacht alstublieft een week voordat u zware items ophangt 🖼️",
            // Commercial Projects
            overnightPainting: "Ja. We bieden avond-, nacht- en weekenddiensten om ervoor te zorgen dat uw dagelijkse bedrijfsactiviteiten nul verstoring ondervinden 🌙",
            highTrafficPaint: "We gebruiken krasbestendige, commerciële acrylverf. Het bestand tegen zwaar voetverkeer, stoten van stoelen en frequent schoonmaken 🏢",
            matchCorporateColors: "Ja. Als u uw digitale kleurencodes (RAL, Pantone of NCS) verstrekt, kunnen we de verf nauwkeurig mengen om perfect overeen te komen met uw branding 🎯",
            insuredCommercial: "Ja. Wij dragen volledige openbare en werkgeversaansprakelijkheidsverzekering tot €5.000.000 voor alle commerciële eigendomsrisico's 📋",
            protectElectronics: "We sluiten alle elektronische apparatuur en serverracks volledig af met antistatische plastic folie en gespecialiseerde tape voordat het werk begint 💻",
            highHeights: "Ja. Ons team is volledig getraind en gecertificeerd om kooiapen, schaarlifts en professionele steigersystemen te gebruiken 🏗️",
            missedDeadline: "We tekenen een strikt contracttijdlijn. We zetten extra mankracht en langere diensten in om ervoor te zorgen dat we uw harde deadline halen 📅",
            lineMarking: "Ja. We bieden gespecialiseerde zware epoxy lijnmarkering voor magazijnvloeren, veiligheidszones en buitenparkeerplaatsen 🅿️",
            fireRetardant: "Ja. We brengen gecertificeerde intumescente (brandwerende) verfcoatings aan die voldoen aan lokale commerciële bouwveiligheidsvoorschriften 🔥",
            wasteDisposal: "We volgen strikte milieurichtlijnen. Alle giftig afval, lege blikken en chemicaliën worden afgevoerd via een gelicentieerd commercieel recyclingbedrijf ♻️",
            // Estimates & Contracts
            freeConsultation: "Ja. We bezoeken uw eigendom, meten de locatie, bespreken uw doelen en verstrekken een gedetailleerde schriftelijke schatting gratis van kosten 💼",
            quoteValid: "Onze offertes zijn 30 dagen geldig vanaf de uitgiftedatum vanwege occasionele fluctuaties in materiaal- en verfleverancierskosten 📆",
            hourlyOrFlat: "We rekenen een vast projecttarief. Dit zorgt ervoor dat u de exacte eindkosten vooraf kent zonder verrassende uurtoevoegingen 💰",
            depositSchedule: "We vereisen een 20% aanbetaling om uw boekingsdatum te beveiligen. De resterende 80% saldo is betaalbaar alleen bij succesvolle projectvoltooiing 💳",
            rottingMold: "We stoppen onmiddellijk werk in dat gebied, tonen u de schade, en verstrekken een duidelijke, afzonderlijke schriftelijke prijs om het te repareren voordat we schilderen 🍄",
            warranty: "Ja. We bieden een 2-jarige garantie voor bladderen, afschilferen of bobbels veroorzaakt door foutieve toepassing of slechte voorbereiding ✅",
            whoSuppliesPaint: "Wij leveren de verf omdat we professionele handelskortingen krijgen op premium merken. Als u echter al verf heeft gekocht, kunnen we de offerte aanpassen voor alleen arbeid 🪣",
            teamSize: "Voor standaard residentiële klussen sturen we een team van 1 tot 2 schilders. Voor grote commerciële klussen sturen we 4 tot 8 schilders om het proces te versnellen 👥",
            changeColor: "We kunnen de kleur veranderen, maar dit resulteert in een extra kosten. U moet de kosten van de nieuwe verf en de arbeid voor eventuele herschildering dekken 🔄",
            certifications: "We zijn volledig geregistreerde professionals, en onze schilders houden geaccrediteerde handelscertificaten in schilderen, decoreren en locatieveiligheidsbeheer 🎓",
            // Meter-based pricing questions
            metersToCover: "Gebruik onze prijscalculator bovenaan de pagina! Sleep de schuifregelaar om te zien hoeveel m² u heeft en de geschatte prijs. Bijvoorbeeld: een kleine slaapkamer (~5m² vloer) kost €200-€450, een middelgrote kamer (~12m²) kost €250-€600 📏",
            roomSizeMeters: "Gemiddelde kamerformaten: Slaapkamer (~5m² vloeroppervlak), Woonkamer (~20m²), Keuken (~15m²). Gebruik onze calculator bovenaan voor exacte prijzen op basis van uw m² 🏠",
            pricePerMeter: "Onze prijzen per m²: Wanden €8-€17/m², Plafonds €10-€20/m², Latex spuiten €7-€12/m². Bekijk onze prijscalculator voor projectprijzen 💰",
            howManyMeters: "Vertel ons de afmetingen van uw kamer (lengte × breedte × hoogte) en wij berekenen de exacte m². Of gebruik onze interactieve calculator bovenaan de pagina 📐",
            bedroomMeters: "Een standaard slaapkamer heeft ongeveer 4-6 m² muuroppervlak per wand. Met 4 muren is dat 16-24 m² totaal. Prijs: €200-€450 voor kleine kamers 🛏️",
            livingRoomMeters: "Een woonkamer heeft gemiddeld 20-30 m² muuroppervlak. Prijs: €350-€900 voor grote woonkamers 🛋️",
            kitchenMeters: "Een keuken heeft ongeveer 15-20 m² oppervlak (inclusief plafond). Prijs: €250-€600 🍳",
            bathroomMeters: "Een badkamer heeft 8-12 m² oppervlak. Prijs: €200-€400 🚿",
            wholeHouseMeters: "Volledig huis: 1-slaapkamer appartement ~50-80 m² (€1,500-€2,500), 2-slaapkamer huis ~80-120 m² (€2,200-€3,600), 3-slaapkamer familiehuis ~120-180 m² (€3,500-€5,500) 🏡",
            default: "Bedankt voor uw vraag. Voor meer informatie kunt u ons bellen op +31684258077."
        }
    },
    portuguese: {
        keywords: ["quanto", "custo", "preço", "o que", "como", "quando", "onde", "por que", "pode", "deve", "ajuda", "pergunta", "pintor", "tinta", "decoração", "parede", "teto", "exterior", "interior", "cor", "conselho", "olá", "oi", "ei", "obrigado", "valeu", "bom dia", "orçamento", "grátis", "quarto", "apartamento", "serviço", "escritório", "papel de parede", "fora", "tempo", "reserva", "tinta", "material", "móvel", "limpar", "reparo", "localização", "amsterdã", "viajar", "social", "avaliação", "emergência", "noite", "pagamento", "dinheiro", "adiantado", "tchau", "adeus", "superfície", "citação", "rodapés", "molduras", "portas", "frágil", "eletrônicos", "rachaduras", "buracos", "enchimento", "cozinha", "banheiro", "acetinado", "brilho", "umidade", "bolor", "escuro", "claro", "primer", "cheiro", "voc", "ventilação", "remover papel", "cola", "carpete", "madeira", "chão", "inverno", "temperatura", "fotos", "pintar", "noite", "empresa", "corredor", "tráfego", "cadeira", "limpeza", "corporativo", "cores", "ral", "pantone", "ncs", "seguro", "responsabilidade", "computadores", "servidores", "estático", "altura", "elevador", "andaime", "prazo", "abertura", "contrato", "linhas", "estacionamento", "armazém", "epóxi", "fogo", "aço", "intumescente", "resíduos", "químico", "reciclagem", "consulta", "válido", "hora", "fixo", "depósito", "cronograma", "podre", "mofo", "garantia", "descascando", "bolhas", "preparação", "desconto", "equipe", "mudança", "certificação", "segurança", "metro", "m2", "m²", "quadrado", "área", "tamanho", "dimensão", "deslizador", "calculadora", "calcular", "quarto", "sala", "cozinha", "banheiro", "espaço", "parede", "teto", "projeto", "duração", "dias", "horas", "estimativa", "faixa de preço", "mínimo", "máximo", "de", "para", "quantos", "metros", "cobrir", "metros quadrados", "área", "tamanho do quarto", "área da parede"],
        responses: {
            greeting: "Olá 👋 Bem-vindo à Jone`s Paint & Decorators. Como podemos ajudá-lo hoje?",
            hi: "Oi 😊 Procurando serviços de pintura ou decoração?",
            goodMorning: "Bom dia ☀️ Como a Jone`s Paint & Decorators pode ajudá-lo?",
            pricing: "Os preços dependem do tamanho do quarto, condição da parede, tipo de tinta e localização. Podemos fornecer um orçamento gratuito.",
            freeQuote: "Absolutamente ✅ Envie tamanhos de quarto, fotos ou detalhes do projeto para um orçamento gratuito.",
            perRoom: "Sim. Podemos cobrar por quarto, por apartamento ou projeto completo, dependendo do trabalho necessário.",
            apartmentPrice: "Os preços variam dependendo da condição e acabamento da tinta. Carregue fotos ou solicite uma inspeção para um orçamento exato.",
            services: "Oferecemos pintura interior e exterior, papel de parede, decoração, pintura de escritório, pintura de apartamento e pintura comercial.",
            offices: "Sim ✅ Oferecemos serviços de pintura comercial e de escritório para empresas e edifícios.",
            wallpaper: "Sim 😊 Instalamos papel de parede, paredes de destaque e acabamentos decorativos.",
            exterior: "Sim. Oferecemos pintura exterior para casas, edifícios e propriedades comerciais.",
            duration: "A maioria dos quartos leva 1-2 dias, dependendo da preparação e tempo de secagem.",
            availability: "Estamos disponíveis de segunda a sábado das 8:00 às 18:00.",
            onlineBooking: "Sim ✅ Você pode solicitar uma reserva diretamente do nosso formulário de contato.",
            supplyPaint: "Sim. Podemos fornecer marcas de tinta premium ou trabalhar com tinta fornecida pelos clientes.",
            paintBrands: "Usamos tintas profissionais de alta qualidade para acabamentos duradouros e durabilidade.",
            colorHelp: "Sim 🎨 Oferecemos consulta de cores e conselhos de decoração.",
            furniture: "Sim. Ajudamos a proteger e mover móveis antes de começar o trabalho.",
            cleaning: "Absolutamente ✅ Deixamos todas as áreas limpas e organizadas após a conclusão do projeto.",
            wallRepair: "Sim. Reparamos rachaduras, buracos e paredes danificadas antes de pintar.",
            location: "Estamos baseados em Amsterdã e fornecemos serviços em áreas circundantes.",
            travel: "Sim 😊 Viajamos para casas, apartamentos, escritórios e propriedades comerciais.",
            seeWork: "Sim ✅ Visite nossa galeria, Instagram, TikTok e páginas do Facebook para ver projetos concluídos.",
            reviews: "Sim ⭐ Os clientes podem deixar avaliações no Facebook, Instagram e Google.",
            urgent: "Sim. Dependendo da disponibilidade, podemos oferecer serviços de pintura urgentes.",
            nightWork: "Para projetos comerciais e escritórios, podemos oferecer trabalho noturno ou à noite.",
            payment: "Aceitamos dinheiro, transferência bancária e pagamentos online.",
            upfront: "Para projetos grandes, pode ser exigido um depósito antes do início do trabalho.",
            thanks: "Muito obrigado 😊 Aguardamos trabalhar com você.",
            bye: "Obrigado por visitar a Jone`s Paint & Decorators. Tenha um ótimo dia 👋",
            // Residential Projects
            surfacesIncluded: "A citação inclui todas as paredes de quartos, rodapés e molduras. Tetos e portas são excluídos conforme solicitado 🏠",
            moveFurniture: "Remova itens frágeis, eletrônicos e pequenas decorações. Nossa equipe move e protege móveis pesados com plásticos protetores 🪑",
            fixCracks: "Raspamos os detritos soltos, aplicamos enchimento premium, deixamos secar e lixamos completamente antes de aplicar qualquer tinta 🔧",
            kitchenBathroomFinish: "Usamos acabamento acetinado ou semi-brilhante. Esses acabamentos resistem à umidade, evitam mofo e são fáceis de limpar 🚿",
            paintOverDark: "Sim. Aplicamos primeiro uma camada de primer de alta cobertura para bloquear a cor escura, seguida por duas camadas de sua nova tinta clara 🎨",
            paintSmell: "Usamos tintas low-VOC (ecológicas). Qualquer cheiro leve de tinta geralmente desaparece em 24 a 48 horas com ventilação adequada 🌬️",
            removeWallpaper: "Sim. Vaporizamos ou aplicamos uma solução de remoção para retirar o papel de parede, limpamos o resíduo de cola e preparamos o drywall 📄",
            paintOnFloor: "Evitamos isso cobrindo todos os pisos com lençóis pesados e fitando as bordas. Se um acidente acontecer, limpamos ou reparamos completamente 🛡️",
            winterExterior: "Não. Pintura exterior requer condições secas e temperaturas consistentemente acima de 5°C a 10°C para a tinta aderir corretamente ❄️",
            hangPictures: "A tinta parece seca rapidamente, mas leva cerca de 5 a 7 dias para curar e endurecer completamente. Aguarde uma semana antes de pendurar itens pesados 🖼️",
            // Commercial Projects
            overnightPainting: "Sim. Oferecemos turnos noturnos, de fim de semana e à noite para garantir que suas operações diárias de negócios sofram zero interrupção 🌙",
            highTrafficPaint: "Usamos tinta acrílica comercial resistente a arranhões. Resiste a tráfego pesado de pedestres, batidas de cadeiras e limpeza frequente 🏢",
            matchCorporateColors: "Sim. Se você fornecer seus códigos de cores digitais (RAL, Pantone ou NCS), podemos misturar a tinta com precisão para combinar perfeitamente com sua marca 🎯",
            insuredCommercial: "Sim. Carregamos seguro de responsabilidade pública e de empregadores completo até €5.000.000 para cobrir todos os riscos de propriedade comercial 📋",
            protectElectronics: "Selamos completamente todos os equipamentos eletrônicos e racks de servidores usando folha de plástico antiestática e fita especializada antes do início do trabalho 💻",
            highHeights: "Sim. Nossa equipe é totalmente treinada e certificada para usar plataformas elevatórias, tesouras elevadoras e sistemas de andaime profissionais 🏗️",
            missedDeadline: "Assinamos um cronograma de contrato estrito. Comprometemos mão de obra extra e turnos mais longos para garantir que cumpramos seu prazo rígido 📅",
            lineMarking: "Sim. Oferecemos faixas de epóxi pesado especializadas para pisos de armazéns, zonas de segurança e estacionamentos externos 🅿️",
            fireRetardant: "Sim. Aplicamos revestimentos de tinta intumescentes (resistentes ao fogo) certificados que atendem aos regulamentos de segurança de edifícios comerciais locais 🔥",
            wasteDisposal: "Seguimos diretrizes ambientais estritas. Todos os resíduos tóxicos, latas vazias e químicos são descartados através de uma instalação de reciclagem comercial licenciada ♻️",
            // Estimates & Contracts
            freeConsultation: "Sim. Visitamos sua propriedade, medimos o local, discutimos seus objetivos e fornecemos uma estimativa escrita detalhada gratuitamente 💼",
            quoteValid: "Nossas cotações são válidas por 30 dias a partir da data de emissão devido a flutuações ocasionais nos custos de materiais e fornecedores de tinta 📆",
            hourlyOrFlat: "Cobramos uma taxa fixa baseada em projeto. Isso garante que você conheça o custo final exato antecipadamente sem adições surpresa por hora 💰",
            depositSchedule: "Exigimos um depósito de 20% para garantir sua data de reserva. O saldo restante de 80% é pagável apenas upon conclusão bem-sucedida do projeto 💳",
            rottingMold: "Paramos o trabalho imediatamente nessa área, mostramos a você o dano e fornecemos um preço escrito claro e separado para consertar antes de pintar 🍄",
            warranty: "Sim. Oferecemos uma garantia de 2 anos cobrindo descamação, descascamento ou bolhas causadas por aplicação defeituosa ou preparação ruim ✅",
            whoSuppliesPaint: "Fornecemos a tinta porque obtemos descontos comerciais profissionais em marcas premium. No entanto, se você já comprou a tinta, podemos ajustar a cotação para cobrir apenas mão de obra 🪣",
            teamSize: "Para trabalhos residenciais padrão, enviamos uma equipe de 1 a 2 pintores. Para trabalhos comerciais grandes, enviamos 4 a 8 pintores para acelerar o processo 👥",
            changeColor: "Podemos mudar a cor, mas isso resultará em uma cobrança extra. Você precisará cobrir o custo da nova tinta e a mão de obra para qualquer repintura 🔄",
            certifications: "Somos profissionais totalmente registrados, e nossos pintores possuem certificações comerciais credenciadas em pintura, decoração e gerenciamento de segurança no local 🎓",
            // Meter-based pricing questions
            metersToCover: "Use nossa calculadora de preços no topo da página! Arraste o controle para ver quantos m² você tem e o preço estimado. Por exemplo: um pequeno quarto (~5m² de piso) custa €200-€450, um quarto médio (~12m²) custa €250-€600 📏",
            roomSizeMeters: "Tamanhos médios de quarto: Quarto (~5m² de área do piso), Sala de estar (~20m²), Cozinha (~15m²). Use nossa calculadora no topo para preços exatos baseados no seu m² 🏠",
            pricePerMeter: "Nossos preços por m²: Paredes €8-€17/m², Tetos €10-€20/m², Spray de látex €7-€12/m². Veja nossa calculadora de preços para preços de projeto 💰",
            howManyMeters: "Diga-nos as dimensões do seu quarto (comprimento × largura × altura) e calcularemos o m² exato. Ou use nossa calculadora interativa no topo da página 📐",
            bedroomMeters: "Um quarto padrão tem cerca de 4-6 m² de área de parede por parede. Com 4 paredes, são 16-24 m² no total. Preço: €200-€450 para quartos pequenos 🛏️",
            livingRoomMeters: "Uma sala de estar tem em média 20-30 m² de área de parede. Preço: €350-€900 para salas grandes 🛋️",
            kitchenMeters: "Uma cozinha tem cerca de 15-20 m² de área (incluindo teto). Preço: €250-€600 🍳",
            bathroomMeters: "Um banheiro tem 8-12 m² de área. Preço: €200-€400 🚿",
            wholeHouseMeters: "Casa completa: Apartamento 1 quarto ~50-80 m² (€1,500-€2,500), Casa 2 quartos ~80-120 m² (€2,200-€3,600), Casa familiar 3 quartos ~120-180 m² (€3,500-€5,500) 🏡",
            default: "Obrigado pela sua pergunta. Para mais informações, ligue para +31684258077."
        }
    },
    english: {
        keywords: ["how much", "cost", "price", "what", "how", "when", "where", "why", "can", "should", "help", "question", "painter", "paint", "decoration", "wall", "ceiling", "exterior", "interior", "color", "advice", "hello", "hi", "hey", "thanks", "thank you", "good morning", "quote", "free", "room", "apartment", "service", "office", "wallpaper", "outside", "time", "booking", "supply", "material", "furniture", "clean", "repair", "location", "amsterdam", "travel", "social", "review", "urgent", "night", "payment", "cash", "upfront", "bye", "goodbye", "surface", "baseboards", "window", "frames", "doors", "fragile", "electronics", "cracks", "holes", "filler", "kitchen", "bathroom", "satin", "semi-gloss", "moisture", "mold", "dark", "light", "primer", "smell", "voc", "ventilation", "strip", "glue", "carpet", "hardwood", "floor", "drop", "cloth", "winter", "temperature", "pictures", "hang", "overnight", "business", "hallway", "traffic", "scuff", "corporate", "branding", "ral", "pantone", "ncs", "insured", "liability", "computers", "servers", "anti-static", "heights", "cherry", "picker", "scissor", "lift", "scaffolding", "deadline", "opening", "contract", "line", "marking", "car", "park", "warehouse", "epoxy", "fire", "retardant", "steel", "intumescent", "waste", "disposal", "chemical", "recycling", "consultation", "valid", "hourly", "flat", "rate", "deposit", "schedule", "rotting", "wood", "mold", "warranty", "peeling", "flaking", "bubbling", "trade", "discount", "team", "change", "mind", "certification", "membership", "meter", "m2", "m²", "square", "area", "size", "dimension", "slider", "calculator", "calculate", "bedroom", "living room", "kitchen", "bathroom", "space", "wall", "ceiling", "project", "duration", "days", "hours", "estimate", "price range", "min", "max", "from", "to", "how many", "meters", "cover", "square meters", "area", "room size", "wall area"],
        responses: {
            greeting: "Hello 👋 Welcome to Jone`s Paint & Decorators. How can we help you today?",
            hi: "Hi 😊 Looking for painting or decorating services today?",
            goodMorning: "Good morning ☀️ How can Jone`s Paint & Decorators help you?",
            pricing: "Prices depend on room size, wall condition, paint type and location. We can provide a free quote.",
            freeQuote: "Absolutely ✅ Please send room sizes, photos or project details for a free quotation.",
            perRoom: "Yes. We can charge per room, per apartment or full project depending on the work required.",
            apartmentPrice: "Prices vary depending on condition and paint finish. Please upload photos or request an inspection for an exact quote.",
            services: "We provide interior painting, exterior painting, wallpapering, decorating, office painting, apartment painting and commercial painting.",
            offices: "Yes ✅ We provide commercial and office painting services for businesses and buildings.",
            wallpaper: "Yes 😊 We install wallpaper, feature walls and decorative finishes.",
            exterior: "Yes. We provide exterior painting for homes, buildings and commercial properties.",
            duration: "Most rooms take 1–2 days depending on preparation and drying time.",
            availability: "We are available Monday to Saturday from 8AM to 6PM.",
            onlineBooking: "Yes ✅ You can request a booking directly from our website contact form.",
            supplyPaint: "Yes. We can supply premium paint brands or work with paint provided by customers.",
            paintBrands: "We use high-quality professional paints for long-lasting finishes and durability.",
            colorHelp: "Yes 🎨 We provide color consultation and decorating advice.",
            furniture: "Yes. We help protect and move furniture before starting work.",
            cleaning: "Absolutely ✅ We leave all areas clean and tidy after the project is completed.",
            wallRepair: "Yes. We repair cracks, holes and damaged walls before painting.",
            location: "We are based in Amsterdam and provide services across surrounding areas.",
            travel: "Yes 😊 We travel to homes, apartments, offices and commercial properties.",
            seeWork: "Yes ✅ Visit our gallery, Instagram, TikTok and Facebook pages to see completed projects.",
            reviews: "Yes ⭐ Customers can leave reviews on Facebook, Instagram and Google.",
            urgent: "Yes. Depending on availability we can provide urgent painting services.",
            nightWork: "For commercial projects and offices we may offer evening or night work.",
            payment: "We accept cash, bank transfer and online payments.",
            upfront: "For large projects a deposit may be required before work begins.",
            thanks: "You are very welcome 😊 We look forward to working with you.",
            bye: "Thank you for visiting Jone`s Paint & Decorators. Have a great day 👋",
            // Residential Projects
            surfacesIncluded: "The quote covers all bedroom walls, baseboards, and window frames. Ceilings and doors are excluded as requested 🏠",
            moveFurniture: "Please remove fragile items, electronics, and small decorations. Our team will move and cover the heavy furniture with protective plastics 🪑",
            fixCracks: "We scrape out loose debris, apply premium filler, let it dry, and sand it completely smooth before applying any paint 🔧",
            kitchenBathroomFinish: "We use a satin or semi-gloss finish. These finishes resist moisture, prevent mold, and are easy to wipe clean 🚿",
            paintOverDark: "Yes. We apply a high-hiding primer coat first to block out the dark color, followed by two coats of your new light paint 🎨",
            paintSmell: "We use low-VOC (eco-friendly) paints. Any minor paint smell typically disappears within 24 to 48 hours with proper ventilation 🌬️",
            removeWallpaper: "Yes. We steam or apply a removal solution to strip the wallpaper, clean off the glue residue, and prep the drywall 📄",
            paintOnFloor: "We prevent this by covering all flooring with heavy-duty drop cloths and taping down the edges. If an accident happens, we clean or repair it completely 🛡️",
            winterExterior: "No. Exterior painting requires dry conditions and temperatures consistently above 5°C to 10°C for the paint to bond correctly ❄️",
            hangPictures: "Paint feels dry to the touch quickly, but it takes about 5 to 7 days to fully cure and harden. Please wait a week before hanging heavy items 🖼️",
            // Commercial Projects
            overnightPainting: "Yes. We offer evening, night, and weekend shifts to ensure your daily business operations suffer zero disruption 🌙",
            highTrafficPaint: "We use scuff-resistant, commercial-grade acrylic paint. It stands up to heavy foot traffic, bumps from chairs, and frequent cleaning 🏢",
            matchCorporateColors: "Yes. If you provide your digital color codes (RAL, Pantone, or NCS), we can precision-mix the paint to match your branding perfectly 🎯",
            insuredCommercial: "Yes. We carry full public and employers' liability insurance up to €5,000,000 to cover all commercial property risks 📋",
            protectElectronics: "We completely seal off all electronic equipment and server racks using anti-static plastic sheeting and specialized tape before work begins 💻",
            highHeights: "Yes. Our team is fully trained and certified to use cherry pickers, scissor lifts, and professional scaffolding system equipment 🏗️",
            missedDeadline: "We sign a strict contract timeline. We commit extra manpower and longer shifts to ensure we hit your hard deadline 📅",
            lineMarking: "Yes. We offer specialized heavy-duty epoxy line striping for warehouse floors, safety zones, and outdoor parking lots 🅿️",
            fireRetardant: "Yes. We apply certified intumescent (fire-resistant) paint coatings that meet local commercial building safety regulations 🔥",
            wasteDisposal: "We follow strict environmental guidelines. All toxic waste, empty tins, and chemicals are disposed of through a licensed commercial recycling facility ♻️",
            // Estimates & Contracts
            freeConsultation: "Yes. We visit your property, measure the site, discuss your goals, and provide a detailed written estimate free of charge 💼",
            quoteValid: "Our quotes are valid for 30 days from the issue date due to occasional fluctuations in material and paint supplier costs 📆",
            hourlyOrFlat: "We charge a flat, project-based rate. This ensures you know the exact final cost upfront with no surprise hourly additions 💰",
            depositSchedule: "We require a 20% deposit to secure your booking date. The remaining 80% balance is payable only upon successful project completion 💳",
            rottingMold: "We stop work in that area immediately, show you the damage, and provide a clear, separate written price to fix it before painting 🍄",
            warranty: "Yes. We offer a 2-year warranty covering peeling, flaking, or bubbling caused by faulty application or poor prep work ✅",
            whoSuppliesPaint: "We supply the paint because we get professional trade discounts on premium brands. However, if you already bought the paint, we can adjust the quote to cover labor only 🪣",
            teamSize: "For standard residential jobs, we send a team of 1 to 2 painters. For large commercial jobs, we send 4 to 8 painters to speed up the process 👥",
            changeColor: "We can change the color, but it will result in an extra charge. You will need to cover the cost of the new paint and the labor for any re-painting 🔄",
            certifications: "We are fully registered professionals, and our painters hold accredited trade certifications in painting, decorating, and site safety management 🎓",
            // Meter-based pricing questions
            metersToCover: "Use our price calculator at the top of the page! Drag the slider to see how many m² you have and the estimated price. For example: a small bedroom (~5m² floor) costs €200-€450, a medium room (~12m²) costs €250-€600 📏",
            roomSizeMeters: "Average room sizes: Bedroom (~5m² floor area), Living room (~20m²), Kitchen (~15m²). Use our calculator at the top for exact prices based on your m² 🏠",
            pricePerMeter: "Our prices per m²: Walls €8-€17/m², Ceilings €10-€20/m², Latex spraying €7-€12/m². Check our price calculator for project prices 💰",
            howManyMeters: "Tell us your room dimensions (length × width × height) and we'll calculate the exact m². Or use our interactive calculator at the top of the page 📐",
            bedroomMeters: "A standard bedroom has about 4-6 m² of wall area per wall. With 4 walls, that's 16-24 m² total. Price: €200-€450 for small bedrooms 🛏️",
            livingRoomMeters: "A living room has on average 20-30 m² of wall area. Price: €350-€900 for large living rooms 🛋️",
            kitchenMeters: "A kitchen has about 15-20 m² of area (including ceiling). Price: €250-€600 🍳",
            bathroomMeters: "A bathroom has 8-12 m² of area. Price: €200-€400 🚿",
            wholeHouseMeters: "Full house: 1-bedroom apartment ~50-80 m² (€1,500-€2,500), 2-bedroom house ~80-120 m² (€2,200-€3,600), 3-bedroom family home ~120-180 m² (€3,500-€5,500) 🏡",
            default: "Thank you for your message. One of our decorators will contact you shortly. For immediate assistance, call +31684258077."
        }
    }
};

// Detect language based on keywords
function detectLanguage(text) {
    const lowerText = text.toLowerCase();
    
    // Check for Dutch keywords
    const dutchMatches = chatbotKnowledge.dutch.keywords.filter(keyword => 
        lowerText.includes(keyword)
    );
    if (dutchMatches.length > 0) return 'dutch';
    
    // Check for Portuguese keywords
    const portugueseMatches = chatbotKnowledge.portuguese.keywords.filter(keyword => 
        lowerText.includes(keyword)
    );
    if (portugueseMatches.length > 0) return 'portuguese';
    
    // Default to English
    return 'english';
}

// Get chatbot response based on language and question
function getChatbotResponse(question) {
    const language = detectLanguage(question);
    const knowledge = chatbotKnowledge[language];
    const lowerQuestion = question.toLowerCase();
    
    // Greetings
    if (lowerQuestion.includes("hello") || lowerQuestion.includes("hallo") || lowerQuestion.includes("olá")) {
        return knowledge.responses.greeting;
    }
    
    if (lowerQuestion === "hi" || lowerQuestion === "hey" || lowerQuestion === "oi" || lowerQuestion === "ei") {
        return knowledge.responses.hi;
    }
    
    if (lowerQuestion.includes("good morning") || lowerQuestion.includes("goedemorgen") || lowerQuestion.includes("bom dia")) {
        return knowledge.responses.goodMorning;
    }
    
    // Pricing questions
    if (lowerQuestion.includes("how much") || lowerQuestion.includes("cost") || lowerQuestion.includes("price") ||
        lowerQuestion.includes("hoeveel") || lowerQuestion.includes("kosten") || lowerQuestion.includes("prijs") ||
        lowerQuestion.includes("quanto") || lowerQuestion.includes("custo") || lowerQuestion.includes("preço")) {
        return knowledge.responses.pricing;
    }
    
    if (lowerQuestion.includes("free quote") || lowerQuestion.includes("gratis") || lowerQuestion.includes("grátis")) {
        return knowledge.responses.freeQuote;
    }
    
    if (lowerQuestion.includes("per room") || lowerQuestion.includes("charge per")) {
        return knowledge.responses.perRoom;
    }
    
    if (lowerQuestion.includes("apartment") && (lowerQuestion.includes("price") || lowerQuestion.includes("cost") || lowerQuestion.includes("much") || lowerQuestion.includes("quanto"))) {
        return knowledge.responses.apartmentPrice;
    }
    
    // Services
    if (lowerQuestion.includes("what service") || lowerQuestion.includes("what do you provide") || lowerQuestion.includes("what do you do")) {
        return knowledge.responses.services;
    }
    
    if (lowerQuestion.includes("office") || lowerQuestion.includes("kantoor") || lowerQuestion.includes("escritório")) {
        return knowledge.responses.offices;
    }
    
    if (lowerQuestion.includes("wallpaper") || lowerQuestion.includes("behang") || lowerQuestion.includes("papel de parede")) {
        return knowledge.responses.wallpaper;
    }
    
    if (lowerQuestion.includes("outside") || lowerQuestion.includes("exterior") || lowerQuestion.includes("buiten")) {
        return knowledge.responses.exterior;
    }
    
    // Time & Bookings
    if (lowerQuestion.includes("how long") || lowerQuestion.includes("duration") || lowerQuestion.includes("take")) {
        return knowledge.responses.duration;
    }
    
    if (lowerQuestion.includes("available") || lowerQuestion.includes("when are you") || lowerQuestion.includes("availability")) {
        return knowledge.responses.availability;
    }
    
    if (lowerQuestion.includes("book online") || lowerQuestion.includes("online booking") || lowerQuestion.includes("boeken")) {
        return knowledge.responses.onlineBooking;
    }
    
    // Paint & Materials
    if (lowerQuestion.includes("supply paint") || lowerQuestion.includes("provide paint") || lowerQuestion.includes("verf leveren")) {
        return knowledge.responses.supplyPaint;
    }
    
    if (lowerQuestion.includes("paint brand") || lowerQuestion.includes("which paint") || lowerQuestion.includes("verfmerk")) {
        return knowledge.responses.paintBrands;
    }
    
    if (lowerQuestion.includes("choose color") || lowerQuestion.includes("color help") || lowerQuestion.includes("kleur")) {
        return knowledge.responses.colorHelp;
    }
    
    // Cleaning & Preparation
    if (lowerQuestion.includes("furniture") || lowerQuestion.includes("move furniture") || lowerQuestion.includes("meubel")) {
        return knowledge.responses.furniture;
    }
    
    if (lowerQuestion.includes("clean") || lowerQuestion.includes("tidy") || lowerQuestion.includes("schoon")) {
        return knowledge.responses.cleaning;
    }
    
    if (lowerQuestion.includes("repair wall") || lowerQuestion.includes("crack") || lowerQuestion.includes("hole") || lowerQuestion.includes("reparatie")) {
        return knowledge.responses.wallRepair;
    }
    
    // Location
    if (lowerQuestion.includes("where are you") || lowerQuestion.includes("located") || lowerQuestion.includes("location") || lowerQuestion.includes("waar")) {
        return knowledge.responses.location;
    }
    
    if (lowerQuestion.includes("travel") || lowerQuestion.includes("do you travel") || lowerQuestion.includes("reizen")) {
        return knowledge.responses.travel;
    }
    
    // Social Media & Reviews
    if (lowerQuestion.includes("see your work") || lowerQuestion.includes("gallery") || lowerQuestion.includes("instagram") || lowerQuestion.includes("tiktok")) {
        return knowledge.responses.seeWork;
    }
    
    if (lowerQuestion.includes("review") || lowerQuestion.includes("reviews") || lowerQuestion.includes("avaliação")) {
        return knowledge.responses.reviews;
    }
    
    // Emergency & Special Requests
    if (lowerQuestion.includes("urgent") || lowerQuestion.includes("emergency") || lowerQuestion.includes("nood")) {
        return knowledge.responses.urgent;
    }
    
    if (lowerQuestion.includes("night") || lowerQuestion.includes("evening") || lowerQuestion.includes("avond")) {
        return knowledge.responses.nightWork;
    }
    
    // Payment
    if (lowerQuestion.includes("payment") || lowerQuestion.includes("pay") || lowerQuestion.includes("method") || lowerQuestion.includes("betaling")) {
        return knowledge.responses.payment;
    }
    
    if (lowerQuestion.includes("upfront") || lowerQuestion.includes("deposit") || lowerQuestion.includes("vooruit")) {
        return knowledge.responses.upfront;
    }
    
    // Residential Projects
    if (lowerQuestion.includes("surface") || lowerQuestion.includes("included") || lowerQuestion.includes("quote covers") || lowerQuestion.includes("baseboard") || lowerQuestion.includes("window frame")) {
        return knowledge.responses.surfacesIncluded;
    }
    
    if (lowerQuestion.includes("move") && lowerQuestion.includes("furniture")) {
        return knowledge.responses.moveFurniture;
    }
    
    if (lowerQuestion.includes("crack") || lowerQuestion.includes("hole") || lowerQuestion.includes("fix")) {
        return knowledge.responses.fixCracks;
    }
    
    if (lowerQuestion.includes("kitchen") || lowerQuestion.includes("bathroom") || lowerQuestion.includes("finish")) {
        return knowledge.responses.kitchenBathroomFinish;
    }
    
    if (lowerQuestion.includes("dark") && lowerQuestion.includes("light")) {
        return knowledge.responses.paintOverDark;
    }
    
    if (lowerQuestion.includes("smell") || lowerQuestion.includes("odor") || lowerQuestion.includes("voc")) {
        return knowledge.responses.paintSmell;
    }
    
    if (lowerQuestion.includes("remove") && lowerQuestion.includes("wallpaper")) {
        return knowledge.responses.removeWallpaper;
    }
    
    if (lowerQuestion.includes("floor") || lowerQuestion.includes("carpet") || lowerQuestion.includes("hardwood")) {
        return knowledge.responses.paintOnFloor;
    }
    
    if (lowerQuestion.includes("winter") || lowerQuestion.includes("cold") || lowerQuestion.includes("temperature")) {
        return knowledge.responses.winterExterior;
    }
    
    if (lowerQuestion.includes("hang") || lowerQuestion.includes("picture") || lowerQuestion.includes("photo")) {
        return knowledge.responses.hangPictures;
    }
    
    // Commercial Projects
    if (lowerQuestion.includes("overnight") || lowerQuestion.includes("stay open")) {
        return knowledge.responses.overnightPainting;
    }
    
    if (lowerQuestion.includes("traffic") || lowerQuestion.includes("hallway")) {
        return knowledge.responses.highTrafficPaint;
    }
    
    if (lowerQuestion.includes("corporate") || lowerQuestion.includes("brand") || lowerQuestion.includes("ral") || lowerQuestion.includes("pantone") || lowerQuestion.includes("ncs")) {
        return knowledge.responses.matchCorporateColors;
    }
    
    if (lowerQuestion.includes("insured") || lowerQuestion.includes("insurance") || lowerQuestion.includes("liability")) {
        return knowledge.responses.insuredCommercial;
    }
    
    if (lowerQuestion.includes("computer") || lowerQuestion.includes("server") || lowerQuestion.includes("electronic")) {
        return knowledge.responses.protectElectronics;
    }
    
    if (lowerQuestion.includes("height") || lowerQuestion.includes("high") || lowerQuestion.includes("scaffold")) {
        return knowledge.responses.highHeights;
    }
    
    if (lowerQuestion.includes("deadline") || lowerQuestion.includes("opening") || lowerQuestion.includes("grand opening")) {
        return knowledge.responses.missedDeadline;
    }
    
    if (lowerQuestion.includes("line") || lowerQuestion.includes("marking") || lowerQuestion.includes("parking")) {
        return knowledge.responses.lineMarking;
    }
    
    if (lowerQuestion.includes("fire") || lowerQuestion.includes("retardant") || lowerQuestion.includes("steel")) {
        return knowledge.responses.fireRetardant;
    }
    
    if (lowerQuestion.includes("waste") || lowerQuestion.includes("disposal") || lowerQuestion.includes("chemical")) {
        return knowledge.responses.wasteDisposal;
    }
    
    // Estimates & Contracts
    if (lowerQuestion.includes("consultation") || lowerQuestion.includes("visit")) {
        return knowledge.responses.freeConsultation;
    }
    
    if (lowerQuestion.includes("valid") || lowerQuestion.includes("how long")) {
        return knowledge.responses.quoteValid;
    }
    
    if (lowerQuestion.includes("hourly") || lowerQuestion.includes("flat rate") || lowerQuestion.includes("charge")) {
        return knowledge.responses.hourlyOrFlat;
    }
    
    if (lowerQuestion.includes("deposit") || lowerQuestion.includes("schedule")) {
        return knowledge.responses.depositSchedule;
    }
    
    if (lowerQuestion.includes("rotting") || lowerQuestion.includes("mold") || lowerQuestion.includes("damage")) {
        return knowledge.responses.rottingMold;
    }
    
    if (lowerQuestion.includes("warranty") || lowerQuestion.includes("guarantee")) {
        return knowledge.responses.warranty;
    }
    
    if (lowerQuestion.includes("who supplies") || lowerQuestion.includes("who provide") || lowerQuestion.includes("paint supplies")) {
        return knowledge.responses.whoSuppliesPaint;
    }
    
    if (lowerQuestion.includes("team") || lowerQuestion.includes("how many") || lowerQuestion.includes("painters")) {
        return knowledge.responses.teamSize;
    }
    
    if (lowerQuestion.includes("change") && lowerQuestion.includes("color")) {
        return knowledge.responses.changeColor;
    }
    
    if (lowerQuestion.includes("certification") || lowerQuestion.includes("membership") || lowerQuestion.includes("qualified")) {
        return knowledge.responses.certifications;
    }
    
    // Ending Chat
    if (lowerQuestion.includes("thank") || lowerQuestion.includes("dank") || lowerQuestion.includes("obrigado")) {
        return knowledge.responses.thanks;
    }
    
    if (lowerQuestion === "bye" || lowerQuestion === "goodbye" || lowerQuestion === "tchau" || lowerQuestion === "adeus" || lowerQuestion.includes("tot ziens") || lowerQuestion.includes("doei")) {
        return knowledge.responses.bye;
    }
    
    // Default response
    return knowledge.responses.default;
}

// ===============================
// CHAT MESSAGE FUNCTION
// ===============================
function sendMessage(){
    let input = document.getElementById("chatInput");
    let message = input.value;

    if(message.trim() === ""){
        return;
    }

    let chatBody = document.getElementById("chatBody");

    // USER MESSAGE
    let userDiv = document.createElement("div");
    userDiv.classList.add("user-message");
    userDiv.innerText = message;

    chatBody.appendChild(userDiv);

    // BOT REPLY - Using multi-language AI
    setTimeout(function(){
        let botDiv = document.createElement("div");
        botDiv.classList.add("bot-message");
        botDiv.innerText = getChatbotResponse(message);

        chatBody.appendChild(botDiv);

        chatBody.scrollTop = chatBody.scrollHeight;

    },800);

    input.value = "";
}

// ===============================
// COLOR FAN DECK FUNCTIONALITY
// ===============================
let currentPage = 0;
let totalPages = colorCategories.length;

function createFlipBook() {
    const flipBook = document.getElementById('flipBook');
    if (!flipBook) return;
    
    flipBook.innerHTML = '';
    
    colorCategories.forEach((category, index) => {
        const page = document.createElement('div');
        page.className = `flip-page ${index === 0 ? 'active' : ''}`;
        page.dataset.page = index;
        
        const colorGrid = document.createElement('div');
        colorGrid.className = 'color-grid';
        
        category.colors.forEach(color => {
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch';
            swatch.style.backgroundColor = color.hex;
            swatch.textContent = color.name;
            swatch.title = `${color.name} - ${color.hex}`;
            colorGrid.appendChild(swatch);
        });
        
        const title = document.createElement('h3');
        title.className = 'page-title';
        title.textContent = category.title;
        
        const subtitle = document.createElement('p');
        subtitle.className = 'page-subtitle';
        subtitle.textContent = category.subtitle;
        
        page.appendChild(title);
        page.appendChild(subtitle);
        page.appendChild(colorGrid);
        flipBook.appendChild(page);
    });
    
    updatePageIndicator();
}

function showPage(pageIndex) {
    const pages = document.querySelectorAll('.flip-page');
    pages.forEach((page, index) => {
        if (index === pageIndex) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
    currentPage = pageIndex;
    updatePageIndicator();
    updateButtons();
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        showPage(currentPage + 1);
    }
}

function prevPage() {
    if (currentPage > 0) {
        showPage(currentPage - 1);
    }
}

function updatePageIndicator() {
    const currentPageEl = document.getElementById('currentPage');
    const totalPagesEl = document.getElementById('totalPages');
    if (currentPageEl && totalPagesEl) {
        currentPageEl.textContent = currentPage + 1;
        totalPagesEl.textContent = totalPages;
    }
}

function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.disabled = currentPage === 0;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages - 1;
}

// ===============================
// INITIALIZE EVERYTHING
// ===============================
document.addEventListener("DOMContentLoaded", function(){

    // Initialize chat input - press Enter to send
    let input = document.getElementById("chatInput");
    if (input) {
        input.addEventListener("keypress", function(event){
            if(event.key === "Enter"){
                sendMessage();
            }
        });
    }

    // Initialize color fan deck
    createFlipBook();
    
    // Flip button event listeners
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.addEventListener('click', prevPage);
    if (nextBtn) nextBtn.addEventListener('click', nextPage);
    
    // Keyboard navigation for flip book
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevPage();
        } else if (e.key === 'ArrowRight') {
            nextPage();
        }
    });
    
    // Update buttons initially
    updateButtons();
});
