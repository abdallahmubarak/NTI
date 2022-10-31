export interface User {
    _id?:string
    name:string
    age:number
    email:string
    password?:string
    profileImage?:string
    userType?: string
    createdAt?:string
    updatedAt?:string
}
