import React, {useState} from 'react';
import TasksList from "./TasksList";

const TASKS_STATUSES = ["UnStarted", "In Progress", "Completed"];

const TasksPage = (props) => {
    const [cardForm, showCardForm] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const toggleFormFunc = () => {
        showCardForm(!cardForm);
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const onCreateTask = (event) => {
        event.preventDefault();
        props.onCreateTask({
            title,
            description
        })
        resetForm();
    }

    // to reset the form input after creating a new task
    const resetForm = () => {
        setTitle("");
        setDescription("");
        showCardForm(false);
    }


    const renderTaskLists = () => {
        const { tasks } = props;
        return TASKS_STATUSES.map((status, id) => {
            const statusTasks = tasks.filter(task => task.status === status);
            return (
                <div className="col-md-3 mx-3 p-0 card" key={id}>
                    <TasksList 
                        key={status} 
                        status={status} 
                        tasks={statusTasks}
                        onStatusChange={props.onStatusChange}
                        onRemoveTask={props.onRemoveTask}
                    />
                </div>
            )
        })
    };


    return (
        <div>
            <div className="container my-5">
                <div className="jumbotron py-3">
                    {/* row section */}
                    <div className="row">
                        <div className="col-md-2">
                            <button className="btn btn-success m-3"
                              onClick={toggleFormFunc}
                            >+</button>
                        </div>
                        <div className="col-md-10">
                            <h2 className="display-6 text-center text-uppercase">
                                Task Manager
                            </h2>
                        </div>
                    </div>
                    {/* end of row section */}

                    {/* form input section */}
                    {cardForm && (
                        <form onSubmit={onCreateTask}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    title={title}
                                    onChange={handleChangeTitle}
                                    placeholder="Task Title"
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    text="text"
                                    className="form-control"
                                    description={description}
                                    onChange={handleChangeDescription}
                                    placeholder="Task Description"
                                >
                                </textarea>
                            </div>
                            <button type="submit" 
                            className="btn btn-primary">
                                Submit Task
                            </button>
                        </form>
                    )}
                    {/* end of form section */}
                </div>
            </div>

            {/* render tasks list section */}
            <div className="row d-flex justify-content-center 
                position-relative my-3 mx-0"
                style={{ background: "#e9ecef"}} >

                {renderTaskLists()}
            </div>

            {/* end of render tasks list section */}
        </div>
    );
}

export default TasksPage;
