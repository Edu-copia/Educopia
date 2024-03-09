import React from "react";
import "tailwindcss/tailwind.css";
import Header from "../../components/landingpage/Header"
import Introduction from "../../components/landingpage/Introduction"
import FirstInfoSection from "../../components/landingpage/FirstInfoSection"
import SecondInfoSection from "../../components/landingpage/SecondInfoSection"
import TeamMember from "../../components/landingpage/TeamMembers"
import Footer from "../../components/landingpage/Footer"

export default function LandingPage() {
  return (
    <>
      <Header/>
      <Introduction/>
      <FirstInfoSection/>
      <SecondInfoSection/>
      <TeamMember/>
      <Footer/>
    </>
  );
}
