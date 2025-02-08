import project1 from '../assets/projects/project-1.png';
import project2 from '../assets/projects/project-2.png';
import project3 from '../assets/projects/project-3.png';
import project4 from '../assets/projects/project-4.png';
import project5 from '../assets/projects/project-5.png';
import project6 from '../assets/projects/project-6.png';
import project7 from '../assets/projects/project-7.png';
import project8 from '../assets/projects/project-8.png';
import project9 from '../assets/projects/project-9.png';
import project10 from '../assets/projects/project-10.png';

export const HERO_CONTENT = `Currently pursuing bachelor degree of Computer Science in
Bina Nusantara University`;

export const ABOUT_TEXT = `I am an undergraduate student majoring in Computer Science at Bina Nusantara University. I am a hardworking individual with a passion for learning new things and continuously improving myself. Throughout my academic journey and hands-on projects, I’ve built a diverse skill set by working with a broad spectrum of technologies. With solid experience in programming languages such as HTML, C, Java, Python, React, PHP, ASP.NET, and database administration. I am dedicated to creating impactful solutions that bridge the gap between technology and real-world challenges, and I look forward to further expanding my horizons in the ever-evolving tech landscape.`;


export const EXPERIENCES = [
  {
    year: 'March 2025 - December 2025',
    role: 'IOS Developer',
    company: 'Apple Developer Academy',
    description: `The Apple Developer Academy @BINUS is Asia’s first ever initiative to empower Indonesia’s economy by creating world-class developers for the world’s most innovative and vibrant app ecosystem. The 9-month academy program aims to attract students 18+ across Indonesia from a wide range of backgrounds. Our curriculum is designed to support not only those with coding or computer science experience but also those interested in areas such as design and business. It challenges students to apply themselves in real-world issues via application design, development, and startup creation. It also emphasizes creativity and collaboration which are skills needed for success. This program will be delivered in both Bahasa Indonesia and English.`,
    technologies: ['Swift', 'SQL', 'OOP', 'Creativity', 'Collaboration'],
  },
  {
    year: 'March 2023 - July 2023',
    role: 'Technical Comitee HISHOT',
    company: 'HIMTI',
    description: `As a designated committee member within the Technical Division of HISHOT (HIMTI Seminar, Workshop, and Study Tour) at BINUS University's HIMTI, I hold the responsibility for overseeing the technical facets and ensuring smooth coordination for the effective implementation of seminars and workshops.`,
    technologies: ['Communication', 'Event Coordination', 'Event Planning', 'Technical Support'],
  },
  {
    year: 'August 2022 - Present',
    role: 'Activist',
    company: 'HIMTI',
    description: `As an activist in the Programming Class division at HIMTI Binus University, I assumed a central role in cultivating and honing the talents of aspiring programmers. Our division was dedicated to equipping participants with advanced coding skills and cultivating a dynamic community of passionate learners.`,
    technologies: ['Communication', 'Technical Support', 'Event Planning'],
  },
];

export const PROJECTS = [
  {
    title: 'Tutoran',
    github: 'https://github.com/BernardBerenes/Tutoran',
    image: project1,
    description:
      'This website is named Tutoran which build using laravel (PHP Framework) combined with tailwind for css. This project is using scrum for the agile methodology and expected to be done in 20 June.',
    technologies: ['Laravel', 'Javascript', 'TailwindCSS', 'MySQL'],
  },
  {
    title: 'Musicify',
    github: 'https://github.com/Dikoii/Musicify',
    image: project2,
    description:
      'Musicify is a website for listening to music that provides both light mode and dark mode options. Dark mode offers a darker color scheme that is easier on the eyes in low-light environments, while light mode provides a traditional bright background.',
    technologies: ['HTML', 'Javascript', 'TailwindCSS'],
  },
  {
    title: 'FoodSaver',
    github: 'https://github.com/Ryldi/FoodSaver',
    image: project3,
    description:
      'FoodSaver FoodSaver is a website aimed at selling surplus food from fast-food restaurants or bakeries and cake shops. The food is still fresh and safe for consumption but would otherwise be discarded according to SOPs. The platform was developed as part of a university project using the following technologies',
    technologies: ['Laravel', 'TailwindCSS', 'MySQL', 'Kubernetes', 'Docker'],
  },
  {
    title: 'Lens&Light',
    github: 'https://github.com/Gerzi40/lens-light-entre',
    image: project4,
    description:
      'Lens & Light is a platform that connects photo and video editing professionals with clients seeking these services. Essentially, it functions as a marketplace for content creation support.',
    technologies: ['Laravel', 'Pusher', 'TailwindCSS', 'MySQL'],
  },
  {
    title: 'Crop Prediction',
    github: 'https://github.com/Dikoii/CropPrediction',
    image: project5,
    description:
      'This project is creating a machine learning application developed to assist users in determining suitable plants for cultivation based on input parameters. The application was built using Python programming language, with the utilization of three algorithms: Decision Tree, Random Forest, and Multilayer Perceptron. These algorithms analyze input parameters such as nitrogen, phosphorous content in soil, potassium, temperature,  humidity, ph, rainfall.',
    technologies: ['Python', 'Decision Tree', 'Random Forest', 'Multilayer Perceptron'],
  },
  {
    title: 'Code Reengineering',
    github: 'https://github.com/Dikoii/code-reengineering-website',
    image: project6,
    description:
      'This project was developed as part of a college assignment and was created collaboratively by two individuals. This website is providing information about bad code smell like change preventer and dispensables with refactoring solution to that smell. ',
    technologies: ['HTML', 'TailwindCSS'],
  },
  {
    title: 'JetFlix',
    github: 'https://github.com/Dikoii/JetFlix',
    image: project7,
    description: 'JetFlix was built was developed as part of a college assignment. The main goal is to enable users to watch trending and search for newly released movies.',
    technologies: ['HTML', 'Javascript', 'VanilaCSS'],
  },
  {
    title: 'Edufun',
    github: 'https://github.com/Dikoii/EduFun',
    image: project8,
    description: 'EduFun is an educational website developed by PT. EduFun, aimed at providing free IT course content to university students. The platform focuses on delivering high-quality learning materials in various fields, specifically Data Science, Interactive Multimedia, Network Security, and Software Engineering',
    technologies: ['Laravel', 'Javascript', 'Bootstrap', 'MySQL'],
  },
  {
    title: 'ConnectFriend',
    github: 'https://github.com/Dikoii/FinalASGWebProg-2602072275-Dicky-Dharma-Susanto',
    image: project9,
    description: 'ConnectFriend is a social networking site that allows users to communicate with other members, as well as share content and online media with those members. You as a ConnectFriend programmer are asked to create a web application using the concept of social networking to meet new friends',
    technologies: ['Laravel', 'Javascript', 'Bootstrap', 'MySQL'],
  },
  {
    title: 'Calouself',
    github: 'https://github.com/FerryFL/CaLouselF',
    image: project10,
    description: 'CaLouselF is a marketplace application for buying and selling second-hand clothing. This application is built using JavaFX and MySQL. All features and authentication for guests, buyers, sellers, and admins are functioning properly according to the specified requirements, providing a fairly good user experience. We have also ensured that no libraries beyond the provided material are used. The application has been developed using the MVC architecture, with the following structure: Database, Model, View, View_Controller, and Controller.',
    technologies: ['JavaFX', 'MySQL'],
  },
];

export const CONTACT = {
  email: 'dicky.susanto@binus.ac.id',
};
