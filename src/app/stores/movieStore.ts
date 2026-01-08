import { create } from 'zustand'
import { postMovie } from '../actions/movie.action'

interface MovieState {
    isSubmitting: boolean;
    isSuccess: boolean;
    isError: boolean;
    handlePostMovie: (formData: FormData) => Promise<void>;
}
export const movieStore = create<MovieState>((set) => ({
    isSubmitting: false,
    isSuccess: false,
    isError: false,

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
    }
}))