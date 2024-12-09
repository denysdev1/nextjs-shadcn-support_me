'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your SupportMe account</CardDescription>
        </CardHeader>
        <CardContent>login form</CardContent>
        <CardFooter className='justify-between gap-2'>
          <small>Don&apos;t have an account? </small>
          <Button variant='outline' size='sm' asChild>
            <Link href='/register'>Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginPage;
