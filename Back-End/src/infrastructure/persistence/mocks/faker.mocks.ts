import { UsersEntity } from "../../../domain/entities/users/type.users.entity";
import { CoursesEntity } from "../../../domain/entities/courses/type.courses.entity";
import { ClassEntity } from "../../../domain/entities/class/type.class.entity";
import IMocks from "./mocks.interface";
import { faker } from "@faker-js/faker";
import bcrypt from 'bcrypt';


export default class FakerMocks implements IMocks{
    getUsers(): UsersEntity[]{
        let users: UsersEntity[] = [];
        users = this._getUsers();
        return users;
    }

    getCourses(): CoursesEntity[] {
        let courses: CoursesEntity[] = [];
        courses = this._getCourses();
        return courses;
        
    }

    getClass(): ClassEntity[] {
        let classes: ClassEntity[] = [];
        classes = this._getClass();
        return classes;
        
    }

    private _getUsers(): UsersEntity[]{
        faker.locale = 'pt_BR'
        const users: UsersEntity[] = [];
        let password = "AdminGeral12345";
        let shufflePassword = bcrypt.hashSync(password,10);
        users.push({
            name: "Administrador Geral",
            email: "admin.geral@gmail.com",
            password: shufflePassword,
            birthdate: faker.date.past(),
            username: "AdminGeral",
            photo: "https://cdn-icons-png.flaticon.com/512/78/78948.png",
            admin: true
        })
        Array.from({ length: 15}).forEach(()=>{
            let pass = "123456";
            let shufflePass = bcrypt.hashSync(pass,10);
            users.push({
                name: faker.name.fullName(),
                email: String(faker.internet.email()),
                password: shufflePass,
                birthdate: faker.date.past(),
                username: faker.helpers.slugify(`${faker.name.firstName()}${faker.animal.type()}${faker.datatype.number({ min: 10, max: 99, precision: 1})}`),
                photo: faker.helpers.arrayElement(["https://cdn-icons-png.flaticon.com/512/1077/1077114.png", "https://cdn-icons-png.flaticon.com/512/149/149071.png", "https://cdn-icons-png.flaticon.com/512/74/74472.png", "https://cdn-icons-png.flaticon.com/128/1077/1077063.png", "https://cdn-icons-png.flaticon.com/512/219/219983.png", "https://cdn-icons-png.flaticon.com/512/747/747376.png", "https://cdn-icons-png.flaticon.com/512/599/599305.png", "https://cdn-icons-png.flaticon.com/512/219/219988.png"]),
                admin: false,
            });
        })
        return users;
    }

    private _getCourses(): CoursesEntity[]{
        faker.locale = 'pt_BR'
        const courses: CoursesEntity[] = [];
        Array.from({ length: 50}).forEach(()=>{
            courses.push({
                name: faker.helpers.arrayElement(['Node', 'Java', 'Typescript', 'React', 'Git', 'CSS', 'MySQL', 'Mongo']),
                workload: `${faker.datatype.number({min: 8, max: 120, precision: 4})} horas`,
                description: faker.lorem.words(20),
                video: `https://www.youtube.com/watch?v=0mYq5LrQN1s&list=PL85ITvJ7FLohXigfxBqzpZxzRG8TaRSj2&index=${faker.datatype.number({min: 1, max: 15, precision: 1})}`,          
            })          
        })
        return courses;
    }

    private _getClass():  ClassEntity[]{
        faker.locale = 'pt_BR'
        const classes: ClassEntity[] = [];
        Array.from({ length: 50}).forEach(()=>{
            classes.push({
                idUsers: Number(faker.datatype.number({ min: 1, max: 15, precision: 1 })),
                idCourses: Number(faker.datatype.number({ min: 1, max: 15, precision: 1 })),
            })
        })
        return classes;
    }


}