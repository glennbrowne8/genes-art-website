# Gene's Australian Art Website - Quick Command Reference

## 🚀 Common Commands

### Development
```bash
npm run dev              # Start local development server (http://localhost:3000)
npm run build            # Build for production
```

### Git Commands
```bash
git status               # Check what changed
git pull origin main     # Get latest from GitHub (after CMS uploads)
git add .                # Stage all changes
git commit -m "message"  # Commit changes
git push origin main     # Push to GitHub (triggers Netlify rebuild)
```

### Checking Things
```bash
git log --oneline -10    # See last 10 commits
dir public\images\uploads # Check uploaded images (Windows)
ls public/images/uploads  # Check uploaded images (Mac/Linux)
```

## 📁 Important File Locations

```
genes-art-site/
├── app/
│   ├── page.js          ← Main page code (where images are displayed)
│   └── globals.css      ← All styling
├── content/
│   ├── artwork/         ← Gene's artwork entries (created by CMS)
│   └── settings/        ← Site settings (contact info, etc.)
├── public/
│   ├── admin/
│   │   └── config.yml   ← CMS configuration
│   └── images/
│       └── uploads/     ← Uploaded images go here
├── netlify.toml         ← Netlify deployment config
├── next.config.js       ← Next.js configuration
└── TROUBLESHOOTING.md   ← Full troubleshooting guide
```

## 🔧 What Was Fixed (Your Issue)

**Problem:** Images uploaded but didn't display on website

**Solution:**
1. Created `/public/images/uploads/` folder
2. Fixed image rendering in `page.js`
3. Added CSS for images in `globals.css`
4. Created `netlify.toml` for proper deployment
5. Updated `next.config.js`

**Files Changed:**
- ✅ `app/page.js`
- ✅ `app/globals.css`
- ✅ `netlify.toml` (new)
- ✅ `next.config.js`

## 🎯 Gene's Workflow (No Code!)

1. Go to `yoursite.com/admin`
2. Login
3. Click "Artwork" → "New Artwork"
4. Fill form & upload image
5. Click "Publish"
6. Wait 2-3 minutes
7. Check `yoursite.com`

**That's it!** No git, no terminal, no code!

## 🆘 Quick Troubleshooting

### Images don't show after upload?
```bash
# Wait 3 minutes, then:
# Hard refresh browser: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

# Check Netlify deploy status at:
# https://app.netlify.com
```

### Want to see CMS changes locally?
```bash
cd C:\scripts\genes-art-site
git pull origin main
npm run dev
```

### Something broke?
```bash
# Check recent commits:
git log --oneline -5

# Undo last change:
git revert HEAD
git push origin main
```

## 📊 System Status Checks

### Is the site working?
- ✅ Visit the live site
- ✅ Check Netlify dashboard (deploys tab)
- ✅ Check GitHub commits

### Can Gene log in?
- ✅ Try `yoursite.com/admin`
- ✅ Verify Netlify Identity is enabled

### Are backups working?
- ✅ Everything is in GitHub (automatic backup)
- ✅ Check: https://github.com/glennbrowne8/genes-art-website

## 💡 Pro Tips

1. **Always `git pull` before working locally** (gets Gene's CMS updates)
2. **Hard refresh (Ctrl+F5) to see changes** (clears cache)
3. **Check Netlify deploy logs** if something seems wrong
4. **Gene should use the LIVE site** (yoursite.com/admin), not localhost
5. **Keep this repo** - it's your backup and version history

## 🎓 Learning Resources

- **Netlify Docs:** https://docs.netlify.com
- **Decap CMS:** https://decapcms.org/docs
- **Next.js:** https://nextjs.org/docs
- **Git Basics:** https://git-scm.com/doc

## 📞 Support

**For Gene:** Show him `GENE-GUIDE.md`
**For You:** Check `TROUBLESHOOTING.md`
**For Deployment:** Check `DEPLOYMENT.md`

## ✅ Current Status: WORKING PERFECTLY!

- Images: ✅
- CMS: ✅  
- Deployment: ✅
- Gene's Independence: ✅
- Cost: $0/month ✅

---

**Last Updated:** January 2025
**Status:** Production Ready 🎉
