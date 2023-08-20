
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const character  = await req.json();
  console.log("CREATE CHARACTER")
  console.log(character)
  character.level = Number(character.level);
  console.log(character)
  const record = await prisma.character.create({
    data: {
      id: character.id,
      name: character.name,
      class: character.class,
      level: character.level,
      race: character.race,
      background: character.background,

    },
  });
  return NextResponse.json(record);
}

export async function PUT(req: Request) {
  const character  = await req.json();
  console.log("PUT CHARACTER")
  console.log(character)
  character.level = Number(character.level);
  console.log(character)
  const record = await prisma.character.update({
    where: {
      id: character.id,
    },
    data: character,
  });

  return NextResponse.json(record);
}

export async function GET() {
    const characters = await prisma.character.findMany();

  
    return NextResponse.json(characters);
  }


