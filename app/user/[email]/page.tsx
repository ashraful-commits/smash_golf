import MaxWidthContainer from "@/components/user/MaxWidthContainer";
import Image from "next/image";
import Header from "@/components/user/Header";
import MainContainer from "@/components/user/MainContainer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "User",
  description: "play. compete. win",
};
const User = async () => {
  return (
    <MaxWidthContainer>
      <Header />
      <MainContainer />
    </MaxWidthContainer>
  );
};
export default User;
