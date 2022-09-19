const { Model, DataTypes } = require("sequelize");
// const { v4: uuidv4 } = require("uuid"); // for unique and random IDs

const sequelize = require("../config/connection");

class Poll extends Model {}

Poll.init( // Need to make it so that a Poll has at least two options
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        poll_question: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: { // Each poll belongs to a user? Might have to change this to be able to make a poll without an account
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'poll'
    }
);

module.exports = Poll;