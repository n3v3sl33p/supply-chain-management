"use client";
import { AppSidebar } from "@/components/shared/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { User, Warehouse } from "lucide-react";
import { useState } from "react";
interface Props {
  className?: string;
}

const MenuItems = [
  {
    title: "Профиль",
    url: "#",
    icon: User,
  },
  {
    title: "Мой склад",
    url: "#",
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
      {selected === 0 && (
        <div className={className}>
          <h1>Профиль</h1>
        </div>
      )}
      {selected === 1 && (
        <div className={className}>
          <h1>Мой склад</h1>
        </div>
      )}
    </SidebarProvider>
  );
};
export default ProfilePage;
