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

type contentModuleReturn = {
    contentId: number;
    moduleId: number;
    content: content[];
}

export type module = {
    id: number;
    name: string;
    thumbnail: string;
    content: contentModuleReturn[],
    created_at: Date;
    updated_at: Date;
}