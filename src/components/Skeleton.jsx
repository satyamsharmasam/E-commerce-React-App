import React from 'react';
import clsx from 'clsx';

const Skeleton = ({ className = '', count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={clsx(
            'animate-pulse bg-gray-300 dark:bg-gray-700 rounded',
            className
          )}
        />
      ))}
    </>
  );
};

export default Skeleton;
