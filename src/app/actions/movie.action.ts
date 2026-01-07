"use server"
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export interface MovieDTO {
    id: number;
    title: string;
    imgURL: string;
    rate: number;
}

export async function getMovie() {

    const { userId } = await auth();
    const movie = await prisma.movie.findMany()

    if (!userId) return [];

    return movie.map(m => ({
        id: m.id,
        title: m.title ?? "Untitled",
        imgURL: m.imgURL ?? "/placeholder.jpg",
        rate: m.rate ? m.rate.toNumber() : 0
    }));
}