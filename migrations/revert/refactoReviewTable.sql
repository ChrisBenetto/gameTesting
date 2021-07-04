-- Revert gametesting:refactoReviewTable from pg

BEGIN;

ALTER TABLE "review" 
    ALTER COLUMN "platform" SET NOT NULL;

COMMIT;
