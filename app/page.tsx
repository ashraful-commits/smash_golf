import Hero from "@/components/Hero";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import UpcomingTournaments from "@/components/UpcomingTournaments";

export default function Home() {
  return (
    <MaxWidthContainer>
      <div className="mx-auto  text-center flex flex-col items-center max-w-[1440px] min-h-screen">
        <Hero />
        <UpcomingTournaments />
      </div>
    </MaxWidthContainer>
  );
}
