import { CommonRoutesConfig } from "./common.routes.config";
import classController from "../controllers/class.controller";
import authMiddleware from "../middlewares/auth.middleware";
import express from "express";

export class ClassRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ClassRoutes');
    }

    configureRoutes(): express.Application {

        this.app.route(`/class/:idUsers`)
            .all(authMiddleware.checkAuth) // verifica se o usuário está logado e retorna o idUser
            .get(classController.listCoursesByIdUser)


        this.app.route(`/class/:idCourses`)
                .all(authMiddleware.checkAuth) // verifica se o usuário está logado e retorna o idUser
                .post(classController.createClass) // usuário se matricula em um curso
                .delete(classController.removeClass) // usuário cancela um curso
                .get(classController.listUsersByIdCourses)

        return this.app;
    }
}