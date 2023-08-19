import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { authOptions } from "../../api/auth/[...nextauth]/route"

import {CharacterCreateForm } from "./CharacterCreateForm";
interface Character {
  name: string;
  id: string;
  class: string;
  level: number;
  background: string;
}

interface Props {
  params: {
    id: string;
  };
}


export default async function CharacterCreatePage({ params }: Props) {
  console.log(params)
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  });


  const characters: Character[] = await fetch(
    "http://localhost:3000/api/characters"
  ).then((res) => res.json());
  const character = await characters.find((character) => character.id === params.id);

  return (
    <>
      <CharacterCreateForm/>
    </>
  );
}
