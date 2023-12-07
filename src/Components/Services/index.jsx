import axios from 'axios';


export const searchRecords = () => {
    return axios.get("https://dummyjson.com/products")
};
