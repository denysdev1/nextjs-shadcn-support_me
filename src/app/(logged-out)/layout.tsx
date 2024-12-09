import { ThemeToggle } from '@/components/ui/theme-toggle';

const LoggedOutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='flex flex-col gap-4 items-center justify-center min-h-screen'>
        {children}
      </div>
      <ThemeToggle className='fixed top-1/2 right-12 -translate-y-1/2' />
    </>
  );
};

export default LoggedOutLayout;
