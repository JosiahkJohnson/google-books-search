import React from "react";
import Jumbotron from "../Jumbotron";
import SearchBox from "../SearchBox";
import Results from "../Results"

function Search() {
    return (
        <div>
            <Jumbotron />
            <SearchBox />
            <Results />
        </div>
    );
};

export default Search;