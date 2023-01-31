import * as api from '../apiUser'

export const getUsers = () => async(dispatch) => {
    try {
        const {data} = await api.fetchUsers();

        dispatch({type: 'USER_FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
};

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user);

        dispatch({ type: 'USER_CREATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}; 