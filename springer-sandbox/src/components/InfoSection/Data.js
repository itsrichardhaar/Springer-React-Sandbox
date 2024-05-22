import { Link } from 'react-router-dom';


export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Senior Frontend Developer',
    headline: 'Richard Haar',
    description:
      'I build pixel-perfect, engaging, and accessible digital experiences.',
    descriptionTwo: 'Back in 2018, I decided to try and develop a personal website to promote music I was creating. This led me to the rabbit hole of coding and web development. Fast-forward to today, and I\'ve had the privilege of builidng web applications for a number of marketing agencies and freelance clients.',
    descriptionThree: <>
    My main focus these days is building accessible user interfaces and experiences for our clients at{' '}
    <Link class="body-link" to="//www.springerstudios.com/">Springer Studios</Link>. I enjoy the sweet spot where design and development meet. I love when things look good and are well built under the hood. When I\'m not at the computer, I\'m usually outdoors, hanging out with friends.
  </>,
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require('../../images/svg-1.svg'),
    alt: 'lets build',
    dark: true,
    primary: true,
    darkText: false
  };

  export const homeObjTwo = {
    id: 'services',
    lightBg: false,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Crafting Digital Solutions',
    headline: 'My Professional Experience',
    description:
      'We design high-quality, cohesive, purpose-driven creative solutions. We’re champions for our clients and passionate every step of the way. We measure our success by the success of our clients, and we absolutely love what we do.',
    buttonLabel: 'View Full Resume',
    imgStart: true,
    img: require('../../images/svg-2.svg'),
    alt: 'what we do',
    dark: true,
    primary: true,
    darkText: false
  };
  
  export const homeObjThree = {
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Let\'s Work Together',
    headline: 'I combine Passion with Experience',
    description:
      "I create custom design solutions to help clients succeed. From small business startups to worldwide corporations, I bring passion and experience to my client's work. Feel free to reach out with potential development projects or job opportunities.",
    buttonLabel: 'Get In Touch',
    imgStart: false,
    img: require('../../images/svg-3.svg'),
    alt: 'our services',
    dark: true,
    primary: true,
    darkText: false
  };
  
  