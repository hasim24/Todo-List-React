import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    tasks: [],
    completedTasks: []
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask(state, action) {
            const newTask = action.payload;
            state.tasks.push(newTask);
        },
        deleteTask(state, action) {
            const deleteIndex = action.payload;
            state.completedTasks = state.completedTasks.filter((_, index) => index !== deleteIndex);
        },
        finishedTask(state, action) {
            const index = action.payload;
            const finishedTask = state.tasks[index];
            state.tasks = state.tasks.filter((_, i) => i !== index);
            state.completedTasks.push(finishedTask);
        },
        taskUp(state, action){
            const index = action.payload;
            const taskUp = [...state.tasks]
            if(index > 0){
            [taskUp[index], taskUp[index - 1]] = [taskUp[index - 1], taskUp[index]];
            state.tasks = taskUp
            }
        },
        taskDown(state, action){
            const index = action.payload;
            const taskDown = [...state.tasks]
            if(index < state.tasks.length - 1){
            [taskDown[index], taskDown[index + 1]] = [taskDown[index + 1], taskDown[index]];
            state.tasks = taskDown
            }
        }
    }
});

export const { addTask, deleteTask, finishedTask, taskUp, taskDown } = taskSlice.actions;
export default taskSlice.reducer;

export const tasksSelector = (state) => state.tasks.tasks;
export const completedTasksSelector = (state) => state.tasks.completedTasks;
