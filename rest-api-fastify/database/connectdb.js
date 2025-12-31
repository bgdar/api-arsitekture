// docs https://nodejs.org/api/sqlite.html#sqlite
import  { DatabaseSync } from 'node:sqlite';

export const database  = new DatabaseSync("./database.db")

if (database.isOpen()) {
  console.info("database connected")
}else {
  throw new Error("Ada yang salah saat connect database")
}


