import { useState } from 'react';
import { Plus, FileDown, Search, Filter } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { BloodRequestCard } from '../../components/blood/BloodRequestCard';
import { mockBloodRequests, mockDonors } from '../../lib/mock-data';
import { exportDonorsToCSV } from '../../lib/export';
import { BloodRequest } from '../../types';

export function AdminDashboard() {
  const [requests, setRequests] = useState<BloodRequest[]>(mockBloodRequests);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'open' | 'fulfilled' | 'closed'>('all');
  
  // Filter requests based on search term and status
  const filteredRequests = requests.filter(request => {
    const matchesSearch = 
      request.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  const handleExportDonors = () => {
    exportDonorsToCSV(mockDonors);
  };
  
  const handleMarkAsFulfilled = (requestId: string) => {
    setRequests(prev => 
      prev.map(req => 
        req.id === requestId 
          ? { ...req, status: 'fulfilled' } 
          : req
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage blood requests and donors</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="outline" 
              onClick={handleExportDonors}
              className="flex items-center gap-1"
            >
              <FileDown className="h-4 w-4" />
              Export Donors
            </Button>
            <Button 
              onClick={() => window.location.href = '/admin/new-request'}
              className="flex items-center gap-1"
            >
              <Plus className="h-4 w-4" />
              New Request
            </Button>
          </div>
        </div>
        
        {/* Filters and Search */}
        <div className="bg-white p-4 mb-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by patient, hospital, or blood group..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="md:w-48">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                >
                  <option value="all">All Status</option>
                  <option value="open">Open</option>
                  <option value="fulfilled">Fulfilled</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blood Requests */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Blood Requests</h2>
          
          {filteredRequests.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <p className="text-gray-600">No blood requests found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRequests.map(request => (
                <BloodRequestCard
                  key={request.id}
                  request={request}
                  onContact={() => window.location.href = `/admin/request/${request.id}`}
                  onFulfill={() => handleMarkAsFulfilled(request.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}