export const revalidate = 420;

interface Character {
  name: string;
  id: number;
  class: string;
  level: number;
  background: string;
}

interface Props {
  params: {
    id: number;
  };
}

export async function generateStaticParams() {
  const characters: Character[] = await fetch(
    "http://localhost:3000/api/characters"
  ).then((res) => res.json());

  return characters.map((character) => ({
    id: character.id,
  }));
}

export default async function CharacterPage({ params }: Props) {
  const characters: Character[] = await fetch(
    "http://localhost:3000/api/characters"
  ).then((res) => res.json());
  const character = characters.find((character) => character.id === params.id);
  return <div></div>;
}
