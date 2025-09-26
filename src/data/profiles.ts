export interface Profile {
  id: string;
  name: string;
  age: number;
  city: string;
  region: string;
  gender: 'Female' | 'Male';
  agency: string;
  height: string;
  bodyType: string;
  measurements?: string;
  languages: string[];
  likes: string[];
  photos: string[];
  isVerified: boolean;
  contactInfo: {
    phone?: string;
    email?: string;
    line?: string;
  };
}

// Default regions used on first load. Can be overridden via localStorage.
export const REGIONS = [
  'Bangkok',
  'Chiang Mai',
  'Phuket',
  'Pattaya',
  'Hua Hin',
  'Koh Samui',
  'Krabi',
  'Rayong'
];

export const REGIONS_STORAGE_KEY = 'app.regions';
export const SELECTED_REGION_KEY = 'app.selectedRegion';

export function getRegions(): string[] {
  try {
    if (typeof window === 'undefined') return REGIONS;
    const raw = window.localStorage.getItem(REGIONS_STORAGE_KEY);
    if (!raw) return REGIONS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.every((r) => typeof r === 'string') && parsed.length > 0) {
      return parsed as string[];
    }
    return REGIONS;
  } catch {
    return REGIONS;
  }
}

export function setRegions(regions: string[]): void {
  try {
    if (typeof window === 'undefined') return;
    const cleaned = Array.from(new Set(regions.map((r) => r.trim()).filter(Boolean)));
    window.localStorage.setItem(REGIONS_STORAGE_KEY, JSON.stringify(cleaned));
  } catch {
    // no-op
  }
}

export function getSelectedRegion(): string | null {
  try {
    if (typeof window === 'undefined') return null;
    const v = window.localStorage.getItem(SELECTED_REGION_KEY);
    return v || null;
  } catch {
    return null;
  }
}

export function setSelectedRegion(region: string): void {
  try {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(SELECTED_REGION_KEY, region);
  } catch {
    // no-op
  }
}

export const PROFILES: Profile[] = [
  {
    id: '1',
    name: 'Ririka',
    age: 21,
    city: 'Bangkok',
    region: 'Bangkok',
    gender: 'Female',
    agency: 'Bangkok Elite Escort',
    height: '164 cm',
    bodyType: 'Slim',
    measurements: '84 C-57-85',
    languages: ['English (Basic)', 'Thai (Fluent)'],
    likes: ['BBBJ', 'CIM', 'COB', 'DATY', 'DFK', 'DT'],
    photos: ['/lovable-uploads/profile-01.jpg'],
    isVerified: true,
    contactInfo: {
      phone: '+66 89 123 4567',
      line: 'ririka_bkk'
    }
  },
  {
    id: '2',
    name: 'Suki',
    age: 23,
    city: 'Phuket',
    region: 'Phuket',
    gender: 'Female',
    agency: 'Phuket Paradise',
    height: '158 cm',
    bodyType: 'Petite',
    measurements: '82 B-56-84',
    languages: ['English (Fluent)', 'Thai (Fluent)', 'Japanese (Basic)'],
    likes: ['GFE', 'BBBJ', 'CIM', 'DATY', 'DFK'],
    photos: ['/lovable-uploads/profile-02.jpg'],
    isVerified: true,
    contactInfo: {
      phone: '+66 87 234 5678',
      line: 'suki_phuket'
    }
  },
  {
    id: '3',
    name: 'Nana',
    age: 25,
    city: 'Chiang Mai',
    region: 'Chiang Mai',
    gender: 'Female',
    agency: 'Northern Beauty',
    height: '162 cm',
    bodyType: 'Curvy',
    measurements: '88 D-58-87',
    languages: ['English (Fluent)', 'Thai (Fluent)'],
    likes: ['GFE', 'PSE', 'BBBJ', 'CIM', 'COB', 'DATY', 'DFK'],
    photos: ['/lovable-uploads/profile-03.jpg'],
    isVerified: true,
    contactInfo: {
      phone: '+66 85 345 6789',
      line: 'nana_cm'
    }
  },
  {
    id: '4',
    name: 'Lisa',
    age: 22,
    city: 'Pattaya',
    region: 'Pattaya',
    gender: 'Female',
    agency: 'Pattaya Nights',
    height: '160 cm',
    bodyType: 'Athletic',
    measurements: '86 C-57-86',
    languages: ['English (Fluent)', 'Thai (Fluent)', 'German (Basic)'],
    likes: ['GFE', 'BBBJ', 'CIM', 'DATY', 'DFK', 'COB'],
    photos: ['/lovable-uploads/profile-04.jpg'],
    isVerified: true,
    contactInfo: {
      phone: '+66 83 456 7890',
      line: 'lisa_pattaya'
    }
  },
  {
    id: '5',
    name: 'Maya',
    age: 24,
    city: 'Hua Hin',
    region: 'Hua Hin',
    gender: 'Female',
    agency: 'Royal Companion',
    height: '165 cm',
    bodyType: 'Slim',
    measurements: '85 C-58-85',
    languages: ['English (Fluent)', 'Thai (Fluent)'],
    likes: ['GFE', 'BBBJ', 'DATY', 'DFK'],
    photos: ['/lovable-uploads/profile-05.jpg'],
    isVerified: false,
    contactInfo: {
      phone: '+66 81 567 8901',
      line: 'maya_huahin'
    }
  },
  {
    id: '6',
    name: 'Kiki',
    age: 20,
    city: 'Bangkok',
    region: 'Bangkok',
    gender: 'Female',
    agency: 'Bangkok Luxury',
    height: '168 cm',
    bodyType: 'Tall',
    measurements: '87 D-59-88',
    languages: ['English (Fluent)', 'Thai (Fluent)', 'Chinese (Basic)'],
    likes: ['PSE', 'BBBJ', 'CIM', 'COB', 'DATY', 'DFK', 'DT'],
    photos: ['/lovable-uploads/profile-06.jpg'],
    isVerified: true,
    contactInfo: {
      phone: '+66 89 678 9012',
      line: 'kiki_bkk'
    }
  },
  {
    id: '7',
    name: 'Mimi',
    age: 26,
    city: 'Phuket',
    region: 'Phuket',
    gender: 'Female',
    agency: 'Island Dreams',
    height: '161 cm',
    bodyType: 'Curvy',
    measurements: '90 DD-60-89',
    languages: ['English (Fluent)', 'Thai (Fluent)', 'Russian (Basic)'],
    likes: ['GFE', 'PSE', 'BBBJ', 'CIM', 'DATY', 'DFK'],
    photos: ['/lovable-uploads/profile-07.jpg'],
    isVerified: true,
    contactInfo: {
      phone: '+66 87 789 0123',
      line: 'mimi_phuket'
    }
  },
  {
    id: '8',
    name: 'Amy',
    age: 23,
    city: 'Pattaya',
    region: 'Pattaya',
    gender: 'Female',
    agency: 'Sunset Escorts',
    height: '157 cm',
    bodyType: 'Petite',
    measurements: '83 B-55-83',
    languages: ['English (Basic)', 'Thai (Fluent)', 'Korean (Basic)'],
    likes: ['GFE', 'BBBJ', 'DATY', 'DFK'],
    photos: ['/lovable-uploads/profile-08.jpg'],
    isVerified: false,
    contactInfo: {
      phone: '+66 83 890 1234',
      line: 'amy_pattaya'
    }
  },
  {
    id: '9',
    name: 'Ploy',
    age: 22,
    city: 'Koh Samui',
    region: 'Koh Samui',
    gender: 'Female',
    agency: 'Samui Angels',
    height: '163 cm',
    bodyType: 'Athletic',
    measurements: '85 C-57-85',
    languages: ['English (Fluent)', 'Thai (Fluent)', 'French (Basic)'],
    likes: ['GFE', 'BBBJ', 'CIM', 'DATY', 'DFK', 'COB'],
    photos: ['/lovable-uploads/profile-09.jpg'],
    isVerified: true,
    contactInfo: {
      phone: '+66 81 901 2345',
      line: 'ploy_samui'
    }
  },
  {
    id: '10',
    name: 'Tina',
    age: 27,
    city: 'Chiang Mai',
    region: 'Chiang Mai',
    gender: 'Female',
    agency: 'Mountain Rose',
    height: '159 cm',
    bodyType: 'Slim',
    measurements: '84 C-56-84',
    languages: ['English (Fluent)', 'Thai (Fluent)', 'Japanese (Fluent)'],
    likes: ['GFE', 'PSE', 'BBBJ', 'CIM', 'DATY', 'DFK'],
    photos: ['/lovable-uploads/profile-10.jpg'],
    isVerified: true,
    contactInfo: {
      phone: '+66 85 012 3456',
      line: 'tina_cm'
    }
  },
  {
    id: '11',
    name: 'Fern',
    age: 21,
    city: 'Krabi',
    region: 'Krabi',
    gender: 'Female',
    agency: 'Emerald Coast',
    height: '162 cm',
    bodyType: 'Curvy',
    measurements: '88 D-58-87',
    languages: ['English (Basic)', 'Thai (Fluent)'],
    likes: ['GFE', 'BBBJ', 'DATY', 'DFK'],
    photos: ['/lovable-uploads/profile-11.jpg'],
    isVerified: false,
    contactInfo: {
      phone: '+66 87 123 4567',
      line: 'fern_krabi'
    }
  },
  {
    id: '12',
    name: 'Nina',
    age: 25,
    city: 'Rayong',
    region: 'Rayong',
    gender: 'Female',
    agency: 'Coastal Beauty',
    height: '166 cm',
    bodyType: 'Tall',
    measurements: '86 C-58-86',
    languages: ['English (Fluent)', 'Thai (Fluent)', 'Swedish (Basic)'],
    likes: ['GFE', 'PSE', 'BBBJ', 'CIM', 'COB', 'DATY', 'DFK'],
    photos: ['/lovable-uploads/profile-12.jpg'],
    isVerified: true,
    contactInfo: {
      phone: '+66 81 234 5678',
      line: 'nina_rayong'
    }
  },
  {
    id: '13',
    name: 'Joy',
    age: 24,
    city: 'Bangkok',
    region: 'Bangkok',
    gender: 'Female',
    agency: 'Elite Bangkok',
    height: '160 cm',
    bodyType: 'Petite',
    measurements: '82 B-55-82',
    languages: ['English (Fluent)', 'Thai (Fluent)', 'German (Fluent)'],
    likes: ['GFE', 'BBBJ', 'CIM', 'DATY', 'DFK'],
    photos: ['/lovable-uploads/profile-13.jpg'],
    isVerified: true,
    contactInfo: {
      phone: '+66 89 345 6789',
      line: 'joy_bangkok'
    }
  },
  {
    id: '14',
    name: 'Bee',
    age: 23,
    city: 'Hua Hin',
    region: 'Hua Hin',
    gender: 'Female',
    agency: 'Seaside Companions',
    height: '164 cm',
    bodyType: 'Athletic',
    measurements: '85 C-57-85',
    languages: ['English (Basic)', 'Thai (Fluent)', 'Danish (Basic)'],
    likes: ['GFE', 'BBBJ', 'DATY', 'DFK', 'COB'],
    photos: ['/lovable-uploads/profile-14.jpg'],
    isVerified: true,
    contactInfo: {
      phone: '+66 81 456 7890',
      line: 'bee_huahin'
    }
  },
  {
    id: '15',
    name: 'Lily',
    age: 26,
    city: 'Phuket',
    region: 'Phuket',
    gender: 'Female',
    agency: 'Tropical Paradise',
    height: '167 cm',
    bodyType: 'Tall',
    measurements: '89 D-59-88',
    languages: ['English (Fluent)', 'Thai (Fluent)', 'Italian (Basic)'],
    likes: ['PSE', 'GFE', 'BBBJ', 'CIM', 'COB', 'DATY', 'DFK', 'DT'],
    photos: ['/lovable-uploads/profile-15.jpg'],
    isVerified: true,
    contactInfo: {
      phone: '+66 87 567 8901',
      line: 'lily_phuket'
    }
  },
  {
    id: '16',
    name: 'Rose',
    age: 22,
    city: 'Pattaya',
    region: 'Pattaya',
    gender: 'Female',
    agency: 'Night Flowers',
    height: '158 cm',
    bodyType: 'Curvy',
    measurements: '87 D-57-86',
    languages: ['English (Fluent)', 'Thai (Fluent)', 'Dutch (Basic)'],
    likes: ['GFE', 'PSE', 'BBBJ', 'CIM', 'DATY', 'DFK'],
    photos: ['/lovable-uploads/profile-16.jpg'],
    isVerified: false,
    contactInfo: {
      phone: '+66 83 678 9012',
      line: 'rose_pattaya'
    }
  },
  {
    id: '17',
    name: 'Candy',
    age: 21,
    city: 'Koh Samui',
    region: 'Koh Samui',
    gender: 'Female',
    agency: 'Island Beauties',
    height: '161 cm',
    bodyType: 'Slim',
    measurements: '84 C-56-84',
    languages: ['English (Basic)', 'Thai (Fluent)', 'Norwegian (Basic)'],
    likes: ['GFE', 'BBBJ', 'DATY', 'DFK'],
    photos: ['/lovable-uploads/profile-17.jpg'],
    isVerified: true,
    contactInfo: {
      phone: '+66 81 789 0123',
      line: 'candy_samui'
    }
  },
  {
    id: '18',
    name: 'Ice',
    age: 25,
    city: 'Bangkok',
    region: 'Bangkok',
    gender: 'Female',
    agency: 'Premium Bangkok',
    height: '165 cm',
    bodyType: 'Athletic',
    measurements: '86 C-58-86',
    languages: ['English (Fluent)', 'Thai (Fluent)', 'Mandarin (Fluent)'],
    likes: ['GFE', 'PSE', 'BBBJ', 'CIM', 'COB', 'DATY', 'DFK'],
    photos: ['/lovable-uploads/profile-18.jpg'],
    isVerified: true,
    contactInfo: {
      phone: '+66 89 890 1234',
      line: 'ice_bangkok'
    }
  }
];
// Ensure at least some male profiles for filtering
export const MALE_PROFILES: Profile[] = [
  {
    id: 'm1',
    name: 'Ken',
    age: 28,
    city: 'Bangkok',
    region: 'Bangkok',
    gender: 'Male',
    agency: 'Bangkok Elite Escort',
    height: '178 cm',
    bodyType: 'Athletic',
    languages: ['English (Fluent)', 'Thai (Fluent)'],
    likes: ['GFE'],
    photos: ['/lovable-uploads/profile-17.jpg'],
    isVerified: true,
    contactInfo: { phone: '+66 80 000 0001', line: 'ken_bkk' }
  },
  {
    id: 'm2',
    name: 'Jay',
    age: 30,
    city: 'Phuket',
    region: 'Phuket',
    gender: 'Male',
    agency: 'Phuket Paradise',
    height: '182 cm',
    bodyType: 'Slim',
    languages: ['English (Fluent)', 'Thai (Fluent)'],
    likes: ['GFE'],
    photos: ['/lovable-uploads/profile-18.jpg'],
    isVerified: false,
    contactInfo: { phone: '+66 80 000 0002', line: 'jay_phuket' }
  }
];
export const ALL_PROFILES: Profile[] = [...PROFILES, ...MALE_PROFILES];