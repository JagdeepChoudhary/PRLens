import { requireUnauth } from "@/features/auth/actions";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireUnauth();
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center">
      <div className="w-full max-w-sm p-6  rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
}
