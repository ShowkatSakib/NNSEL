import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/sections/AboutSection';
import TeamSection from '../components/sections/TeamSection';
import NewsSection from '../components/sections/NewsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <section id="home">
        <HeroSlider />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="team">
        <TeamSection />
      </section>

      <section id="news">
        <NewsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </>
  );
}