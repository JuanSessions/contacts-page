const createError = require("http-errors")
const db = require("../models/db")
const uuid = require("uuid-random")

exports.getBooks = (req, res, next) => {
    let books = db.get("books").value()
    res.json({
        success: true,
        books: books
    })
}

exports.getBook = (req, res, next) => {
    console.log(typeof req.params.id)
    console.log(typeof uuid())
    const {
        id
    } = req.params
    let book = db.get("books").find({
        id
    }).value()
    res.json({
        success: true,
        book: book
    })
}

exports.postBook = (req, res, next) => {
    console.log(req.body)

    db.get("books")
        .push(req.body)
        .last()
        .assign({
            id: uuid()
        })
        .write()


    res.json({
        success: true,
        book: req.body
    })
}

exports.putBook = (req, res, next) => {
    const {
        id
    } = req.params
    const book = req.body
    book.id = new Date().toString()
    db.get("books").find({
        id
    }).assign(book).write()

    res.json({
        success: true,
        book: book
    })

}
exports.deleteBook = (req, res, next) => {
    console.log(req.params.id)
    if (req.params.id !== "1") {
        next(createError(500))
    }
    const {
        id
    } = req.params
    let book = db.get("books").remove({
        id
    }).write()
    res.json({
        success: true,
        book: book
    })
}