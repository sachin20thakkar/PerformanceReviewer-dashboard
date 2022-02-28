import { Section } from "src/models/section.model";

export const SECTIONS: Section[] = [
    {
        title: 'Technical Proficiency',
        id:"technicalProficiency",
        questionList: [
            {
                id:"skillSet",
                desc:"Skillsets required for the job",
            },
            {
                id:"domainKnowledge",
                desc:"Domain Knowledge required for the job",
            }

        ]
    },
    {
        title: 'Solution Delivery',
        id:"solutionDelivery",
        questionList: [
            {
                id:"understandingBusiness",
                desc:"Understanding of the business requirements"
            },
            {
                id:"designSolution",
                desc:"Designing Solutions",
            },
            {
                id:"deliveryTime",
                desc:"Solution Deliver Timeline",
            },
            {
                id:"deliveryQuality",
                desc:"Solution Deliver Quality",
            }

        ]
    },
    {
        title: 'Problem Solving',
        id: "problemSolving",
        questionList: [
            {
                id: "managinRoadBlocks",
                desc:"Managing Road Blocks"
            },
            {
                id:"challengeStatusQuo",
                desc:"Creativity and Innovation",
            },
            {
                id:"creativityInnovation",
                desc:"Challenges Status- quo",
            }

        ]
    },
    {
        title: 'Team Collaboration and Knowledge Sharing',
        id: "collaborationKT",
        questionList: [
            {
                id:"collaboration",
                desc:"Intra and Inter Team Collaboration",
            },
            {
                id:"mentoring",
                desc:"Mentoring",
            },
            {
                id:"teamProductivity",//
                desc:"Promotes Team Productivity",
            },
            {
                id:"resourceManagement", //
                desc:"Resource Management",
            }

        ]
    },
    {
        title: 'Process Adherence',
        id: "processAdherence",
        questionList: [
            {
                id:"processCompliance",
                desc:"Process Compliance",
            },
            {
                id:"promptEscalations",
                desc:"Prompt escalations to stakeholder",
            },
            {
                id:"responsivenessOnProductionIssue",
                desc:"Responsive to production issues",
            }

        ]
    },
]