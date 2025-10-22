# 🏖️ Holiday Mode - Quick Reference

## For You (System Admin)

### Files Modified:
- ✅ `public\admin\config.yml` - Added Holiday Mode to CMS
- ✅ `content\settings\general.json` - Added holidayMode defaults
- ✅ `app\components\HolidayBanner.js` - NEW component
- ✅ `app\page.js` - Integrated holiday mode logic
- ✅ `HOLIDAY-MODE-GUIDE.md` - NEW user guide for Gene

### Deploy Commands:
```bash
cd C:\scripts\genes-art-site
npm run dev          # Test locally first
git add .
git commit -m "Add Holiday Mode feature"
git push origin main # Deploy to production
```

---

## For Gene (Print This Card)

```
╔═══════════════════════════════════════════════╗
║         HOLIDAY MODE - QUICK GUIDE            ║
╠═══════════════════════════════════════════════╣
║                                               ║
║  TURN ON BEFORE LEAVING:                      ║
║  1. Login to /admin                           ║
║  2. Site Settings → General Settings          ║
║  3. Holiday Mode → Click to expand            ║
║  4. Toggle "Enable" to ON                     ║
║  5. Set return date (optional)                ║
║  6. Add custom message (optional)             ║
║  7. Click "Publish"                           ║
║  8. Wait 2-3 minutes                          ║
║                                               ║
║  TURN OFF WHEN BACK:                          ║
║  1. Login to /admin                           ║
║  2. Site Settings → General Settings          ║
║  3. Holiday Mode → Click to expand            ║
║  4. Toggle "Enable" to OFF                    ║
║  5. Click "Publish"                           ║
║  6. Wait 2-3 minutes                          ║
║                                               ║
║  That's it! 🏖️                                ║
║                                               ║
║  Need help? Read HOLIDAY-MODE-GUIDE.md        ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

---

## What Happens When Enabled

### Customers See:
- 🏖️ Banner at top: "Currently Away"
- 📅 Return date (if you set one)
- 👁️ Gallery still visible (browse only)
- ❌ Can't purchase (no Buy Now buttons)
- 📧 Form disabled (phone/email still shown)

### What Stays the Same:
- ✅ Full gallery visible
- ✅ All prices shown
- ✅ Phone number visible
- ✅ Email address visible
- ✅ Professional appearance

---

## Testing Checklist

- [ ] Test locally with `npm run dev`
- [ ] Enable holiday mode in admin
- [ ] See banner on website
- [ ] Buy buttons hidden
- [ ] Contact form disabled
- [ ] Disable holiday mode
- [ ] Banner disappears
- [ ] Everything back to normal
- [ ] Deploy to production
- [ ] Test on live site
- [ ] Show Gene how to use it

---

## Common Scenarios

### Scenario 1: Week-long Holiday
```
Day -1: Enable holiday mode
        Set return date: [date you're back]
        Custom message: "On holiday! Back [date]"
        
Day 1-7: Relaxing 🏖️
         Customers browse but can't order
         
Day 8: Disable holiday mode
       Back in business! 🎨
```

### Scenario 2: Unsure When Returning
```
Day -1: Enable holiday mode
        Leave return date empty
        Message: "Taking a break. Check back soon!"
        
While away: Customers know you're unavailable
            Gallery stays accessible
            
When back: Disable holiday mode
           Resume operations
```

---

## Support Resources

- **Gene's Guide**: `HOLIDAY-MODE-GUIDE.md`
- **Implementation Details**: `HOLIDAY-MODE-COMPLETE.md`
- **This Quick Ref**: Print and keep handy!

---

## One-Liner Summary

**Holiday Mode = Gene toggles one switch to pause orders while keeping the gallery visible for browsing.** 🎯

Simple. Professional. Perfect for a one-person business! ✨
