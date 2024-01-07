import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type TabProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

type TabItemProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function TabItem({ children, className = '', ...props }: TabItemProps) {
  return (
    <div
      className={twMerge(
        'border rounded-lg px-2 py-1 text-gray-400 border-gray-400 text-sm hover:cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function Tab({ children, className = '', ...props }: TabProps) {
  return (
    <div className={`flex gap-2 ${className}`} {...props}>
      {children}
    </div>
  );
}

Tab.Item = TabItem;

export { Tab };
