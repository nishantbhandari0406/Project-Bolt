import { ArrowRight, Droplet, Heart, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-600 text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/6551155/pexels-photo-6551155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Donate Blood, Save Lives Across Nepal
            </h1>
            <p className="text-xl mb-8">
              Join our network of blood donors to help those in need. Your donation can save up to three lives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold"
                onClick={() => window.location.href = '/register'}
              >
                Register as Donor
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = '/about'}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-gray-600">Active Donors</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full mb-4">
                <Droplet className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-2">1,200+</h3>
              <p className="text-gray-600">Lives Saved</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-2">20+</h3>
              <p className="text-gray-600">Districts Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform connects blood donors with those in need through a simple and efficient process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3">Register</h3>
              <p className="text-gray-600">
                Sign up as a blood donor with your details and blood type.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3">Get Notified</h3>
              <p className="text-gray-600">
                Receive notifications when your blood type is needed nearby.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3">Donate</h3>
              <p className="text-gray-600">
                Respond to requests and help save lives in your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blood Groups Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Blood Groups</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding blood type compatibility is essential for effective donations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((group) => (
              <div key={group} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                <div className="text-2xl font-bold text-red-600 mb-2">{group}</div>
                <p className="text-sm text-gray-600">
                  {group === 'O-' ? 'Universal donor' : 
                   group === 'AB+' ? 'Universal recipient' : 
                   'Compatible with specific types'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of donors today and help save lives across Nepal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="font-semibold"
              onClick={() => window.location.href = '/register'}
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '/login'}
            >
              Login
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from those who have been impacted by blood donations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Asha Tamang</h4>
                  <p className="text-sm text-gray-600">Kathmandu</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The blood donation I received during my emergency surgery saved my life. I'm forever grateful to the donors."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Rajesh Gurung</h4>
                  <p className="text-sm text-gray-600">Pokhara</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I donate blood regularly through this platform. It's an easy way to help others and potentially save lives."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Dr. Sunita Pradhan</h4>
                  <p className="text-sm text-gray-600">Bir Hospital</p>
                </div>
              </div>
              <p className="text-gray-700">
                "This platform has revolutionized how we find blood donors in emergencies. Response times have improved significantly."
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/about" 
              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
            >
              Read more stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}