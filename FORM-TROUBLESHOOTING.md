# 🔧 Netlify Forms Troubleshooting Guide

## Quick Diagnostic Checklist

### 1. Check if Form Appears in Netlify Dashboard
✅ **Go to:** Netlify Dashboard → Your Site → Forms  
✅ **Look for:** "contact" form should be listed  

**If NOT listed:**
- The form wasn't detected during build
- Follow "Form Not Detected" section below

**If listed:**
- Good! Form is detected, issue is with submission
- Follow "Form Detected But Not Working" section below

---

## Problem 1: Form Not Detected in Netlify

### Symptoms:
- No "contact" form in Netlify Forms dashboard
- Form tab shows "No forms detected"

### Solution Steps:

#### Step 1: Verify Hidden Form Exists
Check `app/layout.js` has this:
```jsx
<form 
  name="contact" 
  data-netlify="true" 
  data-netlify-honeypot="bot-field" 
  hidden
>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <input type="tel" name="phone" />
  <textarea name="message"></textarea>
</form>
```

#### Step 2: Rebuild with Cache Clear
In Netlify:
1. Go to: **Site Settings → Build & Deploy**
2. Click: **Trigger deploy**
3. Select: **Clear cache and deploy site**
4. Wait for build to complete (2-3 min)
5. Check Forms tab again

#### Step 3: Check Build Logs
If still not working:
1. Go to: **Deploys** tab
2. Click on latest deploy
3. Scroll through build logs
4. Look for errors related to forms

---

## Problem 2: Form Detected But Submissions Not Working

### Symptoms:
- "contact" form appears in Netlify dashboard
- Submitting form shows error message
- Or form submits but nothing happens

### Diagnostic Test:

#### Open Browser Console
1. Open your live site
2. Press **F12** (or right-click → Inspect)
3. Go to **Console** tab
4. Try submitting the form
5. Look for red error messages

### Common Issues & Solutions:

#### Issue A: 404 Error
**Error in console:** `POST / 404 (Not Found)`

**Cause:** Form is trying to POST to wrong URL

**Solution:** 
The form should POST to `/` which is correct. This might be a Netlify routing issue.

Try adding this to your `netlify.toml` file (create it if it doesn't exist):
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Issue B: CORS Error
**Error in console:** `CORS policy: No 'Access-Control-Allow-Origin' header`

**Cause:** Security restriction

**Solution:** This shouldn't happen with Netlify Forms. If you see this, the form isn't configured correctly.

#### Issue C: Form Name Mismatch
**Error in console:** Form not found

**Cause:** Form name in submission doesn't match Netlify

**Solution:** Verify these match exactly:
- Hidden form in `layout.js`: `name="contact"`
- ContactForm component: form name should be `contact`
- Form submission: `'form-name': 'contact'`

All must be identical (case-sensitive)!

---

## Testing the Form Manually

### Test 1: Check Form HTML
1. Open your live site
2. Right-click on the contact form
3. Click "Inspect Element"
4. Verify you see:
```html
<form name="contact" method="POST">
  <input type="hidden" name="form-name" value="contact">
  <!-- other fields -->
</form>
```

### Test 2: Manual Submission
Try submitting using browser console:

1. Open live site
2. Press F12
3. Go to Console tab
4. Paste this code:
```javascript
fetch('/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    'form-name': 'contact',
    'name': 'Test User',
    'email': 'test@example.com',
    'phone': '0400000000',
    'message': 'This is a test message'
  }).toString()
})
.then(response => console.log('Response:', response.status))
.catch(error => console.error('Error:', error))
```

**Expected result:** 
- Console shows: `Response: 200` or `Response: 303`
- Submission appears in Netlify dashboard

**If error:**
- Note the error message
- Check what status code you get
- Look in Network tab for details

---

## Check Netlify Configuration

### Verify Build Settings
In Netlify Dashboard:
1. Site Settings → Build & Deploy → Build settings
2. Verify:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
   - **Node version:** 18 or higher

### Check Environment
- Go to: Site Settings → Environment variables
- Make sure no conflicting variables

---

## Check Next.js Configuration

### Verify next.config.js
Your `next.config.js` should have:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

---

## Common Mistakes

### ❌ Mistake 1: Using Wrong Attributes
```jsx
// WRONG - React doesn't recognize these
<form netlify="true" netlify-honeypot="bot-field">

// CORRECT - Use data- prefix
<form data-netlify="true" data-netlify-honeypot="bot-field">
```

### ❌ Mistake 2: Missing Hidden Input
```jsx
// WRONG - No form-name input
<form name="contact" method="POST" onSubmit={handleSubmit}>
  <input type="text" name="name" />
  
// CORRECT - Has hidden form-name input
<form name="contact" method="POST" onSubmit={handleSubmit}>
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="name" />
```

### ❌ Mistake 3: Form Name Mismatch
```jsx
// Hidden form says "contact"
<form name="contact" data-netlify="true" hidden>

// But submission says "contactForm" - MISMATCH!
body: new URLSearchParams({
  'form-name': 'contactForm',  // ❌ WRONG
```

### ❌ Mistake 4: Not Using FormData
```javascript
// LESS RELIABLE - Manually building data
body: new URLSearchParams({
  'form-name': 'contact',
  name: formState.name,
  email: formState.email,
  // etc...
}).toString()

// BETTER - Let FormData do the work
const formData = new FormData(e.target)
body: new URLSearchParams(formData).toString()
```

---

## What Should Happen When Working

### 1. Before Submit:
- Form is visible on page
- All fields are empty or have user input
- Submit button is enabled

### 2. During Submit:
- Button shows "Sending..."
- Button is disabled
- Network request goes out (check Network tab)

### 3. After Successful Submit:
- Green success message appears
- Form fields are cleared
- Submission appears in Netlify dashboard
- Email notification sent (if configured)

### 4. If Error:
- Red error message appears
- Form data is preserved
- Console shows error details

---

## Step-by-Step Debug Process

### Phase 1: Confirm Detection
1. ✅ Push code to GitHub
2. ✅ Netlify rebuilds automatically
3. ✅ Check Netlify Forms dashboard
4. ✅ "contact" form listed? 
   - YES → Go to Phase 2
   - NO → Trigger cache clear and rebuild

### Phase 2: Test Submission
1. ✅ Open live site in incognito window
2. ✅ Open browser console (F12)
3. ✅ Fill out form with test data
4. ✅ Click Submit
5. ✅ Watch console for errors
6. ✅ Check Network tab for POST request
7. ✅ What's the status code?
   - 200 or 303 → SUCCESS!
   - 404 → Form not found (check form name)
   - 500 → Server error (check Netlify logs)
   - Other → Note error and investigate

### Phase 3: Verify Receipt
1. ✅ Check Netlify Forms dashboard
2. ✅ Is submission listed?
   - YES → Form works! Set up notifications
   - NO → Check Netlify logs for errors

---

## Quick Fixes

### Fix 1: Clear Everything and Redeploy
```bash
# 1. Delete .next and out folders
rm -rf .next out

# 2. Reinstall dependencies
npm install

# 3. Build locally to test
npm run build

# 4. If successful, push
git add .
git commit -m "Rebuild for Netlify Forms"
git push
```

### Fix 2: Add netlify.toml
Create `netlify.toml` in project root:
```toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Fix 3: Simplify Form (Test)
Create a super simple test form to verify Netlify works:

In `app/page.js`, temporarily add:
```jsx
<form name="test" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="test" />
  <input type="text" name="name" required />
  <button type="submit">Test Submit</button>
</form>
```

If this works but ContactForm doesn't, the issue is in ContactForm.js

---

## Getting More Information

### What to Tell Support:
1. Form name: "contact"
2. Site URL: [your-site].netlify.app
3. Form visible in dashboard: Yes/No
4. Error message: [exact error from console]
5. Status code: [from Network tab]
6. Build logs: [paste relevant errors]

### Helpful Netlify Commands:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Test functions locally
netlify dev

# View logs
netlify logs
```

---

## Still Not Working?

### Try Alternative Approach:
If Netlify Forms keeps failing, you can use:

1. **Formspree** (free alternative)
   - 50 submissions/month free
   - Easier to set up
   - Works with any form

2. **EmailJS** (JavaScript solution)
   - 200 emails/month free
   - Sends directly from browser
   - No backend needed

3. **Contact via mailto link** (fallback)
   - Always works
   - Opens user's email client
   - Not as nice but functional

---

## Success Indicators

You'll know it's working when:
- ✅ Form in Netlify dashboard
- ✅ Test submission succeeds
- ✅ Submission appears in dashboard
- ✅ Console shows no errors
- ✅ Success message displays
- ✅ Email notification received (if set up)

---

## Pro Tips

1. **Always test in incognito window** - Avoids cache issues
2. **Check Network tab** - Shows exactly what's being sent
3. **Use test data** - Don't spam Gene's email during testing
4. **Screenshot errors** - Helps with troubleshooting
5. **Check Netlify status** - Maybe Netlify itself is down: status.netlify.com

---

Need more help? Let me know:
- Exact error message you're seeing
- What you see in browser console
- Whether form appears in Netlify dashboard
- Status code from Network tab

I'll help you fix it! 🚀
