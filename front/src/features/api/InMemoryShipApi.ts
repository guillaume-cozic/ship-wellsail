import type Ship from "./Ship";

export class InMemoryShipApi {

    private ships:Array<Ship> = [];

    async fetch(filter: { type: string | undefined }): Promise<Array<Ship>> {
        let ships = this.ships;
        if (filter.type !== undefined) {
            ships = this.ships.filter(ship => ship.type === filter.type);
        }
        return Promise.resolve(ships);
    }
}
