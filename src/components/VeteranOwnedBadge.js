import React from 'react';

export const VeteranOwnedBadge = () => {
  return (
    <div className="w-full bg-red-900/80 rounded">
      <div className="flex flex-col items-center py-1">
        <span className="text-white text-[10px] md:text-xs uppercase tracking-wider font-medium leading-none">
          Veteran
        </span>
        <span className="text-white text-[10px] md:text-xs uppercase tracking-wider font-medium leading-none">
          Owned
        </span>
      </div>
    </div>
  );
}; 