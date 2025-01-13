import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import Slider from "./components/Slider";

export default function App() {
  return (
    <div className="">
        <Navbar/>
        <Hero/>
        <Slider />
        <SectionOne />
        <Slider />
        <SectionTwo />
        <Slider />
        <SectionThree />
        <Slider />
        <SectionFour />
        <Slider />
        <Footer />
    </div>
  )
}