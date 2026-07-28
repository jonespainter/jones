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
        servicesSubtitle: "We bring color to your world",
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
        gallerySubtitle: "We bring color to your world",
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
        footerContact: "Contact",
        chatGreeting: "Hi 👋 How can we help you today?",
        chatHeaderTitle: "Chat With Us",
        chatInputPlaceholder: "Type message..."
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
        servicesSubtitle: "We brengen kleur in jouw wereld",
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
        gallerySubtitle: "We brengen kleur in jouw wereld",
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
        footerContact: "Contact",
        chatGreeting: "Hoi 👋 Hoe kunnen we u vandaag helpen?",
        chatHeaderTitle: "Chat met ons",
        chatInputPlaceholder: "Typ een bericht..."
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
        servicesSubtitle: "Nous apportons de la couleur dans votre monde",
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
        gallerySubtitle: "Nous apportons de la couleur dans votre monde",
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
        footerContact: "Contact",
        chatGreeting: "Bonjour 👋 Comment pouvons-nous vous aider aujourd'hui ?",
        chatHeaderTitle: "Discutez avec nous",
        chatInputPlaceholder: "Écrivez un message..."
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
        servicesSubtitle: "Wir bringen Farbe in Ihre Welt",
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
        gallerySubtitle: "Wir bringen Farbe in Ihre Welt",
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
        footerContact: "Kontakt",
        chatGreeting: "Hallo 👋 Wie können wir Ihnen heute helfen?",
        chatHeaderTitle: "Chatten Sie mit uns",
        chatInputPlaceholder: "Nachricht eingeben..."
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
        servicesSubtitle: "Traemos color a tu mundo",
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
        gallerySubtitle: "Traemos color a tu mundo",
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
        footerContact: "Contacto",
        chatGreeting: "Hola 👋 ¿Cómo podemos ayudarte hoy?",
        chatHeaderTitle: "Chatea con nosotros",
        chatInputPlaceholder: "Escribe un mensaje..."
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
        servicesSubtitle: "Trazemos cor ao seu mundo",
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
        gallerySubtitle: "Trazemos cor ao seu mundo",
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
        footerContact: "Contacto",
        chatGreeting: "Olá 👋 Como podemos ajudá-lo hoje?",
        chatHeaderTitle: "Fale Conosco",
        chatInputPlaceholder: "Digite uma mensagem..."
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
        servicesSubtitle: "Portiamo colore nel tuo mondo",
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
        gallerySubtitle: "Portiamo colore nel tuo mondo",
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
        footerContact: "Contatto",
        chatGreeting: "Ciao 👋 Come possiamo aiutarti oggi?",
        chatHeaderTitle: "Chatta con noi",
        chatInputPlaceholder: "Scrivi un messaggio..."
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
        servicesSubtitle: "Dünyanıza renk getiriyoruz",
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
        gallerySubtitle: "Dünyanıza renk getiriyoruz",
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
        footerContact: "İletişim",
        chatGreeting: "Merhaba 👋 Bugün size nasıl yardımcı olabiliriz?",
        chatHeaderTitle: "Bizimle Sohbet Edin",
        chatInputPlaceholder: "Mesaj yazın..."
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
        servicesSubtitle: "نحن نحضر اللون إلى عالمك",
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
        gallerySubtitle: "نحن نحضر اللون إلى عالمك",
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
        footerContact: "اتصل بنا",
        chatGreeting: "مرحبًا 👋 كيف يمكننا مساعدتك اليوم؟",
        chatHeaderTitle: "تحدث معنا",
        chatInputPlaceholder: "اكتب رسالة..."
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
        servicesSubtitle: "Мы приносим цвет в ваш мир",
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
        gallerySubtitle: "Мы приносим цвет в ваш мир",
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
        footerContact: "Контакты",
        chatGreeting: "Здравствуйте 👋 Чем мы можем помочь вам сегодня?",
        chatHeaderTitle: "Чат с нами",
        chatInputPlaceholder: "Введите сообщение..."
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
        servicesSubtitle: "Ми приносимо колір у ваш світ",
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
        gallerySubtitle: "Ми приносимо колір у ваш світ",
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
        footerContact: "Контакти",
        chatGreeting: "Вітаємо 👋 Чим ми можемо вам сьогодні допомогти?",
        chatHeaderTitle: "Чат з нами",
        chatInputPlaceholder: "Введіть повідомлення..."
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

    // Update all elements with data-i18n-placeholder attribute (e.g. chat input box)
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
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
// ACCESSIBILITY PANEL (BLIND / LOW VISION / DEAF)
// ===============================
const A11Y_KEY = 'jonesA11yPrefs';

function getA11yPrefs() {
    try {
        return JSON.parse(localStorage.getItem(A11Y_KEY)) || {
            fontStep: 0,
            highContrast: false,
            reduceMotion: false,
            underlineLinks: false,
            readAloud: false
        };
    } catch (e) {
        return { fontStep: 0, highContrast: false, reduceMotion: false, underlineLinks: false, readAloud: false };
    }
}

function saveA11yPrefs(prefs) {
    localStorage.setItem(A11Y_KEY, JSON.stringify(prefs));
}

function toggleAccessibilityPanel() {
    const panel = document.getElementById('accessibilityPanel');
    const btn = document.getElementById('accessibilityToggle');
    if (!panel) return;
    const isHidden = panel.hasAttribute('hidden');
    if (isHidden) {
        panel.removeAttribute('hidden');
        btn.setAttribute('aria-expanded', 'true');
    } else {
        panel.setAttribute('hidden', '');
        btn.setAttribute('aria-expanded', 'false');
    }
}

function changeFontSize(direction) {
    const prefs = getA11yPrefs();
    if (direction === 0) {
        prefs.fontStep = 0;
    } else {
        prefs.fontStep = Math.max(0, Math.min(3, prefs.fontStep + direction));
    }
    applyFontSize(prefs.fontStep);
    saveA11yPrefs(prefs);
}

function applyFontSize(step) {
    document.body.classList.remove('a11y-font-1', 'a11y-font-2', 'a11y-font-3');
    if (step > 0) {
        document.body.classList.add('a11y-font-' + step);
    }
}

function toggleHighContrast() {
    const prefs = getA11yPrefs();
    prefs.highContrast = !prefs.highContrast;
    applyHighContrast(prefs.highContrast);
    saveA11yPrefs(prefs);
}

function applyHighContrast(on) {
    document.body.classList.toggle('a11y-high-contrast', on);
    const el = document.getElementById('contrastSwitch');
    if (el) el.setAttribute('aria-pressed', String(on));
}

function toggleReduceMotion() {
    const prefs = getA11yPrefs();
    prefs.reduceMotion = !prefs.reduceMotion;
    applyReduceMotion(prefs.reduceMotion);
    saveA11yPrefs(prefs);
}

function applyReduceMotion(on) {
    document.body.classList.toggle('a11y-reduce-motion', on);
    const el = document.getElementById('motionSwitch');
    if (el) el.setAttribute('aria-pressed', String(on));
}

function toggleUnderlineLinks() {
    const prefs = getA11yPrefs();
    prefs.underlineLinks = !prefs.underlineLinks;
    applyUnderlineLinks(prefs.underlineLinks);
    saveA11yPrefs(prefs);
}

function applyUnderlineLinks(on) {
    document.body.classList.toggle('a11y-underline-links', on);
    const el = document.getElementById('underlineSwitch');
    if (el) el.setAttribute('aria-pressed', String(on));
}

// Reads aloud whatever text the user hovers over or focuses with Tab/keyboard.
// This helps blind and low-vision visitors "hear" the page without a screen reader installed.
function toggleReadPageAloud() {
    const prefs = getA11yPrefs();
    prefs.readAloud = !prefs.readAloud;
    applyReadPageAloud(prefs.readAloud);
    saveA11yPrefs(prefs);
}

function applyReadPageAloud(on) {
    const el = document.getElementById('ttsSwitch');
    if (el) el.setAttribute('aria-pressed', String(on));
    if (on) {
        document.addEventListener('mouseover', handleHoverReadAloud);
        document.addEventListener('focusin', handleHoverReadAloud);
    } else {
        document.removeEventListener('mouseover', handleHoverReadAloud);
        document.removeEventListener('focusin', handleHoverReadAloud);
        if (window.speechSynthesis) window.speechSynthesis.cancel();
    }
}

let lastReadElement = null;
function handleHoverReadAloud(e) {
    if (!window.speechSynthesis) return;
    const target = e.target.closest('a, button, h1, h2, h3, h4, p, li, label, span');
    if (!target || target === lastReadElement) return;
    const text = target.getAttribute('aria-label') || target.innerText || target.textContent;
    if (!text || !text.trim()) return;
    lastReadElement = target;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text.trim());
    utterance.lang = speechLangFor(currentLanguage);
    window.speechSynthesis.speak(utterance);
}

function speechLangFor(lang) {
    const map = {
        en: 'en-US', nl: 'nl-NL', fr: 'fr-FR', de: 'de-DE', es: 'es-ES',
        pt: 'pt-PT', it: 'it-IT', tr: 'tr-TR', ar: 'ar-SA', ru: 'ru-RU', uk: 'uk-UA'
    };
    return map[lang] || 'en-US';
}

function applyStoredA11yPrefs() {
    const prefs = getA11yPrefs();
    applyFontSize(prefs.fontStep);
    applyHighContrast(prefs.highContrast);
    applyReduceMotion(prefs.reduceMotion);
    applyUnderlineLinks(prefs.underlineLinks);
    applyReadPageAloud(prefs.readAloud);
}

// Close accessibility panel when clicking outside it
document.addEventListener('click', function(event) {
    const panel = document.getElementById('accessibilityPanel');
    const toggleBtn = document.getElementById('accessibilityToggle');
    if (!panel || panel.hasAttribute('hidden')) return;
    if (!panel.contains(event.target) && event.target !== toggleBtn && !toggleBtn.contains(event.target)) {
        panel.setAttribute('hidden', '');
        toggleBtn.setAttribute('aria-expanded', 'false');
    }
});

// ===============================
// VOICE INPUT - MICROPHONE (SPEECH TO TEXT)
// So visitors can speak their question instead of typing it,
// in whichever site language is currently selected.
// ===============================
let recognition = null;
let isListening = false;

function initSpeechRecognition() {
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    const micBtn = document.getElementById('micBtn');
    if (!SpeechRecognitionAPI) {
        // Not supported in this browser - hide the mic control gracefully
        if (micBtn) micBtn.style.display = 'none';
        return;
    }

    recognition = new SpeechRecognitionAPI();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        const input = document.getElementById('chatInput');
        if (input) {
            input.value = transcript;
            sendMessage();
        }
    };

    recognition.onerror = function() {
        stopListening();
    };

    recognition.onend = function() {
        stopListening();
    };
}

function toggleMic() {
    if (!recognition) return;
    if (isListening) {
        recognition.stop();
        stopListening();
    } else {
        recognition.lang = speechLangFor(currentLanguage);
        try {
            recognition.start();
            startListening();
        } catch (e) {
            stopListening();
        }
    }
}

function startListening() {
    isListening = true;
    const micBtn = document.getElementById('micBtn');
    const micIcon = document.getElementById('micIcon');
    if (micBtn) {
        micBtn.classList.add('listening');
        micBtn.setAttribute('aria-pressed', 'true');
    }
    if (micIcon) {
        micIcon.classList.remove('fa-microphone');
        micIcon.classList.add('fa-microphone-lines');
    }
}

function stopListening() {
    isListening = false;
    const micBtn = document.getElementById('micBtn');
    const micIcon = document.getElementById('micIcon');
    if (micBtn) {
        micBtn.classList.remove('listening');
        micBtn.setAttribute('aria-pressed', 'false');
    }
    if (micIcon) {
        micIcon.classList.remove('fa-microphone-lines');
        micIcon.classList.add('fa-microphone');
    }
}

// ===============================
// VOICE OUTPUT - SPOKEN CHAT REPLIES (TEXT TO SPEECH)
// Helps blind visitors hear answers read aloud.
// Deaf visitors simply leave this off (all replies remain fully written on screen too).
// ===============================
const VOICE_REPLY_KEY = 'jonesVoiceRepliesOn';

function isVoiceRepliesOn() {
    return localStorage.getItem(VOICE_REPLY_KEY) === 'true';
}

function toggleVoiceReplies() {
    const on = !isVoiceRepliesOn();
    localStorage.setItem(VOICE_REPLY_KEY, String(on));
    updateVoiceReplyButton(on);
    if (!on && window.speechSynthesis) window.speechSynthesis.cancel();
}

function updateVoiceReplyButton(on) {
    const btn = document.getElementById('voiceReplyBtn');
    const icon = document.getElementById('voiceReplyIcon');
    if (btn) btn.setAttribute('aria-pressed', String(on));
    if (icon) {
        icon.classList.toggle('fa-volume-xmark', !on);
        icon.classList.toggle('fa-volume-high', on);
    }
}

function speakBotReply(text) {
    if (!isVoiceRepliesOn() || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = speechLangFor(currentLanguage);
    window.speechSynthesis.speak(utterance);
}

// ===============================
// CHAT HISTORY MEMORY
// Remembers the visitor's previous questions and answers across visits,
// so the conversation picks up where it left off instead of starting over.
// ===============================
const CHAT_HISTORY_KEY = 'jonesChatHistory';

function getChatHistory() {
    try {
        return JSON.parse(localStorage.getItem(CHAT_HISTORY_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function saveChatMessage(role, text) {
    const history = getChatHistory();
    history.push({ role: role, text: text, time: Date.now() });
    // Keep the most recent 60 messages so storage doesn't grow without bound
    while (history.length > 60) history.shift();
    localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(history));
}

function renderChatHistory() {
    const chatBody = document.getElementById('chatBody');
    if (!chatBody) return;
    const history = getChatHistory();
    if (history.length === 0) return;

    // Remove the default greeting so we don't duplicate it, then replay saved messages
    chatBody.innerHTML = '';
    history.forEach(function(entry) {
        const div = document.createElement('div');
        div.classList.add(entry.role === 'user' ? 'user-message' : 'bot-message');
        div.innerText = entry.text;
        chatBody.appendChild(div);
    });
    chatBody.scrollTop = chatBody.scrollHeight;
}

function clearChatHistory() {
    localStorage.removeItem(CHAT_HISTORY_KEY);
    const chatBody = document.getElementById('chatBody');
    if (chatBody) {
        chatBody.innerHTML = '<div class="bot-message" data-i18n="chatGreeting">' + getGreetingText() + '</div>';
    }
}

// Returns the chat greeting in whichever language is currently selected, falling back to English
function getGreetingText() {
    return (translations[currentLanguage] && translations[currentLanguage].chatGreeting) || translations.en.chatGreeting;
}

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
    },
    french: {
        keywords: ["combien", "coût", "prix", "quoi", "comment", "quand", "où", "pourquoi", "peut", "aide", "question", "peintre", "peinture", "décoration", "mur", "plafond", "extérieur", "intérieur", "couleur", "conseil", "bonjour", "salut", "merci", "devis", "gratuit", "pièce", "appartement", "service", "bureau", "papier peint", "dehors", "temps", "réservation", "meuble", "nettoyer", "réparer", "emplacement", "amsterdam", "voyage", "avis", "urgent", "nuit", "paiement", "acompte", "au revoir", "surface", "plinthe", "fenêtre", "fragile", "électronique", "fissure", "trou", "cuisine", "salle de bain", "satiné", "humidité", "moisissure", "sombre", "clair", "odeur", "enlever", "colle", "tapis", "parquet", "hiver", "température", "accrocher", "tableau", "entreprise", "marque", "assuré", "assurance", "ordinateur", "serveur", "hauteur", "échafaudage", "délai", "ouverture", "ligne", "marquage", "parking", "feu", "déchets", "consultation", "visite", "valable", "forfait", "dépôt", "garantie", "équipe", "peintres", "changer", "certification", "qualifié", "mètre", "m2", "m²", "carré", "surface", "taille", "calculatrice", "chambre", "salon", "cuisine", "salle de bain", "projet", "durée", "jours", "heures", "estimation"],
        responses: {
            greeting: "Bonjour 👋 Bienvenue chez Jone`s Paint & Decorators. Comment pouvons-nous vous aider aujourd'hui ?",
            hi: "Salut 😊 Vous cherchez des services de peinture ou de décoration aujourd'hui ?",
            goodMorning: "Bonjour ☀️ Comment Jone`s Paint & Decorators peut-il vous aider ?",
            pricing: "Les prix dépendent de la taille de la pièce, de l'état des murs, du type de peinture et de l'emplacement. Nous pouvons fournir un devis gratuit.",
            freeQuote: "Absolument ✅ Envoyez-nous les dimensions de la pièce, des photos ou les détails du projet pour un devis gratuit.",
            perRoom: "Oui. Nous pouvons facturer par pièce, par appartement ou pour le projet complet selon le travail requis.",
            apartmentPrice: "Les prix varient selon l'état et la finition de la peinture. Merci d'envoyer des photos ou de demander une inspection pour un devis précis.",
            services: "Nous proposons la peinture intérieure, extérieure, la pose de papier peint, la décoration, la peinture de bureaux, d'appartements et de locaux commerciaux.",
            offices: "Oui ✅ Nous proposons des services de peinture commerciale et de bureaux pour les entreprises et bâtiments.",
            wallpaper: "Oui 😊 Nous posons du papier peint, des murs d'accent et des finitions décoratives.",
            exterior: "Oui. Nous proposons la peinture extérieure pour les maisons, immeubles et locaux commerciaux.",
            duration: "La plupart des pièces prennent 1 à 2 jours selon la préparation et le temps de séchage.",
            availability: "Nous sommes disponibles du lundi au samedi de 8h à 18h.",
            onlineBooking: "Oui ✅ Vous pouvez demander une réservation directement via le formulaire de contact de notre site.",
            supplyPaint: "Oui. Nous pouvons fournir des marques de peinture premium ou travailler avec la peinture fournie par le client.",
            paintBrands: "Nous utilisons des peintures professionnelles de haute qualité pour des finitions durables.",
            colorHelp: "Oui 🎨 Nous proposons des conseils en couleurs et en décoration.",
            furniture: "Oui. Nous aidons à protéger et déplacer les meubles avant de commencer les travaux.",
            cleaning: "Absolument ✅ Nous laissons toutes les zones propres et rangées une fois le projet terminé.",
            wallRepair: "Oui. Nous réparons les fissures, les trous et les murs endommagés avant de peindre.",
            location: "Nous sommes basés à Amsterdam et intervenons dans les environs.",
            travel: "Oui 😊 Nous nous déplaçons dans les maisons, appartements, bureaux et locaux commerciaux.",
            seeWork: "Oui ✅ Visitez notre galerie, Instagram, TikTok et Facebook pour voir nos projets réalisés.",
            reviews: "Oui ⭐ Les clients peuvent laisser des avis sur Facebook, Instagram et Google.",
            urgent: "Oui. Selon nos disponibilités, nous pouvons proposer des services de peinture urgents.",
            nightWork: "Pour les projets commerciaux et les bureaux, nous pouvons proposer un travail en soirée ou de nuit.",
            payment: "Nous acceptons les paiements en espèces, par virement bancaire et en ligne.",
            upfront: "Pour les grands projets, un acompte peut être demandé avant le début des travaux.",
            thanks: "Avec plaisir 😊 Nous avons hâte de travailler avec vous.",
            bye: "Merci d'avoir visité Jone`s Paint & Decorators. Bonne journée 👋",
            // Residential Projects
            surfacesIncluded: "Le devis couvre tous les murs de la chambre, les plinthes et les cadres de fenêtres. Les plafonds et les portes sont exclus comme demandé 🏠",
            moveFurniture: "Veuillez retirer les objets fragiles, l'électronique et les petites décorations. Notre équipe déplacera et protégera les meubles lourds avec des bâches plastiques 🪑",
            fixCracks: "Nous grattons les débris, appliquons un enduit de qualité, laissons sécher, puis poncons parfaitement avant d'appliquer la peinture 🔧",
            kitchenBathroomFinish: "Nous utilisons une finition satinée ou semi-brillante. Ces finitions résistent à l'humidité, préviennent la moisissure et se nettoient facilement 🚿",
            paintOverDark: "Oui. Nous appliquons d'abord une sous-couche opaque pour bloquer la couleur foncée, suivie de deux couches de votre nouvelle peinture claire 🎨",
            paintSmell: "Nous utilisons des peintures à faible taux de COV (écologiques). Toute légère odeur disparaît généralement en 24 à 48 heures avec une bonne ventilation 🌬️",
            removeWallpaper: "Oui. Nous décollons ou appliquons une solution pour retirer le papier peint, nettoyons les résidus de colle et préparons le mur 📄",
            paintOnFloor: "Nous évitons cela en recouvrant tous les sols de bâches épaisses et en scotchant les bords. En cas d'incident, nous réparons entièrement 🛡️",
            winterExterior: "Non. La peinture extérieure nécessite des conditions sèches et des températures constamment supérieures à 5°C-10°C pour une bonne adhérence ❄️",
            hangPictures: "La peinture est sèche au toucher rapidement, mais met environ 5 à 7 jours à durcir complètement. Merci d'attendre une semaine avant d'accrocher des objets lourds 🖼️",
            // Commercial Projects
            overnightPainting: "Oui. Nous proposons des créneaux en soirée, la nuit et le week-end pour que votre activité ne soit jamais perturbée 🌙",
            highTrafficPaint: "Nous utilisons une peinture acrylique commerciale résistante aux frottements. Elle supporte un passage intense, les chocs de chaises et un nettoyage fréquent 🏢",
            matchCorporateColors: "Oui. Si vous fournissez vos codes couleur numériques (RAL, Pantone ou NCS), nous pouvons mélanger la peinture pour correspondre exactement à votre image de marque 🎯",
            insuredCommercial: "Oui. Nous disposons d'une assurance responsabilité civile complète jusqu'à 5 000 000 € couvrant tous les risques liés aux locaux commerciaux 📋",
            protectElectronics: "Nous protégeons entièrement tous les équipements électroniques et baies de serveurs avec des bâches antistatiques et du ruban spécialisé avant de commencer 💻",
            highHeights: "Oui. Notre équipe est entièrement formée et certifiée pour utiliser des nacelles élévatrices et des échafaudages professionnels 🏗️",
            missedDeadline: "Nous signons un calendrier contractuel strict. Nous mobilisons du personnel supplémentaire et des équipes plus longues pour respecter votre délai impératif 📅",
            lineMarking: "Oui. Nous proposons un marquage au sol en époxy résistant pour les entrepôts, zones de sécurité et parkings extérieurs 🅿️",
            fireRetardant: "Oui. Nous appliquons des peintures intumescentes certifiées (ignifuges) conformes aux réglementations locales de sécurité des bâtiments commerciaux 🔥",
            wasteDisposal: "Nous suivons des directives environnementales strictes. Tous les déchets toxiques, pots vides et produits chimiques sont éliminés via un centre de recyclage agréé ♻️",
            // Estimates & Contracts
            freeConsultation: "Oui. Nous visitons votre propriété, mesurons le site, discutons de vos objectifs et fournissons un devis écrit détaillé gratuitement 💼",
            quoteValid: "Nos devis sont valables 30 jours à compter de la date d'émission en raison des fluctuations occasionnelles des coûts des matériaux et fournisseurs 📆",
            hourlyOrFlat: "Nous facturons un tarif forfaitaire basé sur le projet. Vous connaissez ainsi le coût final exact à l'avance, sans surprise horaire 💰",
            depositSchedule: "Nous demandons un acompte de 20 % pour sécuriser votre date de réservation. Le solde de 80 % est payable uniquement après l'achèvement réussi du projet 💳",
            rottingMold: "Nous arrêtons immédiatement le travail dans cette zone, vous montrons les dégâts, et fournissons un devis écrit clair et séparé pour la réparation avant de peindre 🍄",
            warranty: "Oui. Nous offrons une garantie de 2 ans couvrant l'écaillage, le cloquage ou le décollement dus à une application défectueuse ou une mauvaise préparation ✅",
            whoSuppliesPaint: "Nous fournissons la peinture car nous bénéficions de remises professionnelles sur les marques premium. Cependant, si vous avez déjà acheté la peinture, nous pouvons ajuster le devis pour ne couvrir que la main-d'œuvre 🪣",
            teamSize: "Pour les travaux résidentiels standards, nous envoyons une équipe de 1 à 2 peintres. Pour les grands travaux commerciaux, nous envoyons de 4 à 8 peintres pour accélérer le processus 👥",
            changeColor: "Nous pouvons changer la couleur, mais cela entraînera des frais supplémentaires. Vous devrez couvrir le coût de la nouvelle peinture et de la main-d'œuvre pour la repeinture 🔄",
            certifications: "Nous sommes des professionnels pleinement enregistrés, et nos peintres détiennent des certifications professionnelles accréditées en peinture, décoration et sécurité sur site 🎓",
            // Meter-based pricing questions
            metersToCover: "Utilisez notre calculateur de prix en haut de la page ! Faites glisser le curseur pour voir combien de m² vous avez et le prix estimé. Par exemple : une petite chambre (~5m² au sol) coûte 200€-450€, une chambre moyenne (~12m²) coûte 250€-600€ 📏",
            roomSizeMeters: "Tailles moyennes des pièces : Chambre (~5m² au sol), Salon (~20m²), Cuisine (~15m²). Utilisez notre calculateur en haut de la page pour un prix exact selon vos m² 🏠",
            pricePerMeter: "Nos prix au m² : Murs 8€-17€/m², Plafonds 10€-20€/m², Projection latex 7€-12€/m². Consultez notre calculateur de prix pour les prix de projet 💰",
            howManyMeters: "Indiquez-nous les dimensions de votre pièce (longueur × largeur × hauteur) et nous calculerons le m² exact. Ou utilisez notre calculateur interactif en haut de la page 📐",
            bedroomMeters: "Une chambre standard a environ 4 à 6 m² de surface murale par mur. Avec 4 murs, cela fait 16 à 24 m² au total. Prix : 200€-450€ pour les petites chambres 🛏️",
            livingRoomMeters: "Un salon a en moyenne 20 à 30 m² de surface murale. Prix : 350€-900€ pour les grands salons 🛋️",
            kitchenMeters: "Une cuisine a environ 15 à 20 m² de surface (plafond inclus). Prix : 250€-600€ 🍳",
            bathroomMeters: "Une salle de bain a 8 à 12 m² de surface. Prix : 200€-400€ 🚿",
            wholeHouseMeters: "Maison complète : appartement 1 chambre ~50-80 m² (1 500€-2 500€), maison 2 chambres ~80-120 m² (2 200€-3 600€), maison familiale 3 chambres ~120-180 m² (3 500€-5 500€) 🏡",
            default: "Merci pour votre message. L'un de nos décorateurs vous contactera sous peu. Pour une assistance immédiate, appelez le +31684258077."
        }
    },
    german: {
        keywords: ["wie viel", "kosten", "preis", "was", "wie", "wann", "wo", "warum", "kann", "hilfe", "frage", "maler", "farbe", "dekoration", "wand", "decke", "außen", "innen", "farbe", "beratung", "hallo", "hi", "hey", "danke", "guten morgen", "angebot", "kostenlos", "zimmer", "wohnung", "dienstleistung", "büro", "tapete", "draußen", "zeit", "buchung", "möbel", "reinigen", "reparatur", "standort", "amsterdam", "reisen", "bewertung", "dringend", "nacht", "zahlung", "anzahlung", "tschüss", "fläche", "sockelleiste", "fenster", "zerbrechlich", "elektronik", "riss", "loch", "küche", "badezimmer", "seidenmatt", "feuchtigkeit", "schimmel", "dunkel", "hell", "geruch", "entfernen", "kleber", "teppich", "parkett", "winter", "temperatur", "aufhängen", "bild", "unternehmen", "marke", "versichert", "versicherung", "computer", "server", "höhe", "gerüst", "frist", "eröffnung", "linie", "markierung", "parkplatz", "feuer", "abfall", "beratung", "besuch", "gültig", "pauschal", "kaution", "garantie", "team", "maler", "ändern", "zertifizierung", "qualifiziert", "meter", "m2", "m²", "quadrat", "fläche", "größe", "rechner", "schlafzimmer", "wohnzimmer", "küche", "badezimmer", "projekt", "dauer", "tage", "stunden", "schätzung"],
        responses: {
            greeting: "Hallo 👋 Willkommen bei Jone`s Paint & Decorators. Wie können wir Ihnen heute helfen?",
            hi: "Hi 😊 Suchen Sie heute nach Maler- oder Dekorationsdienstleistungen?",
            goodMorning: "Guten Morgen ☀️ Wie kann Jone`s Paint & Decorators Ihnen helfen?",
            pricing: "Die Preise hängen von Zimmergröße, Wandzustand, Farbtyp und Standort ab. Wir können Ihnen ein kostenloses Angebot erstellen.",
            freeQuote: "Auf jeden Fall ✅ Senden Sie uns Zimmergrößen, Fotos oder Projektdetails für ein kostenloses Angebot.",
            perRoom: "Ja. Wir können pro Zimmer, pro Wohnung oder für das gesamte Projekt abrechnen, je nach erforderlicher Arbeit.",
            apartmentPrice: "Die Preise variieren je nach Zustand und Farbfinish. Bitte laden Sie Fotos hoch oder fordern Sie eine Besichtigung für ein genaues Angebot an.",
            services: "Wir bieten Innen- und Außenanstriche, Tapezieren, Dekoration, Bürostreichen, Wohnungsstreichen und gewerbliches Streichen an.",
            offices: "Ja ✅ Wir bieten gewerbliche und Bürostreichdienste für Unternehmen und Gebäude an.",
            wallpaper: "Ja 😊 Wir bringen Tapeten, Akzentwände und dekorative Oberflächen an.",
            exterior: "Ja. Wir bieten Außenanstriche für Häuser, Gebäude und Gewerbeimmobilien an.",
            duration: "Die meisten Zimmer dauern 1-2 Tage, je nach Vorbereitung und Trocknungszeit.",
            availability: "Wir sind Montag bis Samstag von 8 bis 18 Uhr verfügbar.",
            onlineBooking: "Ja ✅ Sie können direkt über unser Kontaktformular auf der Website eine Buchung anfragen.",
            supplyPaint: "Ja. Wir können hochwertige Farbmarken liefern oder mit vom Kunden bereitgestellter Farbe arbeiten.",
            paintBrands: "Wir verwenden hochwertige professionelle Farben für langlebige und dauerhafte Ergebnisse.",
            colorHelp: "Ja 🎨 Wir bieten Farbberatung und Dekorationstipps an.",
            furniture: "Ja. Wir helfen dabei, Möbel vor Arbeitsbeginn zu schützen und zu verschieben.",
            cleaning: "Auf jeden Fall ✅ Wir hinterlassen alle Bereiche sauber und ordentlich, nachdem das Projekt abgeschlossen ist.",
            wallRepair: "Ja. Wir reparieren Risse, Löcher und beschädigte Wände, bevor wir streichen.",
            location: "Wir sind in Amsterdam ansässig und bieten Dienstleistungen in der Umgebung an.",
            travel: "Ja 😊 Wir kommen zu Häusern, Wohnungen, Büros und Gewerbeimmobilien.",
            seeWork: "Ja ✅ Besuchen Sie unsere Galerie, Instagram, TikTok und Facebook-Seiten, um abgeschlossene Projekte zu sehen.",
            reviews: "Ja ⭐ Kunden können Bewertungen auf Facebook, Instagram und Google hinterlassen.",
            urgent: "Ja. Je nach Verfügbarkeit können wir dringende Malerdienste anbieten.",
            nightWork: "Für gewerbliche Projekte und Büros bieten wir eventuell Abend- oder Nachtarbeit an.",
            payment: "Wir akzeptieren Bargeld, Überweisung und Online-Zahlungen.",
            upfront: "Bei größeren Projekten kann vor Arbeitsbeginn eine Anzahlung erforderlich sein.",
            thanks: "Gern geschehen 😊 Wir freuen uns auf die Zusammenarbeit mit Ihnen.",
            bye: "Danke, dass Sie Jone`s Paint & Decorators besucht haben. Einen schönen Tag noch 👋",
            // Residential Projects
            surfacesIncluded: "Das Angebot umfasst alle Schlafzimmerwände, Sockelleisten und Fensterrahmen. Decken und Türen sind wie gewünscht ausgeschlossen 🏠",
            moveFurniture: "Bitte entfernen Sie zerbrechliche Gegenstände, Elektronik und kleine Dekorationen. Unser Team verschiebt und schützt schwere Möbel mit Schutzfolien 🪑",
            fixCracks: "Wir kratzen losen Schutt heraus, tragen hochwertigen Spachtel auf, lassen ihn trocknen und schleifen ihn komplett glatt, bevor wir streichen 🔧",
            kitchenBathroomFinish: "Wir verwenden eine seidenmatte oder halbglänzende Oberfläche. Diese Oberflächen sind feuchtigkeitsbeständig, verhindern Schimmel und lassen sich leicht abwischen 🚿",
            paintOverDark: "Ja. Wir tragen zuerst eine stark deckende Grundierung auf, um die dunkle Farbe zu blockieren, gefolgt von zwei Schichten Ihrer neuen hellen Farbe 🎨",
            paintSmell: "Wir verwenden schadstoffarme (VOC-arme, umweltfreundliche) Farben. Leichter Farbgeruch verschwindet in der Regel innerhalb von 24 bis 48 Stunden bei guter Lüftung 🌬️",
            removeWallpaper: "Ja. Wir dämpfen oder tragen eine Ablösungslösung auf, um die Tapete zu entfernen, Kleberreste zu säubern und die Wand vorzubereiten 📄",
            paintOnFloor: "Wir verhindern dies, indem wir alle Böden mit robusten Abdeckplanen abdecken und die Ränder abkleben. Falls doch etwas passiert, reinigen oder reparieren wir es vollständig 🛡️",
            winterExterior: "Nein. Außenanstriche erfordern trockene Bedingungen und Temperaturen konstant über 5°C bis 10°C, damit die Farbe richtig haftet ❄️",
            hangPictures: "Farbe fühlt sich schnell trocken an, benötigt aber etwa 5 bis 7 Tage, um vollständig auszuhärten. Bitte warten Sie eine Woche, bevor Sie schwere Gegenstände aufhängen 🖼️",
            // Commercial Projects
            overnightPainting: "Ja. Wir bieten Abend-, Nacht- und Wochenendschichten an, damit Ihr Tagesgeschäft nicht gestört wird 🌙",
            highTrafficPaint: "Wir verwenden abriebfeste, gewerbliche Acrylfarbe. Sie hält starkem Fußverkehr, Stößen von Stühlen und häufiger Reinigung stand 🏢",
            matchCorporateColors: "Ja. Wenn Sie Ihre digitalen Farbcodes (RAL, Pantone oder NCS) angeben, können wir die Farbe präzise auf Ihre Markenidentität abstimmen 🎯",
            insuredCommercial: "Ja. Wir verfügen über eine umfassende Betriebs- und Arbeitgeberhaftpflichtversicherung bis zu 5.000.000 €, die alle gewerblichen Risiken abdeckt 📋",
            protectElectronics: "Wir versiegeln alle elektronischen Geräte und Serverschränke vollständig mit antistatischer Kunststofffolie und Spezialklebeband, bevor die Arbeit beginnt 💻",
            highHeights: "Ja. Unser Team ist vollständig geschult und zertifiziert für den Einsatz von Hubarbeitsbühnen, Scherenhubbühnen und professionellen Gerüstsystemen 🏗️",
            missedDeadline: "Wir unterzeichnen einen strikten Vertragszeitplan. Wir setzen zusätzliches Personal und längere Schichten ein, um Ihre feste Frist einzuhalten 📅",
            lineMarking: "Ja. Wir bieten spezialisierte, strapazierfähige Epoxid-Linienmarkierungen für Lagerhallenböden, Sicherheitszonen und Außenparkplätze an 🅿️",
            fireRetardant: "Ja. Wir tragen zertifizierte intumeszierende (feuerfeste) Farbbeschichtungen auf, die den örtlichen Sicherheitsvorschriften für Gewerbegebäude entsprechen 🔥",
            wasteDisposal: "Wir befolgen strenge Umweltrichtlinien. Alle Giftstoffe, leere Farbdosen und Chemikalien werden über eine lizenzierte gewerbliche Recyclinganlage entsorgt ♻️",
            // Estimates & Contracts
            freeConsultation: "Ja. Wir besuchen Ihre Immobilie, vermessen den Standort, besprechen Ihre Ziele und erstellen kostenlos einen detaillierten schriftlichen Kostenvoranschlag 💼",
            quoteValid: "Unsere Angebote sind ab Ausstellungsdatum 30 Tage gültig, da Material- und Farblieferantenkosten gelegentlich schwanken können 📆",
            hourlyOrFlat: "Wir berechnen einen pauschalen, projektbasierten Preis. So kennen Sie die genauen Endkosten im Voraus, ohne überraschende Stundenzuschläge 💰",
            depositSchedule: "Wir benötigen eine Anzahlung von 20 %, um Ihren Buchungstermin zu sichern. Die restlichen 80 % sind erst nach erfolgreichem Projektabschluss fällig 💳",
            rottingMold: "Wir stoppen die Arbeit in diesem Bereich sofort, zeigen Ihnen den Schaden und erstellen einen klaren, separaten schriftlichen Preis zur Behebung vor dem Streichen 🍄",
            warranty: "Ja. Wir bieten eine 2-Jahres-Garantie, die Abblättern, Absplittern oder Blasenbildung durch fehlerhafte Anwendung oder mangelhafte Vorbereitung abdeckt ✅",
            whoSuppliesPaint: "Wir liefern die Farbe, da wir professionelle Handelsrabatte auf Premiummarken erhalten. Falls Sie die Farbe bereits gekauft haben, können wir das Angebot anpassen, sodass nur die Arbeitskosten abgerechnet werden 🪣",
            teamSize: "Für Standard-Wohnprojekte schicken wir ein Team von 1 bis 2 Malern. Für große Gewerbeprojekte schicken wir 4 bis 8 Maler, um den Prozess zu beschleunigen 👥",
            changeColor: "Wir können die Farbe ändern, allerdings entstehen dadurch zusätzliche Kosten. Sie müssen die Kosten für die neue Farbe und die Arbeit für das Neustreichen tragen 🔄",
            certifications: "Wir sind vollständig registrierte Fachleute, und unsere Maler verfügen über anerkannte Fachzertifizierungen in Malerei, Dekoration und Baustellensicherheit 🎓",
            // Meter-based pricing questions
            metersToCover: "Nutzen Sie unseren Preisrechner oben auf der Seite! Verschieben Sie den Regler, um zu sehen, wie viele m² Sie haben und den geschätzten Preis. Beispiel: ein kleines Schlafzimmer (~5m² Boden) kostet 200€-450€, ein mittleres Zimmer (~12m²) kostet 250€-600€ 📏",
            roomSizeMeters: "Durchschnittliche Zimmergrößen: Schlafzimmer (~5m² Bodenfläche), Wohnzimmer (~20m²), Küche (~15m²). Nutzen Sie unseren Rechner oben für genaue Preise basierend auf Ihren m² 🏠",
            pricePerMeter: "Unsere Preise pro m²: Wände 8€-17€/m², Decken 10€-20€/m², Latexsprühen 7€-12€/m². Schauen Sie in unseren Preisrechner für Projektpreise 💰",
            howManyMeters: "Nennen Sie uns die Abmessungen Ihres Zimmers (Länge × Breite × Höhe), und wir berechnen die genauen m². Oder nutzen Sie unseren interaktiven Rechner oben auf der Seite 📐",
            bedroomMeters: "Ein Standardschlafzimmer hat etwa 4-6 m² Wandfläche pro Wand. Bei 4 Wänden sind das insgesamt 16-24 m². Preis: 200€-450€ für kleine Schlafzimmer 🛏️",
            livingRoomMeters: "Ein Wohnzimmer hat durchschnittlich 20-30 m² Wandfläche. Preis: 350€-900€ für große Wohnzimmer 🛋️",
            kitchenMeters: "Eine Küche hat etwa 15-20 m² Fläche (Decke inbegriffen). Preis: 250€-600€ 🍳",
            bathroomMeters: "Ein Badezimmer hat 8-12 m² Fläche. Preis: 200€-400€ 🚿",
            wholeHouseMeters: "Ganzes Haus: 1-Zimmer-Wohnung ~50-80 m² (1.500€-2.500€), 2-Zimmer-Haus ~80-120 m² (2.200€-3.600€), 3-Zimmer-Familienhaus ~120-180 m² (3.500€-5.500€) 🏡",
            default: "Danke für Ihre Nachricht. Einer unserer Dekorateure wird sich in Kürze bei Ihnen melden. Für sofortige Hilfe rufen Sie +31684258077 an."
        }
    },
    spanish: {
        keywords: ["cuánto", "costo", "precio", "qué", "cómo", "cuándo", "dónde", "por qué", "puede", "ayuda", "pregunta", "pintor", "pintura", "decoración", "pared", "techo", "exterior", "interior", "color", "consejo", "hola", "hey", "gracias", "buenos días", "presupuesto", "gratis", "habitación", "apartamento", "servicio", "oficina", "papel tapiz", "afuera", "tiempo", "reserva", "muebles", "limpiar", "reparar", "ubicación", "amsterdam", "viajar", "reseña", "urgente", "noche", "pago", "anticipo", "adiós", "superficie", "zócalo", "ventana", "frágil", "electrónica", "grieta", "agujero", "cocina", "baño", "satinado", "humedad", "moho", "oscuro", "claro", "olor", "quitar", "pegamento", "alfombra", "madera", "invierno", "temperatura", "colgar", "cuadro", "empresa", "marca", "asegurado", "seguro", "computadora", "servidor", "altura", "andamio", "fecha límite", "apertura", "línea", "marcado", "estacionamiento", "fuego", "residuos", "consulta", "visita", "válido", "tarifa fija", "depósito", "garantía", "equipo", "pintores", "cambiar", "certificación", "calificado", "metro", "m2", "m²", "cuadrado", "área", "tamaño", "calculadora", "dormitorio", "salón", "cocina", "baño", "proyecto", "duración", "días", "horas", "estimación"],
        responses: {
            greeting: "Hola 👋 Bienvenido a Jone`s Paint & Decorators. ¿Cómo podemos ayudarte hoy?",
            hi: "Hola 😊 ¿Buscas servicios de pintura o decoración hoy?",
            goodMorning: "Buenos días ☀️ ¿Cómo puede ayudarte Jone`s Paint & Decorators?",
            pricing: "Los precios dependen del tamaño de la habitación, el estado de las paredes, el tipo de pintura y la ubicación. Podemos ofrecerte un presupuesto gratuito.",
            freeQuote: "Por supuesto ✅ Envíanos las dimensiones de la habitación, fotos o detalles del proyecto para un presupuesto gratuito.",
            perRoom: "Sí. Podemos cobrar por habitación, por apartamento o por el proyecto completo, según el trabajo requerido.",
            apartmentPrice: "Los precios varían según el estado y el acabado de la pintura. Sube fotos o solicita una inspección para un presupuesto exacto.",
            services: "Ofrecemos pintura de interiores, pintura de exteriores, empapelado, decoración, pintura de oficinas, apartamentos y locales comerciales.",
            offices: "Sí ✅ Ofrecemos servicios de pintura comercial y de oficinas para empresas y edificios.",
            wallpaper: "Sí 😊 Instalamos papel tapiz, paredes de acento y acabados decorativos.",
            exterior: "Sí. Ofrecemos pintura exterior para viviendas, edificios y propiedades comerciales.",
            duration: "La mayoría de las habitaciones tardan de 1 a 2 días según la preparación y el tiempo de secado.",
            availability: "Estamos disponibles de lunes a sábado de 8:00 a 18:00.",
            onlineBooking: "Sí ✅ Puedes solicitar una reserva directamente desde el formulario de contacto de nuestro sitio web.",
            supplyPaint: "Sí. Podemos suministrar marcas de pintura premium o trabajar con la pintura que proporcione el cliente.",
            paintBrands: "Usamos pinturas profesionales de alta calidad para acabados duraderos y resistentes.",
            colorHelp: "Sí 🎨 Ofrecemos asesoramiento de color y consejos de decoración.",
            furniture: "Sí. Ayudamos a proteger y mover los muebles antes de comenzar el trabajo.",
            cleaning: "Por supuesto ✅ Dejamos todas las áreas limpias y ordenadas al finalizar el proyecto.",
            wallRepair: "Sí. Reparamos grietas, agujeros y paredes dañadas antes de pintar.",
            location: "Estamos ubicados en Ámsterdam y ofrecemos servicios en las zonas cercanas.",
            travel: "Sí 😊 Nos desplazamos a viviendas, apartamentos, oficinas y propiedades comerciales.",
            seeWork: "Sí ✅ Visita nuestra galería, Instagram, TikTok y Facebook para ver proyectos terminados.",
            reviews: "Sí ⭐ Los clientes pueden dejar reseñas en Facebook, Instagram y Google.",
            urgent: "Sí. Según disponibilidad, podemos ofrecer servicios de pintura urgentes.",
            nightWork: "Para proyectos comerciales y oficinas, podemos ofrecer trabajo por la tarde o por la noche.",
            payment: "Aceptamos efectivo, transferencia bancaria y pagos en línea.",
            upfront: "Para proyectos grandes, puede requerirse un anticipo antes de comenzar el trabajo.",
            thanks: "De nada 😊 Esperamos con gusto trabajar contigo.",
            bye: "Gracias por visitar Jone`s Paint & Decorators. Que tengas un buen día 👋",
            // Residential Projects
            surfacesIncluded: "El presupuesto cubre todas las paredes del dormitorio, zócalos y marcos de ventanas. Techos y puertas quedan excluidos según lo solicitado 🏠",
            moveFurniture: "Por favor retira objetos frágiles, electrónica y decoraciones pequeñas. Nuestro equipo moverá y protegerá los muebles pesados con plásticos protectores 🪑",
            fixCracks: "Raspamos los residuos sueltos, aplicamos masilla premium, la dejamos secar y la lijamos completamente antes de aplicar la pintura 🔧",
            kitchenBathroomFinish: "Usamos un acabado satinado o semi-brillante. Estos acabados resisten la humedad, previenen el moho y son fáciles de limpiar 🚿",
            paintOverDark: "Sí. Primero aplicamos una imprimación de alta cobertura para bloquear el color oscuro, seguida de dos capas de tu nueva pintura clara 🎨",
            paintSmell: "Usamos pinturas bajas en COV (ecológicas). Cualquier olor leve suele desaparecer entre 24 y 48 horas con buena ventilación 🌬️",
            removeWallpaper: "Sí. Aplicamos vapor o una solución removedora para quitar el papel tapiz, limpiamos los residuos de pegamento y preparamos la pared 📄",
            paintOnFloor: "Evitamos esto cubriendo todos los suelos con lonas resistentes y sellando los bordes con cinta. Si ocurre un accidente, lo limpiamos o reparamos por completo 🛡️",
            winterExterior: "No. La pintura exterior requiere condiciones secas y temperaturas constantemente superiores a 5°C-10°C para que la pintura se adhiera correctamente ❄️",
            hangPictures: "La pintura se seca al tacto rápidamente, pero tarda entre 5 y 7 días en curar completamente. Espera una semana antes de colgar objetos pesados 🖼️",
            // Commercial Projects
            overnightPainting: "Sí. Ofrecemos turnos de tarde, noche y fin de semana para que tu operación diaria no sufra ninguna interrupción 🌙",
            highTrafficPaint: "Usamos pintura acrílica comercial resistente al roce. Soporta tráfico peatonal intenso, golpes de sillas y limpieza frecuente 🏢",
            matchCorporateColors: "Sí. Si nos proporcionas tus códigos de color digitales (RAL, Pantone o NCS), podemos mezclar la pintura con precisión para igualar tu marca perfectamente 🎯",
            insuredCommercial: "Sí. Contamos con seguro de responsabilidad civil completo hasta 5.000.000 € que cubre todos los riesgos de propiedades comerciales 📋",
            protectElectronics: "Sellamos completamente todos los equipos electrónicos y racks de servidores con plástico antiestático y cinta especializada antes de comenzar el trabajo 💻",
            highHeights: "Sí. Nuestro equipo está totalmente capacitado y certificado para usar plataformas elevadoras, elevadores de tijera y sistemas de andamios profesionales 🏗️",
            missedDeadline: "Firmamos un cronograma contractual estricto. Comprometemos personal adicional y turnos más largos para cumplir con tu plazo fijo 📅",
            lineMarking: "Sí. Ofrecemos marcado de líneas de epoxi resistente para suelos de almacenes, zonas de seguridad y estacionamientos exteriores 🅿️",
            fireRetardant: "Sí. Aplicamos recubrimientos de pintura intumescente certificados (resistentes al fuego) que cumplen con las normativas locales de seguridad comercial 🔥",
            wasteDisposal: "Seguimos pautas ambientales estrictas. Todos los residuos tóxicos, latas vacías y productos químicos se desechan a través de una instalación de reciclaje comercial autorizada ♻️",
            // Estimates & Contracts
            freeConsultation: "Sí. Visitamos tu propiedad, medimos el sitio, hablamos de tus objetivos y te damos un presupuesto detallado por escrito de forma gratuita 💼",
            quoteValid: "Nuestros presupuestos son válidos por 30 días desde la fecha de emisión debido a fluctuaciones ocasionales en los costos de materiales y proveedores 📆",
            hourlyOrFlat: "Cobramos una tarifa fija basada en el proyecto. Así sabrás el costo final exacto por adelantado, sin cargos por hora sorpresa 💰",
            depositSchedule: "Requerimos un anticipo del 20% para asegurar tu fecha de reserva. El 80% restante se paga solo al finalizar el proyecto con éxito 💳",
            rottingMold: "Detenemos el trabajo en esa área de inmediato, te mostramos el daño y te damos un precio escrito claro y separado para repararlo antes de pintar 🍄",
            warranty: "Sí. Ofrecemos una garantía de 2 años que cubre descamación, desconchado o ampollas causadas por una aplicación defectuosa o mala preparación ✅",
            whoSuppliesPaint: "Suministramos la pintura porque obtenemos descuentos profesionales en marcas premium. Sin embargo, si ya compraste la pintura, podemos ajustar el presupuesto para cubrir solo la mano de obra 🪣",
            teamSize: "Para trabajos residenciales estándar, enviamos un equipo de 1 a 2 pintores. Para grandes trabajos comerciales, enviamos de 4 a 8 pintores para acelerar el proceso 👥",
            changeColor: "Podemos cambiar el color, pero esto generará un cargo adicional. Deberás cubrir el costo de la nueva pintura y la mano de obra por repintar 🔄",
            certifications: "Somos profesionales totalmente registrados, y nuestros pintores cuentan con certificaciones profesionales acreditadas en pintura, decoración y seguridad en el sitio 🎓",
            // Meter-based pricing questions
            metersToCover: "¡Usa nuestra calculadora de precios en la parte superior de la página! Arrastra el control para ver cuántos m² tienes y el precio estimado. Por ejemplo: un dormitorio pequeño (~5m² de suelo) cuesta 200€-450€, uno mediano (~12m²) cuesta 250€-600€ 📏",
            roomSizeMeters: "Tamaños promedio de habitaciones: Dormitorio (~5m² de suelo), Salón (~20m²), Cocina (~15m²). Usa nuestra calculadora arriba para precios exactos según tus m² 🏠",
            pricePerMeter: "Nuestros precios por m²: Paredes 8€-17€/m², Techos 10€-20€/m², Proyección de látex 7€-12€/m². Consulta nuestra calculadora de precios para precios de proyecto 💰",
            howManyMeters: "Indícanos las dimensiones de tu habitación (largo × ancho × alto) y calcularemos el m² exacto. O usa nuestra calculadora interactiva en la parte superior de la página 📐",
            bedroomMeters: "Un dormitorio estándar tiene entre 4 y 6 m² de superficie de pared por pared. Con 4 paredes, son 16-24 m² en total. Precio: 200€-450€ para dormitorios pequeños 🛏️",
            livingRoomMeters: "Un salón tiene en promedio 20-30 m² de superficie de pared. Precio: 350€-900€ para salones grandes 🛋️",
            kitchenMeters: "Una cocina tiene aproximadamente 15-20 m² de superficie (techo incluido). Precio: 250€-600€ 🍳",
            bathroomMeters: "Un baño tiene 8-12 m² de superficie. Precio: 200€-400€ 🚿",
            wholeHouseMeters: "Casa completa: apartamento de 1 dormitorio ~50-80 m² (1.500€-2.500€), casa de 2 dormitorios ~80-120 m² (2.200€-3.600€), casa familiar de 3 dormitorios ~120-180 m² (3.500€-5.500€) 🏡",
            default: "Gracias por tu mensaje. Uno de nuestros decoradores se pondrá en contacto contigo en breve. Para asistencia inmediata, llama al +31684258077."
        }
    },
    italian: {
        keywords: ["quanto", "costo", "prezzo", "cosa", "come", "quando", "dove", "perché", "può", "aiuto", "domanda", "pittore", "vernice", "decorazione", "parete", "soffitto", "esterno", "interno", "colore", "consiglio", "ciao", "salve", "grazie", "buongiorno", "preventivo", "gratis", "stanza", "appartamento", "servizio", "ufficio", "carta da parati", "fuori", "tempo", "prenotazione", "mobili", "pulire", "riparare", "posizione", "amsterdam", "viaggiare", "recensione", "urgente", "notte", "pagamento", "acconto", "arrivederci", "superficie", "battiscopa", "finestra", "fragile", "elettronica", "crepa", "buco", "cucina", "bagno", "satinato", "umidità", "muffa", "scuro", "chiaro", "odore", "rimuovere", "colla", "tappeto", "legno", "inverno", "temperatura", "appendere", "quadro", "azienda", "marchio", "assicurato", "assicurazione", "computer", "server", "altezza", "impalcatura", "scadenza", "apertura", "linea", "segnaletica", "parcheggio", "fuoco", "rifiuti", "consulenza", "visita", "valido", "forfettario", "deposito", "garanzia", "squadra", "pittori", "cambiare", "certificazione", "qualificato", "metro", "m2", "m²", "quadrato", "area", "dimensione", "calcolatrice", "camera da letto", "soggiorno", "cucina", "bagno", "progetto", "durata", "giorni", "ore", "stima"],
        responses: {
            greeting: "Ciao 👋 Benvenuto da Jone`s Paint & Decorators. Come possiamo aiutarti oggi?",
            hi: "Ciao 😊 Stai cercando servizi di pittura o decorazione oggi?",
            goodMorning: "Buongiorno ☀️ Come può aiutarti Jone`s Paint & Decorators?",
            pricing: "I prezzi dipendono dalla dimensione della stanza, dalle condizioni delle pareti, dal tipo di vernice e dalla posizione. Possiamo fornirti un preventivo gratuito.",
            freeQuote: "Assolutamente ✅ Inviaci le dimensioni della stanza, foto o dettagli del progetto per un preventivo gratuito.",
            perRoom: "Sì. Possiamo addebitare per stanza, per appartamento o per l'intero progetto, a seconda del lavoro richiesto.",
            apartmentPrice: "I prezzi variano in base alle condizioni e alla finitura della vernice. Carica delle foto o richiedi un sopralluogo per un preventivo esatto.",
            services: "Offriamo pittura di interni, pittura di esterni, tappezzeria, decorazione, pittura di uffici, appartamenti e locali commerciali.",
            offices: "Sì ✅ Offriamo servizi di pittura commerciale e per uffici per aziende ed edifici.",
            wallpaper: "Sì 😊 Installiamo carta da parati, pareti a effetto e finiture decorative.",
            exterior: "Sì. Offriamo pittura esterna per case, edifici e proprietà commerciali.",
            duration: "La maggior parte delle stanze richiede 1-2 giorni a seconda della preparazione e del tempo di asciugatura.",
            availability: "Siamo disponibili dal lunedì al sabato dalle 8:00 alle 18:00.",
            onlineBooking: "Sì ✅ Puoi richiedere una prenotazione direttamente dal modulo di contatto del nostro sito web.",
            supplyPaint: "Sì. Possiamo fornire marche di vernici premium o lavorare con la vernice fornita dal cliente.",
            paintBrands: "Utilizziamo vernici professionali di alta qualità per finiture durature e resistenti.",
            colorHelp: "Sì 🎨 Offriamo consulenza sui colori e consigli di decorazione.",
            furniture: "Sì. Aiutiamo a proteggere e spostare i mobili prima di iniziare i lavori.",
            cleaning: "Assolutamente ✅ Lasciamo tutte le aree pulite e in ordine al termine del progetto.",
            wallRepair: "Sì. Ripariamo crepe, buchi e pareti danneggiate prima di dipingere.",
            location: "Siamo basati ad Amsterdam e offriamo servizi nelle zone circostanti.",
            travel: "Sì 😊 Ci spostiamo presso case, appartamenti, uffici e proprietà commerciali.",
            seeWork: "Sì ✅ Visita la nostra galleria, Instagram, TikTok e Facebook per vedere i progetti completati.",
            reviews: "Sì ⭐ I clienti possono lasciare recensioni su Facebook, Instagram e Google.",
            urgent: "Sì. In base alla disponibilità, possiamo offrire servizi di pittura urgenti.",
            nightWork: "Per progetti commerciali e uffici, possiamo offrire lavoro serale o notturno.",
            payment: "Accettiamo contanti, bonifico bancario e pagamenti online.",
            upfront: "Per i progetti di grandi dimensioni potrebbe essere richiesto un acconto prima dell'inizio dei lavori.",
            thanks: "Di niente 😊 Non vediamo l'ora di lavorare con te.",
            bye: "Grazie per aver visitato Jone`s Paint & Decorators. Buona giornata 👋",
            // Residential Projects
            surfacesIncluded: "Il preventivo copre tutte le pareti della camera da letto, i battiscopa e i telai delle finestre. Soffitti e porte sono esclusi come richiesto 🏠",
            moveFurniture: "Ti preghiamo di rimuovere oggetti fragili, elettronica e piccole decorazioni. Il nostro team sposterà e coprirà i mobili pesanti con teli protettivi 🪑",
            fixCracks: "Raschiamo via i detriti, applichiamo stucco premium, lo lasciamo asciugare e lo levighiamo perfettamente prima di applicare la vernice 🔧",
            kitchenBathroomFinish: "Utilizziamo una finitura satinata o semi-lucida. Queste finiture resistono all'umidità, prevengono la muffa e sono facili da pulire 🚿",
            paintOverDark: "Sì. Applichiamo prima un fondo ad alta coprenza per bloccare il colore scuro, seguito da due mani della tua nuova vernice chiara 🎨",
            paintSmell: "Utilizziamo vernici a basso contenuto di COV (ecologiche). Un leggero odore di vernice di solito scompare entro 24-48 ore con una buona ventilazione 🌬️",
            removeWallpaper: "Sì. Vaporizziamo o applichiamo una soluzione rimuovente per staccare la carta da parati, puliamo i residui di colla e prepariamo la parete 📄",
            paintOnFloor: "Preveniamo questo coprendo tutti i pavimenti con teli robusti e nastrando i bordi. Se accade un incidente, lo puliamo o ripariamo completamente 🛡️",
            winterExterior: "No. La pittura esterna richiede condizioni asciutte e temperature costantemente superiori a 5°C-10°C affinché la vernice aderisca correttamente ❄️",
            hangPictures: "La vernice risulta asciutta al tatto rapidamente, ma impiega circa 5-7 giorni per indurirsi completamente. Attendi una settimana prima di appendere oggetti pesanti 🖼️",
            // Commercial Projects
            overnightPainting: "Sì. Offriamo turni serali, notturni e nel fine settimana per garantire che le tue attività quotidiane non subiscano alcuna interruzione 🌙",
            highTrafficPaint: "Utilizziamo vernice acrilica commerciale resistente all'abrasione. Resiste a traffico pedonale intenso, urti da sedie e pulizie frequenti 🏢",
            matchCorporateColors: "Sì. Se ci fornisci i tuoi codici colore digitali (RAL, Pantone o NCS), possiamo miscelare la vernice con precisione per abbinarla perfettamente al tuo brand 🎯",
            insuredCommercial: "Sì. Disponiamo di un'assicurazione di responsabilità civile completa fino a 5.000.000 € che copre tutti i rischi per le proprietà commerciali 📋",
            protectElectronics: "Sigilliamo completamente tutte le apparecchiature elettroniche e i rack server con teli antistatici e nastro specializzato prima di iniziare i lavori 💻",
            highHeights: "Sì. Il nostro team è completamente formato e certificato per utilizzare piattaforme aeree, sollevatori a pantografo e sistemi di ponteggio professionali 🏗️",
            missedDeadline: "Firmiamo una tempistica contrattuale rigorosa. Impegniamo personale aggiuntivo e turni più lunghi per rispettare la tua scadenza fissa 📅",
            lineMarking: "Sì. Offriamo segnaletica orizzontale in epossidico resistente per pavimenti di magazzini, zone di sicurezza e parcheggi esterni 🅿️",
            fireRetardant: "Sì. Applichiamo rivestimenti di vernice intumescente certificati (ignifughi) conformi alle normative locali di sicurezza per edifici commerciali 🔥",
            wasteDisposal: "Seguiamo linee guida ambientali rigorose. Tutti i rifiuti tossici, i barattoli vuoti e le sostanze chimiche vengono smaltiti tramite un impianto di riciclaggio commerciale autorizzato ♻️",
            // Estimates & Contracts
            freeConsultation: "Sì. Visitiamo la tua proprietà, misuriamo il sito, discutiamo i tuoi obiettivi e forniamo un preventivo scritto dettagliato gratuitamente 💼",
            quoteValid: "I nostri preventivi sono validi 30 giorni dalla data di emissione a causa di occasionali fluttuazioni nei costi dei materiali e dei fornitori di vernici 📆",
            hourlyOrFlat: "Applichiamo una tariffa forfettaria basata sul progetto. Questo ti garantisce di conoscere il costo finale esatto in anticipo, senza sorprese orarie 💰",
            depositSchedule: "Richiediamo un acconto del 20% per garantire la tua data di prenotazione. Il restante 80% è pagabile solo al completamento del progetto 💳",
            rottingMold: "Interrompiamo immediatamente il lavoro in quella zona, ti mostriamo il danno e forniamo un preventivo scritto chiaro e separato per ripararlo prima di dipingere 🍄",
            warranty: "Sì. Offriamo una garanzia di 2 anni che copre scrostamento, sfaldamento o formazione di bolle causati da applicazione difettosa o scarsa preparazione ✅",
            whoSuppliesPaint: "Forniamo noi la vernice perché otteniamo sconti professionali sui marchi premium. Tuttavia, se hai già acquistato la vernice, possiamo modificare il preventivo per coprire solo la manodopera 🪣",
            teamSize: "Per i lavori residenziali standard, inviamo un team di 1-2 pittori. Per i grandi lavori commerciali, inviamo 4-8 pittori per velocizzare il processo 👥",
            changeColor: "Possiamo cambiare il colore, ma ciò comporterà un costo aggiuntivo. Dovrai coprire il costo della nuova vernice e della manodopera per ridipingere 🔄",
            certifications: "Siamo professionisti pienamente registrati, e i nostri pittori possiedono certificazioni professionali accreditate in pittura, decorazione e sicurezza sul cantiere 🎓",
            // Meter-based pricing questions
            metersToCover: "Usa il nostro calcolatore di prezzi in cima alla pagina! Trascina il cursore per vedere quanti m² hai e il prezzo stimato. Ad esempio: una camera piccola (~5m² di pavimento) costa 200€-450€, una camera media (~12m²) costa 250€-600€ 📏",
            roomSizeMeters: "Dimensioni medie delle stanze: Camera da letto (~5m² di superficie), Soggiorno (~20m²), Cucina (~15m²). Usa il nostro calcolatore in cima alla pagina per prezzi esatti in base ai tuoi m² 🏠",
            pricePerMeter: "I nostri prezzi al m²: Pareti 8€-17€/m², Soffitti 10€-20€/m², Spruzzatura al lattice 7€-12€/m². Consulta il nostro calcolatore di prezzi per i prezzi del progetto 💰",
            howManyMeters: "Indicaci le dimensioni della tua stanza (lunghezza × larghezza × altezza) e calcoleremo i m² esatti. Oppure usa il nostro calcolatore interattivo in cima alla pagina 📐",
            bedroomMeters: "Una camera da letto standard ha circa 4-6 m² di superficie di parete per parete. Con 4 pareti, sono 16-24 m² in totale. Prezzo: 200€-450€ per camere piccole 🛏️",
            livingRoomMeters: "Un soggiorno ha in media 20-30 m² di superficie di parete. Prezzo: 350€-900€ per soggiorni grandi 🛋️",
            kitchenMeters: "Una cucina ha circa 15-20 m² di superficie (soffitto incluso). Prezzo: 250€-600€ 🍳",
            bathroomMeters: "Un bagno ha 8-12 m² di superficie. Prezzo: 200€-400€ 🚿",
            wholeHouseMeters: "Casa intera: appartamento con 1 camera ~50-80 m² (1.500€-2.500€), casa con 2 camere ~80-120 m² (2.200€-3.600€), casa familiare con 3 camere ~120-180 m² (3.500€-5.500€) 🏡",
            default: "Grazie per il tuo messaggio. Uno dei nostri decoratori ti contatterà a breve. Per assistenza immediata, chiama il +31684258077."
        }
    },
    turkish: {
        keywords: ["ne kadar", "maliyet", "fiyat", "ne", "nasıl", "ne zaman", "nerede", "neden", "yardım", "soru", "ressam", "boya", "dekorasyon", "duvar", "tavan", "dış", "iç", "renk", "tavsiye", "merhaba", "selam", "teşekkür", "günaydın", "teklif", "ücretsiz", "oda", "daire", "hizmet", "ofis", "duvar kağıdı", "dışarıda", "süre", "rezervasyon", "mobilya", "temizlik", "tamir", "konum", "amsterdam", "seyahat", "yorum", "acil", "gece", "ödeme", "peşinat", "hoşça kal", "yüzey", "süpürgelik", "pencere", "kırılgan", "elektronik", "çatlak", "delik", "mutfak", "banyo", "saten", "nem", "küf", "koyu", "açık", "koku", "kaldırmak", "yapıştırıcı", "halı", "parke", "kış", "sıcaklık", "asmak", "tablo", "şirket", "marka", "sigortalı", "sigorta", "bilgisayar", "sunucu", "yükseklik", "iskele", "son tarih", "açılış", "çizgi", "işaretleme", "otopark", "yangın", "atık", "danışma", "ziyaret", "geçerli", "sabit fiyat", "depozito", "garanti", "ekip", "ressamlar", "değiştirmek", "sertifika", "yetkili", "metre", "m2", "m²", "kare", "alan", "boyut", "hesap makinesi", "yatak odası", "oturma odası", "mutfak", "banyo", "proje", "süre", "gün", "saat", "tahmin"],
        responses: {
            greeting: "Merhaba 👋 Jone`s Paint & Decorators'a hoş geldiniz. Bugün size nasıl yardımcı olabiliriz?",
            hi: "Selam 😊 Bugün boya veya dekorasyon hizmeti mi arıyorsunuz?",
            goodMorning: "Günaydın ☀️ Jone`s Paint & Decorators size nasıl yardımcı olabilir?",
            pricing: "Fiyatlar oda büyüklüğüne, duvar durumuna, boya türüne ve konuma göre değişir. Size ücretsiz bir teklif sunabiliriz.",
            freeQuote: "Elbette ✅ Ücretsiz bir teklif için oda ölçülerini, fotoğrafları veya proje detaylarını gönderin.",
            perRoom: "Evet. Gereken işe göre oda başına, daire başına veya tüm proje için ücret alabiliriz.",
            apartmentPrice: "Fiyatlar boyanın durumuna ve kaplamasına göre değişir. Kesin bir teklif için lütfen fotoğraf yükleyin veya inceleme talep edin.",
            services: "İç mekan boyama, dış cephe boyama, duvar kağıdı kaplama, dekorasyon, ofis, daire ve ticari alan boyama hizmetleri sunuyoruz.",
            offices: "Evet ✅ Şirketler ve binalar için ticari ve ofis boyama hizmetleri sunuyoruz.",
            wallpaper: "Evet 😊 Duvar kağıdı, aksan duvarlar ve dekoratif kaplamalar uyguluyoruz.",
            exterior: "Evet. Evler, binalar ve ticari mülkler için dış cephe boyama hizmeti sunuyoruz.",
            duration: "Çoğu oda, hazırlık ve kuruma süresine bağlı olarak 1-2 gün sürer.",
            availability: "Pazartesiden Cumartesiye 08:00-18:00 saatleri arasında hizmet veriyoruz.",
            onlineBooking: "Evet ✅ Web sitemizdeki iletişim formu üzerinden doğrudan rezervasyon talep edebilirsiniz.",
            supplyPaint: "Evet. Premium boya markaları temin edebilir veya müşteri tarafından sağlanan boyayla çalışabiliriz.",
            paintBrands: "Kalıcı ve dayanıklı sonuçlar için yüksek kaliteli profesyonel boyalar kullanıyoruz.",
            colorHelp: "Evet 🎨 Renk danışmanlığı ve dekorasyon tavsiyeleri sunuyoruz.",
            furniture: "Evet. İşe başlamadan önce mobilyaları korumaya ve taşımaya yardımcı oluyoruz.",
            cleaning: "Kesinlikle ✅ Proje tamamlandıktan sonra tüm alanları temiz ve düzenli bırakıyoruz.",
            wallRepair: "Evet. Boyamadan önce çatlakları, delikleri ve hasarlı duvarları onarıyoruz.",
            location: "Amsterdam merkezliyiz ve çevre bölgelere hizmet veriyoruz.",
            travel: "Evet 😊 Evlere, dairelere, ofislere ve ticari mülklere gidiyoruz.",
            seeWork: "Evet ✅ Tamamlanmış projeleri görmek için galerimizi, Instagram, TikTok ve Facebook sayfalarımızı ziyaret edin.",
            reviews: "Evet ⭐ Müşteriler Facebook, Instagram ve Google üzerinden yorum bırakabilir.",
            urgent: "Evet. Müsaitlik durumuna göre acil boya hizmetleri sunabiliriz.",
            nightWork: "Ticari projeler ve ofisler için akşam veya gece çalışması sunabiliriz.",
            payment: "Nakit, banka havalesi ve online ödemeleri kabul ediyoruz.",
            upfront: "Büyük projelerde işe başlamadan önce peşinat gerekebilir.",
            thanks: "Rica ederiz 😊 Sizinle çalışmayı sabırsızlıkla bekliyoruz.",
            bye: "Jone`s Paint & Decorators'ı ziyaret ettiğiniz için teşekkürler. İyi günler 👋",
            // Residential Projects
            surfacesIncluded: "Teklif, yatak odasındaki tüm duvarları, süpürgelikleri ve pencere çerçevelerini kapsar. Talep edildiği gibi tavanlar ve kapılar hariçtir 🏠",
            moveFurniture: "Lütfen kırılgan eşyaları, elektronik cihazları ve küçük dekorasyonları kaldırın. Ekibimiz ağır mobilyaları koruyucu plastikle taşıyıp koruyacaktır 🪑",
            fixCracks: "Gevşek kalıntıları kazıyoruz, kaliteli macun uyguluyoruz, kurumaya bırakıyoruz ve boya uygulamadan önce mükemmel şekilde zımparalıyoruz 🔧",
            kitchenBathroomFinish: "Saten veya yarı parlak bir kaplama kullanıyoruz. Bu kaplamalar neme dayanıklıdır, küf oluşumunu önler ve kolayca temizlenir 🚿",
            paintOverDark: "Evet. Koyu rengi kapatmak için önce yüksek kapatıcı bir astar uyguluyoruz, ardından yeni açık renk boyanızın iki katını sürüyoruz 🎨",
            paintSmell: "Düşük VOC'li (çevre dostu) boyalar kullanıyoruz. Hafif boya kokusu genellikle iyi havalandırma ile 24-48 saat içinde kaybolur 🌬️",
            removeWallpaper: "Evet. Duvar kağıdını çıkarmak için buharlama veya çözücü uyguluyoruz, yapıştırıcı kalıntılarını temizliyoruz ve duvarı hazırlıyoruz 📄",
            paintOnFloor: "Tüm zeminleri dayanıklı örtülerle kaplayıp kenarları bantlayarak bunu önlüyoruz. Bir kaza olursa tamamen temizliyor veya onarıyoruz 🛡️",
            winterExterior: "Hayır. Dış cephe boyası için boyanın düzgün yapışması adına kuru koşullar ve sürekli olarak 5°C-10°C üzerinde sıcaklık gereklidir ❄️",
            hangPictures: "Boya dokunulduğunda hızlıca kuru hissettirir, ancak tamamen sertleşmesi yaklaşık 5-7 gün sürer. Lütfen ağır eşyalar asmadan önce bir hafta bekleyin 🖼️",
            // Commercial Projects
            overnightPainting: "Evet. Günlük operasyonlarınızın kesintiye uğramaması için akşam, gece ve hafta sonu vardiyaları sunuyoruz 🌙",
            highTrafficPaint: "Sürtünmeye dayanıklı ticari akrilik boya kullanıyoruz. Yoğun yaya trafiğine, sandalye çarpmalarına ve sık temizliğe dayanır 🏢",
            matchCorporateColors: "Evet. Dijital renk kodlarınızı (RAL, Pantone veya NCS) verirseniz, markanıza tam olarak uyacak şekilde boyayı hassas bir şekilde karıştırabiliriz 🎯",
            insuredCommercial: "Evet. Tüm ticari mülk risklerini kapsayan 5.000.000 €'ya kadar kapsamlı sorumluluk sigortamız bulunmaktadır 📋",
            protectElectronics: "İşe başlamadan önce tüm elektronik ekipmanları ve sunucu kabinlerini antistatik plastik ve özel bantla tamamen kaplıyoruz 💻",
            highHeights: "Evet. Ekibimiz yükseltilmiş platformlar, makas asansörler ve profesyonel iskele sistemleri kullanmak için tam eğitimli ve sertifikalıdır 🏗️",
            missedDeadline: "Sıkı bir sözleşme takvimi imzalıyoruz. Sabit son teslim tarihinizi karşılamak için ek personel ve daha uzun vardiyalar kullanıyoruz 📅",
            lineMarking: "Evet. Depo zeminleri, güvenlik bölgeleri ve dış otoparklar için dayanıklı epoksi çizgi işaretleme hizmeti sunuyoruz 🅿️",
            fireRetardant: "Evet. Yerel ticari bina güvenlik düzenlemelerine uygun sertifikalı intumesan (yanmaz) boya kaplamaları uyguluyoruz 🔥",
            wasteDisposal: "Sıkı çevre yönergelerini takip ediyoruz. Tüm zehirli maddeler, boş kutular ve kimyasallar lisanslı bir ticari geri dönüşüm tesisi aracılığıyla bertaraf edilir ♻️",
            // Estimates & Contracts
            freeConsultation: "Evet. Mülkünüzü ziyaret ediyor, alanı ölçüyor, hedeflerinizi konuşuyor ve ücretsiz olarak ayrıntılı yazılı bir teklif sunuyoruz 💼",
            quoteValid: "Malzeme ve boya tedarikçisi maliyetlerindeki zaman zaman dalgalanmalar nedeniyle teklifimiz düzenleme tarihinden itibaren 30 gün geçerlidir 📆",
            hourlyOrFlat: "Projeye dayalı sabit bir ücret uyguluyoruz. Bu sayede sürpriz saatlik ücretler olmadan nihai maliyeti önceden tam olarak bilirsiniz 💰",
            depositSchedule: "Rezervasyon tarihinizi güvence altına almak için %20 peşinat istiyoruz. Kalan %80 yalnızca proje başarıyla tamamlandıktan sonra ödenir 💳",
            rottingMold: "O bölgedeki işi hemen durduruyor, hasarı size gösteriyor ve boyamadan önce onarım için net, ayrı bir yazılı fiyat sunuyoruz 🍄",
            warranty: "Evet. Hatalı uygulama veya yetersiz hazırlıktan kaynaklanan dökülme, soyulma veya kabarmayı kapsayan 2 yıllık garanti sunuyoruz ✅",
            whoSuppliesPaint: "Boyayı biz temin ediyoruz çünkü premium markalarda profesyonel indirimler alıyoruz. Ancak boyayı zaten satın aldıysanız, teklifi yalnızca işçiliği kapsayacak şekilde ayarlayabiliriz 🪣",
            teamSize: "Standart konut işleri için 1-2 kişilik bir boyacı ekibi gönderiyoruz. Büyük ticari işler için süreci hızlandırmak amacıyla 4-8 boyacı gönderiyoruz 👥",
            changeColor: "Rengi değiştirebiliriz, ancak bu ek bir ücrete neden olacaktır. Yeni boyanın maliyetini ve yeniden boyama işçiliğini karşılamanız gerekecektir 🔄",
            certifications: "Tamamen kayıtlı profesyonelleriz ve boyacılarımız boyama, dekorasyon ve saha güvenliği alanlarında akredite mesleki sertifikalara sahiptir 🎓",
            // Meter-based pricing questions
            metersToCover: "Sayfanın üstündeki fiyat hesaplayıcımızı kullanın! Kaydırıcıyı sürükleyerek kaç m² olduğunuzu ve tahmini fiyatı görün. Örneğin: küçük bir yatak odası (~5m² zemin) 200€-450€, orta boy bir oda (~12m²) 250€-600€ tutar 📏",
            roomSizeMeters: "Ortalama oda boyutları: Yatak odası (~5m² zemin), Oturma odası (~20m²), Mutfak (~15m²). m²'nize göre kesin fiyatlar için sayfanın üstündeki hesaplayıcıyı kullanın 🏠",
            pricePerMeter: "m² başına fiyatlarımız: Duvarlar 8€-17€/m², Tavanlar 10€-20€/m², Lateks püskürtme 7€-12€/m². Proje fiyatları için fiyat hesaplayıcımıza bakın 💰",
            howManyMeters: "Odanızın ölçülerini (uzunluk × genişlik × yükseklik) bize verin, kesin m²'yi hesaplayalım. Ya da sayfanın üstündeki interaktif hesaplayıcımızı kullanın 📐",
            bedroomMeters: "Standart bir yatak odasının duvar başına ortalama 4-6 m² yüzey alanı vardır. 4 duvarla toplam 16-24 m² eder. Fiyat: küçük yatak odaları için 200€-450€ 🛏️",
            livingRoomMeters: "Bir oturma odasının ortalama 20-30 m² duvar yüzeyi vardır. Fiyat: büyük oturma odaları için 350€-900€ 🛋️",
            kitchenMeters: "Bir mutfağın yaklaşık 15-20 m² alanı vardır (tavan dahil). Fiyat: 250€-600€ 🍳",
            bathroomMeters: "Bir banyonun 8-12 m² alanı vardır. Fiyat: 200€-400€ 🚿",
            wholeHouseMeters: "Tüm ev: 1 yatak odalı daire ~50-80 m² (1.500€-2.500€), 2 yatak odalı ev ~80-120 m² (2.200€-3.600€), 3 yatak odalı aile evi ~120-180 m² (3.500€-5.500€) 🏡",
            default: "Mesajınız için teşekkürler. Dekoratörlerimizden biri kısa süre içinde sizinle iletişime geçecektir. Acil yardım için +31684258077'yi arayın."
        }
    },
    arabic: {
        keywords: ["كم", "تكلفة", "سعر", "ماذا", "كيف", "متى", "أين", "لماذا", "مساعدة", "سؤال", "دهان", "طلاء", "ديكور", "جدار", "سقف", "خارجي", "داخلي", "لون", "نصيحة", "مرحبا", "مرحبًا", "أهلا", "شكرا", "صباح الخير", "عرض", "مجاني", "غرفة", "شقة", "خدمة", "مكتب", "ورق حائط", "بالخارج", "وقت", "حجز", "أثاث", "تنظيف", "إصلاح", "موقع", "أمستردام", "سفر", "تقييم", "عاجل", "ليل", "دفع", "عربون", "وداعا", "مع السلامة", "سطح", "أفاريز", "نافذة", "قابل للكسر", "إلكترونيات", "شق", "ثقب", "مطبخ", "حمام", "ساتان", "رطوبة", "عفن", "داكن", "فاتح", "رائحة", "إزالة", "غراء", "سجاد", "خشب", "شتاء", "درجة حرارة", "تعليق", "لوحة", "شركة", "علامة تجارية", "مؤمن", "تأمين", "كمبيوتر", "خادم", "ارتفاع", "سقالة", "الموعد النهائي", "افتتاح", "خط", "علامات", "موقف سيارات", "حريق", "نفايات", "استشارة", "زيارة", "صالح", "سعر ثابت", "وديعة", "ضمان", "فريق", "دهانين", "تغيير", "شهادة", "مؤهل", "متر", "م2", "مربع", "مساحة", "حجم", "حاسبة", "غرفة نوم", "غرفة معيشة", "مطبخ", "حمام", "مشروع", "مدة", "أيام", "ساعات", "تقدير"],
        responses: {
            greeting: "مرحبًا 👋 أهلاً بكم في Jone`s Paint & Decorators. كيف يمكننا مساعدتكم اليوم؟",
            hi: "أهلاً 😊 هل تبحثون عن خدمات دهان أو ديكور اليوم؟",
            goodMorning: "صباح الخير ☀️ كيف يمكن لـ Jone`s Paint & Decorators مساعدتكم؟",
            pricing: "تعتمد الأسعار على حجم الغرفة، حالة الجدران، نوع الطلاء والموقع. يمكننا تقديم عرض سعر مجاني لكم.",
            freeQuote: "بالتأكيد ✅ أرسلوا لنا أبعاد الغرفة أو الصور أو تفاصيل المشروع للحصول على عرض سعر مجاني.",
            perRoom: "نعم. يمكننا احتساب السعر لكل غرفة، لكل شقة، أو للمشروع بالكامل حسب العمل المطلوب.",
            apartmentPrice: "تختلف الأسعار حسب حالة الطلاء والتشطيب. يرجى تحميل صور أو طلب معاينة للحصول على عرض سعر دقيق.",
            services: "نقدم دهان الديكورات الداخلية، الدهان الخارجي، تركيب ورق الحائط، الديكور، دهان المكاتب والشقق والمحلات التجارية.",
            offices: "نعم ✅ نقدم خدمات الدهان التجاري والمكتبي للشركات والمباني.",
            wallpaper: "نعم 😊 نقوم بتركيب ورق الحائط والجدران المميزة والتشطيبات الزخرفية.",
            exterior: "نعم. نقدم خدمة الدهان الخارجي للمنازل والمباني والعقارات التجارية.",
            duration: "تستغرق معظم الغرف 1-2 يوم حسب التحضير ووقت الجفاف.",
            availability: "نحن متاحون من الاثنين إلى السبت من الساعة 8 صباحًا حتى 6 مساءً.",
            onlineBooking: "نعم ✅ يمكنكم طلب حجز مباشرة عبر نموذج الاتصال في موقعنا الإلكتروني.",
            supplyPaint: "نعم. يمكننا توفير ماركات طلاء ممتازة أو العمل بالطلاء الذي يوفره العميل.",
            paintBrands: "نستخدم دهانات احترافية عالية الجودة لنتائج دائمة وطويلة الأمد.",
            colorHelp: "نعم 🎨 نقدم استشارات اختيار الألوان ونصائح الديكور.",
            furniture: "نعم. نساعد في حماية ونقل الأثاث قبل بدء العمل.",
            cleaning: "بالتأكيد ✅ نترك جميع المناطق نظيفة ومرتبة بعد الانتهاء من المشروع.",
            wallRepair: "نعم. نقوم بإصلاح الشقوق والثقوب والجدران التالفة قبل الدهان.",
            location: "مقرنا في أمستردام، ونقدم خدماتنا في المناطق المحيطة.",
            travel: "نعم 😊 نتنقل إلى المنازل والشقق والمكاتب والعقارات التجارية.",
            seeWork: "نعم ✅ زوروا معرض أعمالنا وحساباتنا على إنستغرام وتيك توك وفيسبوك لمشاهدة المشاريع المنجزة.",
            reviews: "نعم ⭐ يمكن للعملاء ترك تقييمات على فيسبوك وإنستغرام وجوجل.",
            urgent: "نعم. حسب التوفر، يمكننا تقديم خدمات دهان عاجلة.",
            nightWork: "بالنسبة للمشاريع التجارية والمكاتب، يمكننا تقديم العمل مساءً أو ليلاً.",
            payment: "نقبل الدفع نقدًا، بالتحويل البنكي، وعبر الإنترنت.",
            upfront: "بالنسبة للمشاريع الكبيرة، قد يُطلب دفع عربون قبل بدء العمل.",
            thanks: "على الرحب والسعة 😊 نتطلع للعمل معكم.",
            bye: "شكرًا لزيارتكم Jone`s Paint & Decorators. نتمنى لكم يومًا سعيدًا 👋",
            // Residential Projects
            surfacesIncluded: "يشمل عرض السعر جميع جدران غرفة النوم والأفاريز وإطارات النوافذ. الأسقف والأبواب مستثناة حسب الطلب 🏠",
            moveFurniture: "يرجى إزالة الأغراض القابلة للكسر والإلكترونيات والزينة الصغيرة. سيقوم فريقنا بنقل وتغطية الأثاث الثقيل بأغطية بلاستيكية واقية 🪑",
            fixCracks: "نقوم بكشط الحطام الفضفاض، ووضع معجون عالي الجودة، وتركه يجف، ثم صنفرته بشكل مثالي قبل وضع الطلاء 🔧",
            kitchenBathroomFinish: "نستخدم تشطيب ساتان أو نصف لامع. هذه التشطيبات مقاومة للرطوبة، وتمنع تكوّن العفن، وسهلة التنظيف 🚿",
            paintOverDark: "نعم. نضع أولاً طبقة أساس عالية التغطية لحجب اللون الداكن، تليها طبقتان من طلائكم الفاتح الجديد 🎨",
            paintSmell: "نستخدم دهانات منخفضة المركبات العضوية المتطايرة (صديقة للبيئة). عادة ما تختفي أي رائحة خفيفة خلال 24-48 ساعة مع تهوية جيدة 🌬️",
            removeWallpaper: "نعم. نقوم بالتبخير أو وضع محلول مزيل لإزالة ورق الحائط، وتنظيف بقايا الغراء، وتحضير الجدار 📄",
            paintOnFloor: "نمنع ذلك بتغطية جميع الأرضيات بأغطية سميكة وتثبيت الحواف بشريط لاصق. وفي حال حدوث أي طارئ، نقوم بالتنظيف أو الإصلاح بالكامل 🛡️",
            winterExterior: "لا. يتطلب الدهان الخارجي ظروفًا جافة ودرجات حرارة تزيد باستمرار عن 5-10 درجات مئوية حتى يلتصق الطلاء بشكل صحيح ❄️",
            hangPictures: "يجف الطلاء ملمسيًا بسرعة، لكنه يحتاج حوالي 5-7 أيام ليتصلب تمامًا. يرجى الانتظار أسبوعًا قبل تعليق أي أغراض ثقيلة 🖼️",
            // Commercial Projects
            overnightPainting: "نعم. نقدم مناوبات مسائية وليلية وفي عطلة نهاية الأسبوع حتى لا تتأثر أعمالكم اليومية إطلاقًا 🌙",
            highTrafficPaint: "نستخدم طلاء أكريليك تجاري مقاوم للاحتكاك. يتحمل الحركة الكثيفة، واصطدام الكراسي، والتنظيف المتكرر 🏢",
            matchCorporateColors: "نعم. إذا زودتمونا بأكواد الألوان الرقمية (RAL أو Pantone أو NCS)، يمكننا مزج الطلاء بدقة ليطابق هويتكم التجارية تمامًا 🎯",
            insuredCommercial: "نعم. لدينا تأمين مسؤولية شامل يصل إلى 5,000,000 يورو يغطي جميع مخاطر العقارات التجارية 📋",
            protectElectronics: "نقوم بتغليف جميع الأجهزة الإلكترونية وخزائن الخوادم بالكامل بأغطية بلاستيكية مضادة للكهرباء الساكنة وشريط متخصص قبل بدء العمل 💻",
            highHeights: "نعم. فريقنا مدرب ومعتمد بالكامل لاستخدام المنصات المرتفعة والرافعات المقصية وأنظمة السقالات الاحترافية 🏗️",
            missedDeadline: "نوقع جدولاً زمنيًا تعاقديًا صارمًا. نخصص طاقمًا إضافيًا ومناوبات أطول للوفاء بموعدكم النهائي الثابت 📅",
            lineMarking: "نعم. نقدم خدمة رسم خطوط الإيبوكسي المتينة لأرضيات المستودعات ومناطق السلامة ومواقف السيارات الخارجية 🅿️",
            fireRetardant: "نعم. نضع طبقات طلاء منتفخة معتمدة (مقاومة للحريق) تتوافق مع لوائح السلامة المحلية للمباني التجارية 🔥",
            wasteDisposal: "نتبع إرشادات بيئية صارمة. يتم التخلص من جميع المواد السامة والعلب الفارغة والمواد الكيميائية عبر منشأة إعادة تدوير تجارية مرخصة ♻️",
            // Estimates & Contracts
            freeConsultation: "نعم. نزور عقاركم، ونقيس الموقع، ونناقش أهدافكم، ونقدم عرض سعر مكتوب ومفصل مجانًا 💼",
            quoteValid: "عروض أسعارنا صالحة لمدة 30 يومًا من تاريخ الإصدار نظرًا للتقلبات العرضية في تكاليف المواد وموردي الطلاء 📆",
            hourlyOrFlat: "نحتسب سعرًا ثابتًا بناءً على المشروع. هذا يضمن لكم معرفة التكلفة النهائية الدقيقة مسبقًا، دون أي رسوم مفاجئة بالساعة 💰",
            depositSchedule: "نطلب عربونًا بنسبة 20% لتأكيد موعد حجزكم. تُدفع نسبة الـ 80% المتبقية فقط بعد إتمام المشروع بنجاح 💳",
            rottingMold: "نوقف العمل في تلك المنطقة فورًا، ونطلعكم على الضرر، ونقدم سعرًا مكتوبًا واضحًا ومنفصلاً للإصلاح قبل الدهان 🍄",
            warranty: "نعم. نقدم ضمانًا لمدة عامين يغطي التقشر أو التشقق أو التقرح الناتج عن سوء التطبيق أو التحضير غير الجيد ✅",
            whoSuppliesPaint: "نوفر نحن الطلاء لأننا نحصل على خصومات احترافية على الماركات الممتازة. ومع ذلك، إذا كنتم قد اشتريتم الطلاء بالفعل، يمكننا تعديل عرض السعر ليغطي أجور العمل فقط 🪣",
            teamSize: "بالنسبة للأعمال السكنية القياسية، نرسل فريقًا من 1-2 دهان. أما بالنسبة للأعمال التجارية الكبيرة، نرسل من 4 إلى 8 دهانين لتسريع العملية 👥",
            changeColor: "يمكننا تغيير اللون، لكن هذا سيترتب عليه رسوم إضافية. ستحتاجون لتغطية تكلفة الطلاء الجديد وأجور إعادة الدهان 🔄",
            certifications: "نحن محترفون مسجلون بالكامل، ودهانونا يحملون شهادات مهنية معتمدة في الدهان والديكور والسلامة في الموقع 🎓",
            // Meter-based pricing questions
            metersToCover: "استخدموا حاسبة الأسعار الموجودة أعلى الصفحة! اسحبوا الشريط لمعرفة عدد الأمتار المربعة لديكم والسعر التقديري. على سبيل المثال: غرفة نوم صغيرة (~5 م² أرضية) تكلف 200-450 يورو، وغرفة متوسطة (~12 م²) تكلف 250-600 يورو 📏",
            roomSizeMeters: "متوسط أحجام الغرف: غرفة النوم (~5 م² أرضية)، غرفة المعيشة (~20 م²)، المطبخ (~15 م²). استخدموا حاسبتنا أعلى الصفحة للحصول على أسعار دقيقة حسب أمتاركم المربعة 🏠",
            pricePerMeter: "أسعارنا لكل متر مربع: الجدران 8-17 يورو/م²، الأسقف 10-20 يورو/م²، رش اللاتكس 7-12 يورو/م². راجعوا حاسبة الأسعار لدينا لمعرفة أسعار المشاريع 💰",
            howManyMeters: "أعطونا أبعاد غرفتكم (الطول × العرض × الارتفاع) وسنحسب لكم المساحة الدقيقة بالمتر المربع. أو استخدموا حاسبتنا التفاعلية أعلى الصفحة 📐",
            bedroomMeters: "غرفة النوم القياسية لديها في المتوسط 4-6 م² من مساحة الجدار لكل جدار. مع 4 جدران، يكون المجموع 16-24 م². السعر: 200-450 يورو للغرف الصغيرة 🛏️",
            livingRoomMeters: "غرفة المعيشة لديها في المتوسط 20-30 م² من مساحة الجدار. السعر: 350-900 يورو لغرف المعيشة الكبيرة 🛋️",
            kitchenMeters: "المطبخ لديه حوالي 15-20 م² من المساحة (شاملة السقف). السعر: 250-600 يورو 🍳",
            bathroomMeters: "الحمام لديه 8-12 م² من المساحة. السعر: 200-400 يورو 🚿",
            wholeHouseMeters: "المنزل بالكامل: شقة بغرفة نوم واحدة ~50-80 م² (1,500-2,500 يورو)، منزل بغرفتي نوم ~80-120 م² (2,200-3,600 يورو)، منزل عائلي بثلاث غرف نوم ~120-180 م² (3,500-5,500 يورو) 🏡",
            default: "شكرًا لرسالتكم. سيتواصل معكم أحد مصممي الديكور لدينا قريبًا. للمساعدة الفورية، اتصلوا بالرقم +31684258077."
        }
    },
    russian: {
        keywords: ["сколько", "стоимость", "цена", "что", "как", "когда", "где", "почему", "помощь", "вопрос", "маляр", "краска", "декор", "стена", "потолок", "снаружи", "внутри", "цвет", "совет", "здравствуйте", "привет", "спасибо", "доброе утро", "смета", "бесплатно", "комната", "квартира", "услуга", "офис", "обои", "снаружи", "время", "бронирование", "мебель", "уборка", "ремонт", "местоположение", "амстердам", "выезжаете", "отзыв", "срочно", "ночь", "оплата", "предоплата", "до свидания", "пока", "поверхность", "плинтус", "окно", "хрупкий", "электроника", "трещина", "дыра", "кухня", "ванная", "сатин", "влажность", "плесень", "тёмный", "светлый", "запах", "удалить", "клей", "ковёр", "паркет", "зима", "температура", "повесить", "картина", "компания", "бренд", "застрахован", "страхование", "компьютер", "сервер", "высота", "леса", "срок", "открытие", "линия", "разметка", "парковка", "огонь", "отходы", "консультация", "визит", "действителен", "фиксированная цена", "депозит", "гарантия", "команда", "маляры", "изменить", "сертификация", "квалифицированный", "метр", "м2", "м²", "квадрат", "площадь", "размер", "калькулятор", "спальня", "гостиная", "кухня", "ванная", "проект", "продолжительность", "дни", "часы", "оценка"],
        responses: {
            greeting: "Здравствуйте 👋 Добро пожаловать в Jone`s Paint & Decorators. Чем мы можем помочь вам сегодня?",
            hi: "Привет 😊 Ищете сегодня услуги по покраске или декору?",
            goodMorning: "Доброе утро ☀️ Чем Jone`s Paint & Decorators может вам помочь?",
            pricing: "Цены зависят от размера комнаты, состояния стен, типа краски и местоположения. Мы можем предоставить бесплатную смету.",
            freeQuote: "Конечно ✅ Пришлите нам размеры комнаты, фотографии или детали проекта для бесплатной сметы.",
            perRoom: "Да. Мы можем взимать плату за комнату, за квартиру или за весь проект в зависимости от требуемой работы.",
            apartmentPrice: "Цены варьируются в зависимости от состояния и отделки краски. Пожалуйста, загрузите фотографии или запросите осмотр для точной сметы.",
            services: "Мы предлагаем покраску интерьера, покраску экстерьера, поклейку обоев, декор, покраску офисов, квартир и коммерческих помещений.",
            offices: "Да ✅ Мы предлагаем услуги коммерческой и офисной покраски для компаний и зданий.",
            wallpaper: "Да 😊 Мы клеим обои, акцентные стены и декоративные покрытия.",
            exterior: "Да. Мы предлагаем покраску экстерьера для домов, зданий и коммерческой недвижимости.",
            duration: "Большинство комнат занимает 1-2 дня в зависимости от подготовки и времени высыхания.",
            availability: "Мы работаем с понедельника по субботу с 8:00 до 18:00.",
            onlineBooking: "Да ✅ Вы можете запросить бронирование прямо через контактную форму на нашем сайте.",
            supplyPaint: "Да. Мы можем предоставить краски премиум-марок или работать с краской, предоставленной заказчиком.",
            paintBrands: "Мы используем высококачественные профессиональные краски для долговечных и стойких результатов.",
            colorHelp: "Да 🎨 Мы предлагаем консультации по цвету и советы по декору.",
            furniture: "Да. Мы помогаем защитить и переместить мебель перед началом работ.",
            cleaning: "Конечно ✅ Мы оставляем все зоны чистыми и убранными после завершения проекта.",
            wallRepair: "Да. Мы устраняем трещины, дыры и повреждённые стены перед покраской.",
            location: "Мы базируемся в Амстердаме и обслуживаем близлежащие районы.",
            travel: "Да 😊 Мы выезжаем в дома, квартиры, офисы и коммерческую недвижимость.",
            seeWork: "Да ✅ Посетите нашу галерею, Instagram, TikTok и Facebook, чтобы увидеть завершённые проекты.",
            reviews: "Да ⭐ Клиенты могут оставлять отзывы на Facebook, Instagram и Google.",
            urgent: "Да. В зависимости от наличия свободного времени мы можем предложить срочные услуги по покраске.",
            nightWork: "Для коммерческих проектов и офисов мы можем предложить работу вечером или ночью.",
            payment: "Мы принимаем наличные, банковский перевод и онлайн-платежи.",
            upfront: "Для крупных проектов может потребоваться предоплата перед началом работ.",
            thanks: "Пожалуйста 😊 Мы с нетерпением ждём сотрудничества с вами.",
            bye: "Спасибо, что посетили Jone`s Paint & Decorators. Хорошего дня 👋",
            // Residential Projects
            surfacesIncluded: "Смета включает все стены спальни, плинтусы и оконные рамы. Потолки и двери исключены по запросу 🏠",
            moveFurniture: "Пожалуйста, уберите хрупкие предметы, электронику и мелкий декор. Наша команда переместит и защитит тяжёлую мебель защитной плёнкой 🪑",
            fixCracks: "Мы соскабливаем рыхлые частицы, наносим качественную шпаклёвку, даём высохнуть, а затем идеально шлифуем перед нанесением краски 🔧",
            kitchenBathroomFinish: "Мы используем сатиновое или полуглянцевое покрытие. Эти покрытия устойчивы к влаге, предотвращают появление плесени и легко моются 🚿",
            paintOverDark: "Да. Сначала мы наносим грунтовку с высокой укрывистостью, чтобы скрыть тёмный цвет, затем два слоя вашей новой светлой краски 🎨",
            paintSmell: "Мы используем краски с низким содержанием ЛОС (экологичные). Лёгкий запах краски обычно исчезает в течение 24-48 часов при хорошей вентиляции 🌬️",
            removeWallpaper: "Да. Мы отпариваем или наносим специальный раствор для снятия обоев, очищаем остатки клея и подготавливаем стену 📄",
            paintOnFloor: "Мы предотвращаем это, накрывая все полы прочными защитными материалами и проклеивая края. Если что-то случится, мы полностью устраним последствия 🛡️",
            winterExterior: "Нет. Для наружной покраски требуются сухие условия и стабильная температура выше 5°C-10°C, чтобы краска правильно держалась ❄️",
            hangPictures: "Краска быстро высыхает на ощупь, но полностью затвердевает примерно за 5-7 дней. Пожалуйста, подождите неделю перед тем, как вешать тяжёлые предметы 🖼️",
            // Commercial Projects
            overnightPainting: "Да. Мы предлагаем вечерние, ночные и выездные смены по выходным, чтобы ваша ежедневная работа не прерывалась 🌙",
            highTrafficPaint: "Мы используем коммерческую акриловую краску, устойчивую к истиранию. Она выдерживает интенсивное движение, удары стульями и частую уборку 🏢",
            matchCorporateColors: "Да. Если вы предоставите нам цифровые коды цветов (RAL, Pantone или NCS), мы сможем точно подобрать краску под ваш бренд 🎯",
            insuredCommercial: "Да. У нас есть комплексное страхование ответственности на сумму до 5 000 000 €, покрывающее все риски коммерческой недвижимости 📋",
            protectElectronics: "Мы полностью защищаем всё электронное оборудование и серверные стойки антистатической плёнкой и специальным скотчем перед началом работ 💻",
            highHeights: "Да. Наша команда полностью обучена и сертифицирована для работы с подъёмными платформами, ножничными подъёмниками и профессиональными системами лесов 🏗️",
            missedDeadline: "Мы подписываем строгий договорной график. Мы привлекаем дополнительный персонал и более длинные смены, чтобы уложиться в ваш фиксированный срок 📅",
            lineMarking: "Да. Мы предлагаем прочную эпоксидную разметку линий для складских полов, зон безопасности и наружных парковок 🅿️",
            fireRetardant: "Да. Мы наносим сертифицированные вспучивающиеся (огнестойкие) покрытия, соответствующие местным нормам безопасности для коммерческих зданий 🔥",
            wasteDisposal: "Мы соблюдаем строгие экологические нормы. Все токсичные материалы, пустые банки и химикаты утилизируются через лицензированный коммерческий центр переработки ♻️",
            // Estimates & Contracts
            freeConsultation: "Да. Мы посещаем ваш объект, измеряем площадь, обсуждаем ваши цели и бесплатно предоставляем подробную письменную смету 💼",
            quoteValid: "Наши сметы действительны в течение 30 дней с даты выдачи из-за периодических колебаний стоимости материалов и поставщиков краски 📆",
            hourlyOrFlat: "Мы устанавливаем фиксированную цену за проект. Это гарантирует, что вы заранее знаете точную итоговую стоимость без неожиданных почасовых начислений 💰",
            depositSchedule: "Мы требуем предоплату в размере 20% для подтверждения даты бронирования. Оставшиеся 80% оплачиваются только после успешного завершения проекта 💳",
            rottingMold: "Мы немедленно прекращаем работу в этой зоне, показываем вам повреждение и предоставляем чёткую отдельную письменную смету на ремонт перед покраской 🍄",
            warranty: "Да. Мы предоставляем 2-летнюю гарантию, покрывающую отслаивание, шелушение или вздутие, вызванные неправильным нанесением или плохой подготовкой ✅",
            whoSuppliesPaint: "Мы предоставляем краску, поскольку получаем профессиональные скидки на премиальные марки. Однако, если вы уже купили краску, мы можем скорректировать смету так, чтобы она покрывала только работу 🪣",
            teamSize: "Для стандартных жилых работ мы направляем команду из 1-2 маляров. Для крупных коммерческих работ мы направляем от 4 до 8 маляров, чтобы ускорить процесс 👥",
            changeColor: "Мы можем изменить цвет, но это повлечёт дополнительную плату. Вам нужно будет покрыть стоимость новой краски и работы по перекрашиванию 🔄",
            certifications: "Мы полностью зарегистрированные профессионалы, и наши маляры имеют аккредитованные профессиональные сертификаты в области покраски, декора и безопасности на объекте 🎓",
            // Meter-based pricing questions
            metersToCover: "Используйте наш калькулятор цен вверху страницы! Перетащите ползунок, чтобы увидеть, сколько у вас м² и примерную цену. Например: небольшая спальня (~5м² пола) стоит 200€-450€, средняя комната (~12м²) — 250€-600€ 📏",
            roomSizeMeters: "Средние размеры комнат: Спальня (~5м² пола), Гостиная (~20м²), Кухня (~15м²). Используйте наш калькулятор вверху страницы для точных цен по вашим м² 🏠",
            pricePerMeter: "Наши цены за м²: Стены 8€-17€/м², Потолки 10€-20€/м², Латексное напыление 7€-12€/м². Смотрите наш калькулятор цен для цен на проект 💰",
            howManyMeters: "Сообщите нам размеры вашей комнаты (длина × ширина × высота), и мы рассчитаем точное количество м². Или используйте наш интерактивный калькулятор вверху страницы 📐",
            bedroomMeters: "Стандартная спальня имеет в среднем 4-6 м² площади стены на каждую стену. При 4 стенах это 16-24 м² в общей сложности. Цена: 200€-450€ для небольших спален 🛏️",
            livingRoomMeters: "Гостиная в среднем имеет 20-30 м² площади стен. Цена: 350€-900€ для больших гостиных 🛋️",
            kitchenMeters: "Кухня имеет около 15-20 м² площади (включая потолок). Цена: 250€-600€ 🍳",
            bathroomMeters: "Ванная комната имеет 8-12 м² площади. Цена: 200€-400€ 🚿",
            wholeHouseMeters: "Весь дом: квартира с 1 спальней ~50-80 м² (1 500€-2 500€), дом с 2 спальнями ~80-120 м² (2 200€-3 600€), семейный дом с 3 спальнями ~120-180 м² (3 500€-5 500€) 🏡",
            default: "Спасибо за ваше сообщение. Один из наших декораторов свяжется с вами в ближайшее время. Для немедленной помощи звоните по номеру +31684258077."
        }
    },
    ukrainian: {
        keywords: ["скільки", "вартість", "ціна", "що", "як", "коли", "де", "чому", "допомога", "питання", "маляр", "фарба", "декор", "стіна", "стеля", "зовні", "всередині", "колір", "порада", "вітаю", "привіт", "дякую", "доброго ранку", "кошторис", "безкоштовно", "кімната", "квартира", "послуга", "офіс", "шпалери", "надворі", "час", "бронювання", "меблі", "прибирання", "ремонт", "розташування", "амстердам", "виїжджаєте", "відгук", "терміново", "ніч", "оплата", "передоплата", "до побачення", "бувай", "поверхня", "плінтус", "вікно", "крихкий", "електроніка", "тріщина", "дірка", "кухня", "ванна", "сатин", "вологість", "пліснява", "темний", "світлий", "запах", "видалити", "клей", "килим", "паркет", "зима", "температура", "повісити", "картина", "компанія", "бренд", "застрахований", "страхування", "комп'ютер", "сервер", "висота", "риштування", "термін", "відкриття", "лінія", "розмітка", "паркування", "вогонь", "відходи", "консультація", "візит", "дійсний", "фіксована ціна", "депозит", "гарантія", "команда", "маляри", "змінити", "сертифікація", "кваліфікований", "метр", "м2", "м²", "квадрат", "площа", "розмір", "калькулятор", "спальня", "вітальня", "кухня", "ванна", "проект", "тривалість", "дні", "години", "оцінка"],
        responses: {
            greeting: "Вітаємо 👋 Ласкаво просимо до Jone`s Paint & Decorators. Чим ми можемо допомогти вам сьогодні?",
            hi: "Привіт 😊 Шукаєте сьогодні послуги з фарбування чи декору?",
            goodMorning: "Доброго ранку ☀️ Чим Jone`s Paint & Decorators може вам допомогти?",
            pricing: "Ціни залежать від розміру кімнати, стану стін, типу фарби та розташування. Ми можемо надати безкоштовний кошторис.",
            freeQuote: "Звичайно ✅ Надішліть нам розміри кімнати, фотографії або деталі проекту для безкоштовного кошторису.",
            perRoom: "Так. Ми можемо стягувати плату за кімнату, за квартиру або за весь проект залежно від необхідної роботи.",
            apartmentPrice: "Ціни відрізняються залежно від стану та оздоблення фарби. Будь ласка, завантажте фотографії або замовте огляд для точного кошторису.",
            services: "Ми пропонуємо фарбування інтер'єру, фарбування екстер'єру, поклейку шпалер, декор, фарбування офісів, квартир та комерційних приміщень.",
            offices: "Так ✅ Ми пропонуємо послуги комерційного та офісного фарбування для компаній та будівель.",
            wallpaper: "Так 😊 Ми клеїмо шпалери, акцентні стіни та декоративні покриття.",
            exterior: "Так. Ми пропонуємо фарбування екстер'єру для будинків, будівель та комерційної нерухомості.",
            duration: "Більшість кімнат займає 1-2 дні залежно від підготовки та часу висихання.",
            availability: "Ми працюємо з понеділка по суботу з 8:00 до 18:00.",
            onlineBooking: "Так ✅ Ви можете запросити бронювання прямо через контактну форму на нашому сайті.",
            supplyPaint: "Так. Ми можемо надати фарби преміум-марок або працювати з фарбою, наданою замовником.",
            paintBrands: "Ми використовуємо високоякісні професійні фарби для довговічних і стійких результатів.",
            colorHelp: "Так 🎨 Ми пропонуємо консультації з кольору та поради щодо декору.",
            furniture: "Так. Ми допомагаємо захистити та перемістити меблі перед початком робіт.",
            cleaning: "Звичайно ✅ Ми залишаємо всі зони чистими та прибраними після завершення проекту.",
            wallRepair: "Так. Ми усуваємо тріщини, дірки та пошкоджені стіни перед фарбуванням.",
            location: "Ми базуємося в Амстердамі та обслуговуємо навколишні райони.",
            travel: "Так 😊 Ми виїжджаємо до будинків, квартир, офісів та комерційної нерухомості.",
            seeWork: "Так ✅ Відвідайте нашу галерею, Instagram, TikTok та Facebook, щоб побачити завершені проекти.",
            reviews: "Так ⭐ Клієнти можуть залишати відгуки на Facebook, Instagram та Google.",
            urgent: "Так. Залежно від наявності вільного часу ми можемо запропонувати термінові послуги з фарбування.",
            nightWork: "Для комерційних проектів та офісів ми можемо запропонувати роботу ввечері або вночі.",
            payment: "Ми приймаємо готівку, банківський переказ та онлайн-платежі.",
            upfront: "Для великих проектів може знадобитися передоплата перед початком робіт.",
            thanks: "Будь ласка 😊 Ми з нетерпінням чекаємо на співпрацю з вами.",
            bye: "Дякуємо, що відвідали Jone`s Paint & Decorators. Гарного дня 👋",
            // Residential Projects
            surfacesIncluded: "Кошторис включає всі стіни спальні, плінтуси та віконні рами. Стелі та двері виключені за запитом 🏠",
            moveFurniture: "Будь ласка, приберіть крихкі предмети, електроніку та дрібний декор. Наша команда перемістить і захистить важкі меблі захисною плівкою 🪑",
            fixCracks: "Ми зіскрібаємо пухкі частинки, наносимо якісну шпаклівку, даємо висохнути, а потім ідеально шліфуємо перед нанесенням фарби 🔧",
            kitchenBathroomFinish: "Ми використовуємо сатинове або напівглянцеве покриття. Ці покриття стійкі до вологи, запобігають появі плісняви та легко миються 🚿",
            paintOverDark: "Так. Спочатку ми наносимо ґрунтовку з високою покривністю, щоб приховати темний колір, а потім два шари вашої нової світлої фарби 🎨",
            paintSmell: "Ми використовуємо фарби з низьким вмістом ЛОС (екологічні). Легкий запах фарби зазвичай зникає протягом 24-48 годин за хорошої вентиляції 🌬️",
            removeWallpaper: "Так. Ми відпарюємо або наносимо спеціальний розчин для зняття шпалер, очищаємо залишки клею та готуємо стіну 📄",
            paintOnFloor: "Ми запобігаємо цьому, накриваючи всі підлоги міцними захисними матеріалами та проклеюючи краї. Якщо щось трапиться, ми повністю усунемо наслідки 🛡️",
            winterExterior: "Ні. Для зовнішнього фарбування потрібні сухі умови та стабільна температура вище 5°C-10°C, щоб фарба правильно трималася ❄️",
            hangPictures: "Фарба швидко висихає на дотик, але повністю твердне приблизно за 5-7 днів. Будь ласка, зачекайте тиждень, перш ніж вішати важкі предмети 🖼️",
            // Commercial Projects
            overnightPainting: "Так. Ми пропонуємо вечірні, нічні та вихідні зміни, щоб ваша щоденна робота не переривалася 🌙",
            highTrafficPaint: "Ми використовуємо комерційну акрилову фарбу, стійку до стирання. Вона витримує інтенсивний рух, удари стільцями та часте прибирання 🏢",
            matchCorporateColors: "Так. Якщо ви надасте нам цифрові коди кольорів (RAL, Pantone або NCS), ми зможемо точно підібрати фарбу під ваш бренд 🎯",
            insuredCommercial: "Так. У нас є комплексне страхування відповідальності на суму до 5 000 000 €, що покриває всі ризики комерційної нерухомості 📋",
            protectElectronics: "Ми повністю захищаємо все електронне обладнання та серверні стійки антистатичною плівкою та спеціальною стрічкою перед початком робіт 💻",
            highHeights: "Так. Наша команда повністю навчена та сертифікована для роботи з підйомними платформами, ножичними підйомниками та професійними системами риштувань 🏗️",
            missedDeadline: "Ми підписуємо суворий договірний графік. Ми залучаємо додатковий персонал і довші зміни, щоб укластися у ваш фіксований термін 📅",
            lineMarking: "Так. Ми пропонуємо міцне епоксидне розмічування ліній для складських підлог, зон безпеки та зовнішніх паркувань 🅿️",
            fireRetardant: "Так. Ми наносимо сертифіковані спучувальні (вогнестійкі) покриття, що відповідають місцевим нормам безпеки для комерційних будівель 🔥",
            wasteDisposal: "Ми дотримуємося суворих екологічних норм. Усі токсичні матеріали, порожні банки та хімікати утилізуються через ліцензований комерційний центр переробки ♻️",
            // Estimates & Contracts
            freeConsultation: "Так. Ми відвідуємо ваш об'єкт, вимірюємо площу, обговорюємо ваші цілі та безкоштовно надаємо детальний письмовий кошторис 💼",
            quoteValid: "Наші кошториси дійсні протягом 30 днів з дати видачі через періодичні коливання вартості матеріалів і постачальників фарби 📆",
            hourlyOrFlat: "Ми встановлюємо фіксовану ціну за проект. Це гарантує, що ви заздалегідь знаєте точну підсумкову вартість без несподіваних погодинних нарахувань 💰",
            depositSchedule: "Ми вимагаємо передоплату у розмірі 20% для підтвердження дати бронювання. Решта 80% сплачується лише після успішного завершення проекту 💳",
            rottingMold: "Ми негайно припиняємо роботу в цій зоні, показуємо вам пошкодження та надаємо чіткий окремий письмовий кошторис на ремонт перед фарбуванням 🍄",
            warranty: "Так. Ми надаємо 2-річну гарантію, що покриває відшарування, лущення або здуття, спричинені неправильним нанесенням або поганою підготовкою ✅",
            whoSuppliesPaint: "Ми надаємо фарбу, оскільки отримуємо професійні знижки на преміальні марки. Однак, якщо ви вже придбали фарбу, ми можемо скоригувати кошторис так, щоб він покривав лише роботу 🪣",
            teamSize: "Для стандартних житлових робіт ми направляємо команду з 1-2 малярів. Для великих комерційних робіт ми направляємо від 4 до 8 малярів, щоб пришвидшити процес 👥",
            changeColor: "Ми можемо змінити колір, але це спричинить додаткову плату. Вам потрібно буде покрити вартість нової фарби та роботи з перефарбування 🔄",
            certifications: "Ми повністю зареєстровані професіонали, і наші маляри мають акредитовані професійні сертифікати у сфері фарбування, декору та безпеки на об'єкті 🎓",
            // Meter-based pricing questions
            metersToCover: "Скористайтеся нашим калькулятором цін угорі сторінки! Перетягніть повзунок, щоб побачити, скільки у вас м² та орієнтовну ціну. Наприклад: невелика спальня (~5м² підлоги) коштує 200€-450€, середня кімната (~12м²) — 250€-600€ 📏",
            roomSizeMeters: "Середні розміри кімнат: Спальня (~5м² підлоги), Вітальня (~20м²), Кухня (~15м²). Скористайтеся нашим калькулятором угорі сторінки для точних цін за вашими м² 🏠",
            pricePerMeter: "Наші ціни за м²: Стіни 8€-17€/м², Стелі 10€-20€/м², Латексне напилення 7€-12€/м². Перегляньте наш калькулятор цін для цін на проект 💰",
            howManyMeters: "Повідомте нам розміри вашої кімнати (довжина × ширина × висота), і ми розрахуємо точну кількість м². Або скористайтеся нашим інтерактивним калькулятором угорі сторінки 📐",
            bedroomMeters: "Стандартна спальня має в середньому 4-6 м² площі стіни на кожну стіну. При 4 стінах це 16-24 м² загалом. Ціна: 200€-450€ для невеликих спалень 🛏️",
            livingRoomMeters: "Вітальня в середньому має 20-30 м² площі стін. Ціна: 350€-900€ для великих вітальнь 🛋️",
            kitchenMeters: "Кухня має близько 15-20 м² площі (включаючи стелю). Ціна: 250€-600€ 🍳",
            bathroomMeters: "Ванна кімната має 8-12 м² площі. Ціна: 200€-400€ 🚿",
            wholeHouseMeters: "Весь будинок: квартира з 1 спальнею ~50-80 м² (1 500€-2 500€), будинок з 2 спальнями ~80-120 м² (2 200€-3 600€), сімейний будинок з 3 спальнями ~120-180 м² (3 500€-5 500€) 🏡",
            default: "Дякуємо за ваше повідомлення. Один з наших декораторів зв'яжеться з вами найближчим часом. Для негайної допомоги телефонуйте +31684258077."
        }
    }
};

// Detect language based on keywords
function detectLanguage(text) {
    // Primary signal: the language the visitor has selected in the site's language menu.
    // This is what guarantees replies match the dropdown language (English, Turkish, etc.)
    const uiToKnowledgeLang = {
        en: 'english', nl: 'dutch', pt: 'portuguese', fr: 'french',
        de: 'german', es: 'spanish', it: 'italian', tr: 'turkish',
        ar: 'arabic', ru: 'russian', uk: 'ukrainian'
    };
    const selected = uiToKnowledgeLang[currentLanguage];
    if (selected && chatbotKnowledge[selected]) {
        return selected;
    }

    // Fallback: try to detect the language directly from the typed message
    const lowerText = text.toLowerCase();
    for (const lang of Object.values(uiToKnowledgeLang)) {
        const kb = chatbotKnowledge[lang];
        if (kb && kb.keywords.some(keyword => lowerText.includes(keyword))) {
            return lang;
        }
    }

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
    saveChatMessage("user", message);

    // BOT REPLY - Using multi-language AI
    setTimeout(function(){
        let botReply = getChatbotResponse(message);

        let botDiv = document.createElement("div");
        botDiv.classList.add("bot-message");
        botDiv.innerText = botReply;

        chatBody.appendChild(botDiv);
        saveChatMessage("bot", botReply);

        chatBody.scrollTop = chatBody.scrollHeight;

        // Speak the reply aloud if voice replies are enabled (helps blind visitors)
        speakBotReply(botReply);

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

    // Restore accessibility preferences (font size, contrast, motion, etc.)
    applyStoredA11yPrefs();

    // Set up microphone voice input for the chat (falls back gracefully if unsupported)
    initSpeechRecognition();

    // Restore the "spoken chat replies" preference (for blind visitors)
    updateVoiceReplyButton(isVoiceRepliesOn());

    // Restore remembered questions and answers from previous visits
    renderChatHistory();
});
