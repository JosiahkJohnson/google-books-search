import React from "react";
import "./style.css"

function searchBox() {
    return(
        <div className = "wrapper border border-primary">
            
            {/* Section title */}
            <h3>Search for a book:</h3>

            {/* Name of the next box, title */}
            <h5>Title:</h5>
            <input className = "title-box" type="text"/>

            {/* Submit button */}
            <button className = "btn btn-primary">Search</button>
        </div>
    );
};

export default searchBox;