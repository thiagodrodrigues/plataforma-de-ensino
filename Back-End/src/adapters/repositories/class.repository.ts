import { IDatabaseModel } from "../../infrastructure/persistence/database.model.interface";
import { ClassEntity } from "../../domain/entities/class/type.class.entity";
import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import { IClassRepository } from "../../domain/repositories/class.repository.interface";
import * as Sequelize from 'sequelize'
import classModel from '../../infrastructure/persistence/mysql/models/3-class.models.mysql.db';
import modelsToEntities from '../../infrastructure/persistence/mysql/helpers/class.modeltoEntity.mysql'
import entitiesToModels from '../../infrastructure/persistence/mysql/helpers/class.entitiestoModel.mysql'


export class ClassRepository implements IClassRepository {
  constructor(
      private _database: IDatabaseModel, 
      private _modelClass: Sequelize.ModelCtor<Sequelize.Model<any, any>>
      ){       
      }


  async create(resource: ClassEntity): Promise<ClassEntity> {
      const { classGeneral }  = entitiesToModels(resource);
      await this._database.create(this._modelClass, classGeneral);
      return resource;
  }

  async deleteById(resourceId: number, resource_Id: number): Promise<void> {
      await this._database.delete(this._modelClass, { idUsers: resourceId, idCourses: resource_Id });
  }

  async listByCourse(idCourses: number): Promise<ClassEntity[]> {
    try{
    const classGeneral = await this._database.listById(this._modelClass, {
        idCourses: idCourses
        });
        const classes = classGeneral.map(modelsToEntities);
        return classes;
    } catch(err){
        throw new Error((err as Error).message);
    }
    };

    async listByUsers(idUsers: number): Promise<ClassEntity[]> {
        try{
        const classGeneral = await this._database.listById(this._modelClass, {
            idUsers: idUsers
            });
            const classes = classGeneral.map(modelsToEntities);
            return classes;
        } catch(err){
            throw new Error((err as Error).message);
        }
        };
}

export default new ClassRepository(
    MysqlDatabase.getInstance(),
    classModel
  );