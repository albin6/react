import { createStore } from "redux";

const initialState = {
  todos: [],
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo != action.payload),
      };
    default:
      return state;
  }
};

function addItem(item) {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
}

function removeItem(item) {
  return {
    type: "REMOVE_ITEM",
    payload: item,
  };
}

const store = createStore(toDoReducer);

const unsubscribe = store.subscribe(() => console.log(store.getState().todos));

console.log(store.getState().todos);

store.dispatch({
  type: "ADD_ITEM",
  payload: "Item One",
});

store.dispatch(addItem("Item Two"));
store.dispatch(addItem("Item Three"));

// console.log(store.getState().todos);

store.dispatch(removeItem("Item Two"));

// console.log(store.getState().todos);
unsubscribe(); // wont made any console statements after the unsibscribe

store.dispatch(addItem("Item Four"));

console.log(store.getState().todos);

export default store;
