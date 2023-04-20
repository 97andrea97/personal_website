// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Andrea",
  middleName: "",
  lastName: "Espis",
  message: " Passionate about medicine and technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/97andrea97",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/andrea-espis/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/andrea_photo.png"),
  imageSize: 375,
  message:
    "My name is Andrea Espis. I am a Ph.D. student at the University of Bologna, developing frameworks beyond supervised deep learning for percision medicine! I have a Master's Degree in Artificial Intelligence and a Bachelor's Degree in Biomedical Engineering. I'm most passionate about learning and developing, and my goal is to improve people's life by implementing AI tools for medicine. In my free time I like reading, traveling, doing sport, tutoring students, spending time with my wonderful family and developing personal projects.",
  resume: "https://drive.google.com/file/d/1zUWOZWNLkQ_Fam2haIbTG0V-4pII3i__/view",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Some of my Projects (the most interesting one that I can make publicly available are coming soon...)",
  gitHubUsername: "97andrea97", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: ["ECG_peak_detectors_MATLAB", "Conditional-Face-Generation-ACGAN", "Neural-Network-Numpy", "Covid19_Bayesian_Network", "QA_BiDAF", "Fact_checking_NLP"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/andrea_photo.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/andrea_photo.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 60 },
    { name: "Data Structures", value: 80 },
    { name: "C", value: 60 },
    { name: "MATLAB", value: 60 },
    { name: "Scala", value: 50 },
    { name: "Prolog", value: 20 },
    { name: "Contstraint Optimization Programming", value: 80},
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 90 },
    { name: "Empathy", value: 100 },
    { name: "Organization", value: 100 },
    { name: "Creativity", value: 90 },
    { name: "Leadership", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for an internship where I can develop deep learning frameworks for precision medicine! If you know of any positions available, if you have any questions, or if you just want to say hi and exchange ideas, please feel free to email me at",
  email: "97andreaespis@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
