export interface IPriceVariant {
    name: string,
    description: string
    price: number,
    timeFrame: number,
    reworkCount: number,
    additionalOptions: IAdditionalOption[]
}


export interface IAdditionalOption {
    name: string
    description: string
}