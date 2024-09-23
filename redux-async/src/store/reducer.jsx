const initialState = {
  data: {},
  error: "",
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "set-data":
      return {
        ...state,
        data: action.payload,
      };
    case "set-error":
      return {
        ...state,
        error: action.payload,
      };
    case "set-loading":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

function setData(data) {
  return {
    type: "set-data",
    payload: data,
  };
}

function setError(err) {
  return {
    type: "set-error",
    payload: err,
  };
}

function setLoading(data) {
  return {
    type: "set-loading",
    payload: data,
  };
}

export { setData, setError, setLoading };

export default reducer;
