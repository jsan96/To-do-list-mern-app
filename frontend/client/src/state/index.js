import { createSlice  } from "@reduxjs/toolkit";

const intialState = {
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState, 
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null; 
        },
        setToDos: (state, action) => {
            state.toDos = action.payload.toDos;
        },
        setToDo: (state, action) => {
            const updatedToDos = state.toDo.map((toDo) => {
                if (toDo._id === action.payload.toDo_id) return action.payload.ToDo;
                return ToDo;
            });
            state.ToDos = updatedToDos; 
        }
    }
})

export const { setLogin, setLogout, setToDos, setToDo } = 
    authSlice.action
export default authSlice.reducer;