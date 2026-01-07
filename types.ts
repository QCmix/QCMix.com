
import { Timestamp } from 'firebase/firestore';

export type UserRole = 'bartender' | 'venue' | 'musician';

export interface UserProfile {
  uid: string;
  email: string;
  name: string;
  role: UserRole;
  pro: boolean;
  createdAt: Timestamp;
  // Specific fields
  experience?: string;
  availability?: string;
  location?: string;
  description?: string;
  genre?: string;
  links?: string[];
}

export interface EarlyAccessSubmission {
  email: string;
  role: string;
  createdAt: Timestamp;
  interestInPro?: boolean;
}

export interface VenueData {
  name: string;
  location: string;
  description: string;
  ownerUid: string;
}

export interface MusicianData {
  name: string;
  genre: string;
  links: string[];
  ownerUid: string;
}
