import React, { useEffect } from 'react';

const TwitterFeed = () => {
    useEffect(() => {
        // Load the Twitter widgets script
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
            // Clean up the script on component unmount
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <a 
                className="twitter-timeline" 
                href="https://twitter.com/thedailynu?ref_src=twsrc%5Etfw" // THIS IS ONLY THE DAILY'S FEED
                // I've added @jacob_wendler and @thedailynu to a Twitter list, but it just links instaed
                //href="https://twitter.com/i/lists/1852491479207309735"
                data-tweet-limit="5" // Optional: Limit the number of tweets shown
                data-width="300"      // Optional: Set width
                data-height="400"     // Optional: Set height
            >
                Tweets by thedailynu
            </a>
        </div>
    );
};

export default TwitterFeed;