import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
function Addtsk() {
  const [taskname, setTaskname] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch({ type: 'ADD_TASK', payload: taskname });
    setTaskname('');
  };

  return (
    <div
      className='container mt-4 p-4'
      style={{ backgroundColor: 'white', borderRadius: '10px' }}
    >
      <h1>Add task here</h1>
      <div className='row justify-content-center'>
        <div className='col-md-6 p-2'>
          <input
            type='text'
            value={taskname}
            className='form-control w-75'
            style={{ display: 'inline' }}
            placeholder='Enter task name'
            onChange={(e) => {
              setTaskname(e.target.value);
            }}
          />
          <button className='btn btn-success ml-3' onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtsk;
