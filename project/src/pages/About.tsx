import { Award, Clock, Heart, Map, Shield, Users } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About BloodLink Nepal</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to make blood donation more accessible and efficient 
            across Nepal, connecting donors with those in need.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              BloodLink Nepal aims to create a responsive and efficient blood donation 
              ecosystem that connects donors with recipients in real-time, ensuring that 
              no one in Nepal goes without blood when they need it most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Save Lives</h3>
              <p className="text-gray-600">
                Connect blood donors with patients in critical need to save lives across Nepal.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
              <p className="text-gray-600">
                Reduce response time in emergencies through location-based donor matching.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full mb-4">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nationwide Reach</h3>
              <p className="text-gray-600">
                Expand blood donation services to remote and underserved areas across Nepal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-700 text-lg">
              The principles that guide our work and commitment to the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Community First</h3>
              </div>
              <p className="text-gray-600">
                We believe in the power of community to address healthcare challenges collectively.
                Our platform is built to foster connections between donors and recipients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Trust & Safety</h3>
              </div>
              <p className="text-gray-600">
                We prioritize the safety of both donors and recipients, ensuring all processes
                follow medical guidelines and protect user privacy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Excellence</h3>
              </div>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from technical
                reliability to customer support and community engagement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                  <Map className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Accessibility</h3>
              </div>
              <p className="text-gray-600">
                We believe blood donation services should be accessible to everyone,
                regardless of location or socioeconomic status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-gray-700 text-lg">
              Since our launch, we've made significant progress in connecting donors with those in need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-red-50 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-red-600 mb-2">500+</h3>
              <p className="text-gray-700">Registered Donors</p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-red-600 mb-2">1,200+</h3>
              <p className="text-gray-700">Lives Saved</p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-red-600 mb-2">20+</h3>
              <p className="text-gray-700">Districts Covered</p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-red-600 mb-2">95%</h3>
              <p className="text-gray-700">Request Fulfillment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-700 text-lg">
              The dedicated individuals working to make blood donation more accessible across Nepal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center text-gray-400">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold">Dr. Rajesh Sharma</h3>
              <p className="text-gray-500 mb-3">Founder & Medical Director</p>
              <p className="text-gray-600 text-sm">
                Hematologist with 15+ years of experience in blood banking and transfusion medicine.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center text-gray-400">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold">Anita Gurung</h3>
              <p className="text-gray-500 mb-3">Operations Manager</p>
              <p className="text-gray-600 text-sm">
                Public health specialist with expertise in healthcare logistics and community outreach.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center text-gray-400">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold">Sunil Poudel</h3>
              <p className="text-gray-500 mb-3">Technology Lead</p>
              <p className="text-gray-600 text-sm">
                Software engineer focused on developing healthcare technology solutions for rural areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}