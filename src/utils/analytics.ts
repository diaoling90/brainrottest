// Google Analytics 4 events - Optimized for SSR
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID!, {
      page_location: url,
    });
  }
};

// Track custom events
export const event = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Brainrot Test specific events
export const trackQuizEvent = {
  start: () => event('quiz_start', 'engagement'),
  complete: (resultType: string) => event('quiz_complete', 'engagement', resultType),
  share: (platform: string, resultType: string) => 
    event('result_share', 'social', `${platform}_${resultType}`),
  download: (resultType: string) => event('result_download', 'engagement', resultType),
  retake: () => event('quiz_retake', 'engagement'),
};