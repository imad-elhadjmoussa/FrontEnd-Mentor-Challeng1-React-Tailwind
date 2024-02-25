import { Hero } from "./Components/Hero";
import { ItemsSection } from "./Components/ItemsSection";
import { Navbar } from "./Components/Navbar";


function App() {
  return (
    <div className="">
      <div className="bg-blue-100 p-10">
        <Navbar />
        <Hero/>
      </div>
      <ItemsSection/>

    </div>
  );
}

export default App;
