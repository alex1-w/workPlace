import { IFreelancer } from "./IFreelancer";
export type ReviewType = "positive" | "negative";

export interface IReview {
  user: IFreelancer;
  reviewText: string;
  rating: number;
  type: ReviewType;
}
