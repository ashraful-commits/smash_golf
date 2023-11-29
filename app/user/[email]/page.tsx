import MaxWidthContainer from "@/components/user/MaxWidthContainer";
import Image from "next/image";
import Header from "@/components/user/Header";
import MainContainer from "@/components/user/MainContainer";
import { getServerSession } from "next-auth";
import { getSingleUser } from "@/Utility/GetSingleUser";

const User = async () => {
  const session = await getServerSession();

  const userData = await getSingleUser({ email: session?.user?.email });

  return (
    <MaxWidthContainer>
      <Header />
      <MainContainer />
    </MaxWidthContainer>
  );
};
export default User;
