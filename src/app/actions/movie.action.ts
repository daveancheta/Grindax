"use server"
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export interface MovieDTO {
    id: number;
    title: string;
    rate: number;
    posterUrl?: string;
    backdropUrl?: string;
    voteAverage?: number;
    voteCount?: number;
    vote_count?: number;
    vote_average?: number;
    popularity?: number;
    overview?: string;
}

export async function getMovie() {
    const { userId } = await auth();
    if (!userId) return [];

    const movie = await prisma.movie.findMany({
        where: {
            posted_by: userId,
        }
    })

    return movie.map(m => ({
        id: m.id,
        title: m.title ?? "Untitled",
        rate: m.rate ? m.rate.toNumber() : 0
    }));
}

export async function postMovie(formData: FormData) {
    const title = formData.get("title")?.toString();
    const rate = Number(formData.get("rate"));
    const { userId } = await auth();

    try {
        if (!userId) {
            throw new Error("Unauthorized")
        }

        if (!title || !rate) {
            return {
                success: false,
                message: "Ensure all fields are filled correctly"
            }
        }

        const movie = await prisma.movie.create({
            data: {
                title,
                rate,
                posted_by: userId
            }
        })

        return {
            success: true,
            message: "Movie added! You can view it in your collection."
        }

    } catch (error) {
        console.log("Error in Post Movie", error);
        return {
            success: false,
            message: "Error in Post Movie"
        }
    }

}