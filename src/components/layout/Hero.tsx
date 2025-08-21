import type React from "react";
import { Button } from "../ui/button";
import { ArrowRightCircleIcon } from "lucide-react";
import { Link } from "react-router";

export default function Hero(): React.JSX.Element {
  return (
    <section className="p-5 w-full h-full">
      <div className="flex flex-col items-center justify-center h-[90vh] rounded-lg relative overflow-hidden mt-16">
        <h1 className="text-6xl font-bold mb-4 scroll-m-20 z-10">Pokedex</h1>
        <p className="mb-8 z-10">
          Your way to explore the world of Pokémon. Search your favorite Pokémon, learn about their abilities, and discover their types.
        </p>
        <div className="flex max-w-md relative w-full justify-center z-10 space-x-4">
          <Button type="button" variant="outline" className="rounded-full" asChild>
            <Link to={`/pokedex`}>Go to Pokedex <ArrowRightCircleIcon /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
