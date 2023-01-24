import { ClassEntity } from "../../entities/class/type.class.entity";
import { IClassRepository } from "../../repositories/class.repository.interface";
import ClassRepository from "../../../adapters/repositories/class.repository";
import { IUseCase } from "../usecase.interface";

class ListByUserUseCase implements IUseCase {
    constructor(private _repository: IClassRepository) {
    }
    async execute(data: { idUsers: number }): Promise<ClassEntity[] | undefined> {
        return await this._repository.listByUsers(data.idUsers);
    }
}

export default new ListByUserUseCase(
    ClassRepository
);