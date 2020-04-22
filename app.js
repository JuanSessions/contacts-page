// import external node js module
const express = require("express")

// import handler http errors
// const httpError = require("http-errors")

const indexRoute = require("./routes/indexRoute")

// create express-server
const app = express()

app.use(express.json())

// use routes
app.use("/", indexRoute)


// create port
const port = process.env.PORT || 3000

// listen server
app.listen(port, () => {
    console.log(`Server has been started on port: ${port}`)
})