import Navbar from "@/layout/admin/Navbar";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AdminCheck } from "@/services/check.service";


export default async function AdminLayout({ children }) {
    const repo = await AdminCheck.admincheck();
    if (!repo.valid || getCookie("access_token", { cookies }) === undefined) {
      return redirect(`/`);
    }

  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}