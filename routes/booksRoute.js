const Route = require("express").Router()
const {
    getBooks,
    getBook,
    postBook,
    putBook,
    deleteBook
} = require("../controllers/booksController")

Route.get("/", getBooks)
Route.get("/:id", getBook)
Route.post("/", postBook)

/* Route.route("/")
.get(getBooks)
.post(postBook) */

Route.put("/:id", putBook)

Route.delete("/:id", deleteBook)



module.exports = Route