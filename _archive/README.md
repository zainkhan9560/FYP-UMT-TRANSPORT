# _archive: review, then delete

Nothing here is used by the app. It is kept only so that no work was lost during the
cleanup. This folder is git-ignored; run `rm -rf _archive` when you are satisfied.

## stale-root-copy/
An older, pre-rebrand copy of the frontend that had been flattened into the repo root
("UMT Transit" name, SVG placeholder logo, Redux counter demo as `App.jsx`, Admin role in
the role selector). Superseded by `frontend/src`, which has the real UMT logo/seal, the
router, the Landing page and `authSlice`. Whitespace-only differences and empty files were
not archived. Paths mirror the original locations.

## scaffold-leftovers/
Vite/Redux starter files that nothing imports: `App.css`, `hero.png`, `react.svg`,
`vite.svg`, `icons.svg`, `vite-default-favicon.svg`, `counterSlice.js`, and
`pages-Auth.css` (an older auth stylesheet replaced by `styles/auth.css`).

## Git history
Commits that existed only in the nested `frontend/.git` were merged into the root `.git`
and pinned as branches: `backup/ed1e5f4-flattened-ui-rebrand`,
`backup/0bf7ebe-updated-files-botched-merge`, `backup/65b0cdf-updated-project-files`.
