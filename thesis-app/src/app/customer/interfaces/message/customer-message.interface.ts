export interface ICustomerMessage {
  name: string;
  id_recipient?: number;
  id_sender?: number;
  body: string;
  time: number;
  location: string;
}