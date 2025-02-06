CREATE TABLE "channels" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) DEFAULT now() NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"conditions" text,
	"phone" text,
	"country_code" text NOT NULL,
	"currency_code" text NOT NULL,
	"time_zone" text NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"is_delivery_available" boolean DEFAULT true NOT NULL,
	"is_pickup_available" boolean DEFAULT true NOT NULL,
	"min_amount_for_delivery" integer
);
--> statement-breakpoint
CREATE TABLE "checkout_lines" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) DEFAULT now() NOT NULL,
	"quantity" integer DEFAULT 1 NOT NULL,
	"unit_price" double precision DEFAULT 0 NOT NULL,
	"undiscounted_unit_price" double precision DEFAULT 0 NOT NULL,
	"total_price" double precision DEFAULT 0 NOT NULL,
	"undiscounted_total_price" double precision DEFAULT 0 NOT NULL,
	"is_gift" boolean DEFAULT false NOT NULL,
	"checkout_id" varchar(24) NOT NULL,
	"product_variant_id" varchar(24) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "checkout_receivers" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) DEFAULT now() NOT NULL,
	"type" text NOT NULL,
	"data" jsonb,
	"channel_id" varchar(24) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "checkouts" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) DEFAULT now() NOT NULL,
	"status" text DEFAULT 'CREATED' NOT NULL,
	"delivery_method" text DEFAULT '',
	"payment_method_id" text DEFAULT '',
	"shipping_price" double precision DEFAULT 0 NOT NULL,
	"total_price" double precision DEFAULT 0 NOT NULL,
	"name" text DEFAULT '' NOT NULL,
	"phone" text DEFAULT '' NOT NULL,
	"time" timestamp(3) DEFAULT now() NOT NULL,
	"time_type" text DEFAULT 'ASAP' NOT NULL,
	"discount" double precision,
	"warehouse_id" text,
	"street" text DEFAULT '',
	"flat" text,
	"doorphone" text,
	"entrance" text,
	"floor" text,
	"address_note" text,
	"note" text,
	"change" text,
	"channel_id" varchar(24) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "medias" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "menu_categories" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) DEFAULT now() NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"menu_id" varchar(24) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "menus" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) DEFAULT now() NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"is_active" boolean DEFAULT false NOT NULL,
	"channel_id" varchar(24) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "payment_methods" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"type" text NOT NULL,
	"channel_id" varchar(24) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_variants" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"weight_unit" text DEFAULT 'G' NOT NULL,
	"weight_value" double precision NOT NULL,
	"gross" double precision NOT NULL,
	"net" double precision,
	"sku" text,
	"calories" double precision,
	"carbohydrate" double precision,
	"fat" double precision,
	"protein" double precision,
	"product_id" varchar(24) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) DEFAULT now() NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"is_available_for_purchase" boolean DEFAULT true NOT NULL,
	"channel_id" varchar(24) NOT NULL,
	"category_id" varchar(24) NOT NULL,
	"media_id" varchar(24)
);
--> statement-breakpoint
CREATE TABLE "user_credentials" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) DEFAULT now() NOT NULL,
	"login" text NOT NULL,
	"password_hash" text NOT NULL,
	"user_id" varchar(24) NOT NULL,
	CONSTRAINT "user_credentials_login_unique" UNIQUE("login")
);
--> statement-breakpoint
CREATE TABLE "user_permissions" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) DEFAULT now() NOT NULL,
	"code" text NOT NULL,
	"user_id" varchar(24) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) DEFAULT now() NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"is_confirmed" boolean DEFAULT false NOT NULL,
	"is_staff" boolean DEFAULT false NOT NULL,
	"name" text,
	"email" text,
	"channel_id" varchar(24) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "warehouses" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"address" text NOT NULL,
	"channel_id" varchar(24) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "working_days" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) DEFAULT now() NOT NULL,
	"day" text NOT NULL,
	"open_hours" integer NOT NULL,
	"open_minutes" integer NOT NULL,
	"close_hours" integer NOT NULL,
	"close_minutes" integer NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"channel_id" varchar(24) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "checkout_lines" ADD CONSTRAINT "checkout_lines_checkout_id_checkouts_id_fk" FOREIGN KEY ("checkout_id") REFERENCES "public"."checkouts"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "checkout_lines" ADD CONSTRAINT "checkout_lines_product_variant_id_product_variants_id_fk" FOREIGN KEY ("product_variant_id") REFERENCES "public"."product_variants"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "checkout_receivers" ADD CONSTRAINT "checkout_receivers_channel_id_channels_id_fk" FOREIGN KEY ("channel_id") REFERENCES "public"."channels"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "checkouts" ADD CONSTRAINT "checkouts_channel_id_channels_id_fk" FOREIGN KEY ("channel_id") REFERENCES "public"."channels"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "menu_categories" ADD CONSTRAINT "menu_categories_menu_id_menus_id_fk" FOREIGN KEY ("menu_id") REFERENCES "public"."menus"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "menus" ADD CONSTRAINT "menus_channel_id_channels_id_fk" FOREIGN KEY ("channel_id") REFERENCES "public"."channels"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "payment_methods" ADD CONSTRAINT "payment_methods_channel_id_channels_id_fk" FOREIGN KEY ("channel_id") REFERENCES "public"."channels"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "product_variants" ADD CONSTRAINT "product_variants_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_channel_id_channels_id_fk" FOREIGN KEY ("channel_id") REFERENCES "public"."channels"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_menu_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."menu_categories"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_media_id_medias_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."medias"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "user_credentials" ADD CONSTRAINT "user_credentials_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "user_permissions" ADD CONSTRAINT "user_permissions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_channel_id_channels_id_fk" FOREIGN KEY ("channel_id") REFERENCES "public"."channels"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "warehouses" ADD CONSTRAINT "warehouses_channel_id_channels_id_fk" FOREIGN KEY ("channel_id") REFERENCES "public"."channels"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "working_days" ADD CONSTRAINT "working_days_channel_id_channels_id_fk" FOREIGN KEY ("channel_id") REFERENCES "public"."channels"("id") ON DELETE cascade ON UPDATE cascade;