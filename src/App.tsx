import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import About2 from './components/About2';
import Rethinking from './components/Rethinking';
import ClinicalPerformance from './components/ClinicalPerformance';
import Timeline from './components/Timeline';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <About2 />
      <Rethinking/>
      <ClinicalPerformance />
      <Timeline />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
