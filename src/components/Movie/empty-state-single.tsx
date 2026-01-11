import { FilmIcon } from "lucide-react";

export default function EmptyStateSingle() {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full py-12 px-4">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6 transition-all duration-300 hover:scale-105">
        <FilmIcon className="w-10 h-10 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-semibold text-foreground mb-3">
        Unknown movie
      </h2>
      <p className="text-muted-foreground max-w-md text-sm leading-relaxed mb-6">
        The movie with this ID could not be found. It may not exist in the database or the ID may be incorrect.
      </p>
    </div>
  );
}
