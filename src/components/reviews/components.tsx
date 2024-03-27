import { FC } from "react";
import { Review } from "../review/component";
import { ReviewInterface } from "../../models/review";

interface Props {
    reviews: ReviewInterface[];
}

export const Reviews: FC<Props> = ( { reviews }) => (
    <div>
        <h3>Отзывы</h3>
        <ul>
            <li>
                {
                    reviews.map(( review ) => (
                        <Review review={ review } />
                    ))
                }
                
            </li>
        </ul>
    </div>
)