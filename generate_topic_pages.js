const fs = require('fs');
const path = require('path');

const topics = [
  {
    slug: 'ansiedade',
    icon: 'fa-wind',
    category: 'individual-familia',
    name: 'Ansiedade',
    tagline: 'ANSIEDADE & PÂNICO',
    title: 'Psicólogo para Ansiedade: desacelere a mente e retome o controle',
    heroDesc: 'Quando a preocupação toma conta do corpo e do pensamento, a vida fica pequena. A terapia devolve espaço para respirar com segurança e clareza.',
    prose: [
      'A ansiedade é uma resposta natural do organismo diante de ameaças, mas quando se torna constante, intensa e desproporcional às situações reais, ela passa a limitar a sua liberdade, o seu sono e a sua qualidade de vida.',
      'Sintomas como pensamentos acelerados, sensação contínua de alerta, aperto no peito e medo incapacitante de perder o controle são sinais claros de que o sistema nervoso necessita de acolhimento e regulação técnica.',
      'No atendimento com o Dr. Clésio Batista, fundamentado na Terapia Cognitivo-Comportamental (TCC) e em técnicas de regulação emocional, você aprende a identificar gatilhos, desarmar distorções cognitivas e desenvolver ferramentas práticas para retomar a serenidade no dia a dia.'
    ],
    checklist: [
      'Preocupação excessiva e pensamentos acelerados',
      'Sensação de aperto no peito, taquicardia ou falta de ar',
      'Tensão muscular e inquietação física constante',
      'Dificuldade para dormir, insônia ou sono agitado',
      'Medo constante de crises de pânico ou perda de controle'
    ]
  },
  {
    slug: 'depressao',
    icon: 'fa-cloud-showers-heavy',
    category: 'individual-familia',
    name: 'Depressão',
    tagline: 'DEPRESSÃO & SAÚDE EMOCIONAL',
    title: 'Psicólogo para Depressão: acolhimento e resgate do sentido',
    heroDesc: 'A depressão não é falta de vontade ou fraqueza. É um sofrimento legítimo que merece cuidado, tempo e escuta qualificada.',
    prose: [
      'A depressão afeta a forma como você sente, pensa e lida com as atividades diárias. Ela se manifesta através de um desânimo profundo, perda de energia, apatia e a sensação de que nada mais tem o mesmo valor de antes.',
      'Muitas vezes, a pessoa tenta se forçar a "ficar bem" pela cobrança social, o que aumenta a culpa e a exaustão. A terapia oferece um refúgio seguro onde essa dor não precisa ser mascarada nem julgada.',
      'O trabalho clínico conduzido pelo Dr. Clésio Batista une empatia e evidências científicas para reativar gradualmente pequenos passos de bem-estar, reorganizar padrões de pensamento e reconstruir um caminho com propósito e vitalidade.'
    ],
    checklist: [
      'Perda de interesse e prazer nas atividades cotidianas',
      'Cansaço físico e mental persistente sem causa física',
      'Sentimento de inutilidade, culpa ou desamparo',
      'Alterações marcantes no sono e no apetite',
      'Dificuldade de concentração e desesperança quanto ao futuro'
    ]
  },
  {
    slug: 'burnout',
    icon: 'fa-battery-quarter',
    category: 'individual-familia',
    name: 'Burnout',
    tagline: 'BURNOUT & ESTRESSE PROFISSIONAL',
    title: 'Psicólogo para Burnout: recupere sua energia e saúde no trabalho',
    heroDesc: 'Quando o trabalho consome a energia de viver, o corpo avisa antes da mente aceitar. A terapia te ajuda a impor limites e recuperar a saúde.',
    prose: [
      'A Síndrome de Burnout resulta do estresse crônico no ambiente de trabalho que não foi gerido com sucesso. Ela se caracteriza por um esgotamento físico e mental extremo, distanciamento afetivo e sensação de ineficácia profissional.',
      'O profissional afetado muitas vezes continua se exigindo entregas de alta performance, ignorando sinais físicos como dores de cabeça, insônia, alterações gastrointestinais e momentos de pânico na véspera da jornada de trabalho.',
      'O acompanhamento terapêutico atua na reestruturação da relação com a carreira, fortalecimento de limites interpessoais, manejo de sobrecarga e recuperação da saúde integral sem abdicar dos seus objetivos de vida.'
    ],
    checklist: [
      'Exaustão extrema e esgotamento físico e mental',
      'Sensação de incapacidade ou ineficácia nas tarefas',
      'Cinismo, desapego ou irritabilidade no ambiente profissional',
      'Dores corporais, insônia e ansiedade antes do trabalho',
      'Dificuldade total de se desligar dos compromissos na folga'
    ]
  },
  {
    slug: 'luto',
    icon: 'fa-heart-crack',
    category: 'individual-familia',
    name: 'Luto',
    tagline: 'LUTO & PROCESSAMENTO DE PERDAS',
    title: 'Psicólogo para Luto: acolhimento em tempos de perda',
    heroDesc: 'O luto não precisa ser vivido sozinho, nem no tempo que os outros esperam.',
    prose: [
      'Perder alguém — ou perder uma etapa da vida, um vínculo, um projeto — mobiliza dor, saudade, raiva, culpa e desamparo. Cada luto é único e não segue regras.',
      'No espaço terapêutico, você pode nomear o que sente sem precisar se recompor para agradar ninguém. A escuta humana permite que a dor seja atravessada, não evitada.',
      'Ao longo do processo, trabalhamos a ressignificação da perda, a memória afetiva e a retomada gradual da vida, preservando o lugar de quem se foi dentro da sua história.'
    ],
    checklist: [
      'Dor intensa e contínua que não diminui com o tempo',
      'Sensação de anestesia, paralisia ou vazio constante',
      'Sentimento de culpa ou desamparo por seguir a vida',
      'Isolamento e dificuldade de falar sobre a perda',
      'Dificuldade para retomar a rotina e compromissos'
    ]
  },
  {
    slug: 'autoconhecimento',
    icon: 'fa-compass',
    category: 'individual-familia',
    name: 'Autoconhecimento',
    tagline: 'AUTOCONHECIMENTO & EVOLUÇÃO',
    title: 'Psicólogo para Autoconhecimento: descubra quem você é de verdade',
    heroDesc: 'Você não precisa estar em crise para cuidar de si. O autoconhecimento é uma escolha de vida e desenvolvimento pessoal.',
    prose: [
      'Viver no piloto automático é um dos maiores desafios da atualidade. Muitas vezes tomamos decisões baseadas nas expectativas dos outros, sem compreender com clareza o que realmente faz sentido para a nossa própria vida.',
      'A psicoterapia voltada ao autoconhecimento proporciona um mergulho estruturado sobre a sua trajetória, crenças centrais, forças pessoais e bloqueios emocionais que repetem ciclos indesejados.',
      'Ao compreender suas dinâmicas internas com o suporte profissional do Dr. Clésio, você ganha autonomia para fazer escolhas mais maduras, construir relacionamentos saudáveis e viver com autenticidade.'
    ],
    checklist: [
      'Sensação de estar vivendo no "piloto automático"',
      'Dificuldade para definir limites pessoais e dizer "não"',
      'Repetição de padrões de relacionamento prejudiciais',
      'Busca por clareza profissional, pessoal e relacional',
      'Desejo de alinhar suas escolhas aos seus reais valores'
    ]
  },
  {
    slug: 'autoestima',
    icon: 'fa-wand-magic-sparkles',
    category: 'individual-familia',
    name: 'Autoestima',
    tagline: 'AUTOESTIMA & FORTALECIMENTO',
    title: 'Psicólogo para Autoestima: reconecte-se com seu valor pessoal',
    heroDesc: 'A autoestima não é vaidade — é a forma como você se reconhece, se respeita e se escolhe todos os dias.',
    prose: [
      'A baixa autoestima se desenvolve através de experiências de rejeição, críticas severas ou comparações contínuas. Ela se traduz em um diálogo interno punitivo, onde a pessoa duvida da sua capacidade e se sente constantemente insuficiente.',
      'Isso afeta diretamente os relacionamentos amorosos, o avanço na carreira e a tomada de decisões, fazendo com que a pessoa aceite menos do que merece por medo de não ser aceita.',
      'O trabalho terapêutico com o Dr. Clésio foca na desconstrução da autocrítica destrutiva, fortalecimento do autocuidado, reconhecimento das suas conquistas e consolidação do respeito próprio.'
    ],
    checklist: [
      'Autocrítica severa e diálogo interno punitivo',
      'Comparação constante com outras pessoas nas redes e na vida',
      'Necessidade excessiva de aprovação e validação externa',
      'Sentimento de insuficiência ou síndrome do impostor',
      'Dificuldade de aceitar elogios e reconhecer o próprio mérito'
    ]
  },
  {
    slug: 'equilibrio-feminino',
    icon: 'fa-spa',
    category: 'individual-familia',
    name: 'Equilíbrio emocional feminino',
    tagline: 'SAÚDE DA MULHER & MATERNIDADE',
    title: 'Equilíbrio Emocional Feminino: acolhimento em cada fase da vida',
    heroDesc: 'Cada fase da vida de uma mulher pede uma nova forma de se habitar — da gestação ao climatério, da carreira à maternidade.',
    prose: [
      'As transformações físicas, hormonais, sociais e emocionais acompanham a mulher em diferentes ciclos: a transição para a vida adulta, a maternidade (ou a decisão de não tê-la), o puerpério, as exigências de carreira e o climatério.',
      'A sobrecarga decorrente da dupla jornada e das cobranças estéticas e familiares frequentemente gera ansiedade, culpas invisíveis e exaustão emocional.',
      'O atendimento oferece um espaço sensível e embasado para integrar essas fases, fortalecendo a regulação emocional, a saúde relacional e o resgate da identidade própria.'
    ],
    checklist: [
      'Sobrecarga emocional, dupla jornada e exaustão',
      'Desafios emocionais na gestação, pós-parto ou puerpério',
      'Mudanças de humor e ansiedade no climatério e menopausa',
      'Conflitos no equilíbrio entre maternidade e vida profissional',
      'Acolhimento da saúde relacional e autoimagem'
    ]
  },
  {
    slug: 'terapia-de-casal',
    icon: 'fa-heart-circle-check',
    category: 'individual-familia',
    name: 'Terapia de Casal',
    tagline: 'RELAÇÕES & ALINHAMENTO CONJUGAL',
    title: 'Terapia de Casal: reconstrua a comunicação e a intimidade',
    heroDesc: 'Superar ruídos de comunicação, reparar mágoas e alinhar expectativas para novos ciclos de vida a dois.',
    prose: [
      'Com o passar do tempo, o estresse do dia a dia, falhas na comunicação e mudanças individuais podem criar ruídos e afastamento entre os parceiros, gerando discussões repetitivas sem solução.',
      'A Terapia de Casal conduzida pelo Dr. Clésio Batista atua como um espaço neutro, ético e seguro para que ambas as partes possam expressar suas necessidades, ouvir verdadeiramente e identificar os ciclos destrutivos do casal.',
      'O foco é restabelecer o diálogo empático, reconstruir a confiança, alinhar planos futuros e, quando necessário, mediar transições de forma consciente e respeitosa.'
    ],
    checklist: [
      'Discussões frequentes por motivos banais sem resolução',
      'Sensação de distanciamento e falta de intimidade afetiva',
      'Dificuldade para alinhar objetivos futuros, rotina e finanças',
      'Desgaste na relação após a chegada dos filhos',
      'Necessidade de superar quebras de confiança e mágoas'
    ]
  },
  {
    slug: 'psicologia-esportiva',
    icon: 'fa-trophy',
    category: 'performance-esports',
    name: 'Psicologia Esportiva & eSports',
    tagline: 'ALTO RENDIMENTO & ESPORTS',
    title: 'Psicologia Esportiva: treinamento mental para alta performance',
    heroDesc: 'Foco sob pressão, controle emocional e rotina de excelência para atletas de elite, pro players e criadores.',
    prose: [
      'No esporte tradicional e nos eSports, a preparação física e tática só atinge seu ápice quando acompanhada de um treinamento psicológico estruturado (Mental Training).',
      'A ansiedade pré-competitiva, a dificuldade de manter a concentração em momentos decisivos, o "tilt" em campeonatos e a gestão da pressão por patrocinadores e torcida podem minar o talento de um atleta.',
      'Com metodologia especializada, o Dr. Clésio trabalha a blindagem psicológica, controle de foco, recuperação emocional de lesões e rotinas de alta performance para competidores de elite.'
    ],
    checklist: [
      'Ansiedade pré-competitiva e bloqueio em momentos decisivos',
      'Dificuldade de manter o foco e concentração sob estresse',
      'Controle de impulsividade e "tilt" em partidas de eSports',
      'Reabilitação emocional e confiança após lesões graves',
      'Gestão da exposição pública e transição de carreira esportiva'
    ]
  },
  {
    slug: 'nr-01-corporativo',
    icon: 'fa-building-user',
    category: 'empresas-nr01',
    name: 'Adequação NR-01 & Corporativo',
    tagline: 'SAÚDE MENTAL CORPORATIVA & NR-01',
    title: 'Gestão de Riscos Psicossociais (NR-01) & Consultoria B2B',
    heroDesc: 'Consultoria técnica para empresas em conformidade legal com a NR-01, PGR e Programa de Apoio ao Colaborador (EAP).',
    prose: [
      'As recentes atualizações nas Normas Regulamentadoras (NR-01) tornaram obrigatória a identificação, avaliação e gestão dos riscos psicossociais nos ambientes de trabalho pelas organizações.',
      'Problemas como sobrecarga, assédio, falta de clareza de papéis e estresse ocupacional aumentam o absenteísmo, afastamentos por burnout e riscos de passivos trabalhistas.',
      'O Dr. Clésio Batista oferece consultoria corporativa especializada para mapeamento de clima, laudos de risco psicossocial, treinamentos de liderança humanizada e implementação de Programas de Apoio ao Colaborador.'
    ],
    checklist: [
      'Adequação técnica obrigatória às novas exigências da NR-01/PGR',
      'Prevenção de estresse laboral, burnout e assédio nas equipes',
      'Diagnóstico e mapeamento do clima e riscos psicossociais',
      'Implantação de Programa de Apoio ao Colaborador (EAP)',
      'Redução de absenteísmo, turnover e passivos trabalhistas'
    ]
  },
  {
    slug: 'pericias-juridicas',
    icon: 'fa-scale-balanced',
    category: 'pericias-juridico',
    name: 'Perícias & Assistência Técnica',
    tagline: 'DOCUMENTAÇÃO & ASSISTÊNCIA TÉCNICA',
    title: 'Psicologia Pericial & Assistência Técnica Jurídica',
    heroDesc: 'Avaliações psicológicas fundamentadas, formulação de quesitos e emissão de pareceres técnicos com rigor científico.',
    prose: [
      'Em processos judiciais que envolvem questões de família, cíveis ou trabalhistas, a atuação do psicólogo como assistente técnico de confiança da parte é determinante para garantir o devido respaldo técnico e ético.',
      'O assistente técnico formula quesitos específicos, acompanha avaliações periciais, analisa criticamente os laudos formulados pelo perito do juízo e elabora pareceres técnicos fundamentados.',
      'Com rigor metodológico e respaldo no Código de Ética do CFP, o Dr. Clésio presta assistência técnica pericial em ações de guarda, alienação parental, regulamentação de convivência e avaliação de danos psíquicos.'
    ],
    checklist: [
      'Atuação como Assistente Técnico em processos judiciais cíveis e de família',
      'Formulação de quesitos técnicos e pareceres críticos fundamentados',
      'Avaliação psicológica formal para guarda, convivência e menoridade',
      'Mensuração técnica de danos psíquicos e interdição civil',
      'Avaliações diagnósticas com bateria de testes validados pelo CFP (SATEPSI)'
    ]
  },
  {
    slug: 'palestras-workshops',
    icon: 'fa-chalkboard-user',
    category: 'educacao-palestras',
    name: 'Palestras & Workshops',
    tagline: 'EDUCAÇÃO, PALESTRAS & SUPERVISÃO',
    title: 'Palestras, Workshops Corporativos e Supervisão Clínica',
    heroDesc: 'Capacitações inspiradoras para empresas, escolas e instituições, além de supervisão técnica para psicólogos.',
    prose: [
      'A psicoeducação é uma poderosa ferramenta de transformação coletiva. Levar palestras e workshops práticos para empresas, instituições de ensino e órgãos públicos promove conscientização e prevenção em saúde mental.',
      'Temas como prevenção ao suicídio (Setembro Amarelo), saúde mental no trabalho (Janeiro Branco), inteligência emocional e comunicação não violenta são abordados com dinamismo, empatia e base científica.',
      'Além disso, o Dr. Clésio oferece supervisão clínica continuada para psicólogos e recém-formados, orientando a condução de casos clínicos complexos e o aprimoramento da prática terapêutica.'
    ],
    checklist: [
      'Palestras para Campanhas de Conscientização (Setembro Amarelo, Janeiro Branco)',
      'Workshops de Comunicação Não Violenta e Liderança Humanizada',
      'Psicoeducação para pais e educadores em instituições de ensino',
      'Treinamentos corporativos sobre resiliência e saúde mental',
      'Supervisão clínica técnica individual e em grupo para psicólogos'
    ]
  }
];

function generatePageHtml(topic) {
  const otherTopics = topics.filter(t => t.slug !== topic.slug);
  
  // Clean grid with 6 or 7 other topics matching the screenshot
  const relatedCardsHtml = otherTopics.slice(0, 6).map(t => `
          <!-- Card: ${t.name} -->
          <a href="${t.slug}.html" class="topic-card-item">
            <div>
              <div class="topic-card-icon-circle">
                <i class="fa-solid ${t.icon}"></i>
              </div>
              <h3 class="topic-card-title">${t.name}</h3>
              <p class="topic-card-desc">${t.heroDesc}</p>
            </div>
            <span class="topic-card-link">Saiba mais <i class="fa-solid fa-arrow-right"></i></span>
          </a>
  `).join('\n');

  const checklistHtml = topic.checklist.map(item => `
              <li><i class="fa-solid fa-check"></i> <span>${item}</span></li>
  `).join('\n');

  const proseHtml = topic.prose.map(p => `<p>${p}</p>`).join('\n');

  const whatsappMsg = encodeURIComponent(`Olá, Dr. Clésio! Gostaria de mais informações e agendamento sobre o atendimento para ${topic.name}.`);

  // Generate options for the select form
  const selectOptionsHtml = topics.map(t => `
                    <option value="${t.name}" ${t.slug === topic.slug ? 'selected' : ''}>${t.name}</option>
  `).join('');

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${topic.name} | Dr. Clésio Batista • Psicologia & Desenvolvimento</title>
  <meta name="description" content="${topic.heroDesc}">
  <meta name="author" content="Clésio Batista">
  <meta name="robots" content="index, follow">

  <!-- Open Graph / Redes Sociais -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${topic.name} | Dr. Clésio Batista • CRP 04/48009">
  <meta property="og:description" content="${topic.heroDesc}">
  <meta property="og:image" content="assets/images/dr-clesio-azul.png?v=20261008">

  <!-- Favicon Oficial -->
  <link rel="icon" type="image/png" href="assets/images/favicon.png">
  <link rel="apple-touch-icon" href="assets/images/simbolo-clesio.png">

  <!-- Fontes Google (Playfair Display & DM Sans) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

  <!-- Ícones Font Awesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

  <!-- Folhas de Estilos com Cache Busting -->
  <link rel="stylesheet" href="styles.css?v=20261008_03">
  <link rel="stylesheet" href="topic.css?v=20261008_03">

  <!-- Estilo Crítico Estrutural (Garante renderização imediata sem dependência de cache de navegador) -->
  <style>
    [data-reveal] { opacity: 1 !important; transform: none !important; }
    .breadcrumb-list { display: flex !important; list-style: none !important; padding: 0 !important; margin: 0 !important; gap: 0.65rem; }
    .breadcrumb-list li { display: inline-flex !important; list-style: none !important; }
    .topic-hero-grid { display: grid !important; grid-template-columns: 1.25fr 0.75fr !important; gap: 3.5rem !important; align-items: center !important; }
    .topic-hero-image-wrap { max-width: 400px !important; border-radius: 28px !important; overflow: hidden !important; }
    .topic-hero-image-wrap img, .topic-hero-img { width: 100% !important; max-width: 400px !important; height: 440px !important; object-fit: cover !important; object-position: center top !important; border-radius: 28px !important; display: block !important; }
    .topic-main-grid { display: grid !important; grid-template-columns: 1.35fr 0.85fr !important; gap: 3.5rem !important; align-items: start !important; }
    .services-clean-grid { display: grid !important; grid-template-columns: repeat(3, 1fr) !important; gap: 1.75rem !important; }
    .topic-banner-pill-card { display: flex !important; align-items: center !important; justify-content: space-between !important; border-radius: 28px !important; }
    .topic-contact-grid { display: grid !important; grid-template-columns: 1.15fr 0.95fr !important; gap: 3.5rem !important; }
    .topic-footer-grid { display: grid !important; grid-template-columns: 1.4fr 1.1fr 1fr !important; gap: 3.5rem !important; }
    ul.topic-checklist, ul.topic-contact-items-list, ul.topic-footer-links-list { list-style: none !important; padding: 0 !important; }
    @media (max-width: 992px) {
      .topic-hero-grid, .topic-main-grid, .topic-contact-grid, .topic-footer-grid { grid-template-columns: 1fr !important; }
      .services-clean-grid { grid-template-columns: repeat(2, 1fr) !important; }
      .topic-hero-image-wrap img, .topic-hero-img { height: 360px !important; }
      .topic-banner-pill-card { flex-direction: column !important; }
    }
    @media (max-width: 640px) {
      .services-clean-grid { grid-template-columns: 1fr !important; }
    }
  </style>
</head>
<body>

  <!-- ==========================================================================
       HEADER & NAVBAR FIXA (MOCKUP)
       ========================================================================== -->
  <header class="header-navbar">
    <div class="container nav-wrapper">
      <a href="index.html#inicio" class="brand-identity" aria-label="Página Inicial - Clésio Batista">
        <img src="assets/images/logo-horizontal-nav.png?v=20261008" alt="Clésio Batista - Psicologia & Desenvolvimento • CRP 04/48009" class="nav-brand-logo">
      </a>

      <!-- Menu Desktop -->
      <nav>
        <ul class="nav-menu-links" id="navMenu">
          <li><a href="index.html#inicio" class="nav-item-link">Início</a></li>
          <li><a href="index.html#sobre" class="nav-item-link">Sobre</a></li>
          <li><a href="index.html#servicos" class="nav-item-link active">Tratamentos</a></li>
          <li><a href="index.html#depoimentos" class="nav-item-link">Depoimentos</a></li>
          <li><a href="#contato" class="nav-item-link">Contato</a></li>
        </ul>
      </nav>

      <!-- Botão CTA Header -->
      <div class="nav-action-cta">
        <a href="https://wa.me/5535984434399?text=${whatsappMsg}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i class="fa-brands fa-whatsapp"></i> Agendar Consulta
        </a>
      </div>

      <!-- Toggle Mobile -->
      <button class="mobile-toggle" id="mobileToggle" aria-label="Abrir menu de navegação" aria-expanded="false" aria-controls="navMenu">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </header>

  <main>
    <!-- ==========================================================================
         BREADCRUMB
         ========================================================================== -->
    <nav class="breadcrumb-container" aria-label="Navegação estrutural">
      <div class="container">
        <ul class="breadcrumb-list">
          <li><a href="index.html">Início</a></li>
          <li class="separator"><i class="fa-solid fa-chevron-right"></i></li>
          <li><a href="index.html#servicos">Tratamentos</a></li>
          <li class="separator"><i class="fa-solid fa-chevron-right"></i></li>
          <li class="current">${topic.name}</li>
        </ul>
      </div>
    </nav>

    <!-- ==========================================================================
         TOPIC HERO SECTION (MOCKUP: TAG + H1 + DESC + 2 BOTÕES + FOTO DO PROFISSIONAL)
         ========================================================================== -->
    <section class="topic-hero-section">
      <div class="container topic-hero-grid">
        <div class="topic-hero-content">
          <span class="topic-pill-badge">${topic.tagline}</span>
          <h1 class="topic-hero-title">${topic.title}</h1>
          <p class="topic-hero-desc">${topic.heroDesc}</p>
          
          <div class="topic-hero-ctas">
            <a href="https://wa.me/5535984434399?text=${whatsappMsg}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <i class="fa-brands fa-whatsapp"></i> Agendar Consulta
            </a>
            <a href="#contato" class="btn btn-outline">
              Ver formas de contato
            </a>
          </div>
        </div>

        <div class="topic-hero-image-wrap">
          <img src="assets/images/dr-clesio-azul.png?v=20261008" alt="Dr. Clésio Batista Psicólogo" class="topic-hero-img">
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         TOPIC MAIN CONTENT & CARD SINAIS FREQUENTES
         ========================================================================== -->
    <section class="topic-main-section">
      <div class="container topic-main-grid">
        
        <!-- PROSE CONTENT (ESQUERDA) -->
        <div class="topic-prose-content">
          ${proseHtml}
        </div>

        <!-- SIDEBAR CARD (DIREITA: SINAIS FREQUENTES) -->
        <aside class="topic-sidebar-card">
          <h3 class="topic-sidebar-title">Sinais frequentes</h3>
          <ul class="topic-checklist">
${checklistHtml}
          </ul>

          <div class="topic-location-note">
            <i class="fa-solid fa-location-dot"></i>
            <span>Atendimento particular, presencial em <strong>São Sebastião do Paraíso/MG</strong> e online, para você ou quem precisar.</span>
          </div>
        </aside>

      </div>
    </section>

    <!-- ==========================================================================
         EXPLORE OUTROS TEMAS DA CLÍNICA (MOCKUP)
         ========================================================================== -->
    <section class="servicos-section">
      <div class="container">
        <div class="section-header-center">
          <span class="eyebrow">OUTROS ATENDIMENTOS</span>
          <h2 class="section-main-title">Explore outros temas da clínica</h2>
        </div>

        <div class="services-clean-grid">
${relatedCardsHtml}
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         BANNER DE CONVERSÃO EM PÍLULA (MOCKUP: O PRIMEIRO PASSO PODE SER HOJE)
         ========================================================================== -->
    <section class="topic-banner-section" style="padding: 2rem 0 4.5rem;">
      <div class="container">
        <div class="topic-banner-pill-card">
          <div class="topic-banner-pill-text">
            <h2 class="topic-banner-pill-title">O primeiro passo pode ser hoje</h2>
            <p class="topic-banner-pill-desc">
              Agende sua sessão de psicoterapia humanizada — presencial em São Sebastião do Paraíso/MG ou online, onde você estiver.
            </p>
          </div>
          <div class="topic-banner-pill-actions">
            <a href="https://wa.me/5535984434399?text=${whatsappMsg}" target="_blank" rel="noopener noreferrer" class="btn-banner-gold">
              <i class="fa-brands fa-whatsapp"></i> Agendar Consulta
            </a>
            <a href="tel:+5535984434399" class="btn-banner-outline">
              <i class="fa-solid fa-phone"></i> Ligue agora
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         FAQ ACCORDION (MOCKUP: PERGUNTAS QUE COSTUMO RECEBER)
         ========================================================================== -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header-center">
          <span class="eyebrow">DÚVIDAS FREQUENTES</span>
          <h2 class="section-main-title">Perguntas que costumo receber</h2>
        </div>

        <div class="faq-accordion-container">
          <div class="faq-item active">
            <button class="faq-button" type="button">
              <span>Como funciona a primeira consulta?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
              <p>A primeira conversa é um encontro de acolhimento. Conversamos sobre o que te trouxe à terapia, sua história e suas expectativas. A partir daí, construímos juntos o caminho terapêutico, sem pressa e sem julgamentos.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-button" type="button">
              <span>Quanto tempo dura uma sessão?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
              <p>As sessões individuais de psicoterapia têm duração média de 50 minutos, com frequência semanal ou quinzenal, conforme a avaliação clínica e necessidade de cada pessoa.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-button" type="button">
              <span>O atendimento pode ser online?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
              <p>Sim! O atendimento online tem a mesma eficácia comprovada do presencial, autorizado pelo CFP, com total sigilo e comodidade para você realizar de onde estiver.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-button" type="button">
              <span>A psicoterapia é indicada para casos simples?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
              <p>Sim. Você não precisa esperar uma crise profunda para buscar ajuda. A terapia é um espaço de prevenção, autoconhecimento e alívio para qualquer sofrimento ou momento de transição emocional.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-button" type="button">
              <span>Como faço para agendar?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
              <p>Você pode clicar nos botões de WhatsApp desta página ou preencher o formulário abaixo. Retornarei o contato para combinarmos o melhor dia e horário para você.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         SEÇÃO DE CONTATO COMPLETA (MOCKUP: VAMOS CONVERSAR SOBRE O SEU MOMENTO)
         ========================================================================== -->
    <section class="topic-contact-section" id="contato">
      <div class="container">
        <div class="topic-contact-header">
          <span class="eyebrow">CONTATO</span>
          <h2 class="section-main-title">Vamos conversar sobre o seu momento</h2>
          <p class="section-subtitle">
            Atendimento particular presencial em São Sebastião do Paraíso/MG e online para todo o Brasil. Envie uma mensagem e retorno pessoalmente.
          </p>
        </div>

        <div class="topic-contact-grid">
          <!-- Coluna 1: Informações de Contato + Card do Mapa -->
          <div class="topic-contact-info-col">
            <ul class="topic-contact-items-list">
              <li class="topic-contact-item-row">
                <div class="topic-contact-icon-box">
                  <i class="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <strong>WhatsApp:</strong> <a href="https://wa.me/5535984434399" target="_blank" rel="noopener noreferrer">(35) 98443-4399</a>
                </div>
              </li>
              <li class="topic-contact-item-row">
                <div class="topic-contact-icon-box">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div>
                  <strong>Telefone:</strong> <a href="tel:+5535984434399">(35) 98443-4399</a>
                </div>
              </li>
              <li class="topic-contact-item-row">
                <div class="topic-contact-icon-box">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <strong>E-mail:</strong> <a href="mailto:contato@clesiobatista.com.br">contato@clesiobatista.com.br</a>
                </div>
              </li>
              <li class="topic-contact-item-row">
                <div class="topic-contact-icon-box">
                  <i class="fa-brands fa-instagram"></i>
                </div>
                <div>
                  <strong>Instagram:</strong> <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">@clesiobatista</a>
                </div>
              </li>
              <li class="topic-contact-item-row">
                <div class="topic-contact-icon-box">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <strong>Atendimento:</strong> Rua Manoel Palma, R. Antônio Gomes Viêira, 20 - Lagoinha, São Sebastião do Paraíso – MG • Presencial e Online
                </div>
              </li>
            </ul>

            <!-- Prévia do Mapa -->
            <div class="topic-map-preview-card">
              <div class="topic-map-image-frame">
                <iframe src="https://maps.google.com/maps?q=Rua%20Manoel%20Palma%2C%2020%2C%20Lagoinha%2C%20S%C3%A3o%20Sebasti%C3%A3o%20do%20Para%C3%ADso%20-%20MG&t=&z=16&ie=UTF8&iwloc=&output=embed" title="Localização São Sebastião do Paraíso - MG" loading="lazy"></iframe>
              </div>
              <a href="https://www.google.com/maps/place/Psic%C3%B3logo+Cl%C3%A9sio+Pimenta/@-20.9197504,-46.9834424,17z/data=!3m1!4b1!4m6!3m5!1s0x94b7179c0cd8a1a7:0x1cf9488d000985c5!8m2!3d-20.9197504!4d-46.9834424!16s%2Fg%2F11hbfh08fh" target="_blank" rel="noopener noreferrer" class="topic-map-link-btn">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Abrir no Google Maps
              </a>
            </div>
          </div>

          <!-- Coluna 2: Formulário Interativo de Agendamento -->
          <div class="topic-contact-form-card">
            <h3 class="topic-form-title">Agendar consulta</h3>
            <p class="topic-form-subtitle">Preencha e a mensagem será aberta no WhatsApp</p>

            <form class="topic-whatsapp-form">
              <div class="topic-form-field">
                <label class="topic-form-label" for="formNome">Nome</label>
                <input type="text" id="formNome" name="nome" class="topic-form-input" placeholder="Seu nome completo" required>
              </div>

              <div class="topic-form-field">
                <label class="topic-form-label" for="formTelefone">Telefone / WhatsApp</label>
                <input type="tel" id="formTelefone" name="telefone" class="topic-form-input" placeholder="(35) 99999-9999" required>
              </div>

              <div class="topic-form-field">
                <label class="topic-form-label" for="formInteresse">Interesse</label>
                <select id="formInteresse" name="interesse" class="topic-form-select">
${selectOptionsHtml}
                </select>
              </div>

              <div class="topic-form-field">
                <label class="topic-form-label" for="formMensagem">Mensagem (opcional)</label>
                <textarea id="formMensagem" name="mensagem" class="topic-form-textarea" placeholder="Conte brevemente o que você busca na terapia..."></textarea>
              </div>

              <button type="submit" class="btn-whatsapp-submit">
                <i class="fa-brands fa-whatsapp"></i> Enviar pelo WhatsApp
              </button>

              <p class="topic-form-microcopy">
                <i class="fa-solid fa-lock"></i> Seus dados são usados apenas para contato, com total sigilo.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- ==========================================================================
       RODAPÉ LIGHT (MOCKUP: 3 COLUNAS)
       ========================================================================== -->
  <footer class="topic-footer-light">
    <div class="container">
      <div class="topic-footer-grid">
        <!-- Coluna 1: Marca & Registro -->
        <div class="topic-footer-col">
          <div class="topic-footer-brand-header">
            <img src="assets/images/logo-horizontal-nav.png?v=20261008" alt="Clésio Batista" class="topic-footer-logo-img">
          </div>
          <p class="topic-footer-desc">
            Clésio Batista | Psicologia & Desenvolvimento • CRP: 04/48009.<br>
            Atendimento particular, presencial em São Sebastião do Paraíso/MG e online para todo o Brasil e exterior.
          </p>
        </div>

        <!-- Coluna 2: Contato -->
        <div class="topic-footer-col">
          <h4>CONTATO</h4>
          <ul class="topic-footer-links-list">
            <li><i class="fa-brands fa-whatsapp" style="color: var(--primary); margin-right: 0.4rem;"></i> (35) 98443-4399</li>
            <li><i class="fa-solid fa-phone" style="color: var(--primary); margin-right: 0.4rem;"></i> (35) 98443-4399</li>
            <li><i class="fa-solid fa-envelope" style="color: var(--primary); margin-right: 0.4rem;"></i> contato@clesiobatista.com.br</li>
            <li><i class="fa-solid fa-location-dot" style="color: var(--primary); margin-right: 0.4rem;"></i> São Sebastião do Paraíso – MG</li>
          </ul>
        </div>

        <!-- Coluna 3: Tratamentos -->
        <div class="topic-footer-col">
          <h4>TRATAMENTOS</h4>
          <ul class="topic-footer-links-list">
            <li><a href="ansiedade.html">Ansiedade</a></li>
            <li><a href="depressao.html">Depressão</a></li>
            <li><a href="burnout.html">Burnout</a></li>
            <li><a href="luto.html">Luto</a></li>
            <li><a href="autoconhecimento.html">Autoconhecimento</a></li>
            <li><a href="autoestima.html">Autoestima</a></li>
            <li><a href="equilibrio-feminino.html">Equilíbrio emocional feminino</a></li>
          </ul>
        </div>
      </div>

      <!-- Barra Inferior -->
      <div class="topic-footer-bottom-bar">
        <span>© Clésio Batista • Todos os direitos reservados. CRP: 04/48009</span>
        <div style="display: flex; gap: 1.5rem;">
          <a href="#" style="color: inherit;">Política de Privacidade</a>
          <a href="#" style="color: inherit;">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="script.js?v=20261008_03"></script>
</body>
</html>`;
}

// Write files
const outputDir = path.join(__dirname);

topics.forEach(topic => {
  const filePath = path.join(outputDir, `${topic.slug}.html`);
  const htmlContent = generatePageHtml(topic);
  fs.writeFileSync(filePath, htmlContent, 'utf8');
  console.log(`Página atualizada com estrutura completa do mockup: ${topic.slug}.html`);
});

console.log('Todas as 12 páginas foram geradas com sucesso!');
