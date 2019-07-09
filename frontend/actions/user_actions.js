import {fetchUsers} from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

export const fetchAllUsers = () => {
    fetchUsers.then(users => dispatchEvent(receiveUsers(users)))
}