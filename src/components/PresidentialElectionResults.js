import React, { useEffect, useState } from 'react';
const PresidentialElectionResults = () => {
    return (
        <section>
            <h2>Presidential Election </h2>
            <div className="presidential-dataviz-container">
            <iframe
                title="Presidential Election"
                aria-label="Split Bars"
                id="datawrapper-chart-XSYus"
                src="https://datawrapper.dwcdn.net/XSYus/4/"

                style={{
                    width: "0",
                    minWidth: "100%",
                    border: "none",
                }}
                height="175"
                data-external="1"
               
            ></iframe>            
            </div>
        </section>
        
    );
};

export default PresidentialElectionResults;
