export interface IBookingInformation {
  id: number;
  id_stylists: number;
  id_users: number;
  isconfirmed: number;
  isCompleted: number;
  location: string;
  latitude?: number;
  longitude?: number;
  name: string;
  time: string;
}
