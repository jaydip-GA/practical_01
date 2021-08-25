import axios from "axios";


const { REACT_APP_BASE_URL } = process.env;



export const getData = page => {

    const URL = `${REACT_APP_BASE_URL}search_by_date?tags=story&page=${page}`;
    return axios.get(URL);
}