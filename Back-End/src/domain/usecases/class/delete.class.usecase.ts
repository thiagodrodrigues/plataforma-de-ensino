import { IClassRepository } from "../../repositories/class.repository.interface";
import AppointmentRepository from "../../../adapters/repositories/class.repository";
import { IUseCase } from "../usecase.interface";

class DeleteClassUseCase implements IUseCase {
    constructor(private _repository: IClassRepository) {
    }
    async execute(data: { idUsers: number, idCourses: number }): Promise<void> {
        return await this._repository.deleteById(data.idUsers, data.idCourses);
    }
}

export default new DeleteClassUseCase(
    AppointmentRepository
);