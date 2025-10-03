# 🎯 Quick Start Guide

## For You (System Admin) - First Time Setup

### 1. Test Locally
```bash
cd genes-art-site
npm install
npm run dev
```
Visit: http://localhost:3000

### 2. Deploy (One Time)
```bash
# Create GitHub repo
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main

# Then go to Netlify.com and import the repo
```

### 3. Enable Admin Panel
In Netlify dashboard:
- Enable Identity (Settings → Identity → Enable)
- Enable Git Gateway (Identity → Services → Git Gateway)
- Invite Gene (Identity → Invite users)

### 4. Done!
Send Gene the admin URL: `yoursite.netlify.app/admin`

---

## For Gene (Daily Use)

### Add New Artwork
1. Go to `yoursite.com/admin`
2. Login with your email
3. Click "Artwork" → "New Artwork"
4. Fill in the form:
   - Title: "Ned Kelly Portrait"
   - Category: "Corrugated Iron Paintings"
   - Description: Your description
   - Price: 450
   - Image: Click to upload photo
   - Available: Toggle ON
   - Dimensions: "60cm x 90cm"
5. Click "Publish"
6. Wait 2-3 minutes, refresh website to see it live

### Mark as Sold
1. Open the artwork in admin
2. Toggle "Available" to OFF
3. Click "Publish"

### Update Contact Info
1. Click "Site Settings" → "General Settings"
2. Edit phone, email, etc.
3. Click "Publish"

---

## Key Files

```
genes-art-site/
├── app/
│   ├── page.js          ← Main homepage
│   ├── layout.js        ← Site layout
│   └── globals.css      ← All styles
├── content/
│   ├── artwork/         ← Artwork entries (managed by CMS)
│   └── settings/        ← Site settings (managed by CMS)
├── public/
│   ├── admin/           ← CMS admin panel
│   └── images/          ← Uploaded images
├── README.md            ← Full documentation
├── DEPLOYMENT.md        ← Detailed deployment guide
└── package.json         ← Dependencies
```

---

## Useful Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Export
npm run export       # Create static export in /out folder
```

---

## What's Different from the Old Version?

### Old Way (HTML)
- ❌ Gene edits code directly
- ❌ Needs to understand HTML
- ❌ Risk of breaking the site
- ❌ Upload via FTP

### New Way (Next.js + CMS)
- ✅ Gene uses a visual editor
- ✅ No code knowledge needed
- ✅ Can't break the site
- ✅ Auto-deploys on save
- ✅ Image upload built-in
- ✅ Mobile-friendly admin
- ✅ Free hosting forever

---

## Quick Links

- **Website**: yoursite.netlify.app
- **Admin Panel**: yoursite.netlify.app/admin
- **Netlify Dashboard**: app.netlify.com
- **GitHub Repo**: github.com/yourusername/genes-art-site

---

## Support

**If something breaks:**
1. Check Netlify deploy logs
2. Verify Identity & Git Gateway are enabled
3. Try hard refresh (Ctrl+F5)
4. Check the DEPLOYMENT.md troubleshooting section

**The CMS saves Gene hours of work and eliminates the fear of breaking the website!**
