const express = require("express"),
  path = require("path");

const app = express();
const routes = require("./routes");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

// app.use("/assets", express.static("./frontend/assets"));

app
  // .get("/api/test", function (req, res) {
  //   res.status(200).json({ message: "Hello World" });
  // })
  .use("/api/arch", routes.archive)
  .use(
    "/arch",
    express.static(path.join(__dirname, "./frontend/views/site_archive"))
  )
  .use("/", express.static(path.join(__dirname, "./frontend")));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
