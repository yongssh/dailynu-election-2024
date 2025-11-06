import React from "react";
import { Accordion, Box } from "@washingtonpost/wpds-ui-kit";
import "../App.css";
import DatawrapperEmbed from "./DatawrapperEmbed"; // import reusable component

const ReferendumElectionResults = () => {
  return (
    <section className="dataviz-container ">
      <h2 className="section-title">Referenda Results</h2>

      <div id="referenda">
          <DatawrapperEmbed
            chartId="qsRBU"
            title="Election Worker Referendum"
          />
    
          <DatawrapperEmbed
            chartId="5sIIJ"
            title="Property Tax Referendum"
          />

          <DatawrapperEmbed
            chartId="iUzIy"
            title="Assisted Reproductive Healthcare Referendum"
          />
      </div>
    </section>
  );
};

export default ReferendumElectionResults;
