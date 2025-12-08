import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';

function LandingPage() {
  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header />
      <main className="grow">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
