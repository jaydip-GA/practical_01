import * as types from './ActionType';
const ini = {
    data: []
}

const Reducer = (state = ini, action) => {
    switch (action.type) {
        case types.GET_ALL_DATA:
            return {
                ...state,
                data: state?.data.concat(action.payload)
            }
        default:
            return { ...state }
    }

}


export default Reducer;