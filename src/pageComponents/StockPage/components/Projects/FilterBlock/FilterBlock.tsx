'use client'
import styles from './FilterBlock.module.scss'
import { Field } from '@/components/UI/Field/Field'
import SelectBlock from '@/components/UI/SelectBlock/SelectBlock'
import { useState } from 'react'

const filterOptions = [
    {
        label: 'По возрастанию цены',
        value: 'min'
    },
    {
        label: 'По убыванию цены',
        value: 'min'
    },
]

interface IFilterOptions {
    filter: string
}

export const FilterBlock = () => {
    const [filter, setFilter] = useState<IFilterOptions>({ filter: filterOptions[0].value })

    const changeHandler = (value: string) => setFilter({ filter: value })

    return (
        <div className={styles.main}>
            <div>

                <Field placeholder='Mинимальная цена' type='text' variant='simple' />
                <span></span>
                <Field placeholder='Максимальная цена' type='text' variant='simple' />

            </div>

            <SelectBlock options={filterOptions}
                selected={filterOptions[0]}
                onChange={changeHandler}
                placeholder={filterOptions[0].label}
            // status='default'
            />
        </div>
    )
}
