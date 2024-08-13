import React from "react";
import AboutDisk from "./aboutDisc";
import AboutLongDisk from "./aboutSentences";

function About() {
  return (
    <div id="about" className="pt-20 pb-16">
      <div className="w-4/5 mx-auto">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 lg:gap-5">
          <AboutDisk />
          <AboutLongDisk />
        </div>
      </div>
    </div>
  );
}

export default About;
