export interface LeiRecord {
    lei: string;
    legalName: string;
    status: string;
}

interface GleifSearchResponse {
    data: {
        attributes: {
            lei: string;
            entity: {
                legalName: { name: string };
                status: string;
            };
        };
    }[];
}

export async function searchByName(name: string): Promise<LeiRecord[]> {
    const url = `https://api.gleif.org/api/v1/lei-records?filter[entity.legalName]=${name}`;
    const response = await fetch(url);
    const json: GleifSearchResponse = await response.json();

    const records = json.data.map((item) => {
        return {
            lei: item.attributes.lei,
            legalName: item.attributes.entity.legalName.name,
            status: item.attributes.entity.status,
        };
    });

    return records;
}