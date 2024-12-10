import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmployeesStats from './components/employees/EmployeesStats';

const DashboardPage = () => {
  return (
    <Tabs defaultValue='employees'>
      <TabsList className='md-4'>
        <TabsTrigger value='employees'>Employees stats</TabsTrigger>
        <TabsTrigger value='teams'>Teams stats</TabsTrigger>
      </TabsList>
      <TabsContent value='employees'>
        <EmployeesStats />
      </TabsContent>
      <TabsContent value='teams'>Teams stats</TabsContent>
    </Tabs>
  );
};

export default DashboardPage;
