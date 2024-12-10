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
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { PasswordInput } from '@/components/ui/password-input';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password is required'),
});

const LoginPage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    router.replace('/dashboard');
  };

  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your SupportMe account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='john@doe.com'
                        type='email'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is the email you signed up with
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder='********' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='w-full'>
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className='justify-between gap-2'>
          <small>Don&apos;t have an account? </small>
          <Button variant='outline' size='sm' asChild>
            <Link href='/sign-up'>Sign up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginPage;
