-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imgURL" TEXT,
    "rate" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);
