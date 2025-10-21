# Teton Construction Services Website

A modern, responsive website for Teton Construction Services - a premier residential and commercial general contractor serving the greater DFW area since 2005.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by industry-leading construction companies
- **Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **SEO Optimized**: Built-in SEO with metadata, sitemap, and robots.txt
- **Performance**: Lightning-fast load times with Next.js 14 and optimized images
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **Easy to Update**: Component-based architecture for easy content management

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel
- **Version Control**: GitHub

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/teton-construction-services.git
   cd teton-construction-services
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
teton-construction-services/
├── app/
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── projects/        # Projects portfolio page
│   ├── services/        # Services page
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles
│   ├── sitemap.ts       # Dynamic sitemap
│   └── robots.ts        # Robots.txt configuration
├── components/
│   ├── home/            # Home page components
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── TrustBadges.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   └── ContactForm.tsx  # Contact form
├── public/              # Static assets
└── package.json
```

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/teton-construction-services.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

3. **Connect Custom Domain**
   - In Vercel dashboard, go to your project
   - Click "Settings" > "Domains"
   - Add `tetonconstructionservices.com`
   - Follow Vercel's instructions to update DNS records

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 🌐 Custom Domain Setup (Microsoft-purchased domain)

1. **Get Vercel DNS Records**
   - In Vercel dashboard, add your domain
   - Vercel will provide DNS records (typically A and CNAME records)

2. **Update DNS in Microsoft Admin Center**
   - Log in to [admin.microsoft.com](https://admin.microsoft.com)
   - Go to "Settings" > "Domains"
   - Select your domain
   - Click "DNS records"
   - Add the A record: `@` pointing to Vercel's IP (e.g., `76.76.21.21`)
   - Add the CNAME record: `www` pointing to `cname.vercel-dns.com`

3. **Wait for DNS Propagation**
   - DNS changes can take 24-48 hours to propagate
   - Check status at [whatsmydns.net](https://www.whatsmydns.net/)

4. **SSL Certificate**
   - Vercel automatically provisions SSL certificates
   - Your site will be available via HTTPS once DNS is configured

## 📝 Content Updates

### Update Contact Information

Edit `components/Header.tsx` and `components/Footer.tsx` to update:
- Phone number
- Email address
- Social media links

### Add New Projects

Edit `app/projects/page.tsx` and add new project objects to the `projects` array.

### Update Testimonials

Edit `components/home/Testimonials.tsx` and add new testimonial objects to the `testimonials` array.

### Modify Services

Edit `app/services/page.tsx` to add or modify service offerings.

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:
- `primary`: Main brand color (blue)
- `accent`: Accent color (amber)
- `neutral`: Gray scale

### Typography

Edit `app/layout.tsx` to change fonts. Current font is Inter from Google Fonts.

## 📱 Features by Page

### Home Page
- Hero section with company tagline
- Trust badges (BBB, years in business, etc.)
- Services overview
- Why choose us section
- Client testimonials
- Call-to-action section

### About Page
- Company history
- Mission and values
- What sets us apart
- Statistics and achievements

### Services Page
- Residential services detail
- Commercial services detail
- Process overview
- CTA section

### Projects Page
- Portfolio grid with filtering
- Project details
- Impact statistics

### Contact Page
- Contact form
- Business information
- Service areas map
- Trust indicators

## 🔧 Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Environment Variables

Create a `.env.local` file for environment-specific settings:

```
NEXT_PUBLIC_SITE_URL=https://tetonconstructionservices.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

## 📊 Analytics Setup (Optional)

To add Google Analytics:

1. Get your GA4 Measurement ID
2. Add to `.env.local`
3. Add Google Analytics script to `app/layout.tsx`

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Image Loading Issues

Ensure all external image domains are added to `next.config.js` under `images.domains`.

## 📞 Support

For technical support or questions about the website:
- Email: info@tetonconstructionservices.com
- Phone: (817) 555-0123

## 📄 License

© 2024 Teton Construction Services. All rights reserved.

---

**Built with ❤️ using Next.js and Vercel**

