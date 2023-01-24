import { UsersEntity } from "../../../domain/entities/users/type.users.entity";
import { CoursesEntity } from "../../../domain/entities/courses/type.courses.entity";
import { ClassEntity } from "../../../domain/entities/class/type.class.entity";
import createUsersUsecase from "../../../domain/usecases/users/create.users.usecase";
import createCoursesUsecase from "../../../domain/usecases/courses/create.courses.usecase";
import createClassUsecase from "../../../domain/usecases/class/create.class.usecase";
import FakerMocks from "./faker.mocks";
import IMocks from "./mocks.interface";

class Mocks {
    private _users: UsersEntity[];
    private _courses: CoursesEntity[];
    private _class: ClassEntity[];

    constructor(mocksGenerator: IMocks){
        this._users = mocksGenerator.getUsers();
        this._courses = mocksGenerator.getCourses();
        this._class = mocksGenerator.getClass();
    }

    async createUsers(){
        let countUsers = 0;
        for(countUsers = 0; countUsers < this._users.length; countUsers++){
           
            await createUsersUsecase.execute(this._users[countUsers]);
        }
        return {
            createdUsers: countUsers
        };
    } 

    async createCourses(){
        let countCourses = 0;
        for(countCourses = 0; countCourses < this._courses.length; countCourses++){
            await createCoursesUsecase.execute(this._courses[countCourses]);
        }
        return {
            createdCourses: countCourses
    };
    }
    async createClass(){
        let countClass = 0;
        for(countClass = 0; countClass < this._class.length; countClass++){
            await createClassUsecase.execute(this._class[countClass]);            
        }
        return {
            createdClasses: countClass
    }};
    }


const execute = async ()=>{
    const mocks = new Mocks(new FakerMocks);

    const totalUsers = await mocks.createUsers();
    console.log(totalUsers);
    const totalCourses = await mocks.createCourses();
    console.log(totalCourses);
    const totalClasses = await mocks.createClass();
    console.log(totalClasses);
}

execute();