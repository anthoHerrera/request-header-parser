if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
const express = require("express");
const app = express();
const cors = require("cors");
const headersRouter = require("./routes/header-parser");

const port = process.env.PORT || 3000;

app.set("trust proxy", 1);

app.use(cors());

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/api/v1/whoami", headersRouter);

const start = () => {
    try {
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
