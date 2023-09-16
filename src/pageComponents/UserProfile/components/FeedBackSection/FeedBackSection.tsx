'use client'
import styles from './FeedBackSection.module.scss';
import { IReview, ReviewType } from '@/types/IReview';
import { FC, useState } from "react"
import { reviews } from '@/links/links.data';
import { slicer } from '@/helpers/slicer';
import ReviewItem from '@/components/ReviewItem/ReviewItem';
import { motion } from 'framer-motion'

const FeedBackSection: FC = () => {
    const countPositiveReviews = reviews.filter(r => r.type === 'positive').length
    const countNegativeReviews = reviews.filter(r => r.type === 'negative').length
    const [showedReviews, setShowedReviews] = useState<number>(6)
    const [filteredReviews, setFilteredReviews] = useState<IReview[]>(reviews.filter(r => r.type === 'positive'))

    const changeReviewType = (e: any) => {
        setFilteredReviews(reviews.filter(r => r.type === e.target.dataset.name))
        setShowedReviews(6 )
    }
    const addReview = () => setShowedReviews((prev) => prev + 3)


    return (
        <section className={styles.main}>
            <div className={styles.filter}>
                <p data-name='positive' onClick={changeReviewType}>Положительные {`(${countPositiveReviews})`}</p>
                <p data-name='negative' onClick={changeReviewType}> Отрицательные {`(${countNegativeReviews})`}</p>
            </div>

            <motion.div className={styles.feedBackBlock}>

                {slicer(filteredReviews, showedReviews).map((review) => (
                    <ReviewItem
                        rating={review.rating}
                        reviewText={review.reviewText}
                        type={review.type}
                        user={review.user}
                        key={review.id}
                        id={review.id}
                    />
                ))}
            </motion.div>
            <button onClick={addReview}><p> загрузить еще</p></button>
        </section >
    )
};

export default FeedBackSection;
