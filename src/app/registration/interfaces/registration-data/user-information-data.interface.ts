import { IStylistInformationData } from './stylist-information-data.interface';

export interface IUserInformationData {
  name: string;
  password: string;
  stylistInformation?: IStylistInformationData;
  type: number;
}

export const createDefaultUserInformationData: () => IUserInformationData = () => ({
  name: null,
  password: null,
  type: 1
});