import { CommunityCard } from "./Components/CommunityCard";
import { Footer } from "./Components/Footer";
import { Hero } from "./Components/Hero";
import { ItemsSection } from "./Components/ItemsSection";
import { Navbar } from "./Components/Navbar";
import heroBgDes from './huddle-landing-page-with-alternating-feature-blocks-master/images/bg-hero-desktop.svg'

function App() {
  return (
    <div >
      <div 
      className=" p-10"
      style={
        {
          backgroundImage:`url(${heroBgDes})`,
        }
      }
      >
        <Navbar />
        <Hero />
      </div>
      <ItemsSection />
      <div className="  flex flex-col items-center justify-center">
        <CommunityCard />
        <Footer />
      </div>

    </div>
  );
}

export default App;
