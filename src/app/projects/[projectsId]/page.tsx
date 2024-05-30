import React from "react";
import ProjectIdWrapper from "./ProjectIdWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const page = ({ params }: { params: { projectsId: number } }) => {
  return (
    <div>
      <Navbar />

      <ProjectIdWrapper params={params} />
      <Footer />
    </div>
  );
};

export default page;
