export interface Pokedex {
  descriptions: Description[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon_entries: PokemonEntry[];
  region: null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  version_groups: any[];
}

export interface Description {
  description: string;
  language: Language;
}

export interface Language {
  name: string;
  url: string;
}

export interface Name {
  language: Language;
  name: string;
}

export interface PokemonEntry {
  entry_number: number;
  pokemon_species: Language;
}
