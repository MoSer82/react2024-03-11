import { FC } from "react";

export interface ReviewItem {
    id: string;
    user: string;
    text: string;
    rating: number;
}

interface ReviewProps {
    review: ReviewItem;
}

export const Review: FC<ReviewProps> = ({ review }) => (
    <div>
        { review.text }
    </div>
)