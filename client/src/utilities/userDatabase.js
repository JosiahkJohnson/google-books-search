//file controls our local stored database of google books that have been saved from previous searches

import Axios from "axios"

export default {
    //gets all books from database
    getBooks: function() {
        return Axios.get("/api/books");
    },

    //get a specific book by id
    getBook: function(id) {
        return Axios.get("/api/books/" + id);
    },

    //delete a book from the database by id
    deleteBook: function(id) {
        return Axios.delete("/api/books/" + id);
    },

    //save a new book to the database with the book's data
    saveBook: function(bookData) {
        return Axios.post("/api/books"+ bookData);
    }
};
