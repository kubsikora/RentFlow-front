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
  postalcode: string;
  city: string;
  country: string;
  house_number: number | null;
  flat_number: number | null;
}

export interface SignupData {
  name: string;
  surname: string;
  mail: string;
  tel: string;
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
    birth: {
      day: null,
      month: null,
      year: null,
    },
    address: {
      street: '',
      postalcode: '',
      city: '',
      country: '',
      house_number: null,
      flat_number: null,
    },
    logs: {
      login: '',
      password: '',
    },
  };
}
