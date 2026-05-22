type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Habit Tracker
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Build consistency one day at a time.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        {children}
      </main>
    </div>
  );
}

export default Layout;