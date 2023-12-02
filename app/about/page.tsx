import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import MaxWidthContainer from "@/components/Home/MaxWidthContainer";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
  description: "play. compete. win",
};
const About = async () => {
  const session = await getServerSession(options);

  return (
    <MaxWidthContainer>
      <Navbar session={session} />
      <Footer />
    </MaxWidthContainer>
  );
};

export default About;
