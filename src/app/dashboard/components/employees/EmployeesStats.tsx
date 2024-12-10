import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopperIcon,
  TriangleAlertIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
} from 'lucide-react';
import Link from 'next/link';
import WorkLocationTrends from './WorkLocationTrends';

const EmployeesStats = () => {
  const totalEmployees = 100;
  const presentEmployees = 80;
  const employeesPresentPercentage = (presentEmployees / totalEmployees) * 100;

  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <Card className='overflow-auto'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base'>Total employees</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-center gap-2'>
            <div className='flex gap-2'>
              <UserIcon />
              <div className='text-5xl font-bold'>{totalEmployees}</div>
            </div>
            <div>
              <Button size='xs' asChild>
                <Link href='/dashboard/employees'>View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base'>Employees present</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex gap-2'>
              {employeesPresentPercentage > 75 ? (
                <UserCheck2Icon />
              ) : (
                <UserRoundXIcon />
              )}
              <div className='text-5xl font-bold'>{presentEmployees}</div>
            </div>
          </CardContent>
          <CardFooter>
            <span
              className={`text-xs ${
                employeesPresentPercentage > 75
                  ? 'text-green-500'
                  : 'text-red-500'
              } flex gap-1 items-center`}
            >
              {employeesPresentPercentage > 75 ? (
                <>
                  <BadgeCheckIcon />
                  {employeesPresentPercentage.toFixed(0)}% of employees present
                </>
              ) : (
                <>
                  <TriangleAlertIcon />
                  Only {employeesPresentPercentage.toFixed(0)}% of employees
                  present
                </>
              )}
            </span>
          </CardFooter>
        </Card>
        <Card className='border-pink-500 flex flex-col'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base'>Employee of the month</CardTitle>
          </CardHeader>
          <CardContent className='flex gap-2 items-center'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className='text-2xl'>shadcn!</span>
          </CardContent>
          <CardFooter className='flex gap-2 items-center text-xs text-muted-foreground mt-auto'>
            <PartyPopperIcon className='text-pink-500'></PartyPopperIcon>
            <span>Congratulations, shadcn!</span>
          </CardFooter>
        </Card>
      </div>
      <Card className='my-4'>
        <CardHeader>
          <CardTitle className='text-lg flex items-center gap-2'>
            <LaptopIcon />
            <span>Employee work location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent className='pl-0'>
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
};

export default EmployeesStats;
