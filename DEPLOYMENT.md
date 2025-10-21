# Deployment Guide - Teton Construction Services

This guide provides step-by-step instructions for deploying the Teton Construction Services website to Vercel and connecting your Microsoft-purchased domain.

## Prerequisites

- GitHub account
- Vercel account (free - sign up at [vercel.com](https://vercel.com))
- Access to Microsoft Admin Center (for domain DNS settings)
- Git installed on your computer

## Step 1: Prepare Your Code

1. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Teton Construction Services website"
   ```

2. **Create GitHub Repository**
   - Go to [github.com](https://github.com) and create a new repository
   - Name it `teton-construction-services`
   - Make it private (recommended for business websites)
   - Don't initialize with README (we already have one)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/teton-construction-services.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

### Method 1: Vercel Dashboard (Recommended for Beginners)

1. **Sign Up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub repositories

2. **Import Project**
   - Click "Add New..." > "Project"
   - Select your `teton-construction-services` repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Environment Variables** (Optional)
   - Add any environment variables if needed
   - For now, you can skip this step

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - You'll get a URL like `teton-construction-services.vercel.app`

### Method 2: Vercel CLI (For Advanced Users)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Link to your GitHub repository
   - Deploy to production: `vercel --prod`

## Step 3: Connect Custom Domain (tetonconstructionservices.com)

### Part A: Add Domain in Vercel

1. **Access Domain Settings**
   - In Vercel dashboard, select your project
   - Click "Settings" tab
   - Click "Domains" in the sidebar

2. **Add Your Domain**
   - Enter: `tetonconstructionservices.com`
   - Click "Add"
   - Also add: `www.tetonconstructionservices.com`
   - Click "Add"

3. **Get DNS Records**
   - Vercel will provide DNS records you need to add
   - Keep this tab open - you'll need these values

   **You should see something like:**
   - **A Record**: `@` → `76.76.21.21` (Vercel's IP)
   - **CNAME Record**: `www` → `cname.vercel-dns.com`

### Part B: Update DNS in Microsoft Admin

1. **Access Microsoft Admin Center**
   - Go to [admin.microsoft.com](https://admin.microsoft.com)
   - Sign in with your Microsoft admin credentials

2. **Navigate to Domains**
   - Click "Settings" (left sidebar)
   - Click "Domains"
   - Select `tetonconstructionservices.com`

3. **Add DNS Records**

   **Add A Record:**
   - Click "DNS records"
   - Click "Add record" or "Custom records"
   - **Type**: A
   - **Name/Host**: @ (or leave blank)
   - **Value/Points to**: `76.76.21.21` (use the IP from Vercel)
   - **TTL**: 3600 (or leave default)
   - Click "Save"

   **Add CNAME Record:**
   - Click "Add record"
   - **Type**: CNAME
   - **Name/Host**: www
   - **Value/Points to**: `cname.vercel-dns.com`
   - **TTL**: 3600 (or leave default)
   - Click "Save"

4. **Remove Conflicting Records** (If Necessary)
   - If you have existing A or CNAME records pointing elsewhere
   - Delete or modify them to match Vercel's requirements
   - Common conflicts:
     - Existing A record for @ pointing to old host
     - CNAME for www pointing to old host

### Part C: Verify Configuration

1. **Wait for DNS Propagation**
   - DNS changes take 5 minutes to 48 hours
   - Usually propagates within 2-4 hours

2. **Check DNS Propagation**
   - Use [whatsmydns.net](https://www.whatsmydns.net/)
   - Enter: `tetonconstructionservices.com`
   - Check if A record points to Vercel's IP globally

3. **Verify in Vercel**
   - Go back to Vercel dashboard
   - In Domains section, status should change from "Invalid Configuration" to "Valid Configuration"
   - SSL certificate will be automatically provisioned

4. **Test Your Site**
   - Visit `https://tetonconstructionservices.com`
   - Visit `https://www.tetonconstructionservices.com`
   - Both should work and redirect to HTTPS automatically

## Step 4: Post-Deployment Configuration

### Enable Automatic Deployments

Vercel automatically deploys when you push to GitHub:
- **Production Deployments**: Push to `main` branch
- **Preview Deployments**: Open a pull request

### Set Up Branch Protection (Recommended)

1. In GitHub repository:
   - Go to Settings > Branches
   - Add rule for `main` branch
   - Enable "Require pull request reviews"

### Configure Vercel Settings

1. **Environment Variables** (if needed)
   - In Vercel: Settings > Environment Variables
   - Add production variables

2. **Analytics** (optional but recommended)
   - In Vercel: Analytics tab
   - Enable Vercel Analytics (free for basic metrics)

3. **Performance Monitoring**
   - In Vercel: Speed Insights
   - Monitor page load times and web vitals

## Step 5: Testing Checklist

After deployment, test the following:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] All pages render properly (About, Services, Projects, Contact)
- [ ] Contact form is functional
- [ ] Images load correctly
- [ ] Site is responsive on mobile devices
- [ ] HTTPS works (secure connection)
- [ ] www and non-www versions both work
- [ ] Page load speed is acceptable (use PageSpeed Insights)

## Troubleshooting

### Issue: Domain Not Connecting

**Problem**: "Invalid Configuration" in Vercel after 24 hours

**Solutions**:
1. Verify DNS records are exactly as Vercel specified
2. Remove any conflicting DNS records
3. Contact Microsoft Support if DNS changes aren't saving
4. Try using Vercel's nameservers instead (advanced)

### Issue: SSL Certificate Not Provisioning

**Problem**: Site shows "Not Secure" or SSL error

**Solutions**:
1. Wait 24-48 hours for DNS to fully propagate
2. In Vercel, try removing and re-adding the domain
3. Ensure no conflicting CAA records in DNS

### Issue: Site Shows 404 Error

**Problem**: Homepage doesn't load after deployment

**Solutions**:
1. Check build logs in Vercel for errors
2. Ensure all dependencies are in `package.json`
3. Verify `app/page.tsx` exists
4. Rebuild the project in Vercel

### Issue: Images Not Loading

**Problem**: Broken image links or CORS errors

**Solutions**:
1. Check `next.config.js` has correct image domains
2. Verify image URLs are accessible
3. Check browser console for specific errors

## Maintenance & Updates

### Making Changes to the Website

1. **Development Process**
   ```bash
   # Create a new branch
   git checkout -b feature/update-content
   
   # Make your changes
   # Test locally: npm run dev
   
   # Commit changes
   git add .
   git commit -m "Update homepage content"
   
   # Push to GitHub
   git push origin feature/update-content
   ```

2. **Deploy to Production**
   - Open a pull request on GitHub
   - Review the preview deployment Vercel creates
   - Merge to `main` branch
   - Vercel automatically deploys to production

### Regular Maintenance

- **Weekly**: Check analytics and form submissions
- **Monthly**: Update dependencies (`npm update`)
- **Quarterly**: Review content for accuracy
- **Yearly**: Renew SSL certificates (automatic with Vercel)

## Cost Information

### Vercel Pricing
- **Hobby Plan**: FREE
  - Perfect for this website
  - Unlimited bandwidth
  - Automatic HTTPS
  - 100GB bandwidth included

- **Pro Plan**: $20/month (if you need more features)
  - Analytics
  - Password protection
  - 1TB bandwidth

### Domain Renewal
- Keep track of your Microsoft domain renewal date
- Typically $12-15/year for .com domains

## Support Resources

### Vercel Support
- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

### Next.js Support
- Documentation: [nextjs.org/docs](https://nextjs.org/docs)

### Microsoft Domain Support
- Admin Center: [admin.microsoft.com](https://admin.microsoft.com)
- Support: [support.microsoft.com](https://support.microsoft.com)

## Security Best Practices

1. **Keep Dependencies Updated**
   ```bash
   npm audit
   npm audit fix
   ```

2. **Enable 2FA on All Accounts**
   - GitHub account
   - Vercel account
   - Microsoft account

3. **Review Access Permissions**
   - Limit who has access to GitHub repository
   - Limit who can deploy in Vercel

4. **Monitor for Issues**
   - Set up Vercel alerts
   - Review deployment logs regularly

---

## Quick Reference: DNS Records

For easy copy-paste:

```
Type: A
Host: @
Value: 76.76.21.21
TTL: 3600

Type: CNAME  
Host: www
Value: cname.vercel-dns.com
TTL: 3600
```

---

**Congratulations!** Your website is now live. For questions or issues, refer to the README.md or contact your web developer.

