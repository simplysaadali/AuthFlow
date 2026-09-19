# AuthFlow

A lightweight Node.js + Express authentication backend for user signup, email OTP verification, login, JWT cookie auth, and basic user management.

## Features

- User registration with password hashing
- Email OTP verification flow
- Secure login with JWT cookie
- Logout support
- MongoDB user model and CRUD API
- Email sending for OTP delivery

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- JWT
- bcryptjs
- Nodemailer

## Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` folder:

```env
PORT=3000
DB_URL=mongodb://127.0.0.1:27017/authflow
JWT_SECRET=your_secret_key
EMAIL_USER=you@example.com
EMAIL_PASS=your_app_password
```

Run the app:

```bash
npm run dev
```

The server runs at `http://localhost:3000`.

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
server/
├── config/
├── controller/
├── middleware/
├── models/
├── routes/
├── utils/
├── index.js
├── package.json
└── .env
```

## Notes

This project is a backend auth starter and is still evolving. The core flow is in place, and the next improvements would usually include validation, route protection, and tests.