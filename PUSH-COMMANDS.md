# 🚀 Quick Commands - Push Return Policy Links

## Step 1: Install New Dependency

```bash
cd C:\scripts\genes-art-site
npm install
```

This installs the `marked` package needed to render the return policy markdown.

---

## Step 2: Test Locally (Optional)

```bash
npm run dev
```

Then visit:
- Homepage: http://localhost:3000
- Return Policy: http://localhost:3000/returns-refunds

Check:
- ✅ "Returns Policy" appears in top navigation
- ✅ Footer has return policy link
- ✅ Policy page loads and displays correctly

Press `Ctrl+C` to stop the dev server.

---

## Step 3: Push to GitHub

```bash
git add .
git commit -m "Add return policy navigation links and page component"
git push origin main
```

---

## What Happens Next

1. **GitHub receives changes** (instant)
2. **Netlify auto-builds** (2-3 minutes)
3. **Site goes live** with return policy links!

---

## Verify Live Site

After 2-3 minutes, check:
- ✅ `yoursite.com/` - See "Returns Policy" in nav
- ✅ `yoursite.com/` - See policy link in footer
- ✅ `yoursite.com/returns-refunds/` - Policy page works
- ✅ `yoursite.com/admin` → Pages → returns-refunds (Gene can edit)

---

## Files Changed This Update

- `app/page.js` - Added nav and footer links
- `app/returns-refunds/page.js` - NEW page component
- `package.json` - Added marked dependency
- `RETURN-POLICY-LINKS-ADDED.md` - Documentation

---

## Quick Summary

✅ Return policy is in top navigation  
✅ Return policy is in footer  
✅ Dedicated page at /returns-refunds/  
✅ Gene can edit via CMS  
✅ Professional and accessible  

**Ready to push!**
