// import { FormData } from './AuthForm.interface';

export interface LoginData {
    login: "";
    password: "";
}


export interface IRegistrationForm extends LoginData {
    name: "",
    surname: "",
    email: "",
    phoneNumber: 0,
    repeatPassword: "",
}