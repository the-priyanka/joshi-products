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
import Aamkhand from "../src/img/products/aamkhand.jpg";

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

export const itemData = [
  {
    img: "img/products/aamkhand.jpg",
    title: "Aamkhand",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "img/products/butter.jpg",
    title: "Butter",
  },
  {
    img: "img/products/chakka.jpg",
    title: "Chakka",
  },
  {
    img: "img/products/chanch.jpg",
    title: "Chanch",
    cols: 2,
  },
  {
    img: "img/products/cream.jpg",
    title: "Cream",
    cols: 2,
  },
  {
    img: "img/products/dahi.jpg",
    title: "Dahi",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "img/products/ghee.jpg",
    title: "Ghee",
  },
  {
    img: "img/products/lassi.jpg",
    title: "Lassi",
  },
  {
    img: "img/products/milk.jpg",
    title: "Milk",
    rows: 2,
    cols: 2,
  },
  {
    img: "img/products/paneer.jpg",
    title: "Paneer",
  },
  {
    img: "img/products/plassi.jpg",
    title: "Plassi",
  },
  {
    img: "img/products/shrikhand.jpg",
    title: "Shrikhand",
    cols: 2,
  },
];
