"use server"

import { prisma } from '@/db/prisma'
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

export async function getLatestProducts() {

  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: LATEST_PRODUCTS_LIMIT,
  })
  return convertToPlainObject(products)
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: {slug: slug },
  });
}

