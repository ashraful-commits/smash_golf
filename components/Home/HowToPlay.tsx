import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import { Button } from "../ui/button";
import howtoplayBg from "@/public/howtoplaybg.png";
import howttoplaymobile from "@/public/howToPlayMobile.png";
import howtopalyoverlay from "@/public/howtoplayoverlay.png";
import appStore from "@/public/App Store.png";

import Image from "next/image";
const HowToPlay = () => {
  return (
    <MaxWidthContainer className="w-full  min-h-[786px] z-[0] relative flex  px-[90px] pb-[45px]">
      <div>
        <Image
          className="absolute object-cover top-0 left-0 w-full h-full z-[10]"
          src={howtoplayBg}
          alt="whyStartbg"
        />
        <Image
          className="absolute object-cover top-0 left-0 w-full h-full z-[20]"
          src={howtopalyoverlay}
          alt="overlay left"
        />
      </div>
      <div className="w-[45%] z-[20] h-full relative flex justify-center items-center min-h-[786px]  overflow-hidden">
        <Image
          className=" object-cover self-end mb-7 left-10 h-full w-auto "
          src={howttoplaymobile}
          alt="mobile"
        />
      </div>
      <div className="right w-[55%] h-full relative z-[30] flex flex-col items-start pl-10 pt-[80px]">
        <h5 className="text-[24px] font-[400] font-['Russo_one'] leading-[95.5%] capitalize text-white mt-[0px]">
          BECOME A SMASH GOLF CHAMPION
        </h5>
        <h2 className=" text-start mt-[15px] font-['Russo_one'] font-[400] leading-[95.5%] uppercase bg-clip-text bg-gradient-to-b from-[#ffa500] to-[#b87802] text-[70px] text-transparent  tracking-[-2.8px] ">
          HOW TO PLAY
        </h2>

        <div className="w-full mt-[25px] gap-y-[25px] flex flex-col">
          <div className="step w-full flex justify-start flex-col">
            <span className="text-[#2A7DF5] text-[18px] font-[700] leading-[146%] text-start tracking-[-0.36px] ">
              Step 1:
            </span>
            <p className="text-start text-white text-[18px] font-[400] leading-[146%] tracking-[-0.36px] ">
              Install SmashersON (50) App then use Google or Apple to
              register/log in
            </p>
          </div>
          <div className="step w-full flex justify-start flex-col">
            <span className="text-[#2A7DF5] text-[18px] font-[700] leading-[146%] text-start tracking-[-0.36px] ">
              Step 1:
            </span>
            <p className="text-start text-white text-[18px] font-[400] leading-[146%] tracking-[-0.36px] ">
              On SO home page enter average 9 Hole score to establish handicap.
              (Only required once, handicap will update based on scores posted)
            </p>
          </div>
          <div className="step w-full flex justify-start flex-col">
            <span className="text-[#2A7DF5] text-[18px] font-[700] leading-[146%] text-start tracking-[-0.36px] ">
              Step 1:
            </span>
            <p className="text-start text-white text-[18px] font-[400] leading-[146%] tracking-[-0.36px] ">
              Click Play Now then tap Events to view Live tournaments and
              contests
            </p>
          </div>
          <div className="step w-full flex justify-start flex-col">
            <span className="text-[#2A7DF5] text-[18px] font-[700] leading-[146%] text-start tracking-[-0.36px] ">
              Step 1:
            </span>
            <p className="text-start text-white text-[18px] font-[400] leading-[146%] tracking-[-0.36px] ">
              Click the Icon displayed to view format, Smash Cash Purse,
              timeframe, leaderboard, rules, and who&apos;s playing
            </p>
          </div>
          <div className="step w-full flex justify-start flex-col">
            <span className="text-[#2A7DF5] text-[18px] font-[700] leading-[146%] text-start tracking-[-0.36px] ">
              Step 1:
            </span>
            <p className="text-start text-white text-[18px] font-[400] leading-[146%] tracking-[-0.36px] ">
              To Enter the event click Register, complete and its game-time!!
            </p>
          </div>
        </div>
        <div className="flex mt-6 gap-4">
          <Button className="w-[175px] hover:scale-105 transition-all duration-500 ease-in-out  mt-[12px] h-[50px] bg-[#3f83f8] relative  shrink-0 overflow-hidden">
            <div className="h-full flex items-center w-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="32"
                viewBox="0 0 29 32"
                fill="none"
                className="w-[27px] h-[30px]  object-cover object-center flex-shrink-0  mr-4"
              >
                <path
                  d="M21.1632 20.3569C24.6862 18.3423 27.3572 16.8074 27.5874 16.6882C28.3236 16.2802 29.0843 15.2008 27.5874 14.3625C27.1041 14.0989 24.5019 12.6115 21.1632 10.6938L16.5352 15.5611L21.1629 20.3569H21.1632Z"
                  fill="#FFD900"
                />
                <path
                  d="M16.5337 15.5615L1.79688 31.0283C2.14254 31.0761 2.53309 30.9805 2.99372 30.7169C3.96038 30.1661 14.2073 24.3384 21.162 20.3584L16.5337 15.5615Z"
                  fill="#F43249"
                />
                <path
                  d="M16.533 15.5614L21.1607 10.7178C21.1607 10.7178 4.02947 0.982035 2.99272 0.407566C2.60268 0.166017 2.16499 0.0946022 1.77344 0.166017L16.533 15.5611V15.5614Z"
                  fill="#00EE76"
                />
                <path
                  d="M16.5333 15.5611L1.77354 0.166016C1.17448 0.310158 0.668213 0.861259 0.668213 1.98788V29.2053C0.668213 30.2371 1.06002 30.9801 1.79623 31.0515L16.5331 15.5609L16.5333 15.5611Z"
                  fill="#00D3FF"
                />
              </svg>
              <div className="flex-grow flex flex-col items-start w-full">
                <span className="text-white block text-start text-[12px] absolute top-1 ">
                  Download on the
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="130"
                  height="32"
                  viewBox="0 0 130 32"
                  fill="none"
                  className="absolute left-[23px] top-4"
                >
                  <g clip-path="url(#clip0_1_3743)">
                    <path
                      d="M64.5447 13.0023C61.9076 13.0023 59.7288 15.1866 59.7288 18.1814C59.7288 21.1518 61.8848 23.3606 64.5449 23.3606C67.2048 23.3606 69.3605 21.1763 69.3605 18.1814C69.3605 15.1866 67.2048 13.0023 64.5447 13.0023ZM64.5447 21.2997C63.0996 21.2997 61.8391 19.9983 61.8391 18.1583C61.8391 16.2928 63.1006 15.017 64.5447 15.017C65.9887 15.017 67.2503 16.2928 67.2503 18.1583C67.2503 19.9983 65.9887 21.2997 64.5447 21.2997ZM54.0645 13.0023C51.4044 13.0023 49.2484 15.1866 49.2484 18.1814C49.2484 21.1518 51.4044 23.3606 54.0645 23.3606C56.7244 23.3606 58.8803 21.1763 58.8803 18.1814C58.8803 15.1866 56.7244 13.0023 54.0642 13.0023H54.0645ZM54.0645 21.2997C52.6192 21.2997 51.3589 19.9983 51.3589 18.1583C51.3589 16.2928 52.6204 15.017 54.0645 15.017C55.5096 15.017 56.7701 16.2928 56.7701 18.1583C56.7701 19.9983 55.5312 21.2997 54.0645 21.2997ZM41.612 14.598V16.7822H46.4732C46.3351 18.0094 45.9464 18.9176 45.3727 19.5317C44.6621 20.2923 43.5612 21.1274 41.612 21.1274C38.6073 21.1274 36.2919 18.5257 36.2919 15.3099C36.2919 12.0941 38.6085 9.44328 41.612 9.44328C43.2396 9.44328 44.41 10.1308 45.2813 11.0148L46.7254 9.46774C45.5095 8.21636 43.8819 7.25928 41.612 7.25928C37.5065 7.25928 34.0664 10.8669 34.0664 15.261C34.0664 19.6553 37.5065 23.263 41.612 23.263C43.8362 23.263 45.4879 22.4779 46.8178 21.0043C48.1707 19.5562 48.5835 17.5184 48.5835 15.8741C48.5835 15.3588 48.538 14.8923 48.4685 14.4993L41.612 14.598ZM92.5684 16.2915C92.1782 15.1376 90.9405 13.0023 88.4629 13.0023C85.9856 13.0023 83.9449 15.089 83.9449 18.1814C83.9449 21.0774 85.9856 23.3606 88.6924 23.3606C90.8938 23.3606 92.1553 21.9124 92.6824 21.0774L91.0548 19.8994C90.5039 20.7589 89.7704 21.3228 88.6924 21.3228C87.6145 21.3228 86.8581 20.8075 86.3758 19.7516L92.7738 16.8801L92.5684 16.2915ZM86.0551 18.0349C86.0097 16.0461 87.5005 15.0156 88.5543 15.0156C89.403 15.0156 90.0911 15.4575 90.3429 16.1205L86.0551 18.0349ZM80.8493 23.0173H82.9596V7.84761H80.8493V23.0173ZM77.4103 14.1561H77.3417C76.8604 13.542 75.9662 13.0023 74.8187 13.0023C72.4106 13.0023 70.2321 15.2855 70.2321 18.1814C70.2321 21.0774 72.4335 23.3364 74.8187 23.3364C75.9649 23.3364 76.8594 22.7964 77.3417 22.1578H77.4103V22.8943C77.4103 24.8831 76.4234 25.9378 74.8415 25.9378C73.5571 25.9378 72.7541 24.9318 72.4335 24.0967L70.5994 24.9318C71.1262 26.3065 72.5259 28 74.8415 28C77.3179 28 79.4053 26.4288 79.4053 22.6244V13.321H77.4103V14.1561ZM75.0022 21.2997C73.5571 21.2997 72.3423 19.9983 72.3423 18.1828C72.3423 16.3672 73.5581 15.0412 75.0022 15.0412C76.4247 15.0412 77.571 16.3672 77.571 18.1828C77.57 19.9738 76.4234 21.2997 75.0022 21.2997ZM102.406 7.84788H97.3614V23.0173H99.4716V17.273H102.406C104.746 17.273 107.039 15.4561 107.039 12.5604C107.039 9.66447 104.746 7.84761 102.406 7.84761V7.84788ZM102.475 15.1634H99.4932V9.9585H102.475C104.034 9.9585 104.951 11.3577 104.951 12.5602C104.93 13.7384 104.035 15.1634 102.475 15.1634ZM115.456 12.9778C113.942 12.9778 112.36 13.6898 111.718 15.3099L113.576 16.145C113.989 15.3099 114.722 15.0401 115.502 15.0401C116.603 15.0401 117.704 15.7518 117.727 17.0032V17.151C117.336 16.9056 116.535 16.5613 115.525 16.5613C113.507 16.5613 111.465 17.764 111.465 19.9738C111.465 22.0114 113.117 23.3119 114.951 23.3119C116.374 23.3119 117.153 22.6244 117.634 21.8149H117.703V22.9932H119.743V17.1752C119.721 14.5001 117.863 12.9776 115.456 12.9776V12.9778ZM115.204 21.2752C114.516 21.2752 113.552 20.9065 113.552 19.9994C113.552 18.8211 114.744 18.3792 115.776 18.3792C116.693 18.3792 117.129 18.6002 117.703 18.8945C117.542 20.2937 116.418 21.2752 115.204 21.2752ZM127.105 13.3224L124.697 19.876H124.629L122.13 13.3221H119.86L123.62 22.5021L121.487 27.6326H123.688L129.444 13.3221H127.105L127.105 13.3224ZM108.209 23.0173H110.319V7.84761H108.209V23.0173Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3743">
                      <rect
                        width="128.889"
                        height="31.1111"
                        fill="white"
                        transform="translate(0.554688 0.777832)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </Button>
          <Button className="w-[175px] hover:scale-105 transition-all duration-500 ease-in-out mt-[12px]  h-[50px] justify-center items-center bg-[#3f83f8] !p-[5px] shrink-0 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="47"
              viewBox="0 0 48 47"
              fill="none"
              className="row-span-2"
            >
              <path
                d="M39.1276 33.0213C38.5892 34.2765 37.924 35.4733 37.1424 36.5933C36.0982 38.0847 35.2407 39.1152 34.5835 39.6888C33.5626 40.626 32.466 41.1083 31.2935 41.1355C30.4535 41.1355 29.4385 40.8963 28.2563 40.4102C27.0701 39.926 25.9812 39.6888 24.9837 39.6888C23.9396 39.6888 22.8196 39.926 21.6199 40.4102C20.4221 40.8963 19.4538 41.151 18.7129 41.1744C17.591 41.223 16.469 40.7291 15.351 39.6888C14.6374 39.0666 13.7449 37.9972 12.6735 36.4844C11.5262 34.8724 10.5832 32.996 9.84431 30.863C9.05292 28.5549 8.65625 26.3227 8.65625 24.1605C8.65625 21.6852 9.19097 19.5483 10.2624 17.7594C11.0727 16.3545 12.2312 15.1819 13.6263 14.3547C15.0019 13.5296 16.5723 13.0853 18.1763 13.0674C19.0707 13.0674 20.2432 13.3435 21.6957 13.888C23.1482 14.4324 24.0815 14.7085 24.4879 14.7085C24.7951 14.7085 25.8276 14.3838 27.5854 13.7402C29.244 13.1433 30.644 12.8963 31.7913 12.9935C34.9024 13.2444 37.2376 14.4694 38.7913 16.6783C36.0107 18.3641 34.636 20.7227 34.6632 23.7502C34.6865 26.1088 35.544 28.0708 37.224 29.6283C37.9668 30.339 38.8334 30.9078 39.781 31.3063C39.5749 31.9033 39.3571 32.473 39.1276 33.0213ZM31.9974 4.96105C31.9974 6.80827 31.3207 8.53494 29.9771 10.1313C28.3515 12.0291 26.3876 13.1277 24.2585 12.9547C24.2306 12.7224 24.217 12.4886 24.2176 12.2547C24.2176 10.4794 24.9876 8.5816 26.3624 7.02799C27.0468 6.24244 27.9179 5.58716 28.9737 5.06605C30.0276 4.55271 31.0232 4.26883 31.9604 4.22021C31.9857 4.4691 31.9974 4.71605 31.9974 4.96105Z"
                fill="white"
              />
            </svg>
            <div>
              <span className="text-[12.22px] font-[500] leading-[31.11px] ">
                Download on the
              </span>
              <Image className="mb-[8px]" src={appStore} alt="app store" />
            </div>
          </Button>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default HowToPlay;
