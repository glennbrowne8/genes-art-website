# ✅ Contact Form Testing Checklist

## Before Deployment (Local Testing)

### 1. Build Test
```powershell
cd C:\scripts\genes-art-site
npm run build
```

**Expected:** Build completes successfully with no errors

---

### 2. Run Locally
```powershell
npm run dev
```

Then open: http://localhost:3000

**Check:**
- [ ] Page loads without errors
- [ ] Contact section appears
- [ ] Form has all fields (Name, Email, Phone, Message)
- [ ] "Send Message" button is visible
- [ ] Form looks good on desktop

---

### 3. Mobile View Test
In your browser:
- Press F12 (Developer Tools)
- Click the mobile device icon (top left)
- Select different devices (iPhone, iPad, etc.)

**Check:**
- [ ] Form looks good on mobile
- [ ] Fields are easy to tap
- [ ] Text is readable
- [ ] Button is easy to press

---

## After Deployment (Live Testing)

### 1. First Deployment Check
After deploying to Netlify:

**Wait:** 2-3 minutes for build to complete

**Check Netlify Dashboard:**
- [ ] Build status shows "Published"
- [ ] No build errors
- [ ] Site is accessible via Netlify URL

---

### 2. Forms Detection
In Netlify Dashboard → Forms tab:

**Check:**
- [ ] "contact" form appears in the list
- [ ] Form shows "0 submissions" initially

**If form doesn't appear:**
- Wait another 2-3 minutes
- Check that `public/contact.html` was pushed to GitHub
- Check deploy logs for errors
- Redeploy if needed

---

### 3. Email Notification Setup
In Netlify Dashboard → Forms → contact:

**Setup:**
- [ ] Click "Add notification"
- [ ] Select "Email notification"
- [ ] Enter Gene's email address
- [ ] Save

---

### 4. Live Form Test #1 (Your Email)

Visit your live site and fill out the form:

```
Name: Test User
Email: YOUR_EMAIL@example.com
Phone: 0400 000 000
Message: This is a test submission to verify the form works correctly.
```

Click "Send Message"

**Expected Results:**
- [ ] Button shows "Sending..." briefly
- [ ] Green success message appears:
      "Thank you! Your message has been sent successfully..."
- [ ] Form fields clear automatically
- [ ] No error messages

**Check Your Email (Gene's inbox):**
- [ ] Email arrives within 1-2 minutes
- [ ] Subject line is correct
- [ ] All form data is included
- [ ] Your email address is in the notification
- [ ] Reply button works (try clicking it)

**Check spam folder if not in inbox!**

---

### 5. Live Form Test #2 (Different Email)

Repeat the test with a different email address to ensure it's not a fluke:

**Expected Results:**
- [ ] Same success behavior
- [ ] Email arrives at Gene's inbox
- [ ] No errors

---

### 6. Spam Protection Test

Fill out the form with obviously fake data:

```
Name: asdfasdf
Email: test@test.test
Message: spam spam spam
```

**Expected Results:**
- [ ] Form still submits (we can't block everything)
- [ ] Email arrives
- [ ] Gene can manually delete spam submissions

**Note:** Netlify's spam filter will catch most bots automatically.

---

### 7. Validation Test

Try submitting with missing required fields:

**Test 1:** Leave Name blank
**Expected:** Browser prevents submission, shows "Please fill out this field"

**Test 2:** Invalid email format (e.g., "notanemail")
**Expected:** Browser shows "Please enter an email address"

**Test 3:** Leave Message blank
**Expected:** Browser prevents submission

---

### 8. Mobile Live Test

On your phone or tablet:
- Visit the live site
- Fill out the contact form
- Submit it

**Check:**
- [ ] Easy to fill out on mobile
- [ ] Keyboard pops up correctly
- [ ] Can tap all fields
- [ ] Success message is readable
- [ ] Email arrives

---

### 9. Multiple Submissions Test

Submit 3-5 test forms in quick succession.

**Check Netlify Dashboard:**
- [ ] All submissions appear in Forms list
- [ ] Can view each submission's details
- [ ] Timestamps are correct
- [ ] Can export to CSV

**Check Email:**
- [ ] Gene receives all emails
- [ ] Emails arrive in order
- [ ] No emails are missing

---

### 10. Edge Cases Test

**Long Message Test:**
Copy/paste a very long message (500+ words)

**Expected:**
- [ ] Form accepts it
- [ ] Submission succeeds
- [ ] Full message appears in email

**Special Characters Test:**
Use message with special characters: `& < > " ' @ # $ %`

**Expected:**
- [ ] Characters don't break the form
- [ ] Email displays correctly

**International Characters Test:**
Use names/messages with: é ñ ü ö å

**Expected:**
- [ ] Accepts international characters
- [ ] Displays correctly in email

---

## Error Recovery Testing

### Test Form When Offline

1. Disconnect from internet
2. Try to submit form

**Expected:**
- [ ] Red error message appears
- [ ] Form data is preserved (not lost)
- [ ] Can resubmit after reconnecting

### Test Form During Netlify Downtime

(Hard to simulate, but good to know expected behavior)

**Expected:**
- [ ] Error message appears
- [ ] User is told to try again later
- [ ] Form data is preserved

---

## Performance Testing

### Load Time Test

Open the site in a new incognito window:

**Check:**
- [ ] Contact form appears in under 3 seconds
- [ ] No loading delays
- [ ] Images load smoothly

### Concurrent Users Test

Have 2-3 people submit forms at the same time:

**Expected:**
- [ ] All submissions succeed
- [ ] No conflicts or errors
- [ ] All emails arrive

---

## Final Verification Checklist

Before telling Gene it's ready:

### Functionality
- [x] Form displays correctly
- [x] All fields work
- [x] Validation works
- [x] Success message shows
- [x] Error handling works

### Email Notifications
- [x] Emails arrive at correct address
- [x] Email format is professional
- [x] All form data is included
- [x] Can reply to customer directly

### Mobile Experience
- [x] Works on iPhone
- [x] Works on Android
- [x] Works on tablets
- [x] Easy to use on small screens

### Professional Quality
- [x] No typos in form labels
- [x] Professional success message
- [x] Matches site design
- [x] No console errors (F12)

### Gene's Side
- [x] Gene can check submissions in Netlify
- [x] Gene knows how to read notifications
- [x] Gene's email is spelled correctly
- [x] Spam folder is checked/configured

---

## 🎉 Testing Complete!

Once all checkboxes are marked:
- ✅ Contact form is fully functional
- ✅ Gene will receive inquiries
- ✅ Customers can reach out easily
- ✅ Professional system in place

---

## 📝 Test Results Template

Copy this and fill it out:

```
CONTACT FORM TEST RESULTS
Date: _______________
Tested by: _______________

✅ Local build successful
✅ Form appears on site
✅ Desktop view works
✅ Mobile view works
✅ Form submission succeeds
✅ Success message displays
✅ Email arrives at: _______________
✅ Email format correct
✅ Spam filter working
✅ Validation working
✅ Gene can access Netlify dashboard

Issues found: _______________

Notes: _______________

Status: READY FOR PRODUCTION ✅
```

---

## 🆘 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Form doesn't appear | Check `public/contact.html` exists |
| "Something went wrong" | Only works on live site, not localhost |
| No email arriving | Check spam, verify email address |
| Form not in Netlify | Wait 5 min, check deploy logs |
| Spam submissions | Normal, Gene can delete them |

---

**Ready to go live? Let Gene know his contact form is ready!** 🚀
