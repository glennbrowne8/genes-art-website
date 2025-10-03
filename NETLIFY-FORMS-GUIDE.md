# 📧 Complete Netlify Forms Setup Guide

## What Is Netlify Forms?

Netlify Forms is a **free service** (100 submissions/month) that:
- ✅ Captures form submissions without any backend code
- ✅ Stores submissions in your Netlify dashboard
- ✅ Sends email notifications when someone submits
- ✅ Protects against spam with honeypot fields
- ✅ Works automatically with your Next.js site

**Cost:** FREE (up to 100 submissions/month)
**Setup Time:** 5 minutes

---

## How It Works

```
Customer fills out form on website
          ↓
Form submits to Netlify
          ↓
Netlify stores submission
          ↓
Netlify sends you email notification
          ↓
You respond to customer
```

---

## Step-by-Step Setup

### Step 1: Deploy Your Site (if not already done)

```bash
# Make sure your changes are pushed to GitHub
git add .
git commit -m "Add Netlify Forms support"
git push origin main
```

### Step 2: Wait for Netlify to Build

1. Go to https://app.netlify.com
2. Find your site
3. Watch the deploy progress
4. Wait for "Published" status (usually 2-3 minutes)

### Step 3: Verify Form Detection

1. In Netlify dashboard, click on your site
2. Click **"Forms"** in the left sidebar
3. You should see: **"contact"** form listed

**If you DON'T see the form:**
- Go to Site Settings → Build & Deploy
- Click "Trigger deploy" → "Clear cache and deploy site"
- Wait for rebuild
- Check Forms tab again

### Step 4: Set Up Email Notifications

1. In Netlify, go to **Forms** → **contact**
2. Click **"Form notifications"** tab
3. Click **"Add notification"**
4. Select **"Email notification"**
5. Configure:
   - **Event to notify:** New form submission
   - **Email to notify:** Gene's email address (e.g., gene@example.com)
   - **Custom subject:** (optional) e.g., "New artwork inquiry from website"
6. Click **"Save"**

### Step 5: Test the Form

1. Go to your live website
2. Scroll down to the **Contact** section
3. Fill out the form with test data:
   - Name: Test Customer
   - Email: your-email@example.com
   - Phone: 0412345678
   - Message: This is a test submission
4. Click **"Send Message"**
5. You should see: "Thank you! Your message has been sent successfully."

### Step 6: Verify Submission

**Check Netlify Dashboard:**
1. Go to Forms → contact
2. You should see your test submission listed
3. Click on it to view the full details

**Check Email:**
1. Check Gene's email inbox (and spam folder)
2. You should receive an email notification
3. Email will contain all form fields

---

## What Gene Will Receive

When someone submits the contact form, Gene gets an email like this:

```
From: Netlify Forms
To: gene@example.com
Subject: New form submission - contact

New submission from contact form:

Name: John Smith
Email: john.smith@example.com
Phone: 0412345678
Message: Hi Gene, I'm interested in the Ned Kelly painting. 
Is it still available? Can you provide more details about 
the dimensions and shipping options?

View submission: [Link to Netlify]
```

---

## Form Spam Protection

Your form has built-in spam protection:

1. **Honeypot Field**
   - Hidden field that bots fill out but humans don't see
   - Netlify automatically rejects submissions with honeypot filled

2. **reCAPTCHA (Optional)**
   If you start getting spam:
   - Go to Forms settings
   - Enable reCAPTCHA
   - Get free reCAPTCHA keys from Google
   - Add them to Netlify

---

## Monthly Limits

**Free Tier:** 100 submissions/month

**If you exceed:**
- Forms still work
- Submissions stored for 30 days (vs. 1 year on free)
- Pay $19/month for Level 1 (1,000 submissions)

**For Gene's site:** 100/month is plenty
- That's ~3 inquiries per day
- More than enough for an art business

---

## Troubleshooting

### Problem: Form Not Showing in Netlify Dashboard

**Cause:** Netlify didn't detect the form during build

**Solution:**
```bash
# Option 1: Rebuild with cache clear
# In Netlify: Site Settings → Build & Deploy → Trigger deploy → Clear cache

# Option 2: Verify hidden form exists in layout.js
# Should have this in app/layout.js:
<form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <input type="tel" name="phone" />
  <textarea name="message"></textarea>
</form>
```

### Problem: Form Submits But Shows Error

**Cause:** Form name mismatch

**Solution:**
- Check ContactForm.js has: `name="contact"`
- Check layout.js hidden form has: `name="contact"`
- Both must match exactly (case-sensitive)

### Problem: No Email Notifications

**Cause:** Email notifications not configured

**Solution:**
1. Forms → contact → Form notifications
2. Add notification
3. Enter Gene's correct email
4. Check spam folder for test emails

### Problem: Form Submits But Nothing Happens

**Cause:** JavaScript error or network issue

**Solution:**
1. Open browser console (F12)
2. Look for red error messages
3. Check Network tab for failed requests
4. Try clearing browser cache (Ctrl+F5)

### Problem: Getting Spam Submissions

**Solution:**
1. Enable reCAPTCHA in Netlify Forms settings
2. Add custom spam filters
3. Use Akismet integration (paid add-on)

---

## Alternative: Slack Notifications

Instead of email, send to Slack:

1. Forms → contact → Form notifications
2. Add notification → Slack notification
3. Connect your Slack workspace
4. Choose channel (e.g., #artwork-inquiries)
5. Save

Now form submissions appear in Slack!

---

## Custom Success Message

Want to customize what customers see after submitting?

**Option 1: Current inline message**
- Shows green success box on same page
- Keeps customer on your site
- ✅ Good for user experience

**Option 2: Redirect to thank-you page**
1. Create a "Thank You" page
2. In ContactForm.js, add after successful submission:
```javascript
window.location.href = '/thank-you'
```

---

## Viewing All Submissions

**In Netlify Dashboard:**
1. Forms → contact
2. See all submissions in chronological order
3. Click any submission to see details
4. Export to CSV if needed

**Data Included:**
- Submission date/time
- Name
- Email
- Phone
- Message
- IP address (for spam prevention)

---

## Form Submission Workflow

### What Happens Behind the Scenes:

1. **Customer fills form** (on your website)
2. **JavaScript handles submit** (ContactForm.js)
3. **Data sent to Netlify** (via POST request)
4. **Netlify validates data** (checks honeypot, stores in database)
5. **Netlify sends notification** (email to Gene)
6. **Customer sees success message** (green box on page)
7. **Gene responds** (via email/phone to customer)

---

## Best Practices

### For Gene:

✅ **Check email daily** for form submissions
✅ **Respond within 24 hours** (better customer experience)
✅ **Add customers to mailing list** (if you create one later)
✅ **Track inquiries** (helps understand what sells)

### For You (Admin):

✅ **Test monthly** to ensure forms still work
✅ **Monitor submission count** (check if nearing 100/month)
✅ **Watch for spam** (enable reCAPTCHA if needed)
✅ **Update email address** if Gene changes email

---

## Cost Analysis

### Netlify Forms (Current Setup)
- **Cost:** $0/month
- **Limit:** 100 submissions/month
- **Features:** Storage, notifications, spam protection
- **Perfect for:** Small to medium art business

### Alternative Solutions (If You Don't Use Netlify Forms)

**Formspree:**
- Free: 50 submissions/month
- Paid: $10/month for 1,000

**EmailJS:**
- Free: 200 emails/month
- Paid: $9/month for 1,000

**Custom Backend (PHP/Node):**
- Requires server
- More setup
- More maintenance
- Not recommended for simplicity

**Winner:** Netlify Forms (free, simple, integrated)

---

## Testing Checklist

After setup, verify:
- [ ] Form appears on live website
- [ ] Form appears in Netlify dashboard
- [ ] Can submit form successfully
- [ ] Success message appears after submission
- [ ] Submission appears in Netlify dashboard
- [ ] Email notification received
- [ ] Email contains all form fields
- [ ] Spam protection working (test with honeypot filled)
- [ ] Mobile submission works
- [ ] All required fields validated

---

## Quick Reference

**View submissions:**
Netlify Dashboard → Forms → contact

**Set up notifications:**
Forms → contact → Form notifications → Add notification

**Trigger rebuild:**
Site Settings → Build & Deploy → Trigger deploy

**Check form detection:**
Forms tab should show "contact" form

**Test submission:**
Fill out form on live site → Check dashboard + email

---

## Support Resources

**Netlify Forms Docs:**
https://docs.netlify.com/forms/setup/

**Netlify Forms Pricing:**
https://www.netlify.com/pricing/

**Netlify Support:**
https://answers.netlify.com/

---

## Summary

✅ Forms are **FREE** (100/month)
✅ Setup is **SIMPLE** (5 minutes)
✅ **NO CODING** required after initial setup
✅ **EMAIL NOTIFICATIONS** to Gene
✅ **SPAM PROTECTION** built-in
✅ **MOBILE FRIENDLY**
✅ **SECURE** (HTTPS)
✅ **RELIABLE** (Netlify infrastructure)

**Result:** Gene receives all customer inquiries via email automatically!

---

Built with Claude Sonnet 4.5
Gene's Australian Heritage Art - 2025
