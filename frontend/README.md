# UMTGo frontend

Vite + React 19 + Redux Toolkit + React Router. Landing page, login, signup and password reset are implemented; the forms are not yet connected to the backend (each has a `Backend integration point` comment).

## Structure

```text
src/
├── app/                 Redux store
├── assets/
│   ├── brand/           UMT logo and seal
│   └── campus/          Campus photos (shuttle, lawn, building)
├── components/
│   ├── auth/            AuthLayout, AuthInput, RoleSelector
│   └── landing/         LiveMapCard
├── features/auth/       authSlice
├── pages/
│   ├── landing/         Landing.jsx  (route: /)
│   └── auth/            Login, Signup, ForgotPassword
├── styles/              landing.css, auth.css
└── utils/               constants
```

## Run

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
npm run build
npm run lint
```

Routes: `/` landing, `/login`, `/signup`, `/forgot-password`. Unknown paths redirect to `/`.
