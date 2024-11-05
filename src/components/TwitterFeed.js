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
                <a class="twitter-timeline" data-width="600" data-dnt="true"  data-tweet-limit="4" href="https://twitter.com/thedailynu?ref_src=twsrc%5Etfw">Tweets by thedailynu
                </a>

            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8">
            </script>
            </div>
        </div>
    );
};

export default TwitterFeed;
