const mongoose = require("mongoose")
const {
    Schema
} = mongoose;

const OrderSchema = new Schema({
    quantity: {
        type: Number,
        required: true
    },
    book: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }], //an array here so they can order as many books as they want in one order
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Order", OrderSchema)