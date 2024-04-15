export interface ReviewInterface {
    id: string;
    userId: string;
    text: string;
    rating: number;
}

export type ReviewState = {
    ids: string[];
    entities: Record<string, ReviewInterface>
}