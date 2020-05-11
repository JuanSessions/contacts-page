const Contact = require("../models/contactSchema")
const createError = require("http-errors")

const auth = async(req, res, next) => {
    const token = req.cookies["x-auth"]
        //console.log(token)

    try {
        const contact = await Contact.findByToken(token)
        if (!contact) throw createError(403)

        req.contact = contact;
        req.token = token;

        next()

    } catch (err) {
        next(err)
    }


}

module.exports = auth