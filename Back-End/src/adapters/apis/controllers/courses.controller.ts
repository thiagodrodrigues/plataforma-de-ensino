import express from 'express';
import listCoursesUsecase from '../../../domain/usecases/courses/list.courses.usecase';
import readCoursesUsecase from '../../../domain/usecases/courses/read.courses.usecase';
import deleteCoursesUsecase from '../../../domain/usecases/courses/delete.courses.usecase';
import createCoursesUsecase from '../../../domain/usecases/courses/create.courses.usecase';
import updateCoursesUsecase from '../../../domain/usecases/courses/update.courses.usecase';
import debug from 'debug';
import constantsConfig from '../../../infrastructure/config/constants.config';
import jwt  from 'jsonwebtoken';

const log: debug.IDebugger = debug('app:courses-controller');

class CoursesController {

    async getCourseById(req: express.Request, res: express.Response) {
        const token = req.header(`Authorization`)?.replace(`Bearer `, ``);  
        if(!token){
            res.status(401).send({
                error: constantsConfig.COURSES.MESSAGES.ERROR.REQUIRE_LOGIN
            });
        } else {
            const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
            if(typeof decoded == `string`){
                res.status(401).send({
                    error: constantsConfig.COURSES.MESSAGES.ERROR.REQUIRE_LOGIN
                });
            } else {
                const course = await readCoursesUsecase.execute({
                    idCourses: Number(req.params.idCourses)
                });
                res.status(200).send(course);
            }
        }
    }

    async listCourses(req: express.Request, res: express.Response) {
        const token = req.header(`Authorization`)?.replace(`Bearer `, ``);  
        if(!token){
            res.status(401).send({
                error: constantsConfig.COURSES.MESSAGES.ERROR.REQUIRE_LOGIN
            });
        } else {
            const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
            if(typeof decoded == `string`){
                res.status(401).send({
                    error: constantsConfig.COURSES.MESSAGES.ERROR.REQUIRE_LOGIN
                });
            } else {
                const courses = await listCoursesUsecase.execute();
                res.status(200).send(courses);
            }
        }
    }

    async createCourse(req: express.Request, res: express.Response) {
        const token = req.header(`Authorization`)?.replace(`Bearer `, ``);  
        if(!token){
            res.status(401).send({
                error: constantsConfig.COURSES.MESSAGES.ERROR.REQUIRE_LOGIN
            });
        } else {
            const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
            if(typeof decoded == `string`){
                res.status(401).send({
                    error: constantsConfig.COURSES.MESSAGES.ERROR.REQUIRE_LOGIN
                });
            } else {
                if(decoded.admin !== true){
                    res.status(401).send({
                        error: constantsConfig.COURSES.MESSAGES.ERROR.UNAUTHORIZED
                    })
                } else {
                    const exam = await createCoursesUsecase.execute({
                        name: req.body.name,
                        workload: req.body.workload,
                        description: req.body.description,
                        video: req.body.video,
                    });
                    log(exam);
                    res.status(201).send(exam);
                }
            }
        }
    }  
    
    async updateCourse(req: express.Request, res: express.Response){
        const token = req.header(`Authorization`)?.replace(`Bearer `, ``);  
        if(!token){
            res.status(401).send({
                error: constantsConfig.COURSES.MESSAGES.ERROR.REQUIRE_LOGIN
            });
        } else {
            const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
            if(typeof decoded == `string`){
                res.status(401).send({
                    error: constantsConfig.COURSES.MESSAGES.ERROR.REQUIRE_LOGIN
                });
            } else {
                if(decoded.admin !== true){
                    res.status(401).send({
                        error: constantsConfig.COURSES.MESSAGES.ERROR.UNAUTHORIZED
                    })
                } else {        
                    const courseModel = await updateCoursesUsecase.execute({
                        idCourses: Number(req.params.idCourses),
                        name: req.body.name,
                        workload: req.body.workload,
                        description: req.body.description,
                        video: req.body.video,
                    });
                    log(courseModel);
                    res.status(200).send(courseModel);
                }
            }
        }
    }

    async removeExam(req: express.Request, res: express.Response) {
        const token = req.header(`Authorization`)?.replace(`Bearer `, ``);  
        if(!token){
            res.status(401).send({
                error: constantsConfig.COURSES.MESSAGES.ERROR.REQUIRE_LOGIN
            });
        } else {
            const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
            if(typeof decoded == `string`){
                res.status(401).send({
                    error: constantsConfig.COURSES.MESSAGES.ERROR.REQUIRE_LOGIN
                });
            } else {
                if(decoded.admin !== true){
                    res.status(401).send({
                        error: constantsConfig.COURSES.MESSAGES.ERROR.UNAUTHORIZED
                    })
                } else {    
                    const exam = await deleteCoursesUsecase.execute({
                        idCourses: Number(req.params.idCourses)
                    });
                    res.status(204).send();
                }
            }
        }
    }
}

export default new CoursesController();