import { Donor } from '../types';

// Export donors to CSV file
export function exportDonorsToCSV(donors: Donor[]): void {
  // Define the CSV columns
  const columns = [
    'Name',
    'Email',
    'Phone',
    'Blood Group',
    'Address',
    'District',
    'Last Donation',
    'Available'
  ];
  
  // Map donors to CSV rows
  const rows = donors.map(donor => [
    donor.name,
    donor.email,
    donor.phone,
    donor.bloodGroup,
    donor.address,
    donor.district,
    donor.lastDonation ? new Date(donor.lastDonation).toLocaleDateString() : 'Never',
    donor.isAvailable ? 'Yes' : 'No'
  ]);
  
  // Combine header and rows
  const csvContent = [
    columns.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');
  
  // Create a Blob and download link
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `donors_${new Date().toISOString().slice(0, 10)}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}