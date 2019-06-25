import axios from 'axios'
import { RECEIVE_STATUSES } from '../../constants';

const receiveStatuses = (statuses) => ({
    type: RECEIVE_STATUSES,
    statuses,
});


export const fetchStatuses = () => dispatch =>
    axios.get(`http://localhost:8000/statuses`)
        .then(res => res.data)
        .then(statuses => {
            // console.log(statuses ,'SOY STATUSES EN EL ACTION DE FETCHSTATUSES')
            dispatch(receiveStatuses(statuses))
        });

