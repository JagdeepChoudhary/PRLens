import { UserMenuWithSession } from "@/features/auth/components/user-menu";

export default async function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center">
      <UserMenuWithSession variant="profile" />
      <h1>Dashboard</h1>
    </div>
  );
}
