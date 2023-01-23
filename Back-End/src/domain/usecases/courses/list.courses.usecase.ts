import { CoursesEntity } from "../../entities/courses/type.courses.entity";
import { ICoursesRepository } from "../../repositories/courses.repository.interface";
import ExamRepository from "../../../adapters/repositories/courses.repository";
import { IUseCase } from "../usecase.interface";

class ListCoursesUseCase implements IUseCase {
    constructor(private _repository: ICoursesRepository) {
    }
    async execute(): Promise<CoursesEntity[] | undefined> {
        return await this._repository.list();
    }
}

export default new ListCoursesUseCase(
    ExamRepository
);