'use client'
import FieldBlock from '@/components/UI/FieldBlock/FieldBlock'
import styles from './StepOne.module.scss'
import SelectBlock from '@/components/UI/SelectBlock/SelectBlock'
import { useState } from 'react';
import { TagsBlock } from './TagsBlock/TagsBlock';

const options = [
    {
        label: "дизайн",
        value: "design",
    },
    {
        label: "web-разработка",
        value: "web-development",
    },
];
const subOptions = [
    {
        label: "дизайн сайта",
        value: "web-design",
    },
    {
        label: "дизайн квартиры",
        value: "d",
    },
];

export const StepOne = () => {

    const [categories, setCategories] = useState({
        category: options[0].value,
        subCategory: subOptions[0].value
    });

    const changeCategoryHandler = (value: string) => setCategories((prev) => ({ ...prev, category: value }));
    const changeSubCategoryHandler = (value: string) => setCategories((prev) => ({ ...prev, subCategory: value }));

    const selectOption = (variant: 'category' | 'subCategory') => {
        switch (variant) {
            case 'category':
                return options.find(item => item.value === categories.category)
            case 'subCategory':
                return subOptions.find(item => item.value === categories.subCategory)
        }
    }

    return (
        <section className={styles.main}>

            <FieldBlock name='name' placeholder='name' title='Название' type='text' />

            <div className={styles.selectsBlock}>
                <SelectBlock options={options} selected={selectOption('category') || options[0]} onChange={changeCategoryHandler} />
                <SelectBlock options={subOptions} selected={selectOption('subCategory') || subOptions[0]} onChange={changeSubCategoryHandler} />
            </div>

            <TagsBlock />

        </section>
    )
}
