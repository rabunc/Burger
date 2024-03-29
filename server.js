var express = require("express")
var methodOverride = require("method-override")
var bodyParser = require("body-parser")
var exphbs = require("express-handlebars")

var app = express()
var port = process.env.PORT || 3000;

app.use(express.static("public"))
app.use(methodOverride("_method"))
app.use(bodyParser.urlencoded({ extended: false }))
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

var routes = require("./controllers/burgers_controller.js")

app.use("/", routes)

app.listen(port)