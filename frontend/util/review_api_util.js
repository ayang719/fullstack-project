export const fetchReviews = businessId => (
    $.ajax({
        method: "GET",
        url: `api/businesses/${businessId}/reviews`
    })
)

// export const fetchReview = id => (
//     $.ajax({
//         method: "GET",
//         url: `api/businesses`
//     })
// )

export const createReview = review => (
    $.ajax({
        method: "POST",
        url: `api/businesses/${review.business_id}/reviews`,
        data: {review}
    })
)