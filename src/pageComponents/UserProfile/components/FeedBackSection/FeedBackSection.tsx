'use client'
import { IReview, ReviewType } from '@/types/IReview';
import styles from './FeedBackSection.module.scss';
import { FC, useState } from "react"
import { freelancers } from '@/links/links.data';

const reviews: IReview[] = [
    {
        rating: 4,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[0],
        type: 'positive'

    },
    {
        rating: 2,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[1],
        type: 'negative'
    },
    {
        rating: 5,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[2],
        type: 'positive'
    },
    {
        rating: 3,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[3],
        type: 'negative'
    },
    {
        rating: 2,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[4],
        type: 'negative'
    },
    {
        rating: 5,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[5],
        type: 'positive'
    },
    {
        rating: 5,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[6],
        type: 'positive'
    },
]

const FeedBackSection: FC = () => {
    const [reviewFilter, setReviewFilter] = useState<ReviewType>('positive')

    return (
        <section>
            <div>
                <p>Положительные</p>

                <p>Отрицательные</p>
            </div>

        </section>
    )
};

export default FeedBackSection;
