import { Outlet } from 'react-router-dom';

import { Nav } from '@/components/Nav';

export const HashLayout = () => {
  return (
    <div className="flex flex-col">
      <Nav />
      <Outlet />
    </div>
  );
};
