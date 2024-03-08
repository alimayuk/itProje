import Footer from "@/layout/user/Footer";
import Navbar from "@/layout/user/Navbar";
import { ClientService } from "@/services/client.service";

export default async function UsersLayout({ children }) {
  const data = await ClientService.getSettingsData();
  return (
    <>
      <Navbar data={data.settings[0]} />
      {children}
      <Footer data={data.settings[0]} />
    </>
  );
}
