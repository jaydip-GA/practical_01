import { getData } from "../Service/service"
import * as types from './ActionType';



const GETALLPAGEDATA = data => ({
    type: types.GET_ALL_DATA,
    payload: data
})


export const getAllData = page => {
    return async (dispatch) => {
        await getData(page).then(res => {
            const response = res?.data?.hits;
            dispatch(GETALLPAGEDATA(response))
        })
    }
}