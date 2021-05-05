import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Todoitem({ task }) {
  const dispatch = useDispatch();
  const [showedit, setshowedit] = useState('none');
  const [newtask, setnewtask] = useState('');
  const deleteTask = (task) => {
    dispatch({ type: 'DELETE_TASK', payload: task });
  };

  const editTask = () => {
    setshowedit('inline');
  };

  const finalEdit = (task) => {
    dispatch({
      type: 'EDIT_TASK',
      payload: { oldtask: task, newtask: newtask },
    });
    setshowedit('none');
  };

  return (
    <div>
      <div className='container'>
        <div className='row justify-content-center p-3'>
          <div className='col-md-9'>
            <h3>{task}</h3>
          </div>

          <div className='col-md-1 '>
            <button onClick={editTask} className='btn btn-warning   '>
              Edit
            </button>
          </div>
          <div className='col-md-1'>
            <button
              onClick={() => deleteTask(task)}
              className='btn btn-danger ml-2'
            >
              delete
            </button>
          </div>

          <div className='container p-2'>
            <input
              type='text'
              value={newtask}
              onChange={(e) => {
                setnewtask(e.target.value);
              }}
              style={{ display: showedit }}
            />
            <button
              style={{ display: showedit }}
              className='btn btn-success m-1'
              onClick={() => {
                finalEdit(task);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Todoitem;
