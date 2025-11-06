import React, { useEffect } from "react";
import "../App.css";
import DatawrapperEmbed from "./DatawrapperEmbed";

const FederalElectionResults = () => {
  useEffect(() => {
    const handleResize = (event) => {
      if (event.data.height && event.origin.includes("netlify.app")) {
        const iframe = document.querySelector(".iframe-full");
        if (iframe) {
          iframe.style.height = event.data.height + "px";
        }
      }
    };
    window.addEventListener("message", handleResize);
    return () => window.removeEventListener("message", handleResize);
  }, []);

  return (
    <section className="dataviz-container federal">
      <h2 className="section-title">Federal Elections</h2>

      {/* <div id="federal" className="dataviz-container federal"> */}
        <div className="federal-map-wrapper">
        <iframe
          title="Presidential Election Map"
          src="https://creative-gelato-bfacf6.netlify.app"
          frameBorder="0"
          scrolling="no"
          className="federal-map-iframe"
        ></iframe>
      </div>
        <DatawrapperEmbed chartId="JzSDb" title="US Presidential Election" />
        <DatawrapperEmbed chartId="RueGZ" title="US House IL-9 Election" />
      {/* </div> */}
    </section>
  );
};

export default FederalElectionResults;
