export type content = {
    id?: number;
    type: string;
    title: string;
    text: string;
    link: string;
    thumbnail: string;
    created_at?: Date;
    updated_at?: Date;
}

export type module = {
    id: number;
    name: string;
    thumbnail: string;
    content: content[];
    created_at: Date;
    updated_at: Date;
}