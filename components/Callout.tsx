import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwind';
import { FiAlertTriangle } from 'react-icons/fi';

export const buttonVariants = cva(
  'rounded-lg px-4 py-2 flex items-center gap-2 text-sm border',
  {
    variants: {
      variant: {
        warning: 'bg-warning-2 text-warning-11 border-warning-6',
      },
    },
    defaultVariants: {
      variant: 'warning',
    },
  }
);

type CalloutProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
};
export function Callout({ children, variant }: CalloutProps) {
  return (
    <div className={cn(buttonVariants({ variant }))}>
      <Icon variant={variant} />
      {children}
    </div>
  );
}

type IconProps = VariantProps<typeof buttonVariants>['variant'];
function Icon({ variant }: { variant: IconProps }) {
  switch (variant) {
    case 'warning':
      return <FiAlertTriangle />;
    default:
      return null;
  }
}
