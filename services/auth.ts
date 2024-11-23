import api from "@/axios-config";
import { AuthResponse } from "@/models/auth-response";
import { AxiosResponse } from "axios";

export const login = async (email: string, password: string) => {
  try {
    const response: AxiosResponse<AuthResponse> = await api.post("/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.warn(error);
  }
};

export const register = async (
  firstName: string,
  secondName: string,
  patronymic: string,
  email: string,
  password: string
) => {
  try {
  } catch (error) {
    console.warn(error);
  }
};
