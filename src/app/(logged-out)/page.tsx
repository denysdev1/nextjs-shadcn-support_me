import { Button } from '@/components/ui/button';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <>
      <h1 className='flex gap-2 items-center'>
        <PersonStandingIcon size={50} className='text-pink-400' /> SupportMe
      </h1>
      <p>The best dashboard to manage customer support</p>
      <div className='flex gap-2 items-center'>
        <Button asChild>
          <Link href='/login'>Login</Link>
        </Button>
        <small>or</small>
        <Button variant='outline' asChild>
          <Link href='/sign-up'>Signup</Link>
        </Button>
      </div>
    </>
  );
};

export default LandingPage;
