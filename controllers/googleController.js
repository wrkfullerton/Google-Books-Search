const axios = require("axios");
const db = require("../models");

//

module.exports = {
    findAll: function(req, res) {
        const { query: params } = req;
    
        axios 
        .get("https://www.googleapis.com/books/v1/volumes", {
            params
        })
        .then(results => 
            results.data.items.filter(
                result => 
                result.volumeinfo.title &&
                result.volumeinfo.infoLink && 
                result.volumeinfo.authors && 
                result.volumeinfo.description && 
                result.volumeinfo.imageLinks && 
                result.volumeinfo.imageLinks.thumbnail
        )
        )
        .then(apiBooks => 
            db.Book.find().then(dbBooks =>
                apiBooks.filter(apiBooks =>
                    dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBooks.id)
                    )
                )
            )
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    }
};