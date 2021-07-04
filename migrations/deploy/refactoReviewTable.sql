-- Deploy gametesting:refactoReviewTable to pg

BEGIN;

ALTER TABLE "review" 
    ALTER COLUMN "platform" DROP NOT NULL;

COMMIT;
