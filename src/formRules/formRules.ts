export const fieldNameCheck = (field: string) => {
    return Boolean(field.match(/[a-z]/i)) || "только латиница";
};

export const nameRule = {
    validate: fieldNameCheck,
    minLength: { value: 2, message: "минимальное значение - 2" },
    required: { value: true, message: "поле обязательно" },
};
