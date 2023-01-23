import { ClassEntity } from "../entities/class/type.class.entity"

export interface IClassRepository {
    create(resource: ClassEntity): Promise<ClassEntity>,
    deleteById(resourceId: number, resource_Id: number): Promise<void>,
    listByCourse(resourceId: number): Promise<ClassEntity[]>,
    listByUsers(resourceId: number): Promise<ClassEntity[]>,
}