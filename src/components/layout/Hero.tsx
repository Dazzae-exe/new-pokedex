import type React from "react";
import { Button } from "../ui/button";
import { ArrowRightCircleIcon } from "lucide-react";
import { Link } from "react-router";

export default function Hero(): React.JSX.Element {
  return (
    <section className="p-5 w-full min-h-screen">
      <div className="grid md:grid-cols-4 grid-cols-2 content-center gap-5 h-[85vh] rounded-lg relative overflow-hidden mt-16">
        <h1 className="text-6xl xl:text-[200px] uppercase font-bold mb-4 scroll-m-20 z-10 col-span-2 md:col-span-3 flex items-center">
          Pokedex
        </h1>
        <p className="mb-8 z-10 col-span-2 md:col-span-1 flex flex-col items-center justify-center gap-8 font-medium">
          Your way to explore the world of Pokémon. Search your favorite
          Pokémon, learn about their abilities, and discover their types.
          <Button
            type="button"
            variant="outline"
            className="rounded-full"
            asChild
          >
            <Link to={`/pokedex`}>
              Go to Pokedex <ArrowRightCircleIcon />
            </Link>
          </Button>
        </p>
        <div className="flex relative w-full justify-center z-10 space-x-4 col-span-2 md:col-span-4 max-h-[340px] overflow-hidden rounded-lg">
          <img src="https://wallpapers-clan.com/wp-content/uploads/2024/06/pokemon-pikachu-electric-jump-desktop-wallpaper-preview.jpg" alt="Poke image" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
