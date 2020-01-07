import axios from 'axios';

export const getPros = (url) => axios.get( url ).then(function (res) {
        console.log(res.data);
        return res.data;
    }).catch(function (error) {
        console.log(error)
});

export const npmDependencies = () => axios.get('/npm.json').then(res => res.data).catch(err => console.log(err));

export const weibo = () => axios.get('/weibo.json').then(res => res.data).catch(err => console.log(err));