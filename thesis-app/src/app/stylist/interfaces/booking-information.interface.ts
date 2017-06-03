export interface IBookingInformation {
  id: number;
  id_stylists: number;
  id_users: number;
  isconfirmed: number;
  location: string;
  name: string;
  time: string;
}

export const createDefaultBookingInformation: () => IBookingInformation = () => ({
  id: 0,
  id_stylists: 0,
  id_users: 0,
  isconfirmed: 0,
  location: '',
  name: '',
  time: ''
});