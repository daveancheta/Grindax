import { create } from 'zustand'
import { getMovie, MovieDTO, postMovie } from '../actions/movie.action'

interface MovieState {
    isSubmitting: boolean;
    isSuccess: boolean;
    isError: boolean;
    handlePostMovie: (formData: FormData) => Promise<void>;
    handleGetMovie: () => Promise<void>;
    movie: MovieDTO[]
}
export const UseMovieStore = create<MovieState>((set) => ({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    movie: [],

    handlePostMovie: async (formData: FormData) => {
        set({ isSubmitting: true })
        try {
            const res = await postMovie(formData)
            if (res.success) {
                set({ isSuccess: true })
                set({ isError: false })
            } else {
                set({ isError: true })
                set({ isSuccess: false })
            }
        } catch (error) {
            console.log(error)
        } finally {
            set({ isSubmitting: false })
        }
    },

    handleGetMovie: async () => {
        try {
            const res = await getMovie();
            set({ movie: res })
        } catch (error) {
            console.log(error)
        }
    }
}))