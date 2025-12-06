# Footer Feature

**Description:** Application-wide footer component providing site navigation, social media links, contact information, and legal links.

## Structure
- components/
  - AppFooter.tsx - Main footer component
  - index.ts - Export file

## Features
- Responsive design for mobile and desktop
- Navigation links (Quick Links, Resources, Legal)
- Social media integration
- Contact information
- Dark theme matching the app's design
- Sticky footer implementation

## Usage
The footer is automatically included in all pages through the App.js layout. It's positioned at the bottom of the page and sticks to the bottom even when content is minimal.

## Customization
To customize footer links, edit the `footerLinks` object in `AppFooter.tsx`:
- quickLinks: Main navigation links
- resources: Additional resources and pages
- legal: Legal and policy pages

To customize social media links, edit the `socialLinks` array in `AppFooter.tsx`.

To customize contact information, update the Contact section in the footer grid.
