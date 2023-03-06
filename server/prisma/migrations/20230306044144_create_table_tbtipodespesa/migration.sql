-- CreateTable
CREATE TABLE "tbtipodespesa" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,

    CONSTRAINT "tbtipodespesa_pkey" PRIMARY KEY ("id")
);
