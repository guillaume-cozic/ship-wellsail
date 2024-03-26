import type Ship from "./Ship";

export class ShipApi {

    async fetch(filter: { type: string | undefined }): Promise<Array<Ship>> {
        let url = import.meta.env.VITE_API_URL + '/ships';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
