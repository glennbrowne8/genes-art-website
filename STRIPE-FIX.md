# 🔧 Fixing Stripe Checkout After Static Export

## What Happened

When we changed to static export (`output: 'export'`) to fix Netlify Forms, it broke Stripe checkout because:
- Static export can't run Next.js API routes
- API routes need server-side execution

## The Solution

We've converted your Stripe checkout to a **Netlify Function**, which works with static sites!

---

## ✅ Changes Made

### 1. Created Netlify Function
**New file:** `netlify/functions/create-checkout-session.js`
- This replaces the Next.js API route
- Does the exact same thing (creates Stripe sessions)
- Works with static export!

### 2. Updated CheckoutModal
**Changed:** The fetch URL from:
```javascript
'/api/create-checkout-session'  // ❌ Doesn't work with static export
```
To:
```javascript
'/.netlify/functions/create-checkout-session'  // ✅ Works!
```

### 3. Updated netlify.toml
Added functions directory configuration so Netlify knows where to find your functions.

---

## 🚀 What You Need to Do

### Step 1: Set Stripe API Key in Netlify

**IMPORTANT:** You need to add your Stripe secret key to Netlify's environment variables.

1. Go to **Netlify Dashboard**
2. Click on your site
3. Go to: **Site Settings** → **Environment variables**
4. Click **"Add a variable"**
5. Add:
   - **Key:** `STRIPE_SECRET_KEY`
   - **Value:** Your Stripe secret key (starts with `sk_test_` or `sk_live_`)
6. Click **"Create variable"**

**Where to find your Stripe key:**
- Go to https://dashboard.stripe.com/apikeys
- Copy the **"Secret key"** (NOT the publishable key)
- Use the test key for testing: `sk_test_...`

### Step 2: Push Changes to GitHub

```powershell
git add .
git commit -m "Convert Stripe to Netlify Functions for static export"
git push origin main
```

### Step 3: Wait for Netlify Deploy
- Netlify will auto-deploy (2-3 minutes)
- Watch the deploy in Netlify dashboard

### Step 4: Test Checkout
1. Go to your live site
2. Click "Available" on any artwork
3. Select shipping option
4. Click "Proceed to Payment"
5. Should redirect to Stripe checkout page!

---

## 🔍 Verifying It Works

### Check 1: Function Deployed
1. Netlify Dashboard → **Functions** tab
2. You should see: `create-checkout-session`
3. Status should be: Active

### Check 2: Environment Variable Set
1. Site Settings → Environment variables
2. You should see: `STRIPE_SECRET_KEY` listed
3. Value should show as: `••••••••` (hidden for security)

### Check 3: Test Purchase
1. Click "Available" on artwork
2. Fill out shipping
3. Click "Proceed to Payment"
4. Should redirect to Stripe (not error!)

---

## 📊 What's Different Now

### Before (Broken):
```
Click Available
    ↓
Calls /api/create-checkout-session
    ↓
❌ Error: API route doesn't exist in static export
    ↓
Shows error message
```

### After (Fixed):
```
Click Available
    ↓
Calls /.netlify/functions/create-checkout-session
    ↓
✅ Netlify Function runs server-side
    ↓
Creates Stripe session
    ↓
Redirects to Stripe checkout
    ↓
Customer completes payment
    ↓
Returns to success page
```

---

## 🆘 Troubleshooting

### Problem: "Function not found" error

**Solution:**
1. Check netlify.toml has `[functions]` section
2. Verify function file exists: `netlify/functions/create-checkout-session.js`
3. Trigger rebuild with cache clear in Netlify

### Problem: "Missing Stripe key" error

**Solution:**
1. Go to Netlify → Site Settings → Environment variables
2. Verify `STRIPE_SECRET_KEY` is set
3. Trigger redeploy after adding environment variable

### Problem: Still getting JSON parse error

**Solution:**
1. Open browser console (F12)
2. Go to Network tab
3. Click "Available" button
4. Look for the request to `create-checkout-session`
5. Check response - should be JSON, not HTML
6. If HTML error page, check Netlify function logs

### Problem: Stripe session created but wrong redirect

**Solution:**
Update the site URL in the Netlify Function:
- Line 32 in `create-checkout-session.js`
- Change to your actual Netlify URL
- Or add `URL` environment variable in Netlify

---

## 💡 How Netlify Functions Work

**Netlify Functions are:**
- ✅ Serverless functions (like AWS Lambda)
- ✅ Run on-demand when called
- ✅ Work with static sites
- ✅ Free tier: 125k requests/month
- ✅ Perfect for API calls, payments, etc.

**Your function:**
- Lives at: `/.netlify/functions/create-checkout-session`
- Runs when: Customer clicks "Proceed to Payment"
- Does: Creates Stripe checkout session
- Returns: Stripe checkout URL
- Cost: FREE (within limits)

---

## 📝 Environment Variables Needed

### Required:
- `STRIPE_SECRET_KEY` - Your Stripe secret key

### Optional (auto-set by Netlify):
- `URL` - Your site's URL (Netlify sets this automatically)

**To add in Netlify:**
1. Site Settings → Environment variables
2. Add variable
3. Redeploy site

---

## ✅ Success Indicators

You'll know it's working when:
- ✅ Function appears in Netlify Functions tab
- ✅ Environment variable is set
- ✅ Click "Available" → no console errors
- ✅ Modal shows checkout options
- ✅ "Proceed to Payment" redirects to Stripe
- ✅ Can complete test purchase
- ✅ Returns to success page

---

## 🎉 What You Get

**Best of both worlds:**
- ✅ Static site (fast, cheap, reliable)
- ✅ Netlify Forms work (for contact form)
- ✅ Stripe checkout works (for payments)
- ✅ All FREE hosting
- ✅ No server to maintain

---

## 💰 Costs

**Netlify Functions:**
- Free tier: 125,000 requests/month
- Runtime: 125,000 function hours/month
- Your usage: ~1-10 requests/day = FREE

**For Gene's art site:**
- Even 100 sales/month = only 100 function calls
- Well within free tier!

---

## 🔒 Security Note

**NEVER commit your Stripe secret key to Git!**
- ✅ It should ONLY be in Netlify environment variables
- ✅ The code references it with `process.env.STRIPE_SECRET_KEY`
- ✅ It never appears in your code files
- ✅ Safe and secure!

---

## Quick Checklist

After deploying, verify:
- [ ] `netlify/functions/create-checkout-session.js` exists
- [ ] CheckoutModal calls `/.netlify/functions/...`
- [ ] netlify.toml has `[functions]` section
- [ ] Pushed to GitHub
- [ ] Netlify deployed successfully
- [ ] `STRIPE_SECRET_KEY` set in Netlify
- [ ] Function appears in Functions tab
- [ ] Test purchase works!

---

**Ready to deploy? Follow the steps above and your Stripe checkout will work again!** 🚀

---

Built with Claude Sonnet 4.5
Gene's Australian Heritage Art - 2025
