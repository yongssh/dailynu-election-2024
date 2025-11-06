import React from "react";
import "../App.css";
import DatawrapperEmbed from "./DatawrapperEmbed";

const StateElectionResults = () => {
  return (
    <section className="dataviz-container state">
      <h2 className="section-title">Illinois Elections</h2>

      <div id="illinois">
        {/* IL House 17 */}
        <DatawrapperEmbed
          chartId="SmxdY"
          title="IL House 17 Election"
        />

        {/* IL State House 18 */}
        <DatawrapperEmbed
          chartId="LQziq"
          title="IL State House 18 Election"
        />
      </div>
    </section>
  );
};

export default StateElectionResults;
