// import { MongoClient } from 'mongodb';

// const MONGODB_URI = 'mongodb+srv://shivamk2000com:r5qEy1whtl4DhkC5@cluster0.arhuew8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const MONGODB_DB = 'portfolio';

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// if (!MONGODB_DB) {
//   throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
// }

// let cachedClient = null;
// let cachedDb = null;

// export async function connectToDatabase() {
//   if (cachedClient && cachedDb) {
//     return { client: cachedClient, db: cachedDb };
//   }

//   const client = await MongoClient.connect(MONGODB_URI);
//   const db = client.db(MONGODB_DB);

//   cachedClient = client;
//   cachedDb = db;

//   return { client, db };
// } 
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

if (!process.env.MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable');
}

if (process.env.NODE_ENV === 'development') {
  // In dev, use global to preserve value across reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  return { client, db };
}