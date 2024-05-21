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
          title: "Web Design and Search Engine Optimization (SEO)",
          description:
            "Creating visually appealing websites optimized for search engines, enhancing online visibility and driving organic traffic",
        },
        {
          title: "Digital Marketing",
          description:
            "Leveraging various online strategies to promote your brand effectively, including social media marketing, email campaigns, and content marketing.",
        },
        {
          title: "Influencer Marketing",
          description:
            "Partnering with influential individuals to amplify brand visibility and credibility, driving engagement and fostering customer trust",
        },
        {
          title: "Content Creation/Production",
          description:
            "Generating engaging and relevant content across various platforms and mediums, including written articles, press releases, social media posts, blog entries, videos, infographics, and more. This includes ideation, creation, and distribution of content to effectively communicate your brand's message and engage with your audience.",
        },
        {
          title: "Crisis PR",
          description:
            "Developing crisis communication plans and strategies to mitigate reputational damage and restore confidence during challenging situations",
        },
        {
          title: "Social Media Management",
          description:
            "We offer a tailored approach to enhance your online presence. Our expert team provides comprehensive management of your social media channels, from content creation to community engagement, ensuring consistent messaging aligned with your brand identity and business goals. By leveraging data-driven insights, we continuously refine strategies to maximise reach and impact, driving tangible results such as increased brand awareness and customer engagement.",
        },
      ],
    },
    {
      title: "Digital Transformation",
      image: "/images/prImg2.png",
      imageLeft: false,
      items: [
        {
          title: "Software Development",
          description:
            "Crafting bespoke software solutions using innovative technologies and agile methodologies to meet your business needs.",
        },
        {
          title: "IT Infrastructure Supply/Maintenance",
          description:
            "Providing end-to-end IT infrastructure solutions, including hardware procurement, networking, and maintenance services.",
        },
        {
          title: "IT Service Management",
          description:
            "Designing and optimizing IT service processes to align with business objectives, improve efficiency, and enhance user experience.",
        },
        {
          title: "Cybersecurity and ICT Audits",
          description:
            "Conducting comprehensive assessments of information systems and technology landscapes to identify vulnerabilities and strengthen security posture.",
        },
        {
          title: "Business Technology and Digital Transformation",
          description:
            "Guiding organizations through the adoption of emerging technologies such as AI, machine learning, and IoT to drive innovation and operational efficiency.",
        },
      ],
    },
    {
      title: "Training and Development",
      image: "/images/prImg3.png",
      imageLeft: true,
      items: [
        {
          title: "Skills Assessment and Evaluation Services",
          description:
            "Identifying existing skill sets and competency levels within your workforce to tailor training programs that align with organizational objectives.",
        },
        {
          title: "IT Training and Certification",
          description:
            "Providing comprehensive training modules led by industry experts to up-skill IT teams and individuals for globally recognized certifications.",
        },
        {
          title: "Corporate Training",
          description:
            "Developing customized training programs to enhance leadership, technical, and professional skills within organizations.",
        },
        {
          title: "Professional Development",
          description:
            "Offering training to enhance leadership skills, strategic thinking, and overall professional effectiveness for personal and organizational growth.",
        },
        {
          title: "Soft Skills Training",
          description:
            "Providing training programs focused on interpersonal skills such as communication, teamwork, adaptability, and emotional intelligence.",
        },
        {
          title: "Train-the-Trainer Programs",
          description:
            "Equipping your internal trainers with the tools, methodologies, and techniques to deliver effective and engaging training sessions. Our programs ensure the sustainability of a culture of learning within your organization.",
        },
      ],
    },
  ],
};
