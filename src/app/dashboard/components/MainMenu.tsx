import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import MenuItem from './MenuItem';
import MenuTitle from './MenuTItle';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { cn } from '@/lib/utils';

const menuItems = [
  { href: '', title: 'My dashboard' },
  { href: '/teams', title: 'Teams' },
  { href: '/employees', title: 'Employees' },
  { href: '/account', title: 'Account' },
  { href: '/settings', title: 'Settings' },
];

const MainMenu = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        'md:bg-muted h-full overflow-auto p-4 flex flex-col',
        className
      )}
    >
      <header className='border-b dark:border-b-black border-b-zinc-300 pb-4 md:block hidden'>
        <MenuTitle />
      </header>
      <div className='flex flex-col gap-2 py-4 md:grow'>
        {menuItems.map((item) => (
          <MenuItem key={item.href} href={item.href}>
            {item.title}
          </MenuItem>
        ))}
      </div>
      <footer className='flex gap-2 items-center'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback className='bg-pink-300 dark:bg-pink-800'>
            CN
          </AvatarFallback>
        </Avatar>
        <Link href='/' className='underline'>
          Logout
        </Link>
        <ThemeToggle className='ml-auto' />
      </footer>
    </nav>
  );
};

export default MainMenu;
