export interface IMessage {
  recipient?: string;
  sender?: string;
  body: string;
  id?: number;
  id_sender?: number;
  id_recipient?: number;
}