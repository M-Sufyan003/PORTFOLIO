import React, { useState, useEffect } from "react";
import Loader   from "./components/Loader/Loader";
import Navbar   from "./components/Navbar/Navbar";
import Home     from "./components/Home/Home";
import About    from "./components/About/About";
import Skills   from "./components/Skills/Skills";
import Work     from "./components/Work/Work";
import Contact  from "./components/Contact/Contact";
import Footer   from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      <Navbar />

      <main className="l-main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>

      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
