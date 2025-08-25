import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useFetch from "@/hooks/useFetch";
import { Link } from "react-router";
import type { Pokedex } from "@/lib/interfaces/Pokedex";

export default function PokedexPage(): React.ReactNode {
  const pokedex = useFetch<Pokedex>("https://pokeapi.co/api/v2/pokedex/1");

  return (
    <section className="p-5 w-full min-h-screen flex flex-col items-center justify-center mt-24">
      {pokedex.loading && <p>Loading...</p>}
      {pokedex.error && <p>Error: {pokedex.error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full place-items-center">
        {pokedex.data?.pokemon_entries?.map((pokemon) => (
          <Card
            className="w-full max-w-md bg-neutral-100 text-foreground"
            key={pokemon.entry_number}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold first-letter:uppercase">
                {pokemon?.pokemon_species?.name}
              </CardTitle>
              <CardAction>
                <Button asChild variant="link" className="w-full">
                    <Link to={`/pokemon/${pokemon.entry_number}`}>
                      Details
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
                        className="w-36 h-36 mx-auto"
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
                        className="w-36 h-36 mx-auto"
                        loading="lazy"
                        />
                        <figcaption className="text-center text-sm font-light text-neutral-600">
                            Shiny
                        </figcaption>
                    </figure>
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
