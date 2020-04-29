const Route = require("express").Router()
const {
    getContacts,
    getContact,
    postContact,
    putContact,
    deleteContact,
    login
} = require("../controllers/contactsController")
const {
    validateInputs
} = require("../middleware/validator")

const {
    body
} = require("express-validator")

Route.get("/", getContacts)
Route.get("/:id", getContact)
Route.post("/", validateInputs(), postContact)
Route.post("/login", login)


/* Route.route("/")
.get(getContacts)
.post(postContact) */

Route.put("/:id", putContact)

Route.delete("/:id", deleteContact)



module.exports = Route