import { initPlasmicLoader } from '@plasmicapp/loader-nextjs';
import * as React from 'react';

// Import your components (debug with console.log)
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import AboutModal from './components/AboutModal';
import ModalManager from './components/ModalManager';
import CTAButton from './components/CTAButton';

// Debug: Log that components are imported
console.log('=== PLASMIC INIT DEBUG ===');
console.log('HeroSection imported:', !!HeroSection);
console.log('ProcessSection imported:', !!ProcessSection);
console.log('TestimonialsSection imported:', !!TestimonialsSection);

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: '5DifLAavefmKnBGRQAQW5E',
      token: 'EEb0zElX2ACpZBgKmQOljA6kyBLJr16r0HDijxDdz38gvKMKqGxCBuLAWKj6Jd7QMtqNCDYmiEuO8mLO0tXXw',
    },
  ],
  preview: true, // Keep true for client editing in production
});

// Only register components on the client side to avoid build issues
if (typeof window !== 'undefined') {
  console.log('Starting client-side component registration...');

  try {
    PLASMIC.registerComponent(HeroSection, {
      name: 'HeroSection',
      props: {
        // Main Content - All Text Editable
        mainHeading: {
          type: 'string',
          defaultValue: 'What if I told you that you could',
          displayName: 'Main Heading'
        },
        highlightText1: {
          type: 'string',
          defaultValue: 'live anywhere in the world',
          displayName: 'Highlight Text 1'
        },
        highlightText2: {
          type: 'string',
          defaultValue: 'pay 0% tax',
          displayName: 'Highlight Text 2'
        },
        subHeading: {
          type: 'string',
          defaultValue: "Don't miss this exclusive offer. Avail the opportunity to live anywhere in the world.",
          displayName: 'Sub Heading'
        },
        
        // Pricing - Fully Editable
        originalPrice: {
          type: 'string',
          defaultValue: '$11,980',
          displayName: 'Original Price'
        },
        currentPrice: {
          type: 'string',
          defaultValue: '$9,800',
          displayName: 'Current Price'
        },
        savingsText: {
          type: 'string',
          defaultValue: 'Save $2,180',
          displayName: 'Savings Text'
        },
        
        // Button & CTA
        buttonText: {
          type: 'string',
          defaultValue: 'Get Started Today - Save $2,180',
          displayName: 'Button Text'
        },
        socialProofText: {
          type: 'string',
          defaultValue: 'Join 7,000+ online coaches and business owners',
          displayName: 'Social Proof Text'
        },
        
        // Features - All Editable
        feature1Text: {
          type: 'string',
          defaultValue: 'Live anywhere in the world',
          displayName: 'Feature 1 Text'
        },
        feature2Text: {
          type: 'string',
          defaultValue: 'Pay 0% income and corporate tax',
          displayName: 'Feature 2 Text'
        },
        feature3Text: {
          type: 'string',
          defaultValue: 'Open your new business setup or use your current business name',
          displayName: 'Feature 3 Text'
        },
        feature4Text: {
          type: 'string',
          defaultValue: 'Get your personal & business bank account in Dubai',
          displayName: 'Feature 4 Text'
        },
        
        // Visual Design - All Customizable
        backgroundImage: {
          type: 'imageUrl',
          defaultValue: '/dubai-beach.jpg',
          displayName: 'Background Image'
        },
                 overlayOpacity: {
           type: 'number',
           defaultValue: 0.3,
           min: 0,
           max: 1,
           step: 0.1,
           displayName: 'Background Overlay Opacity'
         },
        
        // Typography Colors
        headingColor: {
          type: 'color',
          defaultValue: '#ffffff',
          displayName: 'Heading Color'
        },
                 highlightColor: {
           type: 'color',
           defaultValue: '#ef4444',
           displayName: 'Highlight Color'
         },
        subheadingColor: {
          type: 'color',
          defaultValue: '#d1d5db',
          displayName: 'Subheading Color'
        },
        
                 // Button Styling
         buttonBackgroundColor: {
           type: 'color',
           defaultValue: '#ef4444',
           displayName: 'Button Background'
         },
        buttonTextColor: {
          type: 'color',
          defaultValue: '#ffffff',
          displayName: 'Button Text Color'
        },
                 buttonHoverColor: {
           type: 'color',
           defaultValue: '#dc2626',
           displayName: 'Button Hover Color'
         },
        
        // Layout & Spacing
        minHeight: {
          type: 'string',
          defaultValue: '600px',
          displayName: 'Section Height'
        },
        paddingTop: {
          type: 'string',
          defaultValue: '8rem',
          displayName: 'Top Padding'
        },
        paddingBottom: {
          type: 'string',
          defaultValue: '4rem',
          displayName: 'Bottom Padding'
        },
        containerMaxWidth: {
          type: 'string',
          defaultValue: '1200px',
          displayName: 'Container Max Width'
        },
        
        // Event handlers
        onGetStartedClick: {
          type: 'eventHandler',
          argTypes: [],
          displayName: 'On Get Started Click'
        },
        
        // Style props
        className: 'string'
      },
      defaultStyles: {
        width: '100%'
      }
    });
    console.log('✅ HeroSection registered with full editing capabilities');
  } catch (error) {
    console.error('❌ Error registering HeroSection:', error);
  }

  try {
    PLASMIC.registerComponent(ProcessSection, {
      name: 'ProcessSection',
      props: {
        // Section Header - Fully Editable
        sectionTitle: {
          type: 'string',
          defaultValue: 'What do I Need to Do?',
          displayName: 'Section Title'
        },
        sectionSubtitle: {
          type: 'string',
          defaultValue: 'Our streamlined 9-step process makes it simple to set up your global business presence. We handle the complexity, you focus on growing your business.',
          displayName: 'Section Subtitle'
        },
        
        // All 9 Steps - Individually Editable
        step1Title: {
          type: 'string',
          defaultValue: 'Submit Application',
          displayName: 'Step 1 Title'
        },
        step1Description: {
          type: 'string',
          defaultValue: 'Complete and submit your business setup application with all required documents.',
          displayName: 'Step 1 Description'
        },
        step2Title: {
          type: 'string',
          defaultValue: 'Make Payment',
          displayName: 'Step 2 Title'
        },
        step2Description: {
          type: 'string',
          defaultValue: 'Secure your spot with the discounted $9,800 payment (save $2,180 from regular price).',
          displayName: 'Step 2 Description'
        },
        step3Title: {
          type: 'string',
          defaultValue: 'Choose Business Activity',
          displayName: 'Step 3 Title'
        },
        step3Description: {
          type: 'string',
          defaultValue: 'Select your business activity from 2000+ approved activities in Dubai.',
          displayName: 'Step 3 Description'
        },
        step4Title: {
          type: 'string',
          defaultValue: 'Business Formation',
          displayName: 'Step 4 Title'
        },
        step4Description: {
          type: 'string',
          defaultValue: 'We handle the complete business formation process with Dubai authorities.',
          displayName: 'Step 4 Description'
        },
        step5Title: {
          type: 'string',
          defaultValue: 'Get 2-Year Residency Visa',
          displayName: 'Step 5 Title'
        },
        step5Description: {
          type: 'string',
          defaultValue: 'Receive your 2-year renewable residency visa for you and your family.',
          displayName: 'Step 5 Description'
        },
        step6Title: {
          type: 'string',
          defaultValue: 'Open Bank Account',
          displayName: 'Step 6 Title'
        },
        step6Description: {
          type: 'string',
          defaultValue: 'Set up your personal and business banking accounts in Dubai.',
          displayName: 'Step 6 Description'
        },
        step7Title: {
          type: 'string',
          defaultValue: 'Stripe Integration',
          displayName: 'Step 7 Title'
        },
        step7Description: {
          type: 'string',
          defaultValue: 'Get your Stripe account connected for seamless global payments.',
          displayName: 'Step 7 Description'
        },
        step8Title: {
          type: 'string',
          defaultValue: 'Tax Compliance Setup',
          displayName: 'Step 8 Title'
        },
        step8Description: {
          type: 'string',
          defaultValue: 'Ensure complete tax compliance and 0% corporate tax structure.',
          displayName: 'Step 8 Description'
        },
        step9Title: {
          type: 'string',
          defaultValue: 'Global Freedom',
          displayName: 'Step 9 Title'
        },
        step9Description: {
          type: 'string',
          defaultValue: 'Start living anywhere while your business operates legally and tax-efficiently.',
          displayName: 'Step 9 Description'
        },
        
        // CTA Section - Fully Editable
        ctaHeading: {
          type: 'string',
          defaultValue: 'Ready to Get Started?',
          displayName: 'CTA Heading'
        },
        ctaSubtext: {
          type: 'string',
          defaultValue: 'Join hundreds of successful entrepreneurs who have transformed their business with our proven process.',
          displayName: 'CTA Subtext'
        },
        ctaButtonText: {
          type: 'string',
          defaultValue: 'Begin Your Journey Today',
          displayName: 'CTA Button Text'
        },
        
        // Design Colors - All Customizable
        backgroundColor: {
          type: 'color',
          defaultValue: '#f9fafb',
          displayName: 'Background Color'
        },
        titleColor: {
          type: 'color',
          defaultValue: '#111827',
          displayName: 'Title Color'
        },
        subtitleColor: {
          type: 'color',
          defaultValue: '#6b7280',
          displayName: 'Subtitle Color'
        },
        stepCardBackground: {
          type: 'color',
          defaultValue: '#ffffff',
          displayName: 'Step Card Background'
        },
                 stepNumberColor: {
           type: 'color',
           defaultValue: '#ef4444',
           displayName: 'Step Number Color'
         },
        stepTitleColor: {
          type: 'color',
          defaultValue: '#111827',
          displayName: 'Step Title Color'
        },
        stepDescriptionColor: {
          type: 'color',
          defaultValue: '#6b7280',
          displayName: 'Step Description Color'
        },
                 ctaBackgroundColor: {
           type: 'color',
           defaultValue: '#ffffff',
           displayName: 'CTA Background Color'
         },
        ctaTextColor: {
          type: 'color',
          defaultValue: '#111827',
          displayName: 'CTA Text Color'
        },
        
        // Layout & Spacing
        sectionPadding: {
          type: 'string',
          defaultValue: '5rem 0',
          displayName: 'Section Padding'
        },
        cardSpacing: {
          type: 'string',
          defaultValue: '2rem',
          displayName: 'Card Spacing'
        },
        
        // Event handlers
        onGetStartedClick: {
          type: 'eventHandler', 
          argTypes: [],
          displayName: 'On Get Started Click'
        },
        
        // Style props
        className: 'string'
      },
      defaultStyles: {
        width: '100%'
      }
    });
    console.log('✅ ProcessSection registered with full editing capabilities');
  } catch (error) {
    console.error('❌ Error registering ProcessSection:', error);
  }

  try {
    PLASMIC.registerComponent(TestimonialsSection, {
      name: 'TestimonialsSection',
      props: {
        // Section Header - Fully Editable
        sectionTitle: {
          type: 'string',
          defaultValue: 'Client Testimonials',
          displayName: 'Section Title'
        },
        sectionSubtitle: {
          type: 'string',
          defaultValue: "Don't just take our word for it. Here's what our successful clients have to say about their transformation.",
          displayName: 'Section Subtitle'
        },
        
        // Testimonial 1 - All Editable
        testimonial1Name: {
          type: 'string',
          defaultValue: 'Sarah Johnson',
          displayName: 'Testimonial 1 Name'
        },
        testimonial1Role: {
          type: 'string',
          defaultValue: 'Digital Marketing Consultant',
          displayName: 'Testimonial 1 Role'
        },
        testimonial1Company: {
          type: 'string',
          defaultValue: 'SJ Marketing',
          displayName: 'Testimonial 1 Company'
        },
        testimonial1Content: {
          type: 'string',
          defaultValue: 'Chris Elliott made the impossible possible. I now live in Bali while my business is registered in Dubai, paying 0% tax. The entire process was seamless and professional.',
          displayName: 'Testimonial 1 Content'
        },
        testimonial1Image: {
          type: 'imageUrl',
          defaultValue: '/api/placeholder/80/80',
          displayName: 'Testimonial 1 Image'
        },
        testimonial1Rating: {
          type: 'number',
          defaultValue: 5,
          min: 1,
          max: 5,
          displayName: 'Testimonial 1 Rating'
        },
        
        // Testimonial 2 - All Editable
        testimonial2Name: {
          type: 'string',
          defaultValue: 'Michael Chen',
          displayName: 'Testimonial 2 Name'
        },
        testimonial2Role: {
          type: 'string',
          defaultValue: 'Software Developer',
          displayName: 'Testimonial 2 Role'
        },
        testimonial2Company: {
          type: 'string',
          defaultValue: 'TechFlow Solutions',
          displayName: 'Testimonial 2 Company'
        },
        testimonial2Content: {
          type: 'string',
          defaultValue: 'The 2-year residency visa was a game-changer for my family. We have the freedom to travel while maintaining our business operations. Highly recommend Chris\'s services.',
          displayName: 'Testimonial 2 Content'
        },
        testimonial2Image: {
          type: 'imageUrl',
          defaultValue: '/api/placeholder/80/80',
          displayName: 'Testimonial 2 Image'
        },
        testimonial2Rating: {
          type: 'number',
          defaultValue: 5,
          min: 1,
          max: 5,
          displayName: 'Testimonial 2 Rating'
        },
        
        // Testimonial 3 - All Editable
        testimonial3Name: {
          type: 'string',
          defaultValue: 'Emma Rodriguez',
          displayName: 'Testimonial 3 Name'
        },
        testimonial3Role: {
          type: 'string',
          defaultValue: 'E-commerce Entrepreneur',
          displayName: 'Testimonial 3 Role'
        },
        testimonial3Company: {
          type: 'string',
          defaultValue: 'Global Goods Co',
          displayName: 'Testimonial 3 Company'
        },
        testimonial3Content: {
          type: 'string',
          defaultValue: 'Setting up banking and Stripe integration was incredibly smooth. I\'m now invoicing clients globally with zero complications. Worth every penny of the investment.',
          displayName: 'Testimonial 3 Content'
        },
        testimonial3Image: {
          type: 'imageUrl',
          defaultValue: '/api/placeholder/80/80',
          displayName: 'Testimonial 3 Image'
        },
        testimonial3Rating: {
          type: 'number',
          defaultValue: 5,
          min: 1,
          max: 5,
          displayName: 'Testimonial 3 Rating'
        },
        
        // Testimonial 4 - All Editable
        testimonial4Name: {
          type: 'string',
          defaultValue: 'David Thompson',
          displayName: 'Testimonial 4 Name'
        },
        testimonial4Role: {
          type: 'string',
          defaultValue: 'Business Consultant',
          displayName: 'Testimonial 4 Role'
        },
        testimonial4Company: {
          type: 'string',
          defaultValue: 'Thompson Advisory',
          displayName: 'Testimonial 4 Company'
        },
        testimonial4Content: {
          type: 'string',
          defaultValue: 'The tax savings alone paid for the service within the first year. Chris guided us through every step and ensured complete compliance with all regulations.',
          displayName: 'Testimonial 4 Content'
        },
        testimonial4Image: {
          type: 'imageUrl',
          defaultValue: '/api/placeholder/80/80',
          displayName: 'Testimonial 4 Image'
        },
        testimonial4Rating: {
          type: 'number',
          defaultValue: 5,
          min: 1,
          max: 5,
          displayName: 'Testimonial 4 Rating'
        },
        
        // Design Colors - All Customizable
        backgroundColor: {
          type: 'color',
          defaultValue: '#ffffff',
          displayName: 'Background Color'
        },
        titleColor: {
          type: 'color',
          defaultValue: '#111827',
          displayName: 'Title Color'
        },
        subtitleColor: {
          type: 'color',
          defaultValue: '#6b7280',
          displayName: 'Subtitle Color'
        },
        cardBackgroundColor: {
          type: 'color',
          defaultValue: '#f9fafb',
          displayName: 'Card Background Color'
        },
        cardBorderColor: {
          type: 'color',
          defaultValue: '#e5e7eb',
          displayName: 'Card Border Color'
        },
        nameColor: {
          type: 'color',
          defaultValue: '#111827',
          displayName: 'Name Color'
        },
                 roleColor: {
           type: 'color',
           defaultValue: '#ef4444',
           displayName: 'Role Color'
         },
        contentColor: {
          type: 'color',
          defaultValue: '#4b5563',
          displayName: 'Content Color'
        },
        starColor: {
          type: 'color',
          defaultValue: '#fbbf24',
          displayName: 'Star Color'
        },
        
        // Layout & Spacing
        sectionPadding: {
          type: 'string',
          defaultValue: '5rem 0',
          displayName: 'Section Padding'
        },
        cardSpacing: {
          type: 'string',
          defaultValue: '1.5rem',
          displayName: 'Card Spacing'
        },
        
        className: 'string'
      },
      defaultStyles: {
        width: '100%'
      }
    });
    console.log('✅ TestimonialsSection registered with full editing capabilities');
  } catch (error) {
    console.error('❌ Error registering TestimonialsSection:', error);
  }

  try {
    PLASMIC.registerComponent(Header, {
      name: 'Header',
      props: {
        // Logo and Branding - Fully Editable
        logoUrl: {
          type: 'imageUrl',
          defaultValue: '/chriselliot.de logo.png',
          displayName: 'Logo Image'
        },
        logoAlt: {
          type: 'string',
          defaultValue: 'Chris Elliott',
          displayName: 'Logo Alt Text'
        },
        logoWidth: {
          type: 'string',
          defaultValue: '120px',
          displayName: 'Logo Width'
        },
        logoHeight: {
          type: 'string',
          defaultValue: 'auto',
          displayName: 'Logo Height'
        },
        
        // Navigation Text - All Editable
        getStartedButtonText: {
          type: 'string',
          defaultValue: 'Get Started',
          displayName: 'Get Started Button Text'
        },
        aboutButtonText: {
          type: 'string',
          defaultValue: 'About',
          displayName: 'About Button Text'
        },
        
        // Navigation Links (if any)
        homeText: {
          type: 'string',
          defaultValue: 'Home',
          displayName: 'Home Link Text'
        },
        servicesText: {
          type: 'string',
          defaultValue: 'Services',
          displayName: 'Services Link Text'
        },
        contactText: {
          type: 'string',
          defaultValue: 'Contact',
          displayName: 'Contact Link Text'
        },
        
        // Design Colors - All Customizable
        backgroundColor: {
          type: 'color',
          defaultValue: '#ffffff',
          displayName: 'Background Color'
        },
        borderColor: {
          type: 'color',
          defaultValue: '#e5e7eb',
          displayName: 'Border Color'
        },
        linkColor: {
          type: 'color',
          defaultValue: '#374151',
          displayName: 'Link Text Color'
        },
                 linkHoverColor: {
           type: 'color',
           defaultValue: '#ef4444',
           displayName: 'Link Hover Color'
         },
         getStartedButtonBackground: {
           type: 'color',
           defaultValue: '#ef4444',
           displayName: 'Get Started Button Background'
         },
                 getStartedButtonTextColor: {
           type: 'color',
           defaultValue: '#ffffff',
           displayName: 'Get Started Button Text Color'
         },
                 getStartedButtonHover: {
           type: 'color',
           defaultValue: '#dc2626',
           displayName: 'Get Started Button Hover'
         },
        aboutButtonBackground: {
          type: 'color',
          defaultValue: 'transparent',
          displayName: 'About Button Background'
        },
                 aboutButtonTextColor: {
           type: 'color',
           defaultValue: '#374151',
           displayName: 'About Button Text Color'
         },
        aboutButtonBorder: {
          type: 'color',
          defaultValue: '#d1d5db',
          displayName: 'About Button Border'
        },
        
        // Layout & Spacing
        headerPadding: {
          type: 'string',
          defaultValue: '1rem 0',
          displayName: 'Header Padding'
        },
        maxWidth: {
          type: 'string',
          defaultValue: '1200px',
          displayName: 'Container Max Width'
        },
        isSticky: {
          type: 'boolean',
          defaultValue: true,
          displayName: 'Sticky Header'
        },
        shadowOnScroll: {
          type: 'boolean',
          defaultValue: true,
          displayName: 'Shadow on Scroll'
        },
        
        // Event handlers
        onGetStartedClick: {
          type: 'eventHandler',
          argTypes: [],
          displayName: 'On Get Started Click'
        },
        onAboutClick: {
          type: 'eventHandler',
          argTypes: [],
          displayName: 'On About Click'
        },
        onHomeClick: {
          type: 'eventHandler',
          argTypes: [],
          displayName: 'On Home Click'
        },
        onServicesClick: {
          type: 'eventHandler',
          argTypes: [],
          displayName: 'On Services Click'
        },
        onContactClick: {
          type: 'eventHandler',
          argTypes: [],
          displayName: 'On Contact Click'
        },
        
        // Style props
        className: 'string'
      },
      defaultStyles: {
        width: '100%'
      }
    });
    console.log('✅ Header registered with full editing capabilities');
  } catch (error) {
    console.error('❌ Error registering Header:', error);
  }

  try {
    PLASMIC.registerComponent(Footer, {
      name: 'Footer',
      props: {
        // Company Info Section - Fully Editable
        logoUrl: {
          type: 'imageUrl',
          defaultValue: '/chriselliot.de logo.png',
          displayName: 'Footer Logo'
        },
        logoAlt: {
          type: 'string',
          defaultValue: 'Chris Elliott',
          displayName: 'Logo Alt Text'
        },
        logoWidth: {
          type: 'string',
          defaultValue: '150px',
          displayName: 'Logo Width'
        },
        companyDescription: {
          type: 'string',
          defaultValue: 'Empowering entrepreneurs to live anywhere, pay 0% tax, and build global businesses with complete legal compliance.',
          displayName: 'Company Description'
        },
        
        // Social Media - All Editable
        showSocialMedia: {
          type: 'boolean',
          defaultValue: true,
          displayName: 'Show Social Media'
        },
        socialMediaTitle: {
          type: 'string',
          defaultValue: 'Follow Us',
          displayName: 'Social Media Title'
        },
        linkedinUrl: {
          type: 'string',
          defaultValue: 'https://www.linkedin.com/in/chris-elliott-437b00125/?originalSubdomain=ae',
          displayName: 'LinkedIn URL'
        },
        instagramUrl: {
          type: 'string',
          defaultValue: 'https://www.instagram.com/chriselliott__?igsh=dnZmZmd3MDc5MnQ5&utm_source=qr',
          displayName: 'Instagram URL'
        },
        youtubeUrl: {
          type: 'string',
          defaultValue: 'https://www.youtube.com/@chriselliott_',
          displayName: 'YouTube URL'
        },
        facebookUrl: {
          type: 'string',
          defaultValue: '',
          displayName: 'Facebook URL'
        },
        twitterUrl: {
          type: 'string',
          defaultValue: '',
          displayName: 'Twitter URL'
        },
        
        // Services Section - All Editable
        showServices: {
          type: 'boolean',
          defaultValue: true,
          displayName: 'Show Services'
        },
        servicesTitle: {
          type: 'string',
          defaultValue: 'Services',
          displayName: 'Services Title'
        },
        service1Text: {
          type: 'string',
          defaultValue: 'Business Setup',
          displayName: 'Service 1 Text'
        },
        service1Url: {
          type: 'string',
          defaultValue: '#',
          displayName: 'Service 1 URL'
        },
        service2Text: {
          type: 'string',
          defaultValue: 'Dubai Residency',
          displayName: 'Service 2 Text'
        },
        service2Url: {
          type: 'string',
          defaultValue: '#',
          displayName: 'Service 2 URL'
        },
        service3Text: {
          type: 'string',
          defaultValue: 'Banking Solutions',
          displayName: 'Service 3 Text'
        },
        service3Url: {
          type: 'string',
          defaultValue: '#',
          displayName: 'Service 3 URL'
        },
        service4Text: {
          type: 'string',
          defaultValue: 'Tax Optimization',
          displayName: 'Service 4 Text'
        },
        service4Url: {
          type: 'string',
          defaultValue: '#',
          displayName: 'Service 4 URL'
        },
        service5Text: {
          type: 'string',
          defaultValue: 'Legal Compliance',
          displayName: 'Service 5 Text'
        },
        service5Url: {
          type: 'string',
          defaultValue: '#',
          displayName: 'Service 5 URL'
        },
        
        // Contact Section - All Editable
        showContact: {
          type: 'boolean',
          defaultValue: true,
          displayName: 'Show Contact'
        },
        contactTitle: {
          type: 'string',
          defaultValue: 'Contact',
          displayName: 'Contact Title'
        },
        contactLocation: {
          type: 'string',
          defaultValue: 'Dubai, UAE',
          displayName: 'Contact Location'
        },
        contactSubtext: {
          type: 'string',
          defaultValue: 'Serving clients globally',
          displayName: 'Contact Subtext'
        },
        phoneNumber: {
          type: 'string',
          defaultValue: '+971 XX XXX XXXX',
          displayName: 'Phone Number'
        },
        emailAddress: {
          type: 'string',
          defaultValue: 'hello@chriselliott.de',
          displayName: 'Email Address'
        },
        officeAddress: {
          type: 'string',
          defaultValue: 'Dubai Business Bay, UAE',
          displayName: 'Office Address'
        },
        
        // Quick Links - All Editable
        showQuickLinks: {
          type: 'boolean',
          defaultValue: true,
          displayName: 'Show Quick Links'
        },
        quickLinksTitle: {
          type: 'string',
          defaultValue: 'Quick Links',
          displayName: 'Quick Links Title'
        },
        homeText: {
          type: 'string',
          defaultValue: 'Home',
          displayName: 'Home Link Text'
        },
        aboutText: {
          type: 'string',
          defaultValue: 'About',
          displayName: 'About Link Text'
        },
        servicesLinkText: {
          type: 'string',
          defaultValue: 'Services',
          displayName: 'Services Link Text'
        },
        contactLinkText: {
          type: 'string',
          defaultValue: 'Contact',
          displayName: 'Contact Link Text'
        },
        blogText: {
          type: 'string',
          defaultValue: 'Blog',
          displayName: 'Blog Link Text'
        },
        
        // Footer Bottom Section - All Editable
        copyrightText: {
          type: 'string',
          defaultValue: '© 2025 Chris Elliott. All rights reserved.',
          displayName: 'Copyright Text'
        },
        showPoweredBy: {
          type: 'boolean',
          defaultValue: true,
          displayName: 'Show Powered By'
        },
        poweredByText: {
          type: 'string',
          defaultValue: 'Powered by',
          displayName: 'Powered By Text'
        },
        privacyPolicyText: {
          type: 'string',
          defaultValue: 'Privacy Policy',
          displayName: 'Privacy Policy Text'
        },
        privacyPolicyUrl: {
          type: 'string',
          defaultValue: '#',
          displayName: 'Privacy Policy URL'
        },
        termsOfServiceText: {
          type: 'string',
          defaultValue: 'Terms of Service',
          displayName: 'Terms of Service Text'
        },
        termsOfServiceUrl: {
          type: 'string',
          defaultValue: '#',
          displayName: 'Terms of Service URL'
        },
        
        // Design Colors - All Customizable
        backgroundColor: {
          type: 'color',
          defaultValue: '#111827',
          displayName: 'Background Color'
        },
        textColor: {
          type: 'color',
          defaultValue: '#d1d5db',
          displayName: 'Text Color'
        },
        headingColor: {
          type: 'color',
          defaultValue: '#ffffff',
          displayName: 'Heading Color'
        },
        linkColor: {
          type: 'color',
          defaultValue: '#d1d5db',
          displayName: 'Link Color'
        },
                 linkHoverColor: {
           type: 'color',
           defaultValue: '#ef4444',
           displayName: 'Link Hover Color'
         },
        borderColor: {
          type: 'color',
          defaultValue: '#374151',
          displayName: 'Border Color'
        },
        socialIconColor: {
          type: 'color',
          defaultValue: '#9ca3af',
          displayName: 'Social Icon Color'
        },
                 socialIconHoverColor: {
           type: 'color',
           defaultValue: '#ef4444',
           displayName: 'Social Icon Hover Color'
         },
        
        // Layout & Spacing
        footerPadding: {
          type: 'string',
          defaultValue: '3rem 0 1rem 0',
          displayName: 'Footer Padding'
        },
        maxWidth: {
          type: 'string',
          defaultValue: '1200px',
          displayName: 'Container Max Width'
        },
        columnSpacing: {
          type: 'string',
          defaultValue: '2rem',
          displayName: 'Column Spacing'
        },
        
        // Style props
        className: 'string'
      },
      defaultStyles: {
        width: '100%'
      }
    });
    console.log('✅ Footer registered with full editing capabilities');
  } catch (error) {
    console.error('❌ Error registering Footer:', error);
  }

  try {
    PLASMIC.registerComponent(BookingModal, {
      name: 'BookingModal',
      props: {
        // Modal State
        isOpen: {
          type: 'boolean',
          defaultValue: false,
          displayName: 'Is Open'
        },
        
        // Content - All Editable
        modalTitle: {
          type: 'string',
          defaultValue: 'Book Your Free Consultation',
          displayName: 'Modal Title'
        },
        modalSubtitle: {
          type: 'string',
          defaultValue: 'Schedule a call with Chris to discuss your business setup requirements.',
          displayName: 'Modal Subtitle'
        },
        formTitle: {
          type: 'string',
          defaultValue: 'Tell us about your business',
          displayName: 'Form Title'
        },
        submitButtonText: {
          type: 'string',
          defaultValue: 'Schedule My Call',
          displayName: 'Submit Button Text'
        },
        closeButtonText: {
          type: 'string',
          defaultValue: 'Close',
          displayName: 'Close Button Text'
        },
        
        // Form Fields - All Editable
        nameFieldLabel: {
          type: 'string',
          defaultValue: 'Full Name',
          displayName: 'Name Field Label'
        },
        emailFieldLabel: {
          type: 'string',
          defaultValue: 'Email Address',
          displayName: 'Email Field Label'
        },
        phoneFieldLabel: {
          type: 'string',
          defaultValue: 'Phone Number',
          displayName: 'Phone Field Label'
        },
        businessFieldLabel: {
          type: 'string',
          defaultValue: 'Business Type',
          displayName: 'Business Field Label'
        },
        messageFieldLabel: {
          type: 'string',
          defaultValue: 'Tell us about your goals',
          displayName: 'Message Field Label'
        },
        
        // Colors - All Customizable
        overlayColor: {
          type: 'color',
          defaultValue: 'rgba(0, 0, 0, 0.5)',
          displayName: 'Overlay Color'
        },
        modalBackgroundColor: {
          type: 'color',
          defaultValue: '#ffffff',
          displayName: 'Modal Background'
        },
        titleColor: {
          type: 'color',
          defaultValue: '#111827',
          displayName: 'Title Color'
        },
        subtitleColor: {
          type: 'color',
          defaultValue: '#6b7280',
          displayName: 'Subtitle Color'
        },
        submitButtonBackground: {
          type: 'color',
          defaultValue: '#10b981',
          displayName: 'Submit Button Background'
        },
                 submitButtonTextColor: {
           type: 'color',
           defaultValue: '#ffffff',
           displayName: 'Submit Button Text'
         },
        
        // Event handlers
        onClose: {
          type: 'eventHandler',
          argTypes: [],
          displayName: 'On Close'
        },
        onSubmit: {
          type: 'eventHandler',
          argTypes: [],
          displayName: 'On Submit'
        }
      }
    });
    console.log('✅ BookingModal registered');
  } catch (error) {
    console.error('❌ Error registering BookingModal:', error);
  }

  try {
    PLASMIC.registerComponent(AboutModal, {
      name: 'AboutModal',
      props: {
        // Modal State
        isOpen: {
          type: 'boolean',
          defaultValue: false,
          displayName: 'Is Open'
        },
        
        // Content - All Editable
        modalTitle: {
          type: 'string',
          defaultValue: 'About Chris Elliott',
          displayName: 'Modal Title'
        },
        profileImage: {
          type: 'imageUrl',
          defaultValue: '/chriselliotphoto.png',
          displayName: 'Profile Image'
        },
        aboutText: {
          type: 'string',
          defaultValue: 'Chris Elliott is a Dubai-based business consultant specializing in international business setup and tax optimization.',
          displayName: 'About Text'
        },
        experienceYears: {
          type: 'string',
          defaultValue: '10+',
          displayName: 'Years of Experience'
        },
        clientsHelped: {
          type: 'string',
          defaultValue: '500+',
          displayName: 'Clients Helped'
        },
        businessesSetup: {
          type: 'string',
          defaultValue: '300+',
          displayName: 'Businesses Setup'
        },
        closeButtonText: {
          type: 'string',
          defaultValue: 'Close',
          displayName: 'Close Button Text'
        },
        contactButtonText: {
          type: 'string',
          defaultValue: 'Get In Touch',
          displayName: 'Contact Button Text'
        },
        
        // Colors - All Customizable
        overlayColor: {
          type: 'color',
          defaultValue: 'rgba(0, 0, 0, 0.5)',
          displayName: 'Overlay Color'
        },
        modalBackgroundColor: {
          type: 'color',
          defaultValue: '#ffffff',
          displayName: 'Modal Background'
        },
        titleColor: {
          type: 'color',
          defaultValue: '#111827',
          displayName: 'Title Color'
        },
        textColor: {
          type: 'color',
          defaultValue: '#4b5563',
          displayName: 'Text Color'
        },
        statsColor: {
          type: 'color',
          defaultValue: '#10b981',
          displayName: 'Stats Color'
        },
        contactButtonBackground: {
          type: 'color',
          defaultValue: '#10b981',
          displayName: 'Contact Button Background'
        },
                 contactButtonTextColor: {
           type: 'color',
           defaultValue: '#ffffff',
           displayName: 'Contact Button Text'
         },
        
        // Event handlers
        onClose: {
          type: 'eventHandler',
          argTypes: [],
          displayName: 'On Close'
        },
        onContact: {
          type: 'eventHandler',
          argTypes: [],
          displayName: 'On Contact'
        }
      }
    });
    console.log('✅ AboutModal registered');
  } catch (error) {
    console.error('❌ Error registering AboutModal:', error);
  }

  // Register the new ModalManager component
  try {
    PLASMIC.registerComponent(ModalManager, {
      name: 'ModalManager',
      props: {
        bookingModalTitle: {
          type: 'string',
          defaultValue: 'Book Your Consultation'
        },
        aboutModalEnabled: {
          type: 'boolean',
          defaultValue: true
        },
        bookingModalEnabled: {
          type: 'boolean',
          defaultValue: true
        },
        className: 'string'
      },
      defaultStyles: {
        width: '100%'
      }
    });
    console.log('✅ ModalManager registered');
  } catch (error) {
    console.error('❌ Error registering ModalManager:', error);
  }

  // Register the new CTAButton component
  try {
    PLASMIC.registerComponent(CTAButton, {
      name: 'CTAButton',
      props: {
        text: {
          type: 'string',
          defaultValue: 'Get Started'
        },
        action: {
          type: 'choice',
          options: ['booking', 'about', 'custom'],
          defaultValue: 'booking'
        },
        customAction: {
          type: 'string',
          defaultValue: ''
        },
        variant: {
          type: 'choice',
          options: ['primary', 'secondary', 'outline'],
          defaultValue: 'primary'
        },
        size: {
          type: 'choice',
          options: ['small', 'medium', 'large'],
          defaultValue: 'medium'
        },
        onClick: {
          type: 'eventHandler',
          argTypes: []
        },
        className: 'string'
      }
    });
    console.log('✅ CTAButton registered');
  } catch (error) {
    console.error('❌ Error registering CTAButton:', error);
  }

  console.log('Component registration complete!');
} 