export interface Experience {
  title: string;
  organization: string;
  period: string;
  details: string[];
}

export const experiences: Experience[] = [
  {
    title: "Content Creator",
    organization: "NOUV Brand",
    period: "June – December 2025",
    details: [
      "Created online fashion content",
      "Edited promotional videos and designed marketing graphics",
    ],
  },
  {
    title: "Treasurer, Coordinator & Content Creator",
    organization: "Esport Club, Chiang Mai University",
    period: "2023 – Present",
    details: [
      "Managed club finances and budgeting and coordinated competitive events",
      "Designed promotional video and infographics",
    ],
  },
  {
    title: "Student Affairs Assistant",
    organization:
      "College of Arts, Media and Technology, Chiang Mai University",
    period: "June 2025 – Present",
    details: [
      "Managed documentation and coordinated student activities",
      "Designed infographics for faculty events",
    ],
  },
  {
    title: "Research Assistant & Teaching Assistant",
    organization:
      "Logic for Game Development – Digital Game | College of Arts, Media and Technology, Chiang Mai University",
    period: "November 2025 – Present",
    details: [
      "Assisted in preparing teaching materials and grading logic-based assignments",
      "Supported students in understanding Boolean logic, flow control, and problem-solving for gameplay systems",
      "Collaborated on research activities related to game development methodologies",
    ],
  },
];
