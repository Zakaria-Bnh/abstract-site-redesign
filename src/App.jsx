
import Header from "./components/Header/Header";
import Hero from "./components/Main/Hero/Hero";
import CollabFlow from "./components/Main/CollabFlow/CollabFlow";
import CollabExemplares from "./components/Main/CollabExemplares/CollabExemplares";
import ProductDesignResources from "./components/Main/ProductDesignResources.jsx/ProductDesignResources";
import CtaSection from "./components/Main/CtaSection/CtaSection";
import Footer from "./components/Footer/Footer";

const App = () => (
  <div >
    <div className="bg-[#0C134F] md:min-h-[100vh] rounded-b-[4rem] relative z-[100]">
      <div className="custom-container ">
        <Header />
        <Hero />
      </div>
    </div>
    <div className="bg-[#1D267D] rounded-b-[4rem] mt-[-4rem] relative z-50">
      <div className="custom-container">
        <CollabFlow />
      </div>
    </div>
    <div className="bg-[#5C469C] rounded-b-[4rem] mt-[-4rem] relative z-40">
      <div className="custom-container">
        <CollabExemplares />
      </div>
    </div>
    <div className="bg-[#D4ADFC] rounded-b-[4rem] mt-[-4rem] relative z-30">
      <div className="custom-container ">
        <ProductDesignResources />
      </div>
    </div>
    <div className="bg-gray-200 mt-[-4rem]">
      <div className="custom-container ">
        <CtaSection />
      </div>
    </div>
    <div className="bg-[#0C134F] ">
      <div className="custom-container ">
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
