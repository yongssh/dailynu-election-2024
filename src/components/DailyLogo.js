
import React from 'react';
import { NavigationMenu, Box, Icon, Button } from "@washingtonpost/wpds-ui-kit";
import { ChevronDown, BookmarkSolid } from "@washingtonpost/wpds-assets";

const DailyLogo = () => (
    <div >
    <a href="https://dailynorthwestern.com"className="daily-logo-link" >
        <img src="dailylogo.svg" alt="Daily Northwestern Logo" className="daily-logo"/>
    </a>
    <div class="centered-container">
  <a href="https://dailynorthwestern.com/category/elections2024/" class="coverage-link">Read Our Coverage</a>
</div>    
</div>
);

export default DailyLogo;
