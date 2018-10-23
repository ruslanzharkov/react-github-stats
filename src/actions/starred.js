import * as actionTypes from '../constants';
import axios from 'axios';
import {apiURL} from '../etc/api';

export const getUserStarred = (userName) => {
        axios.get(`${apiURL}/users/${userName}/starred`)
            .then(res => {
                console.log(res.data)
            //    return {
            //         type: actionTypes.GET_USER_STARRED,
            //         userStarred: res.data
            //    } 
            })
    
}