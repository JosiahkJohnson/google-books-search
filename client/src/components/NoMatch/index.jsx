import React from "react";

//nomatch will simply be the default page if the user tries to access a page that doesnt exist on this application
//the router bar should still work on the top to allow them back to the main page
function NoMatch() {
    return (
        <div className="jumbotron">
            <h1>404 Error, Page not found</h1>
            <p>Click a Navigation button above to go somewhere else.</p>
        </div>
    );
}

export default NoMatch;
