const createError = require("http-errors")

const Book = require("../models/bookSchema")

const jwt = require("jsonwebtoken")


exports.getBooks = async(req, res, next) => {

    try {
        /*   const value = req.header("test")
        if (value === "123") {
 */
        const books = await Book.find()

        res.json({
                success: true,
                books: books
            })
            /*  } else {
                 throw createError(404)
             } */
    } catch (err) {
        next(err)
    }
}

exports.getBook = async(req, res, next) => {
    const {
        id
    } = req.params
    try {
        const book = await Book.findById()
        if (!book) throw createError(404)

        res.json({
            success: true,
            book: book
        })
    } catch (err) {
        next(err)
    }
}

exports.postBook = async(req, res, next) => {

    try {
        const book = new Book(req.body)
        await book.save()

        res.json({
            success: true,
            book: book
        })
    } catch (err) {
        next(err)
    }

}

exports.putBook = async(req, res, next) => {
    const {
        id
    } = req.params
    const book = req.body

    try {
        const updatedBook = await Book.findByIdAndUpdate(id, book, {
            new: true
        })
        if (!updatedBook) throw createError(404)

        res.json({
            success: true,
            book: updatedBook
        })
    } catch (err) {
        next(err)
    }

}


exports.deleteBook = async(req, res, next) => {
    const {
        id
    } = req.params

    try {
        const book = await Book.findByIdAndDelete(id)
        if (!book) throw createError(404)

        res.json({
            success: true,
            book: book
        })
    } catch (err) {
        next(err)
    }

}