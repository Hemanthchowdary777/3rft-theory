import { tablesDB, storage } from "../lib/appwrite";
import { ID } from "appwrite";

const DATABASE_ID = "6a4bcf20002dbee2b7c4";
const TABLE_ID = "products";
const BUCKET_ID = "6a4bd3360005b7178f79";

export async function uploadImages(files = []) {
  const imageUrls = [];

  for (const file of files) {
    const uploaded = await storage.createFile(
      BUCKET_ID,
      ID.unique(),
      file
    );

    imageUrls.push(
      storage.getFileView(BUCKET_ID, uploaded.$id).toString()
    );
  }

  return imageUrls;
}

export async function addProduct(product, files = []) {
  const imageUrls = await uploadImages(files);

  return await tablesDB.createRow({
    databaseId: DATABASE_ID,
    tableId: TABLE_ID,
    rowId: ID.unique(),
    data: {
      ...product,
      imageUrls,
      soldOut: Number(product.stock) <= 0,
    },
  });
}

export async function getProducts() {
  const result = await tablesDB.listRows({
    databaseId: DATABASE_ID,
    tableId: TABLE_ID,
  });

  return result.rows;
}
export async function deleteProduct(id) {
    return await tablesDB.deleteRow({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      rowId: id,
    });
  }
  
  export async function getProduct(id) {
    return await tablesDB.getRow({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      rowId: id,
    });
  }
  export async function updateProduct(id, data) {
    return await tablesDB.updateRow({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      rowId: id,
      data,
    });
  }
  export async function getDashboardStats() {
    const products = await getProducts();
  
    return {
      total: products.length,
      featured: products.filter((p) => p.featured).length,
      newArrivals: products.filter((p) => p.newArrival).length,
      soldOut: products.filter((p) => p.soldOut).length,
    };
  }