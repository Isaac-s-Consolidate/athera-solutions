import Build from '@/components/Build';
import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import OurServices from '@/components/OurServices';
import Testimonials from '@/components/Testimonials';


const HomePage = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <WhoWeAre />
        <OurServices />
        <Build />
        <Testimonials />
        <ContactForm />
      </main>
    </div>
  );
};

export default HomePage;
