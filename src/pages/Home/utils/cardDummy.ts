export interface Card {
  content: string;
  background: string;
  rotate: string;
}

const cardDummy: Card[] = [
  {
    content: "사랑해",
    background: "CARD_RED",
    rotate: "-10",
  },
  {
    content: "고마워",
    background: "CARD_BLUE",
    rotate: "10",
  },
  {
    content: "잘부탁해",
    background: "CARD_GREEN",
    rotate: "-10",
  },
  {
    content: "수고했어",
    background: "CARD_PURPLE",
    rotate: "10",
  },
  {
    content: "오래 보자",
    background: "CARD_YELLOW",
    rotate: "10",
  },
  {
    content: "그리울꺼야",
    background: "CARD_BEIGE",
    rotate: "-10",
  },
  {
    content: "소중해",
    background: "CARD_GREEN",
    rotate: "-10",
  },
  {
    content: "축하해",
    background: "CARD_WHITE",
    rotate: "10",
  },
  {
    content: "응원해",
    background: "CARD_BLUE",
    rotate: "10",
  },
];

export default cardDummy;
