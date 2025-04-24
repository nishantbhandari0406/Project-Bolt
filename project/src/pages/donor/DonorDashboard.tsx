import { useState } from 'react';
import { AlertCircle, Bell, Check, Droplet, User } from 'lucide-react';
import { useAuthContext } from '../../context/AuthContext';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { mockBloodRequests } from '../../lib/mock-data';
import { BloodRequestCard } from '../../components/blood/BloodRequestCard';

export function DonorDashboard() {
  const { user } = useAuthContext();
  const [isAvailable, setIsAvailable] = useState((user as any)?.isAvailable || true);
  
  // Filter blood requests that match the donor's blood group
  const matchingRequests = mockBloodRequests
    .filter(req => req.status === 'open' && req.bloodGroup === (user as any)?.bloodGroup)
    .slice(0, 3); // Show only top 3 matching requests
  
  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
    // In a real app, this would update the database
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Donor Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user?.name}</p>
          </div>
          
          <div>
            <Button
              variant={isAvailable ? 'default' : 'outline'}
              onClick={toggleAvailability}
              className={`flex items-center gap-2 ${isAvailable ? 'bg-green-600 hover:bg-green-700' : 'text-gray-600'}`}
            >
              {isAvailable ? (
                <>
                  <Check className="h-4 w-4" />
                  Available to Donate
                </>
              ) : (
                <>
                  <AlertCircle className="h-4 w-4" />
                  Mark as Available
                </>
              )}
            </Button>
          </div>
        </div>
        
        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="h-5 w-5 text-blue-500" />
                Donor Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Blood Type:</span>
                  <span className="font-semibold text-red-600">{(user as any)?.bloodGroup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Donation:</span>
                  <span className="font-medium">
                    {(user as any)?.lastDonation 
                      ? new Date((user as any).lastDonation).toLocaleDateString() 
                      : 'Never donated'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-medium ${isAvailable ? 'text-green-600' : 'text-gray-600'}`}>
                    {isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </div>
                <div className="pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.location.href = '/donor/profile'}
                  >
                    Edit Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Droplet className="h-5 w-5 text-red-500" />
                Donation Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Donations:</span>
                  <span className="font-semibold">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Donation Date:</span>
                  <span className="font-medium">March 15, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Next Eligible Date:</span>
                  <span className="font-medium text-green-600">June 15, 2025</span>
                </div>
                <div className="pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.location.href = '/donor/history'}
                  >
                    Donation History
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="h-5 w-5 text-orange-500" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-2 bg-red-50 rounded-md border border-red-100 text-red-600 text-sm">
                  Emergency request for {(user as any)?.bloodGroup} blood at Bir Hospital.
                </div>
                <div className="p-2 bg-blue-50 rounded-md border border-blue-100 text-blue-600 text-sm">
                  Thank you for updating your profile!
                </div>
                <div className="pt-1">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.location.href = '/donor/notifications'}
                  >
                    View All
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Matching Requests */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Matching Blood Requests</h2>
          
          {matchingRequests.length === 0 ? (
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-gray-600">No matching blood requests at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {matchingRequests.map(request => (
                <BloodRequestCard
                  key={request.id}
                  request={request}
                  onContact={() => window.location.href = `/donor/request/${request.id}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}