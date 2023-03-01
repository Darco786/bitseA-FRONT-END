import EchoSystems from "./components/EchoSystems";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OrdinalNFTs from "./components/OrdinalNFTs";
import Platforms from "./components/Platforms";
// import RoadMaps from "./components/RoadMaps";
// import Tokenomics from "./components/Tokenomics";

export default function App() {
  return (
    <div className="bg-black ">
      <div className="mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <Platforms />
        <EchoSystems />
        <OrdinalNFTs />
        {/* <RoadMaps /> */}
        {/* <Tokenomics /> */}
        <Footer />
      </div>
    </div>
  );
}
