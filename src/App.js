import "./App.css";
import Nav from "./components/navbar";
import Sidebar from "./components/sidebar";
import HeroSection from "./components/heroSection";
import CourseSection from "./components/courseSection";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Nav toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <CourseSection />
      <Teams />
      <Footer />
    </>
  );
}

export default App;
