"use client";
import Link from "next/link";
export function CharacterForm({ character }: any) {
  const updateCharacter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log("Update Character");
    const body = {
      id: formData.get("id"),
      name: formData.get("name"),
      class: formData.get("class"),
      level: formData.get("level"),
      race: formData.get("race"),
      background: formData.get("background"),
    };
    console.log(body)
    const res = await fetch("/api/characters", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    await res;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600 text-black">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Edit Character
        </h2>
        <form className="mt-4" onSubmit={updateCharacter}>
          <div>
            <label className="block text-gray-700" htmlFor="id">
              ID
            </label>
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring"
              type="text"
              name="id"
              defaultValue={character?.id ?? ""}
            />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring"
              type="text"
              name="name"
              defaultValue={character?.name ?? ""}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700" htmlFor="class">
              Class
            </label>
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring"
              type="text"
              name="class"
              defaultValue={character?.class ?? ""}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700" htmlFor="level">
              Level
            </label>
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring"
              type="number"
              name="level"
              defaultValue={character?.level ?? ""}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700" htmlFor="race">
              Race
            </label>
            <textarea
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring"
              name="race"
              defaultValue={character?.race ?? ""}
            ></textarea>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700" htmlFor="background">
              Background
            </label>
            <textarea
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring"
              name="background"
              defaultValue={character?.background ?? ""}
            ></textarea>
          </div>

          <button
            className="w-full px-4 py-2 mt-6 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring"
            type="submit"
          >
            Save
          </button>
        </form>
        <Link href="/characters">
          <button className="inline-block w-full px-4 py-2 mt-4 font-medium text-white bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus:ring">
            Back to Characters
          </button>
        </Link>
      </div>
    </div>
  );
}
