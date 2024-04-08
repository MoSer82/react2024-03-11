import { FC } from "react";
import { Review } from "../review/component";
import { ReviewInterface } from "../../models/review";
import styles from "./styles.module.scss";

interface Props {
    reviews: ReviewInterface[];
}

export const Reviews: FC<Props> = ( { reviews }) => (
    <ul className={ styles.list }>
        {
            reviews.map(( review ) => (
                <li>
                    <Review review={ review } />
                </li>
            ))
        }
    </ul>
)