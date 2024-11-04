import React from 'react';
import { ChevronDown, BookmarkSolid } from "@washingtonpost/wpds-assets";
import { NavigationMenu, Box, Icon, Button } from "@washingtonpost/wpds-ui-kit";
import '../App.css';

export default function Header({ toggleSidebar }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector('.fixed-header').offsetHeight;

    if (section) {
        window.scrollTo({
            top: section.offsetTop - headerHeight,
            behavior: 'smooth',
        });
    }
};

  return (
    <Box className="header-container">
    
        <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <div
              role="button"
              onClick={() => scrollToSection("federal")}
              className="menu-trigger"
            >Federal</div>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <div
              role="button"
              onClick={() => scrollToSection("illinois")}
              className="menu-trigger"
            >Illinois</div>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <div
              role="button"
              onClick={() => scrollToSection("cook-county")}
              className="menu-trigger"
            >Cook County</div>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <div
              role="button"
              onClick={() => scrollToSection("referenda")}
              className="menu-trigger"
            >Referenda</div>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>

    </Box>
  );
}
