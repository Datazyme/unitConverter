// load .env data into process.env
//require("dotenv").config();

// Web server config
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;
const app = express();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for  error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.set("views", __dirname + "/views");
app.set("styles", __dirname + "/styles");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  "styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/vendor",
    isSass: false, // false => scss, true => sass
  })
);

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// Export the Express API
module.exports = app;
