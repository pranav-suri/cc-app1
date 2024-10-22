import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World! The time is " + new Date());
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

console.log("Hello via Bun!");
setInterval(() => {
    console.log("Hello World! The time is " + new Date());
    console.error("Error message: ", new Date())
}, 5000);
