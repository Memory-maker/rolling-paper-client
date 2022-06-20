// type Colors = {
//   MAIN_BG: string;
//   POINT_COLOR: string;
//   SUBPOINT_COLOR: string;
//   POINT_ROW_COLOR: string;
//   GRAY_MID_COLOR: string;
//   GRAY_LOW_COLOR: string;
//   DARK_BG_COLOR: string;

//   KAKAO_COLOR: string;
//   WHITE_COLOR: string;
// };

// export interface CardColor {
//   CARD_RED: string;
//   CARD_BLUE: string;
//   CARD_GREEN: string;
//   CARD_PURPLE: string;
//   CARD_YELLOW: string;
// }

// export interface TextColor {
//   TEXT_RED_COLOR: string;
//   TEXT_BLUE_COLOR: string;
//   TEXT_GREEN_COLOR: string;
//   TEXT_PURPLE_COLOR: string;
//   TEXT_YELLOW_COLOR: string;
// }

const cardColor = {
  CARD_RED: "#FFD3D3",
  CARD_BLUE: "#D3EAFF",
  CARD_GREEN: "#DEF9C4",
  CARD_PURPLE: "#EFCCFF",
  CARD_YELLOW: "#FFF5BF",
  CARD_BEIGE: "#FFDEBF",
  CARD_WHITE: "#FFFFFF",
} as { [id: string]: string };

const textColor = {
  TEXT_RED_COLOR: "#FF0000",
  TEXT_BLUE_COLOR: "#0085FF",
  TEXT_GREEN_COLOR: "#7DFF00",
  TEXT_PURPLE_COLOR: "#AD00FF",
  TEXT_YELLOW_COLOR: "#FFD600",
} as { [id: string]: string };

const colors = {
  MAIN_BG: "#FFF8EB",
  POINT_COLOR: "#F05A39",
  SUBPOINT_COLOR: "#FFBA47",
  POINT_ROW_COLOR: "rgba(240, 90, 57, 0.8)",
  GRAY_MID_COLOR: " #787878",
  GRAY_LOW_COLOR: " #C0C0C0",
  DARK_BG_COLOR: "#736D62",

  KAKAO_COLOR: "#FEE500",
  WHITE_COLOR: "#ffff",
} as { [id: string]: string };

export { colors, cardColor, textColor };