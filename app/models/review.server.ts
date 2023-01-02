import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function getReviews() {
  return prisma.reviews.findMany();
}
