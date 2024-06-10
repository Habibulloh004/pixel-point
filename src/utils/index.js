import {
  Frame,
  Github,
  LinkedIn,
  Twitter,
  aboutIn1,
  aboutIn2,
  aboutIn3,
  aboutIn4,
  service1,
  service2,
  service3,
} from "../../public";
import { FaDiscourse, FaTwitter, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";


const navItems = [
  { id: 1, title: "About us", path: "#about" },
  { id: 2, title: "Services", path: "#services" },
  { id: 3, title: "Why DevOptima", path: "#whyDevoptima" },
];

const aboutItems = [
  {
    id: 1,
    icon: aboutIn1,
    title: "DevOps transformation",
    description: "Reshaping businesses with DevOps expertise.",
  },
  {
    id: 2,
    icon: aboutIn2,
    title: "Efficient operations",
    description: "Streamline processes for productivity gains.",
  },
  {
    id: 3,
    icon: aboutIn3,
    title: "CI/CD implementation",
    description: "Seamless software delivery pipeline.",
  },
  {
    id: 4,
    icon: aboutIn4,
    title: "Automation mastery",
    description: "Unlock full automation potential.",
  },
];

const serviceItems = [
  {
    id: 1,
    img: service1,
    title: "Continuous Integration & Deployment",
    description:
      "Streamline your development process with our advanced CI/CD solutions, ensuring faster and more reliable code deployment.",
  },
  {
    id: 2,
    img: service2,
    title: "Cloud Solutions & Infrastructure Management",
    description:
      "Leverage the cloud for scalability and efficiency. We provide comprehensive cloud infrastructure management and optimization services.",
  },
  {
    id: 3,
    img: service3,
    title: "Automated Testing & Quality Assurance",
    description:
      "Enhance product quality with our automated testing services, designed to detect issues early and reduce time-to-market.",
  },
];

const footerItems = [
  { id: 1, title: "Resources", items: ["Docs", "Release notes", "Security"] },
  {
    id: 2,
    title: "Community",
    items: [
      { icon: FaTwitter, title: "Twitter" },
      { icon: BsLinkedin, title: "LinkedIn" },
      { icon: FaGithub, title: "GitHub" },
      { icon: FaDiscourse, title: "Discourse" },
    ],
  },
  { id: 3, title: "Legal", items: ["Privacy policy", "Terms of service"] },
];

export { navItems, aboutItems, serviceItems, footerItems };
