import { ClientService } from "@/services/client.service";

export default async function LayoutLayout({ children }) {
  const repo = await ClientService.getSettingsData();
  console.log("dasdasdasdasdas");
  return <>a{children}</>;
}
