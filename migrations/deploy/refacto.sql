-- Deploy gametesting:refacto to pg

BEGIN;

DROP TABLE "platform" , "category" , "game" , "game_has_platform" , "game_has_category";
COMMIT;
