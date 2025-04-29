const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from 'public' and 'src' directories
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "src")));

// Serve index.html as default
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
