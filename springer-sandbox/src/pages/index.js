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
import Footer from '../components/Footer';
import MouseTracker from './MouseTracker';





const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <MouseTracker>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        
        <InfoSection {...homeObjOne}/>
        <ExperienceSection {...ExperienceObjOne} />
        <Services />
       <InfoSection {...homeObjThree} />
       <Footer />
    </MouseTracker>
  );
};



export default Home;