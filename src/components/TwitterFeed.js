import React, { useEffect } from 'react';

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
            <a 
                className="twitter-timeline" 
                href="https://twitter.com/thedailynu?ref_src=twsrc%5Etfw" // THIS IS ONLY THE DAILY'S FEED
                // I've added @jacob_wendler and @thedailynu to a Twitter list, but it just links instaed
                //href="https://twitter.com/i/lists/1852491479207309735"
                data-tweet-limit="10" 
                data-width="100%"     
                data-height="500"  
            >
                Tweets by thedailynu
            </a>
        </div>
    );
};

export default TwitterFeed;
