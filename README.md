# Yann — Portfolio (HTML, CSS & JavaScript)

> **Personal portfolio website**

---

## ✅ Demo
Open `index.html` in your browser.

---

## 📌 Features
- Custom visual identity (colors + typography inspired by persona 5 and goth aesthetics)
- Custom cursor (mouse follower)
- Dynamic background color on scroll
- Projects section with a **carousel** (previous/next)
- Navigation menu (anchors) linking to sections

---

## 🧱 Project Structure
- `index.html` — Main page layout
- `style.css` — Styling and layout (responsive-friendly)
- `script.js` — Cursor effects, scroll behavior, carousel logic
- `assets/` — Static files (e.g., profile image)

---

## 🚀 Deployment
This is a static web project. You can deploy it to:
- GitHub Pages
- Netlify
- Vercel (static)

### Tip
Make sure the `assets/` folder is included in the deployment so your images load correctly.

---

## 🧭 About the Carousel
The carousel is controlled in `script.js` using:
- `indiceAtivo` (active index)
- Button events for **previous/next**
- CSS transforms to move cards horizontally

---

# README.md (Português — Brasil)

# Yann — Portfólio (HTML, CSS & JavaScript)

> **Site de portfólio pessoal** com seu perfil, seção de projetos (carrossel) e links de contato.

---

## ✅ Demo
Abra o arquivo `index.html` no navegador.

---

## 📌 Principais recursos
- Identidade visual (cores + tipografia inspirado em persona 5 e em elementos góticos)
- Cursor customizado (segue o mouse)
- Mudança dinâmica de cor no fundo ao fazer scroll
- Seção de Projetos com **carrossel** (anterior/próximo)
- Menu de navegação com links para as seções do site

---

## 🧱 Estrutura do projeto
- `index.html` — Estrutura principal da página
- `style.css` — Estilos e layout
- `script.js` — Cursor, comportamento no scroll e lógica do carrossel
- `assets/` — Arquivos estáticos (ex.: foto de perfil)

---

## 🚀 Deploy/Hospedagem
Este é um projeto estático. Você pode hospedar em:
- GitHub Pages
- Netlify
- Vercel (static)

### Dica importante
Garanta que a pasta `assets/` também seja publicada no deploy para as imagens carregarem corretamente.

---

## 🧭 Sobre o carrossel
O carrossel é controlado no `script.js` com:
- `indiceAtivo` (índice do card ativo)
- Eventos dos botões **anterior/próximo**
- `transform: translateX()` no CSS para mover os cards