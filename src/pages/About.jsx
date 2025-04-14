import React from "react";
import Banner from "../components/about/Banner";
import OurStory from "../components/about/OurStory";
import OurMission from "../components/about/OurMission";
import OurVision from "../components/about/OurVision";
import MeetExperts from "../components/about/MeetExperts";
import ChooseUs from "../components/about/ChooseUs";
function About() {
  return (
    <>
      <Banner />

      <OurStory />

      <div className="bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <OurMission />

          <OurVision />
        </div>
      </div>

      <MeetExperts />

      <ChooseUs />
    </>
  );
}

export default About;
