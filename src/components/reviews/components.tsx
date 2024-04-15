import { FC } from "react";
import { Review } from "../review/component";
import styles from "./styles.module.scss";

interface Props {
    reviewIds: string[];
}

export const Reviews: FC<Props> = ( { reviewIds }) => {
    
    return (    
        <ul className={ styles.list }>
            {
                reviewIds.map(( reviewId ) => (
                    <li>
                        <Review reviewId={ reviewId } />
                    </li>
                ))
            }
        </ul>
    )
}