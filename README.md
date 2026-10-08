# Landing Page - Dr. Clésio Batista (Psicologia & Desenvolvimento)

Landing page premium desenvolvida com base no mockup de alta fidelidade (Padrão Visual Editorial JRMK). Focada em posicionamento de autoridade profissional, acolhimento humanizado e alta conversão através do WhatsApp.

---

## 🎨 Identidade Visual & Design System

- **Background Principal:** `#FAF7F2` (Off-white / Linho nobre acolhedor)
- **Header Navbar & Destaque Hero:** `#F4EADE` (Harmonizado com a paleta oficial)
- **Cor Primária (Ações e Destaques):** `#6D3224` (Terracota Nobre)
- **Acento Editorial / Numeração:** `#B88E53` (Dourado Antigo)
- **Rodapé / Contraste Profundo:** `#102620` (Verde Floresta / Petróleo Escuro)
- **Tipografia:**
  - Títulos & Frases Editoriais: *Playfair Display* (Serifa clássica editorial, pesos 500-700 e itálico nobre)
  - Corpo de Texto & UI: *DM Sans* (Sans-serif moderna de alta legibilidade e performance)
- **Melhorias Impeccable (P1, P2 e P3):**
  - **P1 Layout & Clarify:** Barra de filtros por persona (Você & Família, Atletas, NR-01, Perícias, Palestras) e microcopy ético pré-clique (sigilo CFP, resposta ágil).
  - **P2 Typeset & Polish:** Transição para itálico editorial clássico nas citações de impacto e unificação cromática dos botões primários em terracota oficial.
  - **P3 Harden & WCAG:** Gerenciamento de foco e focus-trap no modal, `aria-expanded` dinâmico no mobile, navegação por teclado nos dots do carrossel, suporte a `prefers-reduced-motion` e botão de contingência para copiar telefone.

---

## 📐 Estrutura de Dobras

1. **Header Sticky:**
   - Logomarca horizontal oficial com símbolo circular dourado/verde e registro profissional (**CRP: 04/48009**).
   - Menu com rolagem suave: *Início*, *Sobre*, *Serviços*, *Depoimentos*, *Contato*.
   - Botão de ação direta: *"Fale Comigo"* (WhatsApp).

2. **Hero Section 100% (Largura Total):**
   - Imagem de fundo oficial em alta definição cobrindo 100% da largura da tela (`hero-banner-novo.jpg`), com o Dr. Clésio em seu consultório.
   - Textos sobrepostos com contraste calibrado:
     - Tagline: *SEU BEM-ESTAR EM PRIMEIRO LUGAR*
     - H1: *Cuidar da sua mente também é investir no seu futuro.*
     - Parágrafo descritivo de acolhimento.
   - Botão de conversão principal (*"📅 Agende sua consulta"*) e botão outline (*"Conheça meus serviços"*).
   - 3 Selos de Confiança: *Atendimento seguro & ético*, *Presencial, online & internacional*, *Atendimento em todo o Brasil e no exterior*.

3. **Sobre o Profissional:**
   - Apresentação humanizada da história e metodologia de escuta do psicólogo Clésio Batista.
   - Card lateral com citação manuscrita (*"Mais do que um atendimento, uma parceria pela sua evolução."*) e os 4 pilares com ícones estilizados (Ética e sigilo, Atendimento humanizado, Baseado em evidências, Híbrido).

4. **Hub de Serviços Editoriais (01 a 06 com 12 Especialidades):**
   - `01 Clínica & Cuidado Individual` (Psicoterapia Individual e Fases de Vida | Terapias Integrativas, Vínculo e Maternidade)
   - `02 Relações & Família` (Terapia de Casal e Alinhamento Conjugal | Psicoterapia para Adolescentes e Parentalidade)
   - `03 Performance, Esportes & eSports` (Psicologia Esportiva e Alto Rendimento | eSports, Saúde do Gamer e Criadores de Conteúdo)
   - `04 Saúde Mental Corporativa & NR-01` (Gestão de Riscos Psicossociais Adequação NR-01 | Treinamentos Corporativos e Psicologia de Carreira)
   - `05 Psicologia Pericial & Documentação` (Documentação e Avaliação Psicológica | Assistência Técnica Jurídica e Perícias)
   - `06 Educação, Palestras & Infoprodutos` (Palestras, Workshops e Supervisão Clínica | Conteúdos Digitais, Cursos e Psicoeducação)
   - **Modal Interativo de Serviços:** Ao clicar em *"Saiba mais"*, o visitante visualiza um modal com a foto em alta qualidade, a descrição aprofundada, as principais indicações clínicas e um botão com mensagem contextualizada para agendar no WhatsApp.

5. **Banner Intermediário de Conversão (Breakout CTA):**
   - Fotografia panorâmica inspiradora ao amanhecer, chamada de ação direta e citação *"Seu bem-estar é a nossa prioridade."*

6. **Depoimentos (Prova Social):**
   - Carrossel interativo fluido com feedbacks reais de pacientes, fotos circulares com moldura dourada, paginação por dots e navegação por setas.

7. **Footer Institucional (Dark Forest):**
   - Símbolo circular oficial, contatos diretos (São Sebastião do Paraíso - MG, telefone `(35) 98443-4399`, e-mail `contato@clesiobatista.com.br`) e redes sociais.

8. **Botão Flutuante de WhatsApp:**
   - Acesso permanente no canto inferior direito com animação e tooltip *"Agende pelo WhatsApp"*.

---

## 🚀 Como Rodar Localmente

Execute o servidor local no terminal PowerShell ou Bash:

```bash
python -m http.server 3000
```

Abra no navegador em: `http://localhost:3000`
