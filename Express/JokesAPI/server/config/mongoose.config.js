const mongoose = require("mongoose")
//mongoose connection
const db_name = "jokes"
mongoose.connect(`mongodb://localhost/${db_name}`)
    .then(() => console.log("Connection established with the database!"))
    .catch(err => console.log('Something went wrong....', err))
