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
  gameImg: string;
  entry: number;
  reward: string;
  entryNum: number;
  styles: Record<string, string>;
  title: string;
};
