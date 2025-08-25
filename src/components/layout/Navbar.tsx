import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useFetch from "@/hooks/useFetch";
import { Search } from "lucide-react";
import { Link } from "react-router";
import type { Pokedex } from "@/lib/interfaces/Pokedex";

const Navbar = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  const pokedex = useFetch<Pokedex>("https://pokeapi.co/api/v2/pokedex/1");
  const [filterPokemons, setFilterPokemons] = React.useState<
    Pokedex["pokemon_entries"] | undefined
  >(undefined);

  const handleSearch = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const scrollToTop = () => {
      const element = document.querySelector('.scroll-to-top');
      element?.scrollTo({ top: 0 });
    }
    const searchQuery = ref.current?.value?.toLowerCase().trim();
    const filteredPokemons = pokedex.data?.pokemon_entries?.filter((pokemon) =>
      pokemon.pokemon_species.name.toLowerCase().includes(searchQuery || "")
    );
    setFilterPokemons(filteredPokemons);
    scrollToTop();

    return console.log(filterPokemons?.length);
  };
  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-2 md:gap-6">
          <Link to={"/"} className="text-2xl">
            Pokedex
          </Link>

          <form
            className="relative hidden md:block z-10"
            onSubmit={handleSearch}
            onInput={handleSearch}
          >
            <Search className="h-5 w-5 absolute inset-y-0 my-auto left-2.5 z-10" />
            <Input
              ref={ref}
              className="pl-10 flex-1 bg-neutral-100/70 dark:bg-slate-800 border-none shadow-none w-[280px] rounded-full relative z-10"
              placeholder="Search"
            />
            <div
              className={`absolute top-0 w-full max-h-[340px] mt-11 bg-white z-0 ${
                filterPokemons && filterPokemons.length < 1025
                  ? "rounded-b-lg"
                  : "hidden"
              } rounded-t-lg border-neutral-300/50 border overflow-y-hidden`}
            >
              <ul className="flex flex-col max-h-[340px] h-full w-full overflow-scroll scroll-to-top">
                {filterPokemons &&
                  filterPokemons.length < 1025 &&
                  filterPokemons.map((pokemon) => (
                    <li
                      key={pokemon.entry_number}
                      className="px-4 py-2 border-b hover:bg-gray-100 flex items-center justify-start gap-4 w-full"
                    >
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.entry_number}.png`}
                        alt="Pokemon Sprite"
                        className="w-12 h-12 mx-auto flex-2/12"
                        loading="lazy"
                        />
                      <span className="font-medium w-fit flex-10/12 first-letter:uppercase">{pokemon.pokemon_species.name}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </form>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="icon"
            className="bg-muted text-foreground hover:bg-accent shadow-none md:hidden rounded-full"
          >
            <Search className="!h-5 !w-5" />
          </Button>
          <Button className="rounded-full" asChild>
            <Link to="/pokedex">Go to Pokedex</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
