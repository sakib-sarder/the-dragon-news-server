const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const categories = require("./Data/categories.json");
const cors = require("cors");
const news = require("./Data/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon is Running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (id == 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => n.category_id == id);
    res.send(categoryNews);
  }
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`Daragon api is running on port: ${port}`);
});
