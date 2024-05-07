import { NavItemsProps } from "./types";

export const NavItems: NavItemsProps = {
  items: [
    { title: "Welcome", heading: "Home", url: "#home", delay: 300 },
    { title: "Who we are", heading: "About Us", url: "#about", delay: 350 },
    { title: "WHAT WE DO", heading: "Services", url: "#services", delay: 400 },
    {
      title: "WHAT WE’VE DONE",
      heading: "Case Studies",
      url: "#case-studies",
      delay: 450,
    },
    {
      title: "WHAT ARE WE SAYING",
      heading: "Blog",
      url: "https://www.blog.kevlarandfox.com",
      delay: 500,
    },
    { title: "WRITE US", heading: "Contact", url: "#contact", delay: 550 },
  ],
};
