export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface BirthData {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface LoginData {
  login: string;
  password: string;
}

export interface AddressData {
  street: string;
  zipcode: string;
  city: string;
  house_number: number | null;
  flat_number: number | null;
}

export interface SignupData {
  name: string;
  surname: string;
  mail: string;
  tel: string;
  rooms: number;
  birth: BirthData;
  address: AddressData;
  logs: LoginData;
}

export function defaultSignupData(): SignupData {
  return {
    name: '',
    surname: '',
    mail: '',
    tel: '',
    rooms: 1,
    birth: {
      day: null,
      month: null,
      year: null,
    },
    address: {
      street: '',
      zipcode: '',
      city: '',
      house_number: null,
      flat_number: null,
    },
    logs: {
      login: '',
      password: '',
    },
  };
}
