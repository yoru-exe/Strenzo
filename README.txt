STRENZO PWA

Service workers only run over https:// or http://localhost, so host this folder on any static host
(Netlify, Vercel, GitHub Pages, Cloudflare Pages) or test locally with:
  cd strenzo && python3 -m http.server 8000
then open http://localhost:8000

After changing any file, bump VERSION in sw.js so users get the update.
