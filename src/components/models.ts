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
  place_area: number | null,
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
  flat_owner: number;
}

export interface UserData {
  id: number;
  name: string;
  surname: string;
  logs: LoginData;
  flat_owner: number;
  token: string | null;
}

export function defaultSignupData(): SignupData {
  return {
    name: '',
    surname: '',
    mail: '',
    tel: '',
    rooms: 1,
    flat_owner: 1,
    birth: {
      day: null,
      month: null,
      year: null,
    },
    address: {
      place_area: 0,
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
