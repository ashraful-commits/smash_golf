
import MaxWidthContainer from "@/components/user/MaxWidthContainer";
import Header from "@/components/user/Header";
import MainContainer from "@/components/user/MainContainer";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

import { Metadata } from "next";
import { userSessionType } from "@/Types";


const User = () => {

  return (
    <MaxWidthContainer>
      <Header />
      <MainContainer />
    </MaxWidthContainer>
  );
};
export default User;


export async function generateMetadata(): Promise<Metadata> {
  const session: userSessionType | null = await getServerSession(options)!;

  if (!session) {
    // Handle the case when session is null
    return {
      title: 'Unknown User',
      description: 'play. compete. win',
    };
  }

  return {
    title: `user-${session.user.name}`,
    description: 'play. compete. win',
  };
}