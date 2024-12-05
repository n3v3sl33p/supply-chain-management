import { useUserStore } from "@/store/useUserStore";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";
import { changeUserData } from "@/services/user";
import toast from "react-hot-toast";

interface Props {
  className?: string;
}

export const ProfileInfo: React.FC<Props> = ({ className }) => {
  const [canChange, setCanChange] = useState(false);
  const user = useUserStore((state) => state.user);
  const fetchUser = useUserStore((state) => state.fetchUser);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const loadUserData = async () => {
      await fetchUser();
    };
    loadUserData();
  }, [fetchUser]);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setPatronymic(user.patronymic);
    }
  }, [user]);

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={className}>
      <h2 className="text-2xl">Профиль</h2>
      <Label>Имя</Label>
      <Input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        readOnly={!canChange}
      />
      <Label>Фамилия</Label>
      <Input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        readOnly={!canChange}
      />
      <Label>Отчество</Label>
      <Input
        type="text"
        id="patronymic"
        value={patronymic}
        onChange={(e) => setPatronymic(e.target.value)}
        readOnly={!canChange}
      />
      <Label>Почта</Label>
      <Input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        readOnly={!canChange}
      />
      <Label>Пароль</Label>
      <div className="relative">
        {showPassword ? (
          <Eye
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer right-0 absolute translate-y-2 mr-1"
          />
        ) : (
          <EyeOff
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer right-0 absolute translate-y-2 mr-1"
          />
        )}
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          readOnly={!canChange}
        />
      </div>
      {canChange && (
        <Button
          className="mt-2"
          onClick={() => {
            setCanChange(!canChange);
            if (
              email !== user.email ||
              firstName !== user.firstName ||
              lastName !== user.lastName ||
              patronymic !== user.patronymic ||
              password
            ) {
              try {
                const response = changeUserData({
                  id: user.id,
                  firstName,
                  lastName,
                  patronymic,
                  email,
                  password,
                  role: "USER",
                });
                toast.promise(response, {
                  loading: "Сохраняем данные...",
                  success: "Данные сохранены успешно",
                  error: "ОШИБКА ПРИ СОХРАНЕНИИ ДАННЫХ",
                });
              } catch (error) {
                console.log(error);
              }
            }
          }}
        >
          Сохранить
        </Button>
      )}
      {!canChange && (
        <Button
          className="mt-2"
          onClick={() => {
            setCanChange(!canChange);
          }}
        >
          Редактировать
        </Button>
      )}
    </div>
  );
};
