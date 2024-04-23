import { Ship } from './ship';

export const SHIP_REPOSITORY = 'SHIP_REPOSITORY';

export interface ShipRepository {
  getById(id: number): Promise<Ship>;
  saveFreightTransportRequest(freightTransportRequest: {
    shipId: number;
    email: string;
    content: string;
  }): void;
}
