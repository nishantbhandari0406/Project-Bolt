import { format } from 'date-fns';
import { AlertCircle, Calendar, MapPin, Phone, User } from 'lucide-react';
import { BloodRequest } from '../../types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';

interface BloodRequestCardProps {
  request: BloodRequest;
  onContact?: () => void;
  onFulfill?: () => void;
}

export function BloodRequestCard({ request, onContact, onFulfill }: BloodRequestCardProps) {
  const urgencyColors = {
    normal: 'bg-blue-100 text-blue-800',
    urgent: 'bg-orange-100 text-orange-800',
    emergency: 'bg-red-100 text-red-800'
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="relative pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              {request.patientName}
              <span className={`text-xs px-2 py-0.5 rounded-full ${urgencyColors[request.urgency]}`}>
                {request.urgency.charAt(0).toUpperCase() + request.urgency.slice(1)}
              </span>
            </CardTitle>
            <div className="flex items-center text-gray-500 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{request.hospital}, {request.district}</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-xl text-red-600">{request.bloodGroup}</span>
            <span className="text-sm text-gray-500">{request.units} unit(s)</span>
          </div>
        </div>
        
        {request.status !== 'open' && (
          <div className="absolute top-0 right-0 bg-gray-800 text-white px-3 py-1 text-xs rounded-bl-lg">
            {request.status === 'fulfilled' ? 'Fulfilled' : 'Closed'}
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-gray-700">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">
              Requested on {format(new Date(request.createdAt), 'MMM dd, yyyy')}
            </span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <User className="h-4 w-4 mr-2" />
            <span className="text-sm">Contact: {request.contactName}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm">{request.contactPhone}</span>
          </div>
          
          {request.urgency === 'emergency' && (
            <div className="flex items-center text-red-600 bg-red-50 p-2 rounded">
              <AlertCircle className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Emergency! Immediate donation required.</span>
            </div>
          )}
        </div>
      </CardContent>
      
      {request.status === 'open' && (onContact || onFulfill) && (
        <CardFooter className="border-t pt-4 flex justify-between">
          {onContact && (
            <Button variant="outline" onClick={onContact}>
              Contact Details
            </Button>
          )}
          {onFulfill && (
            <Button onClick={onFulfill}>
              Mark as Fulfilled
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}