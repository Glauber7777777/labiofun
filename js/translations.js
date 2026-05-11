/**
 * Translations for Labiofun Website
 * Full trilingual support for Portuguese (pt-BR), English (en), and Spanish (es-ES)
 */

const translations = {
    'pt-BR': {
        // Header
        'site.title': 'Laboratório de Biofísica de Fungos',
        'nav.home': 'Início',
        'nav.mission': 'Missão',
        'nav.research': 'Pesquisas',
        'nav.techniques': 'Técnicas',
        'nav.team': 'Equipe',
        'nav.publications': 'Publicações',
        'nav.location': 'Localização',
        'nav.contact': 'Contato',

        // Hero
        'hero.title1': 'Pesquisa Translacional em',
        'hero.title2': 'Biofísica de Fungos',
        'hero.description': 'Da superfície fúngica à clínica: nossos estudos integram abordagens estruturais, físico-químicas e moleculares para elucidar a virulência, o impacto ambiental e os processos de interação com o hospedeiro, contribuindo para o desenvolvimento de estratégias diagnósticas mais sensíveis e terapias mais eficazes.',

        // About Section
        'about.title': 'Sobre o Labiofun',
        'about.subtitle': 'Conheça nosso laboratório',
        'about.p1': 'Inaugurado em 23 de setembro de 2020 pela Profª. Drª. Susana Frases, o Laboratório de Biofísica de Fungos (Labiofun) dedica-se a pesquisas multidisciplinares e inovadoras na área de micologia.',
        'about.p2': 'Nosso propósito central é aprofundar o conhecimento e responder a uma pergunta desafiadora: <strong>o que faz um fungo ser um patógeno?</strong>',
        'about.p3': 'Adotamos o paradigma Saúde Única <em>(One Health)</em>, integrando dados e saberes da saúde ambiental, da medicina humana e veterinária para compreender de forma holística como os fungos interagem com diferentes nichos e hospedeiros — e como essas interações são influenciadas pelas mudanças climáticas e pela ação humana.',

        // Mission Section
        'mission.title': 'Nossa Missão',
        'mission.subtitle': 'Propósito de existir e pesquisar',
        'mission.description': 'Desenvolver conhecimento translacional em micologia que conecte biologia de superfícies, mecanismos de virulência e dinâmica ecológica, oferecendo soluções para desafios atuais em saúde humana, animal e ambiental.',

        // Research Lines
        'research.title': 'Linhas de Pesquisas',
        'research.subtitle': 'Nossas principais áreas de investigação científica',
        'research.line1.title': 'Ultraestrutura e superfícies fúngicas',
        'research.line1.desc': 'Estudamos a morfologia e propriedades físico-químicas das camadas externas dos fungos e sua relação com adesão, colonização e evasão imune.',
        'research.line2.title': 'Modelos Físico-Teóricos',
        'research.line2.desc': 'Desenvolvemos métodos e modelos físico-teóricos que relacionem composição, estrutura e atividade biológica de fungos.',
        'research.line3.title': 'Mecanobiologia',
        'research.line3.desc': 'Estudamos a superfície de fungos patogênicos e suas implicações na interação parasito-hospedeiro.',
        'research.line4.title': 'Mecanismos de virulência',
        'research.line4.desc': 'Investigamos como fungos se adaptam a variações de temperatura, estresse ambiental e novos nichos ecológicos, incluindo mudanças morfológicas associadas à patogenicidade.',
        'research.line5.title': 'Resistência antimicrobiana',
        'research.line5.desc': 'Monitoramos e caracterizamos mecanismos de resistência emergentes, como resposta a pressões ambientais e exposição a antifúngicos, com foco em isolados multirresistentes.',
        'research.line6.title': 'Impacto ecossistêmico e mudanças climáticas',
        'research.line6.desc': 'Avaliamos como o aquecimento global e as alterações ambientais modificam a distribuição, dispersão e emergência de fungos patogênicos em novos habitats.',
        'research.line7.title': 'Prospecção de compostos bioativos',
        'research.line7.desc': 'Triamos e caracterizamos novos agentes antifúngicos com potencial contra isolados resistentes, além do desenvolvimento de estratégias terapêuticas alternativas e combinadas.',
        'research.line8.title': 'Divulgação científica e gestão do conhecimento',
        'research.line8.desc': 'Democratizamos o conhecimento científico: traduzimos evidências complexas em uma linguagem clara e acessível. Dessa forma, conectamos a academia aos profissionais de saúde e à sociedade, promovendo a interação necessária para decisões conscientes e embasadas na Ciência.',

        // Techniques
        'techniques.title': 'Metodologias alinhadas às nossas linhas de pesquisas',
        'techniques.subtitle': 'Principais abordagens metodológicas utilizadas em nossas pesquisas',
        'tech.1.title': 'Ensaios de estresse metabólico',
        'tech.1.desc': 'Testes que avaliam a resposta fúngica a condições adversas (variações de pH, estresse oxidativo, restrição de nutrientes, temperatura), permitindo identificar vulnerabilidades para desenvolvimento de antifúngicos.',
        'tech.2.title': 'Espalhamento de Luz Dinâmico',
        'tech.2.desc': 'Avaliação do "tamanho" hidrodinâmico, polidispersão e agregação de partículas/fenótipos superficiais, usada para detectar alterações em resposta a variações ambiental (pH, estresse oxidativo, nutrientes).',
        'tech.3.title': 'Mecânica celular - μreologia (Ativa e Passiva)',
        'tech.3.desc': 'Ensaios para avaliar as propriedades viscoelásticas de polissacarídeos capsulares e secretados, avaliar a resposta a tensões mecânicas e mapear alterações mecânicas vinculadas à interação hospedeiro–patógeno',
        'tech.4.title': 'Microscopia eletrônica',
        'tech.4.desc': 'Análise da morfologia e ultraestrutura fúngica (SEM/TEM).',
        'tech.5.title': 'Microscopia óptica',
        'tech.5.desc': 'Base para identificação morfológica, análise de ciclos de vida, colorações diferenciais e observação em tempo real de interações fungo–hospedeiro.',
        'tech.6.title': 'Pinças Ópticas',
        'tech.6.desc': 'Mensuração de forças na faixa de picoNewtons (pN), manipulação de células fúngicas individuais e estudo de interações mecânicas entre células e superfícies.',
        'tech.7.title': 'Potencial Zeta',
        'tech.7.desc': 'Mensuração de forças na faixa de picoNewtons (pN), manipulação de células fúngicas individuais e estudo de interações mecânicas entre células e superfícies.',
        'tech.8.title': 'Triagem e caracterização de compostos bioativos',
        'tech.8.desc': 'Screening de candidatos antifúngicos, testes de sensibilidade (incluindo contra isolados multirresistentes) e desenvolvimento de estratégias terapêuticas alternativas ou em combinação.',

        // Team
        'team.title': 'Equipe & Colaboradores',
        'team.subtitle': 'Conheça nossos pesquisadores e parceiros científicos',
        'team.tab.current': 'Equipe Atual',
        'team.tab.collaborators': 'Colaboradores',
        'team.tab.alumni': 'Alumni',
        'team.search.placeholder': 'Buscar colaboradores...',
        'team.sort.alpha': 'Ordenar A-Z',

        // Publications
        'publications.title': 'Publicações',
        'publications.subtitle': 'Produção científica do laboratório',
        'publications.search.placeholder': 'Buscar publicações...',
        'publications.filter.all': 'Todos os anos',
        'publications.no.results': 'Nenhuma publicação encontrada.',

        // Location
        'location.title': 'Localização',
        'location.subtitle': 'Onde estamos',
        'location.address.title': 'Endereço',

        // Social Media
        'social.title': 'Conecte-se Conosco',
        'social.subtitle': 'Acompanhe nossas atividades e publicações',

        // Contact
        'contact.title': 'Redes Sociais',
        'contact.subtitle': 'Conecte-se conosco',

        // Footer
        'footer.about.title': 'Sobre',
        'footer.links.title': 'Links Rápidos',
        'footer.contact.title': 'Contato',
        'footer.copyright': '© 2019 - 2025 Laboratório de Biofísica de Fungos (Labiofun). Todos os direitos reservados.',

        // Team Members
        'member.susana.role': 'Professora - Ph.D',
        'member.susana.title': 'Chefe do laboratório',
        'member.susana.bio': 'Bióloga (Universidad Miguel Hernández, Espanha), especialista em biofísica de superfícies fúngicas e na complexa interação patógeno-hospedeiro, com ênfase em mecanismos de virulência, resistência antimicrobiana, impacto ecossistêmico e mudanças climáticas, além da prospecção de compostos bioativos para aplicações biotecnológicas e terapêuticas.',
        'member.takiya.role': 'Professora - M.D & Ph.D',
        'member.takiya.bio': 'Médica patologista (UFRJ), especialista em morfologia e anatomia patológica, destacando-se em patologia renal, cardiovascular e pulmonar, com foco em matriz extracelular, reparo e regeneração tecidual, terapias celulares e bioengenharia.',
        'member.dario.role': 'Pós-doutor - M.Sc & Ph.D',
        'member.dario.bio': 'Biólogo (UFMS), especialista na área de microbiologia, com ênfase em micologia e ensino de biociências aplicadas à saúde, com foco em mecanismos de virulência, resistência antimicrobiana e impacto ecossistêmico, integrando pesquisa avançada e práticas educacionais para promover o conhecimento científico e a saúde pública e única (One health).',

        // Generic Roles
        'role.postdoc': 'Pós-doutor - M.Sc & Ph.D',
        'role.phd': 'Doutorando - M.Sc',
        'role.masters': 'Mestrando',
        'role.undergrad': 'Iniciação Científica',
    },

    'en': {
        // Header
        'site.title': 'Fungal Biophysics Laboratory',
        'nav.home': 'Home',
        'nav.mission': 'Mission',
        'nav.research': 'Research',
        'nav.techniques': 'Techniques',
        'nav.team': 'Team',
        'nav.publications': 'Publications',
        'nav.location': 'Location',
        'nav.contact': 'Contact',

        // Hero
        'hero.title1': 'Translational Research in',
        'hero.title2': 'Fungal Biophysics',
        'hero.description': 'From fungal surface to clinic: our studies integrate structural, physicochemical and molecular approaches to elucidate virulence, environmental impact and host interaction processes, contributing to the development of more sensitive diagnostic strategies and more effective therapies.',

        // About Section
        'about.title': 'About Labiofun',
        'about.subtitle': 'Get to know our laboratory',
        'about.p1': 'Inaugurated on September 23, 2020 by Prof. Dr. Susana Frases, the Fungal Biophysics Laboratory (Labiofun) is dedicated to multidisciplinary and innovative research in the field of mycology.',
        'about.p2': 'Our central purpose is to deepen knowledge and answer a challenging question: <strong>what makes a fungus a pathogen?</strong>',
        'about.p3': 'We adopt the One Health paradigm, integrating data and knowledge from environmental health, human and veterinary medicine to holistically understand how fungi interact with different niches and hosts — and how these interactions are influenced by climate change and human action.',

        // Mission Section
        'mission.title': 'Our Mission',
        'mission.subtitle': 'Purpose of existence and research',
        'mission.description': 'To develop translational knowledge in mycology that connects surface biology, virulence mechanisms and ecological dynamics, offering solutions to current challenges in human, animal and environmental health.',

        // Research Lines
        'research.title': 'Research Lines',
        'research.subtitle': 'Our main areas of scientific investigation',
        'research.line1.title': 'Ultrastructure and fungal surfaces',
        'research.line1.desc': 'We study the morphology and physicochemical properties of the outer layers of fungi and their relationship with adhesion, colonization and immune evasion.',
        'research.line2.title': 'Physical-Theoretical Models',
        'research.line2.desc': 'We develop methods and physical-theoretical models that relate composition, structure and biological activity of fungi.',
        'research.line3.title': 'Mechanobiology',
        'research.line3.desc': 'We study the surface of pathogenic fungi and their implications in the parasite-host interaction.',
        'research.line4.title': 'Virulence mechanisms',
        'research.line4.desc': 'We investigate how fungi adapt to temperature variations, environmental stress and new ecological niches, including morphological changes associated with pathogenicity.',
        'research.line5.title': 'Antimicrobial resistance',
        'research.line5.desc': 'We monitor and characterize emerging resistance mechanisms in response to environmental pressures and exposure to antifungals, with a focus on multidrug-resistant isolates.',
        'research.line6.title': 'Ecosystem impact and climate change',
        'research.line6.desc': 'We evaluate how global warming and environmental changes modify the distribution, dispersion and emergence of pathogenic fungi in new habitats.',
        'research.line7.title': 'Biologically active compounds prospection',
        'research.line7.desc': 'We screen and characterize new antifungal agents with potential against resistant isolates, in addition to developing alternative and combined therapeutic strategies.',
        'research.line8.title': 'Scientific communication and knowledge management',
        'research.line8.desc': 'We democratize scientific knowledge: we translate complex evidence into clear and accessible language. In this way, we connect academia to health professionals and society, promoting the necessary interaction for conscious and science-based decisions.',

        // Techniques
        'techniques.title': 'Methodologies aligned with our research lines',
        'techniques.subtitle': 'Main methodological approaches used in our research',
        'tech.1.title': 'Metabolic stress assays',
        'tech.1.desc': 'Tests that evaluate the fungal response to adverse conditions (pH variations, oxidative stress, nutrient restriction, temperature), allowing the identification of vulnerabilities for antifungal development.',
        'tech.2.title': 'Dynamic Light Scattering',
        'tech.2.desc': 'Assessment of hydrodynamic "size", polydispersion and aggregation of particles/surface phenotypes, used to detect changes in response to environmental variations (pH, oxidative stress, nutrients).',
        'tech.3.title': 'Cell mechanics - μrheology (Active and Passive)',
        'tech.3.desc': 'Assays to evaluate the viscoelastic properties of capsular and secreted polysaccharides, assess the response to mechanical stresses and map mechanical changes linked to host-pathogen interaction',
        'tech.4.title': 'Electron microscopy',
        'tech.4.desc': 'Analysis of fungal morphology and ultrastructure (SEM/TEM).',
        'tech.5.title': 'Optical microscopy',
        'tech.5.title': 'Optical microscopy',
        'tech.5.desc': 'Basis for morphological identification, life cycle analysis, differential staining and real-time observation of fungus-host interactions.',
        'tech.6.title': 'Optical Tweezers',
        'tech.6.desc': 'Measurement of forces in the picoNewton (pN) range, manipulation of individual fungal cells and study of mechanical interactions between cells and surfaces.',
        'tech.7.title': 'Zeta Potential',
        'tech.7.desc': 'Measurement of forces in the picoNewton (pN) range, manipulation of individual fungal cells and study of mechanical interactions between cells and surfaces.',
        'tech.8.title': 'Screening and characterization of bioactive compounds',
        'tech.8.desc': 'Screening of antifungal candidates, susceptibility testing (including against multidrug-resistant isolates) and development of alternative or combination therapeutic strategies.',

        // Team
        'team.title': 'Team & Collaborators',
        'team.subtitle': 'Meet our researchers and scientific partners',
        'team.tab.current': 'Current Team',
        'team.tab.collaborators': 'Collaborators',
        'team.tab.alumni': 'Alumni',
        'team.search.placeholder': 'Search collaborators...',
        'team.sort.alpha': 'Sort A-Z',

        // Publications
        'publications.title': 'Publications',
        'publications.subtitle': 'Laboratory scientific production',
        'publications.search.placeholder': 'Search publications...',
        'publications.filter.all': 'All years',
        'publications.no.results': 'No publications found.',

        // Location
        'location.title': 'Location',
        'location.subtitle': 'Where we are',
        'location.address.title': 'Address',

        // Social Media
        'social.title': 'Connect With Us',
        'social.subtitle': 'Follow our activities and publications',

        // Contact
        'contact.title': 'Social Media',
        'contact.subtitle': 'Connect with us',

        // Footer
        'footer.about.title': 'About',
        'footer.links.title': 'Quick Links',
        'footer.contact.title': 'Contact',
        'footer.copyright': '© 2019 - 2025 Fungal Biophysics Laboratory (Labiofun). All rights reserved.',

        // Team Members
        'member.susana.role': 'Professor - Ph.D',
        'member.susana.title': 'Laboratory Head',
        'member.susana.bio': 'Biologist (Universidad Miguel Hernández, Spain), specialist in fungal surface biophysics and the complex pathogen-host interaction, with emphasis on virulence mechanisms, antimicrobial resistance, ecosystem impact and climate change, as well as the prospection of bioactive compounds for biotechnological and therapeutic applications.',
        'member.takiya.role': 'Professor - M.D & Ph.D',
        'member.takiya.bio': 'Pathologist physician (UFRJ), specialist in morphology and pathological anatomy, excelling in renal, cardiovascular and pulmonary pathology, with a focus on extracellular matrix, tissue repair and regeneration, cell therapies and bioengineering.',
        'member.dario.role': 'Postdoctoral Researcher - M.Sc & Ph.D',
        'member.dario.bio': 'Biologist (UFMS), specialist in microbiology, with emphasis on mycology and biosciences teaching applied to health, focusing on virulence mechanisms, antimicrobial resistance and ecosystem impact, integrating advanced research and educational practices to promote scientific knowledge and public and One Health.',
        'member.glauber.bio': 'Alma mater in biophysics (UFRJ), focusing on structural and mechanical characterization of fungal surfaces. Advanced experience in applying cutting-edge techniques including light scattering, viscoelastic analysis, optical and electron microscopy to elucidate molecular architecture, mechanical properties and physicochemical interactions at micro and nanoscale.',
        'member.juliana.bio': 'Biologist, her focus is on studies about virulence mechanisms, antimicrobial resistance and ecosystem impact, focusing on understanding the biological processes that influence microbial pathogenicity and its environmental consequences in mangrove ecosystems.',
        'member.vinicius.bio': 'Pharmacist (UFRJ), his study focuses on investigating tissue and cellular alterations induced by Cryptococcus spp. infection, analyzing their histopathological and immunological impacts, in addition to characterizing the physicochemical and morphological properties of yeasts.',

        // Generic Roles
        'role.postdoc': 'Postdoctoral Researcher - M.Sc & Ph.D',
        'role.phd': 'PhD Student - M.Sc',
        'role.masters': 'Master\'s Student',
        'role.undergrad': 'Undergraduate Research',
    },

    'es-ES': {
        // Header
        'site.title': 'Laboratorio de Biofísica de Hongos',
        'nav.home': 'Inicio',
        'nav.mission': 'Misión',
        'nav.research': 'Investigación',
        'nav.techniques': 'Técnicas',
        'nav.team': 'Equipo',
        'nav.publications': 'Publicaciones',
        'nav.location': 'Ubicación',
        'nav.contact': 'Contacto',

        // Hero
        'hero.title1': 'Investigación Translacional en',
        'hero.title2': 'Biofísica de Hongos',
        'hero.description': 'De la superficie fúngica a la clínica: nuestros estudios integran enfoques estructurales, fisicoquímicos y moleculares para elucidar la virulencia, el impacto ambiental y los procesos de interacción con el huésped, contribuyendo al desarrollo de estrategias diagnósticas más sensibles y terapias más efectivas.',

        // About Section
        'about.title': 'Sobre Labiofun',
        'about.subtitle': 'Conozca nuestro laboratorio',
        'about.p1': 'Inaugurado el 23 de septiembre de 2020 por la Prof. Dra. Susana Frases, el Laboratorio de Biofísica de Hongos (Labiofun) se dedica a investigaciones multidisciplinarias e innovadoras en el campo de la micología.',
        'about.p2': 'Nuestro propósito central es profundizar el conocimiento y responder a una pregunta desafiante: <strong>¿qué hace que un hongo sea un patógeno?</strong>',
        'about.p3': 'Adoptamos el paradigma Una Sola Salud <em>(One Health)</em>, integrando datos y conocimientos de la salud ambiental, la medicina humana y veterinaria para comprender de forma holística cómo los hongos interactúan con diferentes nichos y huéspedes — y cómo estas interacciones son influenciadas por el cambio climático y la acción humana.',

        // Mission Section
        'mission.title': 'Nuestra Misión',
        'mission.subtitle': 'Propósito de existir e investigar',
        'mission.description': 'Desarrollar conocimiento translacional en micología que conecte la biología de superficies, los mecanismos de virulencia y la dinámica ecológica, ofreciendo soluciones a los desafíos actuales en salud humana, animal y ambiental.',

        // Research Lines
        'research.title': 'Líneas de Investigación',
        'research.subtitle': 'Nuestras principales áreas de investigación científica',
        'research.line1.title': 'Ultraestructura y superficies fúngicas',
        'research.line1.desc': 'Estudiamos la morfología y propiedades fisicoquímicas de las capas externas de los hongos y su relación con la adhesión, colonización y evasión inmune.',
        'research.line2.title': 'Modelos Físico-Teóricos',
        'research.line2.desc': 'Desarrollamos métodos y modelos físico-teóricos que relacionen composición, estructura y actividad biológica de hongos.',
        'research.line3.title': 'Mecanobiología',
        'research.line3.desc': 'Estudiamos la superficie de hongos patógenos y sus implicaciones en la interacción parásito-huésped.',
        'research.line4.title': 'Mecanismos de virulencia',
        'research.line4.desc': 'Investigamos cómo los hongos se adaptan a variaciones de temperatura, estrés ambiental y nuevos nichos ecológicos, incluyendo cambios morfológicos asociados a la patogenicidad.',
        'research.line5.title': 'Resistencia antimicrobiana',
        'research.line5.desc': 'Monitoreamos y caracterizamos mecanismos de resistencia emergentes, como respuesta a presiones ambientales y exposición a antifúngicos, con enfoque en aislados multirresistentes.',
        'research.line6.title': 'Impacto ecosistémico y cambio climático',
        'research.line6.desc': 'Evaluamos cómo el calentamiento global y las alteraciones ambientales modifican la distribución, dispersión y emergencia de hongos patógenos en nuevos hábitats.',
        'research.line7.title': 'Prospección de compuestos bioactivos',
        'research.line7.desc': 'Seleccionamos y caracterizamos nuevos agentes antifúngicos con potencial contra aislados resistentes, además del desarrollo de estrategias terapéuticas alternativas y combinadas.',
        'research.line8.title': 'Divulgación científica y gestión del conocimiento',
        'research.line8.desc': 'Democratizamos el conocimiento científico: traducimos evidencias complejas en un lenguaje claro y accesible. De esta forma, conectamos la academia con los profesionales de la salud y la sociedad, promoviendo la interacción necesaria para decisiones conscientes y basadas en la Ciencia.',

        // Techniques
        'techniques.title': 'Metodologías alineadas con nuestras líneas de investigación',
        'techniques.subtitle': 'Principales enfoques metodológicos utilizados en nuestras investigaciones',
        'tech.1.title': 'Ensayos de estrés metabólico',
        'tech.1.desc': 'Pruebas que evalúan la respuesta fúngica a condiciones adversas (variaciones de pH, estrés oxidativo, restricción de nutrientes, temperatura), permitiendo identificar vulnerabilidades para el desarrollo de antifúngicos.',
        'tech.2.title': 'Dispersión Dinámica de Luz',
        'tech.2.desc': 'Evaluación del "tamaño" hidrodinámico, polidispersión y agregación de partículas/fenotipos superficiales, utilizada para detectar alteraciones en respuesta a variaciones ambientales (pH, estrés oxidativo, nutrientes).',
        'tech.3.title': 'Mecánica celular - μreología (Activa y Pasiva)',
        'tech.3.desc': 'Ensayos para evaluar las propiedades viscoelásticas de polisacáridos capsulares y secretados, evaluar la respuesta a tensiones mecánicas y mapear alteraciones mecánicas vinculadas a la interacción huésped-patógeno',
        'tech.4.title': 'Microscopía electrónica',
        'tech.4.desc': 'Análisis de la morfología y ultraestructura fúngica (SEM/TEM).',
        'tech.5.title': 'Microscopía óptica',
        'tech.5.desc': 'Base para la identificación morfológica, análisis de ciclos de vida, coloraciones diferenciales y observación en tiempo real de interacciones hongo-huésped.',
        'tech.6.title': 'Pinzas Ópticas',
        'tech.6.desc': 'Medición de fuerzas en el rango de picoNewtons (pN), manipulación de células fúngicas individuales y estudio de interacciones mecánicas entre células y superficies.',
        'tech.7.title': 'Potencial Zeta',
        'tech.7.desc': 'Medición de carga superficial y estabilidad coloidal, esencial para caracterizar propiedades electrostáticas que influyen en la adhesión e interacciones celulares.',
        'tech.8.title': 'Selección y caracterización de compuestos bioactivos',
        'tech.8.desc': 'Screening de candidatos antifúngicos, pruebas de sensibilidad (incluyendo contra aislados multirresistentes) y desarrollo de estrategias terapéuticas alternativas o en combinación.',

        // Team
        'team.title': 'Equipo y Colaboradores',
        'team.subtitle': 'Conozca a nuestros investigadores y socios científicos',
        'team.tab.current': 'Equipo Actual',
        'team.tab.collaborators': 'Colaboradores',
        'team.tab.alumni': 'Alumni',
        'team.search.placeholder': 'Buscar colaboradores...',
        'team.sort.alpha': 'Ordenar A-Z',

        // Publications
        'publications.title': 'Publicaciones',
        'publications.subtitle': 'Producción científica del laboratorio',
        'publications.search.placeholder': 'Buscar publicaciones...',
        'publications.filter.all': 'Todos los años',
        'publications.no.results': 'No se encontraron publicaciones.',

        // Location
        'location.title': 'Ubicación',
        'location.subtitle': 'Dónde estamos',
        'location.address.title': 'Dirección',

        // Social Media
        'social.title': 'Conéctese con Nosotros',
        'social.subtitle': 'Siga nuestras actividades y publicaciones',

        // Contact
        'contact.title': 'Redes Sociales',
        'contact.subtitle': 'Conéctese con nosotros',

        // Footer
        'footer.about.title': 'Acerca de',
        'footer.links.title': 'Enlaces Rápidos',
        'footer.contact.title': 'Contacto',
        'footer.copyright': '© 2019 - 2025 Laboratorio de Biofísica de Hongos (Labiofun). Todos los derechos reservados.',

        // Team Members
        'member.susana.role': 'Profesora - Ph.D',
        'member.susana.title': 'Jefa del laboratorio',
        'member.susana.bio': 'Bióloga (Universidad Miguel Hernández, España), especialista en biofísica de superficies fúngicas y en la compleja interacción patógeno-huésped, con énfasis en mecanismos de virulencia, resistencia antimicrobiana, impacto ecosistémico y cambio climático, además de la prospección de compuestos bioactivos para aplicaciones biotecnológicas y terapéuticas.',
        'member.takiya.role': 'Profesora - M.D & Ph.D',
        'member.takiya.bio': 'Médica patóloga (UFRJ), especialista en morfología y anatomía patológica, destacándose en patología renal, cardiovascular y pulmonar, con enfoque en matriz extracelular, reparación y regeneración tisular, terapias celulares y bioingeniería.',
        'member.dario.role': 'Investigador Postdoctoral - M.Sc & Ph.D',
        'member.dario.bio': 'Biólogo (UFMS), especialista en el área de microbiología, con énfasis en micología y enseñanza de biociencias aplicadas a la salud, con enfoque en mecanismos de virulencia, resistencia antimicrobiana e impacto ecosistémico, integrando investigación avanzada y prácticas educativas para promover el conocimiento científico y la salud pública y única (One Health).',
        'member.glauber.bio': 'Alma mater en biofísica (UFRJ), con enfoque en la caracterización estructural y mecánica de superficies fúngicas. Experiencia avanzada en la aplicación de técnicas de vanguardia incluyendo dispersión de luz, análisis viscoelástico, microscopía óptica y electrónica para elucidar la arquitectura molecular, propiedades mecánicas e interacciones fisicoquímicas a micro y nanoescala.',
        'member.juliana.bio': 'Bióloga, su enfoque son los estudios sobre mecanismos de virulencia, resistencia antimicrobiana e impacto ecosistémico, con enfoque en la comprensión de los procesos biológicos que influyen en la patogenicidad microbiana y sus consecuencias ambientales en ecosistemas de manglares.',
        'member.vinicius.bio': 'Farmacéutico (UFRJ), su estudio se centra en la investigación de las alteraciones tisulares y celulares inducidas por la infección por Cryptococcus spp., analizando sus impactos histopatológicos e inmunológicos, además de caracterizar las propiedades fisicoquímicas y morfológicas de las levaduras.',

        // Generic Roles  
        'role.postdoc': 'Posdoctor - M.Sc & Ph.D',
        'role.phd': 'Doctorando - M.Sc',
        'role.masters': 'Maestrando',
        'role.undergrad': 'Iniciación Científica',
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
