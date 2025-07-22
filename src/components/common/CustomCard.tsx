import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Adjust path if your shadcn/ui card is elsewhere
import clsx from 'clsx';

interface CustomCardProps {
  type?: 'default' | 'transparent';
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  type = 'default',
  children,
  title,
  description,
  className,
}) => {
  const cardClasses = clsx(
    'w-full', // Default to full width, can be overridden by className
    {
      // Default card style (uses shadcn card default)
      'border rounded-lg': type === 'default',
      // Transparent card style with glassmorphism
      'backdrop-blur-sm bg-white/10 border border-gray-200/20 rounded-lg shadow-lg': type === 'transparent',
    },
    className // User-provided classes
  );

  const contentClasses = clsx(
    'p-6',
  );

  return (
    <Card className={cardClasses}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className={contentClasses}>
        {children}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
