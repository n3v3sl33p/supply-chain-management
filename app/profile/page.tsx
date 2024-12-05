"use client";
import { ProfileInfo } from "@/components/shared/profile-info";
import { AppSidebar } from "@/components/shared/sidebar";
import { WarehouseInfo } from "@/components/shared/warehouse-info";
import { SidebarProvider } from "@/components/ui/sidebar";
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
const ProfilePage: React.FC<Props> = ({ className }) => {
  const [selected, setSelected] = useState(0);
  return (
    <SidebarProvider>
      <AppSidebar
        items={MenuItems}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="m-4">
        {selected === 0 && <ProfileInfo />}
        {selected === 1 && <WarehouseInfo />}
      </div>
    </SidebarProvider>
  );
};
export default ProfilePage;
