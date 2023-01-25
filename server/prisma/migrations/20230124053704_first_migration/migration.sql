-- CreateTable
CREATE TABLE "tbusuarios" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "password" VARCHAR(255) NOT NULL,
    "remember_token" VARCHAR(255),
    "status_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbusuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbmenus" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "parameters" VARCHAR(255),
    "route" VARCHAR(255),
    "icon" VARCHAR(255) NOT NULL,
    "parent_id" INTEGER,
    "component" VARCHAR(255),
    "has_childrens" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER,
    "disabled" BOOLEAN NOT NULL DEFAULT false,
    "status_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbmenus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbstatus" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "tbstatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbpaginas" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "tbpaginas_pkey" PRIMARY KEY ("id")
);
