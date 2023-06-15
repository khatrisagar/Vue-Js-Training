export interface loginUserInterface {
  email: string;
  password: string;
}

export interface createuserInterface extends loginUserInterface {
  name: string;
  surname: string;
}

export interface userStateInterface {
  isUserLoggedIn?: boolean;
  loggedInUserId: string | null;
  loggedInUserName: string | null;
  userAuthToken: string | null;
}
