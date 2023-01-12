import { PrismaClient, test } from "@prisma/client";

const prisma = new PrismaClient();

export function getReviews() {

    return prisma.test.findMany();
}
