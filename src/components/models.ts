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
  place_area: number | null;
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

export class AccountSettings {
  id: number;
  email: string;
  phone: string;
  passwordold: string;
  passwordnew: string;
  delete: boolean;

  constructor(id: number) {
    this.id = id;
    this.email = '';
    this.phone = '';
    this.passwordold = '';
    this.passwordnew = '';
    this.delete = false;
  }
}

export class DeleAccount {
  id: number;
  password: string;

  constructor(id: number) {
    this.id = id;
    this.password = '';
  }
}

export class FlatData {
  id: number;
  place_area: number;
  rooms: number;
  city: string;
  zipcode: string;
  street: string;
  house_nr: number;
  flat_nr: number;

  constructor() {
    this.id = 0;
    this.city = '';
    this.zipcode = '';
    this.street = '';
    this.flat_nr = 0;
    this.rooms = 0;
    this.place_area = 0;
    this.house_nr = 0;
  }
}

export class Account {
  id: number;
  name: string;
  end_living: string;
  surname: string;
  login: string;
  email: string;
  tel: string;
  rooms: number;
  start_living: string;

  constructor() {
    this.id = 0;
    this.rooms = 0;
    this.name = '';
    this.surname = '';
    this.login = '';
    this.start_living = '';
    this.tel = '';
    this.email = '';
    this.end_living = '';
  }
}
