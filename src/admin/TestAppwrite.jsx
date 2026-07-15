import React from "react";
import { tablesDB } from "../lib/appwrite";
import { ID } from "appwrite";

const DATABASE_ID = "6a4bcf20002dbee2b7c4";
const TABLE_ID = "products";

export default function TestAppwrite() {

  const createTestRow = async () => {
    try {
      const result = await tablesDB.createRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: ID.unique(),
        data: {
          name: "Test Product",
          price: 999,
          originalPrice: 1299,
          category: "men",
          subcategory: "Top Wear",
          brand: "Nike",
          description: "Testing",
          condition: "new",
          stock: 5,
          featured: false,
          newArrival: true,
          soldOut: false,
          freeShipping: true,
          sizes: ["M", "L"],
          imageUrls: [],
        },
      });

      console.log(result);
      alert("SUCCESS");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={createTestRow}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Create Test Product
      </button>
    </div>
  );
}