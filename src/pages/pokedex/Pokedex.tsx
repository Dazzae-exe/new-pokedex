import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useFetch from "@/hooks/useFetch";
import type React from "react";
import { Link } from "react-router";

export default function PokedexPage(): React.ReactNode {
  const pokedex = useFetch("https://pokeapi.co/api/v2/pokedex/1");

  return (
    <section className="p-5 w-full min-h-screen flex flex-col items-center justify-center mt-20">
      {pokedex.loading && <p>Loading...</p>}
      {pokedex.error && <p>Error: {pokedex.error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full place-items-center">
        {pokedex.data?.pokemon_entries?.map((pokemon: any) => (
          <Card
            className="w-full max-w-md bg-neutral-50 text-neutral-950"
            key={pokemon.entry_number}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold first-letter:uppercase">
                {pokemon?.pokemon_species?.name}
              </CardTitle>
              <CardAction>
                <Button asChild variant="link" className="w-full">
                    <Link to={`/pokemon/${pokemon.entry_number}`}>
                      View Details
                    </Link>
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-center mb-4">
                    <figure className="">
                        <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.entry_number}.png`}
                        alt="Pokemon Sprite"
                        className="w-24 h-24 mx-auto"
                        loading="lazy"
                        />
                        <figcaption className="text-center text-sm font-light text-neutral-600">
                            Regular
                        </figcaption>
                    </figure>
                    <figure className="">
                        <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon?.entry_number}.png`}
                        alt="Pokemon Sprite"
                        className="w-24 h-24 mx-auto"
                        loading="lazy"
                        />
                        <figcaption className="text-center text-sm font-light text-neutral-600">
                            Shiny
                        </figcaption>
                    </figure>
                </div>
            </CardContent>
            <CardFooter>
              <CardAction className="w-full">
                <CardDescription className="text-center">
                  <p className="text-sm text-neutral-600">
                    Entry Number: {pokemon.entry_number}
                  </p>
                </CardDescription>
              </CardAction>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
