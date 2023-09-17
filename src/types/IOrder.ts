import { IFreelancer } from './IFreelancer';

export interface IOrder {
    price: number
    title: string
    createdAt: string | any
    owner: IFreelancer
    offers?: number | undefined
    id: number
    category: 'design'
    timeFrame: number | string
    description: string
    documents: string[] | undefined
}