
import { EDIT_TASK } from "../actions/types";
import { CREATE_TASK } from "../actions/types";
import { REMOVE_TASK } from "../actions/types";

// This is the reducer file. All the code in here a called a reducer
// first step, we create the redux state
const initialState = [
    // {
    //     id: 1,
    //     title: "Learn HTML5",
    //     description: "Let's learn the foundation of web development",
    //     status: "In Progress",
    // },
    // {
    //     id: 2,
    //     title: "Learn CSS3",
    //     description: "Learn CSS today today style a websites or applications",
    //     status: "Completed",
    // },
    // {
    //     id: 3,
    //     title: "Learn Sass",
    //     description: "Let's learn a CSS Framework Today",
    //     status: "UnStarted",
    // },
    // {
    //     id: 4,
    //     title: "Learn JavaScript",
    //     description: "Learn JavaScript today to give an interaction to your websites",
    //     status: "In Completed",
    // },
    // {
    //     id: 5,
    //     title: "Learn ReactJS",
    //     description: "Let's learn JavaScript Framework Today",
    //     status: "In Progress",
    // },
    // {
    //     id: 6,
    //     title: "Learn Redux",
    //     description: "Let's learn State Management Today",
    //     status: "UnStarted",
    // },
    // {
    //     id: 7,
    //     title: "Learn NodeJS",
    //     description: "Let's learn a Full Stack JavaScript Framework Today",
    //     status: "In Progress",
    // },
    // {
    //     id: 8,
    //     title: "Learn ExpressJS",
    //     description: "Let's learn JavaScript Framework Today",
    //     status: "UnStarted",
    // },
    // {
    //     id: 9,
    //     title: "Learn SQL",
    //     description: "Let's learn a Database language Today",
    //     status: "Completed",
    // },
    // {
    //     id: 10,
    //     title: "Learn Mongodb",
    //     description: "Learn to build a full Stack application today",
    //     status: "Completed",
    // }
    
]


// second step, we create a reducer function
// export const tasks = (state = initialState, action ) => {

// }

// second step, we create a reducer function
const tasks = (state = {tasks: initialState}, action ) => {

    /* we are checking to see if the ACTION CONSTANTS VARIABLE 
    THAT WE CREATED IN THE type.js file is equal to the one that is 
    assigned in the Action creator function. And if they are equal, than we run this code*/

    /* ************************************************************************
                        if else version
    ***************************************************************************/
    // if (action.type === EDIT_TASK) {
    //     const { payload } = action;
    //     return {
    //         tasks: state.tasks.map(task => {
    //             if(task.id === payload.id) {
    //                 return Object.assign({}, task, payload.params);
    //             }
    //             return task;
    //         })
    //     }
    // }


    /* ************************************************************************
         switch version - this is the common method used every where
    ***************************************************************************/
    const { payload } = action;
    switch (action.type) {
        case EDIT_TASK: {
            return {
                tasks: state.tasks.map((task) => {
                    if (task.id === payload.id) {
                        return Object.assign({}, task, payload.params);
                    }
                    return task;
                }),
            };
        }
        case CREATE_TASK: {
            return {
                tasks: state.tasks.concat(action.payload),
            };
        }
        case REMOVE_TASK: {
            return {
                tasks: state.tasks.filter(task => task.id !== action.id)
            }
        }
        default:
           return state;
    }

};


export default tasks;