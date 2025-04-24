import { Admin, BloodRequest, Donor, Requester } from '../types';
import { addDays, subDays } from 'date-fns';

export const mockDonors: Donor[] = [
  {
    id: '1',
    name: 'Aarav Sharma',
    email: 'donor@example.com', // Demo donor login
    phone: '980-1234567',
    role: 'donor',
    bloodGroup: 'A+',
    lastDonation: subDays(new Date(), 120),
    isAvailable: true,
    address: 'Samakhusi, Kathmandu',
    district: 'Kathmandu',
    latitude: 27.7217,
    longitude: 85.3280,
    createdAt: subDays(new Date(), 180)
  },
  {
    id: '2',
    name: 'Priya Thapa',
    email: 'priya@example.com',
    phone: '980-7654321',
    role: 'donor',
    bloodGroup: 'O+',
    lastDonation: subDays(new Date(), 95),
    isAvailable: true,
    address: 'Lalitpur Metropolitan City',
    district: 'Lalitpur',
    latitude: 27.6588,
    longitude: 85.3247,
    createdAt: subDays(new Date(), 160)
  },
  {
    id: '3',
    name: 'Raj Pandey',
    email: 'raj@example.com',
    phone: '980-5551234',
    role: 'donor',
    bloodGroup: 'B+',
    lastDonation: null,
    isAvailable: false,
    address: 'Bhaktapur Durbar Square Area',
    district: 'Bhaktapur',
    latitude: 27.6710,
    longitude: 85.4298,
    createdAt: subDays(new Date(), 130)
  },
  {
    id: '4',
    name: 'Anisha Gurung',
    email: 'anisha@example.com',
    phone: '980-1122334',
    role: 'donor',
    bloodGroup: 'AB+',
    lastDonation: subDays(new Date(), 200),
    isAvailable: true,
    address: 'Pokhara Lakeside',
    district: 'Kaski',
    latitude: 28.2096,
    longitude: 83.9856,
    createdAt: subDays(new Date(), 150)
  },
  {
    id: '5',
    name: 'Binod KC',
    email: 'binod@example.com',
    phone: '980-9876543',
    role: 'donor',
    bloodGroup: 'O-',
    lastDonation: subDays(new Date(), 110),
    isAvailable: true,
    address: 'Bharatpur',
    district: 'Chitwan',
    latitude: 27.6833,
    longitude: 84.4333,
    createdAt: subDays(new Date(), 100)
  }
];

export const mockAdmins: Admin[] = [
  {
    id: 'admin1',
    name: 'Dr. Suresh Bajracharya',
    email: 'admin@example.com', // Demo admin login
    phone: '980-1111111',
    role: 'admin',
    organization: 'Nepal Red Cross Society',
    createdAt: subDays(new Date(), 365)
  }
];

export const mockRequesters: Requester[] = [
  {
    id: 'req1',
    name: 'Dr. Priya Sharma',
    email: 'requester@example.com', // Demo requester login
    phone: '980-5555555',
    role: 'requester',
    hospital: 'Bir Hospital',
    address: 'Kanti Path',
    district: 'Kathmandu',
    createdAt: subDays(new Date(), 30)
  }
];

export const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] as const;

export const districts = [
  'Kathmandu', 'Lalitpur', 'Bhaktapur', 'Kaski', 'Chitwan', 'Morang', 
  'Sunsari', 'Jhapa', 'Makwanpur', 'Rupandehi', 'Kavre', 'Dhading', 
  'Nuwakot', 'Gorkha', 'Tanahu', 'Syangja', 'Palpa', 'Baglung', 'Parbat'
];

export const mockBloodRequests = [
  {
    id: 'req1',
    patientName: 'Madan Rai',
    bloodGroup: 'A+',
    units: 2,
    urgency: 'urgent',
    hospital: 'Bir Hospital',
    address: 'Kanti Path, Kathmandu',
    district: 'Kathmandu',
    latitude: 27.7049,
    longitude: 85.3154,
    contactName: 'Ramesh Rai',
    contactPhone: '980-2233445',
    createdBy: 'admin1',
    createdAt: subDays(new Date(), 2),
    status: 'open'
  },
  {
    id: 'req2',
    patientName: 'Sarita Tamang',
    bloodGroup: 'O+',
    units: 1,
    urgency: 'emergency',
    hospital: 'Patan Hospital',
    address: 'Lagankhel, Lalitpur',
    district: 'Lalitpur',
    latitude: 27.6681,
    longitude: 85.3225,
    contactName: 'Sunita Tamang',
    contactPhone: '980-5656789',
    createdBy: 'admin1',
    createdAt: subDays(new Date(), 1),
    status: 'open'
  },
  {
    id: 'req3',
    patientName: 'Rabi Magar',
    bloodGroup: 'B+',
    units: 3,
    urgency: 'normal',
    hospital: 'Nepal Medical College',
    address: 'Jorpati, Kathmandu',
    district: 'Kathmandu',
    latitude: 27.7365,
    longitude: 85.3702,
    contactName: 'Rajan Magar',
    contactPhone: '980-7878999',
    createdBy: 'admin1',
    createdAt: subDays(new Date(), 3),
    status: 'fulfilled'
  }
];