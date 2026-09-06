<p align="center">
	<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,50:0f766e,100:f59e0b&height=190&section=header&text=AuthFlow&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38" alt="AuthFlow banner" />
</p>

<p align="center">
	<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,js&theme=light" height="52" alt="Node.js, Express, MongoDB, and JavaScript" />
</p>

# AuthFlow

### Make the request. Verify the human. Keep the session.

AuthFlow is a small Express + MongoDB authentication playground. It is being built in public, one useful layer at a time: registration, email OTP verification, password hashing, JWT cookies, and user management.

> **Status:** backend in progress. Expect sharp edges while the auth flow is being tightened.

## Stack

`Node.js` · `Express 5` · `MongoDB` · `Mongoose` · `bcryptjs` · `jsonwebtoken` · `Nodemailer`

## Start here

Requirements: Node.js 18+, npm, MongoDB, and an email account for OTP delivery.

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

Fill in `.env` before starting the server:

```env
PORT=3000
DB_URL=mongodb://127.0.0.1:27017/authflow
JWT_SECRET=replace-me
EMAIL_USER=you@example.com
EMAIL_PASS=your-app-password
```

Keep `.env` private. The API listens on `http://localhost:3000`.

## Routes

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/auth/register` | Create a user and send an OTP |
| `POST` | `/auth/verify-email` | Confirm the email with the OTP |
| `POST` | `/auth/login` | Sign in and issue a JWT cookie |
| `POST` | `/auth/logout` | Clear the session cookie |
| `GET` | `/users` | List users |
| `GET` | `/users/:id` | Read one user |
| `PUT` | `/users/:id` | Update a user |
| `DELETE` | `/users/:id` | Delete a user |

Send JSON bodies to the auth routes. Registration expects `name`, `email`, and `password`; verification expects `email` and `otp`.

## Shape of the project

```text
server/
├── config/       MongoDB connection
├── controller/   Auth, OTP, and user logic
├── middleware/   JWT authentication middleware
├── models/       Mongoose schemas
├── routes/       /auth and /users endpoints
└── utils/        Cookies, tokens, and email delivery
```

## Next up

- Protect user routes with auth middleware
- Add validation, rate limiting, and refresh-token handling
- Add tests and a small frontend
