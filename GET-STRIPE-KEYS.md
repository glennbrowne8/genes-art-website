# 🔑 Get Your Stripe Keys - Quick Guide

## ❌ Current Error

```
Unexpected token '<', "<!DOCTYPE"... is not valid JSON
```

**What this means:** The `.env.local` file doesn't have valid Stripe API keys yet.

---

## ✅ Fix in 5 Minutes

### Step 1: Get Stripe Keys (3 minutes)

1. **Go to:** https://dashboard.stripe.com/test/apikeys
   - Or create account: https://dashboard.stripe.com/register

2. **Toggle to TEST MODE** (top right corner - should say "Test mode")
   - ⚠️ Make sure it says "Test mode" NOT "Live mode"

3. **You'll see two keys:**
   ```
   Publishable key: pk_test_xxxxxxxxxxxxxxxx
   Secret key:      sk_test_xxxxxxxxxxxxxxxx (click "Reveal")
   ```

4. **Copy both keys** (keep the page open)

---

### Step 2: Add Keys to Project (2 minutes)

1. **Open:** `C:\scripts\genes-art-site\.env.local` (I just created it)

2. **Replace the placeholder text** with your actual keys:

   ```env
   # BEFORE (placeholder):
   STRIPE_PUBLISHABLE_KEY=pk_test_REPLACE_WITH_YOUR_KEY
   STRIPE_SECRET_KEY=sk_test_REPLACE_WITH_YOUR_KEY

   # AFTER (your real keys):
   STRIPE_PUBLISHABLE_KEY=pk_test_51ABC123def456...
   STRIPE_SECRET_KEY=sk_test_51ABC123def456...
   ```

3. **Save the file**

---

### Step 3: Restart Dev Server

```powershell
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

**Important:** Environment variables only load when the server starts!

---

## 🧪 Test Again

1. Visit: http://localhost:3000
2. Click "Buy Now" 
3. Select shipping option
4. Click "Proceed to Payment"
5. **Should work now!** ✅

If it opens Stripe Checkout, use test card:
- Card: `4242 4242 4242 4242`
- Expiry: Any future date (12/34)
- CVC: Any 3 digits (123)

---

## 🔐 Security Notes

### ✅ Safe:
- `.env.local` is in `.gitignore` (won't be committed to Git)
- Test keys are safe to use during development
- Can always regenerate keys in Stripe Dashboard

### ⚠️ Never:
- Don't commit `.env.local` to Git
- Don't share your secret key publicly
- Don't use live keys until ready for production

---

## 🎯 Checklist

- [ ] Created Stripe account (or logged in)
- [ ] Toggled to TEST MODE
- [ ] Copied publishable key (starts with `pk_test_`)
- [ ] Copied secret key (starts with `sk_test_`)
- [ ] Pasted both keys into `.env.local`
- [ ] Saved the file
- [ ] Restarted dev server (`npm run dev`)
- [ ] Tested "Buy Now" button
- [ ] Checkout modal opens without error ✅

---

## 🆘 Still Getting Errors?

### Error: "Invalid API Key"
- Check you copied the full key (very long string)
- Make sure no extra spaces before/after the key
- Verify you're using TEST keys (start with `pk_test_` and `sk_test_`)

### Error: "Stripe is not defined"
- Make sure you ran `npm install`
- Restart the dev server

### Keys Not Working?
- Regenerate keys in Stripe Dashboard
- Make sure Stripe account is activated
- Check for typos in `.env.local`

---

## 📸 What You Should See in Stripe Dashboard

### API Keys Page:
```
┌────────────────────────────────────────────────┐
│  Developers > API keys        [Test mode ▼]   │
├────────────────────────────────────────────────┤
│                                                │
│  Publishable key                               │
│  pk_test_51ABC...XYZ789                       │
│  [Copy]                                        │
│                                                │
│  Secret key                                    │
│  sk_test_••••••••••••••••       [Reveal]      │
│  [Copy]                                        │
│                                                │
└────────────────────────────────────────────────┘
```

Click **"Reveal"** on the Secret key, then copy it!

---

## 🎉 Once Working

You'll be able to:
- ✅ Click "Buy Now"
- ✅ Select delivery method
- ✅ See total price calculated
- ✅ Click "Proceed to Payment"
- ✅ Redirect to Stripe Checkout
- ✅ Complete test purchase
- ✅ See payment in Stripe Dashboard

---

**Get your keys and let me know when you're ready to test!** 🚀

The error you're seeing is expected without valid Stripe keys - it will work once you add them!
