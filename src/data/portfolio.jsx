/* Change this file to get your personal Porfolio */
//Home Page
const greeting = {
  title: "Jeet Purohit ",
  logo_name: "JeetPurohit ",
  nickname: "Front-End Developer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1elc4ZSBAn1Ld3zZhe2avNr2VcTzS3-7e/view?usp=sharing",
  portfolio_repository: "public/assets/Jeet_Purohit_Resume.pdf",
  githubProfile: "https://github.com/jeetpurohit",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/jeetpurohit",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jeet-purohit-057b42261/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:jeetpurohit58@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Frontend Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building responsive and dynamic web applications using HTML, CSS, and JavaScript.",
        "⚡ Expertise in modern JavaScript frameworks, particularly React and Angular, for developing scalable and high-performance UIs.",
        "⚡ State management using Redux for efficient handling of complex application states.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:mui",
          style: {
            color: "#007FFF",
          },
        },
        {
          skillName: "Angular Material",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        }
      ],
    },
    {
      title: "Component Development & Implementation",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Converting designs from Figma or HTML mockups into functional components in React or Angular, using frameworks like Material UI, Angular Material, and custom CSS (including Tailwind CSS and SCSS).",
        "⚡ Ensuring pixel-perfect implementation of UI designs while maintaining clean and reusable code.",
        "⚡ Expertise in handling complex UI elements and ensuring design consistency across devices and screen sizes.",
      ],
      softwareSkills: [],
    },
    {
      title: "Full Stack Development (Basic Level Experience)",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing end-to-end solutions by integrating the frontend with backend services using Node.js and Express.",
        "⚡ Creating RESTful APIs and ensuring seamless communication between client-side applications and the backend.",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#00758F",
          },
        },
      ],
    },
    {
      title: "Tool Proficiency & Development Workflow",
      fileName: "DesignImg",
      skills: [
        "⚡ Proficient in using Postman for API testing and documentation, ensuring seamless integration between frontend and backend services.",
        "⚡ Skilled in version control using Git for efficient collaboration and code management in team environments.",
        "⚡ Experienced in using Visual Studio Code as a primary code editor, utilizing extensions to enhance productivity and streamline development processes.",
        "⚡ Familiar with development tools and workflows that promote agile practices and continuous integration.",
      ],
      softwareSkills: [
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#EF5B25",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "MySQL Workbench",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#00758F",
          },
        },
        {
          skillName: "Visual Studio Code",
          fontAwesomeClassname: "simple-icons:visualstudio",
          style: {
            color: "#007ACC",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "React",
      iconifyClassname: "simple-icons:react",
      style: {
        color: "#00d8ff",
      },
      profileLink: "https://react.dev/",
    },
    {
      siteName: "Angular",
      iconifyClassname: "simple-icons:angular",
      style: {
        color: "#dd0031",
      },
      profileLink: "https://angular.dev/",
    },
    {
      siteName: "Redux",
      iconifyClassname: "simple-icons:redux",
      style: {
        color: "#764abc",
      },
      profileLink: "https://redux.js.org/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dr. Subhash University Junagadh",
      subtitle: "Bachelor Of Computer Engineering – GTU",
      logo_path: "dstc.png",
      alt_name: "Dr. Subhash University",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ Developed a strong understanding of advanced topics such as Operating Systems, Distributed Systems, Artificial Intelligence, and Machine Learning, enabling me to build scalable and efficient solutions.",
        "⚡ Worked on large-scale projects on full-stack web development using modern technologies like React, Node.js, and MongoDB.",
        "⚡ Gained in-depth knowledge of database systems, implementing complex SQL queries, optimizing databases, and working with NoSQL databases such as MongoDB and Cassandra.",
      ],
      website_link: "https://dsuni.ac.in/",
    },
    {
      title: "Dr. Subhash University Junagadh",
      subtitle: "Diploma Computer Engineering - GTU",
      logo_path: "dstc.png",
      alt_name: "Dr. Subhash University",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ Gained hands-on experience in software development through practical labs on languages such as C, C++, Java, and Python, fostering a strong understanding of object-oriented programming.",
        "⚡ Worked on various projects, including web development, database management, and basic networking setups, enhancing technical and problem-solving skills.",
        "⚡ Actively participated in technical workshops and seminars on emerging technologies like IoT, cybersecurity, and cloud computing, expanding knowledge of modern computing trends.",
      ],
      website_link: "https://dsuni.ac.in/",
    },
  ],
};

const mySkills = {
  skills: [
    {
      title: "HTML",
      subtitle: "- Markup Language",
      fontAwesomeClassname: "simple-icons:html5",
      skill_link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      alt_name: "HTML",
      color_code: "#E34F26",
    },
    {
      title: "CSS",
      subtitle: "- Styling Language",
      fontAwesomeClassname: "simple-icons:css3",
      skill_link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      alt_name: "CSS",
      color_code: "#1572B6",
    },
    {
      title: "JavaScript",
      subtitle: "- Programming Language",
      fontAwesomeClassname: "simple-icons:javascript",
      skill_link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      alt_name: "JavaScript",
      color_code: "#F7DF1E",
    },
    {
      title: "React",
      subtitle: "- JavaScript Library",
      fontAwesomeClassname: "simple-icons:react",
      skill_link: "https://reactjs.org/",
      alt_name: "React",
      color_code: "#61DAFB",
    },
    {
      title: "Angular",
      subtitle: "- JavaScript Framework",
      fontAwesomeClassname: "simple-icons:angular",
      skill_link: "https://angular.io/",
      alt_name: "Angular",
      color_code: "#DD0031",
    },
    {
      title: "Material UI",
      subtitle: "- React UI Framework",
      fontAwesomeClassname: "simple-icons:mui",
      skill_link: "https://mui.com/",
      alt_name: "Material UI",
      color_code: "#007FFF",
    },
    {
      title: "Angular Material",
      subtitle: "- Angular UI Component Library",
      fontAwesomeClassname: "simple-icons:angular",
      skill_link: "https://material.angular.io/",
      alt_name: "Angular Material",
      color_code: "#DD0031",
    },
    {
      title: "Redux",
      subtitle: "- State Management Library",
      fontAwesomeClassname: "simple-icons:redux",
      skill_link: "https://redux.js.org/",
      alt_name: "Redux",
      color_code: "#764ABC",
    },
    {
      title: "Bootstrap",
      subtitle: "- CSS Framework",
      fontAwesomeClassname: "simple-icons:bootstrap",
      skill_link: "https://getbootstrap.com/",
      alt_name: "Bootstrap",
      color_code: "#7952B3",
    },
    {
      title: "Node.js",
      subtitle: "- JavaScript Runtime",
      fontAwesomeClassname: "simple-icons:nodedotjs",
      skill_link: "https://nodejs.org/en/",
      alt_name: "Node.js",
      color_code: "#339933",
    },
    {
      title: "React Native",
      subtitle: "- Mobile Framework",
      fontAwesomeClassname: "simple-icons:react",
      skill_link: "https://reactnative.dev/",
      alt_name: "React Native",
      color_code: "#61DAFB",
    },
    {
      title: "Git",
      subtitle: "- Version Control System",
      fontAwesomeClassname: "simple-icons:git",
      skill_link: "https://git-scm.com/",
      alt_name: "Git",
      color_code: "#F05032",
    },
    {
      title: "VS Code",
      subtitle: "- Code Editor",
      fontAwesomeClassname: "simple-icons:visualstudio",
      skill_link: "https://code.visualstudio.com/",
      alt_name: "VS Code",
      color_code: "#007ACC",
    },
    {
      title: "Sublime Text",
      subtitle: "- Text Editor",
      fontAwesomeClassname: "simple-icons:sublimetext",
      skill_link: "https://www.sublimetext.com/",
      alt_name: "Sublime Text",
      color_code: "#FF9800",
    },
    {
      title: "Postman",
      subtitle: "- API Development Tool",
      fontAwesomeClassname: "simple-icons:postman",
      skill_link: "https://www.postman.com/",
      alt_name: "Postman",
      color_code: "#FF6C37",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internship",
  description:
    "I have been working as a React JS and Angular Developer, building responsive web applications and enhancing user interfaces. My role involves collaborating with teams to improve performance and deliver efficient solutions. I'm also passionate about contributing to open-source projects and staying updated with the latest technologies.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "React JS Developer",
          company: "Tech Avidus",
          company_url: "https://www.techavidus.com/",
          logo_path: "deltafixes.jfif",
          duration: "Jan 2024 - Present",
          location: "Ahmedabad, Gujarat, India",
          description:
            "Contributing to front-end development projects using React JS and Angular, collaborating with cross-functional teams to deliver responsive and scalable web applications. Focused on enhancing user experience and implementing best coding practices.",
          color: "#000000",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Intern",
          company: "Glysis Software",
          company_url: "https://glysissoftware.com/",
          duration: "Jan 2023 - Dec 2023",
          location: "Ahmedabad, Gujarat, India",
          description:
            "Assisted in front-end development with React JS, working closely with senior developers to build responsive web applications. Gained hands-on experience in coding, debugging, and optimizing user interfaces.",
          color: "#000000",
        }
      ],
    }
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create React projects and deploy them to web applications using Vercel.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  
};

const publications = {
  data: [
    // {
    //   id: "dpl-frontend",
    //   name: "DPL 11",
    //   createdAt: "2024-04-13T00:00:00Z",
    //   description: "Frontend and backend for team predictions.",
    //   url: "https://dpl11.vercel.app/",
    // },
    // {
    //   id: "unstop",
    //   name: "Unstop Demo",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Elevate CSS, convert Figma, build React SPAs.",
    //   url: "https://unstopdemo.netlify.app/",
    // },
    // {
    //   id: "react-crud",
    //   name: "React CRUD",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "React app for efficient CRUD operations.",
    //   url: "https://reactcruddemo.netlify.app/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vivek.jpg",
    description:
      "I'm always here to connect! You can reach out to me on nearly all social media platforms, and I strive to respond within 24 hours, so don’t hesitate to send me a message.Whether you have questions or need assistance with React, Angular, Node.js, Material-UI, Angular Material, or Redux, I’m eager to help. Let’s collaborate and bring your ideas to life!",
  },
  addressSection: {
    title: "Address",
    subtitle: "Gandhinagar, Gujarat, India 360510",
    locality: "Gandhinagar",
    country: "India",
    region: "Gandhinagar",
    postalCode: "360510",
    // streetAddress: "Sai Devaliya",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Gandhinagar,",
  },
  phoneSection: {
    title: "Contact Me",
    subtitle: "9662834999",
  },
};

export { competitiveSites, contactPageData, degrees, experience, greeting, mySkills, projectsHeader, publications, publicationsHeader, skills, socialMediaLinks };
