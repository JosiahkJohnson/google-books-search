import api from "../api";

//functions to interact with the database
export default  {
    searchTitle: function(title) {
        const query = title;
      
        api.byTitle(query).then(response => {
          return response;
        }).catch(error => {
          console.log(error);
        });
      }
};
