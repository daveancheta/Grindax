import { FilmIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function EmptyState({ onAddMovie }: { onAddMovie?: () => void }) {
  return (
    <div>
      <SignedIn>
        <div className="flex flex-col items-center justify-center text-center w-full py-12 px-4">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6 transition-all duration-300 hover:scale-105">
            <FilmIcon className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            No movies found
          </h2>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed mb-6">
            You haven't added any movies yet. Start building your collection by adding your first movie!
          </p>
         
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex flex-col items-center justify-center text-center w-full py-12 px-4">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6 transition-all duration-300 hover:scale-105">
            <FilmIcon className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Sign in to continue
          </h2>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed mb-6">
            Please sign in to view and manage your movie collection.
          </p>
        </div>
      </SignedOut>
    </div>
  );
}
