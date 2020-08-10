import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import TasksPage from "./components/TasksPage";
import { editTask, createTask, removeTask } from "./ReduxContainer/actions";


function App(props) {

  // we are dispatching the actions creator function in an onStatusChange function
  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, { status }));
  }

  // we are dispatching the actions creator function in onCreateTask function
  const onCreateTask = ({ title, description }) => {
    props.dispatch(createTask({title, description}));
  }

  // we are dispatching the actions creator function in onRemoveTask function
  const onRemoveTask = (id) => {
    props.dispatch(removeTask(id));
  }

  return (
    <Fragment>
      {/* we are passing the reducer method with the state to TasksPage component */}
      <TasksPage tasks={props.tasks} 
      onStatusChange={onStatusChange}
      onCreateTask={onCreateTask}
      onRemoveTask={onRemoveTask} 
      />
    </Fragment>
  );
}


const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  };
};


export default connect(mapStateToProps)(App);
