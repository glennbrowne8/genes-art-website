# 📧 Quick Setup: Contact Form Email Notifications

## 🎯 What You Need To Do AFTER Deploying to Netlify

### Step 1: Deploy the Site First
Follow the DEPLOYMENT.md guide to get your site live on Netlify.

---

### Step 2: Configure Email Notifications (5 minutes)

Once your site is deployed, follow these steps:

#### 1. Go to Netlify Dashboard
- Visit: https://app.netlify.com
- Log in
- Click on your **genes-art-site** project

#### 2. Find the Forms Section
```
┌─────────────────────────────────────────────┐
│  Site Overview  Deploys  [Forms]  Settings  │  ← Click here
└─────────────────────────────────────────────┘
```

#### 3. You Should See Your Form
```
┌──────────────────────────────────────────┐
│  Active forms                             │
│                                           │
│  📋 contact                               │
│     0 submissions                         │
│     [Settings]                            │
│                                           │
└──────────────────────────────────────────┘
```

**Note:** If you don't see the form yet:
- Wait for a successful deployment
- Make sure you pushed ALL files to GitHub
- Check the deploy logs for errors

#### 4. Click on the Form Name "contact"

#### 5. Set Up Email Notifications
```
┌──────────────────────────────────────────┐
│  Form notifications                       │
│                                           │
│  [+ Add notification]                     │
│                                           │
└──────────────────────────────────────────┘
```

Click **"+ Add notification"**

#### 6. Select "Email notification"
```
┌──────────────────────────────────────────┐
│  Choose notification type:                │
│                                           │
│  ○ Outgoing webhook                       │
│  ● Email notification      ← Select this  │
│  ○ Slack notification                     │
│                                           │
└──────────────────────────────────────────┘
```

#### 7. Enter Gene's Email
```
┌──────────────────────────────────────────┐
│  Email to notify                          │
│  ┌────────────────────────────────────┐  │
│  │ gene@example.com                   │  │  ← Gene's email here
│  └────────────────────────────────────┘  │
│                                           │
│  Event to notify                          │
│  ☑ New form submission                   │
│                                           │
│  Subject (optional)                       │
│  ┌────────────────────────────────────┐  │
│  │ New inquiry from your art website  │  │
│  └────────────────────────────────────┘  │
│                                           │
│         [Save]  [Cancel]                  │
└──────────────────────────────────────────┘
```

Fill in:
- **Email to notify:** Gene's actual email address
- **Event:** Keep "New form submission" checked
- **Subject:** (Optional) Something like "New inquiry from your art website"

#### 8. Click "Save"

---

## ✅ That's It!

Now whenever someone fills out the contact form:

1. ✅ Gene receives an email immediately
2. ✅ Email contains all the customer's details
3. ✅ Gene can reply directly to the customer
4. ✅ All submissions are stored in Netlify dashboard

---

## 🧪 Test It!

After setup:

1. Go to your live website
2. Fill out the contact form yourself
3. Submit it
4. Check Gene's email inbox (and spam folder)
5. You should receive the notification!

---

## 📧 What Gene's Email Will Look Like

```
From: Netlify Forms <notifications@netlify.app>
To: gene@example.com
Subject: New inquiry from your art website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
New form submission

Form: contact
Site: genes-art-site.netlify.app
Submitted: 2025-10-01 at 2:30 PM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: John Smith

Email: john.smith@example.com

Phone: 0412 345 678

Message: 
Hi Gene, I saw your Ned Kelly painting on 
corrugated iron and I'm very interested. 
Is it still available? What are the dimensions?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
View all submissions: 
https://app.netlify.com/sites/YOUR-SITE/forms
```

Gene can click "Reply" and respond directly to john.smith@example.com!

---

## 💡 Pro Tips

### Multiple Email Addresses
You can add multiple email notifications if you want:
- Gene's email
- Your email (for backup)
- Business partner's email

Just click "Add notification" again and add another email.

### Check Spam Folder
The first few notifications might go to spam. Have Gene:
1. Check spam folder
2. Mark the email as "Not Spam"
3. Add notifications@netlify.app to contacts

### View All Submissions
Gene (or you) can always view ALL form submissions in Netlify:
1. Log in to Netlify
2. Go to Forms tab
3. Click on "contact"
4. See full list of submissions
5. Export to CSV if needed

---

## 🔧 Troubleshooting

### "I don't see the Forms tab"
- Make sure the site has deployed successfully
- Check that `public/contact.html` was pushed to GitHub
- Wait 2-3 minutes after deployment

### "Email not arriving"
- Check spam/junk folder
- Verify email address is spelled correctly
- Make sure "New form submission" is checked
- Try adding a different email address to test

### "Form says 'something went wrong'"
- This only works on the LIVE Netlify site
- Won't work on localhost (npm run dev)
- Check browser console (F12) for errors

---

## 📋 Quick Checklist

After deployment:

- [ ] Site is live on Netlify
- [ ] Go to Forms tab in Netlify
- [ ] See "contact" form listed
- [ ] Add email notification
- [ ] Enter Gene's email address
- [ ] Save settings
- [ ] Test by submitting a form
- [ ] Verify email arrives
- [ ] Check spam folder if needed
- [ ] Mark as "Not Spam" if needed

---

## 🎉 Success!

Once you see this working:
- ✅ Customers can reach Gene easily
- ✅ Gene gets instant notifications
- ✅ Professional contact system
- ✅ **Completely FREE!**

---

**Questions?** 
Check the CONTACT-FORM-SETUP.md file for more detailed information.

**Ready to deploy?**
Follow DEPLOYMENT.md to get your site live!
