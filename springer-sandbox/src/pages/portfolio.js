import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import ExperienceSection from '../components/ExperienceSection';
import { homeObjOne } from '../components/InfoSection/Data'
import { homeObjTwo } from '../components/InfoSection/Data'
import { homeObjThree } from '../components/InfoSection/Data'
import { ExperienceObjOne } from '../components/ExperienceSection/data';
import Services from '../components/Services';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import Footer from '../components/Footer';
import MouseTracker from '../components/MouseTracker/MouseTracker';



const Portfolio = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <MouseTracker>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <PortfolioSection />
       <Footer />
    </MouseTracker>
  );
};



export default Portfolio;