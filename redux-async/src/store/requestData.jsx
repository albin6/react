import axios from "axios";
import { setData, setError, setLoading } from "./reducer";

function requestData(dispatch) {
  dispatch(setLoading(true));
  axios
    .get("https://jsonplaceholder.typicode.com/poss/1")
    .then((response) => {
      dispatch(setLoading(false));
      dispatch(setData(response.data));
    })
    .catch(() => {
      dispatch(setLoading(false));
      dispatch(setError("An error occured"));
    });
}

export default requestData;
