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
    "MLE at DoorDash working on the conversational AI team. I have <b>3.5+ years of experience</b> as a data scientist and ML engineer in <b>fintech and ecommerce</b>, specializing in <b>agentic AI systems</b> and <b>Large Language Models (LLMs)</b>. I engineer autonomous multi-agent architectures using <b>OpenAI GPT models</b>, <b>Bayesian time-series forecasting</b>, and <b>real-time model monitoring</b> to build intelligent systems that drive business impact. My work spans from building unified multi-modal foundation models for medical AI challenges to deploying real-time orca monitoring dashboards that contribute to open source projects. I'm passionate about pushing the boundaries of what's possible with AI and making data-driven decisions that create measurable value."
  ),
  resumeLink:
  // "https://drive.google.com/file/d/1QraEpFsoBXE4UBK7C6uOdmGAE4Vnq6Hs/view?usp=sharing", // Set to empty to hide the button
    "/Riddhesh_Sawant_Data_Scientist_Resume.pdf", // Path to your resume file in the public folder
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
  subTitle: "AGENTIC AI SPECIALIST & LLM ENGINEER BUILDING AUTONOMOUS INTELLIGENT SYSTEMS",
  skills: [
    "🤖 Engineer <b>agentic AI systems</b> with autonomous multi-agent architectures using <b>OpenAI GPT models</b> for fraud detection and business automation",
    "🧠 Build <b>Large Language Model (LLM)</b> applications and <b>multi-modal foundation models</b> for complex AI challenges like medical imaging and natural language processing",
    "⚡ Develop <b>real-time model monitoring</b> platforms with <b>Bayesian time-series forecasting</b> using <b>Orbit</b> for proactive risk management and business intelligence",
    "🚀 Deploy <b>scalable data pipelines</b> and <b>intelligent automation</b> systems that process 1,000+ applications per batch with <b>95%+ accuracy</b>",
    "🧩 <b>Core Competencies:</b> Statistical Modeling, Machine Learning, Time Series Forecasting, Causal Inference, ETL, NLP, Database Management, Distributed Computing, Data Visualization, DSA, Convex Optimization, <b>LLM Serving Systems</b>",
    "🔧 <b>Frameworks:</b> PyTorch, TensorFlow, Keras, NumPy, Pandas, Scikit‑learn, Matplotlib, Gurobi, <b>OpenAI APIs</b>, REST APIs",
    "🛠️ <b>Tools & Platforms:</b> AWS, Databricks, Docker, Git, Airflow, Snowflake, Tableau, Kubernetes, MLflow, FastAPI, Kafka, CI/CD, Retool, Mode, MS Excel",
    "💻 <b>Programming:</b> Python, R, PySpark, SQL, C++, HTML, MATLAB"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "pyspark",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "r",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "OpenAI GPT",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
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
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-sync"
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
      duration: "September 2024 - March 2026",
      descBullets: [
        "DATA 512 Human Centered Data Science",
        "DATA 516 Scalable Data Systems and Algorithms",
        "DATA 590 Data Science Capstone - 1",
        "CSE 599 LLM Serving Systems",
        "DATA 588 Machine Learning For Data Scientists",
        "STAT 538 Convex Optimisation",
        "STAT 557 Applied Statistics And Experimental Design",
        "DATA 511 Data Visualisation",
        "DATA 556 Intorduction to Probabilty and Statistics"]
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
      title: "Machine Learning Engineer",
      company: "DoorDash",
      company_url: "https://www.doordash.com/",
      logo_path: "/doordashLogo.svg",
      logoWidth: "32%",
      logoHeight: "2.25rem",
      duration: "April 2026 – Present",
      location: "San Francisco, CA, USA",
      description: "",
      descPoints: [
        "Contributing to an in-progress <b>Credit & Refund (CnR) optimization engine</b> using a <b>second-order cone programming (SOCP)</b> solver and consumer segmentation to determine fair, budget-constrained refunds while maximizing Gross Order Value (GOV); now running in live experimentation, with team-validated projections of <b>$30M in annual savings</b>.",
        "Built a <b>RAG-based agentic diagnosis and monitoring system</b> over experiment, lifecycle event, and fraud event data to streamline root-cause investigation for CnR and fraud cases; integrated directly into <b>Slack</b> for non-technical stakeholders, adopted daily by <b>30+ analysts</b>, reducing aggregate manual investigation effort by <b>4–5 hours/week</b>."
      ]
    },
    {
      title: "Data Science Intern",
      company: "Faire",
      company_url: "https://www.faire.com/",
      logo_path: require("./assets/images/faireLogo.png"),
      duration: "June 2025 – September 2025",
      location: "San Francisco, CA, USA",
      description: "",
      descPoints: [
        "Built and deployed a <b>retailer sales estimation</b> agent using <b>deep research</b>, vector embeddings, and transaction data (<b>±15% error for 80%</b> of retailers). Added a <b>calibration</b> layer for bias mitigation and monthly auto‑retraining via <b>Airflow + AWS Batch</b>, <b>reducing bad debt risk by 12%</b>.",
        "Developed an <b>AI fraud detection</b> and retailer verification system with <b>GPT‑powered multi‑agent</b> workflows, processing <b>1,000+ applications</b> per batch. Achieved <b>95%+ accuracy</b>, prevented <b>$500K+</b> fraud losses, and cut review time from <b>30 minutes</b> to <b>5 seconds</b> on scalable cloud infrastructure."
      ]
    },
    {

      
      title: "",
      company: "CRED",
      company_url: "https://cred.club/",
      logo_path: require("./assets/images/credLogo.png"),
      duration: "Jan 2021 – Aug 2024",
      location: "Bengaluru, India",
      description: "",
      positions: [
        {
          title: "Data Scientist II",
          duration: "Sep 2022 – Aug 2024",
          location: "Bengaluru, India",
          descPoints: [
            "Engineered a <b>dynamic pricing</b> framework to optimize interest rates, <b>boosting portfolio conversion by 17%</b> and driving <b>$12M</b> in incremental monthly disbursals; implemented using <b>CatBoost (AUC 0.83)</b> and <b>constraint optimization</b>.",
            "Developed a <b>contrastive learning</b> framework using a Transformer‑based sequence encoder (<b>SASRec</b> + <b>SimCLR‑style loss</b>) on user traversal data; achieved <b>92% precision</b> in identifying high‑value cohorts, enabling targeted credit scaling and <b>boosting profitability by 7%</b>.",
            "Built a <b>Bayesian time‑series forecasting</b> system (<b>Orbit</b>) to predict credit disbursal demand and default risk for a <b>$200M</b> portfolio, achieving <b>94%</b> forecast accuracy and <b>reducing default risk by 6%</b>; automated retraining and reporting, saving <b>20+ hours</b> monthly.",
            "Collaborated with product managers and risk teams to align ML outputs with <b>credit policy</b>, improving adoption across business.",
            "Deployed ML models as <b>real‑time microservices</b> using <b>AWS + Docker + Kubernetes</b>, reducing scoring latency from <b>250ms</b> to <b>50ms</b> and scaling to <b>500K+ daily requests</b>."
          ]
        },
        {
          title: "Data Scientist",
          duration: "Jun 2021 – Sep 2022",
          location: "Bengaluru, India",
          descPoints: [
            "Built a <b>personalized homepage recommendation</b> engine with gradient boosting and user segmentation, <b>increasing loan application clicks by 30%</b>.",
            "<b>Increased approval rates by 5%</b> with a liability validation model (<b>random forest, AUC 0.84</b> + linear optimization).",
            "Built a <b>real‑time monitoring</b> platform with drift detection, residual analysis, and Slack/email alerts; integrated with the <b>feature store</b> to ensure consistency across training and serving. Onboarded <b>15+ production models</b>, cutting incident response time by <b>80%</b>."
          ]
        },
        {
          title: "Data Scientist Intern",
          duration: "Jan 2021 – Jun 2021",
          location: "Bengaluru, India",
          descPoints: [
            "<b>Improved offer conversion rate by 15%</b> by designing a loan uptake <b>propensity model</b> using <b>XGBoost (AUC 0.78)</b>.",
            "Engineered in‑app/external communication triggers, contributing to <b>10%+</b> of monthly loan disbursals."
          ]
        }
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
      descPoints: ["Analyzed user behavior in-app to identify drop-off points, <b>achieving 15% enhancement</b> in funnel performance.",
        "Developed a churn prediction model using LightGBM with 0.76 AUC, <b>reducing user drop-off by 12%</b> in the next months.",
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
      descPoints: ["Developed a sentiment classification system for email communications, enhancing sales insights and customer understanding.",
        "Integrated into CRM systems for enhanced sales analytics <b>increasing user adoption by 12%</b>."
      ]
    },
    {
      title: "Software Development Intern",
      company: "NTCL",
      company_url: "http://www.ntcltd.org/",
      logo_path: require("./assets/images/ntclLogo.png"),
      duration: "May 2019 – July 2019",
      location: "Bengaluru, India",
      description: "",
      descPoints: ["Developed a forecasting model using <b>ARIMA</b> to predict future sales and optimize cotton production in mills <b>reducing wastage by 30%</b>. Created a user interface to visualize sales and company spend trends across different time periods using <b>PyQt</b>."]
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
        "Presented at AMC IMX 2022 Conference",
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
      projectName: "MICCAI UNICORN Medical AI Challenge",
      projectDesc: "Fine‑tuned open‑source healthcare models (AlphaMed, UltraMed, MedIron) and general‑purpose transformers (LLaMA, RoBERTa) via Hugging Face APIs, applying cross‑modal learning with efficient transformer backbones for pathology and radiology tasks under compute limits.",
      footerLink: [
        { name: "Lab Website", url: "https://www.kurtlab.com/" }
      ]
    },
    {
      projectName: "Underwater Acoustic Monitoring for Marine Conservation (Orcasound Project)",
      projectDesc: "Feb 2025 – Jun 2025: Developed scalable pipelines to process 3,000+ daily hydrophone recordings and deployed real‑time orca monitoring dashboards, accelerating noise trend analysis by 5x and expanding data access by 300% for 10+ research projects.",
      footerLink: [
        { name: "Git Repo", url: "https://github.com/orcasound" },
        { name: "Institute Website", url: "https://escience.washington.edu/people/affiliates-list/" }
      ]
    },
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
