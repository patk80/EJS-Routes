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

app.get("/new", (req, res) => {
    res.render("new");
});

app.post("/tacos", (req, res) => {
    const {meat, qty} = req.body;
    res.send(`Okay, here are your ${qty} ${meat} tacos!!!`);
});

app.get("/cats", (req, res) => {
    const cats = [
        "Blue", "Rocket", "Burger", "Jimmy", "Favicon", "Handlebar", "DEVILMAN"
    ];
    res.render("cats", { cats });
});

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.render("subreddit", { subreddit });
});

app.get("*", (req, res) => {
    res.send("<h1>RANDOM PAGE</h1>");
});

app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
});