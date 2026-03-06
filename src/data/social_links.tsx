import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: "Email",
    url: "mailto:wilfredomarinay@gmail.com",
    icon: <AiFillMail />,
  },
  {
    name: "GitHub",
    url: "https://github.com/derf567",
    icon: <AiFillGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/fred-marinay-31ab9a3a8/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Telegram",
    url: "https://t.me/fredthegreat12",
    icon: <FaTelegram />,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+639917222460",
    icon: <FaWhatsapp />,
  },
  {
    name: "X",
    url: "https://x.com/fredthegreat11",
    icon: <BsTwitterX />,
  },
  // {
  //   name: "Discord",
  //   url: "",
  //   icon: "discord-icon"
  // },
  // {
  //   name: "Reddit",
  //   url: "",
  //   icon: "reddit-icon"
  // },
  // {
  //   name: "TikTok",
  //   url: "",
  //   icon: "tiktok-icon"
  // },
  // {
  //   name: "YouTube",
  //   url: "",
  //   icon: "youtube-icon"
  // },
  // {
  //   name: "Instagram",
  //   url: "",
  //   icon: "instagram-icon"
  // },
  // {
  //   name: "Facebook",
  //   url: "",
  //   icon: "facebook-icon"
  // },
  // {
  //   name: "Phone",
  //   url: "",
  //   icon: "phone-icon"
  // },
  // {
  //   name: "Upwork",
  //   url: "",
  //   icon: "upwork-icon"
  // },
];

export default socialLinks;
