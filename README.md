<<<<<<< HEAD
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
>>>>>>> origin/dev/zain
