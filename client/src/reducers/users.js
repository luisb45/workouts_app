export default (users = [], action) => {
    switch(action.type) {
        case 'USER_UPDATE':
            return users.map((user) => user._id === action.payload._id ? action.payload : user);
        case 'USER_FETCH_ALL':
            return action.payload;
        case 'USER_CREATE':
            return [...users, action.payload];
        default:
            return users;
    }
}