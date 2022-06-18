const express = require("express");
const app     = express();
const path    = require("path");
const port    = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/discography", (req, res) => {
    res.render("discography");
});

app.get("*", (req, res) => {
    res.send("<h1>RANDOM PAGE</h1>");
});

app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
});