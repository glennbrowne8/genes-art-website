# 🚀 Deployment Checklist for Gene's Art Website

## Pre-Deployment Checklist

### ✅ Before You Deploy

- [ ] All code is tested locally (`npm run dev` works)
- [ ] Contact information is updated in `/content/settings/general.json`
- [ ] Sample artwork is appropriate or removed
- [ ] .gitignore file is in place
- [ ] README.md has been reviewed

## Step-by-Step Deployment to Netlify

### Step 1: Prepare Git Repository

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Gene's Art Website"
```

### Step 2: Push to GitHub

1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name it: `genes-art-website`
4. Don't initialize with README (we already have one)
5. Copy the commands and run:

```bash
git remote add origin YOUR_GITHUB_URL
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign up/login (use GitHub account for easy connection)
3. Click "Add new site" → "Import an existing project"
4. Choose "GitHub"
5. Select your repository: `genes-art-website`
6. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - Click "Deploy site"

⏱️ Wait 2-3 minutes for deployment to complete

### Step 4: Set Up Admin Access (CRITICAL)

#### Enable Netlify Identity:

1. In your site dashboard, click "Identity" in the top menu
2. Click "Enable Identity"
3. Go to "Settings" under Identity
4. Under "Registration", select **"Invite only"**
5. Under "External providers", enable any you want (optional)

#### Enable Git Gateway:

1. Still in Identity settings
2. Scroll to "Services" section
3. Click "Enable Git Gateway"

#### Invite Gene as User:

1. Go to Identity tab
2. Click "Invite users"
3. Enter Gene's email address
4. Click "Send"
5. Gene will receive an email to set up his account

### Step 5: Configure Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the instructions to point your domain to Netlify
4. Enable HTTPS (free SSL certificate)

**Cost**: ~$15/year for domain registration

### Step 6: Enable Contact Form (Optional)

#### Option A: Netlify Forms (Easiest - FREE)

1. In `/app/page.js`, update the form:

```jsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of form fields */}
</form>
```

2. Commit and push changes
3. Forms will appear in Netlify dashboard under "Forms"

#### Option B: Formspree (Alternative)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get the endpoint URL
3. Update form action in `/app/page.js`
4. Free tier: 50 submissions/month

### Step 7: Final Testing

- [ ] Visit your deployed site
- [ ] Test all navigation links
- [ ] Go to `/admin` and verify CMS loads
- [ ] Log in as Gene (use invite email)
- [ ] Add a test artwork item
- [ ] Verify the artwork appears on the main site (wait 2-3 min for rebuild)
- [ ] Test contact form (if enabled)
- [ ] Test on mobile device
- [ ] Test all images load correctly

## Post-Deployment

### Share With Gene

Send Gene these details:

```
🎨 Your Website: https://yoursite.netlify.app (or custom domain)

🔐 Admin Panel: https://yoursite.netlify.app/admin

📧 Login Email: [Gene's email]
Password: [Set by Gene in welcome email]

📚 Instructions: Check the README.md file for full guide
```

### Quick Guide for Gene

**To Add Artwork:**
1. Go to yoursite.com/admin
2. Click "Artwork" → "New Artwork"
3. Fill in title, category, description, price
4. Click on "Image" field to upload photo
5. Toggle "Available" to ON
6. Click "Publish"
7. Wait 2-3 minutes, then refresh your website to see the new item

**To Mark as Sold:**
1. Go to admin
2. Click on the artwork
3. Toggle "Available" to OFF
4. Click "Publish"

**To Update Contact Info:**
1. Go to admin
2. Click "Site Settings" → "General Settings"
3. Update phone, email, location
4. Click "Publish"

## Troubleshooting

### Admin panel says "Config Error"
- Check that `/public/admin/config.yml` is properly formatted
- Verify Git Gateway is enabled in Netlify Identity settings

### Can't log in to admin
- Make sure you clicked the invite link in email
- Verify Netlify Identity is enabled
- Try password reset

### Changes in CMS don't appear on site
- Wait 2-3 minutes for rebuild
- Check Netlify deploy log for errors
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)

### Images not uploading
- Check file size (keep under 5MB)
- Use JPG or PNG format
- Verify uploads folder permissions

### Contact form not working
- Make sure Netlify Forms is enabled
- Check spam folder for test emails
- Verify form has `data-netlify="true"` attribute

## Maintenance

### Regular Tasks

- **None!** - Once deployed, the site runs itself
- Gene manages content through admin panel
- Netlify handles hosting, SSL, CDN automatically

### Optional Updates

- Every few months, check for Next.js updates:
  ```bash
  npm update
  git commit -am "Update dependencies"
  git push
  ```

## Cost Summary

| Item | Cost |
|------|------|
| Netlify Hosting | $0/month |
| Decap CMS | $0/month |
| SSL Certificate | $0 (included) |
| Netlify Identity | $0 (first 1000 users) |
| Netlify Forms | $0 (100 submissions/month) |
| Custom Domain (optional) | ~$15/year |
| **Total** | **$0-15/year** |

## Support Resources

- **Netlify Docs**: https://docs.netlify.com
- **Decap CMS Docs**: https://decapcms.org/docs
- **Next.js Docs**: https://nextjs.org/docs

---

## Success Criteria ✅

You'll know deployment is successful when:

1. ✅ Website loads at the Netlify URL
2. ✅ Admin panel loads at `/admin`
3. ✅ Gene can log in with his email
4. ✅ Gene can add/edit/delete artwork through the CMS
5. ✅ Changes appear on the live site within 3 minutes
6. ✅ Site works on mobile devices
7. ✅ Contact form submits successfully (if enabled)
8. ✅ All images load properly

---

**Ready to deploy? Follow the steps above and you'll have Gene's site live in under 30 minutes!**
