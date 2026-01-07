
import { ServiceItem, WhyUsItem } from './types';

export const COLORS = {
  gold: '#d4af37',
  dark: '#333333',
  lightGray: '#f8f8f8',
  white: '#ffffff',
};

export interface PackageDetail {
  id: string;
  name: string;
  subtitle: string;
  description: string[];
  features: {
    entrance: string;
    selfiePoint: string;
    stage: string;
  };
  images: {
    hero: string;
    entrance: string;
    selfiePoint: string;
    stage: string;
  };
}

export const WEDDING_PACKAGES: PackageDetail[] = [
  {
    id: 'first-package',
    name: 'First Package',
    subtitle: 'Complete Package for Your Dream Event',
    description: [
      'White theme stage with iron frame and floral accents',
      'Gallery with fiber-based props for photos and selfies',
      'Minor customization available according to taste or budget'
    ],
    features: { entrance: 'Classic Floral Entrance', selfiePoint: 'Nature-Inspired Selfie Point', stage: 'White Iron Frame Stage' },
    images: {
      hero: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200',
      entrance: 'https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800',
      selfiePoint: 'https://images.unsplash.com/photo-1517722014278-c256a911678b?auto=format&fit=crop&q=80&w=800',
      stage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
    }
  },
  {
    id: 'second-package',
    name: 'Second Package',
    subtitle: 'Lotus Theme & Ambient Glow',
    description: [
      'Lotus frame based stage with elegant structural detailing',
      'Ceiling-hung props with ambient decorative lighting in the gallery area',
      'Floral sheet accents on both sides of the stage for a soft, premium look'
    ],
    features: { entrance: 'Ambient Decorative Lighting', selfiePoint: 'Themed Selfie Corner', stage: 'Lotus Frame Stage' },
    images: {
      hero: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
      entrance: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800',
      selfiePoint: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=800',
      stage: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800'
    }
  },
  {
    id: 'third-package',
    name: 'Third Package',
    subtitle: 'Modern Trending Mirror Setup',
    description: [
      'Black drape gallery with mirror table props',
      'Modern trending frame based stage setup',
      'Center flower sheet detailing for a clean, elegant look'
    ],
    features: { entrance: 'Geometric Light Entrance', selfiePoint: 'Mirror Table Props', stage: 'Center Flower Sheet Stage' },
    images: {
      hero: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200',
      entrance: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800',
      selfiePoint: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
      stage: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800'
    }
  },
  {
    id: 'fourth-package',
    name: 'Fourth Package',
    subtitle: 'Elite Marble & Floral Fusion',
    description: [
      'White theme stage with iron frame and floral accents',
      'Gallery with fiber-based props for photos and selfies',
      'Minor customization available according to taste or budget'
    ],
    features: { entrance: 'Grand Red Floral Entrance', selfiePoint: 'Gold Draped Backdrop', stage: 'Marble Finish Stage Setup' },
    images: {
      hero: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',
      entrance: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800',
      selfiePoint: 'https://images.unsplash.com/photo-1505232458567-cc4e0136612e?auto=format&fit=crop&q=80&w=800',
      stage: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?auto=format&fit=crop&q=80&w=800'
    }
  }
];

export const WHY_US: WhyUsItem[] = [
  { icon: 'fa-regular fa-clipboard', title: 'Bespoke Planning', description: 'Har even unique detail hai, aur hamari planning best.' },
  { icon: 'fa-solid fa-handshake-simple', title: 'Elite Network', description: 'Best decorators, coordinators, caterers, aur photographers.' },
  { icon: 'fa-solid fa-user-shield', title: 'Stress-Free', description: 'Aap sirf enjoy karo baaki tension hamari.' },
  { icon: 'fa-solid fa-piggy-bank', title: 'Budget Luxury', description: 'Luxury feel, Low cost, bina pocket phode!' }
];
