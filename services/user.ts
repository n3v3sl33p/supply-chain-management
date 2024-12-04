import api from "@/axios-config";
import { IUser } from "@/models/IUser";
import { AxiosResponse } from "axios";

export const getUserData = async () => {
  try {
    const response: AxiosResponse<IUser> = await api.get("/users/current");
    return response.data;
  } catch (error) {
    throw error;
  }
};
// export const getAllUsers = async () => {
//   try {
//     const
//   } catch (error) {
//     throw error;
//   }
// }
