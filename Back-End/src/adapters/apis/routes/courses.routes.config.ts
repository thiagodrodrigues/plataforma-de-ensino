import { CommonRoutesConfig } from "./common.routes.config";
import coursesController from "../controllers/courses.controller";
import authMiddleware from "../middlewares/auth.middleware";
import coursesMiddleware from "../middlewares/courses.middleware";
import express from "express";

export class CoursesRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'CoursesRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/courses`)
                .all(authMiddleware.check) // verifica se o usuário está logado e retorna o idUser
                .get(coursesController.listCourses) // lista todas os cursos do site
                    

        this.app.route(`/courses/:idCourses`)
            .all(authMiddleware.check) // verifica se o usuário está logado e retorna o idUser
            .get(coursesController.getCourseById) // visualizar um curso específico


        return this.app;
    }
}