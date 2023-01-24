import express from 'express';
import debug from 'debug';
import constantsConfig from '../../../infrastructure/config/constants.config';

const log: debug.IDebugger = debug('app:courses-middleware');

class CoursesMiddleware {
    
    async validateRequiredNameBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.name) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.COURSES.MESSAGES.ERROR.VOID_NAME});
        }
    }

    async validateRequiredWorkloadBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.workload) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.COURSES.MESSAGES.ERROR.VOID_WORKLOAD});
        }
    }


    async validateRequiredVideoBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.video) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.COURSES.MESSAGES.ERROR.VOID_VIDEO});
        }
    }

}

export default new CoursesMiddleware();