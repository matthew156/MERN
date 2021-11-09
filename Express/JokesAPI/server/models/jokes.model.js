const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({joke: {type: String, required:[true,"Name is required!"], minlength:[2, "Name must be at least 2 characters!"]},
punchline:{type: String, required:[true, "Punchline required"]}
}
)

const Joke = mongoose.model("Joke", JokeSchema)

module.exports= Joke;