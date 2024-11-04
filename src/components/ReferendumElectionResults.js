import React from 'react';
import { Accordion, Box } from '@washingtonpost/wpds-ui-kit';

const ReferendumElectionResults = () => {
    return (
        <section className="dataviz-container referenda">
            <h2>Referenda Results</h2>
            <div id="federal">
                <div className="dataviz">
                    <iframe 
                        title="Election Worker Referendum" 
                        aria-label="Bar Chart" 
                        id="datawrapper-chart-qsRBU" 
                        src="https://datawrapper.dwcdn.net/qsRBU/1/" 
                        scrolling="no" 
                        frameBorder="0" 
                        className="responsive-iframe"
                        data-external="1"
                    ></iframe>
                </div>
    
                <div className="dataviz">
                    <iframe 
                        title="Property Tax Referendum" 
                        aria-label="Bar Chart" 
                        id="datawrapper-chart-5sIIJ" 
                        src="https://datawrapper.dwcdn.net/5sIIJ/1/" 
                        scrolling="no" 
                        frameBorder="0" 
                        className="responsive-iframe"
                        data-external="1"
                    ></iframe>
                </div>

                <div className="dataviz">
                    <iframe 
                        title="Assisted Reproductive Healthcare Referendum" 
                        aria-label="Bar Chart" 
                        id="datawrapper-chart-iUzIy" 
                        src="https://datawrapper.dwcdn.net/iUzIy/1/"
                        scrolling="no" 
                        frameBorder="0" 
                        className="responsive-iframe"
                        data-external="1"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ReferendumElectionResults;
