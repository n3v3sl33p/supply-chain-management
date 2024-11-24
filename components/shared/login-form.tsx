"use client";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import Field from "./field";
import { MyForm } from "./my-form";
import { login } from "@/services/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const LoginForm = () => {
  const router = useRouter();
  const form = useFormContext();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = login(data.email, data.password).then((res) => {
        localStorage.setItem("token", res?.accessToken || "");
        localStorage.setItem("refresh-token", res?.refreshToken || "");
        router.push("/");
      });
      toast.promise(response, {
        loading: "Авторизируемся...",
        success: "Авторизация прошла успешно",
        error: "ОШИБКА ПРИ АВТОРИЗАЦИИ",
      });
    } catch (error) {
      console.log("ОШИБКА ПРИ АВТОРИЗАЦИИ");
      console.log(error);
    }
  };

  return (
    <MyForm title="Войти в аккаунт" buttonText="Войти" onSubmit={onSubmit}>
      <Field
        formControl={form.control}
        label="Email"
        placeholder="email@mail.com"
        name="email"
      />
      <Field
        formControl={form.control}
        label="Пароль"
        placeholder="Пароль"
        name="password"
      />
    </MyForm>
  );
};
