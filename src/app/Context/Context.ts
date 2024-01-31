import { createContext } from "react";
import { modulesMocks } from "../../Mocks/modulesMocks";

type IContext = {
    id: number,
    title: string,
    contents: any[]
}

type IGlobalData = {
    globalData: IContext[],
    setGlobalData: (data: any) => void
}

export const IContext = createContext<IGlobalData>({
    globalData: modulesMocks,
    setGlobalData: (data: any) => {}
});
