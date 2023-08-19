import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from "../../api/auth/[...nextauth]/route"

import {CharacterCreateForm } from "@/components/CharacterCreateForm";

export default async function CharacterCreatePage() {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <>
      <CharacterCreateForm/>
    </>
  );
}
