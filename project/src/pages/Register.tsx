import { Droplet } from 'lucide-react';
import { RegisterForm } from '../components/auth/RegisterForm';

export function Register() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Droplet className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Register as a Donor</h2>
              <p className="text-gray-600 mt-1">
                Join our community of blood donors across Nepal
              </p>
            </div>
            
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}