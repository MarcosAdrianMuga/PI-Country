const { getAllActivity, createActivity } = require("../controllers/country&activityController")

const getAllActivityHandler = async (req, res) => {
    try {
        const activities = await getAllActivity()
        res.status(200).json(activities)
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

const createActivityHandler = async (req, res) => {
    try {
        const { name, difficulty, duration, season, country } = req.body
        const newActivity = await createActivity(name, difficulty, duration, season, country)
        res.status(201).json(newActivity)
    } catch (error) {
        res.status(400).json({ error : error.message })
    }
}

module.exports = {
    getAllActivityHandler, createActivityHandler
}