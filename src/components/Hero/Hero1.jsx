// import React from "react";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import { assets } from "../assets";
// import "./Hero.scss";

// const Hero1 = () => {
//   return (
//     <div className="bglayer">
//       <section className="box">
//         <div className="giflottie">
//               <DotLottieReact
//             // src="https://lottie.host/9b7e3846-59e7-4ac9-86ae-bf0a43325ef0/thr5Xq051j.lottie"//check this
//             // src="https://lottie.host/22aca4f0-2a0e-4178-a106-332c05fa9e56/SWkpROQ8vU.lottie"//check this
//             src="https://lottie.host/b39171cb-ee7c-4ec8-9959-e4ff4719f82d/YfFikknMIm.lottie"
//             width="100px"
//             height="100px"
//             loop
//             autoplay
//           />
//         </div>
//         {/* <div className="nav">
//           <h1 className="name">&lt; Geetha R Kumar /&gt;</h1>
//           <h1 className="name2">&lt; Geetha R K /&gt;</h1>
//           <ul className="nav__list">
//             <li className="nav__item">
//               <a className="nav__anchor" href="">
//                 About
//               </a>
//             </li>
//             <li className="nav__item">
//               <a className="nav__anchor" href="">
//                 Projects
//               </a>
//             </li>
//             <li className="nav__item">
//               <a className="nav__anchor" href="">
//                 Resume
//               </a>
//             </li>
//           </ul>
//         </div> */}
//         {/* <div className="container2">
//         <div className="blob">
//             <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
//               <defs>
//                 <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                   <stop offset="0%" style={{ stopColor: '#B4B8B2', stopOpacity: 0.9 }} />
//                   <stop offset="50%" style={{ stopColor: '#A1A7A6', stopOpacity: 0.8 }} />
//                   <stop offset="100%" style={{ stopColor: '#E0E4E4', stopOpacity: 0.6 }} />

//                 </linearGradient>
//               </defs>
//               <path fill="url(#gradient)">
//                 <animate attributeName="d"
//                   dur="5000ms"
//                   repeatCount="indefinite"
//                   values="M450,326Q432,402,355,405Q278,408,208.5,425Q139,442,113.5,375.5Q88,309,52,237Q16,165,77.5,111.5Q139,58,216,32Q293,6,352.5,60Q412,114,440,182Q468,250,450,326Z;
//                   M410.5,312.5Q399,375,344.5,427Q290,479,210,468Q130,457,116.5,380Q103,303,85,243Q67,183,106.5,126Q146,69,217,52.5Q288,36,356,70Q424,104,423,177Q422,250,410.5,312.5Z;
//                   M453.5,327Q434,404,358,419Q282,434,210.5,438.5Q139,443,102,380Q65,317,64.5,249.5Q64,182,96.5,111.5Q129,41,210,30.5Q291,20,359,61Q427,102,450,176Q473,250,453.5,327Z;
//                   M453,330Q440,410,364,437Q288,464,229,426.5Q170,389,119.5,352.5Q69,316,44.5,241Q20,166,87,124.5Q154,83,220.5,62Q287,41,347.5,79.5Q408,118,437,184Q466,250,453,330Z;
//                   M446.5,329.5Q440,409,361,420.5Q282,432,204,448.5Q126,465,104.5,388Q83,311,67,244Q51,177,90.5,109Q130,41,209.5,34Q289,27,361.5,61.5Q434,96,443.5,173Q453,250,446.5,329.5Z;
//                   M450,326Q432,402,355,405Q278,408,208.5,425Q139,442,113.5,375.5Q88,309,52,237Q16,165,77.5,111.5Q139,58,216,32Q293,6,352.5,60Q412,114,440,182Q468,250,450,326Z">
//                 </animate>
//               </path>
//             </svg>
//             <img className='blob__img' src={assets.profile} alt="Geetha Rashinkar Kumar"></img>

//           </div>
//           <div className="about">
//             <p>Hello,</p>
//             <p className="about__para2">
//               I’m a <span>Web Developer</span> passionate about creating
//               innovative, user-centered solutions. With a keen eye for detail
//               and a drive to solve problems, I thrive on building impactful
//               digital experiences. My goal is to collaborate, learn, and craft
//               solutions that make a meaningful difference. Let’s create
//               something great together!
//             </p>
//             <p className="about__para3">
//               Let's Connect:{" "}
//               <a href="">
//                 <img className="about__img" src={assets.linkedin} alt="linkedin" />
//               </a>
//               <a href="">
//                 <img className="about__img" src={assets.github} alt="github" />
//               </a>
//               <a href="">
//                 <img className="about__img" src={assets.email} alt="email" />
//               </a>
//             </p>
//           </div>          
//         </div> */}
        
//         {/* <div className="leaves">
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf1} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf2} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf3} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf4} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf1} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf10} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf7} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf8} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf9} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.cherry1} />
//           </div>
//         </div>
//         <div className="leaves leaves2">
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf9} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf8} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf7} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf4} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf8} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf4} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf9} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf2} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf1} />
//           </div>
//         </div>
//         <div className="leaves leaves3">
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf4} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf10} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf9} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf7} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf8} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf2} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf5} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf3} />
//           </div>
//           <div className="leaves__container">
//             <img className="leaves__img" src={assets.leaf1} />
//           </div>
//         </div> */}
//       </section>
//     </div>
//   );
// };

// export default Hero1;
