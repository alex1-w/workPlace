export const currencyFormatter = (sum: number) => {
    return new Intl.NumberFormat('ru-RU', { style: "currency", currency: "RUB" }).format(sum)
}