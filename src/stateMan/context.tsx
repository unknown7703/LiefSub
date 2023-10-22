import React, { createContext, useContext  } from 'react';
import {  IAnnotation } from "react-mark-image";
//types
export type ReportContext={
    annotation : IAnnotation[]
    setAnnotation : React.Dispatch<React.SetStateAction<IAnnotation[]>>
}
export type ListContext={
    list:Array<IAnnotation[]>
    setList: React.Dispatch<React.SetStateAction<Array<IAnnotation[]>>>
}
export type TableContext={
    tabledata:Array<String>
    setTable: React.Dispatch<React.SetStateAction<Array<String>>>
}
//crete context
export const GlobalList =createContext<ListContext>({
    list:[],
    setList:()=>{}
})
export const GlobalReport =createContext<ReportContext>({
    annotation:[],
    setAnnotation: () => {},
});
export const GlobalTable =createContext<TableContext>({
    tabledata:[],
    setTable: () => {},
});
//use context
export const useGlobalReport =()=>useContext(GlobalReport);
export const useGlobalList =()=>useContext(GlobalList);
export const useGlobalTable =()=>useContext(GlobalTable);