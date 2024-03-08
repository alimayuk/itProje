import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AdminCheck } from "@/services/check.service";

export default async function AuthLayout({ children }) {
    const repo = await AdminCheck.admincheck();
    if (repo.valid) {
      return redirect(`/admin`);
    }
  return (
    <>
      {children}
    </>
  );
}