import Image from "next/image";
import MaxWidthContainer from "./MaxWidthContainer";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import avatar from "@/public/avatar.png";
import logo from "@/public/logo.png";
import Link from "next/link";
import { Button } from "../ui/button";
const Header = () => {
  return (
    <MaxWidthContainer className="w-full h-[70px] bg-[#1C1C24] px-[14px] flex items-center sticky z-[99999] top-0">
      <header className=" w-full flex h-full items-center justify-between">
        <div className="w-full mx-auto h-full flex justify-between items-center">
          <Link href="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
            <Image
              className="w-[47px] h-[44px] shrink-0"
              src={logo}
              alt="logo"
            />
            <span className="font-[400] ml-[10px] text-[18px] font-['Russo_one'] leading-[95.5%] tracking-[-0.72px] capitalize text-white">
              smash golf tour
            </span>
          </Link>
          <div className="h-full flex items-center">
            <div className="w-[245px] h-[38px] justify-between shrink-0 flex  items-center overflow-hidden   bg-[#13131a] rounded-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-2"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.6829 17.6371C1.1057 14.0599 1.1057 8.2601 4.6829 4.6829C8.2601 1.1057 14.0599 1.1057 17.6371 4.6829C20.9069 7.95265 21.1879 13.0794 18.4802 16.6683L22.0943 20.2825C23.0371 21.2253 21.6229 22.6395 20.6801 21.6967L17.1092 18.1257C13.5103 21.2061 8.08905 21.0432 4.6829 17.6371ZM16.2229 6.09712C13.4267 3.30096 8.89327 3.30096 6.09712 6.09712C3.30096 8.89327 3.30096 13.4267 6.09712 16.2229C8.89327 19.019 13.4267 19.019 16.2229 16.2229C19.019 13.4267 19.019 8.89327 16.2229 6.09712Z"
                  fill="#B5B5BE"
                />
              </svg>
              <input
                type="search"
                className="bg-transparent h-full focus:outline-none text-[#FAFAFB] font-['Poppins'] w-[200px] font-[600] text-[14px] "
                placeholder="Search"
              />
            </div>
            <button className="ml-[46px]">
              <svg
                fill="#ffffff"
                width="24px"
                height="24px"
                viewBox="0 0 36 36"
                version="1.1"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>notification-line</title>
                <path
                  className="clr-i-outline clr-i-outline-path-1"
                  d="M32.51,27.83A14.4,14.4,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93,1,1,0,0,0-.34.75v1.36a1,1,0,0,0,1,1h27.8a1,1,0,0,0,1-1V28.58A1,1,0,0,0,32.51,27.83ZM5.13,28.94a16.17,16.17,0,0,0,2.44-3,14.24,14.24,0,0,0,1.65-5.85V15.15a8.74,8.74,0,1,1,17.47,0v4.94a14.24,14.24,0,0,0,1.65,5.85,16.17,16.17,0,0,0,2.44,3Z"
                ></path>
                <path
                  className="clr-i-outline clr-i-outline-path-2"
                  d="M18,34.28A2.67,2.67,0,0,0,20.58,32H15.32A2.67,2.67,0,0,0,18,34.28Z"
                ></path>
                <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
              </svg>
            </button>
            <Avatar className="w-[32px] ml-[20px] h-[32px] rounded-full overflow-hidden ">
              <Image src={avatar ? avatar : ""} alt="avatar" />
            </Avatar>
          </div>
        </div>
      </header>
    </MaxWidthContainer>
  );
};

export default Header;
