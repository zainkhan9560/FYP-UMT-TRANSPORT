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
