import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-ff179.firebaseio.com/'
});

export default instance;