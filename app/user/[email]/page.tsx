import MaxWidthContainer from "@/components/user/MaxWidthContainer";
import Image from "next/image";
import Header from "@/components/user/Header";
import MainContainer from "@/components/user/MainContainer";

const User = async () => {


  return (
    <MaxWidthContainer>
      <Header />
      <MainContainer />
    </MaxWidthContainer>
  );
};
export default User;
