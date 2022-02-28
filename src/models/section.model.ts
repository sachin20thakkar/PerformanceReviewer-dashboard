export interface Section{
    questionList:Question[],
    title:string,
    id: string;
}

interface Question {
    rating?: number;
    desc:string;
    id:string;
}