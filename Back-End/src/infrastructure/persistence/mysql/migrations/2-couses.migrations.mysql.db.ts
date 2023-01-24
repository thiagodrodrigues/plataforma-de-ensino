import * as Sequelize from 'sequelize';
import { DataType } from 'sequelize-typescript';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('courses', {
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
            workload: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            description: Sequelize.DataTypes.STRING,
            video: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('courses');
    }
}