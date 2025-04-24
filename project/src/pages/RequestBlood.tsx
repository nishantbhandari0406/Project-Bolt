import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BloodGroup } from '../types';
import { Button } from '../components/ui/Button';
import { bloodGroups, districts, mockDonors } from '../lib/mock-data';
import { DonorCard } from '../components/blood/DonorCard';
import { getUserLocation } from '../lib/geolocation';

export function RequestBlood() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [nearbyDonors, setNearbyDonors] = useState<any[]>([]);
  const [showDonors, setShowDonors] = useState(false);
  
  const [formData, setFormData] = useState({
    patientName: '',
    bloodGroup: '' as BloodGroup,
    units: 1,
    urgency: 'normal' as 'normal' | 'urgent' | 'emergency',
    hospital: '',
    address: '',
    district: '',
    contactName: '',
    contactPhone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'units' ? parseInt(value) : value,
    }));
  };

  const findDonors = async () => {
    setLoading(true);
    setError('');
    try {
      // Get user's location
      const position = await getUserLocation();
      
      // Filter donors by blood group and availability
      const matchingDonors = mockDonors.filter(donor => 
        donor.bloodGroup === formData.bloodGroup && 
        donor.isAvailable
      );

      setNearbyDonors(matchingDonors);
      setShowDonors(true);
    } catch (error) {
      console.error('Error finding donors:', error);
      setError('Failed to find nearby donors. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await findDonors();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Request Blood Donation</h1>
          <p className="text-gray-600 mb-8">Fill out the form below to find matching donors near you.</p>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-1">
                    Patient Name
                  </label>
                  <input
                    id="patientName"
                    name="patientName"
                    type="text"
                    required
                    value={formData.patientName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700 mb-1">
                    Blood Group Needed
                  </label>
                  <select
                    id="bloodGroup"
                    name="bloodGroup"
                    required
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select Blood Group</option>
                    {bloodGroups.map(group => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-1">
                    Units Required
                  </label>
                  <input
                    id="units"
                    name="units"
                    type="number"
                    min="1"
                    required
                    value={formData.units}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    required
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="hospital" className="block text-sm font-medium text-gray-700 mb-1">
                    Hospital Name
                  </label>
                  <input
                    id="hospital"
                    name="hospital"
                    type="text"
                    required
                    value={formData.hospital}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                    District
                  </label>
                  <select
                    id="district"
                    name="district"
                    required
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select District</option>
                    {districts.map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Detailed Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Person Name
                  </label>
                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Phone Number
                  </label>
                  <input
                    id="contactPhone"
                    name="contactPhone"
                    type="tel"
                    required
                    value={formData.contactPhone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full"
                >
                  {loading ? 'Finding Donors...' : 'Find Nearby Donors'}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Nearby Donors Section */}
          {showDonors && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Available Donors Nearby</h2>
              
              {nearbyDonors.length === 0 ? (
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <p className="text-gray-600">No matching donors found in your area.</p>
                  <p className="text-gray-600 mt-2">
                    Your request will be sent to the blood bank administrators who will help find donors.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {nearbyDonors.map(donor => (
                    <DonorCard
                      key={donor.id}
                      donor={donor}
                      onContact={() => {}}
                      distance={5} // Mock distance for demo
                    />
                  ))}
                </div>
              )}
              
              <div className="mt-6 text-center">
                <Button
                  onClick={() => navigate('/contact')}
                  variant="outline"
                >
                  Contact Blood Bank for Assistance
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}