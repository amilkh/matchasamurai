# Match-a-SamurAI website

Bilingual (EN/JA) static site for Match-a-SamurAI (NomadAI). Hosted on GitHub Pages, custom domain `matchasamurai.tech`.

## Structure
- `index.html` — Home
- `services.html` — Services & Solutions
- `leadership.html` — Team
- `kaust-startups.html` — KAUST · TAQADAM free-consultation landing page
- `style.css`, `app.js` — shared styles + EN/JA language toggle (persists via localStorage)
- `CNAME` — custom domain for GitHub Pages

Content regenerated from the prior Google Site + the team's bilingual translation sheet.

## Deploy (GitHub Pages)
```
gh repo create matchasamurai --public --source=. --remote=origin --push
```
Then: repo Settings → Pages → Source = `main` / root. Enable "Enforce HTTPS".

## DNS (Namify / .TECH panel)
Apex A records → GitHub Pages:
```
A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153
CNAME  www  amilkh.github.io
```
HTTPS cert auto-provisions after DNS resolves (can take up to ~24h).

## Editing content
Text lives inline in the HTML as paired `<span class="en">…</span><span class="ja">…</span>`.
Regenerate from source with `build_site.py` (kept in project scratch), or edit HTML directly.

## TODO
- ~~Swap the text logo for the real logo asset~~ DONE (img/logo.png, pulled from Gsite).
- Confirm the intake form link is current: https://forms.gle/ReiTpMpVx523zwNr6
