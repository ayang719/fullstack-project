import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const CREATE_REVIEW = 'CREATE_REVIEW';

const recieveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const createReview = review => ({
    type: CREATE_REVIEW,
    review
})

export const fetchReviews = (businessId) => dispatch => (
    ReviewAPIUtil.fetchReviews(businessId)
        .then( reviews => dispatch(recieveReviews(reviews)))
)

export const fetchReview = review => dispatch => (
    ReviewAPIUtil.createReview(review)
        .then( review => dispatch(createReview(review)))
)