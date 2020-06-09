const router = require("express").Router();
//calling in our controller that handles api calls to google books
const booksController = require("../controllers/booksController");

//this route will query the google database for a book by title
router.route("/search/:title").get(booksController.googleSearchByTitle);
/*
should return an array of book objects
[{
    book 1   
}, {
    book 2
}, {
    book 3
}, {
    etc.
}]
*/

module.exports = router;