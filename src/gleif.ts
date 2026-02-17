import { z } from 'zod';

const GleifSearchResponseSchema = z.object({
    data: z.array(
        z.object({
            attributes: z.object({
                lei: z.string(),
                entity: z.object({
                    legalName: z.object({ name: z.string() }),
                    status: z.string(),
                }),
            }),
        })
    ),
});

export interface LeiRecord {
    lei: string;
    legalName: string;
    status: string;
}

export async function searchByName(name: string): Promise<LeiRecord[]> {
    const url = `https://api.gleif.org/api/v1/lei-records?filter[entity.legalName]=${encodeURIComponent(name)}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`GLEIF API request failed with status ${response.status}`);
    }
    const json = GleifSearchResponseSchema.parse(await response.json());

    return json.data.map((item) => ({
        lei: item.attributes.lei,
        legalName: item.attributes.entity.legalName.name,
        status: item.attributes.entity.status,
    }));
}
