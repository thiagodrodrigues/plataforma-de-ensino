import express from 'express';
import createClassUsecase from '../../../domain/usecases/class/create.class.usecase';
import deleteClassUsecase from '../../../domain/usecases/class/delete.class.usecase';
import listbycourseClassUsecase from '../../../domain/usecases/class/listbycourse.class.usecase';
import listbyuserClassUsecase from '../../../domain/usecases/class/listbyuser.class.usecase';
import debug from 'debug';
import constantsConfig from '../../../infrastructure/config/constants.config';
import jwt from 'jsonwebtoken';

const log: debug.IDebugger = debug('app:appointment-controller');

class AppointmentController {

    async createClass(req: express.Request, res: express.Response) {
        const token = req.header(`Authorization`)?.replace(`Bearer `, ``);  
        if(!token){
            res.status(401).send({
                error: constantsConfig.CLASSES.MESSAGES.ERROR.REQUIRE_LOGIN
            });
        } else {
            const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
            if(typeof decoded == `string`){
                res.status(401).send({
                    error: constantsConfig.CLASSES.MESSAGES.ERROR.REQUIRE_LOGIN
                });
            } else {
                const classes = await createClassUsecase.execute({
                    idUsers: decoded.idUsers,
                    idCourses: Number(req.params.idCourses),
                });
                log(classes);
                res.status(201).send(classes);
            }
        }  
    }

    async removeClass(req: express.Request, res: express.Response) {
        const token = req.header(`Authorization`)?.replace(`Bearer `, ``);  
        if(!token){
            res.status(401).send({
                error: constantsConfig.CLASSES.MESSAGES.ERROR.REQUIRE_LOGIN
            });
        } else {
            const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
            if(typeof decoded == `string`){
                res.status(401).send({
                    error: constantsConfig.CLASSES.MESSAGES.ERROR.REQUIRE_LOGIN
                });
            } else {
                const classes = await deleteClassUsecase.execute({
                    idUsers: decoded.idUsers,
                    idCourses: Number(req.params.idCourses),
                });
                res.status(204).send();
            }
        }
    }

    async listCoursesByIdUser(req: express.Request, res: express.Response) {
        const token = req.header(`Authorization`)?.replace(`Bearer `, ``);  
        if(!token){
            res.status(401).send({
                error: constantsConfig.CLASSES.MESSAGES.ERROR.REQUIRE_LOGIN
            });
        } else {
            const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
            if(typeof decoded == `string`){
                res.status(401).send({
                    error: constantsConfig.CLASSES.MESSAGES.ERROR.REQUIRE_LOGIN
                });
            } else {
                if(decoded.idUsers !== req.params.idUsers){
                    res.status(401).send({
                        error: constantsConfig.CLASSES.MESSAGES.ERROR.REQUIRE_LOGIN
                    })
                } else {
                    const classes = await listbyuserClassUsecase.execute({
                        idUsers: Number(req.params.idUsers)
                    });
                    res.status(200).send(classes);
                }
            }
        }
    }

    async listUsersByIdCourses(req: express.Request, res: express.Response) {
        const token = req.header(`Authorization`)?.replace(`Bearer `, ``);  
        if(!token){
            res.status(401).send({
                error: constantsConfig.CLASSES.MESSAGES.ERROR.REQUIRE_LOGIN
            });
        } else {
            const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
            if(typeof decoded == `string`){
                res.status(401).send({
                    error: constantsConfig.CLASSES.MESSAGES.ERROR.REQUIRE_LOGIN
                });
            } else {
                const users = await listbycourseClassUsecase.execute({
                    idCourses: Number(req.params.idCourses)
                });
                res.status(200).send(users);
            }   
        }
    }
}

export default new AppointmentController();