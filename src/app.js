import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50b", extended: true }));

app.listen(PORT, () => {
    console.log(`SERVER START http://localhost:${PORT}`)
});