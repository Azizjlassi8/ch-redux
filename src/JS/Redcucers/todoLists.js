// 1 import

import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionsTypes/todoLists";

// 2 initialState
const initialState = {
    ListeTasks:[
        {id: Math.random(), text:"task1", isDone: false},
        {id: Math.random(), text:"task2", isDone: false},
    ],
    toggle: false,
};

// 3 pure function

const listReducer= (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TASK:
            return{...state , ListeTasks: [...state.ListeTasks, payload]};
        case DELETE_TASK:
            return {
                ...state,
                 ListeTasks: state.ListeTasks.filter((el) => el.id !== payload),
            };
        case DONE_TASK: 
            return {...state, ListeTasks: state.ListeTasks.map(el => el.id === payload ? { ...el, isDone: !el.isDone } : el
                ),
            };
        case EDIT_TASK:
            return {...state, ListeTasks: state.ListeTasks.map(el => el.id === payload.id ? {...el , text: payload.newTask} : el
                ),
            };

        default:
            return state;
    }
}; 

export default listReducer;