import { Droplet } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplet className="h-6 w-6 text-red-500" />
              <span className="font-bold text-lg">
                <span className="text-red-500">Blood</span>Link Nepal
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting blood donors with those in need across Nepal. 
              Our mission is to make blood donation accessible and efficient.
            </p>
            <p className="text-gray-400">
              © 2025 BloodLink Nepal. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="/register" className="text-gray-400 hover:text-white transition">Register as Donor</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Kathmandu, Nepal</p>
              <p className="mb-2">Email: contact@bloodlink.np</p>
              <p>Phone: +977 980-1234567</p>
            </address>
            
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Emergency Hotlines</h4>
              <p className="text-gray-400">Kathmandu: +977 980-9876543</p>
              <p className="text-gray-400">Pokhara: +977 980-8765432</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}