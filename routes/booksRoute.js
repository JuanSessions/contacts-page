const Route = require("express").Router()
const {
    getBooks,
    getBook,
    postBook,
    putBook,
    deleteBook
} = require("../controllers/booksController")

const auth = require("../middleware/authenticator")
const isAdmin = require("../middleware/rolesAuthenticator")

Route.get("/", auth, getBooks) //auth checks that the user has a token and then continue w the request
Route.get("/:id", auth, getBook)
Route.post("/", auth, isAdmin, postBook)

/* Route.route("/")
.get(getBooks)
.post(postBook) */
//this is the client with the request sending to the server and with middleware as a door keeper 
//to check that the conditions for the request to have a response are correct




Route.put("/:id", auth, isAdmin, putBook)

Route.delete("/:id", auth, isAdmin, deleteBook)



module.exports = Route