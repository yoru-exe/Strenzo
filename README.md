# STRENZO

Live sports hub — installable PWA, plain static files (no build step).

## Deploy to GitHub Pages

1. Create a new GitHub repository and push these files to the `main` branch (keep `index.html` at the repo root).
2. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Push to `main` (or run the workflow from the **Actions** tab). The site goes live at `https://<username>.github.io/<repo>/`.

All paths are relative, so it works both on a project URL (`/<repo>/`) and on a custom domain.
To use a custom domain, add it under **Settings → Pages** and add a `CNAME` file containing the domain to the repo root, then add `CNAME` to the `cp` line in `.github/workflows/deploy.yml`.

After changing any file, bump `VERSION` in `sw.js` so installed copies pick up the update.

## Run locally

    python3 -m http.server 8000

Then open http://localhost:8000 (service workers need localhost or https).
