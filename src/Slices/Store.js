import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from './Slice';

export const store = configureStore({
    devTools:true,
    reducer: {
        tasks : tasksReducer
    }
})