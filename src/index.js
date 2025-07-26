import dotenv from "dotenv";

import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});
const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is listening at port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Mongodb connection error", error);
    process.exit(1);
  });
