import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowRight } from "@tabler/icons-react";
import { MenuCategory } from "@next-orders/api-sdk";
import {
  GetChannel,
  GetMenu,
  GetProductsInCategory,
  GetShop,
} from "@/server/actions";
import { ProductCard } from "@/components/ProductCard";

export default async function Page() {
  const [shop, channel] = await Promise.all([GetShop(), GetChannel()]);
  if (!shop) {
    notFound();
  }

  const menu = await GetMenu(channel?.menus[0].id || "");

  const categories = menu?.categories?.map(async (category) => (
    <CategoryBlock key={category.id} category={category} />
  ));

  return (
    <>
      <h1 className="mb-2 text-3xl font-semibold">{shop.name}</h1>
      <div className="mb-6">Welcome to the site!</div>

      {categories}
    </>
  );
}

type CategoryBlockProps = {
  category: MenuCategory;
};

const CategoryBlock = async ({ category }: CategoryBlockProps) => {
  // Load Products in this category
  const products = await GetProductsInCategory(category.id);
  if (!products || !products.length) {
    return null;
  }

  // Limit 6 products
  const showProducts = products.slice(0, 6);

  const Products = () => {
    return showProducts.map((product) => {
      const productUrl = "/catalog/" + category.slug + "/" + product.slug;

      return (
        <ProductCard key={product.id} productUrl={productUrl} {...product} />
      );
    });
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center gap-2">
        <h2 className="text-2xl md:text-3xl font-semibold">{category.name}</h2>

        <Link
          href={`/catalog/${category.slug}`}
          className="px-5 py-3 flex flex-row gap-2 text-base font-medium bg-zinc-200 cursor-pointer hover:scale-95 duration-200 rounded-2xl"
        >
          Open category <IconArrowRight stroke={1.5} />
        </Link>
      </div>
      <div
        key={category.id}
        className="mt-4 mb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-2"
      >
        <Products />
      </div>
    </>
  );
};
