"use client"
import { Plus } from "lucide-react"
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


function AddMovie() {
    return (
        <div>
            <SignedOut>
                <SignInButton>
                    <Button className="mb-4">
                        <Plus />
                        Add Movie
                    </Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="mb-4" variant="default">
                            <Plus />
                            Add Movie</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-106.25">
                        <form>
                            <DialogHeader>
                                <DialogTitle>Add Movie</DialogTitle>
                                <DialogDescription>
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4">
                                <div className="grid gap-3">
                                    <Label htmlFor="title">Movie Title</Label>
                                    <Input id="title" name="title" placeholder="Redeeming Love" />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="imgUrl">Image Url</Label>
                                    <Input id="imgUrl" name="imgUrl" placeholder="https://example.com/image.jpeg" />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="rate">Rate</Label>
                                    <Input id="rate" name="rate" placeholder="8.5" />
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type="submit">Submit Movie</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </SignedIn>
        </div>
    )
}

export default AddMovie