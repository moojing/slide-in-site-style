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
    photos: ['/lovable-uploads/2b4dab6c-c3ed-49cb-b7a6-6ef56a8bfc15.png'],
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
    photos: ['/lovable-uploads/2b4dab6c-c3ed-49cb-b7a6-6ef56a8bfc15.png'],
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
    photos: ['/lovable-uploads/2b4dab6c-c3ed-49cb-b7a6-6ef56a8bfc15.png'],
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
    photos: ['/lovable-uploads/2b4dab6c-c3ed-49cb-b7a6-6ef56a8bfc15.png'],
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
    photos: ['/lovable-uploads/2b4dab6c-c3ed-49cb-b7a6-6ef56a8bfc15.png'],
    isVerified: false,
    contactInfo: {
      phone: '+66 81 567 8901',
      line: 'maya_huahin'
    }
  }
];