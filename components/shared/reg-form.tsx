"use client";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import RegFormField from "./field";
import { MyForm } from "./my-form";
import { register } from "@/services/auth";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { createPortal } from "react-dom";

export const RegForm = () => {
  const form = useFormContext();
  const router = useRouter();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = register(
        data.firstName,
        data.secondName,
        data.patronymic,
        data.email,
        data.password
      ).then((res) => {
        localStorage.setItem("token", res?.accessToken || "");
        localStorage.setItem("refresh-token", res?.refreshToken || "");
        router.push("/");
      });
      toast.promise(response, {
        loading: "Регистрируемся...",
        success: "Регистрация прошла успешно",
        error: "ОШИБКА ПРИ РЕГИСТРАЦИИ",
      });
    } catch (error) {
      console.log("ОШИБКА ПРИ РЕГИСТРАЦИИ");
    }
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
