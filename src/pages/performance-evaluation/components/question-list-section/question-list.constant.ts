import { Section } from "src/models/section.model";

export const SECTIONS: Section[] = [
    {
        title: 'Technical Proficiency',
        questionList: [
            {
                id:1,
                desc:"Skillsets required for the job",
            },
            {
                id:2,
                desc:"Domain Knowledge required for the job",
            }

        ]
    },
    {
        title: 'Solution Delivery',
        questionList: [
            {
                id:3,
                desc:"Understanding of the business requirements"
            },
            {
                id:4,
                desc:"Designing Solutions",
            },
            {
                id:5,
                desc:"Solution Deliver Timeline",
            },
            {
                id:6,
                desc:"Solution Deliver Quality",
            }

        ]
    },
    {
        title: 'Problem Solving',
        questionList: [
            {
                id:7,
                desc:"Managing Road Blocks"
            },
            {
                id:8,
                desc:"Creativity and Innovation",
            },
            {
                id:9,
                desc:"Challenges Status- quo",
            }

        ]
    },
    {
        title: 'Team Collaboration and Knowledge Sharing',
        questionList: [
            {
                id:10,
                desc:"Intra and Inter Team Collaboration",
            },
            {
                id:11,
                desc:"Mentoring",
            },
            {
                id:12,
                desc:"Promotes Team Productivity",
            },
            {
                id:13,
                desc:"Resource Management",
            }

        ]
    },
    {
        title: 'Process Adherence',
        questionList: [
            {
                id:14,
                desc:"Process Compliance",
            },
            {
                id:15,
                desc:"Prompt escalations to stakeholder",
            },
            {
                id:16,
                desc:"Responsive to production issues",
            }

        ]
    },
]