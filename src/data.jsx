import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Hemant",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Pawar",
  },

  {
    id: 3,
    title: "Age : ",
    description: "23 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "India",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Current Address : ",
    description: "Gurgaon",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 8459254214",
  },

  {
    id: 8,
    title: "Email: ",
    description: "hemantpawar26102@gmail.com",
  },

  {
    id: 9,
    title: "Address  : ",
    description: "Jalgaon (Maharashtra)",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Hindi, English,Marathi",
  },
];

export const stats = [
  {
    id: 1,
    no: "1",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "10+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "5+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "2+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "July 2023 - PRESENT",
    title:
      "Associate Software Developer <span> at TestYantra Software Solution </span>",
    desc: "*************,",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Now its your turn",
    title: "************** <span> ******** </span>",
    desc: "*************",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: ".... - ....",
    title: "*********** <span> ********* </span>",
    desc: "***************",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019-2022",
    title:
      "Engineering Degree <span> SSBT College Of Enginnering And Technology (Maharashtra) </span>",
    desc: "B tech in Electrical Stream & Engineering Score of 82%",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2016-2019",
    title:
      "Diploma (Polytechnic) <span> Maharashta State Board Of Technical  Education (MSBTE), Mumbai</span>",
    desc: "Electrical Stream & Score of 75%",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2016",
    title: "10th<span> Y.D.Patil School (Maharashta) </span>",
    desc: "Total Score of 83%",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "90",
  },

  {
    id: 2,
    title: "CSS",
    percentage: "70",
  },

  {
    id: 3,
    title: "Bootstrap",
    percentage: "75",
  },

  {
    id: 4,
    title: "Javascript",
    percentage: "80",
  },

  {
    id: 5,
    title: "React js",
    percentage: "80",
  },

  {
    id: 6,
    title: "Java",
    percentage: "62",
  },

  {
    id: 7,
    title: "SQL",
    percentage: "65",
  },

  {
    id: 8,
    title: "Node js",
    percentage: "45",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Attendence Management System MERN Project",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "AMS Project-- MERN",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "MERN",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/HemantPawar8956/Attendene-Management-System---MERN-Stack-Project",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Mern Crud Project",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Mern Crud Project",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "MERn",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/HemantPawar8956/Mern-Crud-project",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Codepen Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Code Editior Project -- Codepen",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React js",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "ttps://github.com/HemantPawar8956/Code-Pen-using-React.github.io",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Sticky notes Project",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Sticky Notes Application",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React js ",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/golukumarsingh11/React-node",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/golukumarsingh11/react-js-task",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React js",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/golukumarsingh11/clock",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
