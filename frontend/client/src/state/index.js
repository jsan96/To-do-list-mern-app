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
        setTasks: (state, action) => {
            state.tasks = action.payload.tasks;
        },
        setTask: (state, action) => {
            const updatedTasks = state.tasks.map((task) => {
                if (task._id === action.payload.task_id) return action.payload.task;
                return task;
            });
            state.tasks = updatedTasks; 
        }
    }
})

export const { setLogin, setLogout, setTasks, setTask } = authSlice.action