"use server"
import { prisma } from "@/lib/prisma";

export async function getMovie() {
    const movie = await prisma.movie.findMany()

    return movie;
}