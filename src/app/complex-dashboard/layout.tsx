// src/app/complex-dashboard/layout.tsx
export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  // Simulate authentication state
  const isLoggedIn = true; 

  if (!isLoggedIn) {
    return (
      <div className="py-12">
        {login}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Main children page */}
      <div>{children}</div>

      {/* Grid containing parallel slots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          {users}
          {revenue}
        </div>
        <div>
          {notifications}
        </div>
      </div>
    </div>
  );
}