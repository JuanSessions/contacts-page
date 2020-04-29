const createError = require("http-errors")
const Contact = require("../models/contactSchema")


exports.getContacts = async(req, res, next) => {

    try {
        const contacts = await Contact.find()

        res.json({
            success: true,
            contacts: contacts
        })
    } catch (err) {
        next(err)
    }
}

exports.getContact = async(req, res, next) => {
    const {
        id
    } = req.params

    try {
        const contact = await Contact.findById(id)
        if (!contact) throw createError(404)
        res.json({
            success: true,
            contact: contact
        })
    } catch (err) {
        next(err)
    }

}

exports.postContact = async(req, res, next) => {
    console.log(req.body)

    try {
        const contact = new Contact(req.body)
        await contact.save()
        res.json({
            success: true,
            contact: contact
        })
    } catch (err) {
        next(err)
    }
}

exports.putContact = async(req, res, next) => {
    const {
        id
    } = req.params
    const contact = req.body
        //contact.id = uuid()
    try {
        const contact = await Contact.findByIdAndUpdate(id, contact, {
            new: true
        })
        if (!updatedContact) throw createError(500)
        res.json({
            success: true,
            contact: updatedContact
        })
    } catch (err) {
        next(err)
    }
}


exports.deleteContact = async(req, res, next) => {

    const {
        id
    } = req.params

    try {
        const contact = await Contact.findByIdAndDelete(id)
        if (!contact) throw createError(404)
        res.json({
            success: true,
            contact: contact
        })
    } catch (err) {
        next(err)
    }

}

exports.login = async(req, res, next) => {

    const {
        email,
        password
    } = req.body
    try {
        const contact = await Contact.findOne({
            email,
            password
        })
        if (!contact) throw createError(404)
        res.header("test", "123")
        res.json({
            success: true,
            contact: contact
        })
    } catch (err) {
        next(err)
    }

}