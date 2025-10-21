# Complete Setup Instructions

## Prerequisites Installation

Before you can run the website, you need to install Node.js (which includes npm).

### Step 1: Install Node.js

1. **Download Node.js**
   - Go to [nodejs.org](https://nodejs.org/)
   - Download the **LTS (Long Term Support)** version
   - For Windows: Download the `.msi` installer (64-bit)

2. **Install Node.js**
   - Run the downloaded installer
   - Click "Next" through the installation wizard
   - Accept the license agreement
   - Use default installation settings
   - ✅ Make sure "Add to PATH" is checked
   - Complete the installation

3. **Verify Installation**
   - Open a **new** PowerShell or Command Prompt window
   - Run these commands:
   ```bash
   node --version
   # Should show: v18.x.x or v20.x.x
   
   npm --version
   # Should show: 9.x.x or 10.x.x
   ```

### Step 2: Navigate to Project Folder

```bash
# Open PowerShell and navigate to your project
cd C:\Users\19728\OneDrive\Desktop\tetonconstructionservices.com
```

### Step 3: Install Project Dependencies

```bash
npm install
```

This will download all required packages (takes 2-3 minutes).

### Step 4: Run the Development Server

```bash
npm run dev
```

Your website will be available at: [http://localhost:3000](http://localhost:3000)

## Troubleshooting

### Issue: "npm is not recognized"

**Solution**: 
1. Restart your computer after installing Node.js
2. Open a **new** PowerShell window
3. Try again

### Issue: "Cannot find module"

**Solution**:
```bash
# Delete node_modules and reinstall
rmdir node_modules -Recurse -Force
npm install
```

### Issue: Port 3000 already in use

**Solution**:
```bash
# Use a different port
npm run dev -- -p 3001
```

## What's Included

✅ **Complete Next.js Website** with 5 pages:
  - Home page with hero, services, testimonials
  - About page with company history
  - Services page (residential & commercial)
  - Projects portfolio page
  - Contact page with form

✅ **Professional Design**:
  - Modern, responsive layout
  - Mobile-friendly navigation
  - Professional color scheme (blue/white)
  - Smooth animations and transitions

✅ **SEO Optimized**:
  - Meta tags on all pages
  - Sitemap generation
  - Robots.txt configuration
  - Open Graph tags for social sharing

✅ **Performance Optimized**:
  - Fast page loads
  - Optimized images
  - Code splitting
  - Production-ready

✅ **Complete Documentation**:
  - README.md - Technical documentation
  - DEPLOYMENT.md - Step-by-step deployment guide
  - GETTING-STARTED.md - Quick customization guide
  - This file - Setup instructions

## Next Actions

1. ✅ **Install Node.js** (if not done)
2. ✅ **Run `npm install`**
3. ✅ **Run `npm run dev`** to see the site
4. 📝 **Customize content** (see GETTING-STARTED.md)
5. 🚀 **Deploy to Vercel** (see DEPLOYMENT.md)

## Quick Customization Checklist

Before deploying, update these:

- [ ] Phone number (currently: `(817) 555-0123`)
- [ ] Email address (currently: `info@tetonconstructionservices.com`)
- [ ] Project photos (currently using stock photos)
- [ ] Testimonials (add real client feedback)
- [ ] Social media links (in Footer)
- [ ] Company logo (optional)
- [ ] Service descriptions (customize to your offerings)

## Support & Resources

- **Node.js Installation**: [nodejs.org/download](https://nodejs.org/download)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Deployment**: [vercel.com](https://vercel.com)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Need help?** All documentation files are in your project folder. Start with `GETTING-STARTED.md` for content updates!

