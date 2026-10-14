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
