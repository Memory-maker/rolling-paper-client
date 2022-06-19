type Colors = {
  POINT_COLOR: String;
  MAIN_BG: String;
  SUBPOINT_COLOR: String;
  POINT_ROW_COLOR: String;
  GRAY_MID_COLOR: String;
  GRAY_LOW_COLOR: String;
  DARK_BG_COLOR: String;
  KAKAO_COLOR: String;
  WHITE_COLOR: String;
};

interface CardColor {
  CARD_PINK: String;
  CARD_BLUE: String;
  CARD_GREEN: String;
  CARD_PURPLE: String;
  CARD_BEIGE: String;
}

interface TextColor {
  TEXT_RED_COLOR: String;
  TEXT_BLUE_COLOR: String;
  TEXT_GREEN_COLOR: String;
  TEXT_PURPLE_COLOR: String;
  TEXT_YELLOW_COLOR: String;
}

const cardColor: CardColor = {
  CARD_PINK: "#FFD3D3",
  CARD_BLUE: "#D3EAFF",
  CARD_GREEN: "#DEF9C4",
  CARD_PURPLE: "#EFCCFF",
  CARD_BEIGE: "#FFF5BF",
};

const textColor: TextColor = {
  TEXT_RED_COLOR: "#FF0000",
  TEXT_BLUE_COLOR: "#0085FF",
  TEXT_GREEN_COLOR: "#7DFF00",
  TEXT_PURPLE_COLOR: "#AD00FF",
  TEXT_YELLOW_COLOR: "#FFD600",
};

const colors: Colors = {
  MAIN_BG: "#FFF8EB",
  POINT_COLOR: "#F05A39",
  SUBPOINT_COLOR: "#FFBA47",
  POINT_ROW_COLOR: "rgba(240, 90, 57, 0.8)",
  GRAY_MID_COLOR: " #787878",
  GRAY_LOW_COLOR: " #C0C0C0",
  DARK_BG_COLOR: "#736D62",

  KAKAO_COLOR: "#FEE500",
  WHITE_COLOR: "#ffff",
};

export { colors, cardColor, textColor };
