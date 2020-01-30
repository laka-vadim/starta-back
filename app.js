const express = require("express");
const bodyParser = require("body-parser");
const init = require("./routes/init");
const book = require("./routes/book");

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use("/init", init);
app.use("/book", book);

app.listen(PORT);
