// Here's my thought process:
// Polls, Surveys, and Quizzes could maybe all use one model (Option or Answer), BUT
// Quizzes need an additional variable, isAnswer or isCorrect, SO
// I could put them all in one model and include an optional isCorrect (optional because Polls/Surveys don't need it), BUT
// It can't be null if it's for a Quiz, because a quiz has to have a correct answer, SO
// Do I just do two separate models then??? One for Polls/Surveys, one for Quizzes? IDK

// As of right now, I think it'd be easiest to do them as separate models

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Option extends Model {}

Option.init( // Need to make it so that a Poll has at least two options
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        poll_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'poll',
                key: 'id'
            }
        },
        option_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1] // must be at least one character
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'option'
    }
);

module.exports = Option;