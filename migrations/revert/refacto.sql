-- Revert gametesting:refacto from pg

BEGIN;


CREATE TABLE "platform" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE
);
CREATE TABLE "category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE
);

CREATE TABLE "game" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "summary" TEXT,
    "company" TEXT,
    "release_date" TIMESTAMPTZ NOT NULL,
    "picture_game" TEXT,
    "metacritic_score" TEXT DEFAULT 'NC',
    "url_trailer" TEXT 
);
CREATE TABLE "game_has_platform" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "platformId" INT NOT NULL REFERENCES "platform"("id"),
    "gameId" INT NOT NULL REFERENCES "game"("id")
);
CREATE TABLE "game_has_category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "categoryId" INT NOT NULL REFERENCES "category"("id"),
    "gameId" INT NOT NULL REFERENCES "game"("id")
);

COMMIT;
