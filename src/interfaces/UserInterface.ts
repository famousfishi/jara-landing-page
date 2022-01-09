export interface IUserInterface {
  userId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export const defaultUser: IUserInterface = {
  userId: 0,
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
};
