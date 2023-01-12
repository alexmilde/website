import { PrismaClient, Review } from "@prisma/client";

type ReviewCreate = Omit<Review, "id" | "published">

const prisma = new PrismaClient();

export function getReviewsPublishedCount() {
    return prisma.review.count({
        where: {
            published: true
        }
    });
}

export function getReviews() {
    return prisma.review.findMany();
}

export async function createReview(review: ReviewCreate) {
    return prisma.review.create({ data: review });
  }
