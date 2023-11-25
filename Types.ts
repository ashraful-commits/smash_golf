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
export type liveEvent = {
  liveEventBanner: string | StaticImageData;
};

export type maxWidthType = {
  className?: string;
  children: ReactNode;
};
export type leaderType = {
  leaderAvatar: StaticImageData | string;
  name: string;
  Id: number;
  game: string;
  point: number;
};
export type UpcomingType = {
  tourImg: StaticImageData | string;
  date: string;
  time: string;
  title: string;
  prize: number;
  Participant: number;
};
export type eventType = {
  tourImg: StaticImageData | string;
  date: string;
  time: string;
  title: string;
  Participant: number;
};
export type MostPopularType = {
  tourImg: StaticImageData | string;
  title: string;
};
export type SliderType = {
  bigLeague: StaticImageData | string;
};
export type AchievementType = {
  prize: number;
  time: string;
  banner: StaticImageData | string;
  title: string;
  left: number;
};
export type singleInvoice = {
  name: string;
  avatar: StaticImageData | string;
  rank: number;
  id: string;
  point: number;
  gross: number;
  Net: number;
  handicap: number;
  smashCash: number;
  mostPlayed: { name: string; logo: StaticImageData | string }[];
};
export type InvoiceType = {
  data: singleInvoice;
};
