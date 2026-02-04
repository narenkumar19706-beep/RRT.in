import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-8 transition-colors">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <div className="flex items-center gap-3 mb-6">
        <Shield className="text-green-600" size={32} />
        <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy & Disclaimer</h1>
      </div>
      
      <div className="prose prose-gray max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          Rapid Response Team (RRT) is committed to protecting the privacy of our community members. This policy outlines how we handle your data with responsibility and transparency.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">1. Nature of Service</h2>
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
             <p className="text-orange-900 text-sm font-medium m-0">
               <strong>Important Disclaimer:</strong> RRT is a volunteer-based connection platform. We are NOT a replacement for emergency services (Police, Fire, Ambulance). In case of human life-threatening emergencies, please contact your local emergency number (112) immediately.
             </p>
          </div>
          <p className="text-gray-600 mb-2">
            RRT facilitates connections between animal feeders, volunteers, and rescuers. We do not employ these individuals and cannot guarantee their availability or response times.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">2. Location Data Usage</h2>
          <p className="text-gray-600 mb-2">
            Your privacy is paramount. RRT accesses your location data <strong>only</strong> under the following circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>When you actively trigger an SOS alert (holding the button for 3 seconds).</li>
            <li>When you have explicitly marked yourself as "Available to Help" to receive nearby alerts.</li>
          </ul>
          <p className="text-gray-600 mt-2">
            We do not track your location in the background when the app is idle or closed, unless you are in an active alert session.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">3. Data Security</h2>
          <p className="text-gray-600 mb-2">
            We implement industry-standard security measures to protect your personal information.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li><strong>No Data Selling:</strong> We do not sell, trade, or rent your personal identification information to third parties.</li>
            <li><strong>Encryption:</strong> All data transmission is encrypted.</li>
            <li><strong>Community Safety:</strong> User profiles are verified where possible to ensure community safety.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">4. User Responsibility</h2>
          <p className="text-gray-600 mb-2">
            By using RRT, you agree to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Use the SOS feature only for genuine animal welfare emergencies.</li>
            <li>Treat other community members with respect.</li>
            <li>Not use the platform for harassment or illegal activities.</li>
          </ul>
          <p className="text-gray-600 mt-2 italic">
            Violation of these terms will result in immediate suspension of your account.
          </p>
        </section>
        
        <section className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Last updated: October 26, 2023. <br />
            For questions regarding this policy, please contact us at privacy@rrt.org.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;