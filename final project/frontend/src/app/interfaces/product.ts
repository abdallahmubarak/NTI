export interface Product {
    _id?:string
    name:string
    priec:string
    comments:[commentBody:string]
    img?:string
    description?: string
    createdAt?:string
    updatedAt?:string
}
