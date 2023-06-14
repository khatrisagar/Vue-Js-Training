export const userRegisterValidation = {
  userNameRules: [
    (value: any) => {
      if (value) return true;

      return "User Name Should Not be Empty.";
    },
  ],
  userSurnameRules: [
    (value: any) => {
      if (value) return true;

      return "User Name Should Not be Empty.";
    },
  ],
  userEmailRules: [
    (value: any) => {
      if (value) return true;

      return "Email Should Not be Empty.";
    },
    (value: any) => {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
  ],
  userPasswordRules: [
    (value: any) => {
      if (value) return true;

      return "Password Should Not be Empty.";
    },
    (value: any) => {
      if (value?.length > 8) return true;

      return "Password Should be greater than 8 Digits";
    },
  ],
};
