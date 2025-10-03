# 🔧 Troubleshooting Guide - Gene's Art Website

## ✅ What Was Fixed (January 2025)

### Issue: Images Not Displaying
**Symptoms:**
- Images uploaded via CMS showed file paths as text instead of actual images
- Gray boxes with text like `/images/uploads/filename.jpg`
- Images worked after upload but didn't show on the page

### Root Causes:
1. **Missing uploads folder** - `public/images/uploads/` didn't exist
2. **Code wasn't rendering images** - `page.js` was displaying text instead of `<img>` tags
3. **CSS wasn't styling images** - `.artwork-image img` styles were missing
4. **Missing Netlify configuration** - Build wasn't configured properly

### What Was Changed:

#### 1. Created Missing Folder
```
public/images/uploads/  ← Created this folder
```

#### 2. Fixed page.js (Line ~103)
**Before:**
```jsx
<div className="artwork-image">
  {piece.image ? piece.image : 'Artwork Image'}
</div>
```

**After:**
```jsx
<div className="artwork-image">
  {piece.image ? (
    <img 
      src={piece.image} 
      alt={piece.title}
      loading="lazy"
    />
  ) : (
    <div className="placeholder-image">No Image</div>
  )}
</div>
```

#### 3. Updated globals.css
**Added:**
```css
.artwork-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.placeholder-image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #666;
}
```

#### 4. Created netlify.toml
```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "20"
```

#### 5. Updated next.config.js
**Added:**
```js
trailingSlash: true,
```

---

## 📋 How the CMS Image Upload Works

### Understanding the Workflow:

**When Gene uploads an image via the admin panel:**

1. **CMS Saves Image** → Goes to `public/images/uploads/` in GitHub
2. **CMS Creates Markdown** → Goes to `content/artwork/` in GitHub
3. **GitHub Triggers Build** → Netlify/Vercel rebuilds the site
4. **Site Updates** → Takes 2-3 minutes

**For local development:**
- Run `git pull origin main` to get the latest images
- Then `npm run dev` to see them locally

---

## 🆘 Common Issues & Solutions

### Issue: "Images don't appear after upload"

**Solution 1: Wait for rebuild**
- After clicking "Publish" in CMS, wait 2-3 minutes
- Netlify/Vercel needs time to rebuild
- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)

**Solution 2: Check Netlify Deploy**
- Go to Netlify dashboard
- Check "Deploys" tab
- Look for the latest deploy status
- Check for any errors in the deploy log

**Solution 3: Verify image was uploaded**
- Go to GitHub repo: https://github.com/glennbrowne8/genes-art-website
- Navigate to `public/images/uploads/`
- Confirm your image is there

### Issue: "Images show locally but not online"

**This was your original issue!**

**Check:**
1. Does `netlify.toml` exist in your project root?
2. Is it configured with `publish = "out"`?
3. Run `npm run build` locally - do images appear in `out/images/uploads/`?

**Solution:**
```bash
git add .
git commit -m "Update configuration"
git push origin main
```

Wait for Netlify to rebuild (2-3 minutes).

### Issue: "File paths showing as text"

**Check:** Is the image actually rendering with an `<img>` tag?

**Solution:** Make sure `app/page.js` has the correct image rendering code (see fix #2 above).

### Issue: "Images are huge or distorted"

**Solution:** The CSS should handle this automatically with `object-fit: cover`. If not, check that `globals.css` has the `.artwork-image img` styles.

---

## 🔄 Regular Maintenance

### For You (System Admin):

**Monthly:**
- Check Netlify deploy logs for any issues
- Verify SSL certificate is auto-renewing
- Check GitHub repo storage (should be fine, but good to monitor)

**As Needed:**
- Help Gene if he has questions
- Update dependencies: `npm update`
- Backup: GitHub automatically backs everything up

### For Gene (Daily Use):

**He should never need to:**
- Run git commands
- Edit code files
- Access the server
- Use FTP
- Worry about breaking anything

**He just:**
1. Logs into `yoursite.com/admin`
2. Adds/edits artwork
3. Clicks "Publish"
4. Waits 2-3 minutes
5. Checks the live site

---

## 📞 If Something Goes Wrong

### Quick Checks:

1. **Is Netlify building successfully?**
   - Check Netlify dashboard → Deploys
   - Look for green checkmark ✅

2. **Did the changes commit to GitHub?**
   - Check GitHub repo
   - Look for recent commits

3. **Is the admin panel accessible?**
   - Try going to `yoursite.com/admin`
   - Can Gene log in?

4. **Are there any browser console errors?**
   - Press F12 to open DevTools
   - Check Console tab for errors

### Emergency Rollback:

If something breaks badly:

```bash
cd C:\scripts\genes-art-site
git log --oneline -5          # See recent commits
git revert HEAD               # Undo last commit
git push origin main          # Deploy the fix
```

Or in Netlify:
- Go to Deploys
- Find a working deploy
- Click "Publish deploy"

---

## ✨ Success Metrics

**You know it's working when:**
- ✅ Gene can add artwork without calling you
- ✅ Images appear within 3 minutes of upload
- ✅ Site loads fast (under 2 seconds)
- ✅ No errors in Netlify deploy logs
- ✅ Gene says "This is easy!"
- ✅ You haven't touched the code in weeks

---

## 🎓 For Future Reference

### File Locations:
- **CMS Config:** `public/admin/config.yml`
- **Page Code:** `app/page.js`
- **Styles:** `app/globals.css`
- **Content:** `content/artwork/*.md`
- **Images:** `public/images/uploads/`
- **Settings:** `content/settings/general.json`

### Key Commands:
```bash
npm run dev          # Start local development
npm run build        # Build for production
git pull origin main # Get latest from GitHub
git status           # Check what changed
git log --oneline    # See commit history
```

### Important Links:
- GitHub Repo: https://github.com/glennbrowne8/genes-art-website
- Netlify Dashboard: https://app.netlify.com
- Decap CMS Docs: https://decapcms.org/docs
- Next.js Docs: https://nextjs.org/docs

---

## 💡 Pro Tips

1. **Always hard refresh** (Ctrl+F5) when checking if changes worked
2. **Wait 3 full minutes** after publishing before checking
3. **Keep this file** for future reference
4. **GitHub is your backup** - everything is version controlled
5. **Netlify deploy logs** are your friend for debugging

---

## 🎉 Current Status

- ✅ Images upload correctly
- ✅ Images display on website
- ✅ CMS works perfectly
- ✅ Gene can manage independently
- ✅ Costs $0/month
- ✅ Automatic backups via Git
- ✅ Fast performance (CDN)
- ✅ Mobile responsive
- ✅ SSL certificate active

**Everything is working as designed!**

---

Built with ❤️ using Next.js 15 + Decap CMS
Last Updated: January 2025
