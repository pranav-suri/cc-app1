import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World! The time is " + new Date());
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

console.log("Hello via Bun!");
setInterval(() => {
    console.log("Hello World! The time is " + new Date());
    console.error("Error message: ", new Date());
}, 5000);
