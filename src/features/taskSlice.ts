import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import AddTask from '../components/AddTask';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface TaskState {
    tasks: Task[];
    loading: boolean;
}
const initialState: TaskState = {
    tasks: [],
    loading: false,
};

export const fetchTasks =createAsyncThunk('tasks/fetchTasks',
    async()=>{
        const response =await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    }
);

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const newTask = {
                id: Date.now(), title: action.payload,
                completed: false
            };
            state.tasks.push(newTask);
        },
        deleteTask:(state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleTaskCompletion:(state, action: PayloadAction<number>) => {
          const task =  state.tasks.find(task => task.id === action.payload);
          if(task){
            task.completed =! task.completed;
          }
        }
        },
        extraReducers:(builder)=> {
            builder.addCase(fetchTasks.pending,
                (state)=>{
                    state.loading=true;
                }
            );
            builder.addCase(fetchTasks.fulfilled,(state,action :
                PayloadAction<Task[]>) => {
                    state.loading =false;
                    state.tasks=action.payload;
           } );
        },
}
);

export const {addTask,deleteTask,toggleTaskCompletion}=taskSlice.actions;
export default taskSlice.reducer;