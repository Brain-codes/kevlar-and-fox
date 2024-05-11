import { AllExpertiesProp, NavItemsProps, allCoreValueProp } from "./types";

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

export const CoreValuesItems: allCoreValueProp = {
  items: [
    {
      title: "Excellence",
      description:
        "We are the epitome of excellence in consultancy, exceeding expectations in every aspect of our service delivery.",
    },
    {
      title: "X-Factor",
      description:
        "We bring a unique X-factor to our solutions, leveraging a seamless blend of sophistication and innovation.",
    },
    {
      title: "Customization",
      description:
        "As a boutique firm, we specialize in crafting customized solutions that cater to the unique needs of each business, beyond the generic services you can get from our larger competitors.",
    },
    {
      title: "Empowerment",
      description:
        "We empower our team with all the resources required to help businesses elevate their brand, stimulate growth and lead in a fiercely competitive market.",
    },
    {
      title: "Lasting Relationships",
      description:
        "We cultivate lasting relationships with our clients, investing in their success and becoming their distinguishable partners in success.",
    },
  ],
};

export const ExpertiesItem: AllExpertiesProp = {
  items: [
    {
      title: "Public Relations (PR)",
      image: "/images/prImg.svg",
      imageLeft: true,
      items: [
        {
          title: "Corporate Reputation and Brand Management:",
          description:
            "Crafting and managing compelling narratives to shape positive perceptions of your brand, fostering trust and loyalty among stakeholders",
        },
        {
          title: "Corporate Reputation and Brand Management:",
          description:
            "Crafting and managing compelling narratives to shape positive perceptions of your brand, fostering trust and loyalty among stakeholders",
        },
        {
          title: "Corporate Reputation and Brand Management:",
          description:
            "Crafting and managing compelling narratives to shape positive perceptions of your brand, fostering trust and loyalty among stakeholders",
        },
        {
          title: "Corporate Reputation and Brand Management:",
          description:
            "Crafting and managing compelling narratives to shape positive perceptions of your brand, fostering trust and loyalty among stakeholders",
        },
        {
          title: "Corporate Reputation and Brand Management:",
          description:
            "Crafting and managing compelling narratives to shape positive perceptions of your brand, fostering trust and loyalty among stakeholders",
        },
      ],
    },
  ],
};
