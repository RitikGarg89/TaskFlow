const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to TaskFlow Backend");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});