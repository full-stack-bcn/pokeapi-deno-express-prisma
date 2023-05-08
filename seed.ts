import { parse } from "https://deno.land/std@0.186.0/csv/mod.ts";
import { PrismaClient } from './generated/client/index.js';

const prisma = new PrismaClient();

const pokemon_species = parse(await Deno.readTextFile("./data/pokemon_species.csv"), {
  skipFirstRow: true,
});

for (const species of pokemon_species) {

}
