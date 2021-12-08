export interface IUser {
  id: string,
  email: string;
  firstName: string;
  lastName: string;
}

export interface IAuthSession {
  session: {
    email: string;
    password: string;
  };
}