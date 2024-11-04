import React, { useEffect, useState } from 'react';

const CongressionalElectionResults = () => {
    return (
        <section  className="federal-dataviz-container">

            <section id="illinois">
            <div className="congressional-dataviz">
                {/* <h3>Congressional Results</h3> */}
            <iframe title="US House - 7" 
            aria-label="Election Donut" 
            id="datawrapper-chart-772Sh" 
            src="https://datawrapper.dwcdn.net/772Sh/1/" 
            frameborder="0" 
            // style="width: 0; min-width: 100% !important; border: none;" 
            height="163" 
            data-external="1">

           </iframe>
           </div>
           </section>
\        </section>
    );
};

export default CongressionalElectionResults;
