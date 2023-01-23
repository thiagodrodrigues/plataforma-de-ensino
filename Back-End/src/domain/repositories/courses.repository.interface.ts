import { CoursesEntity } from "../entities/courses/type.courses.entity";

export interface ICoursesRepository {
    readById(resourceId: number): Promise<CoursesEntity | undefined>,
    create(resource: CoursesEntity): Promise<CoursesEntity>,
    deleteById(resourceId: number): Promise<void>,
    list(): Promise<CoursesEntity[]>,
    updateById(resource: CoursesEntity): Promise<CoursesEntity | undefined>,
}