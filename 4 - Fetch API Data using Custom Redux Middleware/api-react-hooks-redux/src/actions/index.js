
// importing the from the actions
import { FETCH_POSTS, SET_POSTS, API } from './types';


// we are defining the actyal action here
export function fetchPosts() {
    return apiAction({
        // getting data from backend
        url: 'https://jsonplaceholder.typicode.com/posts',
        onSuccess: setPosts,
        // error handler
        onFailure: () => console.log('Error while loading posts'),
        label: FETCH_POSTS
    });
}

export function setPosts(data) {
    return {
        type: SET_POSTS,
        payload: data
    };
}
                          // Default method,
function apiAction({url,  method = 'GET', data = null, onSuccess = () => { }, 
                    onFailure = () => { }, label}) {

                    return {
                        type: API,
                        payload: {
                            url,
                            method,
                            data,
                            onSuccess,
                            onFailure,
                            label
                        }
                    };







}
