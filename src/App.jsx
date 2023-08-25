import "./styles.css";
import Header from "./components/Header/Header"
import Hero from "./components/Main/Hero/Hero"



const App = () => (
  <div className="bg-custom-gradient bg-cover">
    <div className="custom-container min-h-[200vh]">
      <Header/>
      <Hero />
    </div>
  </div>
);

export default App;
