import { FC } from "react";
import { Review, ReviewItem } from "../review/component";

interface ReviewsProps {
    reviews: ReviewItem[];
}

export const Reviews: FC<ReviewsProps> = ( { reviews }) => (
    <div>
        <h3>Отзывы</h3>
        <ul>
            <li>
                {
                    reviews.map((item) => (
                        <Review review={ item } />
                    ))
                }
                
            </li>
        </ul>
    </div>
)