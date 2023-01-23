import { UsersEntity } from "../../../domain/entities/users/type.users.entity";
import { CoursesEntity } from "../../../domain/entities/courses/type.courses.entity";
import { ClassEntity } from "../../../domain/entities/class/type.class.entity";

export default interface IMocks {
    getUsers(): UsersEntity[];
    getCourses(): CoursesEntity[];
    getClass(): ClassEntity[];
}