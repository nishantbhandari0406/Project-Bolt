import { Donor, BloodRequest } from '../types';

// Calculate distance between two coordinates using Haversine formula
export function calculateDistance(
  lat1: number, 
  lon1: number, 
  lat2: number, 
  lon2: number
): number {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

// Find donors within a certain radius of a blood request
export function findNearbyDonors(
  request: BloodRequest, 
  donors: Donor[], 
  radius: number = 10 // default radius 10km
): Donor[] {
  if (!request.latitude || !request.longitude) {
    return [];
  }
  
  return donors.filter(donor => {
    // Check if donor has location data
    if (!donor.latitude || !donor.longitude) {
      return false;
    }
    
    // Check if blood group matches
    if (donor.bloodGroup !== request.bloodGroup) {
      return false;
    }
    
    // Check if donor is available
    if (!donor.isAvailable) {
      return false;
    }
    
    // Calculate distance
    const distance = calculateDistance(
      request.latitude,
      request.longitude,
      donor.latitude,
      donor.longitude
    );
    
    // Return donors within radius
    return distance <= radius;
  });
}

// Get user's current location
export function getUserLocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
      return;
    }
    
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}