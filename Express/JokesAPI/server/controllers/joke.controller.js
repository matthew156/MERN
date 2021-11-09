const Joke = require("../models/jokes.model")

//show all jokes
module.exports.findAllJokes = (req, res) =>{
    Joke.find()
        .then(allJokes =>{
            res.json({results: allJokes})
        })
        .catch(err=>res.json({err:err}))
}

//create a joke
module.exports.createdJoke = (req, res) =>{
    Joke.create(req.body)
    .then(newlyCreatedJoke =>{
        res.json({results: newlyCreatedJoke})
    })
    .catch(err=>res.json({err:err}))
}
//find one joke
module.exports.findOneJoke = (req, res)=>{
    Joke.findOne({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedJoke => (res.json({results: updatedJoke})))
        .catch(err=>res.json({err:err}))
    }

//update a joke
module.exports.updatedOneJoke = (req, res) =>{
    Joke.findOneAndUpdate({_id:req.params.id}, )
    .then(foundJoke => (res.json({results: foundJoke})))
    .catch(err=>res.json({err:err}))
}
//delete a joke
module.exports.deletedOneJoke = (req, res) =>{
    Joke.deleteOne({_id:req.params.id})
    .then(deletedJoke => (res.json({results: deletedJoke})))
    .catch(err=>res.json({err:err}))
}