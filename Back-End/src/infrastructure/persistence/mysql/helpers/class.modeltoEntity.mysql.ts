import { ClassEntity } from "../../../../domain/entities/class/type.class.entity";

export default function (classes:any): ClassEntity | undefined {
  if(!classes)
  return
  let classGeneral: ClassEntity = {
    idClass: classes.idClass,
    idUsers: classes.idUsers,
    idCourses: classes.idCourses,
    createdAt: classes.createdAt,
    updatedAt: classes.updatedAt
  }
//
  if(classes.logado){
      (classGeneral as ClassEntity).idClass = classes.idClass;
      (classGeneral as ClassEntity).idUsers = classes.idUsers;
      (classGeneral as ClassEntity).idCourses = classes.idCourses;
      (classGeneral as ClassEntity).createdAt = classes.createdAt;
      (classGeneral as ClassEntity).updatedAt = classes.updatedAt;
  }

  return (classGeneral as ClassEntity);
}