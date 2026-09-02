# Landing Page - Dr. Clésio Pimenta (Psicólogo Clínico - CRP 04/48009)

Landing Page moderna, responsiva e performática desenvolvida para o psicólogo **Dr. Clésio Pimenta**.

## 🎨 Paleta de Cores Utilizada
- **Fundo Escuro (Obsidian)**: `#101112`
- **Verde Floresta (Primary)**: `#163A2F`
- **Verde Jade (Primary Light)**: `#3F7F6A`
- **Verde Menta / Sábio (Accent)**: `#86B8A4`
- **Off-White (Texto & Detalhes)**: `#F1F4F2`

## 🚀 Tecnologias & Funcionalidades
- **HTML5 Semântico & SEO Completo**: Meta tags, Open Graph (WhatsApp/Facebook), schema.
- **CSS3 Moderno**: Variáveis CSS, Glassmorphism, Gradientes suaves, Animações interativas e Design 100% Responsivo.
- **JavaScript ES6+**: Menu mobile drawer, animações scroll-reveal, acordeão de perguntas frequentes (FAQ), widget interativo do WhatsApp.
- **Docker & Nginx**: Configuração pronta para deploy com Nginx Alpine em containerized environment.

## 🐳 Executando com Docker

### 1. Build da Imagem
```bash
docker build -t clesio-pimenta-landing .
```

### 2. Rodando o Container
```bash
docker run -d -p 8080:80 --name clesio-landing clesio-pimenta-landing
```
Acesse o site em: `http://localhost:8080`

---
*Desenvolvido com padrão visual premium e otimização para conversões via WhatsApp.*
