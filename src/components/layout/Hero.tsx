import type React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Hero(): React.JSX.Element {
  return (
    <section className="p-5 w-full h-full">
      <div className="flex flex-col items-center justify-center h-[90vh] rounded-lg">
        <h1 className="text-7xl font-bold mb-4 scroll-m-20">Pokedex Project</h1>
        <p className="text-lg mb-8">
          Your way to explore the world of Pokémon. Search your favorite Pokémon, learn about their abilities, and discover their types.
        </p>
        <div className="flex max-w-md relative w-full justify-center">
          <Input
            className="w-full bg-white relative text-neutral-950 rounded-lg"
            placeholder="Search any pokemon here..."
          />
          <Button type="button" variant="secondary" className="absolute right-0 rounded-md border-1 border-neutral-800">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}
