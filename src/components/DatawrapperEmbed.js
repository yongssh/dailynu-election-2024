import React, { useEffect } from "react";
import "../App.css";

const DatawrapperEmbed = ({ chartId, title }) => {
  useEffect(() => {
    const handleResize = (event) => {
      if (event.data["datawrapper-height"]) {
        const newHeight = event.data["datawrapper-height"][chartId];
        const iframe = document.getElementById("datawrapper-chart-" + chartId);
        if (iframe && newHeight) {
          iframe.style.height = newHeight + "px";
        }
      }
    };
    window.addEventListener("message", handleResize);
    return () => window.removeEventListener("message", handleResize);
  }, [chartId]);

  return (
    <div className="datawrapper-container">
      <iframe
        id={`datawrapper-chart-${chartId}`}
        title={title}
        src={`https://datawrapper.dwcdn.net/${chartId}/`}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        style={{ width: "100%", minHeight: "200px" }}
      ></iframe>
    </div>
  );
};

export default DatawrapperEmbed;
