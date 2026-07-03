import express from "express"

const app = express();

const PORT = express();

app.use(express.json);

app.get("/", (req, res) => {
    return res.json({
        message: "Servidor todo listo"
    });
});
