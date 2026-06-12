# The Open Seasons — Website

Production site for theopenseasons.net. Next.js 14 (App Router), fully static, deployed on Vercel.

## Pages

- `/` — Homepage: animated seasonal hero, services, STR band, why-us, service area, quote form
- `/airbnb-turnovers` — Dedicated STR/host landing page: process, pricing, FAQ, host inquiry form
- `sitemap.xml` and `robots.txt` are generated automatically

## Deploy (one-time setup, ~20 minutes)

### 1. Push to GitHub

```bash
cd open-seasons-site
git init
git add .
git commit -m "Initial site"
gh repo create open-seasons-site --private --source=. --push
# or create the repo on github.com and: git remote add origin <url> && git push -u origin main
```

### 2. Import to Vercel

1. vercel.com → Add New → Project → import `open-seasons-site`
2. Framework preset auto-detects Next.js — no settings changes needed
3. Deploy. You'll get a `*.vercel.app` preview URL immediately

### 3. Wire up the quote form (Formspree, free tier)

1. Sign up at formspree.io with the business email
2. Create a form named "Quote Requests" — it gives you an ID like `xqkrpyzw`
3. In Vercel → Project → Settings → Environment Variables, add:
   - Name: `NEXT_PUBLIC_FORMSPREE_ID`
   - Value: your form ID
4. Redeploy (Vercel → Deployments → Redeploy)
5. Submit a test quote on the live site and confirm the email arrives

Free tier allows 50 submissions/month — far above current lead volume. Both the
homepage form and the Airbnb page form feed the same inbox.

### 4. Point the domain at Vercel

1. Vercel → Project → Settings → Domains → add `theopenseasons.net` and `www.theopenseasons.net`
2. Vercel shows the DNS records needed. In your domain registrar (Squarespace Domains):
   - `A` record for `theopenseasons.net` → `76.76.21.21`
   - `CNAME` record for `www` → `cname.vercel-dns.com`
3. Propagation usually completes within an hour
4. **Do not cancel the Squarespace site until the Vercel deploy is confirmed live on the
   real domain** — then cancel the Squarespace *website* subscription at next renewal.
   Keep the *domain* registration (or transfer it to Vercel/Cloudflare later if desired).

## After launch

- Add the site URL to the Google Business Profile and Turno profile
- Once Benedict's Google review lands, add a Reviews section (ask Claude — the design
  system already anticipates it)
- Submit `https://www.theopenseasons.net/sitemap.xml` in Google Search Console

## Editing

All copy lives in `app/page.jsx` and `app/airbnb-turnovers/page.jsx`. Prices appear in
both files — keep them aligned with what you actually quote. Styles are in
`app/globals.css`. The animated hero is `components/Hero.jsx`; particle counts are at
the top of that file if you ever want to tune density.

## Local development

```bash
npm install
npm run dev   # http://localhost:3000
```
