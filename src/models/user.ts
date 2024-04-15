export interface UserInterface {
    id: string;
    name: string;
}

export type UserState = {
    ids: string[];
    entities: Record<string, UserInterface>
}