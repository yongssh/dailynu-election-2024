// // import React from 'react';
// // import Introduction from './Introduction'; 
// // import TwitterFeed from './TwitterFeed';  
// // import { ChevronLeft } from "@washingtonpost/wpds-assets";  
// // import '../App.css';                   

// // const Sidebar = ({ onClose }) => {
// //     return (
// //         <div className="sidebar active">
// //             {/* Button to close the sidebar */}
// //               <button className="sidebar-close" onClick={onClose} aria-label="Close Sidebar">
// //             <ChevronLeft />
// //         </button>
// //             <div className="introduction">
// //                 <Introduction />
// //                 {/* <TwitterFeed /> */}
// //             </div>
// //         </div>
// //     );
// // };

// // export default Sidebar;
// import React from "react";
// import Introduction from "./Introduction";
// import { ChevronLeft } from "@washingtonpost/wpds-assets";
// import "../App.css";

// const Sidebar = ({ isOpen, onClose }) => {
//   return (
//     <aside className={`sidebar ${isOpen ? "active" : ""}`}>
//       <button
//         className="sidebar-close"
//         onClick={onClose}
//         aria-label="Close Sidebar"
//       >
//         <ChevronLeft />
//       </button>

//       <div className="introduction">
//         <Introduction />
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
import React from "react";
import Introduction from "./Introduction";
import { Close } from "@washingtonpost/wpds-assets"; 
import "../App.css";

const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // don’t render anything when closed

  const isMobile = window.innerWidth < 768;

  return (
    <>
      {isMobile ? (
        <>
          <div className="popup-backdrop" onClick={onClose}></div>
          <div className="popup">
            <button className="popup-close" onClick={onClose} aria-label="Close">
              <Close  />
            </button>
            <div className="popup-content">
              <Introduction />
            </div>
          </div>
        </>
      ) : (
        <aside className="sidebar active">
          <button
            className="sidebar-close"
            onClick={onClose}
            aria-label="Close Sidebar"
          >
            <Close />
          </button>
          <div className="introduction">
            <Introduction />
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
