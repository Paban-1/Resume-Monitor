const mongoose = require('mongoose')
const { Schema } = mongoose

const technicalQuestionSchema = new Schema({
    question: {
        type: String,
        required: [true, "technical question is required"]
    },
    intention: {
        type: String,
        required: [true, "intention is required"]
    },
    answer: {
        type: String,
        required: [true, "answer is required"]
    }
}, { _id: false })

const behavioralQuestionSchema = new Schema({
    question: {
        type: String,
        required: [true, "behavioral question is required"]
    },
    intention: {
        type: String,
        required: [true, "intention is required"]
    },
    answer: {
        type: String,
        required: [true, "answer is required"]
    }
}, { _id: false })

const skillGapSchema = new Schema({
    skill: {
        type: String,
        required: [true, "skill is required"]
    },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],
        required: [true, "severity is required"]
    },
    context: {           // ✅ added
        type: String,
        required: [true, "context is required"]
    }
}, { _id: false })

const preparationPlanSchema = new Schema({
    day: {
        type: Number,
        required: [true, "day is required"]
    },
    focus: {
        type: String,
        required: [true, "focus is required"]
    },
    tasks: [{
        type: String,
        required: [true, "tasks are required"]
    }]
}, { _id: false })

const interviewReportSchema = new Schema({
    jobDescription: {
        type: String,
        required: [true, "job description is required"]
    },
    resume: {
        type: String,
        required: [true, "resume is required"]
    },
    selfDescription: {       // ✅ added
        type: String
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100
    },
    technicalQuestions: [technicalQuestionSchema],   // ✅ plural
    behavioralQuestions: [behavioralQuestionSchema], // ✅ plural
    skillGaps: [skillGapSchema],
    preparationPlan: [preparationPlanSchema],         // ✅ added
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    title: {
        type: String,
        required: [true, "job title is required"]
    }
}, {
    timestamps: true
})

const InterviewReportModel = mongoose.model("InterviewReport", interviewReportSchema)

module.exports = InterviewReportModel