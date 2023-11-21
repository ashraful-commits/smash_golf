import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type NavItemProps = {
  NavItems: {
    path: string;
    name: string;
  }[];
};

export type UpcomingGameProps = {
  hostImg: StaticImageData | string;
  username: string;
  time: string;
  gameImg: StaticImageData | string;
  entry: string;
  reward: string;
  entryNum: string | number;
  styles: string;
  title: string;
};
export type howItWork = {
  cardImg: StaticImageData | string;
  desc: string;
  bgImg?: StaticImageData | string | undefined;

  title: string;
};
export type TourCard = {
  svg: ReactNode;
  desc: string;

  title: string;
};
