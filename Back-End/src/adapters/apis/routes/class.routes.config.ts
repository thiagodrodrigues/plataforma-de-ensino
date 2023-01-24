import { CommonRoutesConfig } from "./common.routes.config";
import classController from "../controllers/class.controller";
import authMiddleware from "../middlewares/auth.middleware";
import express from "express";

export class ClassRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ClassRoutes');
    }

    configureRoutes(): express.Application {

        this.app.route(`/class/courses/:idUsers`)
            .all(authMiddleware.checkAuth) // verifica se o usuário está logado e retorna o idUser
            .get(classController.listCoursesByIdUser) // Lista todos os cursos matriculados por um usuário


        this.app.route(`/class/users/:idCourses`)
                .all(authMiddleware.checkAuth) // verifica se o usuário está logado e retorna o idUser
                .post(classController.createClass) // usuário se matricula em um curso
                .delete(classController.removeClass) // usuário cancela um curso
                .get(classController.listUsersByIdCourses) // lista todos os alunos matriculados no curso

        return this.app;
    }
}