import React from 'react';
import ContactForm from '@/components/ContactForm';
import WhoWeAre from '@/components/WhoWeAre';
import OurServices from '@/components/OurServices';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <main>
        <WhoWeAre />
        <OurServices />
        <ContactForm />
      </main>
    </div>
  );
};

export default HomePage;
