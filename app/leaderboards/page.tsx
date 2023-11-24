import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";

const LeaderBoard = async() => {
  const session = await getServerSession(options);
  return <div><Navbar session={session}/><Footer/></div>;
};

export default LeaderBoard;
