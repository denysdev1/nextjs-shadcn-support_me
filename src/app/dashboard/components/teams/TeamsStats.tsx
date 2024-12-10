import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ListChecksIcon, StarIcon, UsersIcon } from 'lucide-react';
import Link from 'next/link';
import cm from '@/../public/images/cm.jpg';
import tf from '@/../public/images/tf.jpg';
import rl from '@/../public/images/rl.jpg';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const teamLeaders = [
  {
    firstName: 'Colin',
    lastName: 'Murray',
    avatar: cm,
  },
  {
    firstName: 'Tom',
    lastName: 'Phillips',
  },
  {
    firstName: 'Liam',
    lastName: 'Fuentes',
  },
  {
    firstName: 'Tina',
    lastName: 'Fey',
    avatar: tf,
  },
  {
    firstName: 'Katie',
    lastName: 'Johnson',
  },
  {
    firstName: 'Tina',
    lastName: 'Jones',
  },
  {
    firstName: 'Amy',
    lastName: 'Adams',
  },
  {
    firstName: 'Ryan',
    lastName: 'Lopez',
    avatar: rl,
  },
  {
    firstName: 'Jenny',
    lastName: 'Jones',
  },
];

const TeamsStats = () => {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <Card className='overflow-auto'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base'>Total teams</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-center gap-2'>
            <div className='flex gap-2'>
              <UsersIcon />
              <div className='text-5xl font-bold'>8</div>
            </div>
            <div>
              <Button size='xs' asChild>
                <Link href='/dashboard/teams'>View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base flex justify-between'>
              <span>Team leaders</span> <StarIcon className='text-yellow-500' />
            </CardTitle>
          </CardHeader>
          <CardContent className='flex gap-3 items-center flex-wrap'>
            {teamLeaders.map((leader) => (
              <TooltipProvider key={leader.firstName}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {leader.avatar ? (
                        <AvatarImage src={leader.avatar.src} />
                      ) : (
                        <AvatarFallback>
                          {leader.firstName.charAt(0)}
                          {leader.lastName.charAt(0)}
                        </AvatarFallback>
                      )}
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {leader.firstName} {leader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        <Card className='flex flex-col'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base'>Team distribution</CardTitle>
          </CardHeader>
          <CardContent className='flex gap-2 items-center'></CardContent>
        </Card>
      </div>
      <Card className='my-4'>
        <CardHeader>
          <CardTitle className='text-lg flex items-center gap-2'>
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className='pl-0'>{/* LINE GRAPH */}</CardContent>
      </Card>
    </>
  );
};

export default TeamsStats;
