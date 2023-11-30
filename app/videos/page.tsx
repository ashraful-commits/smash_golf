import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import MaxWidthContainer from "@/components/Home/MaxWidthContainer";
import { getSingleUser } from "@/Utility/GetSingleUser";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Videos",
  description: "play. compete. win",
};
const page = async () => {
  const session = await getServerSession(options);
  return (
    <MaxWidthContainer>
      <Navbar session={session} />
      <Footer />
    </MaxWidthContainer>
  );
};

export default page;
