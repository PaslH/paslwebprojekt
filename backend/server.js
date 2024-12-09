const express = require("express");
const app = express();
const PORT = 3000;

// Serve frontend
app.use(express.static("../frontend"));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
