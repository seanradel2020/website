import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {splitNavbarItems, useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';

export default function NavbarContent() {
  const {navbar} = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const [leftItems, rightItems] = splitNavbarItems(navbar.items);

  return <div className="navbar__inner blueprint-navbar">
    <div className="blueprint-navbar__brand">
      {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
      <NavbarLogo />
    </div>
    <div className="navbar__items blueprint-navbar__links">
      {leftItems.map((item, index) => <NavbarItem key={index} {...item} />)}
    </div>
    <div className="navbar__items navbar__items--right blueprint-navbar__actions">
      {rightItems.map((item, index) => <NavbarItem key={index} {...item} />)}
    </div>
  </div>;
}
