import ecommerce from "@/assets/Projects/ecommerce_optimized.png";
import pool from "@/assets/Projects/pool_optimized.png";
import madot from "@/assets/Projects/madot_optimized.png";
import spmc from "@/assets/Projects/SPMC_AdminDash.png";
import spmc_highdpt from "@/assets/Projects/SPMC_highdptDash.png";
import spmc_login from "@/assets/Projects/SPMC_Login.png";
import spmc_lowdpt from "@/assets/Projects/SPMC_lowdptDash.png";
import spmc_referrer from "@/assets/Projects/SPMC_ReferrerDash.png";
import clearsight from "@/assets/Projects/ClearSight.png";
import hallOfJustice from "@/assets/Projects/hall of justice.jpg";
import dmsSurvey from "@/assets/Projects/dms_survey.png";
import velocityRental from "@/assets/Projects/velocity_rental.png";
import jlmLights from "@/assets/Projects/jlm_lights.png";
import acgPharma from "@/assets/Projects/acg_pharma.png";
import villaRosal from "@/assets/Projects/villa_rosal.png";

export interface ProjectProps {
  imgPath: string;
  isBlog: boolean;
  title: string;
  description: string;
  demoLink?: string;
  ghLink?: string;
  order: number;
  skills?: string[];
  images?: string[];
}

export const projects: ProjectProps[] = [
  {
    imgPath: clearsight,
    isBlog: false,
    title: "ClearSight: Forensic-Quality Surveillance Restoration",
    description:
      "Published research paper on AICCC. A Hierarchical Dual-Architecture Framework for Forensic-Quality Restoration of Surveillance Footage Degraded by Rain and Glare. Team: Justin Zack M. Doctolero, Wilfredo G. Marinay Jr., Joshua Emerson B. Valerio, Michel B. Bolo.",
    demoLink: "",
    ghLink: "https://github.com/derf567/attentive-gan-derainnet",
    order: 1,
    skills: ["AI/ML", "Computer Vision", "Research", "Published Paper"],
  },
  {
    imgPath: spmc,
    isBlog: false,
    title: "Hospital Referral System",
    description:
      "A comprehensive referral system for all hospitals across Mindanao region. Currently in pilot testing at SPMC Hospital, Davao City, with full deployment scheduled for April 2025.",
    demoLink: "",
    ghLink: "https://github.com/derf567/SPMC-OJT-REFERRAL",
    order: 2,
    skills: ["Database", "System Development", "Healthcare IT"],
    images: [spmc, spmc_highdpt, spmc_login, spmc_lowdpt, spmc_referrer],
  },
  {
    imgPath: hallOfJustice,
    isBlog: false,
    title: "Hall of Justice System",
    description:
      "Local system developed for Hall of Justice operations. Built as part of academic project focusing on real-world application development.",
    demoLink: "",
    ghLink: "https://github.com/derf567/case-records",
    order: 3,
    skills: ["Database", "System Design", "Local Deployment"],
  },
  {
    imgPath: dmsSurvey,
    isBlog: false,
    title: "D-M-S Survey Company Website",
    description:
      "Professional website for Digital Mapping & Surveying LLC providing expert surveying services across Indiana. Features precision surveying services including topographic surveys, boundary surveys, easements, and subdivision plats.",
    demoLink: "https://d-m-s.biz/",
    ghLink: "",
    order: 4,
    skills: ["Web Development", "Business Website", "Client Project"],
  },
  {
    imgPath: velocityRental,
    isBlog: false,
    title: "Velocity Car Rental System",
    description:
      "Premium car rental platform with real-time GPS tracking and 24/7 support. Features live fleet management, transparent availability, and seamless booking system. Drive the extraordinary with hand-picked machines.",
    demoLink: "https://rentalsamples.netlify.app/",
    ghLink: "",
    order: 5,
    skills: ["React", "Booking System", "Web Application"],
  },
  {
    imgPath: villaRosal,
    isBlog: false,
    title: "Villa Rosal Beach Resort Website",
    description:
      "Luxury beach resort website in Samal featuring pristine beaches, stunning pools, and world-class amenities. Experience tropical luxury with Villa Rosal Beach Resort. Created to maximize customer satisfaction and showcase resort services.",
    demoLink: "https://thevillarosal.com/",
    ghLink: "",
    order: 6,
    skills: ["Tourism", "Web Design", "Client Project", "React"],
  },
  {
    imgPath: acgPharma,
    isBlog: false,
    title: "ACG Pharma Landing Page",
    description:
      "FDA-approved pharmaceutical partner delivering quality medicines and medical equipment. Features clean, safe, and compliant design for resellers, clinics, pharmacies, and hospitals. Professional landing page created for bidding purposes.",
    demoLink: "https://acgpharma.netlify.app/",
    ghLink: "",
    order: 7,
    skills: ["Landing Page", "Healthcare", "Business", "React"],
  },
  {
    imgPath: jlmLights,
    isBlog: false,
    title: "JLM Lights & Sounds Business Website",
    description:
      "Premium sound systems, professional stage lighting, and stunning LED walls for weddings, concerts, parties, and corporate events. Light up your event with JLM Lights & Sounds. 500+ events powered with 10+ years experience.",
    demoLink: "https://jlmlights.netlify.app/",
    ghLink: "",
    order: 8,
    skills: ["Business Website", "Portfolio", "Event Services", "React"],
  },
];
