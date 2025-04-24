export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
export type UserRole = 'donor' | 'admin' | 'requester';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  createdAt: Date;
}

export interface Donor extends User {
  bloodGroup: BloodGroup;
  lastDonation: Date | null;
  isAvailable: boolean;
  address: string;
  district: string;
  latitude: number | null;
  longitude: number | null;
}

export interface Admin extends User {
  organization: string;
}

export interface Requester extends User {
  hospital?: string;
  organization?: string;
  address: string;
  district: string;
}

export interface BloodRequest {
  id: string;
  patientName: string;
  bloodGroup: BloodGroup;
  units: number;
  urgency: 'normal' | 'urgent' | 'emergency';
  hospital: string;
  address: string;
  district: string;
  latitude: number | null;
  longitude: number | null;
  contactName: string;
  contactPhone: string;
  createdBy: string;
  createdAt: Date;
  status: 'open' | 'fulfilled' | 'closed';
}