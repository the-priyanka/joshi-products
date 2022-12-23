import { BsFacebook, BsInstagram } from "react-icons/bs";
import {
  Home,
  Info,
  ProductionQuantityLimits,
  SettingsAccessibility,
  Collections,
  Newspaper,
  Call,
} from "@mui/icons-material";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <Home />,
  },
  {
    id: 2,
    url: "/about",
    text: "About Us",
    icon: <Info />,
  },
  {
    id: 3,
    url: "/products",
    text: "Products",
    icon: <ProductionQuantityLimits />,
  },
  {
    id: 4,
    url: "/infrastructure",
    text: "Infrastructure",
    icon: <SettingsAccessibility />,
  },
  {
    id: 5,
    url: "/gallery",
    text: "Gallery",
    icon: <Collections />,
  },
  {
    id: 6,
    url: "/news",
    text: "News",
    icon: <Newspaper />,
  },
  {
    id: 7,
    url: "/contact",
    text: "Contact Us",
    icon: <Call />,
  },
];

export const socialIcons = [
  {
    icon: <BsFacebook />,
    url: "https://www.facebook.com/khushboolassi/",
  },
  {
    icon: <BsInstagram />,
    url: "https://www.instagram.com/khushboolassi/",
  },
];
