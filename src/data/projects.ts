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
];
