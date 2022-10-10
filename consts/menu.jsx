import { AiFillHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsChatSquareTextFill } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";

export const menuList = [
  {
    name: "Home",
    href: "/",
    icon: <AiFillHome />,
  },
  {
    name: "Proyects",
    href: "/projects",
    icon: <AiOutlineFundProjectionScreen />,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: <BsChatSquareTextFill />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <RiContactsFill />,
  }
];
