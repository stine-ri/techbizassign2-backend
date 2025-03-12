CREATE TABLE "course_registrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"fname" varchar(255) NOT NULL,
	"lname" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(20) NOT NULL,
	"education_level" text,
	"mode_of_learning" text NOT NULL,
	"payment_option" text NOT NULL,
	"mpesa_number" varchar(20),
	"enroll_day" integer NOT NULL,
	"enroll_month" integer NOT NULL,
	"enroll_year" integer NOT NULL,
	"course_selected" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "course_registrations_email_unique" UNIQUE("email")
);
