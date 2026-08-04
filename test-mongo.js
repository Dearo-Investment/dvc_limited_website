import clientPromise from "./lib/mongodb.js"; // make sure this path matches your lib

async function test() {
  const client = await clientPromise;
  const db = client.db("dearo_investors");
  const collections = await db.listCollections().toArray();
  console.log("Collections:", collections);
}

test();