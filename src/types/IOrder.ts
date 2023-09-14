import { IFreelancer } from './IFreelancer';


export interface IOrder {
    price: number
    title: string
    createdAt: string | any
    owner: IFreelancer
    offers: number
    id:number
    category: 'design'
}