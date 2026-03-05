export interface ProjectProps {
  imgPath: string;
  isBlog: boolean;
  title: string;
  description: string;
  demoLink?: string;
  ghLink?: string;
  order: number;
  skills?: string[];
}

export const projects: ProjectProps[] = [
  {
    imgPath: "/img/projects/web.png",
    isBlog: false,
    title: "Video sharing",
    description:
      "video streaming and sharing platform where users can watch, like, and comment on videos, subscribe to channels, and receive personalized recommendations. Users can also create their own channels, upload and organize videos, and engage with a community through comments and interactions. The application supports video streaming, content management, and user-driven engagement features.",
    demoLink: "",
    ghLink: "https://github.com/ezdev21/video-sharing",
    order: 1,
    skills: [],
  },
  {
    imgPath: "/img/projects/online-store100.png",
    isBlog: false,
    title: "Ecommerce",
    description:
      "An e-commerce web application that allows users to browse products, add items to a cart, and place orders. It provides sellers with tools to manage products, inventory, orders, and customers, delivering a complete online shopping experience.",
    demoLink: "",
    ghLink: "https://github.com/ezdev21/ecommerce",
    order: 2,
    skills: [],
  },
  {
    imgPath: "/img/projects/app-icon.png",
    isBlog: false,
    title: "Biritu",
    description:
      "A Digital Savings Account (Biritu) is an electronic version of a regular Savings Account. With a paperless, quick and secure account opening process",
    demoLink: "",
    ghLink: "",
    order: 3,
    skills: [],
  },
  {
    imgPath: "/img/projects/database.png",
    isBlog: false,
    title: "Pool Taxi",
    description:
      "Pool Taxi is a technology-based company that works in providing cost effective and technologically advanced platforms to the society. It offers transportation services to people, organizations, and institutions.",
    demoLink: "",
    ghLink: "",
    order: 1,
    skills: [],
  },
  {
    imgPath: "/img/projects/android.png",
    isBlog: false,
    title: "Jestra",
    description:
      "Logistics management ensures a company has sufficient resources to fulfill client needs through the manufacturing of products, and that the products can be delivered accurately and in good condition.",
    demoLink: "",
    ghLink: "",
    order: 2,
    skills: [],
  },
  {
    imgPath: "/img/projects/ios.png",
    isBlog: false,
    title: "Madot Solutions",
    description:
      "The company's mission is to promote problem-solving within our organization; produce, deliver, and support technology to make it more accessible to our customers. Increasing the capital of the organization, creating job opportunities, playing a significant role in the economic development of our country.",
    demoLink: "",
    ghLink: "",
    order: 3,
    skills: [],
  },
  {
    imgPath: "/img/projects/wordpress.png",
    isBlog: false,
    title: "Union Academy",
    description:
      "Union academy dedicated to holistic education, fostering innovation, nurturing talents, and cultivating a vibrant learning community for future leaders.",
    demoLink: "",
    ghLink: "",
    order: 1,
    skills: [],
  },
];
