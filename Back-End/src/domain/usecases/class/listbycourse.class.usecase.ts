import { ClassEntity } from "../../entities/class/type.class.entity";
import { IClassRepository } from "../../repositories/class.repository.interface";
import ClassRepository from "../../../adapters/repositories/class.repository";
import { IUseCase } from "../usecase.interface";

class ListByCourseUseCase implements IUseCase {
    constructor(private _repository: IClassRepository) {
    }
    async execute(data: { idCourses: number }): Promise<ClassEntity[] | undefined> {
        return await this._repository.listByCourse(data.idCourses);
    }
}

export default new ListByCourseUseCase(
    ClassRepository
);