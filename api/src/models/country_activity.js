const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('country_activity', {
        countryId: {
            type: DataTypes.STRING,
            foreingKey: true
        },
        activityId: {
            type: DataTypes.UUID,
            foreingKey: true
        }
    },{
        timestamps: false
    })
}