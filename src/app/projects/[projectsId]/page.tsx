import React from "react";
import ProjectIdWrapper from "./ProjectIdWrapper";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/landing-page/Footer";

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
