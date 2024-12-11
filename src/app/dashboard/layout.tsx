'use client';

import { MenuIcon } from 'lucide-react';
import MainMenu from './components/MainMenu';
import MenuTitle from './components/MenuTItle';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className='md:grid md:grid-cols-[250px_1fr] h-screen'>
      <MainMenu className='hidden md:flex' />
      <div className='p-4 flex justify-between items-center sticky top-0 left-0 bg-background md:hidden border-b border-border'>
        <MenuTitle />
        {isDesktop ? null : (
          <Drawer
            open={isOpen}
            onClose={() => setIsOpen(false)}
            onOpenChange={setIsOpen}
            direction='right'
          >
            <DrawerTrigger>
              <MenuIcon className='h-8 w-8' />
            </DrawerTrigger>
            <DrawerContent>
              <MainMenu className='flex' />
            </DrawerContent>
          </Drawer>
        )}
      </div>
      <div className='overflow-auto py-2 px-4'>
        <h1 className='mb-4'>Welcome back, shadcn!</h1>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
