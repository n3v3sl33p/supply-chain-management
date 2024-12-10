"use client";
import { CustomTrigger } from "@/components/shared/custom-trigger";
import { ProfileInfo } from "@/components/shared/profile-info";
import { AppSidebar } from "@/components/shared/sidebar";
import { WarehouseInfo } from "@/components/shared/warehouse-info";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { User, Warehouse } from "lucide-react";
import { useState } from "react";
interface Props {
  className?: string;
}

const MenuItems = [
  {
    title: "Профиль",
    icon: User,
  },
  {
    title: "Мой склад",
    icon: Warehouse,
  },
];
const Home: React.FC<Props> = ({ className }) => {
  const [selected, setSelected] = useState(0);
  return (
    <SidebarProvider>
      <AppSidebar
        items={MenuItems}
        selected={selected}
        setSelected={setSelected}
      />
      <CustomTrigger />
      <div className="m-4">
        {selected === 0 && <ProfileInfo />}
        {selected === 1 && <WarehouseInfo />}
      </div>
    </SidebarProvider>
  );
};
export default Home;
