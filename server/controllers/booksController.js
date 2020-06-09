//we'll use axios with this application to call books from the google api
const axios = require("axios");
const apiKey = process.env.API_KEY;

//exporting our google api calls
module.exports = {

    //search by title
    googleSearchByTitle: function(req, res) {
        makeApiCall(req.params.title).then(response => {
            res.json(response.data);
        })
    }

};

function makeApiCall(query) {
    return axios({
        method: "get",
        url: `https://www.googleapis.com/books/v1/volumes?q=${query}+intitle&key=${apiKey}`
    }).catch(error => {
        console.log(error);
    });
};