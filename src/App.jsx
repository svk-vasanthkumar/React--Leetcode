import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Stats from "./components/Stats";
import Featured from "./components/Featured";
import Learning from "./components/Learning";

import Companies from "./components/Companies";

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
    </>
  );
}

export default App;