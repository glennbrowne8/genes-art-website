# Gene's Australian Heritage Art Website

✅ **Status: COMPLETE & LIVE** - Fully functional e-commerce, CMS, and admin tools.

A modern, easy-to-manage website for showcasing and selling Australian artwork. Built with Next.js and Decap CMS for a user-friendly admin interface.

## 📚 Documentation
- **[Gene's User Manual](GENE-USER-MANUAL.md)** - Easy guide for the artist (Gene).
- **[Developer Manual](DEVELOPER-MANUAL.md)** - Technical guide for developers.
- **[Stripe Setup Guide](STRIPE-EMAIL-SETUP.md)** - Configuring emails and payments.

## ✨ Key Features
- **E-commerce**: Integrated Stripe payments with shipping options & insurance.
- **CMS**: customizable content via `/admin` (Decap CMS).
- **Contact Form**: Netlify Forms integration.
- **Holiday Mode**: Toggleable "Away" banner and disabled purchasing.
- **Legal Compliance**: Privacy Policy and Returns Policy pages included.
- **Mobile Responsive**: Works on all devices.

## 🚀 Quick Start
1. **Install**: `npm install`
2. **Run Dev**: `npm run dev`
3. **Build**: `npm run build`

## 📦 Deployment
The site is configured for **Netlify**.
- **Build Command**: `npm run build`
- **Publish Directory**: `out`
- **Env Vars Required**: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_SITE_URL`.

## 🎨 Admin Panel (`/admin`)
Gene can manage:
- Artwork (Add/Edit/Sold status)
- Categories
- Site Settings (Contact info, About text, Shipping rates)
- Page Content (Headings, Footer text)
- Holiday Mode

## 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router)
- **CMS**: Decap CMS
- **Payments**: Stripe
- **Hosting**: Netlify

---
*Maintained by Glenn for Gene's Australian Heritage Art*