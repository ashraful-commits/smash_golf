import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import MaxWidthContainer from "@/components/Home/MaxWidthContainer";
import { getSingleUser } from "@/Utility/GetSingleUser";

const page = async () => {
  const session = await getServerSession(options);
 
  const userData = await getSingleUser({ email: session?.user?.email });
  return (
    <MaxWidthContainer>
      <Navbar session={session} userData={userData?.data?.user} />
      <Footer />
    </MaxWidthContainer>
  );
};

export default page;
