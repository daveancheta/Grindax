"use client"
import { AlertCircleIcon, CheckCircle2Icon, Loader2Icon, Plus, PopcornIcon } from "lucide-react"
import { SignedOut, SignInButton } from "@clerk/nextjs"
import { SignedIn } from "@clerk/clerk-react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import { UseMovieStore } from "@/app/stores/use-movie-store"


function AddMovie() {
    const { handlePostMovie, isSubmitting, isSuccess, isError } = UseMovieStore();

    const handleSubmitMovie = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        handlePostMovie(formData)
    }

    return (
        <div>
            <SignedOut>
                <SignInButton>
                    <Button className="mb-4 cursor-pointer">
                        <Plus />
                        Add Movie
                    </Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="mb-4 cursor-pointer"
                            variant="default">
                            <Plus />
                            Add Movie</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-106.25">
                        <form onSubmit={handleSubmitMovie}>
                            <DialogHeader>
                                <DialogTitle>Add Movie</DialogTitle>
                                <DialogDescription>
                                    Add a new movie to your collection by providing its title, image URL, and rating. Make sure the details are accurate before submitting.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="mt-5">
                                {isSuccess &&
                                    <Alert>
                                        <CheckCircle2Icon />
                                        <AlertTitle>Success! Your changes have been saved</AlertTitle>
                                        <AlertDescription>
                                            Movie added! You can view it in your collection.
                                        </AlertDescription>
                                    </Alert>
                                }
                            </div>

                            <div>
                                {isError &&
                                    <div>
                                        <Alert variant="destructive">
                                            <AlertCircleIcon />
                                            <AlertTitle>Unable to add movie</AlertTitle>
                                            <AlertDescription>
                                                <p>There was an error while saving your movie.</p>
                                                <ul className="list-inside list-disc text-sm">
                                                    <li>Ensure all fields are filled correctly</li>
                                                </ul>
                                            </AlertDescription>
                                        </Alert>

                                    </div>
                                }
                            </div>

                            <div className="grid gap-4 mt-4">
                                <div className="grid gap-3">
                                    <Label htmlFor="title">Movie Title</Label>
                                    <Input id="title" name="title" placeholder="Redeeming Love" />
                                </div>
                                <div className="grid gap-3 mb-4">
                                    <Label htmlFor="rate">Rate</Label>
                                    <Input type="number" step="0.1" id="rate" name="rate" placeholder="8.5" />
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline" disabled={isSubmitting}>Cancel</Button>
                                </DialogClose>
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting &&
                                        <div>
                                            <Loader2Icon className="animate-spin w-4" />
                                        </div>}
                                    Submit Movie</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </SignedIn>
        </div >
    )
}

export default AddMovie