import { CommonRoutesConfig } from "./common.routes.config";
import userController from "../controllers/user.controller";
import userMiddleware from "../middlewares/user.middleware";
import authMiddleware from "../middlewares/auth.middleware";
import coursesController from "../controllers/courses.controller";
import coursesMiddleware from "../middlewares/courses.middleware";
import express from "express";

export class AdminRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AdminRoutes');
    }

    configureRoutes(): express.Application {

        this.app.route('/admin/')
            .all(
                authMiddleware.checkAuthAdmin, // verifica se o usuário está logado e se é Administrador do site
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

        this.app.route('/admin/courses')
                .post(
                    coursesMiddleware.validateRequiredNameBodyFields, // Verifica se o campo Nome do Curso foi preenchido
                    coursesMiddleware.validateRequiredVideoBodyFields, // Verifica se o campo Vídeo foi preenchido
                    coursesMiddleware.validateRequiredWorkloadBodyFields, // Verifica se o campo Carga Horária foi preenchido
                    coursesController.createCourse // Cria novo curso
                )

        this.app.route('/admin/courses/:idCourses')
                .put(
                    coursesMiddleware.validateRequiredNameBodyFields, // Verifica se o campo Nome do Curso foi preenchido
                    coursesMiddleware.validateRequiredVideoBodyFields, // Verifica se o campo Vídeo foi preenchido
                    coursesMiddleware.validateRequiredWorkloadBodyFields, // Verifica se o campo Carga Horária foi preenchido
                    coursesController.createCourse // Atualiza curso
                )
                .delete(coursesController.removeExam) // Deleta um curso

        return this.app;
    }
}