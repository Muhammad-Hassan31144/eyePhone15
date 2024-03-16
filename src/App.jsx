import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Model from "./components/Model";
import VideoSlides from "./components/VideoSlides";
import Footer from "./components/Footer";

const App = () => {

  return (
    <main className="bg-black">
      <Nav/>
      <Hero/>
      {/* <Featured/> */}
      <Model />
      <Footer/>
    </main>
  );
};

export default App;
