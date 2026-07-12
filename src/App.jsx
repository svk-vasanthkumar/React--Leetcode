import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Stats from "./components/Stats";
import Featured from "./components/Featured";
import Learning from "./components/Learning";
import Contest from "./components/Contest";
import Companies from "./components/Companies";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Search />
      <Stats />
      <Featured />
      <Learning />
      <Companies />
       <Contest />
       <Testimonials />
    </>
  );
}

export default App;