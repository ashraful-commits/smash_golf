
import MaxWidthContainer from "@/components/user/MaxWidthContainer";
import Header from "@/components/user/Header";
import MainContainer from "@/components/user/MainContainer";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";


const User = () => {

  return (
    <MaxWidthContainer>
      <Header />
      <MainContainer />
    </MaxWidthContainer>
  );
};
export default User;


export async function generateMetadata (){
  const session = await getServerSession(options)
  return {
    title: `user-${session?.user?.name}`,
    description: "play. compete. win",
  };
}