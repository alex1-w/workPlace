import styles from "./ReviewItem.module.scss";
import { IReview } from "@/types/IReview";
import { FC } from "react";
import Image from "next/image";

const ReviewItem: FC<IReview> = ({ rating, reviewText, user, id, type }) => {
    return (
        <div className={styles.main}>
            <div className={styles.topPart}>
                <Image alt={user.name} src={user.img} width={80} height={80}/>
                <div>
                    <p>{user.name}</p>
                    <p>rating: {rating}</p>
                </div>
            </div>

            <div className={styles.bottomPart}>
                <p>{reviewText}</p>
            </div>
        </div>
    );
};

export default ReviewItem;
