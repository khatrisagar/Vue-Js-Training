import { axiosPost } from "@/plugins";
import { createuserInterface } from "@/interfaces";

export const signUpService = (data: createuserInterface) => {
  return axiosPost(`auth/sign-up/`, data);
};
