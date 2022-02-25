export interface Section{
    questionList:Question[],
    title:string
}

interface Question {
    rating?: number;
    desc:string;
    id:number;
}