"use client";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import RegFormField from "./field";
import { MyForm } from "./my-form";
import { register } from "@/services/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
export const RegForm = () => {
  const form = useFormContext();
  const [aboba, setAboba] = useState(0);
  const router = useRouter();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await register(
        data.firstName,
        data.secondName,
        data.patronymic,
        data.email,
        data.password
      );
      localStorage.setItem("token", response?.accessToken || "");
      localStorage.setItem("refresh-token", response?.refreshToken || "");
      router.push("/");
    } catch (error) {
      console.log("ОШИБКА ПРИ РЕГИСТРАЦИИ");
    } finally {
    }

    // form.reset();
  };

  return (
    <MyForm
      title="Регистрация"
      buttonText="Зарегистрироваться"
      onSubmit={onSubmit}
    >
      <RegFormField
        formControl={form.control}
        label="Имя"
        placeholder="Иван"
        name="firstName"
      />
      <RegFormField
        formControl={form.control}
        label="Фамилия"
        placeholder="Залупенко"
        name="secondName"
      />
      <RegFormField
        formControl={form.control}
        label="Отчество"
        placeholder="Иванович"
        name="patronymic"
      />
      <RegFormField
        formControl={form.control}
        label="Почта"
        placeholder="Почта"
        name="email"
        inputType="email"
      />
      <RegFormField
        formControl={form.control}
        label="Пароль"
        placeholder="Пароль"
        name="password"
        inputType="password"
      />
    </MyForm>
  );
};
