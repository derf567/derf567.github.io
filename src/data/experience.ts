interface Experience {
  company: string;
  position: string;
  date: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "SPMC Hospital, Davao City",
    position: "OJT Intern - Software Developer",
    date: "2025 - Present",
    responsibilities: [
      "Developing a Hospital Referral System for all hospitals across Mindanao region",
      "System currently undergoing pilot testing phase (March 2025)",
      "Scheduled for 100% deployment and full implementation by April 2025",
    ],
  },
  {
    company: "Hall of Justice Project",
    position: "Student Developer",
    date: "2024",
    responsibilities: [
      "Developed a local system for Hall of Justice (not published online)",
      "Applied database management and programming skills in real-world scenario",
      "Collaborated with team members on system design and implementation",
    ],
  },
  {
    company: "Freelance Projects",
    position: "Web Developer",
    date: "2023 - Present",
    responsibilities: [
      "Built multiple web projects including fashion blogs, restaurant websites, and educational resources",
      "Developed responsive designs using HTML, CSS, and modern frameworks",
      "Created wireframes and UI/UX designs for various client projects",
    ],
  },
];

export default experiences;
