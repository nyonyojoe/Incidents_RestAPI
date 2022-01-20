const express = require('express')
const incidentsRoutes = require('./src/incidents/routes')


const app = express();
const port = process.env.PORT || 3000

app.use(express.json())

function request(req, res){
    res.send("hello")
}

app.get("/", request)

app.use("/api/incidents", incidentsRoutes);

app.listen(port,
    () => console.log(`app listening on port ${port}`))