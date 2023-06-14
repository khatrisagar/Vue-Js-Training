import { axiosPost } from "@/plugins";

export const signUpService = (data: any) => {
  return axiosPost(`auth/sign-up/`, data);
};
