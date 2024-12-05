"use client";
import { LoginForm } from "@/components/shared/login-form";
import { RegForm } from "@/components/shared/reg-form";
import { Map } from "@/components/shared/Map";
import { useUserStore } from "@/store/useUserStore";
import { useEffect } from "react";
import { getUserData } from "@/services/user";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserData();
        setUser(response);
      } catch (error) {
        console.log(error);
        router.push("/auth");
      }
    };

    fetchUser();
  }, []);
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      НОРМ
      <div>{user?.email}</div>
      <div>{user?.firstName}</div>
      <div>{user?.id}</div>
      {/* <Map /> */}
    </div>
  );
}
