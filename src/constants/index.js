import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png"

export const HERO_CONTENT = `Currently pursuing bachelor degree of Computer Science in
Bina Nusantara University`;

export const ABOUT_TEXT = `I am an undergraduate student majoring in Computer Science at Bina Nusantara University. I am a hardworking individual with a passion for learning new things and continuously improving myself. With solid experience in programming languages such as HTML, C, Java, Python, and database administration, my drive for innovation and problem-solving fuels my commitment to making significant contributions to the field of Computer Science and beyond.`;

export const EXPERIENCES = [
  {
    year: "March 2025 - December 2025",
    role: "IOS Developer",
    company: "Apple Developer Academy",
    description: `The Apple Developer Academy @BINUS is Asia’s first ever initiative to empower Indonesia’s economy by creating world-class developers for the world’s most innovative and vibrant app ecosystem. The 9-month academy program aims to attract students 18+ across Indonesia from a wide range of backgrounds. Our curriculum is designed to support not only those with coding or computer science experience but also those interested in areas such as design and business. It challenges students to apply themselves in real-world issues via application design, development, and startup creation. It also emphasizes creativity and collaboration which are skills needed for success. This program will be delivered in both Bahasa Indonesia and English.`,
    technologies: ["Swift", "SQL", "OOP", "Creativity", "Collaboration"],
  },
  {
    year: "March 2023 - July 2023",
    role: "Technical Comitee HISHOT",
    company: "HIMTI",
    description: `As a designated committee member within the Technical Division of HISHOT (HIMTI Seminar, Workshop, and Study Tour) at BINUS University's HIMTI, I hold the responsibility for overseeing the technical facets and ensuring smooth coordination for the effective implementation of seminars and workshops.`,
    technologies: ["Communication", "Event Coordination", "Event Planning" ,"Technical Support"],
  },
  {
    year: "August 2022 - Present",
    role: "Activist",
    company: "HIMTI",
    description: `As an activist in the Programming Class division at HIMTI Binus University, I assumed a central role in cultivating and honing the talents of aspiring programmers. Our division was dedicated to equipping participants with advanced coding skills and cultivating a dynamic community of passionate learners.`,
    technologies: ["Communication", "Technical Support", "Event Planning"],
  },
];

export const PROJECTS = [
  {
    title: "Tutoran",
    image: project1,
    description:
      "This website is named Tutoran which build using laravel (PHP Framework) combined with tailwind for css. This project is using scrum for the agile methodology and expected to be done in 20 June.",
    technologies: ["Laravel", "Javascript", "TailwindCSS", "MySQL"],
  },
  {
    title: "Musicify",
    image: project2,
    description:
      "Musicify is a website for listening to music that provides both light mode and dark mode options. Dark mode offers a darker color scheme that is easier on the eyes in low-light environments, while light mode provides a traditional bright background.",
    technologies: ["HTML", "Javascript", "TailwindCSS"],
  },
  {
    title: "Code Reengineering",
    image: project3,
    description:
      "This project was developed as part of a college assignment and was created collaboratively by two individuals. This website is providing information about bad code smell like change preventer and dispensables with refactoring solution to that smell. ",
    technologies: ["HTML", "TailwindCSS"],
  },
  {
    title: "JetFlix",
    image: project4,
    description:
      "JetFlix was built was developed as part of a college assignment. The main goal is to enable users to watch trending and search for newly released movies.",
    technologies: ["HTML", "Javascript" ,"VanilaCSS",],
  },
  {
    title: "Crop Prediction",
    image: project5,
    description: 
    "This project is creating a machine learning application developed to assist users in determining suitable plants for cultivation based on input parameters. The application was built using Python programming language, with the utilization of three algorithms: Decision Tree, Random Forest, and Multilayer Perceptron. These algorithms analyze input parameters such as nitrogen, phosphorous content in soil, potassium, temperature,  humidity, ph, rainfall.",
    technologies: ["Python", "Decision Tree", "Random Forest", "Multilayer Perceptron"],
  }
];

export const CONTACT = {
  email: "dicky.susanto@binus.ac.id",
};
