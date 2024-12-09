'use client';

import { useState } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';
import { MoonIcon, SunIcon } from 'lucide-react';

export function ThemeToggle({ className }: { className?: string }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={className} onClick={handleClick}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
