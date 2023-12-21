export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container mx-auto flex flex-grow flex-col px-3 py-6">
      <header className="flex flex-col items-center justify-center">
        <img height={64} width={64} src="/icon.png" />
        <h1 className="py-3 text-center text-xl font-bold">DNP Secure Hash</h1>
      </header>
      <main className="flex flex-grow flex-col">{children}</main>
    </div>
  );
};
