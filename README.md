# Cadastro de Paciente 🚀

Sistema simples de cadastro de pacientes utilizando **Node.js**, **Express.js**, **HTML**, **CSS** e **JavaScript**.

## 📌 Funcionalidades

- Cadastro de pacientes
- Validação de campos
- Validação de CPF
- Sanitização dos dados
- Comunicação entre frontend e backend
- Tratamento de erros

---

# 📁 Estrutura do Projeto

```txt
login-completo/
│
├── middlewares/
├── routes/
├── public/
└── server.js
```

---

# 🛠️ Tecnologias

- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript

---

# ⚙️ Middlewares

## validarCampos.js
Verifica se todos os campos foram preenchidos.

## validarCpf.js
Valida se o CPF possui 11 números e contém apenas números.

## sanitizarDados.js
Remove espaços extras e transforma o email em minúsculo.

---

# ▶️ Como Executar

## 1️⃣ Instalar dependências

```bash
npm init -y
npm install express
```

---

## 2️⃣ Rodar o servidor

```bash
node server.js
```

---

# 🌐 Acessar no navegador

```txt
http://localhost:3000
```

---

# ☁️ Deploy no Render

## Build Command

```txt
npm install
```

## Start Command

```txt
node server.js
```
