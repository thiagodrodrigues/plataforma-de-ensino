import * as Sequelize from 'sequelize';
import { MysqlDatabase } from "../mysql.database";

export default MysqlDatabase.getInstance().createModel('courses', {
            idCourses: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                field: 'idCourses',
                autoIncrement: true,
                unique: true,
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
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
            workload: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            description: Sequelize.DataTypes.STRING,
            video: Sequelize.DataTypes.STRING,
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
});