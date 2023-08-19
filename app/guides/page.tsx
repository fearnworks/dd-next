import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Guides",
    description: "Dungeon Driver Guides Page",   
}

export default function Guides() {
  return (
    <main className="flex-initial w-90 p-4 border-4 bg-slate-900 m-20">
      <h1 className="bg-slate-800 p-4">About</h1>
      <p className="p-4 bg-black">
        Welcome to DungeonDriver, your indispensable ally for creating truly
        immersive tabletop gaming experiences! Whether you're weaving intricate
        narratives, managing epic encounters, or guiding a band of adventurers
        through a world of your creation, our tool stands ready to help. Our
        goal is to provide a dynamic set of tools that allows you to focus on
        storytelling and player engagement, while we handle the logistical
        details—all from the comfort of your own hardware. Are you ready to
        revolutionize your role as a Dungeon Master? Gather your party, embark
        on tales of suspense and excitement, and let DungeonMaster Assistant be
        your trusted co-pilot in managing the game. Get ready to elevate your
        Dungeon Master experience like never before!
      </p>
    </main>
  );
}