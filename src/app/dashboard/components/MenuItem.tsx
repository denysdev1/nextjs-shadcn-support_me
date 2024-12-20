'use client';

import { DrawerContext } from '@/components/ui/drawer';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

const MenuItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const { onClose } = useContext(DrawerContext);
  const pathname = usePathname();
  const isActive = pathname === `/dashboard${href}`;

  return (
    <div
      className={cn(
        'block hover:bg-white dark:hover:bg-zinc-700 text-muted-foreground hover:text-foreground p-2 rounded-md',
        isActive
          ? 'bg-primary hover:bg-primary dark:hover:bg-primary text-primary-foreground hover:text-white'
          : ''
      )}
    >
      <Link
        className='w-full block'
        href={`/dashboard${href}`}
        onClick={onClose}
      >
        {children}
      </Link>
    </div>
  );
};

export default MenuItem;
