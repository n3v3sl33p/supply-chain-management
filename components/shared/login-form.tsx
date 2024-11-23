"use client";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import Field from "./field";
import { MyForm } from "./my-form";
import { login } from "@/services/auth";
import { redirect, useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();
  const form = useFormContext();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await login(data.email, data.password);
      localStorage.setItem("token", response?.accessToken || "");
      localStorage.setItem("refresh-token", response?.refreshToken || "");
      console.log("aboba");
      router.push("/");
    } catch (error) {
      console.log("ОШИБКА ПРИ АВТОРИЗАЦИИ");
      console.log(error);
    } finally {
    }
    // form.reset();
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
