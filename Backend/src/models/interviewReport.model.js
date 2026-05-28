const mongoose = require('mongoose')
const { Schema } = mongoose

/**
 * job description schema :String
 * resume test:String
 * self descriptions :String
 * 
 * matchScore : Number
 * 
 * Technical qustion :
 *          [{
 *          question : "",
 *          intention: "",
 *          answer: "",
 *           }]
 * Behavioral question :
 *          [{
 *          question : "",
 *          intention: "",
 *          answer: "",
 *           }]
 * Skill gaps :
 *          [{
 *          skill : "",
 *          serverity: {
 *          type: "",
 *          enum:["low", "medium","high"]
 *      },
 *        }]
 * Preparation plan :[{
 *          day:Number,
 *          focus: String,
 *          tasks :[String]
 *       }]
 */

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
}, {
    _id: false
})

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
}, {
    _id: false
})

const skillGapSchema = new Schema({
    skill: {
        type: String,
        required: [true, "skill is required"]
    },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],
        required: [true, "severity is required"]
    }
}, {
    _id: false
})

const PreparationPlanSchema = new Schema({
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
}, {
    _id: false
})

const interviewReportSchema = new Schema({
    jobDescription: {
        type: String,
        required: [true, "job desciption is required"]
    },
    resume: {
        type: String,
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100
    },
    technicalQuestion: [technicalQuestionSchema],
    behavioralQuestion: [behavioralQuestionSchema],
    skillGaps: [skillGapSchema],
}, {
    timestamps: true
})

const interviewReportModel = mongoose.model("intreviewReport", interviewReportSchema)

module.exports = interviewReportModel