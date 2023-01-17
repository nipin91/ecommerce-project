import axios from 'axios';



export const getUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users?_start=0&_limit=1').then(res => res.data[0]);
}