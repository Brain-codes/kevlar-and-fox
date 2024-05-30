import React from "react";
import ProjectIdWrapper from "./ProjectIdWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CaseStudyItems } from "@/constants";

// Define the generateStaticParams function
export const generateStaticParams = async () => {
  // Assuming CaseStudyItems is an array of items with IDs
  const paths = CaseStudyItems.items.map((item, index) => ({
    projectsId: (index + 1).toString(),
  }));

  return paths;
};

const Page = ({ params }: { params: { projectsId: number } }) => {
  return (
    <div>
      <ProjectIdWrapper params={params} />
    </div>
  );
};

export default Page;
