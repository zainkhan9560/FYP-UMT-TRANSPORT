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
>>>>>>> 92695f8c7e7ef7a0531c382aa7a202039ca2fa59
