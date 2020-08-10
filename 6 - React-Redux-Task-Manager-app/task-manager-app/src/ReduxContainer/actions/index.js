
// import the Constants TYPES
import { EDIT_TASK } from "./types";
import { CREATE_TASK } from "./types";
import { REMOVE_TASK } from "./types";
import uuid from "react-uuid";

// This is the Action file
// we are creating our first actions creator for the - EDIT_TASK - CONSTANTS VARIABLE
export const editTask = (id, params = {}) => {
    return {
        type: EDIT_TASK,
        payload: {
            id,
            params,
        },
    };        
};

// we are creating our SECOND actions creator for the - CREATE_TASK - CONSTANTS VARIABLE
export const createTask = ({ title, description }) => {
    return {
        type: CREATE_TASK,
        payload: {
            id: uuid(),
            title,
            description,
            status: "UnStarted",
        }
    }
}

// we are creating our THIRD actions creator for the - REMOVE_TASK - CONSTANTS VARIABLE
export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        id,
    };
};