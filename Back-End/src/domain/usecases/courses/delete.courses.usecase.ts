import { ICoursesRepository } from "../../repositories/courses.repository.interface";
import ExamRepository from "../../../adapters/repositories/courses.repository";
import { IUseCase } from "../usecase.interface";

class DeleteCourseUseCase implements IUseCase {
    constructor(private _repository: ICoursesRepository) {
    }
    async execute(data: { idCourses: number }): Promise<void> {
        return await this._repository.deleteById(data.idCourses);
    }
}

export default new DeleteCourseUseCase(
    ExamRepository
);