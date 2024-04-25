export type Pokemon = {
    name: string;
    id: string;
    imgSrc: string;
}

export type PokemonDetails = {

    name: string;
    id: string;
    imgSrc: string;
    hp: number;
    attack: number;
    defense: number;
 }

 export type Item = {
    name: string;
    id: string;
    imgSrc: string;
    effect_entries: string;
    cost: number;
 }