import React from "react";
import { Accordion, Box } from "@washingtonpost/wpds-ui-kit";
import "../App.css";
import DatawrapperEmbed from "./DatawrapperEmbed";

const CookCountyElectionResults = () => {
  return (
    <section className="dataviz-container">
      <h2 className="section-title">Cook County Elections</h2>

      <div id="cook-county">
          <DatawrapperEmbed
            chartId="45p8N"
            title="IL State's Attorney Election"
          />

          <DatawrapperEmbed
            chartId="HkPqH"
            title="IL's Cook County Clerk Election"
          />

          <DatawrapperEmbed
            chartId="O4mY6"
            title="Cook County Circuit Court Clerk Election"
          />

          <DatawrapperEmbed
            chartId="d7sIr"
            title="Metropolitan Water Reclamation District Election (1/2)"
          />

          <DatawrapperEmbed
            chartId="l7XDX"
            title="Metropolitan Water Reclamation District Election (2/2)"
          />
      </div>
    </section>
  );
};

export default CookCountyElectionResults;
