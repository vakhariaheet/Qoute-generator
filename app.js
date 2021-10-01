const express = require("express");
const cors = require("cors");
const data = require("./quotes.json");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/random", (req, res) => {
    const {q} = req.query;
    // If Q is Not Number
    if (isNaN(q)) {
        return res.status(500).json({err: "Query should be Number"});
    }
    const quotes = new Array(5).fill(0).map(() => {
        return data[Math.floor(Math.random() * data.length)]
    })
    return res.status(200).json(quotes)

});
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));