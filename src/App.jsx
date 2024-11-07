import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// import Navbar from "./components/Navbar"; // Import your components
// import Hero from "./Hero";
// import About from "./About";
// import Experience from "./Experience";
// import Tech from "./Tech";
// import Works from "./Works";
// import {WorksNew} from "./components/Desktop_Screen/WorksNew";
// import Feedbacks from "./Feedbacks";
// import FeedbacksNew from "./components/Desktop_Screen/FeedbacksNew";
import { Feedbacks2, Works2 } from "./components/Desktop_Screen";

// import Contact from "./Contact";
// import StarsCanvas from "./StarsCanvas";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ComputersCanvas } from "./components";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect window width on mount and on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true); // Mobile devices
      } else {
        setIsMobile(false); // Desktop devices
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup the event listener
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        
        {/* Conditionally render Works and WorksNew based on screen size */}
       {/* <Works /> */}
        {isMobile ? <Works2 /> : <Works />}

        {/* Conditionally render Feedbacks and FeedbacksNew based on screen size */}
         {/* <Feedbacks /> */}
        {isMobile ? <Feedbacks2 /> : <Feedbacks />}

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
