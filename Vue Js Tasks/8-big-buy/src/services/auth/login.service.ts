import { axiosPost } from "@/plugins";
import { loginUserInterface } from "@/interfaces";

export const loginService = (data: loginUserInterface) => {
  return axiosPost(`auth/login/`, data);
};
