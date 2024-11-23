import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import Field from "./field";
import { MyForm } from "./my-form";

export const LoginForm = () => {
  const form = useFormContext();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    form.reset();
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
