[![AuthFlow Banner](https://capsule-render.vercel.app/api?type=waving&color=0:8A9B68,100:2B2620&height=180&section=header&text=AuthFlow&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38)](#)

**Stack Used (Stage 1):**

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) [![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/) [![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongoosejs.com/) [![JWT](https://img.shields.io/badge/JWT-planned-lightgrey?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](#the-learning-path) [![React](https://img.shields.io/badge/React-planned-lightgrey?style=for-the-badge&logo=react&logoColor=white)](#the-learning-path)

## One Auth System, Rebuilt At Every Stage

> A hands-on learning repo that grows the same authentication system from raw Node.js all the way up to a React + Vite frontend — one deliberate stage at a time.

Instead of building auth once and calling it done, this repo rebuilds it repeatedly: starting with a bare Express + MongoDB CRUD API, then layering in real authentication, then a frontend, then a modern frontend. Each stage is a checkpoint you can read, run, and compare against the last.

**Raw CRUD today. Hashing, sessions, and a UI on the way.**

[Quick start](#getting-started) · [Where it stands](#where-the-project-stands) · [Learning path](#the-learning-path) · [Project structure](#project-structure)

## The Learning Path

[#the-learning-path](#the-learning-path)

|        | Stage                        | Focus                                                         | Status         |
| ------ | ----------------------------- | -------------------------------------------------------------- | -------------- |
| **01** | Raw Node.js + Express         | Plain CRUD API over a `User` model with MongoDB               | ✅ In progress |
| **02** | Express + JWT / sessions      | Password hashing, login, protected routes, refresh tokens, RBAC, CSRF | ⏳ Planned     |
| **03** | Vanilla JS frontend           | A framework-free UI talking to the authenticated API           | ⏳ Planned     |
| **04** | React + Vite frontend         | A modern SPA rebuild of the same auth flows                    | ⏳ Planned     |

### Why rebuild it four times?

[#why-rebuild-it-four-times](#why-rebuild-it-four-times)

| No shortcuts             | Visible growth                             | One flow, many lenses                          |
| ------------------------- | ------------------------------------------- | ----------------------------------------------- |
| Nothing is scaffolded in. | Each stage's commits show what changed and why. | See the same login/session problem solved at different layers. |

## Where The Project Stands

[#where-the-project-stands](#where-the-project-stands)

The repo is currently mid-**Stage 01**. What exists is a working Express API backed by MongoDB with basic user CRUD — this is the foundation the auth layer gets bolted onto next.

```
flowchart LR
	A[Client / REST tool] --> B[Express API]
	B --> C[(MongoDB via Mongoose)]
	classDef client fill:#8a9b68,color:#ffffff,stroke:#2b2620,stroke-width:2px;
	classDef data fill:#937b63,color:#ffffff,stroke:#2b2620,stroke-width:2px;
	class A client;
	class B client;
	class C data;
```

There is **no password hashing, no login route, and no auth middleware yet** — every `/users` route is open. That's intentional: Stage 01 is about getting a clean CRUD baseline in place before authentication is layered on top in Stage 02.

## Tech Stack

[#tech-stack](#tech-stack)

| Layer          | Technology                     |
| -------------- | ------------------------------- |
| Runtime        | Node.js (ESM)                  |
| Backend        | Express 5                      |
| Database       | MongoDB with Mongoose          |
| Config         | dotenv                         |
| Cross-origin   | cors                           |
| Dev tooling    | Nodemon                        |

## Project Structure

[#project-structure](#project-structure)

```
AuthFlow/
├── server/
│   ├── config/
│   │   └── db.js          # MongoDB connection via Mongoose
│   ├── models/
│   │   └── User.js        # name, email, password (plaintext for now)
│   ├── index.js            # Express app + /users CRUD routes
│   ├── .env.example        # PORT, DB_URL
│   └── package.json
└── README.md
```

## Getting Started

[#getting-started](#getting-started)

### Prerequisites

[#prerequisites](#prerequisites)

- Node.js 18 or newer
- npm
- A running MongoDB instance (local or Atlas)

### Install dependencies

[#install-dependencies](#install-dependencies)

```
cd server
npm install
```

### Configure the server

[#configure-the-server](#configure-the-server)

Copy `server/.env.example` to `server/.env` and fill in your values:

```
PORT=3000
DB_URL=mongodb://127.0.0.1:27017/workshop
```

Do not commit real credentials.

### Run it

[#run-it](#run-it)

```
cd server
npm run dev
```

The API starts on the port set in `.env` and logs a successful MongoDB connection on startup.

## API Endpoints (Stage 01)

[#api-endpoints-stage-01](#api-endpoints-stage-01)

All routes are currently unauthenticated — this is the CRUD baseline, not the finished auth API.

| Method  | Endpoint       | Description             | Auth |
| ------- | -------------- | ------------------------ | ---- |
| `GET`   | `/users`       | List all users, newest first | No   |
| `GET`   | `/users/:id`   | Get a single user by ID  | No   |
| `POST`  | `/users`       | Create a user            | No   |
| `PUT`   | `/users/:id`   | Update a user            | No   |

## Roadmap

[#roadmap](#roadmap)

```
flowchart TB
	S1["Stage 01\nRaw CRUD API\n(current)"] --> S2["Stage 02\nHashing, JWT/sessions,\nprotected routes, RBAC, CSRF"]
	S2 --> S3["Stage 03\nVanilla JS frontend"]
	S3 --> S4["Stage 04\nReact + Vite frontend"]
	classDef done fill:#8a9b68,color:#ffffff,stroke:#2b2620,stroke-width:2px;
	classDef planned fill:#d5ddbc,color:#2b2620,stroke:#6f7d4a,stroke-width:2px;
	class S1 done;
	class S2,S3,S4 planned;
```

## Learning Notes / Current Limitations

[#learning-notes--current-limitations](#learning-notes--current-limitations)

- Passwords are stored as plain strings — bcrypt hashing arrives in Stage 02.
- There's no login route or session/JWT issuance yet — anyone can hit any `/users` route.
- No delete endpoint yet.
- No frontend yet — Stages 03 and 04 will add a UI on top of the authenticated API.
