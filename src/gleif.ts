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