const app = require("./app");
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render('pages/index');
})

app.get("/page-1", (req, res) => {
  res.render('pages/page1');
})

app.get("/page-2", (req, res) => {
  res.render('pages/page2');
})

app.get("/page-3", (req, res) => {
  res.render('pages/page3');
})


app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});