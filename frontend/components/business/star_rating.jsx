import React from 'react';

export const starRating = (rating) => {
    const rate = Math.ceil(rating-0.25);
    const starCreate = () => {
        if(rating >= 1) {
            rating -= 1;
            return(
                <span className={`star-checked-${rate}`}>★</span>
            );
        }else if(rating <= 0) {
            rating -= 1;
            return(
                <span className={`star-unchecked`}>★</span>
                );
        }else if(rating < 1 && rating > 0.25) {
            rating -= 1;
            return(
                <span className={`star-half-checked-${rate}`}>★</span>
            )
        }
        return (
            <span className={`star-unchecked`}>★</span>
        );

    }

    return(
        <div>
            {starCreate(rating)}           
            {starCreate(rating)}        
            {starCreate(rating)}         
            {starCreate(rating)}
            {starCreate(rating)}
        </div>
    )

}
export const starRatingHead = (rating) => {
    const rate = Math.ceil(rating-0.25);
    const starCreate = () => {
        if(rating >= 1) {
            rating -= 1;
            return(
                <span className={`head-star-checked-${rate}`}>★</span>
            );
        }else if(rating <= 0) {
            rating -= 1;
            return(
                <span className={`head-star-unchecked`}>★</span>
                );
        }else if(rating < 1 && rating > 0.25) {
            rating -= 1;
            return(
                <span className={`head-star-half-checked-${rate}`}>★</span>
            )
        }
        return (
            <span className={`head-star-unchecked`}>★</span>
        );

    }

    return(
        <div>
            {starCreate(rating)}           
            {starCreate(rating)}        
            {starCreate(rating)}         
            {starCreate(rating)}
            {starCreate(rating)}
        </div>
    )

}

