const mongoose = require("mongoose")

const {
    Schema
} = mongoose;
//or const Schema = mongoose.Schema
const AddressSchema = require("./addressSchema")

const jwt = require("jsonwebtoken")

const {
    encrypt,
    compare
} = require("../lib/encryption")

//u take out the schema from mongoose with the new constructor and u store into this variable n which data
const ContactSchema = new Schema({
    //check mongodb data types
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ["Admin", "Contact"],
        //user can write in the login that their role is administrator or user
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    password: {
        type: String,
        required: true
    },
    address: AddressSchema

}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
})

ContactSchema.virtual("fullName").get(function() {
    return `${this.firstName} ${this.lastName}`
})

ContactSchema.methods.generateAuthToken = function() {

    const contact = this;
    const token = jwt.sign({
        _id: contact._id
    }, "secretkey").toString()

    contact.tokens.push({ //pushing token into the database and see it as an object
        token
    })

    return token //with the return gives back a token to the user 

}

ContactSchema.methods.getPublicFields = function() {
    let returnObject = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        _id: this._id
    }
    return returnObject
}


ContactSchema.methods.checkPassword = async function(password) {
    const contact = this;
    return await compare(password, contact.password)

}

ContactSchema.pre("save", async function(next) {
    //this is the pre function that will convert the password to hash

    if (!this.isModified("password")) return next()

    this.password = await encrypt(this.password)
    next()
})

ContactSchema.statics.findByToken = function(token) {
    //here we're creating the method "findByToken"

    console.log("findByToken");
    const Contact = this;
    let decoded;
    try {
        decoded = jwt.verify(token, "secretkey")
    } catch (e) {
        return;
    }
    return Contact.findOne({

        _id: decoded._id,

        // "tokens.token": token

    }).select("-password -__v")

}


module.exports = mongoose.model("Contact", ContactSchema)
    //export data "contactSchema" it's in the "contact" collection.