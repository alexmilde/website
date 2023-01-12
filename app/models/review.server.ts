import {PrismaClient, Review} from "@prisma/client";
import NodeMailer from "nodemailer";

type ReviewCreate = Omit<Review, "id" | "published">

const prisma = new PrismaClient();

export function getReviewsPublishedCount() {
    return prisma.review.count({
        where: {
            published: true
        }
    });
}


export function getReviewsRatingAverage() {
    return prisma.review.aggregate({
        where: {
            published: true
        },
        _avg: {
            rating: true,
        },
    });
}

export function getReviews() {
    return prisma.review.findMany({
        where: {
            published: true
        }
    });
}

export async function createReview(review: ReviewCreate) {

    let transporter = NodeMailer.createTransport({
        host: "smtp.ionos.de",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "drop@finekost.com", // generated ethereal user
            pass: process.env.MAIL_PASSWORD, // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: 'drop@finekost.com', // sender address
        to: "alex@finekost.com", // list of receivers
        subject: "New Review recieved", // Subject line
        text: `${review.name} [${review.rating}] ${review.text}`, // plain text body
        html: `${review.name} [${review.rating}] ${review.text}`, // html body
    });

    return prisma.review.create({data: review});
}
