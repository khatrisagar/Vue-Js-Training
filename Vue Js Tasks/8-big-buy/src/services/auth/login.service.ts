import { axiosGet, axiosPost } from "@/plugins";

export const loginService = (data: any) => {
  return axiosPost(`auth/login/`, data);
};
