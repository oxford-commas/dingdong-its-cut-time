export interface IMessage {
  recipient?: string;
  sender?: string;
  subjectHeading: string;
  body: string;
  time: number;
  location: string;
  id?: number;
  id_sender?: number;
  id_recipient?: number;
}