"use client";
// import Lottie from "lottie-react";
// import animationData from "../../public/animation.json"; // Import your Lottie JSON file

function Preloader() {
  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-dark">
      {/* <Lottie
        animationData={animationData} // Pass the imported animation data
        loop={true} // Set whether the animation should loop
        autoplay={true} // Set whether the animation should autoplay
      /> */}
      <p>LOADING ...</p>
    </div>
  );
}

export default Preloader;
