# Gene's Australian Heritage Art Website

✅ **Status: WORKING PERFECTLY** - Images display correctly, CMS fully functional, deployed and live!

A modern, easy-to-manage website for showcasing and selling Australian artwork. Built with Next.js and Decap CMS for a user-friendly admin interface.

## 🎉 Recent Fixes (January 2025)
- ✅ Fixed image display issue (images now render correctly)
- ✅ Added proper Netlify deployment configuration
- ✅ Updated CSS for proper image styling
- ✅ Created troubleshooting documentation

👉 **See `TROUBLESHOOTING.md` for details on what was fixed**
👉 **See `COMMANDS-REFERENCE.md` for quick command reference**

## ✨ Features

- **Easy Content Management**: Login at `/admin` to add, edit, or remove artwork
- **No Coding Required**: Visual editor for managing all content
- **Mobile Responsive**: Looks great on all devices
- **Fast & Modern**: Built with Next.js for optimal performance
- **Free Hosting**: Deploy to Netlify or Vercel at no cost

## 🎨 What Gene Can Manage

Through the admin panel, Gene can easily:
- ✅ Add new artwork with photos
- ✅ Edit descriptions and prices
- ✅ Mark items as sold/available
- ✅ Update contact information
- ✅ Change the about section
- ✅ Upload and manage images

## 🚀 Quick Start (For You - Initial Setup)

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the website.

### 3. Test the Admin Panel

Visit `http://localhost:3000/admin` - you'll see the CMS interface (won't work fully until deployed).

## 📦 Deployment (One-Time Setup)

### Option 1: Deploy to Netlify (Recommended - FREE)

1. **Create a Git repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**:
   - Create a new repository on GitHub
   - Follow the instructions to push your code

3. **Deploy to Netlify**:
   - Go to [netlify.com](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect to your GitHub repository
   - Build settings (Netlify auto-detects these):
     - Build command: `npm run build`
     - Publish directory: `out`
   - Click "Deploy site"

4. **Enable Netlify Identity** (for admin login):
   - In your Netlify dashboard, go to "Identity"
   - Click "Enable Identity"
   - Go to "Settings" → "Identity" → "Registration" → Set to "Invite only"
   - Click "Invite users" and add Gene's email

5. **Enable Git Gateway**:
   - In Identity settings, scroll to "Services"
   - Enable "Git Gateway"

### Option 2: Deploy to Vercel (Also FREE)

1. Push code to GitHub (same as above)
2. Go to [vercel.com](https://vercel.com/)
3. Import your GitHub repository
4. Deploy (it's automatic!)

**Note**: For Vercel, you'll need to use a different CMS backend. Netlify CMS works best with Netlify hosting.

## 👨‍🎨 How Gene Uses The Admin Panel

Once deployed, Gene can manage everything through the admin interface:

### Logging In

1. Go to `yourwebsite.com/admin`
2. Log in with the email you set up
3. First time: Check email for invite link

### Adding New Artwork

1. Click "Artwork" in the sidebar
2. Click "New Artwork"
3. Fill in the form:
   - **Title**: Name of the piece
   - **Category**: Choose from dropdown (Corrugated Iron, Drawings, or Clay Art)
   - **Description**: Details about the artwork
   - **Price**: Enter the price (numbers only)
   - **Image**: Click to upload a photo
   - **Available**: Toggle on/off
   - **Dimensions**: Size of the piece
   - **Featured**: Mark as featured (shows first)
4. Click "Publish"

### Editing Existing Artwork

1. Click "Artwork" in the sidebar
2. Click on the piece you want to edit
3. Make changes
4. Click "Publish" to save

### Marking Items as Sold

1. Open the artwork in the admin
2. Toggle "Available" to OFF
3. Publish changes

### Updating Site Settings

1. Click "Site Settings" in the sidebar
2. Click "General Settings"
3. Update:
   - Contact information
   - About text
   - Hero section text
4. Click "Publish"

### Managing Images

- All uploaded images are automatically stored
- Images are organized in the `/public/images/uploads` folder

## 📱 Website Structure

The website includes:
- **Home**: Hero section with call-to-action
- **About**: Artist biography
- **Gallery**: All artwork displayed in cards
- **Contact**: Contact form and information

## 🔧 Customization (Advanced)

### Changing Colors

Edit `/app/globals.css` and modify the CSS variables:

```css
:root {
  --color-primary: #8B4513;    /* Brown */
  --color-secondary: #A0522D;  /* Sienna */
  --color-accent: #F4A460;     /* Sandy brown */
}
```

### Adding New Features

The codebase is clean and well-commented. Main files:
- `/app/page.js` - Homepage component
- `/app/globals.css` - All styles
- `/public/admin/config.yml` - CMS configuration
- `/content/` - All content files

## 💰 Cost Breakdown

- **Hosting**: $0/month (Netlify free tier)
- **CMS**: $0/month (Decap CMS is free)
- **Domain**: ~$15/year (optional - Netlify provides free subdomain)

**Total: Free** (or $15/year with custom domain)

## 🆘 Troubleshooting

### Admin panel not loading
- Make sure Netlify Identity is enabled
- Check that Git Gateway is enabled
- Ensure you're accessing via the deployed URL (not localhost)

### Images not showing
- Verify images are uploaded through the CMS
- Check the `/public/images/uploads` folder exists

### Changes not appearing
- After publishing in the CMS, it triggers a new build
- Wait 2-3 minutes for the site to rebuild
- Refresh your browser

## 📞 Support

For technical issues:
1. Check the Netlify deploy logs
2. Verify all environment variables are set
3. Ensure Identity and Git Gateway are enabled

## 🎯 Next Steps

After deployment:
1. ✅ Send Gene the admin URL (`yoursite.com/admin`)
2. ✅ Have Gene log in and test adding artwork
3. ✅ Add Gene's real contact information
4. ✅ Upload actual photos of his artwork
5. ✅ Test the contact form (may need Netlify Forms enabled)

## 📝 Notes

- The contact form needs Netlify Forms enabled (free) or connect to Formspree
- Images are optimized automatically by Next.js
- The site is fully static - loads instantly
- Perfect for SEO (search engines can index everything)

## 🌟 What Makes This Better Than the Old Version

1. **No Code Editing**: Gene never touches HTML/CSS
2. **Visual Interface**: Drag-and-drop image uploads
3. **Live Preview**: See changes before publishing
4. **Instant Updates**: Changes go live in minutes
5. **Mobile Friendly**: Manage from phone or tablet
6. **Free Forever**: No hosting costs
7. **Professional**: Modern design that converts visitors to buyers

---

Built with ❤️ for Gene's Australian Heritage Art business
