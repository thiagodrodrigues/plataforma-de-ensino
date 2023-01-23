import { CoursesEntity } from "../../entities/courses/type.courses.entity";
import { ICoursesRepository } from "../../repositories/courses.repository.interface";
import ExamRepository from "../../../adapters/repositories/courses.repository";
import { IUseCase } from "../usecase.interface";

class ReadCourseUseCase implements IUseCase {
    constructor(private _repository: ICoursesRepository) {
    }
    async execute(data: { idCourses: number }): Promise<CoursesEntity | undefined> {
        return await this._repository.readById(data.idCourses);
    }
}

export default new ReadCourseUseCase(
    ExamRepository
);