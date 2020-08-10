import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const TASKS_STATUSES = ["UnStarted", "In Progress", "Completed"];

const Task = (props) => {

    function getOnStatusChangeFunc(event) {
        props.onStatusChange(props.task.id, event.target.value);
    }

    function removeTaskFunc() {
        props.onRemoveTask(props.task.id);
    }

    return (
        <Fragment>
            <form onChange={getOnStatusChangeFunc}>
                <select defaultValue={props.task.status}>
                    {TASKS_STATUSES.map(status => (
                        <option value={status} key={status}>{status}</option>
                    ))}
                </select>
            </form>
            <div>
                <h2 className="card-title mt-3 text-uppercase px-2" 
                style={{ fontSize: "1.4rem", color: "#3a4" }}>
                    {props.task.title}
                </h2>
                <p className="card-text mb-3 text-muted font-weight-bold px-2">
                    {props.task.description}
                </p>
            </div>
            <FontAwesomeIcon icon={faTrash} 
                className="float-right m-2 " 
                style={{ color: "tomato", cursor: "pointer"}}
                onClick={() => removeTaskFunc(props.task.id)}
            />
        </Fragment>
    );
}

export default Task;
