import { CommunityCard } from "./Components/CommunityCard";
import { Footer } from "./Components/Footer";
import { Hero } from "./Components/Hero";
import { ItemsSection } from "./Components/ItemsSection";
import { Navbar } from "./Components/Navbar";


function App() {
  return (
    <div className="">
      <div className="bg-blue-100 p-10">
        <Navbar />
        <Hero />
      </div>
      <ItemsSection />
      <div className=" -z-10 relative  flex flex-col items-center justify-center">
        <CommunityCard />
        <Footer />
      </div>

    </div>
  );
}

export default App;
