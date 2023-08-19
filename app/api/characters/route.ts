import { getServerSession } from "next-auth";

const characters = [
  {
    name: "Tav Lorem",
    id: 1,
    class: "Druid",
    race: "Half-Elf",
    level: 1,
    background:
      "Raised among the wood elves in the High Forest, Tav Lorem has dedicated his life to preserving the natural world. His mixed heritage sometimes makes him an outsider, but his connection to nature is unwavering.",
  },
  {
    name: "Karlin Ironfist",
    id: 2,
    class: "Paladin",
    race: "Dwarf",
    level: 1,
    background:
      "Hailing from Mithral Hall, Karlin Ironfist seeks justice and honor. Trained as a Paladin, he follows the teachings of Moradin and strives to protect his kin and uphold the law.",
  },
  {
    name: "Seraphina Moonwhisper",
    id: 3,
    class: "Sorcerer",
    race: "Human",
    level: 1,
    background:
      "Born in Waterdeep, Seraphina stumbled upon her innate magical abilities after a chance encounter with a mystical artifact. With a thirst for knowledge, she seeks to understand and control her arcane powers.",
  },
  {
    name: "Thalrik Shadowfoot",
    id: 4,
    class: "Rogue",
    race: "Halfling",
    level: 1,
    background:
      "A native of Baldur's Gate, Thalrik Shadowfoot grew up on the streets. His agility and cunning made him a natural Rogue, and he now seeks adventure, fortune, and perhaps a bit of mischief.",
  },
  {
    name: "Gorash the Wild",
    id: 5,
    class: "Barbarian",
    race: "Orc",
    level: 1,
    background:
      "From the harsh Spine of the World, Gorash the Wild embodies the primal rage of the wilderness. As a Barbarian, he seeks to prove himself in battle and embrace his wild nature.",
  },
];

import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  return NextResponse.json(characters);
}
