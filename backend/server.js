import Express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes"

dotenv.config();

const port = process.env.PORT || 5001;

const app = Express();

app.use('/api/user', userRouter);

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () => console.log(`Server started on port ${port}`));