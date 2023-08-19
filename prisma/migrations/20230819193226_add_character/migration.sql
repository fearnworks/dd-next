-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "background" TEXT,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);
