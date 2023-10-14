"use server";

import { MainAPI } from "@next-orders/api-sdk";

const api = new MainAPI(
  process.env.API_URL || "no-api-url-env",
  process.env.API_PRIVATE_TOKEN || "no-api-private-token-env",
);

const nextConfig = {
  next: {
    revalidate: 120,
  },
};

export const GetCategories = async () => {
  const categories = await api.getCategories(nextConfig);
  if (!categories || categories instanceof Error) {
    return null;
  }

  return categories;
};

export const GetCategoryBySlug = async (slug: string) => {
  const category = await api.getCategoryBySlug(slug, nextConfig);
  if (!category || category instanceof Error) {
    return null;
  }

  return category;
};

export const GetProductsInCategory = async (id: string) => {
  const products = await api.getProductsInCategory(id, nextConfig);
  if (!products || products instanceof Error) {
    return null;
  }

  return products;
};

export const GetProductBySlug = async (slug: string) => {
  const product = await api.getProductBySlug(slug, nextConfig);
  if (!product || product instanceof Error) {
    return null;
  }

  return product;
};

export const GetCheckout = async (id: string) => {
  const checkout = await api.getCheckout(id, nextConfig);
  if (!checkout || checkout instanceof Error) {
    return null;
  }

  return checkout;
};
