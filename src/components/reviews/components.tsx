import { FC } from "react";
import { Review } from "../review/component";
import { ReviewInterface } from "../../models/review";

interface Props {
    reviews: ReviewInterface[];
}

export const Reviews: FC<Props> = ( { reviews }) => (
    <ul>
        <li>
            {
                reviews.map(( review ) => (
                    <Review review={ review } />
                ))
            }
            
        </li>
    </ul>
)