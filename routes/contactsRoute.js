const Route = require("express").Router()
const {
    getContacts,
    getContact,
    postContact,
    putContact,
    deleteContact
} = require("../controllers/contactsController")

Route.get("/", getContacts)
Route.get("/:id", getContact)
Route.post("/", postContact)
Route.put("/:id", putContact)
Route.delete("/:id", deleteContact)

module.exports = Route