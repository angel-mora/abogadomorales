/**
 * Analytics Configuration
 * 
 * To enable analytics tracking, add your IDs below and uncomment the tracking code.
 * 
 * Google Analytics 4 (GA4):
 * - Get your Measurement ID from: https://analytics.google.com
 * - Replace GA4_MEASUREMENT_ID below with your actual ID (format: G-XXXXXXXXXX)
 * 
 * Meta Pixel (Facebook):
 * - Get your Pixel ID from: https://business.facebook.com/events_manager
 * - Replace META_PIXEL_ID below with your actual ID
 */

// Configuration
const GA4_MEASUREMENT_ID = '[TU_ID_AQUI]'; // Replace with your GA4 ID
const META_PIXEL_ID = '[TU_ID_AQUI]'; // Replace with your Meta Pixel ID

/**
 * Track WhatsApp button clicks
 */
export const trackWhatsAppClick = () => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: 'WhatsApp Contact Button'
    });
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Contact', {
      method: 'WhatsApp'
    });
  }

  console.log('Analytics: WhatsApp click tracked');
};

/**
 * Track language changes
 */
export const trackLanguageChange = (newLanguage: string) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'language_change', {
      event_category: 'engagement',
      event_label: newLanguage
    });
  }

  console.log('Analytics: Language change tracked -', newLanguage);
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (depth: number) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'scroll', {
      event_category: 'engagement',
      event_label: `${depth}%`,
      value: depth
    });
  }

  console.log('Analytics: Scroll depth tracked -', depth + '%');
};

/**
 * Installation Instructions:
 * 
 * 1. Add Google Analytics 4 script to your index.html:
 * 
 * <script async src="https://www.googletagmanager.com/gtag/js?id=GA4_MEASUREMENT_ID"></script>
 * <script>
 *   window.dataLayer = window.dataLayer || [];
 *   function gtag(){dataLayer.push(arguments);}
 *   gtag('js', new Date());
 *   gtag('config', 'GA4_MEASUREMENT_ID');
 * </script>
 * 
 * 2. Add Meta Pixel script to your index.html:
 * 
 * <script>
 *   !function(f,b,e,v,n,t,s)
 *   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
 *   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
 *   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
 *   n.queue=[];t=b.createElement(e);t.async=!0;
 *   t.src=v;s=b.getElementsByTagName(e)[0];
 *   s.parentNode.insertBefore(t,s)}(window, document,'script',
 *   'https://connect.facebook.net/en_US/fbevents.js');
 *   fbq('init', 'META_PIXEL_ID');
 *   fbq('track', 'PageView');
 * </script>
 */
