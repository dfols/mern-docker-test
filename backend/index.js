const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const testRouter = require("./routes/testRoutes");
app.use("/api", testRouter);
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
