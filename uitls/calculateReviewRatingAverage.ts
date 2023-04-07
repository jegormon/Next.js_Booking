import { Review } from "@prisma/client";

export const calculateReviewRatingAverage = (reviews: Review[]) => {
  if (!reviews || !reviews.length) return 0;

  const average =
    reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0) / reviews.length;

  return parseFloat(average.toFixed(1));
};
