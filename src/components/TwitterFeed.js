import React, { useEffect } from 'react';
import "../App.css"; 

const TwitterFeed = () => {
    useEffect(() => {
         const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
             document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="twitter-container">
           {/* <iframe src="https://www.juicer.io/api/feeds/thedailynu/iframe" 
                frameborder="0" 
                width="1000" 
                height="1000" 
                style={{ display: 'block', margin: '0 auto' }}
            ></iframe> */}
            <div align="center">

                
                <iframe src="https://widget.tagembed.com/2136155" style={{width:"100%",height:"600px",border:"none"}}></iframe>
            </div>

        </div>
    );
};

export default TwitterFeed;
