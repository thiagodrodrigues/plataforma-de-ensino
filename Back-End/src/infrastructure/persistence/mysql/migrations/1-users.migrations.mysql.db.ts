import * as Sequelize from 'sequelize';
import { DataType } from 'sequelize-typescript';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('users', {
            idUsers: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                field: 'idUsers',
                autoIncrement: true
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            birthDate: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false,
            }, 
            username: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            admin: Sequelize.DataTypes.BOOLEAN, // SOMENTE VISIVEL PARA O DESENVOLVEDOR
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('users');
    }
}