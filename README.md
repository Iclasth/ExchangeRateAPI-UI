# 🪙 ExchangeRateAPI-UI

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react\&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-frontend-purple?logo=vite)](https://vitejs.dev/)
[![ExchangeRate-API](https://img.shields.io/badge/ExchangeRate%20API-REST-blue)](https://www.exchangerate-api.com/)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?logo=netlify\&logoColor=white)](https://www.netlify.com/)

---

## 🚀 Visão Geral

**ExchangeRateAPI-UI** é uma aplicação web desenvolvida com **React + Vite**, permitindo ao usuário:

• Consultar taxas de câmbio em tempo real
• Converter valores entre moedas
• Visualizar uma lista das principais taxas disponíveis

O projeto consome a **ExchangeRate-API** usando `fetch()` e foi idealizado para treinar:

* Consumo de APIs REST
* Hooks essenciais (`useState`, `useEffect`)
* Componentização e organização de projeto
* Deploy em produção (Netlify)
* Trabalho em equipe com Git & GitHub

---

## 📌 Principais Funcionalidades

✔ Conversão de moedas (Base → Destino)
✔ Atualização automática das taxas ao trocar a moeda base
✔ Lista das 20 primeiras moedas retornadas pela API
✔ Tratamento de estados:

* 🔄 Loading
* ❗ Error
* ✅ Dados disponíveis

✔ Interface simples e direta
✔ Deploy online via Netlify

---

## 🧰 Tecnologias e Ferramentas

* **React 18**
* **Vite**
* **JavaScript (ES6+)**
* **Fetch API**
* **CSS modularizado**
* **Netlify** para deploy
* **Git & GitHub** para versionamento

---

## 📂 Estrutura do Projeto

```
ExchangeRateAPI-UI/
│
├─ exchangerateui-app/        ← App React criado com Vite
│  ├─ src/
│  │  ├─ components/
│  │  │   └─ CurrencyConverter.jsx  ← Componente principal
│  │  ├─ utils/
│  │  │   └─ api.js                 ← Função para chamar a API
│  │  ├─ App.jsx                    ← Interface principal
│  │  ├─ main.jsx                   ← Entrada da aplicação
│  │  └─ styles/                    ← CSS do projeto
│  │
│  ├─ public/                       ← Ícones e assets
│  ├─ index.html
│  └─ package.json
│
└─ README.md
```

---

## ⚙️ Como Executar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/Iclasth/ExchangeRateAPI-UI.git
cd ExchangeRateAPI-UI/exchangerateui-app
```

---

### 2. Instale as dependências

```bash
npm install
```

---

### 3. Execute o servidor de desenvolvimento

```bash
npm run dev
```

Abra no navegador:

```
http://localhost:5173
```

---

## 🔧 Como Fazer Build

```bash
npm run build
```

A pasta `dist/` será gerada, pronta para deploy.

---

## 🌐 Deploy (Netlify)

Você pode fazer deploy de duas formas:

---

### **✔ Deploy automático via GitHub**

No Netlify:

1. Add new site
2. Import from GitHub
3. Selecione o repositório
4. Build command:

```
npm run build
```

5. Publish directory:

```
exchangerateui-app/dist
```

6. Deploy

---

### ✔ Deploy manual (arrastar e soltar)

1. Execute:

```
npm run build
```

2. Vá ao Netlify → Deploys → Deploy manual
3. Envie a pasta **dist/**

---

## 🧮 Exemplos de Uso

• Base: BRL
• Target: USD
• Valor: 10

Resultado exibido:

```
10 BRL = 1.96 USD
```

A aplicação também mostra:

```
Taxa BRL → USD: 0.196023
```

E a lista das principais moedas, como:

```
USD — 0.19
EUR — 0.18
JPY — 28.14
...
```

---

## ✅ Boas Práticas Adotadas

* Hooks React para estados e ciclos de vida
* Componentes reutilizáveis
* Separação entre lógica de API e UI
* Tratamento de erros e loading
* CSS modularizado
* Vite para build rápido
* Git-flow com branches separadas para cada membro

---

## 🧭 Possíveis Melhorias Futuras

* Dropdown de moedas em vez de input manual
* Gráficos de variação cambial
* Histórico de conversões
* Salvar conversões favoritas
* Testes unitários com Vitest
* Internacionalização (i18n)

---

## 🤝 Como Contribuir

1. Faça um fork
2. Crie sua branch:

```bash
git checkout -b feature/minha-feature
```

3. Commit com mensagens semânticas:

```
feat: nova conversão
fix: corrigindo estado de loading
```

4. Abra um Pull Request

---

## 📬 Autor / Equipe

Projeto desenvolvido por **Iclasth** em colaboração com equipe acadêmica.

🔗 GitHub: [https://github.com/Iclasth](https://github.com/Iclasth)

🔗 LinkedIn: [https://www.linkedin.com/in/iclasoliveira](https://www.linkedin.com/in/iclasoliveira)


