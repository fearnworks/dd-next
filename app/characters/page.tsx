import Link from 'next/link';

export default async function Blog() {
  const posts = await fetch('http://localhost:3000/api/characters', {cache: "no-cache"}).then((res) =>
    res.json()
  );
  return (
    <div>
      <div className="min-h-screen bg-gray-900 px-10">
        <div className="px-10">
          <h1 className=" px-10 text-4xl font-semibold text-center text-gray-100">
            Characters           <Link href={`/characters/create`}>
            <button className="bg-green-950 px-4">Create</button>
          </Link></h1>

        </div>
        <ul className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts.map((character: any) => (
            <li key={character.id} className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md">
              <Link href={`/characters/${character.id}`}>
                <p className="flex items-center justify-center h-48 bg-gray-400">
                  <span className="text-lg font-semibold text-white">{character.name}</span>
                </p>
              </Link>
              <div className="flex flex-col justify-between flex-1 p-6">
                <div>
                  <p className="text-sm text-gray-600">Class : {character.class}</p>
                  <p className="mt-2 text-sm text-gray-600">Level : {character.level}</p>
                  <p className="mt-2 text-sm text-gray-600">Background : {character.background}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}