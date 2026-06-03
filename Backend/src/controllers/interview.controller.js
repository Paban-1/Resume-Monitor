const pdfParse = require("pdf-parse")
const generateInterviewReport = require("../services/ai.service")
const InterviewReportModel = require("../models/interviewReport.model")

async function generateInterviewReportController(req, res) {
    // const resumeFile = req.file

    const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
    const { selfDescription, jobDescription } = req.body

    const interReportByAi = await generateInterviewReport({ resume: resumeContent, selfDescription, jobDescription })

    const interviewReport = await InterviewReportModel({
        user: req.user.id,
        resume: resumeContent.text,
        selfDescription,
        jobDescription,
        ...interReportByAi
    })

    res.status(200).json({
        message: "Interview report generated successfully",
        interviewReport
    })
}

async function getInterviewReportByIdController(req, res) {
    const { interviewId } = req.params
    const interviewReport = await InterviewReportModel.findOne({ _id: interviewId, user: req.user.id })

    if (!interviewReport) {
        return res.status(404).json({ message: "Interview report not found" })
    }
    res.status(200).json({
        message: "Interview report fetched successfully",
        interviewReport
    })
}

async function getAllInterviewReportsController(req, res){
const interview = await InterviewReportModel.find({user: req.user.id}).sort({ createdAt: -1 })
}

module.exports = { generateInterviewReportController, getInterviewReportByIdController }