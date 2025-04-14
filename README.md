# 📬 API de Notificações

Este projeto consiste em uma **API de Notificações**, desenvolvida com fins educacionais a partir de um exercício prático. A aplicação foi construída utilizando **Node.js**, **Express** e **TypeScript**, com a implementação de boas práticas de segurança, autenticação e registro de logs.

---

## 🔐 Funcionalidades de Segurança

- Middleware de autenticação utilizando **JWT (JSON Web Token)**.
- Controle de taxa de requisições com **express-rate-limit**, para mitigar abusos.
- Gerenciamento de variáveis de ambiente via **dotenv**.
- Registro estruturado de logs com o uso de **Pino** e seus complementos.

---

## 🧪 Testes

Durante o desenvolvimento, os endpoints da API foram testados com a ferramenta **[Insomnia](https://insomnia.rest/)**. É recomendável importar a collection de testes caso deseje validar o comportamento localmente.

---

## 📤 Envio de Notificações por Email

O envio de emails é realizado por meio da plataforma **[Mailtrap](https://mailtrap.io/)**, ideal para testes de integração em ambiente de desenvolvimento.  
> ⚠️ **É necessário criar uma conta gratuita no Mailtrap para utilizar o serviço.**

---

## ⚙️ Integração com Supabase

A autenticação de usuários é integrada ao **[Supabase](https://supabase.com/)**. Para garantir o funcionamento correto da API, é necessário **desativar a configuração "Confirm Email"** na seção de autenticação do painel Supabase. Isso permite o login imediato dos usuários, sem a necessidade de confirmação por email.

---

## 📦 Dependências Instaladas

A seguir, a lista completa dos pacotes utilizados neste projeto, conforme instalados via `npm`:

- `@supabase/supabase-js@2.49.4`
- `@types/bcrypt@5.0.2`
- `@types/express-rate-limit@5.1.3`
- `@types/express@5.0.1`
- `@types/jsonwebtoken@9.0.9`
- `@types/node@22.14.1`
- `@types/nodemailer@6.4.17`
- `bcrypt@5.1.1`
- `dotenv@16.5.0`
- `express-rate-limit@7.5.0`
- `express@5.1.0`
- `i@0.3.7`
- `jsonwebtoken@9.0.2`
- `node-notifier@10.0.1`
- `nodemailer@6.10.1`
- `npm@11.3.0`
- `pino-http@10.4.0`
- `pino-pretty@13.0.0`
- `pino@9.6.0`
- `ts-node-dev@2.0.0`
- `ts-node@10.9.2`

---

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone <url-do-repositório>

2. Comando para executar:
   ```bash
   npm run dev

