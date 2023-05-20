const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
var https = require("https");
var http = require("http");

const db = require("./ledom/db");

const config = require("./sliatededon/config")

const port = config.port;

const app = express();

app.set("port", port);

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  return next();
});

const adminRouter = require("./setuor/adminRouter");
const securityRouter = require("./setuor/securityRouter");
const currencyRouter = require("./setuor/currencyRouter");
const pairRouter = require("./setuor/pairRouter");
const siteSettingsRouter = require("./setuor/siteSettingsRouter");
const cmsRouter = require("./setuor/cmsRouter");
const blockListRouter = require("./setuor/blockListRouter");
const whiteListRouter = require("./setuor/whiteListRouter");
const swapRouter = require("./setuor/swapRouter");
const stakeRouter = require("./setuor/stakeRouter");
const liquidityRouter = require("./setuor/liquidityRouter");
const poolRouter = require("./setuor/poolRouter");


app.use("/api/admin", adminRouter);
app.use("/api/securitysettings", securityRouter);
app.use("/api/currency", currencyRouter);
app.use("/api/pairs", pairRouter);
app.use("/api/sitesettings", siteSettingsRouter);
app.use("/api/cms", cmsRouter);
app.use("/api/blocklist", blockListRouter);
app.use("/api/whitelist", whiteListRouter);
app.use("/api/swap", swapRouter);
app.use("/api/stake", stakeRouter);
app.use("/api/liquidity", liquidityRouter);
app.use("/api/pool", poolRouter);

app.get("/", (req, res) => {
  console.log(req.connection.remoteAddress, "IP")
  res.send(`<center><h4> Xpocket Admin Panel </h4> </center>`);
});

//logs read
app.get('/logs', (req, res) => {
  let file = path.join(__dirname, './logs/combined.outerr.log');
  fs.readFile(file, 'utf-8', (err, data) => {
    res.json(data);
  })
})
//logs delete
app.get('/emptyLogs', (req, res) => {
  let file = path.join(__dirname, './logs/combined.outerr.log');
  fs.writeFile(file, "", (err, data) => {
    res.json("Logs truncated");

  })
})


if (process.env.NODE_ENV == "local") {
  var httpServer = http.createServer(app);
  httpServer.listen(port, () => {
    console.log(
      `Http Server is Up and Running on http://localhost:${port} `
    );
  });
} else {
  var httpServer = http.createServer(app);
  httpServer.listen(port, () => {
    console.log(
      `Http Server is Up and Running on http://xpocketback.com`
    );
  });
}
