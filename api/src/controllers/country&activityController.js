const { Country, Activity } = require("../db")
const { Op } = require("sequelize")


const getAllContries = async () => {
    const databaseContry = await Country.findAll({include: Activity})

    return [...databaseContry]
}

const getContryById = async (id) => {
    // const contry = Country.findByPk(id)
    const country = await Country.findByPk( id ,{ include: Activity })
    
    return country
}

const getContryByName = async (name) => {
    const country = await Country.findAll({ where: { name : {
        [Op.iLike]: `%${name}%`
    }}})

    return [...country]
}

const createActivity = async (name, difficulty, duration, season, country) => {

    let activityCreate = await Activity.create({name, difficulty, duration, season})

    for(let i = 0; i < country.length; i++){
        let dbCountry = await Country.findByPk(country[i])
        activityCreate.addCountry(dbCountry)
    }

    return activityCreate
}

const getAllActivity = async () => {
    const DataBaseActivity = await Activity.findAll({include: Country})

    return [...DataBaseActivity]
}

module.exports = { getAllContries, getContryById, getContryByName, getAllActivity, createActivity}