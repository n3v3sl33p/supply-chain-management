import React from "react";
import { Auth } from "@/components/shared/auth";
interface Props {
  className?: string;
}
const AuthPage: React.FC<Props> = ({ className }) => {
  return (
    <div className="max-w-lg flex-1 p-3">
      <Auth />
    </div>
  );
};
export default AuthPage;
