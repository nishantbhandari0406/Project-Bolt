import { format } from 'date-fns';
import { MapPin, Calendar, Phone, Mail, Check, X } from 'lucide-react';
import { Donor } from '../../types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';

interface DonorCardProps {
  donor: Donor;
  onContact?: () => void;
  onViewProfile?: () => void;
  distance?: number;
}

export function DonorCard({ donor, onContact, onViewProfile, distance }: DonorCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{donor.name}</CardTitle>
            <div className="flex items-center text-gray-500 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{donor.address}, {donor.district}</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-xl text-red-600">{donor.bloodGroup}</span>
            <span className="text-sm text-gray-500">
              {distance ? `${distance.toFixed(1)} km away` : 'Distance unknown'}
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-gray-700">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">
              Last donation: {donor.lastDonation 
                ? format(new Date(donor.lastDonation), 'MMM dd, yyyy') 
                : 'Never donated'}
            </span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm">{donor.phone}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <Mail className="h-4 w-4 mr-2" />
            <span className="text-sm">{donor.email}</span>
          </div>
          
          <div className="flex items-center">
            {donor.isAvailable ? (
              <div className="flex items-center text-green-600 bg-green-50 p-2 rounded">
                <Check className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Available to donate</span>
              </div>
            ) : (
              <div className="flex items-center text-red-600 bg-red-50 p-2 rounded">
                <X className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Currently unavailable</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      
      {(onContact || onViewProfile) && (
        <CardFooter className="border-t pt-4 flex justify-between">
          {onViewProfile && (
            <Button variant="outline" onClick={onViewProfile}>
              View Profile
            </Button>
          )}
          {onContact && (
            <Button onClick={onContact}>
              Contact
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}