# 📧 Contact Form Setup Guide

## ✅ What I've Done

I've successfully updated your Gene's Art Website with a fully functional Netlify Forms integration!

### Files Created/Modified:

1. **Created:** `app/components/ContactForm.js`
   - Interactive contact form component
   - Client-side form handling
   - Success/error messages
   - Form validation
   - Spam protection (honeypot field)

2. **Modified:** `app/page.js`
   - Imported the new ContactForm component
   - Replaced the placeholder form

3. **Modified:** `app/globals.css`
   - Added styling for success/error messages
   - Added disabled button styling

4. **Created:** `public/contact.html`
   - Static form for Netlify detection
   - Required for Netlify Forms to work

---

## 🚀 Next Steps - Testing Locally

### 1. Test the Build (Do this in PowerShell or Command Prompt)

```powershell
# Navigate to your project
cd C:\scripts\genes-art-site

# Install dependencies (if not done already)
npm install

# Build the project
npm run build

# Test locally
npm run dev
```

Then open: http://localhost:3000

Scroll to the contact section and verify the form appears correctly.

---

## 🌐 Deploying to Netlify

### Step 1: Push to GitHub (if not done already)

```powershell
cd C:\scripts\genes-art-site

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Added working contact form with Netlify Forms"

# Push to GitHub (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/genes-art-site.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **GitHub**
4. Choose your **genes-art-site** repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
6. Click **"Deploy site"**
7. Wait 2-3 minutes for deployment

---

## 📧 Enabling Email Notifications

### After Your Site is Deployed:

1. **Go to Netlify Dashboard**
2. **Select your site**
3. **Click on "Forms"** in the top navigation
4. You should see **"contact"** form listed (after first deployment)
5. **Click on the form name**
6. **Go to "Form notifications"**
7. **Click "Add notification"** → **"Email notification"**
8. **Configure:**
   - **Email to notify:** Gene's email address
   - **Event to notify:** New form submission
   - **Subject line (optional):** "New inquiry from Gene's Art Website"
9. **Save**

---

## ✨ What the Contact Form Does

### Customer Experience:
1. Customer fills out the form:
   - Name (required)
   - Email (required)
   - Phone (optional)
   - Message (required)

2. Customer clicks "Send Message"

3. Form shows "Sending..." while processing

4. Success message appears:
   > "Thank you! Your message has been sent successfully. I'll get back to you soon!"

5. Form clears automatically

### Gene's Experience:
- Gene receives an email notification immediately
- Email contains all form details (name, email, phone, message)
- Gene can reply directly to the customer's email
- All submissions are also stored in Netlify Dashboard

---

## 🎯 Features Included

✅ **Spam Protection**
- Honeypot field (invisible to humans, catches bots)
- Netlify's built-in spam filtering

✅ **User-Friendly**
- Clear success/error messages
- Loading state ("Sending..." button)
- Form clears after successful submission
- Helpful placeholder text

✅ **Mobile Responsive**
- Works perfectly on phones/tablets
- Large touch-friendly fields

✅ **Validation**
- Required fields are enforced
- Email format validation
- Can't submit empty form

✅ **Professional**
- Clean, Australian-themed design
- Matches the website aesthetic

---

## 🧪 Testing the Form

### Before Going Live:
1. Run `npm run dev` locally
2. Fill out the form
3. Check for console errors (F12 in browser)

### After Deploying to Netlify:
1. Visit your live site
2. Fill out the contact form with your email
3. Submit it
4. Check:
   - ✅ Success message appears
   - ✅ Email arrives at Gene's inbox
   - ✅ Submission appears in Netlify Forms dashboard

---

## 📱 How Gene Will Receive Inquiries

### Email Notification Example:
```
From: Netlify Forms <no-reply@netlify.com>
To: gene@example.com
Subject: New inquiry from Gene's Art Website

New form submission from contact

Name: John Smith
Email: john.smith@example.com
Phone: 0412 345 678
Message: Hi Gene, I'm interested in your Ned Kelly painting 
on corrugated iron. Is it still available? Could you tell me 
more about the dimensions?
```

Gene can simply hit "Reply" to respond directly to John Smith!

---

## 💰 Cost

**FREE!** 

Netlify Forms free tier includes:
- ✅ 100 form submissions per month
- ✅ Email notifications
- ✅ Spam filtering
- ✅ Form storage in dashboard
- ✅ Export to CSV

This is more than enough for Gene's art business!

---

## 🔧 Troubleshooting

### Form not appearing after deployment?

**Check:**
1. Did you push ALL files to GitHub? (including `public/contact.html`)
2. Did Netlify build successfully? (Check deploy logs)
3. Hard refresh your browser (Ctrl + F5)

### Form submits but no email?

**Check:**
1. Is email notification configured in Netlify Dashboard?
2. Check spam folder
3. Verify the email address is correct
4. Check Netlify Forms dashboard - submission should still be there

### "Something went wrong" error?

**Check:**
1. Is the site deployed to Netlify? (Form won't work on localhost)
2. Check browser console for errors (F12)
3. Try a different browser

---

## 🎨 Customizing the Form

### Want to add more fields?

Edit `app/components/ContactForm.js`:

```javascript
// In formState, add your field:
const [formState, setFormState] = useState({
  name: '',
  email: '',
  phone: '',
  artworkInterest: '',  // NEW FIELD
  message: ''
})

// In the form, add the input:
<div className="form-group">
  <label htmlFor="artworkInterest">Which artwork interests you?</label>
  <select 
    id="artworkInterest" 
    name="artworkInterest"
    value={formState.artworkInterest}
    onChange={handleChange}
  >
    <option value="">Select...</option>
    <option value="corrugated-iron">Corrugated Iron Paintings</option>
    <option value="drawings">Bush Drawings</option>
    <option value="clay">Clay Art</option>
  </select>
</div>
```

### Want to change the success message?

Edit the text in `app/components/ContactForm.js` around line 40:
```javascript
{submitStatus === 'success' && (
  <div className="form-message success">
    <strong>Thank you!</strong> Your custom message here!
  </div>
)}
```

---

## 📋 Quick Reference

| Action | Command/Steps |
|--------|--------------|
| **Test locally** | `npm run dev` → http://localhost:3000 |
| **Build project** | `npm run build` |
| **Push to GitHub** | `git add . && git commit -m "message" && git push` |
| **Deploy to Netlify** | Done automatically after GitHub push |
| **Check submissions** | Netlify Dashboard → Forms tab |
| **Configure email** | Netlify → Forms → contact → Notifications |

---

## ✅ Your Checklist

Before going live, make sure:

- [ ] Code builds successfully (`npm run build`)
- [ ] Tested form locally
- [ ] Pushed to GitHub
- [ ] Deployed to Netlify
- [ ] Netlify Forms detected the form
- [ ] Email notification configured
- [ ] Test submission sent and received
- [ ] Gene's email is correct
- [ ] Success message looks good
- [ ] Mobile version works

---

## 🎉 You're Done!

Once deployed and configured:

1. ✅ Customers can contact Gene directly from the website
2. ✅ Gene gets instant email notifications
3. ✅ All inquiries are stored safely in Netlify
4. ✅ Professional, spam-protected contact system
5. ✅ **100% FREE** - no monthly costs!

---

## 📞 Support

If you need help:

1. **Netlify Docs:** https://docs.netlify.com/forms/setup/
2. **Netlify Support:** https://answers.netlify.com/
3. **Check deploy logs:** Netlify Dashboard → Deploys

---

**Built with ❤️ for Gene's Australian Art Website**

Need more customization? Just ask!
