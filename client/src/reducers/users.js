export default (users = [], action) => {
    switch(action.type) {
        case 'USER_FETCH_ALL':
            return action.payload;
        case 'USER_CREATE':
            return [...users, action.payload];
        default:
            return users;
    }
}