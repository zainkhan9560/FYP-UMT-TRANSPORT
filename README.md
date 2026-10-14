<<<<<<< HEAD
<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# UMTGo — University Transport Tracking

The repository is organized as a separate frontend and backend application.

## Folder structure

```text
FYP/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── .env                 # create locally; never commit credentials
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/               # static public assets
│   ├── src/
│   │   ├── app/              # app-level setup
│   │   ├── assets/           # images and campus assets
│   │   ├── components/       # reusable UI components
│   │   ├── features/         # feature state/slices
│   │   ├── pages/            # route-level screens
│   │   ├── styles/           # page stylesheets
│   │   ├── utils/            # constants and helpers
│   │   ├── App.jsx           # application routes
│   │   ├── index.css
│   │   └── main.jsx          # React entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Run locally

### Backend

1. Open a terminal in `backend/` and run `npm install`.
2. Create `backend/.env` and set `MONGO_URI` and optionally `PORT` (defaults to `5000`).
3. Run `npm run dev` (or `npm start`).

### Frontend

1. Open a second terminal in `frontend/` and run `npm install`.
2. Run `npm run dev` and open the local URL printed by Vite.

`node_modules`, Git internals, archived duplicate files, and generated build/cache files are intentionally not included. They can be recreated locally and should not be shared as project source.
>>>>>>> dev/zain
=======
# UMT Transit (FYP)

Campus bus tracking app. Currently implements the authentication UI (login, signup, password recovery); no backend is connected yet.

## Structure

```
FYP/
├── frontend/                 Vite + React 19 + Redux Toolkit + Tailwind v4
│   ├── public/               Static assets (favicon)
│   └── src/
│       ├── app/              Redux store
│       ├── assets/campus/    UMT campus photos used by the auth screens
│       ├── components/auth/  AuthLayout, AuthInput, RoleSelector
│       ├── components/brand/ UmtLogo (swap in the official seal here)
│       ├── features/auth/    authSlice
│       ├── pages/            Login, Signup, ForgotPassword
│       ├── styles/           auth.css
│       └── utils/            constants
└── README.md
```

## Getting started

```bash
cd frontend
npm install
npm run dev      # dev server
npm run lint
npm run build
```

## Notes for backend integration

- Each page has a `Backend integration point` comment where the API call belongs.
- Signup only offers `student` and `driver`. The server must still reject privileged roles and re-validate every field; client checks are UX only.
- Password recovery shows the same message regardless of whether the email exists, to prevent account enumeration. Keep that behavior server-side.
<<<<<<< HEAD
>>>>>>> 92695f8c7e7ef7a0531c382aa7a202039ca2fa59
=======
>>>>>>> origin/dev/zain
>>>>>>> dev/zain
