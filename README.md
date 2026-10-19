# AuthFlow

A lightweight Node.js + Express authentication app with a React login UI, email OTP verification, JWT cookie auth, and basic user management.

## Features

- User registration with password hashing
- Email OTP verification flow
- Login and logout with an HTTP-only JWT cookie
- MongoDB user model and CRUD API
- Email sending for OTP delivery
- Responsive React authentication UI

## Tech Stack

- Node.js, Express, MongoDB, Mongoose
- JWT, bcryptjs, Nodemailer
- React + Vite

## Setup

Install dependencies for both apps:

```bash
cd server
npm install
cd ../client
npm install
```

Copy `server/.env.example` to `server/.env` and set your database, JWT, and email credentials. Copy `client/.env.example` to `client/.env` if your API is not running at `http://localhost:3000`.

Run each app in its own terminal:

```bash
cd server
npm run dev
```

```bash
cd client
npm run dev
```

The API runs at `http://localhost:3000` and the UI at `http://localhost:5173`. Set the backend's `CLIENT_URL` to the UI origin so browser requests can include the authentication cookie.

## API Routes

### Auth

- `POST /auth/register` — register user and send OTP
- `POST /auth/verify-email` — verify email with OTP
- `POST /auth/login` — log in and set JWT cookie
- `POST /auth/logout` — clear auth cookie

### Users

- `GET /users` — get all users
- `GET /users/:id` — get one user
- `PUT /users/:id` — update user
- `DELETE /users/:id` — delete user

## Project Structure

```text
client/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .env.example
├── index.html
└── vite.config.js
server/
├── config/
├── controller/
├── middleware/
├── models/
├── routes/
├── utils/
├── index.js
├── package.json
└── .env.example
```
