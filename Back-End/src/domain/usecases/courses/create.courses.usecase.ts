import { CoursesEntity } from "../../entities/courses/type.courses.entity";
import { ICoursesRepository } from "../../repositories/courses.repository.interface";
import ExamRepository from "../../../adapters/repositories/courses.repository";
import { IUseCase } from "../usecase.interface";

export class CreateCourseUseCase implements IUseCase {
    constructor(private _repository: ICoursesRepository) {
    }
    async execute(data: CoursesEntity): Promise<CoursesEntity | undefined> {
        return await this._repository.create(data);
    }
}

export default new CreateCourseUseCase(
    ExamRepository
);