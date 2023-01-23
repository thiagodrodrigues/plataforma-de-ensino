import { IDatabaseModel } from "../../infrastructure/persistence/database.model.interface";
import { CoursesEntity } from "../../domain/entities/courses/type.courses.entity";
import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import { ICoursesRepository } from "../../domain/repositories/courses.repository.interface";
import * as Sequelize from 'sequelize'
import coursesModel from '../../infrastructure/persistence/mysql/models/2-couses.models.mysql.db';
import modelsToEntities from '../../infrastructure/persistence/mysql/helpers/courses.modelstoEntities.mysql.DB'
import entitiesToModels from '../../infrastructure/persistence/mysql/helpers/courses.entitiestoModel.mysql.DB'

export class CoursesRepository implements ICoursesRepository {
  constructor(
      private _database: IDatabaseModel, 
      private _modelCourse: Sequelize.ModelCtor<Sequelize.Model<any, any>>
      ){       
      }

  async readById(resourceId: number): Promise<CoursesEntity | undefined> {
      try{
          const courseGeneral = await this._database.read(this._modelCourse, resourceId, {});
          
          return modelsToEntities(courseGeneral);
      } catch(err){
          throw new Error((err as Error).message);
      }
  }

  
  async list(): Promise<CoursesEntity[]> {
    try{
    const courseGeneral = await this._database.list(this._modelCourse);
        const courses = courseGeneral.map(modelsToEntities);
        return courses;
    } catch(err){
        throw new Error((err as Error).message);
    }
    }

  async create(resource: CoursesEntity): Promise<CoursesEntity> {
      const { courseGeneral }  = entitiesToModels(resource);
      await this._database.create(this._modelCourse, courseGeneral);
      return resource;
  }

  async deleteById(resourceId: number): Promise<void> {
        await this._database.delete(this._modelCourse, { idCourses: resourceId });
  }

  async updateById(resource: CoursesEntity): Promise<CoursesEntity | undefined> {
      console.log(resource);
      if(!resource.idCourses) throw 'idCourses não fornecido'
      let coursesModel = await this._database.read(this._modelCourse, resource.idCourses);
      const { courseGeneral } = entitiesToModels(resource);
      await this._database.update(coursesModel, courseGeneral);
      return resource;
  }
}

export default new CoursesRepository(
    MysqlDatabase.getInstance(),
    coursesModel
  );