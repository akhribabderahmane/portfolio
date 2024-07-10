import {
  BsEnvelopeAtFill as EmailIcon,
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
} from "react-icons/bs";
import { BsTwitterX as TwitterIcon } from "react-icons/bs";

const socialMedia = [
  { name: "Email", icon: <EmailIcon />, link: "", bgColor: "bg-[#0AB68B] border border dark:border-neutral-700" },
  { name: "LinkdIn", icon: <LinkedinIcon />, link: "", bgColor: "bg-[#05A0BF] border border dark:border-neutral-700 " },
  { name: "Twitter", icon: <TwitterIcon />, link: "", bgColor: "bg-[#141E15] border border dark:border-neutral-700" },
  { name: "Instagram", icon: <InstagramIcon />, link: "", bgColor: "bg-[#E84476] border border dark:border-neutral-700" },
  { name: "Github", icon: <GithubIcon />, link: "", bgColor: "bg-[#490B3E] border border dark:border-neutral-700" },//490B3E
];


export default socialMedia;
