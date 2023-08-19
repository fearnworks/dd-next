
import CharacterList from "@/components/CharacterList";

export default async function CharactersPage() {
  const characters = await fetch("http://localhost:3000/api/characters").then(
    (res) => res.json()
  );
  return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
}
