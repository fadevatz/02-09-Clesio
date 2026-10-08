/**
 * SCRIPT INTERATIVO - LANDING PAGE DR. CLÉSIO BATISTA
 * Funcionalidades: Modal de Serviços, Carrossel de Depoimentos, WhatsApp API, Scroll Reveal
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. WhatsApp Base URL e Número Oficial
  const WHATSAPP_NUMBER = '5535984434399';

  // 2. Base de Dados dos 12 Serviços do Dr. Clésio Batista
  const servicesData = {
    'psicoterapia-individual': {
      category: '01 Clínica & Cuidado Individual',
      title: 'Psicoterapia Individual e Fases de Vida',
      image: 'assets/images/service-01-individual.jpg',
      description: 'Um espaço seguro, ético e confidencial fundamentado na Terapia Cognitivo-Comportamental (TCC) e práticas humanizadas. Focado na identificação de padrões de pensamento, alívio do sofrimento psicológico e fortalecimento da resiliência.',
      indications: 'Ansiedade generalizada, depressão, TDAH em adultos e adolescentes, elaboração do luto, gestão de estresse, burnout e suporte para adaptação emocional e cultural no exterior.',
      ctaText: 'Agendar Psicoterapia Individual'
    },
    'terapias-integrativas': {
      category: '01 Clínica & Cuidado Individual',
      title: 'Terapias Integrativas, Vínculo e Maternidade',
      image: 'assets/images/service-01-integrativas.jpg',
      description: 'Acolhimento sensível às transformações físicas, hormonais e emocionais dos diferentes ciclos de vida. Une técnicas de regulação do sistema nervoso, atenção plena e terapia da intimidade.',
      indications: 'Apoio perinatal, gestação e pós-parto, climatério e menopausa, mindfulness aplicado à redução da ansiedade, acolhimento da sexualidade e saúde relacional.',
      ctaText: 'Agendar Terapias Integrativas'
    },
    'terapia-de-casal': {
      category: '02 Relações & Família',
      title: 'Terapia de Casal e Alinhamento Conjugal',
      image: 'assets/images/service-02-casal.jpg',
      description: 'Mediação especializada para restabelecer a comunicação saudável, reparar mágoas, reconstruir a intimidade e alinhar expectativas para novos ciclos de vida a dois.',
      indications: 'Crises de comunicação, quebra de confiança ou infidelidade, transição para chegada de filhos, desgaste pela rotina e facilitação de separações amigáveis e conscientes.',
      ctaText: 'Agendar Terapia de Casal'
    },
    'psicoterapia-adolescentes': {
      category: '02 Relações & Família',
      title: 'Psicoterapia para Adolescentes e Parentalidade',
      image: 'assets/images/service-02-adolescente.jpg',
      description: 'Intervenção clínica adaptada à linguagem e aos dilemas da juventude contemporânea, trabalhando em estreita colaboração com os pais e a instituição escolar.',
      indications: 'Ansiedade escolar e fobia social, tempo de tela excessivo e jogos, desregulação emocional, autolesão, conflitos de convivência e orientação parental positiva.',
      ctaText: 'Agendar para Adolescente'
    },
    'psicologia-esportiva': {
      category: '03 Performance, Esportes & eSports',
      title: 'Psicologia Esportiva e Alto Rendimento',
      image: 'assets/images/service-03-esporte.jpg',
      description: 'Treinamento das habilidades psicológicas (mental training) para atletas de elite e competidores que necessitam performar sob extrema pressão.',
      indications: 'Ansiedade pré-competição, foco sob estresse, recuperação emocional de lesões, blindagem psicológica, rotina de excelência e transição de carreira esportiva.',
      ctaText: 'Agendar Psicologia Esportiva'
    },
    'esports-gamers': {
      category: '03 Performance, Esportes & eSports',
      title: 'eSports, Saúde do Gamer e Criadores de Conteúdo',
      image: 'assets/images/service-03-gamer.jpg',
      description: 'Metodologia exclusiva para pro players, streamers e criadores. Trabalha o equilíbrio entre rotina de treino, qualidade do sono e saúde mental no ecossistema digital.',
      indications: 'Controle de tilt e impulsividade em campeonatos, manutenção da tomada de decisão em partidas longas, isolamento, burnout por metas de streaming e manejo de críticas e toxicidade online.',
      ctaText: 'Agendar Consultoria Gamer'
    },
    'nr-01-corporativo': {
      category: '04 Saúde Mental Corporativa & NR-01',
      title: 'Gestão de Riscos Psicossociais (Adequação NR-01)',
      image: 'assets/images/service-04-corporativo.jpg',
      description: 'Consultoria técnica para empresas em conformidade com as novas exigências da NR-01 e PGR. Diagnóstico aprofundado do clima organizacional e plano de ação estruturado.',
      indications: 'Mapeamento de sobrecarga e estresse laboral, conformidade com a fiscalização trabalhista, prevenção de afastamentos e implantação de Programa de Apoio ao Colaborador (EAP).',
      ctaText: 'Solicitar Proposta B2B (NR-01)'
    },
    'treinamentos-corporativos': {
      category: '04 Saúde Mental Corporativa & NR-01',
      title: 'Treinamentos Corporativos e Psicologia de Carreira',
      image: 'assets/images/service-04-treinamento.jpg',
      description: 'Workshops e palestras corporativas para desenvolvimento de lideranças humanizadas, comunicação não violenta e inteligência emocional em equipes de alta entrega.',
      indications: 'Prevenção ao assédio moral e sexual nas empresas, segurança psicológica de times ágeis, mentoria de carreira e suporte humanizado em reestruturações e demissões.',
      ctaText: 'Solicitar Treinamento Corporativo'
    },
    'avaliacao-psicologica': {
      category: '05 Psicologia Pericial & Documentação',
      title: 'Documentação e Avaliação Psicológica',
      image: 'assets/images/service-05-laudos.jpg',
      description: 'Processo diagnóstico estruturado com bateria de testes psicológicos validados pelo CFP (SATEPSI), com emissão de laudos, relatórios e atestados com rigor científico.',
      indications: 'Perícias médicas para INSS, aptidão psicológica para concursos públicos e procedimentos cirúrgicos (bariátrica, vasectomia), pareceres clínicos e escolares.',
      ctaText: 'Agendar Avaliação Psicológica'
    },
    'assistencia-pericial': {
      category: '05 Psicologia Pericial & Documentação',
      title: 'Assistência Técnica Jurídica e Perícias',
      image: 'assets/images/service-05-juridico.jpg',
      description: 'Atuação como assistente técnico de confiança da parte em processos judiciais, formulando quesitos técnicos e pareceres críticos e fundamentados a laudos periciais.',
      indications: 'Ações de guarda e regime de convivência de menores, adoção, interdição e curatela civil, avaliação de alienação parental e mensuração de danos psíquicos.',
      ctaText: 'Solicitar Assistência Técnica Jurídica'
    },
    'palestras-workshops': {
      category: '06 Educação, Palestras & Infoprodutos',
      title: 'Palestras, Workshops e Supervisão Clínica',
      image: 'assets/images/service-06-palestras.jpg',
      description: 'Palestras inspiradoras e práticas para empresas, escolas, órgãos públicos e universidades. Oferece também supervisão clínica continuada para psicólogos.',
      indications: 'Campanhas de conscientização (Setembro Amarelo, Janeiro Branco), saúde mental nas organizações, psicoeducação para pais e suporte técnico para recém-formados em psicologia.',
      ctaText: 'Contratar Palestra ou Supervisão'
    },
    'conteudos-digitais': {
      category: '06 Educação, Palestras & Infoprodutos',
      title: 'Conteúdos Digitais, Cursos e Psicoeducação',
      image: 'assets/images/service-06-digital.jpg',
      description: 'Capacitações online, e-books e programas de desenvolvimento pessoal fundamentados na ciência psicológica para aplicação prática no dia a dia moderno.',
      indications: 'Relação saudável com tecnologia e redes sociais, ferramentas práticas para desacelerar a mente, autocompaixão e hábitos saudáveis para alta performance pessoal.',
      ctaText: 'Conhecer Cursos e Conteúdos'
    }
  };

  // 3. Controle do Modal Interativo de Serviços
  const modalBackdrop = document.getElementById('serviceModal');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalIndications = document.getElementById('modalIndications');
  const modalImg = document.getElementById('modalImg');
  const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  let lastFocusedElement = null;

  function openModal(serviceKey) {
    const data = servicesData[serviceKey];
    if (!data || !modalBackdrop) return;

    lastFocusedElement = document.activeElement;

    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalIndications.textContent = data.indications;
    modalImg.src = data.image;
    modalImg.alt = data.title;

    const message = encodeURIComponent(`Olá, Dr. Clésio! Gostaria de mais informações e agendamento sobre: ${data.title}.`);
    modalWhatsAppBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    modalWhatsAppBtn.innerHTML = `<i class="fa-brands fa-whatsapp"></i> ${data.ctaText}`;

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Move foco para o modal para acessibilidade WCAG
    setTimeout(() => {
      if (modalCloseBtn) modalCloseBtn.focus();
    }, 60);
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';

    // Restaura o foco para o elemento de origem
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  // Gatilhos de abertura do modal
  document.querySelectorAll('[data-service-key]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-service-key');
      openModal(key);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });

    // Focus Trap & Navegação por Teclado no Modal (Harden P3)
    modalBackdrop.addEventListener('keydown', (e) => {
      if (!modalBackdrop.classList.contains('active')) return;

      if (e.key === 'Escape') {
        closeModal();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = modalBackdrop.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  // 3.1. Filtros Rápidos de Serviços (Layout Impeccable P1 & Mockup Clean Grid)
  const filterBtns = document.querySelectorAll('.service-filter-btn');
  const serviceCards = document.querySelectorAll('.topic-card-item, .service-module-block');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetFilter = btn.getAttribute('data-filter');

      // Atualiza estado ativo dos botões
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Filtra os cards e blocos de serviços com transição
      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (targetFilter === 'all' || category === targetFilter) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  // 4. Header Scrolled Effect
  const header = document.querySelector('.header-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 5. Menu Mobile (Acessibilidade WCAG Harden P3)
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('mobile-open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (isOpen) {
          icon.className = 'fa-solid fa-xmark';
          mobileToggle.setAttribute('aria-label', 'Fechar menu de navegação');
        } else {
          icon.className = 'fa-solid fa-bars';
          mobileToggle.setAttribute('aria-label', 'Abrir menu de navegação');
        }
      }
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.setAttribute('aria-label', 'Abrir menu de navegação');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // 6. Carrossel de Depoimentos (Avaliações Verificadas Google Maps 5.0)
  const testimonials = [
    {
      quote: '"Excelente profissional! Extremamente ético, atencioso e pontual. O Dr. Clésio me ajudou profundamente a reencontrar o equilíbrio emocional e superar crises de ansiedade. Recomendo de olhos fechados!"',
      author: 'Avaliação Google Maps • 5.0 ★★★★★ (Paciente Verificada)',
      avatar: 'assets/images/depoimento-juliana.jpg'
    },
    {
      quote: '"O atendimento do Clésio é diferenciado. Ele tem uma escuta acolhedora e condução técnica impecável, sem julgamentos. O consultório aqui em São Sebastião do Paraíso é extremamente acolhedor e a terapia online também funciona perfeitamente."',
      author: 'Avaliação Google Maps • 5.0 ★★★★★ (Paciente Verificado)',
      avatar: 'assets/images/depoimento-carlos.jpg'
    },
    {
      quote: '"Profissional maravilhoso! Fazer psicoterapia com o Dr. Clésio transformou minha relação com o trabalho e a rotina, diminuindo o estresse e trazendo clareza para a vida. Gratidão imensa pelo cuidado e competência."',
      author: 'Avaliação Google Maps • 5.0 ★★★★★ (Paciente Verificada)',
      avatar: 'assets/images/depoimento-mariana.jpg'
    }
  ];

  let currentIndex = 0;
  const quoteElem = document.getElementById('testimonialQuote');
  const authorElem = document.getElementById('testimonialAuthor');
  const avatarElem = document.getElementById('testimonialAvatar');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dotsContainer = document.getElementById('carouselDots');

  function updateTestimonial(index) {
    if (!quoteElem || !authorElem || !avatarElem) return;

    quoteElem.style.opacity = '0';
    authorElem.style.opacity = '0';
    avatarElem.style.opacity = '0';

    setTimeout(() => {
      const item = testimonials[index];
      quoteElem.textContent = item.quote;
      authorElem.textContent = item.author;
      avatarElem.src = item.avatar;

      quoteElem.style.opacity = '1';
      authorElem.style.opacity = '1';
      avatarElem.style.opacity = '1';

      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, idx) => {
          const isActive = idx === index;
          dot.classList.toggle('active', isActive);
          dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
      }
    }, 200);
  }

  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    testimonials.forEach((item, idx) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Ver depoimento ${idx + 1} de ${testimonials.length}`);
      dot.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
      dot.addEventListener('click', () => {
        currentIndex = idx;
        updateTestimonial(currentIndex);
      });
      dotsContainer.appendChild(dot);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateTestimonial(currentIndex);
    });
  }

  let carouselInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  }, 7500);

  const carouselBox = document.querySelector('.testimonials-carousel-wrapper');
  if (carouselBox) {
    carouselBox.addEventListener('mouseenter', () => clearInterval(carouselInterval));
    carouselBox.addEventListener('mouseleave', () => {
      carouselInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
      }, 7500);
    });
  }

  // 7. Scroll Reveal Animation (Intersection Observer Resiliente)
  const revealElements = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    document.documentElement.classList.add('js-ready');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px 50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // 8. Contingência de Contato - Copiar Telefone (Harden P3)
  const copyPhoneBtn = document.getElementById('copyPhoneBtn');
  const copyStatusMsg = document.getElementById('copyStatusMsg');

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', async () => {
      const phoneToCopy = '(35) 98443-4399';
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(phoneToCopy);
        } else {
          const tempInput = document.createElement('input');
          tempInput.value = phoneToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        const feedbackText = copyPhoneBtn.querySelector('.copy-feedback-text');
        const icon = copyPhoneBtn.querySelector('i');
        if (feedbackText) feedbackText.textContent = 'Copiado!';
        if (icon) icon.className = 'fa-solid fa-check';
        copyPhoneBtn.classList.add('copied');
        if (copyStatusMsg) copyStatusMsg.textContent = 'Número de telefone copiado para a área de transferência: (35) 98443-4399';

        setTimeout(() => {
          if (feedbackText) feedbackText.textContent = 'Copiar';
          if (icon) icon.className = 'fa-regular fa-copy';
          copyPhoneBtn.classList.remove('copied');
          if (copyStatusMsg) copyStatusMsg.textContent = '';
        }, 2500);
      } catch (err) {
        console.warn('Falha ao copiar automaticamente:', err);
      }
    });
  }

  // 9. FAQ Accordion (Páginas de Assuntos)
  const faqButtons = document.querySelectorAll('.faq-button');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const faqItem = btn.closest('.faq-item');
      if (!faqItem) return;
      const isActive = faqItem.classList.contains('active');
      
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });

  // 10. Formulário de Agendamento Rápido no WhatsApp (Páginas de Assuntos)
  const topicForms = document.querySelectorAll('.topic-whatsapp-form');
  topicForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nomeInput = form.querySelector('[name="nome"]');
      const telInput = form.querySelector('[name="telefone"]');
      const interesseInput = form.querySelector('[name="interesse"]');
      const msgInput = form.querySelector('[name="mensagem"]');

      const nome = nomeInput ? nomeInput.value.trim() : '';
      const tel = telInput ? telInput.value.trim() : '';
      const interesse = interesseInput ? interesseInput.value.trim() : 'Atendimento Psicológico';
      const msgExtra = msgInput ? msgInput.value.trim() : '';

      let text = `Olá, Dr. Clésio! Meu nome é ${nome}`;
      if (tel) text += ` (${tel})`;
      text += ` e gostaria de agendar uma consulta sobre *${interesse}*.`;
      if (msgExtra) text += ` Mensagem: ${msgExtra}`;

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
});
