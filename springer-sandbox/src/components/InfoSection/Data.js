import { Link } from 'react-router-dom';


export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Senior Web Developer',
    headline: 'Richard Haar',
    description:
      'I specialize in end-to-end development of dynamic, innovative products, with an emphasis on crafting intuitive, scalable user experiences that balance simplicity with high performance 🚀',
    descriptionTwo: 'I’m a senior web developer and marketing analyst with 6 years of experience in web application programming, digital marketing and brand development. I excel in cross-functional collaboration to provide innovative, high-quality products and services. My unique blend of technical expertise and analytical marketing insight enables me to enhance user-experience, optimize performance, and drive business growth across multi-channel marketing strategies and campaigns.',
    descriptionThree: <>
    My primary focus is developing accessible, user-centric interfaces and experiences for clients at{' '}
    <Link class="body-link" to="//www.springerstudios.com/">Springer Studios</Link>. 
  </>,
    buttonLabel: 'Get In Touch',
    imgStart: false,
    img: require('../../images/svg-1.svg'),
    alt: 'lets build',
    dark: true,
    primary: true,
    darkText: false,
    hasImage: false
  };

  export const homeObjTwo = {
    id: 'services',
    lightBg: false,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Crafting Digital Solutions',
    headline: 'Work Experience',
    description:
      'We design high-quality, cohesive, purpose-driven creative solutions. We’re champions for our clients and passionate every step of the way. We measure our success by the success of our clients, and we absolutely love what we do.',
    buttonLabel: 'View Full Resume',
    imgStart: true,
    img: require('../../images/svg-2.svg'),
    alt: 'what we do',
    dark: true,
    primary: true,
    darkText: false,
    hasImage: false
  };
  
  export const homeObjThree = {
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Let\'s Work Together',
    headline: 'Available for freelance opportunities',
    description:
      "I create custom design solutions to help clients succeed. From small business startups to worldwide corporations, I bring passion and experience to my client's work. Feel free to reach out with potential development projects or job opportunities.",
    buttonLabel: 'Get In Touch',
    imgStart: false,
    img: require('../../images/profile-pic-1.jpeg'),
    alt: 'our services',
    dark: true,
    primary: true,
    darkText: false,
    hasImage: true
  };
  
  
