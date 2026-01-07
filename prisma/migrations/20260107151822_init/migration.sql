-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "imgURL" TEXT,
    "rate" DECIMAL(65,30),

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);
