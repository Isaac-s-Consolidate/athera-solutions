import React from 'react';
import ContactForm from '@/components/ContactForm';
import WhoWeAre from '@/components/WhoWeAre';
import OurServices from '@/components/OurServices';
import Testimonials from '@/components/Testimonials';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <main>
        <WhoWeAre />
        <OurServices />
        <Testimonials />
        <ContactForm />
      </main>
    </div>
  );
};

export default HomePage;
