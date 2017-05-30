import { IStylistInformationData } from './stylist-information-data.interface';

export interface IUserInformationData {
  username: string;
  password: string;
  stylistInformation?: IStylistInformationData;
  type: string;
}

export const createDefaultUserInformationData: () => IUserInformationData = () => ({
  username: null,
  password: null,
  type: 'customer'
});