"use server"
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

// Get all of the movie
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

// Get movie by the id
export async function getMovieById(id: number) {
    const { userId } = await auth();

    const movie = await prisma.movie.findUnique({
        where: {
            id: id,
            posted_by: userId
        }
    })

    if (!movie) return null;

    return {
        id: movie.id,
        title: movie.title ?? "Untitled",
        rate: movie.rate ? movie.rate.toNumber() : 0
    }
}

// Submit a movie
export async function postMovie(formData: FormData) {
    const title = formData.get("title")?.toString();
    const rate = Number(formData.get("rate"));
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized")
    }

    if (!title || !rate) {
        return {
            success: false,
            message: "Ensure all fields are filled correctly"
        }
    }

    const inputMovie = await prisma.movie.findFirst({
        where: {
            title: title?.toLowerCase()
        }
    })

    if (inputMovie) return {
        success: false,
        message: "Movie already exist in the collection."
    }

    await prisma.movie.create({
        data: {
            title: title?.toLowerCase(),
            rate,
            posted_by: userId
        }
    })

    return {
        success: true,
        message: "Movie added! You can view it in your collection."
    }
}

// Update a movie
export async function updateMovie(id: number, formData: FormData) {
    const rate = Number(formData.get("rate"))

    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized")
    }

    if (!rate) return {
        success: false,
        message: "The rate field is required."
    }

    await prisma.movie.update({
        where: {
            id: id
        },
        data: {
            rate: rate
        }
    })

    return {
        success: true,
        message: `Movie has been updated successfully!`
    }
}

// Delete a movie
export async function deleteMovie(id: number) {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized")
    }

    await prisma.movie.delete({
        where: {
            id: id
        }
    })
}