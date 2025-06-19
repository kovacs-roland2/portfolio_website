import type {
  HomeContent,
  ContactContent,
  ToolsContent,
  ExperienceContent,
  ProjectsContent,
} from '../types';

// Home page content
export const homeContent: HomeContent = {
  title: 'Hello, I am Roland!',
  description: `I am a Data Scientist with 3 years of experience delivering predictive Machine Learning models,
  Natural Language Processing systems and Generative AI solutions. I am skilled in building and maintaining statistical
  forecasting models, extracting insights from large structured and unstructured datasets, and communicating results
  to analytical and non-analytical business partners and stakeholders. I am Experienced in the full data science lifecycle,
  from problem scoping and data preparation to model deployment and performance tracking. I am Passionate about using data
  to solve complex problems, drive business value, and continuously improve decision-making processes.`,
} as const;

// Contact information
export const contactContent: ContactContent = [
  {
    href: 'https://github.com/kovacs-roland2',
    icon: 'fab fa-github',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/roland-kovacs96/',
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
  },
  {
    href: 'https://medium.com/@rolandkovcs_38012',
    icon: 'fab fa-medium',
    label: 'Medium',
  },
  {
    href: 'mailto:koviroli96@gmail.com',
    icon: 'fas fa-envelope',
    label: 'Email',
  },
] as const;

// About page content
export const aboutMeContent: string =
  `I'm Roland Kovacs, a Data Scientist with a passion for turning raw data into actionable insights. 
I got a Master's degree in Business Informatics from Budapest University of Technology and Economics, 
with a specialization in using machine learning, data analysis and statistical techniques to solve complex problems. 
I have experience working at IBM where I built predictive models, developed web applications, 
and applied Natural Language Processing to optimize user experience. I'm comfortable in Python, Machine Learning, 
React, and Data Visualization tools. In addition to technical expertise, I also have a strong interest in football analytics. 
I have written research papers on player transfers and career development. When I'm not working with data 
I also enjoy playing football, hiking, and cycling.` as const;

// Technical skills and tools
export const tools: ToolsContent = [
  {
    key: 'Programming languages:',
    values: ['Python', 'R', 'SQL'],
  },
  {
    key: 'Web development:',
    values: ['JavaScript', 'React', 'Next.js', 'TypeScript'],
  },
  {
    key: 'Frameworks:',
    values: [
      'Django',
      'FastAPI',
      'scikit-learn',
      'Tensorflow',
      'Pytorch',
      'LangChain',
    ],
  },
  {
    key: 'Data visualization:',
    values: ['Tableau', 'PowerBI', 'Matplotlib', 'Seaborn'],
  },
  {
    key: 'Tools/Platforms:',
    values: ['AWS', 'Git', 'Docker', 'CI/CD'],
  },
] as const;

// Professional experience
export const experience: ExperienceContent = [
  {
    company: 'IBM',
    location: 'Budapest, Hungary',
    title: 'Data Scientist',
    period: 'Apr 2022 - Apr 2025',
    responsibilities: [
      'Developed predictive machine learning model to forecast customer decisions at the end of their lease or loan lifecycle, improving revenue forecasting accuracy by 15%.',
      'Implemented clustering model to analyze sales opportunities, uncovering patterns in client behavior and enabling prioritization of high-value deals.',
      'Created and maintained NLP models and pipelines to analyze internal ticketing data, identifying root causes of recurring system issues and achieving a 10% year-to-date reduction in ticket volume.',
      "Built a Generative AI assistant using Retrieval-Augmented Generation (RAG) and LLMs, improving analysts' productivity and accelerating access to internal knowledge bases.",
      'Delivered presentations and reports to global stakeholders, translating complex data into actionable insights and raising awareness of system bottlenecks through analysis of 1,000+ error messages.',
    ],
  },
  {
    company: 'IBM',
    location: 'Budapest, Hungary',
    title: 'Business Analyst',
    period: 'Jun 2018 - Apr 2022',
    responsibilities: [
      'Developed interactive web application frontends and implemented image-based search functionality, resulting in a 35% increase in active user engagement.',
      'Developed financial SQL queries for audit, ensuring accuracy and compliance with regulatory standards.',
      'Collaborated closely with cross-functional teams and stakeholders to interpret and resolve customer-reported incidents, effectively communicated findings, and delivered solutions to improve user experience.',
      'Automated data migration workflows using Python and Selenium, eliminating 100+ hours of manual work.',
    ],
  },
] as const;

// Projects portfolio
export const projectsData: ProjectsContent = [
  {
    title:
      'Spotting turning points in football team performance with Bayesian Inference',
    image: '/bayesian.png',
    description:
      'In this article, I used Bayesian Inference to spot turning points in football team performance.',
    link: 'https://medium.com/@rolandkovcs_38012/spotting-turning-points-in-football-team-performance-with-bayesian-inference-091bc21064e4',
  },
  {
    title: 'Visualising shots using football match event data in Python',
    image: '/shots_plot.jpg',
    description:
      'This article describes how you can create you own shot map in Python using football match event data.',
    link: 'https://medium.com/@rolandkovcs_38012/visualising-shots-using-football-match-event-data-in-python-9366f511d0b0',
  },
  {
    title: 'Visualising passes of players with football event data in Python',
    image: '/passes_plot.jpg',
    description:
      "This article describes how you can visualise players' passes in Python using football match event data.",
    link: 'https://medium.com/@rolandkovcs_38012/visualising-passes-of-players-with-football-event-data-in-python-7829adab5904',
  },
  {
    title: 'A career handbook for professional soccer players',
    image: '/career_handbook.png',
    description:
      'In this article, we created a recommendation tool that helps soccer players to find what needs to be improved in order to achieve their desired goals.',
    link: 'https://journals.sagepub.com/doi/10.1177/17479541231155598',
  },
  {
    title: 'Predicting player transfers in the small world of football',
    image: '/network.png',
    description:
      'In this article, we analyzed the naturally developed networks in the world of football and developed a transfer prediction classification model using its features.',
    link: 'https://www.researchgate.net/publication/355207733_Predicting_player_transfers_in_the_small_world_of_football',
  },
] as const;
