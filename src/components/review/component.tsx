import { FC } from "react";
import { ReviewInterface } from "../../models/review";

interface Props {
    review: ReviewInterface;
}

export const Review: FC<Props> = ({ review }) => (
    <div>
        { review.text }
    </div>
)