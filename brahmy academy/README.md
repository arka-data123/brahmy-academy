# Brahmy Academy Website

Premium fitness center and martial arts academy website featuring modern animations, luxury design, and comprehensive business features.

## 🌟 Features

- **12 Comprehensive Sections**: Hero, Programs, Specialized Training, Facility, Coaches, Schedule, Testimonials, Pricing, News, Gallery, Contact, Footer
- **Modern Animations**: Scroll reveals, parallax effects, hover animations, smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **SEO Optimized**: Meta tags, structured data, semantic HTML
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Performance**: Fast loading (<3s), lazy loading images, GPU-accelerated animations

## 🎨 Design System

### Color Palette
- **Primary**: Deep Navy (#0A1828), Rich Black (#1C1C1C)
- **Accent**: Neon Yellow (#F4FF00), Lime Green (#C7FF00)
- **Text**: White (#FFFFFF), Light Gray (#E5E5E5)

### Typography
- **Primary Font**: Inter
- **Heading Font**: Outfit
- **Sizes**: Responsive scale from 12px to 64px

## 📁 Project Structure

```
brahmy-academy/
├── index.html              # Main HTML file
├── css/
│   ├── variables.css       # Design system variables
│   ├── animations.css      # Animation library
│   ├── components.css      # Reusable components
│   └── main.css           # Section styles
├── js/
│   ├── animations.js       # Scroll animations & parallax
│   ├── navigation.js       # Menu & navigation
│   ├── carousel.js         # Testimonial slider
│   └── forms.js           # Form validation
├── assets/
│   ├── images/            # Photos and graphics
│   └── icons/             # SVG icons
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone or download** the project files

2. **Open the website**:
   - **Option 1**: Double-click `index.html` to open in your browser
   - **Option 2**: Use a local server (recommended for development)

### Using a Local Server

**Python**:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Node.js**:
```bash
npx http-server -p 8000
```

**PHP**:
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎯 Business Information

### Contact Details
- **Name**: Brahmy Academy
- **Phone**: 92 140 140
- **Address**: 1 Rue Du Moknine, Manouba, Tunisia
- **Map Code**: R3FJ+QP Manouba
- **Hours**: Open daily until 10 PM
- **Rating**: 4.8/5 ⭐ (4 Google reviews)

### Social Media
- **Instagram**: [@brahmy_academy](https://instagram.com/brahmy_academy)
- **Facebook**: [Brahmy Academy](https://facebook.com/profile.php?id=61559504404343)

### Programs Offered
1. 🥋 **Taekwondo** - Traditional martial arts
2. 🥊 **Kick Boxing** - Combat sports & cardio
3. 🤸♀️ **Gymnastics** - Flexibility & body control
4. 🧕 **100% Femmes** - Women-only sessions
5. 👨🦰👩🦰 **Physique Mixte** - Co-ed training

## 🛠️ Customization

### Updating Content

1. **Business Information**: Edit contact details in `index.html` (search for "92 140 140")
2. **Colors**: Modify CSS variables in `css/variables.css`
3. **Images**: Replace placeholder images in `assets/images/`
4. **Programs**: Update program cards in the Programs section
5. **Pricing**: Modify pricing tiers in the Pricing section

### Adding New Sections

1. Create HTML structure in `index.html`
2. Add styles in `css/main.css`
3. Add animations using existing classes or create new ones
4. Update navigation menu to include new section

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1440px

## ⚡ Performance Optimization

- **Lazy Loading**: Images load as user scrolls
- **GPU Acceleration**: Transforms use `translateZ(0)`
- **Debouncing**: Scroll events optimized
- **Minification**: Ready for CSS/JS minification
- **Image Optimization**: Use WebP format for production

## 🎨 Asset Requirements

### High Priority (Replace Before Launch)
- Hero background image (1920x1080px)
- Program icons (300x300px, circular)
- Facility photos (1200x800px)
- Coach headshots (400x400px)

### Medium Priority
- Specialized training photos (800x600px)
- Testimonial avatars (100x100px)
- News article images (600x400px)

### Low Priority
- Gallery photos (various sizes)
- Background textures

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## 📊 SEO Features

- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Structured data (LocalBusiness schema)
- Semantic HTML5 elements
- Descriptive alt text for images
- Clean URL structure
- Sitemap ready

## ♿ Accessibility Features

- ARIA labels and roles
- Keyboard navigation support
- Skip to content link
- Focus indicators
- Screen reader optimization
- Color contrast compliance
- Reduced motion support

## 🚀 Deployment

### Option 1: Static Hosting
Upload all files to:
- **Netlify**: Drag & drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting
- **Firebase Hosting**: Google's platform

### Option 2: Traditional Hosting
1. Upload files via FTP to your web host
2. Ensure `index.html` is in the root directory
3. Configure domain name settings
4. Enable SSL certificate

### Pre-Deployment Checklist
- [ ] Replace all placeholder images
- [ ] Update contact information
- [ ] Test all forms
- [ ] Verify Google Maps embed
- [ ] Check social media links
- [ ] Test on multiple devices
- [ ] Run Lighthouse audit
- [ ] Validate HTML/CSS
- [ ] Set up analytics (Google Analytics)
- [ ] Configure contact form backend

## 📧 Contact Form Setup

The contact form currently uses a simulation. To make it functional:

1. **Option 1: FormSpree**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Option 2: Netlify Forms**
   Add `netlify` attribute to form tag

3. **Option 3: Custom Backend**
   Replace `simulateFormSubmission()` in `js/forms.js` with actual API call

## 🎓 Training Programs

### Taekwondo
- Traditional Korean martial arts
- Belt progression system
- Competition preparation
- All ages welcome

### Kick Boxing
- High-intensity workouts
- Combat techniques
- Cardio & strength training
- Beginner to advanced

### Gymnastics
- Flexibility training
- Balance & coordination
- Body control
- Professional instruction

### Women-Only Sessions
- Comfortable environment
- Female instructors
- All fitness levels
- Flexible scheduling

## 💰 Pricing

- **Basic**: €39/month - 2 classes/week
- **Elite**: €65/month - Unlimited classes (Most Popular)
- **Premium**: €124/month - Everything + personal training

*First week free trial available for all plans*

## 📞 Support

For questions or issues:
- **Email**: contact@brahmyacademy.com
- **Phone**: 92 140 140
- **WhatsApp**: +216 92 140 140

## 📄 License

© 2026 Brahmy Academy. All Rights Reserved.

## 🙏 Credits

- **Design**: Inspired by modern fitness websites
- **Fonts**: Google Fonts (Inter, Outfit)
- **Images**: Unsplash (placeholders - replace with actual photos)
- **Icons**: Unicode emoji (replace with custom icons)

---

**Built with ❤️ for Brahmy Academy**

*Transform Your Body. Elevate Your Mind. Become Unstoppable.*
