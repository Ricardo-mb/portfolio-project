import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { schema } from "./graphql/schema.js";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import expressPlayground from "graphql-playground-middleware-express";
dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use(morgan("dev"));

app.use(
  "/graphql",
  createHandler({
    schema,
  })
);

// Enable GraphQL Playground
app.get("/playground", expressPlayground.default({ endpoint: "/graphql" }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`.bgMagenta)
);
