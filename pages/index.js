import AboutUs from "../components/client/home/AboutUs";
import ContactUs from "../components/client/home/ContactUs";
import HeroSection from "../components/client/home/HeroSection";
import Map from "../components/client/home/Map";
import OurProducts from "../components/client/home/OurProducts";

export default function Home() {
  return (
    <main className="max-w-screen-3xl mx-auto relative">
      <HeroSection />
      <AboutUs />
      <OurProducts />
      <ContactUs />
      <Map />
    </main>
  );
}
