import { CoursesEntity } from "../../../../domain/entities/courses/type.courses.entity";

export default function (courses: CoursesEntity ){
   
    const courseGeneral = {
        idCourses: courses.idCourses,
        name: courses.name,
        workload: courses.workload,
        description: courses.description,
        video: courses.video,
        createdAt: courses.createdAt,
        updatedAt: courses.updatedAt, 
    }

    return {
        courseGeneral: courseGeneral
    };
}