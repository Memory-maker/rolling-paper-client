import Card from "./Card.type";

export interface RollingPaper {
  cards: Card[];
  userName: string;
  paperId: number;
  title: string;
  dueDate: Date;
  theme: string;
  paperUrl: string;
  opeanStatus: string;
}
