import axios from 'axios';

export const getPros = (url) => axios.get(
    url
    ).then(function (res) {
        console.log(res.data);
        return res.data;
    }).catch(function (error) {
        console.log(error)
});