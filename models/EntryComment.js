const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class EntryComment extends Model {}

EntryComment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        entry_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'entry',
                key: 'id'
            }
        },
        comment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'comment'
            }
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'entry_comment'
    }
);

module.exports = EntryComment;