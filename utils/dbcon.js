import mongoose from 'mongoose'

const MONGODB_URL = "mongodb://localhost:27017/pizzaOrdering"

if (!MONGODB_URL) {
  throw new Error(
    'Please define the MONGODB_URL environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      return mongoose
    })
    // .then(() => {
    //     console.log("DB Connection successfull");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect