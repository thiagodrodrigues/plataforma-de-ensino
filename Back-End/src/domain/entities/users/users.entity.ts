export interface IUsersEntity {
    idUsers?: number,
    name: string,
    email: string,
    password: string,
    birthdate: Date,
    username: string,
    photo: string,
    admin: boolean,
    createdAt?: Date,
    updatedAt?: Date,
}