import "./App.css";
import Discover from "./components/Discover";
import Explore from "./components/Explore";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Integration from "./components/Integration";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import TryOut from "./components/TryOut";

function App() {
  return (
    <div className="Main">
      <Header/>
      <Hero/>
      <Discover/>
      <Explore/>
      <Integration/>
      <Pricing/>
      <Testimonial/>
      <TryOut/>
    </div>
  );
}

export default App;