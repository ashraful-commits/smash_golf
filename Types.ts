import { StaticImageData } from "next/image";

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
