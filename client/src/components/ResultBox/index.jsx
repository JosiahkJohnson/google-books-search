import React from "react";
import "./style.css";

function ResultBox() {
    return (
        <div className = "wrapper border border-secondary">

            {/* First row contains the title, sub title if any, the view button, and save/delete button */}
            <div className="row">

                {/* Left side of the first row */}
                <div className="col-sm-6">
                    <h3 className = "title">Title</h3>
                    <h5 className = "sub-title">Sub-title</h5>
                    <p className = "author">Author(s)</p>
                </div>

                {/* Right side of the first row */}
                <div className="col-sm-6">
                    <button className="view">View</button>
                    <button className="action">Action</button>
                </div>
            </div>

            {/* Second row contains the picture and description */}
            <div className="row">
                
                {/* This div will contain the picture */}
                <div className="col-sm-2">
                    <h1>Picture</h1>
                </div>

                {/* This div will contain the description */}
                <div className="col-sm-10">
                    <p className = "description">Detailed description of the book here.</p>
                </div>
            </div>
        </div>
    );
};

export default ResultBox;