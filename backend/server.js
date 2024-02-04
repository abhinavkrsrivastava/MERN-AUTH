import Express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5001;

const app = Express();

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () => console.log(`Server started on port ${port}`));