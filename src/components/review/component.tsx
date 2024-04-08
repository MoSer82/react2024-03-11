import { FC } from "react";
import { ReviewInterface } from "../../models/review";
import styles from "./styles.module.scss";

interface Props {
    review: ReviewInterface;
}

export const Review: FC<Props> = ({ review }) => (
    <div className={ styles.review_content }>
        <img src="./src/assets/images/avatar.png" alt="avatar" />
        "{ review.text }"
    </div>
)