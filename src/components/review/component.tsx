import { FC } from "react";
import { ReviewInterface } from "../../models/review";
import { State } from "../../redux/state";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";

interface Props {
    reviewId: string;
}

export const Review: FC<Props> = ({ reviewId }) => {
    const review = useSelector<State, ReviewInterface>((state) => state.review.entities?.[reviewId]);
    return (
        <div className={ styles.review_content }>
            <img src="./src/assets/images/avatar.png" alt="avatar" />
            "{ review.text }"
        </div>
    )
}