import React from 'react';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <ContactForm />
      </main>
    </div>
  );
};

export default HomePage;
