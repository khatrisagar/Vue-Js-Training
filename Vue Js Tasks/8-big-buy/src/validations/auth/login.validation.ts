export const userLoginValidation = {
  userEmailRules: [
    (value: string) => {
      if (value) return true;

      return "Email Should Not be Empty.";
    },
    (value: string) => {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
  ],
  userPasswordRules: [
    (value: string) => {
      if (value) return true;

      return "Pasword  Should Not be Empty.";
    },
  ],
};
