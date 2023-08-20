export const dynamic = 'force-dynamic'

import { Character } from "@/schemas/Character";
import CharacterList from "@/components/CharacterList";
import { GET } from "../api/characters/route";

export default async function CharactersPage() {
  const characters: Character[] = await GET().then(
    (res) => res.json()
  );
  return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
}
