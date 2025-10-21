# Getting Started with Your Teton Construction Website

Welcome! This guide will help you get your new website up and running in minutes.

## Quick Start (5 minutes)

### Step 1: Install Dependencies

Open a terminal in the project folder and run:

```bash
npm install
```

This will install all the necessary packages (Next.js, React, Tailwind CSS, etc.)

### Step 2: Run the Development Server

```bash
npm run dev
```

Your website will be available at: [http://localhost:3000](http://localhost:3000)

That's it! Your website is now running locally. 🎉

## What You'll See

When you open the site, you'll see:

- **Home Page**: Hero section, services, testimonials, and call-to-action
- **About Page**: Company history and values
- **Services Page**: Detailed residential and commercial offerings
- **Projects Page**: Portfolio showcase
- **Contact Page**: Contact form and business information

## Customizing Content

### 1. Update Contact Information

**File**: `components/Header.tsx` (line 59)
```typescript
(817) 555-0123  // ← Replace with real phone number
```

**File**: `components/Footer.tsx` (line 87)
```typescript
(817) 555-0123  // ← Replace with real phone number
info@tetonconstructionservices.com  // ← Replace with real email
```

### 2. Update Company Phone & Email Throughout

Search and replace across all files:
- Find: `(817) 555-0123` → Replace with actual phone
- Find: `info@tetonconstructionservices.com` → Replace with actual email

### 3. Add Real Project Photos

**File**: `app/projects/page.tsx`

Replace the Unsplash image URLs with your own project photos:

```typescript
image: 'https://images.unsplash.com/...'  // ← Replace with your images
```

**Tip**: Upload photos to your project's `public` folder and reference them like:
```typescript
image: '/projects/project-1.jpg'
```

### 4. Customize Testimonials

**File**: `components/home/Testimonials.tsx`

Update with real client testimonials:

```typescript
{
  name: 'Your Client Name',
  location: 'City, TX',
  project: 'Type of Project',
  rating: 5,
  text: 'Client testimonial here...'
}
```

### 5. Update Service Descriptions

**File**: `app/services/page.tsx`

Customize service offerings to match your actual services.

## Important: Before Going Live

### Must Update:

1. ✅ Phone numbers (replace all `(817) 555-0123`)
2. ✅ Email addresses (replace `info@tetonconstructionservices.com`)
3. ✅ Project photos (replace Unsplash URLs)
4. ✅ Add real testimonials
5. ✅ Review all content for accuracy
6. ✅ Add your company logo (if you have one)
7. ✅ Update social media links in Footer
8. ✅ Test contact form

### Optional Enhancements:

- Add Google Analytics tracking
- Integrate form service (Formspree, EmailJS)
- Add more project photos
- Create a blog section
- Add video testimonials

## Color Customization

Want to change the blue theme? Edit `tailwind.config.js`:

```javascript
primary: {
  600: '#0284c7',  // ← Change this hex color
}
```

## Adding Your Logo

1. Save your logo as `logo.png` in the `public` folder
2. Edit `components/Header.tsx`
3. Replace the text logo with:

```typescript
<Image src="/logo.png" alt="Teton Construction" width={180} height={50} />
```

## Next Steps

1. **Customize Content**: Update all placeholder content
2. **Test Everything**: Check all pages and forms
3. **Deploy**: Follow the `DEPLOYMENT.md` guide
4. **Connect Domain**: Set up your custom domain

## Need Help?

- **General Questions**: See `README.md`
- **Deployment Help**: See `DEPLOYMENT.md`
- **Technical Issues**: Check Next.js docs at [nextjs.org](https://nextjs.org/docs)

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for code issues
npm run lint
```

## File Structure Quick Reference

```
📁 app/
  ├── page.tsx          ← Home page
  ├── about/page.tsx    ← About page
  ├── services/page.tsx ← Services page
  ├── projects/page.tsx ← Projects page
  └── contact/page.tsx  ← Contact page

📁 components/
  ├── Header.tsx        ← Navigation
  ├── Footer.tsx        ← Footer
  ├── ContactForm.tsx   ← Contact form
  └── home/             ← Home page sections

📁 public/
  └── (your images here)
```

---

**Ready to launch?** Head over to `DEPLOYMENT.md` for step-by-step deployment instructions! 🚀

