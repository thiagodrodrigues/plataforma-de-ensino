import { ClassEntity } from "../../../../domain/entities/class/type.class.entity";

export default function (classes: ClassEntity ){
   
    const classGeneral = {
      idClass: classes.idClass,
      idUsers: classes.idUsers,
      idCourses: classes.idCourses,
      createdAt: classes.createdAt,
      updatedAt: classes.updatedAt
    }

    return {
      classGeneral: classGeneral
    };
}