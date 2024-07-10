import {
  FiBookOpen as LearnIcon,
  FiCoffee as ProjectIcon,
  FiCpu as DashboardIcon,
  FiPieChart as AnalyticsIcon,
  FiPocket as HomeIcon,
  FiRss as BlogIcon,
  FiUser as ProfileIcon,
} from "react-icons/fi";
import { BiRocket as ContactIcon } from "react-icons/bi";
import { PiChatCircleDotsBold as ChatIcon } from "react-icons/pi";

const btnStyle =
  "scale-150 text-background-light-600 dark:text-background-light-400 dark:group-hover:text-background-light-200 group-hover:-rotate-12 group-hover:text-background-light-800 transition duration-500";
const menuItems = [
  {
    title: "Home",
    icon: <HomeIcon className={btnStyle} />,
    href: "/",
    type: "pages",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon className={btnStyle} />,
    href: "/dashboard",
    type: "pages",
  },
  {
    title: "Projects",
    icon: <ProjectIcon className={btnStyle} />,
    href: "/project",
    type: "pages",
  },
  {
    title: "Blog",
    icon: <BlogIcon className={btnStyle} />,
    href: "/blog",
    type: "pages",
  },
  {
    title: "Learn",
    icon: <LearnIcon className={btnStyle} />,
    href: "/learn",
    type: "pages",
  },
  {
    title: "About",
    icon: <ProfileIcon className={btnStyle} />,
    href: "/about",
    type: "pages",
  },
  {
    title: "Contact",
    icon: <ContactIcon className={btnStyle} />,
    href: "/contact",
    type: "pages",
  },
  {
    title: "Guestbook",
    icon: <ChatIcon className={btnStyle} />,
    href: "/guestbook",
    type: "pages",
  },
];

export default menuItems;
