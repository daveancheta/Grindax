"use server"
import { prisma } from "@/lib/prisma";

export interface MovieDTO {
    id: number;
    title: string ;
    imgURL: string ;
    rate: number ;
}

export async function getMovie() {
    const movie = await prisma.movie.findMany()

    return movie.map(m => ({
        id: m.id,
        title: m.title ?? "Untitled",
        imgURL: m.imgURL ?? "/placeholder.jpg",
        rate: m.rate ? m.rate.toNumber() : 0
    }));
}