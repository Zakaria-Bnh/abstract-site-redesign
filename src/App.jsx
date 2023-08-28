import "./styles.css";
import Header from "./components/Header/Header";
import Hero from "./components/Main/Hero/Hero";
import CollabFlow from "./components/Main/CollabFlow/CollabFlow";

const App = () => (
  <div>
    <div className="bg-custom-gradient rounded-b-[4rem] pb-6 md:pb-28 lg:pb-[10rem] custom-lg:pb-[12rem] lg-[15rem] relative z-90">
      <div className="custom-container h-full">
        <Header />
        <Hero />
      </div>
    </div>
    <div className="bg-blue-300 mt-[-6rem] pt-[6rem]">
      <div className="custom-container h-full">
        <CollabFlow />
      </div>
    </div>
  </div>
);

export default App;
