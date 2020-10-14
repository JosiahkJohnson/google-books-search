import React from "react";
import "./style.css"
import searchTitle from "../../utilities/googleDatabase";
import api from "../../api";

function searchBox() {
    return(
        <div className = "wrapper border border-primary">
            
            {/* Section title */}
            <h3>Search for a book:</h3>

            {/* Name of the next box, title */}
            <h5>Title:</h5>
            <input className = "title-box" id = "search" type="text"/>

            {/* Submit button */}
            <button onClick = {search} className = "btn btn-primary">Search</button>
        </div>
    );
};

function search() {
    const text = document.getElementById("search").value;
    api.byTitle(text).catch(error => {
        console.log(error);
    })
    .then(response => {
        console.log(response.items);
    });
};

export default searchBox;