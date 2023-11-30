import Navbar from "@/components/Home/Navbar";
import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import Footer from "@/components/Home/Footer";
import MaxWidthContainer from "@/components/Home/MaxWidthContainer";
import { getSingleUser } from "@/Utility/GetSingleUser";

const Contact = async () => {
  const session = await getServerSession(options);

  return (
    <MaxWidthContainer>
      <Navbar session={session} />
      <Footer />
    </MaxWidthContainer>
  );
};

export default Contact;
