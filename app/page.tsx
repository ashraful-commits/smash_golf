import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import HowToPlay from "@/components/HowToPlay";
import LiveEvent from "@/components/LiveEvent";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import Tour from "@/components/Tour";
import UpcomingTournaments from "@/components/UpcomingTournaments";
import WhyStart from "@/components/WhyStart";

export default function Home() {
  return (
    <MaxWidthContainer>
      <div className="mx-auto  text-center flex flex-col items-center max-w-[1440px] min-h-screen">
        <Hero />
        <UpcomingTournaments />
        <HowItWork />
        <Tour />
        <WhyStart />
        <div className="bg-black h-[110px] w-full"></div>
        <HowToPlay />
        <LiveEvent />
      </div>
    </MaxWidthContainer>
  );
}
