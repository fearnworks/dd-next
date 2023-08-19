import {CharacterForm } from "@/components/CharacterForm";
import { GET } from "@/app/api/characters/route";
import {Character} from "@/schemas/Character";

interface Props {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const characters = await GET().then((res) => res.json())
 
  return  characters.map((character: Character) => ({
    id: character.id,
  }))
}

export default async function CharacterPage({ params }: Props) {
  const characters: Character[] = await GET().then((res) => res.json());
  const character: Character = await characters.find((character) => character.id === params.id);

  return (
    <>
      <CharacterForm character={character} />
    </>
  );
}
