import * as Sequelize from 'sequelize';
import { MysqlDatabase } from "../mysql.database";

export default MysqlDatabase.getInstance().createModel('users', {
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
            birthdate: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false,
            }, 
            photo: {
                type: Sequelize.DataTypes.STRING,
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