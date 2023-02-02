-- AlterTable
ALTER TABLE "tbmenus" ALTER COLUMN "parameters" SET DATA TYPE VARCHAR(1500),
ALTER COLUMN "route" SET DATA TYPE VARCHAR(500);

-- CreateTable
CREATE TABLE "tbtipopagina" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "dcescricao" VARCHAR(255) NOT NULL,

    CONSTRAINT "tbtipopagina_pkey" PRIMARY KEY ("id")
);
