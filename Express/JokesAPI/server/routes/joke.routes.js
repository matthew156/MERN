const JokeController = require("../controllers/joke.controller")


module.exports = app =>{
    app.get("/api/jokes", JokeController.findAllJokes)
    app.post("/api/jokes", JokeController.createdJoke)
    app.get("/api/jokes/:id", JokeController.findOneJoke)
    app.put("/api/jokes/:id", JokeController.updatedOneJoke)
    app.delete("/api/jokes/:id", JokeController.deletedOneJoke)
}
