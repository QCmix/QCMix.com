import { getCurrentUser } from "@/lib/user";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/industry-join");

  return <section>{children}</section>;
}
