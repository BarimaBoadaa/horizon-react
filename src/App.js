import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Plans from "./Components/Plans";
import Offices from "./Components/Offices";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Plans />
      <Offices />
      <Footer />
    </>
  );
}

export default App;
