'use client'
import SelectBlock from '@/components/UI/SelectBlock/SelectBlock';
import styles from './SelectsBlock.module.scss';
import { useState } from 'react';

export const categories = [
    {
        value: 'design',
        label: 'дизайн'
    },
    {
        value: 'verstka',
        label: 'верстка'
    },
    {
        value: 'development',
        label: 'разработка'
    },
    {
        value: 'seo',
        label: 'seo оптимизация'
    },
]
interface IFilterCategory {
    category: string
}

const SelectsBlock = () => {
    const [category, setCategory] = useState<IFilterCategory>({ category: categories[0].value })
    const changeHandler = (value: string) => setCategory({ category: value })
    const selectedCategory = categories.find(c => c.value === category.category)

    return (

        <div className={styles.main}>
            <div>
                <p>категория</p>
                <SelectBlock
                    options={categories}
                    selected={selectedCategory || categories[0]}
                    onChange={changeHandler}
                />
            </div>
            {/* <div>
                <p>подкатегория</p>

            </div> */}
        </div>
    )
};

export default SelectsBlock;

