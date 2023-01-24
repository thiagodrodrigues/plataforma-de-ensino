import { ClassEntity } from "../../entities/class/type.class.entity";
import { IClassRepository } from "../../repositories/class.repository.interface";
import ClassRepository from "../../../adapters/repositories/class.repository";
import { IUseCase } from "../usecase.interface";

export class CreateClassUseCase implements IUseCase {
    constructor(private _repository: IClassRepository) {
    }
    async execute(data: ClassEntity): Promise<ClassEntity | undefined> {
        return await this._repository.create(data);
    }
}

export default new CreateClassUseCase(
    ClassRepository
);