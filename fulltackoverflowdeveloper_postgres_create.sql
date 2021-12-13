CREATE TABLE "questions" (
	"question" TEXT NOT NULL,
	"id" serial NOT NULL,
	"student" varchar(75) NOT NULL,
	"submitted_at" DATE NOT NULL,
	"tags" TEXT NOT NULL,
	"class" varchar(2) NOT NULL,
	CONSTRAINT "questions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "answers" (
	"id" serial NOT NULL,
	"id_question" integer NOT NULL,
	"answered_at" DATE NOT NULL,
	"id_user" integer NOT NULL,
	"answer" TEXT NOT NULL,
	CONSTRAINT "answers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "users" (
	"id" serial NOT NULL,
	"name" varchar(75) NOT NULL,
	"class" varchar(2) NOT NULL,
	"token" varchar(36) NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "answers" ADD CONSTRAINT "answers_fk0" FOREIGN KEY ("id_question") REFERENCES "questions"("id");
ALTER TABLE "answers" ADD CONSTRAINT "answers_fk1" FOREIGN KEY ("id_user") REFERENCES "users"("id");





