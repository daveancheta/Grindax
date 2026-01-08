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
import { postMovie } from "@/app/actions/movie.action"
import { toast } from "react-hot-toast";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import { useState } from "react"


function AddMovie() {
    const [success, setSuccess] = useState<String>("")
    const [error, setError] = useState<string>("")
    const [isListing, setIsListing] = useState<boolean>(false)

    const handlePostMovie = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsListing(true)

        const formData = new FormData(e.currentTarget)
        try {
            const res = await postMovie(formData)
            if (res.success) {
                setSuccess(res.message)
                setError("")
            } else {
                setError(res.message)
                setSuccess("")
            }
        } catch (error: any) {
            toast.error(error.message || "Something went wrong");
        } finally {
            setIsListing(false)
        }
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
                        <form onSubmit={handlePostMovie}>
                            <DialogHeader>
                                <DialogTitle>Add Movie</DialogTitle>
                                <DialogDescription>
                                    Add a new movie to your collection by providing its title, image URL, and rating. Make sure the details are accurate before submitting.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="mt-5">
                                {success.length > 0 &&
                                    <Alert>
                                        <CheckCircle2Icon />
                                        <AlertTitle>Success! Your changes have been saved</AlertTitle>
                                        <AlertDescription>
                                            {success}
                                        </AlertDescription>
                                    </Alert>
                                }
                            </div>

                            <div>
                                {error.length > 0 &&
                                    <div>
                                        <Alert variant="destructive">
                                            <AlertCircleIcon />
                                            <AlertTitle>Unable to add movie</AlertTitle>
                                            <AlertDescription>
                                                <p>There was an error while saving your movie.</p>
                                                <ul className="list-inside list-disc text-sm">
                                                    <li>{error}</li>
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
                                    <Input type="number" id="rate" name="rate" placeholder="8.5" />
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline" disabled={isListing}>Cancel</Button>
                                </DialogClose>
                                <Button type="submit" disabled={isListing}>
                                    {isListing &&
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