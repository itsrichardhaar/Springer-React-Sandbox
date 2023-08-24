import React, {useState} from 'react';
import {Button} from '../ButtonElement';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowFoward, 
    ArrowRight } from './HeroElements';



const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


  return (
    
    <>
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src="https://springercdn.s3.amazonaws.com/video/springerstudios/lets-create-web.mp4" type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Let's Create</HeroH1>
                <HeroP>A Smarter Experience</HeroP>
                <HeroBtnWrapper>
                    <Button to="play-reel" 
                    onMouseEnter={onHover} 
                    onMouseleave={onHover}
                    primary='true'
                    dark='true'>
                        Play Reel {hover ? <ArrowFoward /> : <ArrowFoward />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

    </>

  );
};

export default HeroSection;