import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { Feedbacks2, Works2 } from "./components/Desktop_Screen";

// Loading screen component to display only once on mobile
const LoadingScreen = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary text-white">
    <div className="mb-4 text-lg font-bold">Open in laptop for Better UI and Animation</div>
    {/* Loading bar container */}
    <div className="w-3/4 bg-gray-200 rounded-full h-2.5 overflow-hidden">
      {/* Moving loading bar */}
      <div className="h-2.5 bg-secondary rounded-full loading-bar-animation"></div>
    </div>
  </div>
);

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  useEffect(() => {
    // Check if loading screen has been shown before
    const loadingScreenShown = localStorage.getItem("loadingScreenShown");

    // Function to check window width and set mobile/desktop state
    const handleResize = () => {
      const isMobileScreen = window.innerWidth <= 768;
      setIsMobile(isMobileScreen);

      // Show loading screen only on mobile and if not shown before
      if (isMobileScreen && !loadingScreenShown) {
        setShowLoadingScreen(true);
        setTimeout(() => {
          setShowLoadingScreen(false);
          localStorage.setItem("loadingScreenShown", "true"); // Set flag after showing
        }, 5000); // Hide loading screen after 5 seconds
      } else {
        setShowLoadingScreen(false); // No loading screen on desktop or if shown before
      }
    };

    handleResize(); // Initial check on mount
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Conditionally render loading screen on mobile for 5 seconds */}
        {isMobile && showLoadingScreen && <LoadingScreen />}

        {/* Main content, only displayed after loading screen on mobile, immediately on desktop */}
        {!showLoadingScreen && (
          <>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            
            {/* Conditionally render Works and WorksNew based on screen size */}
            {isMobile ? <Works2 /> : <Works />}

            {/* Conditionally render Feedbacks and FeedbacksNew based on screen size */}
            {isMobile ? <Feedbacks2 /> : <Feedbacks />}

            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
