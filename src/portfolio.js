/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation


// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Riddhesh Sawant",
  title: "Hi, I'm Riddhesh",
  subTitle: emoji(
    "A Data Science graduate student at the University of Washington. With a background in data science, I specialize in turning raw data into actionable insights. I've spent the last few years honing my skills in Python, PySpark, AWS, and Tableau, working on high-impact projects in the fintech space. Whether it's building machine learning models or engineering scalable data solutions, I'm passionate about solving complex problems and making data-driven decisions. Outside of work, I'm always exploring the latest tools and technologies to stay ahead in the ever-evolving world of data."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1QraEpFsoBXE4UBK7C6uOdmGAE4Vnq6Hs/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ridswnt10",
  linkedin: "https://www.linkedin.com/in/ridswnt10/",
  gmail: "ridswnt10@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DATA SCIENTIST AND ENGINEER EXPLORING THE FRONTIERS OF AI AND BIG DATA",
  skills: [
    emoji(
      "⚡ Develop and deploy machine learning models for predictive analytics and automation"
    ),
    emoji(
      "⚡ Design and optimize scalable data pipelines using tools like PySpark, SQL, and AWS"
    ),
    emoji(
      "⚡ Build end-to-end data solutions from ingestion to visualization with platforms like Tableau and Python"
    ),
    emoji(
      "⚡ Integration of cloud services such as AWS, GCP, and Databricks for seamless data operations"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "devicon-cplusplus-plain"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Washington",
      logo: require("./assets/images/udubLogo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "September 2024 - April 2026",
      descBullets: [
        "STAT 538 Convex Optimisation",
        "STAT 557 Applied Statistics And Experimental Design",
        "DATA 511 Data Visualisation",
        "DATA 556 Intorduction to Probabilty and Statistics"
    ]
    },
    {
      schoolName: "Birla Institute of Technology and Science, Pilani",
      logo: require("./assets/images/bitsLogo.png"),
      subHeader: "Bachelor of Engineering in Electronics and Communication",
      duration: "August 2017 - May 2021",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "BITS F464 Machine Learning",
        "BITS F312 Neural Networks and Fuzzy Logic",
        "EEE 435 Digital Image Processing",
        "ECE F434 Digital Signal Processing",
        "CS F213 Object Oriented Programming",
        "CS F211 Data Structures and Algorithms",
        "CS F111 Computer Programming"
    ]
    
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      title: "Senior Data Scientist",
      company: "CRED",
      company_url: "https://cred.club/",
      logo_path: require("./assets/images/credLogo.png"),
      duration: "Jan 2021 – Aug 2024",
      location: "Bengaluru, India",
      description: "",
      descPoints: ["Engineered a dynamic pricing framework to optimize interest rates, enhancing portfolio conversion by 17% and achieved $12 million in monthly incremental disbursals; implemented using CatBoost (AUC 0.83) and linear programming.",
        "Created a homepage personalization model, increasing the loan application click conversion by 30%.",
      "Built a model to validate user groups for lending, improving approval rates by 5%. Utilized linear optimization and random forest algorithms, achieving 84.5% accuracy.",
      "Created a comprehensive model monitoring platform with alert capabilities and residual analysis to proactively mitigate model drift and enable timely interventions by model owners.",
      "Led scaling of real-time services, encompassing in-app asset activations and real-time communications.",
      "Built propensity model with a 0.78 AUC to predict 30-day loan uptake, boosting user targeting and offer conversion by 15%.",
      "Engineered in-app and external communication triggers, enhancing loan application rates and contributing to over 10% of monthly loan disbursements"
    ]
    },
    {
      title: "Data Science Intern",
      company: "Niyo",
      company_url: "https://goniyo.com/",
      logo_path: require("./assets/images/niyoLogo.png"),
      duration: "August 2020 – Dec 2020",
      location: "Bengaluru, India",
      description: "",
      descPoints: ["Analyzed user behavior in-app to identify drop-off points, achieving 15% enhancement in funnel performance.","Developed a churn prediction model using LightGBM with 0.76 AUC, reducing user drop-off by 12% in the next months.",
        "Built a rule-based system for extracting SIP details from text, enhancing investment recommendations and risk assessments."
      ]
    },
    {
      title: "Data Science Intern",
      company: "Relatas",
      company_url: "https://relatas.com/",
      logo_path: require("./assets/images/relatasLogo.png"),
      duration: "July 2020 – Aug 2020",
      location: "Bengaluru, India",
      description: "",
      descPoints: ["Developed a sentiment analysis system for email communications, enhancing sales insights and customer understanding.","Integrated into CRM systems for enhanced sales analytics increasing user adpotion by 12%."]
    },
    {
      title: "Software Development Intern",
      company: "NTCL",
      company_url: "http://www.ntcltd.org/",
      logo_path: require("./assets/images/ntclLogo.png"),
      duration: "May 2019 – July 2019",
      location: "Bengaluru, India",
      description: "",
      descPoints: ["Developed a forecasting model using ARIMA to predict future sales and optimize cotton production in mills reducing wastage by 30%. Created a user interface to visualize sales and company spend trends across different time periods."]
    }
  ]
};
const achievementSection = {
  title: emoji("Publications And Certifications 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Novel EEG Features for Consumer Emotion Prediction using Correlation-Based Subset Selection",
      subtitle:
        "",
      footerLink: [
        {
          name: "Paper",
          url: "https://scholar.archive.org/work/be4rfo2htvg2jij2de5zm233my/access/wayback/https://s3-eu-west-1.amazonaws.com/pfigshare-u-files/35897120/Emotions4.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIYCQYOYV5JSSROOA/20220713/eu-west-1/s3/aws4_request&X-Amz-Date=20220713T202816Z&X-Amz-Expires=10&X-Amz-SignedHeaders=host&X-Amz-Signature=46a9ac5c142b7436715912560a2f2c034506ed0c6e96362603f95ac30c0acea6"
        }
      ]
    },
    {
      title: "Machine Learning - Coursera",
      subtitle: "",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/e60a66a714e0c29b8cc16c9ea90aa2ff"},
      ]
    },
    {
      title: "Deep Learning Specialisation - Coursera",
      subtitle:
        "",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/106fff713bac43728d9ae9599a1e4030"
        }
      ]
    },
    {
      title: "Tensorflow Specialisation - Coursera",
      subtitle: "",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/1d5ee2261742017b7cb99bcf68b536c4"},
      ]
    },
    {
      title: "SQL for DS - Coursera",
      subtitle: "",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/6955725120ed8de649928e679782ca22"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some projects and hackathons I undertook during my studies",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Apartment Recommendation System",
      projectDesc: [
        "This project won first prize in the annual Data Science Hackathon 2025. ",
        "The goal was to build an recommendation system for the Greater Seattle Area. ",
        "Applied optimization techniques and collaborative filtering to suggest top-rated apartments based on multiple factors."
      ],
      footerLink: [
        { name: "Git Repo", url: "https://github.com/ridswnt10/ds_hackathon_2025" }
        //  you can add extra buttons here.
      ],
    },
    {
      projectName: "Fantasy Football - \"Soccer\"",
      projectDesc: "A data driven team building app for users to build FPL teams using insights from different statistics.",
      footerLink: [
        {
          name: "View app",
          url: "https://fpl511.streamlit.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Unlocking Climatic Solutions using Machine Learning",
      projectDesc: "Investigated the impact of COVID-19 on climate change. Developed key performance indicators (KPIs) to assess the climatic degradation of cities linked to human activities.",
      footerLink: [
        {
          name: "View detailed report",
          url: "https://drive.google.com/file/d/1FhZjsG-J31ZJi5fnvopOPjJZcOz6BO-a/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Scintillation detection using Unsupervised Learning",
      projectDesc: "Examined the effect of scintillation on Global Navigation Satellite System (GNSS) signals",
      footerLink: [
        {
          name: "View detailed report",
          url: "https://drive.google.com/file/d/1aYUQrQHmKXIvpPlYKNeQBUlaczNao9Tn/view?usp=sharing"
        }
      ]
    },
    {
      projectName: "Underwater Image Enhancement",
      projectDesc: "Adapted the methodology from the IEEE paper by Ancuti et al. for underwater image enhancement using techniques like color balancing, sharpening, gamma correction, and wavelet transformation-based image fusion",
      footerLink: [
        {
          name: "View detailed report",
          url: "https://github.com/ridswnt10/Underwater-Image-Enhancement"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc



// Blogs Section

const blogSection = {
  title: "Blogs",
  // subtitle:
    // "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@ridswnt10/fraud-detection-in-banking-credit-cards-using-deep-reinforcement-learning-d248636bbb4e",
      title: "Fraud Detection in Banking,Credit Cards Using Deep Reinforcement Learning",
      description:
        "Reinforcing Security: Deep Learning's New Role in Combating Credit Card Fraud"
    }
    // ,
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "ridswnt10@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
