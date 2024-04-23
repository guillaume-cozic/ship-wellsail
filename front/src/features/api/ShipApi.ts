import type Ship from "./Ship";

export class ShipApi {

    async fetch(filter: { type: string | undefined }): Promise<Array<Ship>> {
        let query = '';
        if (filter.type !== undefined) {
            query = 'type=' + filter.type;
        }
        let url = import.meta.env.VITE_API_URL + '/ships?' + query;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async requestFreightTransport(request: {shipId: number, email: string, content: string}) {
        let url = import.meta.env.VITE_API_URL + '/freight-transport';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
