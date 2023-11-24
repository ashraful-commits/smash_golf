import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import { Card } from "../ui/card";
import tourImg from "@/public/tour1.png";
import tourImg1 from "@/public/tour2.png";
import tourImg2 from "@/public/tour3.png";
import tourImg3 from "@/public/tour4.png";
import Image from "next/image";
import TourCard from "./TourCard";
import { Button } from "../ui/button";
const Tour = () => {
  return (
    <MaxWidthContainer className="w-full min-h-[91vh] bg-black  flex  px-[100px] py-[20px]">
      <div className="left w-[50%] min-h-[500px] h-[630px] mt-7 grid grid-rows-2 grid-flow-col  gap-[10px] pr-[50px] justify-center items-start">
        <Card className="w-[281px]  h-[308px] hover:scale-105 duration-500 transition-all ease-in-out shrink-0 rounded-[13.899px] border-[2px] overflow-hidden bg-transparent border-[#A1A1A1]">
          <Image
            className="w-full h-full object-cover"
            src={tourImg}
            alt="TourImg"
          />
        </Card>

        <Card className="w-[281px]   h-[269px] hover:scale-105 duration-500 transition-all ease-in-out shrink-0 rounded-[13.899px] border-[2px] overflow-hidden bg-transparent border-[#A1A1A1]">
          <Image
            className="w-full h-full object-cover"
            src={tourImg2}
            alt="TourImg2"
          />
        </Card>
        <Card className="w-[281px] mt-[50px] h-[292px] hover:scale-105 duration-500 transition-all ease-in-out shrink-0 rounded-[13.899px] border-[2px] overflow-hidden bg-transparent border-[#A1A1A1]">
          <Image
            className="w-full h-full object-cover"
            src={tourImg1}
            alt="TourImg1"
          />
        </Card>
        <Card className="w-[281px]   mt-[40px]  h-[285px] hover:scale-105 duration-500 transition-all ease-in-out shrink-0 rounded-[13.899px] border-[2px] overflow-hidden bg-transparent border-[#A1A1A1]">
          <Image
            className="w-full h-full object-cover"
            src={tourImg3}
            alt="TourImg3"
          />
        </Card>
      </div>
      <div className="right w-[50%] flex flex-col  items-start pl-2">
        <h5 className="text-[24px] font-[400] font-['Russo_one'] leading-[95.5%] capitalize text-white mt-[0px]">
          WHAT IS THE SMASH GOLF TOUR?
        </h5>
        <h2 className=" text-start mt-5 font-['Russo_one'] font-[400] leading-[120%] uppercase bg-clip-text bg-gradient-to-b from-[#ffa500] to-[#b87802] text-[45px] text-transparent  tracking-[-1.8px] ">
          HOME OF GOLF &apos;S NON- TRADITIONAL CHAMPIONS
        </h2>
        <p className="text-[18px]  mt-[20px] w-[85%] text-start font-[400] leading-[146%] tracking-[-.36px] text-white ">
          Smash Golf Tour (SGT) is the first ever virtual tour Powered by
          Toptracer Range hosted on Smashers On App. Play and perform on golf
          &apos;s most iconic courses while competing against friends and fellow
          golfers all over America.
          <br />
          <br />
          If you&apos;re the most non-traditional player or a purist, Smash Golf
          Tour is available to all golfers and here is why:
        </p>
        <div className="w-full mt-[25px] flex flex-col gap-y-[25px]">
          <TourCard
            title="Compete At Any TopTracer Range"
            desc="Tee off against friends at any TopTracer range in the world."
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M13.9999 0C8.40839 0 3.85938 4.54902 3.85938 10.1405C3.85938 17.0797 12.9342 27.2668 13.3205 27.6971C13.6834 28.1013 14.317 28.1006 14.6793 27.6971C15.0657 27.2668 24.1405 17.0797 24.1405 10.1405C24.1403 4.54902 19.5914 0 13.9999 0ZM13.9999 15.2424C11.1867 15.2424 8.89801 12.9537 8.89801 10.1405C8.89801 7.32725 11.1867 5.03858 13.9999 5.03858C16.8131 5.03858 19.1018 7.3273 19.1018 10.1405C19.1018 12.9538 16.8131 15.2424 13.9999 15.2424Z"
                  fill="#FFA500"
                />
              </svg>
            }
          />
          <TourCard
            desc="Asperiores nemo possimus nesciunt quam mollitia."
            title="Track Your Stats  and Progress"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M28.0039 12.7944H22.0898V29.6171H28.0039V12.7944Z"
                  fill="#FFA500"
                />
                <path
                  d="M19.957 4.38281H14.0429V29.6172H19.957V4.38281Z"
                  fill="#FFA500"
                />
                <path
                  d="M11.9141 21.2056H5.99992V29.6172H11.9141V21.2056Z"
                  fill="#FFA500"
                />
              </svg>
            }
          />
          <TourCard
            desc="Asperiores nemo possimus nesciunt quam mollitia."
            title="Earn Smash Cash and Redeem
          Prizes in the Smash Shop!"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <path
                  d="M16.6637 4.64065H16.6379C15.5439 4.63723 14.4933 5.06854 13.7173 5.83971C12.9413 6.61088 12.5034 7.65874 12.5 8.75275C12.4966 9.84677 12.9279 10.8973 13.6991 11.6733C14.4703 12.4494 15.5181 12.8872 16.6121 12.8906H16.6379C17.7319 12.8941 18.7825 12.4627 19.5585 11.6916C20.3345 10.9204 20.7724 9.87255 20.7758 8.77854C20.7792 7.68452 20.3479 6.63395 19.5767 5.85794C18.8056 5.08194 17.7577 4.64406 16.6637 4.64065Z"
                  fill="#FFDA44"
                />
                <path
                  d="M27.4648 15.4688H5.80859V30.4219H27.4648V15.4688Z"
                  fill="#FFDA44"
                />
                <path
                  d="M17.1523 15.4688L14.0586 18.5625H5.80859V15.4688H17.1523Z"
                  fill="#B36500"
                />
                <path
                  d="M27.4648 15.4688V18.5625H19.7305L16.6367 15.4688H27.4648Z"
                  fill="#B36500"
                />
                <path
                  d="M16.6367 15.4688L14.0586 18.0469H2.19922L4.77734 15.4688H16.6367Z"
                  fill="#EE8700"
                />
                <path
                  d="M31.0742 18.0469H19.2148L16.6367 15.4688H28.4961L31.0742 18.0469Z"
                  fill="#EE8700"
                />
                <path
                  d="M27.4648 22.6875H5.80859V24.75H27.4648V22.6875Z"
                  fill="#E13957"
                />
                <path
                  d="M11.9961 18.0469H9.93359V30.4219H11.9961V18.0469Z"
                  fill="#D80027"
                />
                <path
                  d="M11.9961 18.0469H9.93359V18.5625H11.9961V18.0469Z"
                  fill="#BD0022"
                />
                <path
                  d="M7.35547 15.9844H5.80859C5.52382 15.9844 5.29297 16.2152 5.29297 16.5C5.29297 16.7848 5.52382 17.0156 5.80859 17.0156H7.35547C7.64024 17.0156 7.87109 16.7848 7.87109 16.5C7.87109 16.2152 7.64024 15.9844 7.35547 15.9844Z"
                  fill="#F2A239"
                />
                <path
                  d="M8.93895 15.9844H8.86573C8.60118 15.9844 8.38672 16.1988 8.38672 16.4634V16.5366C8.38672 16.8012 8.60118 17.0156 8.86573 17.0156H8.93895C9.20351 17.0156 9.41797 16.8012 9.41797 16.5366V16.4634C9.41797 16.1988 9.20351 15.9844 8.93895 15.9844Z"
                  fill="#F2A239"
                />
                <path
                  d="M17.1523 8.25H16.1211C15.9843 8.25 15.8532 8.19568 15.7565 8.09898C15.6598 8.00228 15.6055 7.87113 15.6055 7.73438C15.6055 7.59762 15.6598 7.46647 15.7565 7.36977C15.8532 7.27307 15.9843 7.21875 16.1211 7.21875H17.1523C17.2891 7.21875 17.4202 7.27307 17.5169 7.36977C17.6136 7.46647 17.668 7.59762 17.668 7.73438H18.6992C18.6992 7.32412 18.5362 6.93066 18.2461 6.64057C17.9561 6.35047 17.5626 6.1875 17.1523 6.1875V5.67188H16.1211V6.1875C15.7108 6.1875 15.3174 6.35047 15.0273 6.64057C14.7372 6.93066 14.5742 7.32412 14.5742 7.73438C14.5742 8.14463 14.7372 8.53809 15.0273 8.82818C15.3174 9.11828 15.7108 9.28125 16.1211 9.28125H17.1523C17.2891 9.28125 17.4202 9.33557 17.5169 9.43227C17.6136 9.52897 17.668 9.66012 17.668 9.79688C17.668 9.93363 17.6136 10.0648 17.5169 10.1615C17.4202 10.2582 17.2891 10.3125 17.1523 10.3125H16.1211C15.9843 10.3125 15.8532 10.2582 15.7565 10.1615C15.6598 10.0648 15.6055 9.93363 15.6055 9.79688H14.5742C14.5742 10.2071 14.7372 10.6006 15.0273 10.8907C15.3174 11.1808 15.7108 11.3438 16.1211 11.3438V11.8594H17.1523V11.3438C17.5626 11.3438 17.9561 11.1808 18.2461 10.8907C18.5362 10.6006 18.6992 10.2071 18.6992 9.79688C18.6992 9.38662 18.5362 8.99316 18.2461 8.70307C17.9561 8.41297 17.5626 8.25 17.1523 8.25Z"
                  fill="#FF5023"
                />
                <path
                  d="M24.3711 7.21875H23.3398V8.25H24.3711V7.21875Z"
                  fill="#FF5023"
                />
                <path
                  d="M24.3711 9.28125H23.3398V10.3125H24.3711V9.28125Z"
                  fill="#FF5023"
                />
                <path
                  d="M23.3398 8.25H22.3086V9.28125H23.3398V8.25Z"
                  fill="#FF5023"
                />
                <path
                  d="M25.4023 8.25H24.3711V9.28125H25.4023V8.25Z"
                  fill="#FF5023"
                />
                <path
                  d="M9.93359 7.21875H8.90234V8.25H9.93359V7.21875Z"
                  fill="#FF5023"
                />
                <path
                  d="M9.93359 9.28125H8.90234V10.3125H9.93359V9.28125Z"
                  fill="#FF5023"
                />
                <path
                  d="M8.90234 8.25H7.87109V9.28125H8.90234V8.25Z"
                  fill="#FF5023"
                />
                <path
                  d="M10.9648 8.25H9.93359V9.28125H10.9648V8.25Z"
                  fill="#FF5023"
                />
                <path
                  d="M17.1523 0H16.1211V1.03125H17.1523V0Z"
                  fill="#FF5023"
                />
                <path
                  d="M17.1523 2.0625H16.1211V3.09375H17.1523V2.0625Z"
                  fill="#FF5023"
                />
                <path
                  d="M16.1211 1.03125H15.0898V2.0625H16.1211V1.03125Z"
                  fill="#FF5023"
                />
                <path
                  d="M18.1836 1.03125H17.1523V2.0625H18.1836V1.03125Z"
                  fill="#FF5023"
                />
              </svg>
            }
          />
        </div>
        <Button className="w-[190px]  hover:scale-105 transition-all duration-500  mt-[30px] h-[50px] bg-[#3f83f8] shrink-0 text-[15.42px] font-[400] leading-[111.5%] font-['Russo_one'] uppercase">
          learn more
        </Button>
      </div>
    </MaxWidthContainer>
  );
};

export default Tour;
