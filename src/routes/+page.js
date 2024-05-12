export const load = ({ fetch }) => {
    const sites = [
        {
            url: "https://fantasyworlds.com",
            imgUrl: "https://fantasyworlds.com/image.jpg",
            name: "Ethereal Realms",
            description:
            "A portal to magical realms filled with wonder and enchantment.",
            dateUploaded: "2023-11-24",
            status: "active",
        },
        {
            url: "https://galacticexplorers.net",
            imgUrl: "https://galacticexplorers.net/image.jpg",
            name: "Cosmic Voyagers",
            description:
            "Embark on interstellar journeys to explore the mysteries of the universe.",
            dateUploaded: "2023-11-23",
            status: "active",
        },
        {
            url: "https://ancientadventures.org",
            imgUrl: "https://ancientadventures.org/image.jpg",
            name: "Legends of Antiquity",
            description:
            "Uncover lost civilizations and ancient artifacts in thrilling expeditions.",
            dateUploaded: "2023-11-22",
            status: "inactive",
        },
        {
            url: "https://magicalrecipesbook.com",
            imgUrl: "https://magicalrecipesbook.com/image.jpg",
            name: "Spellbound Cookery",
            description:
            "Discover recipes from realms where food is crafted with mystical ingredients.",
            dateUploaded: "2023-11-21",
            status: "active",
        },
        {
            url: "https://mythicalmenagerie.com",
            imgUrl: "https://mythicalmenagerie.com/image.jpg",
            name: "Mythical Menagerie",
            description:
            "Encounter and learn about creatures from myths, legends, and folklore.",
            dateUploaded: "2023-11-20",
            status: "inactive",
        },
        {
            url: "https://enchantedgardens.org",
            imgUrl: "https://enchantedgardens.org/image.jpg",
            name: "Enchanted Gardens",
            description:
            "Explore gardens where plants possess magical qualities and astonishing beauty.",
            dateUploaded: "2023-11-19",
            status: "active",
        },
        {
            url: "https://timelesstalesarchive.com",
            imgUrl: "https://timelesstalesarchive.com/image.jpg",
            name: "Timeless Tales Archive",
            description:
            "An archive of stories that transcend time, transporting readers to varied epochs.",
            dateUploaded: "2023-11-18",
            status: "inactive",
        },
        {
            url: "https://secretsoftheunseen.com",
            imgUrl: "https://secretsoftheunseen.com/image.jpg",
            name: "Secrets of the Unseen",
            description:
            "Revealing the hidden secrets and mysteries of the invisible realms.",
            dateUploaded: "2023-11-17",
            status: "active",
        },
        {
            url: "https://mythicalmapsandpaths.com",
            imgUrl: "https://mythicalmapsandpaths.com/image.jpg",
            name: "Mythical Maps & Paths",
            description:
            "Guiding adventurers through mystical terrains and legendary landscapes.",
            dateUploaded: "2023-11-16",
            status: "inactive",
        },
        {
            url: "https://otherworldlyobjects.com",
            imgUrl: "https://otherworldlyobjects.com/image.jpg",
            name: "Otherworldly Objects Emporium",
            description:
            "Collecting and showcasing extraordinary artifacts from parallel dimensions.",
            dateUploaded: "2023-11-15",
            status: "active",
        },
    ];

const prospects = [
  {
    projectId: "P001",
    name: "Virtual Reality Social Platform",
    description: "Develop a Virtual Reality-based social platform that enables users to interact in a simulated environment. Users can create personalized avatars, explore virtual spaces, attend events, and engage in social interactions through voice, gestures, and text.",
    summary: "VR-based social platform for immersive interactions.",
    votes: 120,
    status: "Under Review",
    type: "Web",
  },
  {
    projectId: "P002",
    name: "AI-Powered Personal Assistant App",
    description: "Design and implement an AI-driven personal assistant application that utilizes natural language processing and machine learning to understand user commands, manage schedules, set reminders, provide suggestions, and adapt to user preferences over time.",
    summary: "AI-driven personal assistant app for task management.",
    votes: 90,
    status: "Considering",
    type: "Mobile",
  },
  {
    projectId: "P003",
    name: "Blockchain-based Supply Chain Solution",
    description: "Create a decentralized blockchain solution for supply chain management, ensuring transparency, traceability, and security throughout the entire supply chain process. Implement smart contracts to automate and streamline transactions.",
    summary: "Blockchain-based solution for secure supply chain management.",
    votes: 75,
    status: "Pending Approval",
    type: "Code Module",
  },
  {
    projectId: "P004",
    name: "Smart Home Automation Integration",
    description: "Develop a system that integrates various smart home devices (IoT) into a unified automation platform. Enable users to control devices, set routines, and monitor their home remotely via a centralized application.",
    summary: "Integration of IoT devices for smart home automation.",
    votes: 110,
    status: "Under Evaluation",
    type: "Web",
  },
  {
    projectId: "P005",
    name: "Healthcare Chatbot for Diagnosis",
    description: "Build an AI-powered chatbot capable of conversing with users to gather symptoms, analyze medical history, and provide preliminary diagnoses or suggest appropriate healthcare services. Ensure compliance with medical regulations.",
    summary: "AI chatbot aiding in healthcare diagnosis.",
    votes: 85,
    status: "Exploratory Phase",
    type: "Web",
  },
  {
    projectId: "P006",
    name: "E-commerce Recommendation Engine",
    description: "Create a recommendation system using machine learning algorithms to provide personalized product recommendations to users based on their browsing history, preferences, and behavior on the e-commerce platform.",
    summary: "Personalized product recommendations for e-commerce.",
    votes: 100,
    status: "Feasibility Study",
    type: "Web",
  },
  {
    projectId: "P007",
    name: "Augmented Reality Gaming App",
    description: "Develop an Augmented Reality gaming application that merges virtual elements with the real world. Users can experience interactive gameplay overlaying the physical environment using their smartphones or AR devices.",
    summary: "AR-based gaming app offering interactive experiences.",
    votes: 150,
    status: "Planning Stage",
    type: "Mobile",
  },
  {
    projectId: "P008",
    name: "Cloud-Based Collaborative Workspace",
    description: "Create a cloud-based platform that facilitates seamless collaboration among team members. Features include document sharing, real-time editing, task management, and communication tools.",
    summary: "Cloud platform for team collaboration.",
    votes: 80,
    status: "Investigation Phase",
    type: "Web",
  },
  {
    projectId: "P009",
    name: "Data Visualization Dashboard",
    description: "Design a dynamic and interactive dashboard for visualizing complex datasets. Provide multiple visualization options (charts, graphs, maps) to help users analyze and derive insights from the data.",
    summary: "Interactive dashboard for data visualization.",
    votes: 95,
    status: "Conceptualization",
    type: "Web",
  },
  {
    projectId: "P010",
    name: "AI-Enhanced Educational Platform",
    description: "Develop an adaptive learning platform using AI algorithms to personalize the learning experience for users. Provide content recommendations, adaptive assessments, and progress tracking.",
    summary: "AI-driven platform for personalized education.",
    votes: 70,
    status: "Evaluation Ongoing",
    type: "Web",
  },
  // ... (other projects with detailed descriptions, summaries, and types)
];


  const sitesFiltered = sites.slice(0, 3);
  return {
    sites: sitesFiltered,
    prospects: prospects
  };
};
