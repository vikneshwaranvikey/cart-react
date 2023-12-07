
import { setData } from '../../Redux/userReducer';
import { searchRecords } from "../Services/index"

export const fetchApi = (data) => {

    return async (dispatch) => {
        try {
            const res = await searchRecords(data)
            console.log("DataFetch", res.data);
            if (res.status === 200) {
                await dispatch(setData(res.data))
            }
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}