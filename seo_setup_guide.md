# SEO Setup Guide for Your Portfolio

This guide will help you complete the SEO setup and get your portfolio indexed on Google.

## 🔧 Step 1: Update Personal Information

Before deploying, update the following placeholder values in your code:

### In `app/layout.tsx`:
- **Line 26**: `authors: [{ name: 'Vaibhav Saini' }]` - Update with your actual name
- **Line 29**: `metadataBase: new URL('https://yourportfolio.com')` - Update with your actual domain
- **Line 35**: `url: 'https://yourportfolio.com'` - Update with your actual domain
- **Line 38**: `siteName: 'Vaibhav Saini Portfolio'` - Update with your name
- **Line 51**: `creator: '@yourtwitterhandle'` - Update with your Twitter handle
- **Line 68**: `verification.google` - Add after setting up Google Search Console (Step 3)
- **Lines 76-85**: Update JSON-LD structured data with your actual information

### In `app/sitemap.ts`:
- **Line 4**: `const baseUrl = 'https://yourportfolio.com'` - Update with your actual domain

### In `public/robots.txt`:
- **Line 6**: `Sitemap: https://yourportfolio.com/sitemap.xml` - Update with your actual domain

## 📸 Step 2: Add Open Graph Image

Create a social sharing image (1200x630px) and save it as `public/og-image.jpg`. This image will appear when your portfolio is shared on social media.

**Recommended specs:**
- Dimensions: 1200 x 630 pixels
- Format: JPG or PNG
- File size: Under 1MB
- Content: Your name, title, and a professional photo or design

## 🔍 Step 3: Set Up Google Search Console

1. **Go to Google Search Console**: https://search.google.com/search-console
2. **Add your property**:
   - Click "Add Property"
   - Enter your domain (e.g., `yourportfolio.com`)
3. **Verify ownership** (choose one method):
   - **HTML tag method** (easiest):
     - Copy the verification meta tag
     - Add it to `app/layout.tsx` in the `verification.google` field
     - Redeploy your site
     - Click "Verify" in Search Console
   - **DNS method**: Add a TXT record to your domain's DNS settings
   - **HTML file method**: Upload a verification file to your `public` folder

## 📤 Step 4: Submit Your Sitemap

Once verified in Google Search Console:

1. Go to "Sitemaps" in the left sidebar
2. Enter `sitemap.xml` in the "Add a new sitemap" field
3. Click "Submit"
4. Google will start crawling your site (this can take a few days)

## ✅ Step 5: Verify Your SEO Implementation

### Test Structured Data:
1. Go to **Google Rich Results Test**: https://search.google.com/test/rich-results
2. Enter your portfolio URL
3. Verify that the Person schema is detected without errors

### Test Open Graph Tags:
1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. Enter your portfolio URL
3. Check that your title, description, and image appear correctly

### Test Twitter Cards:
1. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
2. Enter your portfolio URL
3. Verify the card preview looks good

### Test Performance & SEO Score:
1. **PageSpeed Insights**: https://pagespeed.web.dev/
2. Enter your portfolio URL
3. Check both mobile and desktop scores
4. Aim for 90+ on SEO score

## 🚀 Step 6: Monitor Indexing Progress

After submitting your sitemap:

1. **Check indexing status** in Google Search Console:
   - Go to "Pages" in the left sidebar
   - Monitor how many pages are indexed
2. **Request indexing** (optional):
   - Go to "URL Inspection" at the top
   - Enter your homepage URL
   - Click "Request Indexing" to speed up the process
3. **Monitor search performance**:
   - After a few weeks, check the "Performance" tab
   - See what queries are bringing users to your site

## 📊 Additional SEO Tips

### 1. Add Alt Text to Images
Make sure all images in your portfolio have descriptive alt text for accessibility and SEO.

### 2. Optimize Page Speed
- Use Next.js Image component for automatic optimization
- Minimize JavaScript bundle size
- Enable compression on your hosting platform

### 3. Create Quality Content
- Write detailed project descriptions
- Use relevant keywords naturally
- Keep content fresh and updated

### 4. Build Backlinks
- Share your portfolio on social media
- Add it to your GitHub profile
- Include it in your LinkedIn profile
- Submit to portfolio directories

### 5. Mobile Optimization
- Test on multiple devices
- Ensure responsive design works perfectly
- Check touch targets are large enough

## 🔗 Useful Resources

- **Google Search Console**: https://search.google.com/search-console
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Schema.org Documentation**: https://schema.org/Person
- **Next.js Metadata Docs**: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- **Open Graph Protocol**: https://ogp.me/

## 📝 Checklist

- [ ] Update all placeholder values with actual information
- [ ] Add Open Graph image (`public/og-image.jpg`)
- [ ] Deploy to production
- [ ] Set up Google Search Console
- [ ] Verify domain ownership
- [ ] Submit sitemap
- [ ] Test structured data with Rich Results Test
- [ ] Test Open Graph with Facebook Debugger
- [ ] Test Twitter Cards
- [ ] Check PageSpeed Insights score
- [ ] Monitor indexing progress
- [ ] Request indexing for homepage

---

**Need Help?** If you encounter any issues, check the Next.js documentation or reach out to the web development community for support.
