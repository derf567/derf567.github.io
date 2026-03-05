import {
  DiGoogleCloudPlatform,
  DiJava,
  DiJavascript1,
  DiLaravel,
  DiMysql,
  DiPostgresql,
  DiPython,
  DiReact,
} from "react-icons/di";
import { FaAws, FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiBootstrap,
  SiCplusplus,
  SiDart,
  SiDjango,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGithubactions,
  SiGooglecloud,
  SiGraphql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiPhp,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

const techStack = [
  {
    title: "Programming Language",
    skills: [
      <DiPython key="python" />,
      <SiCplusplus key="cpp" />,
      <DiJavascript1 key="js" />,
      <DiJava key="java" />,
      <SiPhp key="php" />,
      <SiDart key="dart" />,
      <SiTypescript key="ts" />,
      <FaGolang key="go" />,
    ],
  },
  {
    title: "Frontend and Mobile Development",
    skills: [
      <DiReact key="react" />,
      <SiNextdotjs key="next" />,
      <SiVuedotjs key="vue" />,
      <SiBootstrap key="bootstrap" />,
      <SiTailwindcss key="tailwind" />,
      <SiSass key="sass" />,
      <SiFlutter key="flutter" />,
      <SiExpo key="expo" />,
    ],
  },
  {
    title: "Backend Development",
    skills: [
      <DiLaravel key="laravel" />,
      <FaNodeJs key="node" />,
      <SiExpress key="express" />,
      <SiNestjs key="nest" />,
      <SiDjango key="django" />,
      <SiFirebase key="firebase" />,
      <SiGraphql key="graphql" />,
      <DiMysql key="mysql" />,
      <DiPostgresql key="postgres" />,
    ],
  },
  {
    title: "Devops and Cloud",
    skills: [
      <SiGithub key="github" />,
      <SiDocker key="docker" />,
      <SiGithubactions key="actions" />,
      <SiNginx key="nginx" />,
      <FaAws key="aws" />,
      <DiGoogleCloudPlatform key="gcp" />,
      <SiGooglecloud key="googlecloud" />,
    ],
  },
];

export default techStack;
