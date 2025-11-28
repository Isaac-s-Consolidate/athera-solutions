import Build from '@/components/Build';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Build />
        <Testimonials />
        <ContactForm />
      </main>
    </div>
  );
};

export default HomePage;
