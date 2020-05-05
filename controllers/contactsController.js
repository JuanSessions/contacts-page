const createError = require("http-errors")
const Contact = require("../models/contactSchema")
const jwt = require("jsonwebtoken")

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
        const token = contact.generateAuthToken()
        await contact.save()

        const data = contact.getPublicFields()

        res.header("x-auth", token).json({
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
            email
        })
        console.log("test1")
        const valid = await contact.checkPassword(password)
        console.log("test2")
        if (!valid) throw createError(403)

        let token = contact.generateAuthToken()
        const data = contact.getPublicFields()


        res.header("x-auth", token).json({
            success: true,
            contact: data
        })
    } catch (err) {
        next(err)
    }

}