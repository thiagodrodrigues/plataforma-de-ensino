import * as Sequelize from 'sequelize';
import { MysqlDatabase } from "../mysql.database";

export default MysqlDatabase.getInstance().createModel('classes', {
            idClass: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                field: 'idClass',
                autoIncrement: true,
                unique: true,
            },
            idCourses: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'courses'
                    },
                    key: 'idCourses'
                }
            },
            idUsers: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'users'
                    },
                    key: 'idUsers'
                }
            },
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
});