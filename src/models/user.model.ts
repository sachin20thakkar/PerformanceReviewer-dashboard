import { Contigent } from "./contigent.model";

export interface UserInfo{
    name: string;
    loginId: string;
    image: string;
    departmentDesc:string;
    superDivisionDesc: string;
    photoURL: string;
    fullName: string;
    userID: string;
    title: string;
    employeeIDNumber: string;
    contigents: Contigent[];
}