import { FilmIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmptyState({ onAddMovie }: { onAddMovie?: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center 
    text-center w-full">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
        <FilmIcon className="w-8 h-8 text-gray-400" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-900">No movies found</h2>
      <p className="text-gray-500 max-w-xs">
        You haven't added any movies yet. Start building your collection by adding your first movie!
      </p>
      {onAddMovie && (
        <Button
          onClick={onAddMovie}
          variant="default"
          className="mt-2 inline-flex items-center gap-2"
        >
          <PlusIcon className="w-4 h-4" />
          Add Movie
        </Button>
      )}
    </div>
  );
}
