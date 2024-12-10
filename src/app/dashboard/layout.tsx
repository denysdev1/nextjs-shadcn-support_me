import MainMenu from './components/MainMenu';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-[250px_1fr] min-h-screen'>
      <MainMenu />
      <div className='overflow-auto py-2 px-4'>
        <h1>Welcome back, User!</h1>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
