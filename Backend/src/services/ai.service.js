const { GoogleGenAI } = require("@google/genai")

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})

// const interviewReportSchema = z.object({
//     matchScore: z.number()
//         .describe("A score between 0 and 100 indicating how well the candidate's profile matches the job description. Be precise and critical."),

//     technicalQuestions: z.array(z.object({
//         question: z.string()
//             .describe("A specific, deep technical question tailored to the candidate's background AND the job requirements. Must be detailed and role-specific, not generic."),
//         intention: z.string().describe("A professional 2-3 sentence explanation of exactly what the interviewer is trying to assess with this question — the skill, behavior, or red flag being probed."),
//         answer: z.string().describe("A comprehensive answer guide: key concepts to cover, ideal approach, code patterns or examples if applicable, and what a great vs mediocre answer looks like.")

//     })).min(5).max(8).describe("5 to 8 in-depth technical interview questions tailored specifically to this candidate's resume gaps and the job's technical requirements."),

//     behavioralQuestions: z.array(z.object({
//         question: z.string()
//             .describe("A behavioral question using STAR-method format, tailored to the candidate's experience level and the role's soft skill requirements."),
//         intention: z.string()
//             .describe("A professional 2-3 sentence explanation of what trait, mindset, or past behavior the interviewer is trying to uncover."),
//         answer: z.string()
//             .describe("A detailed answer guide: what a strong STAR response looks like, what specific details to include from their background, and red flags to avoid.")
//     })).min(4).max(6)
//         .describe("4 to 6 behavioral questions tailored to the seniority level and team dynamics of this role."),

//     skillGaps: z.array(z.object({
//         skill: z.string()
//             .describe("The specific missing or weak skill identified by comparing the resume against the job description."),
//         severity: z.enum(["low", "medium", "high"])
//             .describe("Severity: 'high' = hard requirement missing, 'medium' = preferred skill missing, 'low' = nice-to-have missing."),
//         context: z.string()
//             .describe("2-3 sentences explaining why this gap matters for this specific role, and whether it is bridgeable.")
//     })).describe("All skill gaps found by carefully comparing the resume to the job description, each with business context."),

//     preparationPlan: z.array(z.object({
//         day: z.number()
//             .describe("Day number starting from 1."),
//         focus: z.string()
//             .describe("The single main theme of this day, e.g. 'System Design for Payment Systems' or 'Java Spring Boot Fundamentals'."),
//         tasks: z.array(z.string())
//             .describe("3 to 5 concrete, actionable tasks for the day. Each task should be specific — name actual resources, topics, or exercises. No vague tasks like 'study algorithms'.")
//     })).min(7)
//         .describe("A detailed day-by-day preparation plan of at least 7 days, designed specifically around this candidate's gaps and the job requirements.")
// })

const interviewReportSchema = {
    type: "OBJECT",
    properties: {
        title: {
            type: "STRING",
            description: "Title of the interview report, e.g. 'Senior Java Developer Interview Preparation Report'"
        },
        matchScore: {
            type: "NUMBER",
            description: "A score between 0 and 100 indicating how well the candidate matches the job description. Be precise and critical."
        },
        technicalQuestions: {
            type: "ARRAY",
            description: "5 to 8 in-depth technical questions tailored to the candidate's gaps and job requirements.",
            items: {
                type: "OBJECT",
                properties: {
                    question: {
                        type: "STRING",
                        description: "A specific deep technical question tailored to the candidate and role. Not generic."
                    },
                    intention: {
                        type: "STRING",
                        description: "2-3 sentences explaining exactly what the interviewer is trying to assess."
                    },
                    answer: {
                        type: "STRING",
                        description: "Comprehensive answer guide with frameworks, key points, and examples."
                    }
                },
                required: ["question", "intention", "answer"]
            }
        },
        behavioralQuestions: {
            type: "ARRAY",
            description: "4 to 6 behavioral questions tailored to seniority level and team dynamics.",
            items: {
                type: "OBJECT",
                properties: {
                    question: {
                        type: "STRING",
                        description: "STAR-method behavioral question tailored to the candidate."
                    },
                    intention: {
                        type: "STRING",
                        description: "2-3 sentences explaining what trait the interviewer is uncovering."
                    },
                    answer: {
                        type: "STRING",
                        description: "Detailed STAR answer guide with specific points and red flags to avoid."
                    }
                },
                required: ["question", "intention", "answer"]
            }
        },
        skillGaps: {
            type: "ARRAY",
            description: "All skill gaps found by comparing resume to job description, each with business context.",
            items: {
                type: "OBJECT",
                properties: {
                    skill: {
                        type: "STRING",
                        description: "The specific missing or weak skill."
                    },
                    severity: {
                        type: "STRING",
                        enum: ["low", "medium", "high"],
                        description: "high = hard requirement missing, medium = preferred missing, low = nice-to-have missing."
                    },
                    context: {
                        type: "STRING",
                        description: "2-3 sentences on why this gap matters for this role and whether it is bridgeable."
                    }
                },
                required: ["skill", "severity", "context"]
            }
        },
        preparationPlan: {
            type: "ARRAY",
            description: "A detailed day-by-day plan of at least 7 days designed around the candidate's gaps.",
            items: {
                type: "OBJECT",
                properties: {
                    day: {
                        type: "NUMBER",
                        description: "Day number starting from 1."
                    },
                    focus: {
                        type: "STRING",
                        description: "Main theme of the day e.g. Java Spring Boot Fundamentals."
                    },
                    tasks: {
                        type: "ARRAY",
                        description: "3 to 5 specific actionable tasks with real resources and exercises.",
                        items: { type: "STRING" }
                    }
                },
                required: ["day", "focus", "tasks"]
            }
        }
    },
    required: ["matchScore", "technicalQuestions", "behavioralQuestions", "skillGaps", "preparationPlan"]
}


async function generateInterviewReport({ resume, selfDescription, jobDescription }) {

    const prompt = `You are an expert technical recruiter with 15+ years of experience.

CRITICAL OUTPUT FORMAT RULES - YOU MUST FOLLOW THESE EXACTLY:
- matchScore must be a NUMBER between 0 and 100
- technicalQuestions must be an ARRAY OF OBJECTS, each with "question", "intention", "answer"
- behavioralQuestions must be an ARRAY OF OBJECTS, each with "question", "intention", "answer"
- skillGaps must be an ARRAY OF OBJECTS with "skill", "severity", "context"
- preparationPlan must be an ARRAY OF OBJECTS with "day", "focus", "tasks"
- NEVER return arrays of plain strings
- EVERY object MUST have ALL fields filled

HOW TO CALCULATE matchScore:
- Holistically assess overall fit, do NOT subtract points mathematically
- 50 = meets roughly half the requirements
- 70 = meets most requirements with some gaps
- 85 = strong match with minor gaps
- 95+ = near perfect match

Resume: ${resume}
Self Description: ${selfDescription}
Job Description: ${jobDescription}

Generate a complete professional interview preparation report.`


    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",   // fixed model name
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: interviewReportSchema,
            temperature: 0.2
        }
    })


    const parsed = JSON.parse(response.text)
    return parsed
}

module.exports = generateInterviewReport