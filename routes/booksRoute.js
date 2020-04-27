const Route = require("express").Router()
const {
    getBooks,
    getBook,
    postBook,
    putBook,
    deleteBook
} = require("../controllers/booksController")
const {
    log
} = require("../middleware/log")


Route.get("/", getBooks)
Route.get("/:id", getBook)
Route.post("/", postBook)
    /* Route.route("/")
    .get(getBooks)
    .post(postBook) */
    //this is the client with the request sending to the server and with middleware as a door keeper 
    //to check that the conditions for the request to have a response are correct




Route.put("/:id", putBook)

Route.delete("/:id", deleteBook)



module.exports = Route