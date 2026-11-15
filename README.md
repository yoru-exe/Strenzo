<p align="center">
  <img src="og-image.png" alt="STRENZO — Live sports. One place." width="100%" />
</p>

<p align="center">
  <img alt="PWA" src="https://img.shields.io/badge/PWA-installable-35d6a0?style=for-the-badge&logo=pwa&logoColor=white&labelColor=0b141a" />
  <img alt="Offline ready" src="https://img.shields.io/badge/Offline-ready-35d6a0?style=for-the-badge&logo=googlechrome&logoColor=white&labelColor=0b141a" />
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-e34f26?style=for-the-badge&logo=html5&logoColor=white&labelColor=0b141a" />
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572b6?style=for-the-badge&logo=css3&logoColor=white&labelColor=0b141a" />
  <img alt="JavaScript" src="https://img.shields.io/badge/Vanilla_JS-f7df1e?style=for-the-badge&logo=javascript&logoColor=f7df1e&labelColor=0b141a" />
  <img alt="No build step" src="https://img.shields.io/badge/Build_step-none-35d6a0?style=for-the-badge&labelColor=0b141a" />
  <img alt="GitHub Pages" src="https://img.shields.io/badge/Deploy-GitHub_Pages-35d6a0?style=for-the-badge&logo=github&logoColor=white&labelColor=0b141a" />
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-35d6a0?style=for-the-badge&labelColor=0b141a" />
</p>

<!--
  Live badges: replace USERNAME and REPO, then remove this comment.

<p align="center">
  <a href="https://github.com/USERNAME/REPO/actions/workflows/deploy.yml"><img alt="Deploy" src="https://img.shields.io/github/actions/workflow/status/USERNAME/REPO/deploy.yml?branch=main&style=flat-square&label=deploy&labelColor=0b141a&color=35d6a0" /></a>
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/USERNAME/REPO?style=flat-square&labelColor=0b141a&color=35d6a0" />
  <img alt="Stars" src="https://img.shields.io/github/stars/USERNAME/REPO?style=flat-square&labelColor=0b141a&color=35d6a0" />
</p>
-->

<h1 align="center">STRENZO</h1>
<p align="center"><b>Live Sports Network</b> — a fast, clean, installable live sports hub.</p>

---

## Features

- **Discover, Live now and Favorites** — browse every event, jump to what is live, and save the ones you care about
- **Sport categories and search** — filter by sport or search teams and leagues
- **Smart server failover** — automatically moves between Primary, Fallback and Mirror servers
- **Status page** — live health of every server with latency, uptime and recent history
- **Installable PWA** — add to your home screen, works offline for the app shell
- **Friendly offline popup** — clear messaging when you are offline or the service is unreachable
- **No build step** — plain HTML, CSS and JavaScript

## Deploy to GitHub Pages

1. Create a new GitHub repository and push these files to the `main` branch (keep `index.html` at the repo root).
2. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Push to `main` (or run the workflow from the **Actions** tab). The site goes live at `https://<username>.github.io/<repo>/`.

All paths are relative, so it works both on a project URL (`/<repo>/`) and on a custom domain.
To use a custom domain, add it under **Settings → Pages** and add a `CNAME` file containing the domain to the repo root, then add `CNAME` to the `cp` line in `.github/workflows/deploy.yml`.

After changing any file, bump `VERSION` in `sw.js` so installed copies pick up the update.

## Other hosts

On Cloudflare Pages or Netlify, publish the repo root. The included `_headers` file sets sensible caching and security headers
(it is ignored by GitHub Pages). Inter is bundled in `fonts/` (SIL Open Font License), so no external requests are needed for fonts.

## Repo cover (shown when the repo link is shared, e.g. on Discord)

Upload `.github/social-preview.png` under **Settings → General → Social preview → Edit → Upload an image**.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 (service workers need localhost or https).

---

<p align="center">Released under the <a href="LICENSE">MIT License</a> · STRENZO · Build by AziF &amp; Yoru</p>
