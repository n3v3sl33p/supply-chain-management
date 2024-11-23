"use client";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import RegFormField from "./field";
import { MyForm } from "./my-form";
export const RegForm = () => {
  const form = useFormContext();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
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
