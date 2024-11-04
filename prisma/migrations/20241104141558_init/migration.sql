-- CreateTable
CREATE TABLE "CV" (
    "id" TEXT NOT NULL,
    "extractedText" TEXT NOT NULL,
    "anonToken" TEXT,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CV_pkey" PRIMARY KEY ("id")
);
