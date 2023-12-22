import { Divide } from '@douglasneuroinformatics/ui';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="container mx-auto flex flex-grow flex-col space-y-6 px-3 py-6">
      <header className="flex flex-col items-center justify-center">
        <img alt="SecureHash Logo" height={64} src="/icon.png" width={64} />
        <h1 className="py-3 text-center text-2xl font-bold">DNP Secure Hash</h1>
      </header>
      <Divide />
      <main className="flex flex-grow flex-col">
        <Outlet />
      </main>
    </div>
  );
};
