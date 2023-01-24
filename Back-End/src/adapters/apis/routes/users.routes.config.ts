import { CommonRoutesConfig } from "./common.routes.config";
import userController from "../controllers/user.controller";
import userMiddleware from "../middlewares/user.middleware";
import authMiddleware from "../middlewares/auth.middleware";
import express from "express";

export class UserRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
                    
        this.app.route(`/login`)
            .post(userController.login); // logar um usuário

        this.app.route(`/new`)
            .post(
                userMiddleware.validateRequiredNameBodyFields, // Verifica se o campo Nome foi preenchido
                userMiddleware.validateRequiredEmailBodyFields, // Verifica se o campo Email foi preenchido
                userMiddleware.validateRequiredBirthDateBodyFields, // Verifica se o campo Data de Nascimento foi preenchido
                userMiddleware.validateRequiredPasswordBodyFields, // Verifica se o campo Senha é um número
                userMiddleware.validateRequiredPhotoBodyFields, // Verifica se o campo Foto é um número
                userMiddleware.validateRequiredUsernameBodyFields, // Verifica se o email e username enviados já existem
                userMiddleware.validateUserRepeated, // Verifica se o usuário concordou com os termos de uso
                userController.createUser //cadastrar novo usuário
            ); 

        this.app.route('/admin/')
            .all(
                authMiddleware.checkAuth, // verifica se o usuário está logado e retorna o idUser
            )
            .get(userController.listUsers) // Lista todos os usuários
        
        this.app.route('/admin/:idUser')
            .get(userController.removeUser) // Perfil de um usuário
            .put(
                userMiddleware.validateRequiredNameBodyFields, // Verifica se o campo Nome foi preenchido
                userMiddleware.validateRequiredEmailBodyFields, // Verifica se o campo Email foi preenchido
                userMiddleware.validateRequiredBirthDateBodyFields, // Verifica se o campo Data de Nascimento foi preenchido
                userMiddleware.validateRequiredPasswordBodyFields, // Verifica se o campo Senha é um número
                userMiddleware.validateRequiredPhotoBodyFields, // Verifica se o campo Foto é um número
                userMiddleware.validateRequiredUsernameBodyFields, // Verifica se o email e username enviados já existem
                userMiddleware.validateUserRepeated, // Verifica se o usuário concordou com os termos de uso
                userController.updateUser // atualizar um usuário específico
                )
            .delete(userController.removeUser) // Deleta um usuário
    
        this.app.route(`/users/:idUser`)
            .all(
                authMiddleware.checkAuth, // verifica se o usuário está logado e retorna o idUser
                userMiddleware.validateUserExists // verifica se o idUser existe
                ) 
            .get(userController.getUserById) // perfil pessoal do usuário
            .put(
                userMiddleware.validateRequiredNameBodyFields, // Verifica se o campo Nome foi preenchido
                userMiddleware.validateRequiredEmailBodyFields, // Verifica se o campo Email foi preenchido
                userMiddleware.validateRequiredBirthDateBodyFields, // Verifica se o campo Data de Nascimento foi preenchido
                userMiddleware.validateRequiredPasswordBodyFields, // Verifica se o campo altura é um número
                userMiddleware.validateRequiredPhotoBodyFields, // Verifica se o campo Peso é um número
                userMiddleware.validateRequiredUsernameBodyFields, // Verifica se o email enviado já existe
                userMiddleware.validateUserRepeated, // Verifica se o usuário concordou com os termos de uso
                userController.updateUser // atualizar um usuário específico
                ) 
            .delete(userController.removeUser); // deletar um usuário específico

        return this.app;
    }
}