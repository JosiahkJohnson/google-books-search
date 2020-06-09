import axios from "axios";

export default {
    //send a search to our server to search the google books database
    byTitle: function(query) {
        return axios.get(`/search/${query}`).then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
        });
    }
}