const createError = require("http-errors")
const db = require("../models/db")
const uuid = require("uuid-random")

exports.getContacts = (req, res, next) => {
    let contacts = db.get("contacts").value()
    res.json({
        success: true,
        contacts: contacts
    })
}

exports.getContact = (req, res, next) => {
    const {
        id
    } = req.params
    let contact = db.get("contacts").find({
        id
    }).value()
    res.json({
        success: true,
        contact: contact
    })
}

exports.postContact = (req, res, next) => {
    console.log("contact.............", req.body)

    db.get("contacts")
        .push(req.body)
        .last()
        .assign({
            id: uuid()
        })
        .write()


    res.json({
        success: true,
        contact: req.body
    })
}

exports.putContact = (req, res, next) => {
    const {
        id
    } = req.params
    const contact = req.body
    contact.id = uuid()
    db.get("contacts").find({
        id
    }).assign(contact).write()

    res.json({
        success: true,
        contact: contact
    })

}

exports.deleteContact = (req, res, next) => {
    console.log(req.params.id)
    if (req.params.id !== "1") {
        next(createError(500))
    }
    const {
        id
    } = req.params
    let contact = db.get("contacts").remove({
        id
    }).write()
    res.json({
        success: true,
        contact: contact
    })
}