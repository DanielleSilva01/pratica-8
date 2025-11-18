# 🧩 Prática 08 – Sistema de Rotas (Web e Mobile)


## 📂 Organização do Projeto

estudo-de-caso/
├── web/        → Aplicação em React (Vite)
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
└── mobile/     → Aplicação em React Native (Expo)
    ├── App.js
    ├── package.json
    └── screens/
        ├── HomeScreen.js
        └── DetailsScreen.js


## 🌍 Projeto Web – React com Vite

### ▶️ Como executar

```bash
cd web
npm install
npm run dev
```

A aplicação ficará disponível em:
👉 **[http://localhost:5173](http://localhost:5173)**

### 📌 Funcionalidades implementadas

* **Rota inicial ("/")** → mostra uma **listagem de produtos**.
* **Rota dinâmica ("/detalhes/:id")** → apresenta informações completas do item escolhido.
* Navegação feita com **React Router DOM**, utilizando componentes como `BrowserRouter`, `Routes` e `Link`.

### 📦 Dependências principais

* **React**
* **React Router DOM**
* **Vite**

## 📱 Projeto Mobile – React Native + Expo

### ▶️ Como executar

```bash
cd mobile
npm install
npx expo start
```

O Expo exibirá um QR Code para abrir o app no celular (Expo Go) ou opção para rodar no navegador.

### 📌 Funcionalidades implementadas

* **Tela Home** → exibe os produtos disponíveis.
* **Tela Detalhes** → mostra dados do item selecionado.
* Navegação através do **React Navigation (Stack Navigator)**.

### 📦 Dependências principais

* **React Native**
* **Expo**
* **@react-navigation/native**
* **@react-navigation/native-stack**

## 📝 Considerações

* Tanto a versão **Web** quanto a **Mobile** seguem o mesmo conjunto de produtos.
* As rotas foram implementadas conforme solicitado na **Prática 08**, contemplando navegação e telas específicas.
* O projeto está organizado e funcional nos dois ambientes.

## 📸 Demonstrações

* Web: navegação entre lista e detalhes no navegador.
* Mobile: telas acessíveis via Expo com transição entre Home → Detalhes.
