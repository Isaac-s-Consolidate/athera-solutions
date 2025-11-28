import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Testimonials />
        <ContactForm />
      </main>
    </div>
  );
};

export default HomePage;
