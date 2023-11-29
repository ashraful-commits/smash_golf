import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import HosttestBrands from "@/components/Home/HosttestBrands";
import HowItWork from "@/components/Home/HowItWork";

import HowToPlay from "@/components/Home/HowToPlay";
import LiveEvent from "@/components/Home/LiveEvent";
import MaxWidthContainer from "@/components/Home/MaxWidthContainer";
import Navbar from "@/components/Home/Navbar";
import Tour from "@/components/Home/Tour";
import UpcomingTournaments from "@/components/Home/UpcomingTournaments";
import WhyStart from "@/components/Home/WhyStart";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { getSingleUser } from "@/Utility/GetSingleUser";

export default async function Home() {
  const session = await getServerSession(options);
const userData = await getSingleUser({email:session?.user?.email})

  return (
    <MaxWidthContainer className="max-w-[1440px] relative">
      <div className="mx-auto relative  text-center flex flex-col z-0 items-center max-w-[1440px] min-h-screen">
        <Navbar userData={userData?.data?.user} session={session} />
        <Hero />
        <UpcomingTournaments />
        <HowItWork />
        <Tour />
        <WhyStart />
        <div className="bg-black h-[110px] w-full"></div>
        <HowToPlay />
        <LiveEvent />
        <HosttestBrands />
        <Footer />
      </div>
    </MaxWidthContainer>
  );
}
