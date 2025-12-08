import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

function LandingPage() {
  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header />
      <main className="grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
