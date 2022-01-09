export interface LoginDTO {
  email: string;
  password: string;
}

export const loginDTO: LoginDTO = {
  email: '',
  password: '',
};

export interface SignupDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

export const signupDTO: SignupDTO = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
};
