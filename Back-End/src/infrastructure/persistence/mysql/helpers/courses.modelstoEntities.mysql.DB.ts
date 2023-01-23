import { CoursesEntity } from "../../../../domain/entities/courses/type.courses.entity";

export default function (courses:any): CoursesEntity | undefined {
    if(!courses)
    return
    let courseGeneral: CoursesEntity = {
        idCourses: courses.idCourses,
        name: courses.name,
        workload: courses.workload,
        description: courses.description,
        video: courses.video,
        createdAt: courses.createdAt,
        updatedAt: courses.updatedAt, 
    }
//
    if(courses.logado){
        (courseGeneral as CoursesEntity).idCourses = courses.idCourses;
        (courseGeneral as CoursesEntity).name = courses.name
        (courseGeneral as CoursesEntity).workload = courses.workload;
        (courseGeneral as CoursesEntity).description = courses.description;
        (courseGeneral as CoursesEntity).video = courses.video;
        (courseGeneral as CoursesEntity).createdAt = courses.createdAt;
        (courseGeneral as CoursesEntity).updatedAt = courses.updatedAt;
    }

    return (courseGeneral as CoursesEntity);
}