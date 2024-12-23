
import proj1 from '../../assets/proj1.png'
import proj2 from '../../assets/proj2.png'
import proj3 from '../../assets/proj3.png'
import proj4 from '../../assets/proj4.png'
import proj5 from '../../assets/proj5.png'
import proj6 from '../../assets/proj6.png'



// import leaf3 from '../../assets/leaf3.png'
// import leaf4 from '../../assets/leaf4.png'
// import leaf5 from '../../assets/leaf5.png'
// import leaf6 from '../../assets/leaf6.png'
// import leaf7 from '../../assets/leaf7.png'
// import leaf8 from '../../assets/leaf8.png'
// import leaf9 from '../../assets/leaf9.png'
// import leaf10 from '../../assets/leaf10.png'
import linkedin from '../../assets/linkedin.svg' //
import linkedinpng from '../../assets/linkedin.png'
import resume from '../../assets/resume.pdf'
import email from '../../assets/email.svg' //
import emailpng from '../../assets/email.png'

import github from '../../assets/github.svg' //
import githubpng from '../../assets/github.png'

import profile from '../../assets/profile.png'
import cherry1 from '../../assets/cherry1.png'  //
import bg from '../../assets/bg.jpg'
//
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'
import img10 from '../../assets/img10.png'
//
import hamberger from '../../assets/hamberger.png'
import canva from '../../assets/canva.jpeg'

import girl from '../../assets/girl.png'
import about from '../../assets/book-user.png'
import contact from '../../assets/address-book.png'
import experience from '../../assets/desk.png'
import projects from '../../assets/display-code.png'
import app from '../../assets/app.png'
import logo from '../../assets/logo.png'

import blobs1 from '../../assets/blobs1.gif'
import blobs2 from '../../assets/blobs2.gif'
import blobs3 from '../../assets/blobs3.gif'
import blobs4 from '../../assets/blobs4.gif'
import blobs5 from '../../assets/blobs5.gif'




export const assets = {
    blobs1,
    blobs2,
    blobs3,
    blobs4,
    blobs5,
    girl,
    about,
    contact,
    experience,
    projects,
    app,
    logo,
    // leaf1,
    // leaf2,
    // leaf3,
    // leaf4,
    // leaf5,
    // leaf6,
    // leaf7,
    // leaf8,
    // leaf9,
    // leaf10,
    linkedin,
    linkedinpng,
    email,
    emailpng,
    resume,
    github,
    githubpng,
    canva,
    profile,
    cherry1,
    bg,
    hamberger,
    img8,
    img9,
    img10

}

export const work = {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7
}

export const proj = {
    project1: {
        imgSrc: proj1,
        title: 'WellnessPath - Nov 2024',
        description: `WellnessPath is a full-stack web app that streamlines hospital operations, focusing on doctor search by specialization and appointment scheduling. 
                      It provides a centralized platform to manage patient data with full CRUD functionality. The app includes robust user authentication and ensures only authorized users can access sensitive data.
                       Fully HIPAA-compliant, it prioritizes data privacy and security for patients.`,
        skills: [
          'React', 
          'Tailwind CSS',
          'Sass', 
          'JWT',
          'Node.js', 
          'Rest API', 
          'MySQL', 
          'Express', 
          'Axios', 
          'Git', 
          'GitHub', 
          'Knex.js'
      ]
      },
      project3: {
        imgSrc: proj3,
        title: 'InStock Oct-2024',
        description: `InStock is a full-stack web app for managing inventory for a Fortune 500 client. It offers a responsive interface with full CRUD functionality for inventory items. The project followed an agile methodology, with roles based on expertise in front-end and back-end technologies. 
        Accessibility features were prioritized, including proper semantic HTML, keyboard navigability, screen reader support, and contrast adjustments to ensure an inclusive experience for all users.`,
        skills: [
            'React', 
            'Sass', 
            'Node.js', 
            'Rest API', 
            'MySQL', 
            'Express', 
            'Axios', 
            'Git', 
            'Jira', 
            'GitHub', 
            'Knex.js'
        ]
    },
    project4: {
      imgSrc: proj4,
      title: 'BandSite - Aug 2024',
      description: `BandSite is a fully responsive website for an emerging band, featuring a Main Page with band information and a photo gallery, and a Shows Page listing upcoming performances. The site adapts to all screen sizes, ensuring accessibility and an engaging user experience. With a clean design and easy-to-navigate layout, it showcases the band's presence and keeps fans updated on upcoming shows. 
                    The project utilizes SCSS and JavaScript for a dynamic, responsive interface.`,
      skills: ['HTML5', 'SASS', 'JavaScript', 'Axios', 'Git', 'GitHub']
    },
    project2: {
      imgSrc: proj2,
      title: 'Bell-n-Bytes',
      description: `Developed during an intense 24-hour hackathon, Bell n Bytes is a website created by my team to raise awareness about the impactful work Bell is doing in the community. 
                    Our project aimed to highlight Bell’s initiatives, share stories, and encourage further community engagement. The experience of collaborating in real-time with my team using Git for version control was both challenging and rewarding. 
                  Presenting our website to the judges was an exhilarating moment that showcased our teamwork and dedication.`,
      skills: ['React','SCSS','Axios','JSON','Git','GitHub','Figma']
    },
    project5: {
      imgSrc: proj6,
      title: 'Country Flag Trivia',
      description: ` Built in an intensive 6-hour hackathon, this game tests players' knowledge by showing a country’s flag and offering four country name options to choose from within a set time limit. Once the timer runs out or the player selects an answer, the game reveals further details about the country, including language, currency, and population. 
                  Designed with a server-client architecture and utilizing a JSON file, the game provides a fast-paced, educational, and fun experience.`,
      skills: ['React','SCSS','Axios','JSON','Git','GitHub']
    },
    project6: {
      imgSrc: proj5,
      title: 'BrainFlix',
      description:`BrainFlix is a fully responsive video streaming platform that offers users the ability to upload videos, comment on them, like or dislike content, and delete their own comments. With its custom API service, users can seamlessly interact with videos and each other, creating a dynamic and engaging experience. 
              The platform is designed for optimal performance across all devices, ensuring users can enjoy smooth video streaming, manage their content, and participate in the community, all in one place.`,
              skills: [
                'React', 
                'Sass', 
                'Node.js', 
                'Rest API', 
                'MySQL', 
                'JSON',
                'Express', 
                'Axios', 
                'Git', 
                'Jira', 
                'GitHub', 
                'Knex.js'
            ]
    },
    
    
    
}