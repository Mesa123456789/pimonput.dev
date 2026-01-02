// src/data/projectsData.ts

export type MediaType = "image" | "video";
export type AspectRatio = "16x9" | "3x4";
export type ProjectCategory = "game" | "design" | "event";
export type ProjectSection = "main" |"competition";

export interface Media {
  type: MediaType;
  src: string;
}

export interface ProjectModalData {
  title: string;
  year?: string;
  aspect: AspectRatio;
  media: Media[];
  description: string; // ข้อความยาวทั้งหมด
  tech: string[]; // tech list
  links?: {
    label: string;
    url: string;
  }[];
}

export interface ProjectData {
  id: string;
  category: ProjectCategory; // ใช้แยก Game / Design
  section: ProjectSection; // ใช้แยก หน้าหลัก / หน้าแข่งขัน

  thumbnail: string;
  cardTitle: string;
  cardSubtitle: string;

  modal: {
    title: string;
    year?: string;
    aspect: "16x9" | "3x4";
    media: { type: "image" | "video"; src: string }[];
    description: string;
    tech: string[];
    links?: { label: string; url: string }[];
  };
}

export const projectsData: ProjectData[] = [
  {
    id: "let-him-cook",
    category: "game",
    section: "main",
    thumbnail: "/images/portfolio/let-him-cook-thumb.png",
    cardTitle: "Let Him Cook",
    cardSubtitle: "Adventure Cooking · Unity (C#)",

    modal: {
      title: "Let Him Cook",
      year: "2024",
      aspect: "16x9",
      media: [
        { type: "image", src: "/images/portfolio/modals/lethimcook1.png" },
        { type: "image", src: "/images/portfolio/modals/lethimcook2.png" },
        { type: "image", src: "/images/portfolio/modals/lethimcook3.png" },
        { type: "image", src: "/images/portfolio/modals/lethimcook4.png" },
        { type: "image", src: "/images/portfolio/modals/lethimcook5.png" },
        { type: "video", src: "/videos/lethimcook.mp4" },
      ],
      description: `
A Cooking Simulation – Adventure RPG game.
Players take the role of a traveling chef who must collect rare ingredients to complete cooking quests.
— Explore maps, hunt monsters, fish, and gather materials to craft dishes within time limits.
— Developed with Unity (C#). My role: Lead Programmer — gameplay mechanics, systems integration, overall programming.
      `.trim(),
      tech: ["Unity", "C#", "Lead Programmer"],
      links: [
        {
          label: "Explore the project on GitHub",
          url: "https://github.com/Mesa123456789/LETHIMCOOK3",
        },
      ],
    },
  },
  {
    id: "sent-it",
    category: "game",
    section: "main",
    thumbnail: "/images/portfolio/sent-it-thumb.png",
    cardTitle: "Sent It",
    cardSubtitle: "Delivery Simulation · Unity (C#)",

    modal: {
      title: "Sent It",
      year: "2025",
      aspect: "16x9",
      media: [{ type: "video", src: "/videos/1016.mp4" }],
      description: `
A Delivery Simulation – Puzzle Strategy game.
Players work as delivery staff for a mysterious company, tasked with packing,
verifying, and delivering packages within time limits.
— Features include a time management system, realistic physics-based packing, and day–night shop cycles.
      `.trim(),
      tech: ["Unity", "Lead Programmer"],
      links: [
        {
          label: "Explore the project on GitHub",
          url: "https://github.com/Mesa123456789/THEEXPRESS2025",
        },
      ],
    },
  },
  {
    id: "animals-trekking",
    category: "game",
    section: "main",
    thumbnail: "/images/portfolio/modals/animaltrekking.png",
    cardTitle: "Animals Trekking",
    cardSubtitle: "Hybrid Casual · Unity (C#)",

    modal: {
      title: "Animals Trekking",
      year: "2024",
      aspect: "3x4",
      media: [{ type: "video", src: "/videos/AnimalTrekking.mp4" }],
      description: `
A hybrid-casual mobile game that blends endless running, base building, and multiplayer racing.
Players join an initiation-style run up Doi Suthep, dodging obstacles, collecting resources, and competing for the highest score each run while upgrading their camp.
— Designed and implemented core gameplay systems, resource and upgrade mechanics, and multiplayer race flow.
— Developed with Unity (C#). My role: Lead Programmer.
      `.trim(),
      tech: ["Unity", "C#", "Lead Programmer", "Mobile"],
    },
  },
  {
    id: "withbonnie",
    category: "game",
    section: "main",
    thumbnail: "/images/portfolio/modals/WithBonnie (1).png",
    cardTitle: "WithBonnie",
    cardSubtitle: "Delivery Management · In Development",

    modal: {
      title: "WithBonnie",
      aspect: "16x9",
      media: [{ type: "video", src: "/videos/withbonnie.mp4" }],
      description: `
WithBonnie is an in-development delivery management game.
— Players run a small delivery shop, buying ingredients and supplies to keep stock, preparing parcels, anddelivering them across multiple maps under time pressure. Each package has a quality value that can drop ifit is dropped from heights, gets wet, or is not kept cold when required, causing items to spoil.
— The current build focuses on core mechanics: shop and stock management, delivery scheduling,package quality and damage systems, and multi-map delivery flow. Art direction, UI polish, and final visualstyle will be developed in later stages while the gameplay systems are already functional.
      `.trim(),
      tech: [
        "Unity",
        "Lead Programmer",
        "Core Gameplay Programming",
        "System & Economy Design",
      ],
      links: [
        {
          label: "Click here to view project presentation",
          url: "https://www.canva.com/design/DAG4G4e45jc/p3BRJ0JmSdgXnSMkOaupKA/view",
        },
      ],
    },
  },
  {
    id: "unreal-cleaning-horror",
    category: "game",
    section: "main",
    thumbnail: "/images/portfolio/modals/662110157-1.png",
    cardTitle: "Unreal Cleaning Horror",
    cardSubtitle: "Game Development · Unreal Engine",

    modal: {
      title: "Unreal Cleaning Horror",
      aspect: "16x9",
      media: [{ type: "video", src: "/videos/cleangame.mp4" }],
      description: `
A story-driven cleaning horror prototype built in Unreal Engine.
— Gameplay combines third-person exploration with first-person interaction. Players take the role of a cleanertrapped in a haunted building, completing quests such as cleaning rooms, putting items in the correct place,
and repairing broken lights while being hunted by ghost AI.
— The game features a quest system, item validation (deliver the correct objects), and a narrative that progressesthrough environmental storytelling. The player must complete all cleaning quests and collect every storyfragment to unlock the true ending.
      `.trim(),
      tech: [
        "Unreal Engine",
        "Blueprint Scripting",
        "Lead Programmer",
        "AI Behavior & Navigation",
        "Game Design & Level Scripting",
      ],
    },
  },
  {
    id: "unreal-anomaly-vr",
    category: "game",
    section: "main",
    thumbnail: "/images/portfolio/modals/662110157-3.png",
    cardTitle: "Unreal Anomaly Hunt VR",
    cardSubtitle: "Game Development · Unreal + VR",

    modal: {
      title: "Unreal Anomaly Hunt VR",
      aspect: "16x9",
      media: [
        { type: "video", src: "/videos/ananomygame1.mp4" },
        { type: "video", src: "/videos/ananomygame2.mp4" },
      ],
      description: `
A collaborative Unreal Engine project that supports both third-person and VR gameplay.
— Players investigate a mysterious room and search for abnormal objects — items that are duplicated,distorted, or out of place. To survive and progress to the next day, all anomalies must be found and thrown away.
— The project focuses on atmosphere, subtle storytelling, and tension built through repeated daily loops.My contributions included VR interaction logic, object detection rules, level scripting, and gameplay flow.
      `.trim(),
      tech: [
        "Unreal Engine",
        "VR Interaction",
        "Lead Programmer",
        "Blueprint Scripting",
        "Level Design & Gameplay Flow",
      ],
    },
  },
   {
    id: "animals-trekking",
    category: "game",
    section: "main",
    thumbnail: "/images/portfolio/modals/animaltrekking.png",
    cardTitle: "Animals Trekking",
    cardSubtitle: "Hybrid Casual · Unity (C#)",

    modal: {
      title: "Animals Trekking",
      year: "2024",
      aspect: "3x4",
      media: [{ type: "video", src: "/videos/AnimalTrekking.mp4" }],
      description: `
A hybrid-casual mobile game that blends endless running, base building, and multiplayer racing.
Players join an initiation-style run up Doi Suthep, dodging obstacles, collecting resources, and competing for the highest score each run while upgrading their camp.
— Designed and implemented core gameplay systems, resource and upgrade mechanics, and multiplayer race flow.
— Developed with Unity (C#). My role: Lead Programmer.
      `.trim(),
      tech: ["Unity", "C#", "Lead Programmer", "Mobile"],
    },
  },
  {
    id: "Resume Website",
    category: "game",
    section: "main",
    thumbnail: "/images/Web/1_1.png",
    cardTitle: "Resume Website",
    cardSubtitle: "Frontend Developer · UX/UI Design",

    modal: {
      title: "Resume Website",
      aspect: "16x9",
      media: [
        { type: "image", src: "/images/Web/1_1.png" },
        { type: "image", src: "/images/Web/1_2.png" },
        { type: "image", src: "/images/Web/1_3.png" },
        { type: "image", src: "/images/Web/1_4.png" },
        { type: "image", src: "/images/Web/1_5.png" },
        { type: "image", src: "/images/Web/1_6.png" },
      ],
      description: `
Designed and developed a modern portfolio website using React + TypeScript to showcase game development projects, hackathon awards, and professional experience. The site emphasizes a minimal glassmorphism UI, smooth animations, and clear UX flow.
— Built using React, TypeScript, Tailwind CSS, Vite, and Firebase.
— Focused on UX/UI, layout design, responsiveness, and content organization
— Implemented contact form with backend email sending
      `.trim(),
      tech: [
        "Lead Programmer",
        "Frontend Developer",
        "UX/UI Design",
      ],
    },
  },
    {
    id: "Resume Website (prototype)",
    category: "game",
    section: "main",
    thumbnail: "/images/Web/2_1.png",
    cardTitle: "Resume Website (prototype)",
    cardSubtitle: "Frontend Developer · UX/UI Design",

    modal: {
      title: "Resume Website (prototype)",
      aspect: "16x9",
      media: [
        { type: "image", src: "/images/Web/2_1.png" },
        { type: "image", src: "/images/Web/2_2.png" },
        { type: "image", src: "/images/Web/2_3.png" },
        { type: "image", src: "/images/Web/2_4.png" },
        { type: "image", src: "/images/Web/2_5.png" },
      ],
      description: `
Designed and developed my own resume website to showcase personal information, skills, and project portfolio. The website emphasizes clean visual design, structured content, and responsive layout for different screen sizes.
— Built using HTML, CSS, JavaScript and Firebased
— Focused on UX/UI, layout design, responsiveness, and content organization
— Implemented contact form with backend email sending
      `.trim(),
      tech: [
        "Lead Programmer",
        "Frontend Developer",
        "UX/UI Design",
      ],
      links: [
        {
          label: "Click here to view project presentation",
          url: "https://mesa123456789.github.io/",
        },
      ],
    },
  },
  {
    id: "ggj-poster",
    category: "design",
    section: "main",
    thumbnail: "/images/portfolio/ggj-poster-thumb.png",
    cardTitle: "Global Game Jam Poster",
    cardSubtitle: "Graphic Design · Faculty Event",

    modal: {
      title: "Global Game Jam Poster",
      aspect: "3x4",
      media: [{ type: "image", src: "/images/portfolio/ggj-poster-thumb.png" }],
      description: `
Collaborated with a five-member team to design the official event poster for Global Game Jam at CAMT,Chiang Mai University. 
— The poster was created with Adobe Illustrator under the theme “Lanna”.
    `.trim(),
      tech: ["Graphic Design", "Poster"],
    },
  },
   {
    id: "nouv-brand",
    category: "design",
    section: "main",
    thumbnail: "/images/portfolio/nouv.png",
    cardTitle: "Ad Graphic for NOUV Brands",
    cardSubtitle: "Graphic Design · Event Branding",

    modal: {
      title: "Ad graphic for NOUV",
      aspect: "3x4",
      media: [
        { type: "image", src: "/images/portfolio/modals/NOUV-2.png" },
        { type: "image", src: "/images/portfolio/modals/NOUV-1.png" },
        { type: "image", src: "/images/portfolio/modals/NOUV-3.png" },
        { type: "video", src: "/videos/nouv2.MOV" },
        { type: "video", src: "/videos/nouv1.MOV" },
      ],
      description: `
Produced online fashion content and marketing visuals for the NOUV brand.
— Responsibilities included designing promotional graphics and editing promotional videosto enhance online audience engagement.
    `.trim(),
      tech: ["Graphic Design", "Content Creator", "Video Editing", "Marketing"],
      links: [
        {
          label: "Click here to watch more content created",
          url: "https://drive.google.com/drive/folders/184dcqlS0J35qQg6bIYP-oI8KH-8K8vYs",
        },
      ],
    },
  },
  {
    id: "3d-architecture-pack",
    category: "design",
    section: "main",
    thumbnail: "/images/portfolio/modals/Final_3D Evironment 2.png",
    cardTitle: "3D Medieval Architecture Pack",
    cardSubtitle: "3D Art · Environment Design",

    modal: {
      title: "3D Architecture Pack",
      year: "2025",
      aspect: "16x9",
      media: [
        {
          type: "image",
          src: "/images/portfolio/modals/Final_3D Evironment 1.png",
        },
        {
          type: "image",
          src: "/images/portfolio/modals/Final_3D Evironment 2.png",
        },
        {
          type: "image",
          src: "/images/portfolio/modals/Final_3D Evironment 3.png",
        },
      ],
      description: `
A modular 3D environment inspired by medieval European towns and fantasy castles.
— I modeled every building, unwrapped clean UVs, painted custom textures, and assembled the town and castle
with warm–cool night lighting to bring the scene to life.
    `.trim(),
      tech: [
        "3D Modeling",
        "UV Unwrapping",
        "Texture Painting",
        "Environment Lighting",
        "Scene Assembly",
      ],
    },
  },

  {
    id: "esport-event-staff",
    category: "event",
    section: "main",
    thumbnail: "/images/portfolio/modals/esport1.jpg",
    cardTitle: "Esport Event Staff & Content Creator",
    cardSubtitle: "Event Management · Media Production",

    modal: {
      title: "Esport Event Staff & Content Creator",
      aspect: "16x9",
      media: [
        { type: "image", src: "/images/portfolio/modals/esport1.jpg" },
        { type: "image", src: "/images/portfolio/modals/esport2.jpg" },
        { type: "image", src: "/images/portfolio/modals/esport3.webp" },
        { type: "image", src: "/images/portfolio/modals/esport4.jpg" },
        { type: "image", src: "/images/IMG_1848.JPG" },
        { type: "image", src: "/images/portfolio/modals/esport5.png" },
      ],
      description: `
Worked as an event staff and content creator across multiple university and community esports tournaments.
— Coordinated esports tournaments, supervised event operations, and produced promotional content for multiple university 
and community events (2024–2025)
— including Vet Game, RoV CMU League, CMU Freshmen Games, RoV University Championship, CMU Sport Day, CAMT Open House, 
and the Chiang Mai Municipality Esports League.
    `.trim(),
      tech: [
        "Event Coordination",
        "On-Site Operations",
        "Content Creation",
        "Video Editing",
        "Team Communication",
      ],
      links: [
        {
          label: "Click here to view the Esport TikTok",
          url: "https://www.tiktok.com/@cmuesportstiktok",
        },
      ],
    },
  },
    {
    id: "tgs-reel",
    category: "event",
    section: "main",
    thumbnail: "/images/portfolio/modals/TGS-Cover.jpg",
    cardTitle: "Thailand Game Show 2025 Reel",
    cardSubtitle: "Video Editing · Event Showcase",

    modal: {
      title: "Thailand Game Show 2025 Student Reel",
      aspect: "16x9",
      media: [{ type: "video", src: "/videos/TGSFinal.mp4" }],
      description: `
Edited a highlight reel of Digital Game (DG) student projects to be showcased at Thailand Game Show 2025.
— Responsibilities included selecting gameplay clips, arranging the sequence to match the event's pacing,
synchronizing cuts with music, adding simple transitions, and exporting a show-ready video for the event screen.
— This project demonstrates my experience in video editing and presenting game projects for public exhibitions.
    `.trim(),
      tech: ["Video Editing", "Premiere Pro", "CapCut", "Event Showcase"],
    },
  },
   {
    id: "excel-credit-tool",
    category: "event",
    section: "main",
    thumbnail: "/images/Web/3_1.png",
    cardTitle: "Excel Credit Automation Tool",
    cardSubtitle: "Automation · Data Management",

    modal: {
      title: "Excel Credit Automation Tool",
      aspect: "16x9",
      media: [
        { type: "image", src: "/images/Web/3_1.png" },
        { type: "image", src: "/images/Web/3_2.png" },
        { type: "image", src: "/images/portfolio/modals/dg1.png" }],
      description: `
Developed an Excel-based scoring system for ROV esports competitions to calculate match results and manage tournament scores efficiently.
— Automated data validation, score calculations, and ranking updates using Excel formulas and VBA macros.
— This tool streamlined the scoring process, reduced manual errors, and improved overall tournament management efficiency.
In addition, built an Excel-based course input and credit calculation program to automate subject data entry and total credit computation.  
    `.trim(),
      tech: ["Excel Automation", "Data Validation", "Workflow Optimization"],
      links: [
        {
          label: "Click here to view the full calculator",
          url: "https://docs.google.com/spreadsheets/d/13VjnnPomD_A-SJUiVVYBLqgwIJ00GzURqiu5QU7cAWE/edit",
        },
      ],
    },
  },
  {
    id: "fitme",
    category: "game",
    section: "competition",
    thumbnail: "/images/portfolio/modals/Fitme3.png",
    cardTitle: "FitMe",
    cardSubtitle: "AR Fitness App · Hackathon",

    modal: {
      title: "FitMe",
      year: "2025",
      aspect: "16x9",
      media: [
        { type: "image", src: "/images/portfolio/modals/Fitme3.png" },
        { type: "image", src: "/images/portfolio/fitme-thumb.png" },
        { type: "video", src: "/videos/Portfolio Presentation (1).mp4" },
      ],
      description: `
Global Startup Design Thinking Hackathon Hosted by Chung-Ang University, South Korea.
— Developed an AR-based fitness app that uses motion tracking to guide correct exercise posture.
— Designed interactive mini-games to increase motivation and engagement.
— Collaborated with international teammates to integrate business and social impact concepts,
— focusing on health tech and accessibility. Strengthened cross-cultural communication,
time management, and rapid prototyping within a 48-hour challenge.
      `.trim(),
      tech: ["Interaction", "AR", "Hackathon"],
      links: [
        {
          label: "Click here to view project presentation",
          url: "https://www.canva.com/design/DAGz3Sq6xIo/s4byBF31lQ2NWXIZ8jCLVA/view",
        },
      ],
    },
  },
  {
    id: "tiny-earth-keepers",
    category: "game",
    section: "competition",
    thumbnail: "/images/portfolio/modals/tiny2.JPG",
    cardTitle: "Tiny Earth Keepers",
    cardSubtitle: "AR Educational Game · Hackathon",

    modal: {
      title: "Tiny Earth Keepers",
      year: "2025",
      aspect: "16x9",
      media: [
        { type: "image", src: "/images/portfolio/tiny-earth-thumb.png" },
        { type: "image", src: "/images/portfolio/modals/Tiny1.png" },
        { type: "image", src: "/images/portfolio/modals/tiny2.JPG" },
        { type: "video", src: "/videos/TinyGame.mp4" },
      ],
      description: `
Hackathon Startup Design Thinking Hackathon Hosted by CAMT, Chiang Mai University & Chung-Ang University.
Created an AR educational recycling game teaching children proper waste separation and environmental awareness.
— Designed game flow, UI, and AR scanning interaction.
— Prepared presentation materials and prototype demo.
      `.trim(),
      tech: ["Unity", "AR", "Hackathon"],
      links: [
        {
          label: "Click here to view project presentation",
          url: "https://www.canva.com/design/DAGvF_u9tdM/sgMfP_e1de5fQfdcXImXgA/view",
        },
      ],
    },
  },
];
