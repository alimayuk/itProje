import SettingsPage from "@/components/SettingsPage/SettingsPage"
import { SettingsService } from "@/services/settings.service"


const page = async() => {
  const data = await SettingsService.getSettings(2);
  return <SettingsPage data={data}/>
}

export default page