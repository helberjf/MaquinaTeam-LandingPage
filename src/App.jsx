import { ScrollProgressBar } from './components/motion/ScrollProgressBar.jsx';
import { Navbar } from './components/sections/Navbar.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { Marquee } from './components/sections/Marquee.jsx';
import { About } from './components/sections/About.jsx';
import { Modalities } from './components/sections/Modalities.jsx';
import { Plans } from './components/sections/Plans.jsx';
import { Testimonials } from './components/sections/Testimonials.jsx';
import { Contact } from './components/sections/Contact.jsx';
import { Footer } from './components/sections/Footer.jsx';
import { WhatsappFab } from './components/ui/WhatsappFab.jsx';

export default function App() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Modalities />
        <Plans />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsappFab />
    </>
  );
}
