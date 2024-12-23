import proj1 from "../../assets/proj1.png";
import proj2 from "../../assets/proj2.png";
import proj3 from "../../assets/proj3.png";
import proj4 from "../../assets/proj4.png";
import proj5 from "../../assets/proj5.png";
import proj6 from "../../assets/proj6.png";
//
import linkedinpng from "../../assets/icons/linkedin.png";
import resume from "../../assets/resume.pdf";
import emailpng from "../../assets/icons/email.png";
import githubpng from "../../assets/icons/github.png";
import bg from "../../assets/bg.jpg";

//
import girl from "../../assets/girl.png";
import about from "../../assets/icons/book-user.png";
import contact from "../../assets/icons/address-book.png";
import experience from "../../assets/icons/desk.png";
import projects from "../../assets/icons/display-code.png";
import logo from "../../assets/icons/logo.png";

//
import git from "../../assets/skills/git.svg";
import githubskill from "../../assets/skills/github.svg";
import jira from "../../assets/skills/jira.svg";
import axios from "../../assets/skills/axios.png";
import javascript from "../../assets/skills/javascript (1).svg";
import html from "../../assets/skills/html.svg";
import css from "../../assets/skills/css.svg";
import express from "../../assets/skills/express.svg";
import figma from "../../assets/skills/figma.svg";
import firebase from "../../assets/skills/firebase.svg";
import json from "../../assets/skills/json.png";
import knex from "../../assets/skills/knex.png";
import materialui from "../../assets/skills/material-ui.svg";
import mysql from "../../assets/skills/mysql.svg";
import nextjs from "../../assets/skills/nextjs.svg";
import postman from "../../assets/skills/postman.svg";
import react from "../../assets/skills/react.svg";
import typescript from "../../assets/skills/typescript.svg";
import sass from "../../assets/skills/sass.svg";
import tailwind from "../../assets/skills/tailwind.svg";
import mongodb from "../../assets/skills/mongodb.svg";
import pd1 from "../../assets/skills/pd1.png";
import admin from "../../assets/skills/admin.png";

export const assets = {
  pd1,
  admin,
  girl,
  about,
  contact,
  experience,
  projects,
  logo,
  linkedinpng,
  emailpng,
  resume,
  githubpng,
  bg,
};

export const proj = {
  project1: {
    imgSrc: proj1,
    title: "WellnessPath - Nov 2024",
    description: `WellnessPath is a full-stack web app that streamlines hospital operations, focusing on doctor search by specialization and appointment scheduling. 
                      It provides a centralized platform to manage patient data with full CRUD functionality. The app includes robust user authentication and ensures only authorized users can access sensitive data.
                       Fully HIPAA-compliant, it prioritizes data privacy and security for patients.`,
    skills: [
      "React",
      "Tailwind CSS",
      "Sass",
      "JWT",
      "Node.js",
      "Rest API",
      "MySQL",
      "Express",
      "Axios",
      "Git",
      "GitHub",
      "Knex.js",
    ],
  },
  project3: {
    imgSrc: proj3,
    title: "InStock Oct-2024",
    description: `InStock is a full-stack web app for managing inventory for a Fortune 500 client. It offers a responsive interface with full CRUD functionality for inventory items. The project followed an agile methodology, with roles based on expertise in front-end and back-end technologies. 
        Accessibility features were prioritized, including proper semantic HTML, keyboard navigability, screen reader support, and contrast adjustments to ensure an inclusive experience for all users.`,
    skills: [
      "React",
      "Sass",
      "Node.js",
      "Rest API",
      "MySQL",
      "Express",
      "Axios",
      "Git",
      "Jira",
      "GitHub",
      "Knex.js",
    ],
  },
  project4: {
    imgSrc: proj4,
    title: "BandSite - Aug 2024",
    description: `BandSite is a fully responsive website for an emerging band, featuring a Main Page with band information and a photo gallery, and a Shows Page listing upcoming performances. The site adapts to all screen sizes, ensuring accessibility and an engaging user experience. With a clean design and easy-to-navigate layout, it showcases the band's presence and keeps fans updated on upcoming shows. 
                    The project utilizes SCSS and JavaScript for a dynamic, responsive interface.`,
    skills: ["HTML5", "SASS", "JavaScript", "Axios", "Git", "GitHub"],
  },
  project2: {
    imgSrc: proj2,
    title: "Bell-n-Bytes",
    description: `Developed during an intense 24-hour hackathon, Bell n Bytes is a website created by my team to raise awareness about the impactful work Bell is doing in the community. 
                    Our project aimed to highlight Bell’s initiatives, share stories, and encourage further community engagement. The experience of collaborating in real-time with my team using Git for version control was both challenging and rewarding. 
                  Presenting our website to the judges was an exhilarating moment that showcased our teamwork and dedication.`,
    skills: ["React", "SCSS", "Axios", "JSON", "Git", "GitHub", "Figma"],
  },
  project5: {
    imgSrc: proj6,
    title: "Country Flag Trivia",
    description: ` Built in an intensive 6-hour hackathon, this game tests players' knowledge by showing a country’s flag and offering four country name options to choose from within a set time limit. Once the timer runs out or the player selects an answer, the game reveals further details about the country, including language, currency, and population. 
                  Designed with a server-client architecture and utilizing a JSON file, the game provides a fast-paced, educational, and fun experience.`,
    skills: ["React", "SCSS", "Axios", "JSON", "Git", "GitHub"],
  },
  project6: {
    imgSrc: proj5,
    title: "BrainFlix",
    description: `BrainFlix is a fully responsive video streaming platform that offers users the ability to upload videos, comment on them, like or dislike content, and delete their own comments. With its custom API service, users can seamlessly interact with videos and each other, creating a dynamic and engaging experience. 
              The platform is designed for optimal performance across all devices, ensuring users can enjoy smooth video streaming, manage their content, and participate in the community, all in one place.`,
    skills: [
      "React",
      "Sass",
      "Node.js",
      "Rest API",
      "MySQL",
      "JSON",
      "Express",
      "Axios",
      "Git",
      "Jira",
      "GitHub",
      "Knex.js",
    ],
  },
};

export const skillset = {
  html,
  css,
  sass,
  materialui,
  tailwind,
  javascript,
  react,
  typescript,
  nextjs,
  axios,
  json,
  express,
  knex,
  postman,
  mysql,
  firebase,
  git,
  githubskill,
  jira,
  figma,
};
