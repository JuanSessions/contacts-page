const Route = require("express").Router()
const {
    getContacts,
    getContact,
    postContact,
    putContact,
    deleteContact,
    login
} = require("../controllers/contactsController")
const auth = require("../middleware/authenticator")
const {
    validateInputs
} = require("../middleware/validator")
const isAdmin = require("../middleware/rolesAuthenticator")

Route.get("/", auth, isAdmin, getContacts)
Route.get("/:id", auth, getContact)
Route.post("/", validateInputs(), postContact)
Route.post("/login", login)


/* Route.route("/")
.get(getContacts)
.post(postContact) */

Route.put("/:id", auth, putContact)

Route.delete("/:id", auth, deleteContact)




module.exports = Route