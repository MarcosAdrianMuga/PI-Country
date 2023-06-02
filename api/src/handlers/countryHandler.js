const { getAllContries, getContryById, getContryByName } = require("../controllers/country&activityController")

const getAllContriesHandler = async (req, res) => {
    const { name } = req.query
    try {
        if(name) {
        const result = name ? await getContryByName(name) : await getAllContries()
        if(!result.length) throw { message: `There is no country called '${name}'`}
        res.status(200).json(result)
    }
    else{
        const todos = await getAllContries()
        res.status(200).json(todos)
    }
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

const getContryByIdHandler = async (req, res) => {
    const { id } = req.params
    try {
        const contry = await getContryById(id)
        res.status(200).json(contry)
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

module.exports = {
    getAllContriesHandler,
    getContryByIdHandler,
}