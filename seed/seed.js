// this is the way to check that it works before you actually put and store data in mongo



const mongoose = require("mongoose")
const Contact = require("../models/contactSchema")
const faker = require("faker")


const main = async() => {
    mongoose.connect("mongodb://127.0.0.1:27017/record-shop-mongo", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.on("error", (err) => console.log(err))
    mongoose.connection.on("open", () => console.log("database connected"))

    try {
        await Contact.deleteMany({}) //passing empty object means u r deleting everything
        console.log("refresh/deleting contacts collection")
    } catch (err) {
        console.log(error)
    }

    //array with 10empty spaces and map through it like tic-tac-toe exercise
    const contactPromises = Array(10).fill(null).map(() => {

        const contact = new Contact({
            //will create a contact for u
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        })
        return contact.save() //in mongo u use method "save" to store
    })
    try {
        await Promise.all(contactPromises)
        console.log("Contacts Added into the database")

    } catch (err) {
        console.log(err)
    }
    //10 random fake contacts created trough the faker
}

main();