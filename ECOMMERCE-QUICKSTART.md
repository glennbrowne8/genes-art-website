# 🛒 Quick Start: E-Commerce Checkout

## ✅ What's Ready

Full Stripe checkout with 4 delivery options:
- 🏠 Pickup (FREE)
- 🚗 Local Delivery ($10)
- 📦 Standard Shipping ($20)
- 📦 Express Shipping ($35)

---

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies (2 min)
```powershell
cd C:\scripts\genes-art-site
npm install
```

### 2. Configure Stripe (5 min)

Create `.env.local` file in project root:

```env
STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
NEXT_PUBLIC_SITE_URL=http://localhost:3000
GENE_EMAIL=gene@example.com
```

**Get keys from:** https://dashboard.stripe.com/test/apikeys

### 3. Test It! (5 min)
```powershell
npm run dev
```

Visit http://localhost:3000
- Click "Buy Now" on artwork
- Select shipping option
- Use test card: `4242 4242 4242 4242`
- Complete purchase!

---

## 📚 Full Documentation

Read **ECOMMERCE-SETUP-GUIDE.md** for:
- Complete setup instructions
- Deployment guide
- Troubleshooting
- Customization options

---

## 💡 Key Points

✅ **Test Mode First** - Use test keys, no real money
✅ **$0 Monthly Cost** - Only pay 2.9% + $0.30 per sale
✅ **Secure** - Stripe handles all payment security
✅ **Simple for Gene** - Same CMS, automatic payments

---

**Need help?** Check ECOMMERCE-SETUP-GUIDE.md or ask me!
