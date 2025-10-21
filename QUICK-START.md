# ⚡ Quick Start Guide

Get your Teton Construction website running in 3 steps!

## Step 1: Install Node.js (One-time setup)

1. Go to **https://nodejs.org**
2. Download the **LTS version** (recommended)
3. Run the installer (keep all default settings)
4. **Restart your computer**

## Step 2: Install & Run (5 minutes)

Open PowerShell in your project folder:

```bash
# Navigate to project
cd C:\Users\19728\OneDrive\Desktop\tetonconstructionservices.com

# Install dependencies (takes 2-3 minutes)
npm install

# Start the website
npm run dev
```

## Step 3: View Your Website

Open your browser and go to:
👉 **http://localhost:3000**

That's it! Your website is now running! 🎉

---

## What You'll See

✅ **Complete 5-page website:**
- Home page with hero and testimonials
- About page
- Services page  
- Projects portfolio
- Contact page

✅ **Fully responsive** (works on phones, tablets, desktops)

✅ **Professional design** (blue/white color scheme)

---

## Next Steps

### Before Deploying, Customize:

1. **Update contact info:**
   - Find & replace: `(817) 555-0123` with your real phone
   - Find & replace: `info@tetonconstructionservices.com` with your real email

2. **Add real content:**
   - Replace stock photos with your project photos
   - Update testimonials with real client feedback
   - Review all text for accuracy

3. **Test everything:**
   - Click all navigation links
   - Test contact form
   - Check on mobile device

### Ready to Deploy?

See **DEPLOYMENT.md** for complete step-by-step instructions to:
- Push to GitHub
- Deploy to Vercel (free)
- Connect your domain
- Go live!

---

## Common Commands

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Run production build
npm run lint   # Check for errors
```

---

## Need More Help?

📖 **Read these guides:**

- **SETUP-INSTRUCTIONS.md** - Detailed setup help
- **GETTING-STARTED.md** - Content customization  
- **DEPLOYMENT.md** - Deploy to production
- **README.md** - Full technical docs

---

## Troubleshooting

**"npm is not recognized"**
→ Install Node.js and restart your computer

**Port 3000 in use**
→ Run: `npm run dev -- -p 3001`

**Module not found**
→ Run: `npm install` again

---

## Key Files to Edit

```
📝 To update contact info:
   - components/Header.tsx
   - components/Footer.tsx
   - app/contact/page.tsx

📝 To update services:
   - app/services/page.tsx
   - components/home/Services.tsx

📝 To update projects:
   - app/projects/page.tsx

📝 To update testimonials:
   - components/home/Testimonials.tsx

📝 To change colors:
   - tailwind.config.js
```

---

## Success! 🚀

Your professional construction website is ready. Make your customizations, then deploy!

**Questions?** Check the other documentation files in this folder.

