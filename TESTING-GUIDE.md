# ðŸ§ª Quick Testing Guide - Stripe Integration

## âœ… What Was Done

1. ✅ Added "Stripe Payment Link" field to CMS config
2. ✅ Created ArtworkActions component (button logic)
3. ✅ Created ContactModal component (inquiry form)
4. ✅ Updated page.js to use new components
5. ✅ Added beautiful button and modal styles
6. ✅ Added your test Stripe link to sample artwork
7. ✅ Created comprehensive documentation

---

## ðŸš€ Test It Now (5 Minutes)

### Step 1: Start Development Server

```bash
cd C:\scripts\genes-art-site
npm run dev
```

Wait for:
```
✓ Ready in 2.3s
○ Local: http://localhost:3000
```

### Step 2: Open in Browser

Visit: **http://localhost:3000**

### Step 3: Check the Homepage

You should see:
- ✅ Header with navigation
- ✅ Hero section
- ✅ About section
- ✅ Gallery section with artwork cards

### Step 4: Find "Ned Kelly's Last Stand"

Scroll to gallery, look for the card with:
- Title: "Ned Kelly's Last Stand"
- Price: $450 AUD
- Status: Available
- **NEW**: Two buttons below!

### Step 5: Test Buy Now Button

Click the **💳 Buy Now** button (golden/orange):

Expected behavior:
- Opens new tab/window
- Shows Stripe checkout page
- Product: Test payment
- Price: $450 AUD

### Step 6: Complete Test Purchase

On Stripe checkout page:
- Email: test@example.com
- Card: `4242 4242 4242 4242`
- Expiry: `12/34`
- CVC: `123`
- Name: Test Customer
- Shipping: Any test address
- Click "Pay"

### Step 7: Verify Success

After payment:
- ✅ Stripe shows success page
- ✅ Check your Stripe dashboard (you should see payment)
- ✅ You receive test email notification

### Step 8: Test Inquiry Button

Back on the website, click **✉️ Ask a Question**:

Expected behavior:
- Modal popup appears
- Shows artwork info (title, price, dimensions)
- Contact form with fields:
  - Name
  - Email
  - Phone (optional)
  - Message (pre-filled with artwork interest)
- Note about needing email service connection
- "Send Inquiry" button

### Step 9: Test Modal Interactions

Try:
- ✅ Typing in form fields
- ✅ Click X button to close
- ✅ Click outside modal (dark area) to close
- ✅ Open and close a few times

### Step 10: Test Other Artworks

Scroll through gallery:
- ✅ Artworks WITHOUT Stripe link show only "Inquire" button
- ✅ All cards are consistent and beautiful
- ✅ Hover effects work

### Step 11: Test Mobile View

In browser:
- Press F12 (open DevTools)
- Click device toolbar icon (or Ctrl+Shift+M)
- Select iPhone or Android device
- Check:
  - ✅ Buttons stack vertically
  - ✅ Modal looks good on mobile
  - ✅ Everything is touch-friendly

---

## ✅ What Should Work

### If Everything is Correct:

1. **No console errors** (check browser DevTools → Console)
2. **Buy Now button appears** on Ned Kelly artwork
3. **Stripe checkout opens** when clicked
4. **Test purchase completes** successfully
5. **Inquire button opens modal** with form
6. **Modal closes properly** (X button, outside click)
7. **Other artworks show inquiry only** (no Buy Now)
8. **Mobile view works perfectly**

---

## ❌ If Something's Wrong

### Buy Now Button Missing

**Check**:
```bash
# View the artwork file
cat "C:\scripts\genes-art-site\content\artwork\2025-01-15-ned-kelly-last-stand.md"
```

Should show:
```yaml
stripeLink: "https://buy.stripe.com/test_cNi00i5Tpfef2Ij6VI3Nm00"
```

**Fix**: Make sure the link is there and no typos

### Console Errors

**Common issues**:
- "Cannot find module" → Run `npm install` again
- "Invalid hook call" → Clear .next folder: `rm -rf .next`
- Port already in use → Kill process or use different port

**Fix**:
```bash
# Clean and restart
rm -rf .next
npm run dev
```

### Styles Not Showing

**Check**: View page source, search for "btn-buy-now"

If missing:
```bash
# Verify CSS was updated
tail -n 50 "C:\scripts\genes-art-site\app\globals.css"
```

Should see new button styles at the end.

### Modal Not Opening

**Check browser console** for JavaScript errors.

**Likely cause**: Components not imported correctly.

**Verify**:
```bash
# Check if components exist
ls "C:\scripts\genes-art-site\app\components"
```

Should show:
- ArtworkActions.js
- ContactModal.js

---

## 🎯 Expected Visual Result

### Artwork Card with Buy Now:

```
┌──────────────────────────────────────┐
│  [Image of corrugated iron art]     │
├──────────────────────────────────────┤
│  CORRUGATED IRON PAINTINGS           │
│  Ned Kelly's Last Stand              │
│                                      │
│  A striking portrayal of...          │
│                                      │
│  Dimensions: 60cm x 90cm             │
│                                      │
│  $450 AUD              [Available]   │
│  ┌───────────────┐ ┌──────────────┐ │
│  │ 💳 Buy Now   │ │✉️ Ask a...  │ │
│  │  (Golden)     │ │ (Outlined)   │ │
│  └───────────────┘ └──────────────┘ │
└──────────────────────────────────────┘
```

### Inquiry Modal:

```
┌────────────────────────────────────────┐
│  Inquire About Artwork           [X]   │
├────────────────────────────────────────┤
│                                        │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │
│  ┃ Ned Kelly's Last Stand        ┃  │
│  ┃ $450 AUD                      ┃  │
│  ┃ 60cm x 90cm                   ┃  │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │
│                                        │
│  Your Name *                           │
│  [___________________________]         │
│                                        │
│  Email Address *                       │
│  [___________________________]         │
│                                        │
│  Phone Number (Optional)               │
│  [___________________________]         │
│                                        │
│  Message *                             │
│  [___________________________]         │
│  [___________________________]         │
│  [___________________________]         │
│                                        │
│  ⚠️ Note: Form needs email service    │
│                                        │
│  [    Send Inquiry    ]                │
└────────────────────────────────────────┘
```

---

## 📊 Testing Checklist

### Development Server

- [ ] `npm run dev` starts without errors
- [ ] No warnings in terminal
- [ ] Site loads at localhost:3000
- [ ] No console errors in browser

### Visual Elements

- [ ] Buy Now button is golden/orange
- [ ] Ask a Question button is outlined brown
- [ ] Buttons are side-by-side on desktop
- [ ] Buttons stack on mobile
- [ ] Hover effects work on buttons

### Stripe Integration

- [ ] Buy Now opens Stripe checkout
- [ ] Test card works (4242...)
- [ ] Payment completes successfully
- [ ] Redirects back to success page
- [ ] Payment shows in Stripe dashboard

### Inquiry Form

- [ ] Ask a Question opens modal
- [ ] Form fields work
- [ ] Required validation works (try to submit empty)
- [ ] X button closes modal
- [ ] Click outside closes modal
- [ ] Can open multiple times

### Other Artwork

- [ ] Artwork without Stripe link shows inquiry only
- [ ] All cards display consistently
- [ ] No broken layouts

### Mobile Responsiveness

- [ ] Buttons stack vertically
- [ ] Modal fits on small screen
- [ ] Touch targets are large enough
- [ ] Text is readable

---

## 🎓 Next Step After Testing

### If Everything Works:

**You're done with development!** Ready to:

1. Deploy to Netlify (follow DEPLOYMENT.md)
2. Create Gene's real Stripe account
3. Replace test link with Gene's real links
4. Train Gene on how to use it

### If Issues Found:

**Let me know what's not working:**
- Exact error messages
- What you clicked
- What you expected vs what happened
- Screenshots if possible

I'll help you fix it!

---

## 💡 Pro Tips

### For Development

- Keep DevTools open (F12) to catch errors
- Use browser's device simulator for mobile testing
- Test in different browsers (Chrome, Firefox, Edge)
- Clear cache if seeing old styles (Ctrl+Shift+R)

### For Stripe Testing

- Use test mode (URLs have "test_" in them)
- Never use real card numbers in test mode
- Check Stripe dashboard for all test transactions
- Can see all API calls in Stripe logs

### Common Test Cards

```
Success: 4242 4242 4242 4242
Decline: 4000 0000 0000 0002
Insufficient funds: 4000 0000 0000 9995
3D Secure: 4000 0025 0000 3155
```

---

## 📞 Quick Commands Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Serve production build locally
npm start

# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Check for errors
npm run build
```

---

## 🎉 Success Criteria

**Test is successful when**:

✅ No errors in console  
✅ Buy Now opens Stripe checkout  
✅ Test payment completes  
✅ Payment appears in Stripe dashboard  
✅ Inquiry button opens modal  
✅ Modal works perfectly (open/close)  
✅ Mobile view is flawless  
✅ All artwork cards display correctly  
✅ Everything looks professional  
✅ You're happy with it!

---

**Time to test**: ~5-10 minutes  
**Expected result**: Everything works perfectly!  
**If issues**: Note them and we'll fix together!

🚀 **START YOUR ENGINES!** Run `npm run dev` and let me know how it goes!
