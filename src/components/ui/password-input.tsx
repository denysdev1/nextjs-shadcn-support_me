'use client';

import * as React from 'react';

import { Input } from './input';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'>
>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setShowPassword(!showPassword);
    }
  };

  return (
    <div className='relative'>
      <Input
        type={showPassword ? 'text' : 'password'}
        ref={ref}
        className={cn('pr-10', className)}
        {...props}
      />
      <span
        className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer select-none'
        onClick={() => setShowPassword(!showPassword)}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {showPassword ? <EyeIcon /> : <EyeOffIcon />}
      </span>
    </div>
  );
});
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
