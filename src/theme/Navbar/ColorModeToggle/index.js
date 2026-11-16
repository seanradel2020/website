import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import {useColorMode, useThemeConfig} from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';

export default function NavbarColorModeToggle({className}) {
  const {colorMode, setColorMode} = useColorMode();
  const {colorMode: settings} = useThemeConfig();
  const transitionTimer = useRef(null);

  useEffect(() => () => {
    window.clearTimeout(transitionTimer.current);
    document.documentElement.classList.remove('theme-transitioning');
  }, []);

  function changeMode(nextMode) {
    window.clearTimeout(transitionTimer.current);
    const root = document.documentElement;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.add('theme-transitioning');
      transitionTimer.current = window.setTimeout(() => {
        root.classList.remove('theme-transitioning');
      }, 450);
    } else {
      root.classList.remove('theme-transitioning');
    }
    setColorMode(nextMode);
  }

  if (settings.disableSwitch) return null;

  return <ColorModeToggle
    className={clsx('theme-mode-toggle', className)}
    value={colorMode}
    onChange={changeMode}
  />;
}
