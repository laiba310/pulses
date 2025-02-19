import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import Intro from "./components/intro";
import OurProduct from "./our/page";
import Team from "./team/page";
import Map from "./map/page";
import Contact from "./contact/page";
import Footer from "./components/footer";

export default function Home() {
  return (
 <>
      <Header />
      <HeroSection />
      <Intro />
      <OurProduct />
      <Team />
      <Map/>
 <Contact />
 <Footer />
      </>
  );
}
