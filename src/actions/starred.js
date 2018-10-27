import * as actionTypes from '../constants';
import axios from 'axios';
import {apiURL} from '../etc/api';

export const getUserStarred = (userName) => {
    return (dispatch) => {
        axios.get(`${apiURL}/users/${userName}/starred`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: actionTypes.GET_USER_STARRED,
                payload: res.data
            })
        })
    }
}